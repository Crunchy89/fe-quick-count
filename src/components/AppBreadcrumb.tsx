import React from 'react'
import { useLocation } from 'react-router-dom'

import routes, { Routes } from 'src/routes'

import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'

interface Breadcrumb {
  pathname:string
  name:string
  active:boolean
}

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname

  const getRouteName = (pathname:string, routes:Routes[]) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  const getBreadcrumbs = (location:string) => {
    const breadcrumbs:Breadcrumb[] = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <CBreadcrumb className="m-0 ms-2">
      <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
      {breadcrumbs.map((breadcrumb:Breadcrumb, index:number) => {
        return (
          <CBreadcrumbItem
            {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
            key={index}
          >
            {breadcrumb.name}
          </CBreadcrumbItem>
        )
      })}
    </CBreadcrumb>
  )
}

export default React.memo(AppBreadcrumb)
