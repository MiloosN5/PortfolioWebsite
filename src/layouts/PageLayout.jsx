import { Outlet } from 'react-router-dom'

// components
import HeaderPage from './headers/HeaderPage'

const PageLayout = () => {

  return (
    <div className='page'>
      <div className='page__wrapper'>
        <HeaderPage />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default PageLayout