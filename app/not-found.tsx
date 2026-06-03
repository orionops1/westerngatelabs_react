import Button from "@/components/Button";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="flex justify-center">
          <div className="text-6xl font-bold bg-gradient-to-r from-electric-blue to-electric-purple bg-clip-text text-transparent">
            404
          </div>
        </div>
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p className="text-gray-400">
          The page you're looking for doesn't exist. It might have been moved or
          removed.
        </p>
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  );
}
