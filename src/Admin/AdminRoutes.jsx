import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminMenu from './AdminMenu'
import AdminDashboard from './AdminDashboard'
import AdminAllusers from './AdminAllusers'
import EditUserData from './EditUserData'

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<AdminMenu />} >
        <Route path="admindashboard" element={<AdminDashboard />} />
        <Route path="allusers" element={<AdminAllusers />} />
        <Route path="edituserdata/:id" element={<EditUserData />} />
      </Route>

    </Routes>
  )
}

export default AdminRoutes