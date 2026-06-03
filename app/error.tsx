"use client";

import { useEffect } from "react";
import Button from "@/components/Button";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-red-900/20 border border-red-500/50 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
        </div>
        <h1 className="text-4xl font-bold">Something went wrong</h1>
        <p className="text-gray-400">
          We encountered an unexpected error. Please try again or contact support if
          the problem persists.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset}>Try Again</Button>
          <Button href="/" variant="outline">
            Go Home
          </Button>
        </div>
      </div>
    </div>
  );
}
