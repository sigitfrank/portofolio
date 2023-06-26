import React, { ReactElement, useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../context/AppContext'
import '../css/navigation.css'
import { links } from '../namespace'
import { TiThMenuOutline } from 'react-icons/ti'
import { LinkInterface } from '../interfaces/interfaces'

function Navigation(): ReactElement {
    const [isExpand, setIsExpand] = useState<boolean>(false)
    const { pageLink } = useContext(AppContext)
    const navbarRef = useRef<HTMLDivElement | null>(null)
    const [matches, setMatches] = useState<boolean>(
        window.matchMedia("(min-width: 576px)").matches
    )

    const handleNavigation = (link: LinkInterface): void => {
        pageLink.setNavLink(link)
    }

    const toggleNavigation = (): void => {
        setIsExpand(prev => !prev)
    }

    useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => {
                setMatches(e.matches)
            });
    }, []);


    useEffect(() => {

        const handleScroll = (): void => {
            if (!navbarRef.current) return
            window.scrollY > 50 ? navbarRef.current.classList.add('navigation__fixed') : navbarRef.current.classList.remove('navigation__fixed')
        }

        window.addEventListener('scroll', handleScroll, true)
        return () => {
            window.removeEventListener('scroll', handleScroll, true)
        }
    }, [])


    let list: ReactElement[] | null = links.map(link => <li key={link.value} className={`on_hover ${pageLink.getNavLink.value === link.value ? 'active' : ''}`}>
        <a onClick={(e) => handleNavigation(link)} href={`#${link.value}`}>
            {link.label}
        </a>
    </li>)

    if (!isExpand && !matches) list = null

    return (
        <div className="navigation" ref={navbarRef}>
            <ul className='navigation-links'>
                {list}
                <li className='on_hover menu' onClick={toggleNavigation}><TiThMenuOutline /></li>
            </ul>
        </div>
    )
}

export default Navigation