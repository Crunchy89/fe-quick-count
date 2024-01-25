import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
} from '@coreui/icons'
import { CNavItem} from '@coreui/react'
import { CNavLinkProps } from '@coreui/react/dist/components/nav/CNavLink';


export interface Nav {
  component:React.ForwardRefExoticComponent<CNavLinkProps & React.RefAttributes<HTMLLIElement>>
  name:string
  to?:string
  icon?:React.RefAttributes<SVGSVGElement>
  badge?:Badge
  items?:Nav[]
  href?:string
}

export interface Badge {
  color:string
  text:string
}

const _nav:Nav[] = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
]

export default _nav
