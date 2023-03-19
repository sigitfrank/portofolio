import { ReactElement, useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import '../css/contact.css'
import { getContact } from '../namespace'

function Contact(): ReactElement {

  const { clientRequest } = useContext(AppContext)
  const { getClientRequest, setClientRequest } = clientRequest
  const [form, setForm] = useState<{ name: string; description: string }>({ name: '', description: '' })

  const handleSetForm = (key: string, value: string): void => {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  const handleSendRequest = (): void => {
    if (!form.name || !form.description) return alert('Please fill your name & description')
    window.open(getContact(getClientRequest, form.name, form.description), '_blank');
  }

  return (<>
    <svg style={{ rotate: '180deg' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(0, 0, 0, 0.55)" fillOpacity="1" d="M0,256L60,218.7C120,181,240,107,360,85.3C480,64,600,96,720,128C840,160,960,192,1080,181.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    <div className='section contact' id='contact' style={{ translate: '0 -5vh' }}>
      <div className="container">
        <h1>Contact Me</h1>
        <div className="contact__wrapper">
          <div className="contact__options">
            <ul>
              <li onClick={() => setClientRequest('Web App')} className={`${getClientRequest === 'Web App' ? 'active' : ''} on_hover`}>Web App</li>
              <li onClick={() => setClientRequest('Landing Page')} className={`${getClientRequest === 'Landing Page' ? 'active' : ''} on_hover`}>Landing Page</li>
              <li onClick={() => setClientRequest('Company Profile')} className={`${getClientRequest === 'Company Profile' ? 'active' : ''} on_hover`}>Company Profile</li>
              <li onClick={() => setClientRequest('Fixing Bugs')} className={`${getClientRequest === 'Fixing Bugs' ? 'active' : ''} on_hover`}>Fixing Bugs</li>
              <li onClick={() => setClientRequest('Consultation')} className={`${getClientRequest === 'Consultation' ? 'active' : ''} on_hover`}>Consultation</li>
            </ul>
          </div>

          <div className="contact__form">
            <div className="form-group my-4">
              <label htmlFor="request" className='form-label'>Request for <span>{getClientRequest}</span></label>
            </div>
            <div className="form-group my-4">
              <label htmlFor="name" className='form-label'>Name</label>
              <input value={form.name} onChange={(e) => handleSetForm('name', e.target.value)} type="text" name="name" id="name" className='form-control form-control-sm' />
            </div>
            <div className="form-group my-4">
              <label htmlFor="description" className='form-label'>Description</label>
              <textarea name="description" onChange={(e) => handleSetForm('description', e.target.value)} className='form-control form-control-sm' id="description" cols={30} rows={10} value={form.description} />
            </div>

            <button type="submit" className="btn primary my-3" onClick={handleSendRequest}>Send Request</button>
          </div>
        </div>
      </div>
    </div >
  </>
  )
}

export default Contact