import React from 'react'
import { NavLink } from 'react-router-dom'
import { Badge, Nav } from 'src/_nav'
import { CBadge } from '@coreui/react'

const navLink = (name:string, icon:React.RefAttributes<SVGSVGElement>, badge?:Badge) => {
  return (
    <>
      {icon && icon}
      {name && name}
      {badge && (
        <CBadge color={badge.color} className="ms-auto">
          {badge.text}
        </CBadge>
      )}
    </>
  )
}

const navItem = (item:Nav, index:number) => {
  const { component, name, badge, icon, ...rest } = item
  const Component = component
  return (
    <Component
      {...(rest.to &&
        !rest.items && {
          component: NavLink,
        })}
      key={index}
      {...rest}
    >
      {(icon && badge) && 
        navLink(name, icon, badge)
      }
    </Component>
  )
}

const navGroup = (item:Nav, index:number) => {
  const { component, ...rest } = item
  const Component = component
  return (
    <Component
      idx={String(index)}
      key={index}
      // toggler={icon && navLink(name, icon)}
      // visible={to ? location.pathname.startsWith(to) : ""}
      {...rest}
    >
      {item.items?.map((item, index) =>
        item.items ? navGroup(item, index) : navItem(item, index),
      )}
    </Component>
  )
}

interface Props {
  items?:Nav[]
}

export const AppSidebarNav = (props:Props) => {
  const {items}=props
  return (
    <React.Fragment>
      {items &&
        items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
    </React.Fragment>
  )
}
