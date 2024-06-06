import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarList from '../navbar/NavbarList'

export default function Layout() {
  return (
    <>
    <NavbarList/>
    <Outlet/>
    </>

    )
}
