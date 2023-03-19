import { ReactElement } from 'react'
import { FiArrowDownCircle } from 'react-icons/fi'

function QuickScroll(): ReactElement {
    return (
        <a href="#contact" className='scroll-bottom-wrapper'>
            <FiArrowDownCircle />
        </a>
    )
}

export default QuickScroll