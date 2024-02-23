import { Outlet } from 'react-router-dom'
import AppHeader from 'src/layout/AppHeader'
import { CContainer } from '@coreui/react'
import AppSidebar from "src/layout/AppSidebar"


const DashboardLayout = () => {
  return (
    <>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
        <CContainer lg>
          <Outlet/>
        </CContainer>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
