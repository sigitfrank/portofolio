import { useContext, useState } from 'react';
import { CgClose, CgMenu } from 'react-icons/cg';
import { FaUser, FaTools, FaEnvelope, FaBriefcase, FaProjectDiagram } from 'react-icons/fa';
import { Sidebar as SidebarPro, Menu, MenuItem } from 'react-pro-sidebar';
import { AppContext } from '../context/AppContext';
import '../css/sidebar.css'
const menus = [
    {
        id: 1,
        label: 'Profile',
        href: 'profile',
        icon: <FaUser size={24} />
    },
    {
        id: 2,
        label: 'Skill',
        href: 'skill',
        icon: <FaTools size={24} />
    },
    {
        id: 3,
        label: 'Experience',
        href: 'experience',
        icon: <FaBriefcase size={24} />
    },
    {
        id: 4,
        label: 'Project',
        href: 'project',
        icon: <FaProjectDiagram size={24} />
    },
    // {
    //     id: 5,
    //     label: 'Contact',
    //     href: 'contact',
    //     icon: <FaEnvelope size={24} />
    // },
]

const Sidebar = () => {
    const { pageLink } = useContext(AppContext)
    const handleNavigation = (link: typeof menus[0]): void => {
        pageLink.setNavLink(link)
    }
    const [isCollapsed, setIsCollapsed] = useState(false)
    return <SidebarPro collapsed={isCollapsed}
        rootStyles={{
            top: 0,
            height: isCollapsed ? '9vh' : '100vh',
            position: 'fixed',
            zIndex: 9999,
            borderColor: isCollapsed ? 'transparent' : '#6c757d',
            ".ps-sidebar-container": {
                overflow: isCollapsed ? 'hidden' : 'auto',
                background: '#000',
            },
        }}
    >
        <div className='sidebar--toggle__wrapper'>
            <span className="icon" onClick={() => setIsCollapsed(prev => !prev)}>
                {isCollapsed ? <CgMenu size={24} /> : <CgClose size={24} />}
            </span>
        </div>
        {
            !isCollapsed ?
                <div className='sidebar--welcome__wrapper'>
                    <p className='text'>Hi👋!</p>
                    <p className='text'>Thanks for visiting</p>
                </div> : null
        }
        <Menu
            menuItemStyles={{
                button: ({ level, active, disabled }) => {
                    if (level === 0)
                        return {
                            color: '#FFF',
                            transition: 'background 250ms',
                            background: active ? '#fa7109' : '#000',
                            ":hover": {
                                background: '#fa7109'
                            }
                        };
                },
            }}
        >
            {
                isCollapsed ? [] : menus.map(menu => {
                    return <MenuItem key={menu.id} rootStyles={{
                        margin: '1rem 0'
                    }} href={`#${menu.href}`} active={pageLink.getNavLink.href === menu.href} onClick={() => handleNavigation(menu)} icon={menu.icon}>
                        {menu.label}
                    </MenuItem>
                })
            }
        </Menu>
    </SidebarPro>;
}

export default Sidebar