"use server";
import { prisma } from "@/db";

export async function createNewNote(
  title: string,
  body: string,
  user: string,
  longitude: number,
  latitude: number
) {
  const response = await prisma.messages.create({
    data: {
      user,
      title,
      body,
      longitude,
      latitude,
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

export async function getPosts(
  longitude: number,
  latitude: number
): Promise<unknown[]> {
  //this is === 1km
  // const range: number = 0.01506;
  const range: number = 360;

  //setting the ranges for longitude and latitude
  const longMax: number = longitude + range;
  const longMin: number = longitude - range;
  const latMax: number = latitude + range;
  const latMin: number = latitude - range;
  const variables = {
    range: range,
    longMax: longMax,
    longMin: longMin,
    latMax: latMax,
    latMin: latMin,
  };
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
    },
    select: {
      user: true,
      title: true,
      body: true,
      longitude: true,
      latitude: true,
    },
  });
  console.dir(variables);
  console.log(results);
  return results;
}
