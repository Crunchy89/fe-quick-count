import React from 'react'

const Dashboard = React.lazy(() => import('src/pages/Dashboard'))
const routes = [
  { path: '/',exact: true, name: 'Dashboard', element: Dashboard },
]

export default routes
