import { Menu } from "antd";
import Link from "next/link";

export default function NavBar() {
  const menuListItems = [
    {
      label: (<Link href="/">Home</Link>),
      key: 'home',
    },
    {
      label: (<Link href="/createNote">New Note</Link>),
      key: 'newNote'
    }
  ]

  return (
    <nav className="nav">
      <Menu mode="horizontal" items={menuListItems} />
    </nav>
  )
}