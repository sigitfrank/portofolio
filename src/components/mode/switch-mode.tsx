import React from 'react'
import '../../styles/switch.css'

interface SwitchModeProps {
    isDevMode: boolean
    onToggle: () => void
}

const SwitchMode: React.FC<SwitchModeProps> = ({ isDevMode, onToggle }) => (
    <div className="modeswitch">
        <span className="modeswitch__hint">
            {isDevMode ? 'Back to the site' : 'Prefer a terminal?'}
        </span>

        <button
            type="button"
            className="modeswitch__btn"
            aria-pressed={isDevMode}
            aria-label={isDevMode ? 'Switch to normal mode' : 'Switch to dev mode'}
            onClick={onToggle}
        >
            <span className={`modeswitch__slot ${isDevMode ? 'is-dev' : ''}`}>
                <span className="modeswitch__knob" />
            </span>
            <span className="modeswitch__label">{isDevMode ? 'SITE' : 'DEV'}</span>
        </button>
    </div>
)

export default SwitchMode
