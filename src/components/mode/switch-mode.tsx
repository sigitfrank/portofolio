import React from 'react'
import '../../css/switch-mode.css'

const SwitchMode: React.FC = () => {
    const search = new URLSearchParams(window.location.search);
    const isDevMode = search.get('mode') === 'dev';
    return (
        <div className="switch-mode-container">
            <div className="switch-mode-wrapper">
                {/* Tooltip */}
                <div className="switch-mode-tooltip">
                    {isDevMode ? 'Switch to Normal Mode' : 'Switch to Dev Mode'}
                </div>

                {/* Switch Button */}
                <button
                    onClick={() => window.location.href = isDevMode ? '/' : '/?mode=dev'}
                    className="switch-mode-button"
                >
                    {/* Animated Background Glow */}
                    <div className={`switch-mode-bg ${isDevMode ? 'dev' : 'normal'}`}></div>

                    {/* Toggle Knob */}
                    <div className={`switch-mode-knob ${isDevMode ? 'active' : ''}`}>
                        {/* Icon inside knob */}
                        {isDevMode ? (
                            <svg className="switch-mode-icon dev" viewBox="0 0 24 24">
                                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        ) : (
                            <svg className="switch-mode-icon normal" viewBox="0 0 24 24">
                                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        )}
                    </div>

                    {/* Mode Labels */}
                    <div className="switch-mode-labels">
                        <span className={`switch-mode-label ${!isDevMode ? 'hidden' : 'visible'}`}>
                            DEV
                        </span>
                        <span className={`switch-mode-label ${isDevMode ? 'hidden' : 'visible'}`}>
                            USER
                        </span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default SwitchMode