import { Card } from "antd";


type MessagsListEntryProps = {
  key: string;
  title: string;
  body: string;
  updatedAt: Date;
}
export default function MessagsListEntry(props: MessagsListEntryProps) {
  return (
    <Card
      style={{

      }}
      title={props.title}
      bordered={true}
    >
      <p>{props.body}</p>
      <small>{props.updatedAt.toString()}</small>
    </Card>
  )
}