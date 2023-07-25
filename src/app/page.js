import { auth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = auth();

  return (
    <div className="container mx-auto">
      <h1>User ID: {userId}</h1>
    </div>
  );
}
