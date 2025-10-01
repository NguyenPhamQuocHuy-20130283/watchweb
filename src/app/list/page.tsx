// template basic list page
import Image from "next/image";

export default function ListPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">List Page</h1>
      <div className="grid gap-4">
        <p>This is your new list page</p>
        <a 
          href="/home"
          className="text-blue-500 hover:underline"
        >
          ← Back to home
        </a>
      </div>
    </div>
  );
}