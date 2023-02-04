import {
  Outlet
} from 'react-router-dom';

function MainLayout() {
  return (
    <div>
      Layout
      <Outlet />
    </div>
  )
}

export default MainLayout
