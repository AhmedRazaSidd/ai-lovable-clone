import prisma from "@/lib/db";

export default async function Home() {
  const users = await prisma.post.findMany();
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {JSON.stringify(users, null, 2)}
    </div>
  );
}
