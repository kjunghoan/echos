"use server";
import { prisma } from "@/db";

export async function createNewNote(
  title: string,
  body: string,
  // user: string,
  longitude: number,
  latitude: number
): Promise<string> {
  const visible: boolean = true;
  const response = await prisma.messages.create({
    data: {
      title,
      body,
      longitude,
      latitude,
      // visible,
    },
    select: {
      title: true,
    },
  });
  if (!response) {
    alert(`Message could not be posted`);
  } else {
    console.dir(response);
  }
  return response.title;
}
type getPostsReturn = {
  id: string;
  title: string;
  body: string;
  updatedAt: Date;
}[];
export async function getPosts(
  longitude: number,
  latitude: number
): Promise<getPostsReturn> {
  //this is === 1km
  const range: number = 0.01506;
  // const range: number = 360;

  //setting the ranges for longitude and latitude
  const longMax: number = longitude + range;
  const longMin: number = longitude - range;
  const latMax: number = latitude + range;
  const latMin: number = latitude - range;

  // return await prisma.messages.findMany({
  const results = await prisma.messages.findMany({
    where: {
      longitude: {
        gte: longMin,
        lte: longMax,
      },
      latitude: {
        gte: latMin,
        lte: latMax,
      },
      // visible: true,
    },
    select: {
      id: true,
      title: true,
      body: true,
      // updatedAt: true,
    },
  });
  // console.dir(variables);
  // console.log(results);
  return results;
}
