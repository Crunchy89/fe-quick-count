import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import { useAtomValue, useAtom } from 'jotai'
import { sidebarShow, sidebarUnfoldable } from 'src/store'
import Sidebar from 'src/components/Sidebar'

const AppSidebar = () => {
  const [unfoldable,setUnfoldable] = useAtom(sidebarUnfoldable)
  const sidebar = useAtomValue(sidebarShow)

  const handleUnfoldable = (visible:boolean) =>{
    setUnfoldable(visible)
  }

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebar}
      onVisibleChange={(visible) => {
        handleUnfoldable(visible)
      }}
    >
      <CSidebarBrand className="d-none d-md-flex">
        <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <Sidebar/>
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={()=>handleUnfoldable(!unfoldable)}
      />
    </CSidebar>
  )
}

export default AppSidebar;
