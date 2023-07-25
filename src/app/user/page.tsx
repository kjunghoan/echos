import { prisma } from "@/db";
import Link from "next/link";


type loggedIn = {
  id: string;
  title: string;
  body: string;
  longitude: number;
  latitude: number;
  views: number;
  createdAt: Date;
  updatedAt: Date;
  autoDelete: boolean;
  autoDeleteTime: Date | null;
}

function getMyNotes(email: string): Promise<loggedIn[]> {
  return prisma.messages.findMany({
    select: {
      id: true,
      title: true,
      body: true,

      longitude: true,
      latitude: true,

      views: true,

      createdAt: true,
      updatedAt: true,

      autoDelete: true,
      autoDeleteTime: true
    },
    where: {
      user: {
        email
      }
    }
  });
};
export default async function Users() {
  const email = "a";
  // const myNotes = await getMyNotes(email);
  return (<>
    <header>
      <h1>This is the user's Home Page</h1>
      <Link href="/">Home</Link>
    </header>
    <article>

    </article>
  </>);
};