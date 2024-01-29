"client component"

import { Typography } from "antd";
import MessagesListEntry from "./MessagesListEntry";
import { getPosts } from "./logic/modules";
import { useEffect, useState } from "react";


//can ignore for now just setting up for growth
type MessagesListProps = {

}

interface Posts {
  id: string;
  title: string;
  body: string;
  updatedAt: Date;
  // createdAt: Date;
}

const getLocalMemos = (cb: Function) => {

  const geoLSuccess = async ({ coords }: any) => {
    const longitude: number = coords.longitude;
    const latitude: number = coords.latitude;
    const postsArray: Posts[] = await getPosts(longitude, latitude);
    console.log(postsArray)
    cb(postsArray)
    return postsArray
  };
  const geoLError = (error: any) => {
    if (error.code === 1) {
      alert("Please allow the site to read your location");
    } else {
      alert("Your location is currently unavailable");
    }
  };
  const geoLOptions = {
    enableHighAccuracy: true,
  };
  navigator.geolocation.getCurrentPosition(geoLSuccess, geoLError, geoLOptions)
};

export default function MessagesList(props: MessagesListProps) {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    getLocalMemos(setPosts)
    console.log("The Posts Array is ", posts)
  }, [])


  const mapPosts = () => {
    while (posts === undefined) {
      return <h1>This is a place holder that will eventually be replaced with a loading bar / icon</h1>
    }
    if (posts.length !== 0) {
      return posts.map((post: Posts) => {
        return (
          <MessagesListEntry
            key={post.id}
            title={post.title}
            body={post.body}
            updatedAt={post.updatedAt}
          />
        )
      })
    } else {
      return <Typography.Title> No Notes in your area (This will also be replaced with an image that I have yet to make)</Typography.Title>
    }
  }

  return (
    <div className="MessagesList">
      {mapPosts()}
    </div>
  )
};