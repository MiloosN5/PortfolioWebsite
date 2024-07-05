import NavPage from '../../components/shared/NavPage'

const HeaderPage = () => {
  return (
    <header className='header--page'>
      <div className='header--page__wrapper'>
        <h3 className='sr-only'>Header</h3>
        <NavPage />
      </div>
    </header>
  )
}

export default HeaderPage