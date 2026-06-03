/**
 * Run this once to set up the Vercel Postgres database.
 * Usage: npx tsx scripts/setup-db.ts
 *
 * Requires POSTGRES_URL in your environment (set via Vercel dashboard or .env.local).
 */

import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";

async function setupDatabase() {
  console.log("Setting up database...");

  // Admin users table
  await sql`
    CREATE TABLE IF NOT EXISTS admin_users (
      id            SERIAL PRIMARY KEY,
      name          VARCHAR(100)        NOT NULL,
      email         VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255)        NOT NULL,
      role          VARCHAR(20)         NOT NULL DEFAULT 'editor',
      created_at    TIMESTAMPTZ         NOT NULL DEFAULT NOW()
    )
  `;
  console.log("✓ admin_users table ready");

  // Blog posts table
  await sql`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id          SERIAL PRIMARY KEY,
      title       VARCHAR(200)  NOT NULL,
      slug        VARCHAR(200)  NOT NULL UNIQUE,
      excerpt     TEXT          NOT NULL,
      content     TEXT          NOT NULL,
      category    VARCHAR(50)   NOT NULL DEFAULT 'AI',
      image       VARCHAR(50)   NOT NULL DEFAULT '🤖',
      read_time   VARCHAR(20)   NOT NULL DEFAULT '5 min read',
      author      VARCHAR(100)  NOT NULL DEFAULT 'WGL Team',
      published   BOOLEAN       NOT NULL DEFAULT false,
      created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
      updated_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW()
    )
  `;
  console.log("✓ blog_posts table ready");

  // Contact messages table
  await sql`
    CREATE TABLE IF NOT EXISTS contact_messages (
      id          SERIAL PRIMARY KEY,
      name        VARCHAR(100)  NOT NULL,
      company     VARCHAR(100),
      email       VARCHAR(255)  NOT NULL,
      phone       VARCHAR(30),
      service     VARCHAR(30)   NOT NULL,
      message     TEXT          NOT NULL,
      read        BOOLEAN       NOT NULL DEFAULT false,
      created_at  TIMESTAMPTZ   NOT NULL DEFAULT NOW()
    )
  `;
  console.log("✓ contact_messages table ready");

  // Create default admin user if none exists
  const existing = await sql`SELECT id FROM admin_users LIMIT 1`;
  if (existing.rows.length === 0) {
    const defaultEmail    = process.env.ADMIN_EMAIL    ?? "admin@westerngatelabs.com";
    const defaultPassword = process.env.ADMIN_PASSWORD ?? "ChangeMe123!";
    const hash            = await bcrypt.hash(defaultPassword, 12);

    await sql`
      INSERT INTO admin_users (name, email, password_hash, role)
      VALUES ('Admin', ${defaultEmail}, ${hash}, 'admin')
    `;
    console.log(`✓ Admin user created: ${defaultEmail}`);
    console.log(`  ⚠  Change the password immediately after first login`);
  } else {
    console.log("✓ Admin user already exists");
  }

  console.log("\nDatabase setup complete.");
}

setupDatabase().catch((err) => {
  console.error("Setup failed:", err);
  process.exit(1);
});
