"client component"

import { Typography } from "antd";
import MessagsListEntry from "./MessagesListEntry";
import { getPosts } from "./logic/modules";
import { useEffect, useState } from "react";


//can ignoree for now just setting up for growth
type MessagesListProps = {

}

type Posts = {
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
      alert("Please allow the site to read your location first");
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
    console.log(12)
    while (posts === undefined) {
      return <h1>this is the placeholder</h1>
    }
    if (posts.length !== 0) {
      return posts.map((post: Posts) => {
        return (
          <MessagsListEntry
            key={post.id}
            title={post.title}
            body={post.body}
            updatedAt={post.updatedAt}
          />
        )
      })
    } else {
      return <Typography.Title> No Notes in your</Typography.Title>
    }
  }

  return (
    <div className="MessagesList">
      {mapPosts()}
    </div>
  )
};