import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
} from '@coreui/icons'
import { CNavItem} from '@coreui/react'

export interface Nav {
  component:React.ForwardRefExoticComponent<React.RefAttributes<HTMLLIElement>>
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
