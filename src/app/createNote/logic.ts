"use server";

import { prisma } from "../../db";

export const createNewNote = async (
  title: string,
  body: string,
  long: number,
  lat: number,
  user: string
) => {
  return prisma.messages.create({
    data: {
      title,
      body,
      longitude: long,
      latitude: lat,
      user,
    },
  });
};
