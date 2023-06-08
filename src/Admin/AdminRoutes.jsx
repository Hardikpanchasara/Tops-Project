import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminMenu from './AdminMenu'

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<AdminMenu />} />
    </Routes>
  )
}

export default AdminRoutes