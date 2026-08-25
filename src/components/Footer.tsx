import { ReactElement } from 'react'
import { fullName } from '../namespace'

function Footer(): ReactElement {
    return (
        <footer className="wrap footer">
            <span>© {new Date().getFullYear()} {fullName}</span>
            <span>Built with React, TypeScript & Vite</span>
            <a href="#intro">Back to top ↑</a>
        </footer>
    )
}

export default Footer
