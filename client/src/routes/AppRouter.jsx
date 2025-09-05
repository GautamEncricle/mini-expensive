import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Group from '../pages/Group'
import Summary from '../pages/Summary'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/groups" element={<Group />} />
      <Route path="/summary:groupId" element={<Summary />} />
    </Routes>
  )
}

export default AppRouter
