"use server";
import { prisma } from "../../db";

export const createNewNote = async (
  title: string,
  body: string,
  user: string,
  longitude: number,
  latitude: number
) => {
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
};
