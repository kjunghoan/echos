"use server";

export const createNewNote = async (
  data: FormData,
  long: number,
  lat: number
) => {
  console.log(data);
  const title = data.title;
  const body = data.body;
  const autoDelete = data.autoDelete;
  const longitude = long;
  const latitude = lat;

  console.log("hello");
};
