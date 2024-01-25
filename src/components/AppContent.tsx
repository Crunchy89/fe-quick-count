import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CContainer } from '@coreui/react'
import Dashboard from 'src/pages/Dashboard'

// routes config
// import routes from 'src/routes'

const AppContent = () => {
  return (
    <CContainer lg>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
        </Routes>
    </CContainer>
  )
}

export default React.memo(AppContent)
