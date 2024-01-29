import { Card } from "antd";


type MessagesListEntryProps = {
  key: string;
  title: string;
  body: string;
  updatedAt: Date;
}
export default function MessagesListEntry(props: MessagesListEntryProps) {
  return (
    <Card
      title={props.title}
      bordered={true}
    >
      <p>{props.body}</p>
      <small>{String(props.updatedAt)}</small>
    </Card>
  )
}