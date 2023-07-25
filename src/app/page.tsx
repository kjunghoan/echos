import { prisma } from "@/db";
import Link from "next/link";


export default async function Home() {
  const localMessage = await prisma.messages.findMany()
  return (<>
    <header>
      <h1>This is the Domain's home page </h1>
      <Link href="/user">My Profile</Link>
    </header>
    <article>
      <p>This is going to be the start of the body</p>

    </article>

  </>)
}