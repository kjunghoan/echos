"server component"
import { Menu, Typography } from "antd";
import Link from "next/link";
const { Title } = Typography;
export default function NavBar() {
  const appName: string = "Regional Messages(working title)"
  const menuListItems = [
    {
      label: (<Typography.Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"><img width={70} src={"https://cdn.discordapp.com/attachments/1119419112486096957/1135677132362748004/Picsart_23-07-31_16-55-19-162.png"} /></Typography.Link>),
      key: 'theSong'
    },
    {
      label: (<Link href="/" ><Title>{appName}</Title></Link>),
      key: 'logo'
    },
    {
      label: (<Link href="/createNote"><Title level={3}>Create New Note</Title></Link>),
      key: 'newNote'
    }
  ]

  return (
    <nav className="nav">
      <Menu mode="horizontal" items={menuListItems} />
    </nav>
  )
}