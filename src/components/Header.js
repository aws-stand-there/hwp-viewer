import { Menu } from 'antd'
import React from 'react'

function Header() {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">HWP 뷰어</Menu.Item>
    </Menu>
  )
}

export default Header
