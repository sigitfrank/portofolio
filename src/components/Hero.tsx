import { ReactElement, useEffect, useRef, useState } from 'react'
import { CgFileDocument } from 'react-icons/cg'
import { PiCertificate } from 'react-icons/pi'
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs'
import { availability, careerStart, files, location, role, thesis } from '../namespace'

/* Literal paths, not built by concatenation — bundlers and asset rewriters
   can only see and process a path that appears in full in the source. */
const PORTRAITS = ['/assets/me-2.jpg', '/assets/me.jpg'] as const

function Hero(): ReactElement {
  const [menuOpen, setMenuOpen] = useState(false)
  const [portraitIndex, setPortraitIndex] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  return (
    <header className="section hero" id="intro">
      <div className="wrap hero__grid">
        <div>
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-rule" />
            <span className="label">
              {role} · {location}
            </span>
          </div>

          <h1 className="hero__name">
            <span className="hero__line">
              <span style={{ animationDelay: '80ms' }}>Sigit</span>
            </span>
            <span className="hero__line">
              <span className="thin" style={{ animationDelay: '180ms' }}>
                Tunggul
              </span>
            </span>
            <span className="hero__line">
              <span className="brass" style={{ animationDelay: '280ms' }}>
                Waskito
              </span>
            </span>
          </h1>

          <p className="hero__thesis">{thesis}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={files.cv} download target="_blank" rel="noopener noreferrer">
              <CgFileDocument className="btn__icon" />
              Download CV
            </a>

            <a className="btn" href={files.certificate} download target="_blank" rel="noopener noreferrer">
              <PiCertificate className="btn__icon" />
              Certificate
            </a>

            <div className="filemenu" ref={menuRef}>
              <button
                type="button"
                className="btn"
                aria-expanded={menuOpen}
                aria-haspopup="true"
                onClick={() => setMenuOpen((v) => !v)}
              >
                <BsFillFileEarmarkCodeFill className="btn__icon" />
                Portfolio file
              </button>
              <div className={`filemenu__list ${menuOpen ? 'is-open' : ''}`}>
                <a href={files.portfolioPdf} download target="_blank" rel="noopener noreferrer">
                  Download PDF
                </a>
                <a href={files.portfolioPpt} download target="_blank" rel="noopener noreferrer">
                  Download PPT
                </a>
              </div>
            </div>
          </div>

          <p className="hero__status">
            <span className="hero__pulse" aria-hidden="true" />
            {availability}
          </p>
        </div>

        <div className="plate">
          <div className="plate__frame">
            <button
              type="button"
              className="plate__toggle"
              aria-label="Show another portrait"
            >
              <img src={PORTRAITS[portraitIndex]} alt="Sigit Tunggul Waskito" />
            </button>
            <div className="plate__caption">
              <span>Plate 01</span>
              <span>Since {careerStart.getFullYear()}</span>
            </div>
            <span className="plate__stamp">
              Available
              <br />
              for work
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
