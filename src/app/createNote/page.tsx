"use client"
import "../../styles/globals.scss"
import { Button, DatePicker, Form, Input, Switch } from "antd"
import FormItem from "antd/es/form/FormItem"
import { createContext, useState } from 'react';

// async function createNewNote(data: FormData) {
//   "use server"
//   console.dir(data)
//   console.log("hello")
// }

const PageContext = createContext("")
export default function CreateNote() {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  // const validateForm = () => {

  // }
  return (<div className="">
    <h1>this is the endPoint that the user will get directed to to create a new note</h1>
    <Form
      name="newNote"
      layout="vertical"
    // validateMessages={validateForm}
    >
      <Form.Item label="Title">
        <input
          name="title"
          type="text"
          placeholder="Title"
          required
        />
      </Form.Item>



      <Form.Item label="Body">
        <Input.TextArea
          name="body"
          placeholder="Title"
          required
        />
      </Form.Item>



      <Form.Item
        label="autoDelete"
      >
        <Switch
          onChange={(checked: boolean) => {
            setComponentDisabled(checked)
          }}
        />
      </Form.Item>



      <Form.Item

      >
        <DatePicker showTime format={"YYYY-MM-DD HH:mm:ss"} disabled={!componentDisabled} />
      </Form.Item>



      <FormItem>
        <Button type="primary">Sumbit</Button>
      </FormItem>
    </Form>
  </div>)
}