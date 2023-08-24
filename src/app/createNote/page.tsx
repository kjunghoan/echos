"use client"
import "../../styles/globals.scss"
import { Button, Form, Input, } from "antd"
import FormItem from "antd/es/form/FormItem"
import { createNewNote } from "../../components/logic/modules";
import NavBar from "../../components/Navbar";

type Formdata = {
  userName: string;
  title: string;
  body: string;
}


const getCurrentPosition = ({ userName, title, body }: Formdata) => {

  const geoLSuccess = ({ coords }: any) => {
    const longitude: number = coords.longitude;
    const latitude: number = coords.latitude;
    createNewNote(
      title,
      body,
      // userName,
      longitude,
      latitude);
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

export default function CreateNote() {

  //inputs

  const validateForm = () => {

  }
  const onFinish = (e: any) => {
    getCurrentPosition(e)
  }
  return (<div>
    <NavBar />
    <Form
      name="newNote"
      layout="vertical"
      onFinish={onFinish}
    >
      <Form.Item
        label="User Name"
        name="userName"
        initialValue={"anonymous"}
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