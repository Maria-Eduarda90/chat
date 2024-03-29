import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import * as AiIcons from 'react-icons/ai';

import * as C from './styles';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import { ButtonSignOut } from '../ButtonSignOut';

export const Sidebar = () => {
    const [ sidebar, setSidebar ] = useState(true);

    const { user } = useAuth();

    function showSidebar() {
        setSidebar(!sidebar);
    }

    return(
        <C.Container>
            <div className="header">
                <div className="navbar">
                    <Link to="#" className="menu-bars activate">
                        <button onClick={showSidebar}>
                            Perfil
                        </button>
                    </Link>
                </div>

                <C.ContainerSidebar>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items'>
                            <Link to='#' className="menu-bars close">
                                <AiIcons.AiOutlineClose onClick={showSidebar}/>
                            </Link>
                            <ButtonSignOut />
                        </ul>
                        <div className="space">
                            <div>
                                <Avatar imageUri='https://github.com/Maria-Eduarda90.png' />
                                <p></p>
                                <p>{user[0]?.name}</p>
                                <span>{user[0]?.email}</span>
                            </div>
                        </div>
                    </nav>
                </C.ContainerSidebar>
            </div>
        </C.Container>
    );
}