/** @format */
import {Outlet} from "react-router-dom"
const MainLayout = () => {
  return (
    <main className='page-wrapper'>
      <Outlet />
    </main>
  )
}

export default MainLayout
