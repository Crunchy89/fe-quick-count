import React from 'react'

const Dashboard = React.lazy(() => import('src/pages/Dashboard'))
export interface Routes {
  path: string;
  exact: boolean;
  name: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
}
const routes:Routes[] = [
  { path: '/',exact: true, name: 'Dashboard', element: Dashboard },
]

export default routes
