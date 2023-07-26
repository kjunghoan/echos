"use client"
import "../globals.scss"
import { Button, Form, Input, } from "antd"
import FormItem from "antd/es/form/FormItem"
import { createNewNote } from "./logic";
export default function CreateNote() {
  //geolocation stuff

  //inputs
  let long: number, lat: number;
  let geoLSuccess = ({ coords }: any) => {
    long = coords.longitude;
    lat = coords.latitude;
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
  window.navigator.geolocation.getCurrentPosition(geoLSuccess, geoLError, geoLOptions);

  const validateForm = () => {

  }
  const onFinish = (e: any) => {
    const { userName, title, body } = e;
    createNewNote(title, body, long, lat, userName);
  }
  return (<div>
    <h1>this is the endPoint that the user will get directed to to create a new note</h1>
    <Form
      name="newNote"
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="User Name"
        name="userName"
        initialValue={""}
      >
        <input
          required
          type="text"
          placeholder="userName"
        />
      </Form.Item>
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
      {/* <Form.Item
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
      </Form.Item> */}
      <FormItem>
        <Button
          type="primary"
          htmlType="submit"
        >Sumbit</Button>
      </FormItem>
    </Form>
  </div>)
}