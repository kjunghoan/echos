"server component"
import { Menu, Typography } from "antd";
import Link from "next/link";
const { Title } = Typography;
export default function NavBar() {
  const appName: string = "Regional Messages(working title)"
  const menuListItems = [
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