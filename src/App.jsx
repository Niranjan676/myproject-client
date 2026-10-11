import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Dashboard from './pages/Dashboard'
import SupplierMaster from './masters/SupplierMaster.jsx'

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/suppliermaster" element={<SupplierMaster />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
