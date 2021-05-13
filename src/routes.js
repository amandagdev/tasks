import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Task from './pages'

const appRoutes = () => (
  <>
    <Routes>
      <Route path="/" element={<Task />} />
    </Routes>
  </>
)

export default appRoutes
