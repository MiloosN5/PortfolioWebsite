import { NavLink } from 'react-router-dom'
import { routes } from '../../data/routes'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useRef } from 'react';

const NavPage = () => {

    const list_ref = useRef(null)

    const toggleList = () => {
        if(list_ref.current != null) {
            list_ref.current.classList.toggle('show')
        }
    }

    return (
        <nav className='nav--page'>
            <h4 className='sr-only'>Page navigation</h4>
            <div className='nav--page__wrapper'>
                <div className='nav--page__hamburger'>
                    <button className='button--filled' onClick={toggleList}>
                        <GiHamburgerMenu />
                    </button>
                </div>
                <ul className='nav--page__list' ref={list_ref}>
                    {
                        routes.map((route, index) => (
                            <li key={index}>
                                <NavLink className='black-outline' to={route.path}>
                                    {route.name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavPage