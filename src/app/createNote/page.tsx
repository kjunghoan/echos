"use client"
import "../globals.scss"
import { Button, DatePicker, Form, Input, Switch } from "antd"
import FormItem from "antd/es/form/FormItem"
import { useState } from 'react';
import { createNewNote } from "./logic";
console.dir(window.GeolocationCoordinates.toString())
export default function CreateNote() {
  const [componentEnabled, setComponentEnabled] = useState<boolean>(true);


  //geolocation stuff

  //inputs
  let long: number, lat: number;
  let geoLSuccess = ({ coords }: any) => {
    long = coords.longitude;
    lat = coords.latitude;
    console.log(long);
    console.log(lat)
  }
  const geoLError = (error: any) => {
    if (error.code === 1) {
      alert("Please allow the site to read your location first");
    } else {
      alert("Your location is currently unavailable");
    }
  }
  const geoLOptions = {
    enableHighAccuracy: true
  }
  // output
  if (!navigator.geolocation) {
    throw new Error("No geolocation available")
  }
  navigator.geolocation.getCurrentPosition(geoLSuccess, geoLError, geoLOptions);
  //the edge case that the end user is running on html4 or less

  const validateForm = () => {

  }
  const onFinish = (e: any) => {
    console.dir(e);
    console.log(`THIS WORKEDDDDDDD WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO`);
    createNewNote(e, long, lat);
  }
  return (<div>
    <h1>this is the endPoint that the user will get directed to to create a new note</h1>
    <Form
      name="newNote"
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="Title"
        name="title"
        initialValue={""}
      >
        <input
          required
          type="text"
          placeholder="Title"
        />
      </Form.Item>
      <Form.Item
        label="Body"
        name="body"
        initialValue={""}
      >
        <Input.TextArea
          required
          placeholder="Title"
        />
      </Form.Item>
      <Form.Item
        label="Should this be deleted after a certain amount of time?"
        name="autoDelete"
        initialValue={false}
      >
        <Switch
          checked={componentEnabled}
          onChange={(checked: boolean) => {
            setComponentEnabled(checked)
          }}
        />
      </Form.Item>
      <Form.Item
        name="deletionDate"
      >
        <DatePicker showTime format={"YYYY-MM-DD HH:mm:ss"} disabled={!componentEnabled} />
      </Form.Item>
      <FormItem>
        <Button
          type="primary"
          htmlType="submit"
        >Sumbit</Button>
      </FormItem>
    </Form>
  </div>)
}