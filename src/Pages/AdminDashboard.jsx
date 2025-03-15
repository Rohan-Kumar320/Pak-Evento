import React from 'react'
import Dashboard from '../Components/AdminDashboard/Dashboard'
import { ThemeProvider } from '../Components/AdminDashboard/ThemeContext'

const AdminDashboard = () => {
  return (
    <>
    <ThemeProvider>
      <Dashboard/>
    </ThemeProvider>
    </>
  )
}

export default AdminDashboard