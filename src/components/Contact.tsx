import { ReactElement, useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import '../css/contact.css'
import { emailRegex, getContact } from '../namespace'
import 'react-local-toast/dist/bundle.min.css';
import { FormState } from '../interfaces/useStore';
import { LocalToastTarget, useLocalToast } from 'react-local-toast';

const formValidation = (form: FormState) => {
  if (!form.firstName) {
    return {
      isValid: false,
      errorMsg: 'First Name is required'
    }
  }
  if (!form.email) {
    return {
      isValid: false,
      errorMsg: 'Email is required'
    }
  }
  if (!emailRegex.test(form.email)) {
    return {
      isValid: false,
      errorMsg: 'Invalid email address'
    }
  }
  if (!form.service) {
    return {
      isValid: false,
      errorMsg: 'Service is required'
    }
  }
  if (!form.message) {
    return {
      isValid: false,
      errorMsg: 'Message is required'
    }
  }
  return {
    isValid: true,
    errorMsg: ''
  }
}

function Contact(): ReactElement {
  const { showToast, removeToast } = useLocalToast();
  const { clientRequest } = useContext(AppContext)
  const { getClientRequest, setClientRequest } = clientRequest
  const [form, setForm] = useState<FormState>(
    {
      firstName: '',
      lastName: '',
      email: '',
      service: '',
      message: '',
    }
  )

  const handleSetForm = (key: string, value: string): void => {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  const handleSendRequest = () => {
    const { isValid, errorMsg } = formValidation(form)
    if (!isValid) {
      return showToast('btn', errorMsg, {
        type: 'error',
        duration: 2000
      })
    }
    const message = window.decodeURIComponent(`Name:%20${form.firstName}%20${form.lastName}%20\nEmail:%20${form.email}%20\nService:%20${getClientRequest}%20\nMessage:%20${form.message}`)
    const url = getContact(message)
    window.open(url, '_blank');
  }

  return (<>
    <svg style={{ rotate: '180deg' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(0, 0, 0, 0.55)" fillOpacity="1" d="M0,256L60,218.7C120,181,240,107,360,85.3C480,64,600,96,720,128C840,160,960,192,1080,181.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    <div className='section contact' id='contact' style={{ translate: '0 -5vh' }}>
      <div className="container-lg">
        <h1>Contact Me</h1>
        <div className="contact__wrapper">
          <div className="contact__information">
            <div className="overlay o-1"></div>
            <div className="overlay o-2"></div>
          </div>
          <div className="contact__form">
            <div className="form-group d-flex justify-content-between">
              <div className="column my-3">
                <label htmlFor="name" className='form-label'>First Name <span className='color__secondary'>*</span></label>
                <input value={form.firstName} onChange={(e) => handleSetForm('firstName', e.target.value)} type="text" name="firstName" id="firstName" className='form-control form-control-sm' />
              </div>
              <div className="column my-3">
                <label htmlFor="name" className='form-label'>Last Name</label>
                <input value={form.lastName} onChange={(e) => handleSetForm('lastName', e.target.value)} type="text" name="lastName" id="lastName" className='form-control form-control-sm' />
              </div>
            </div>
            <div className="form-group my-3">
              <label htmlFor="name" className='form-label'>Email <span className='color__secondary'>*</span></label>
              <input value={form.email} onChange={(e) => handleSetForm('email', e.target.value)} type="text" name="email" id="email" className='form-control form-control-sm' />
            </div>
            <div className="form-group my-5">
              <label htmlFor="service" className='form-label mb-4'>What type of service do you need? <span className='color__secondary'>*</span></label>
              <div className="options">
                <div className="form-check">
                  <input checked={form.service === 'web-app'} className="form-check-input" type="radio" name="service" id="web-app" onChange={(e) => handleSetForm('service', e.target.id)} />
                  <label className="form-check-label" htmlFor="web-app">
                    Web App
                  </label>
                </div>
                <div className="form-check">
                  <input checked={form.service === 'company-profile'} className="form-check-input" type="radio" name="service" id="company-profile" onChange={(e) => handleSetForm('service', e.target.id)} />
                  <label className="form-check-label" htmlFor="company-profile">
                    Company Profile
                  </label>
                </div>
                <div className="form-check">
                  <input checked={form.service === 'landing-page'} className="form-check-input" type="radio" name="service" id="landing-page" onChange={(e) => handleSetForm('service', e.target.id)} />
                  <label className="form-check-label" htmlFor="landing-page">
                    Landing Page
                  </label>
                </div>
                <div className="form-check">
                  <input checked={form.service === 'consultation'} className="form-check-input" type="radio" name="service" id="consultation" onChange={(e) => handleSetForm('service', e.target.id)} />
                  <label className="form-check-label" htmlFor="consultation">
                    Consultation
                  </label>
                </div>
                <div className="form-check">
                  <input checked={form.service === 'fixing-bugs'} className="form-check-input" type="radio" name="service" id="fixing-bugs" onChange={(e) => handleSetForm('service', e.target.id)} />
                  <label className="form-check-label" htmlFor="fixing-bugs">
                    Fixing Bugs
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group my-4">
              <label htmlFor="message" className='form-label'>Message *</label>
              <textarea
                name="message"
                spellCheck={false}
                onChange={(e) => handleSetForm('message', e.target.value)}
                className='form-control form-control-sm'
                id="message"
                cols={30}
                rows={7}
                value={form.message} />
            </div>
            <LocalToastTarget name="btn">
              <button type="submit" className="btn background__secondary my-3" onClick={handleSendRequest}>Send Message</button>
            </LocalToastTarget>
          </div>
        </div>
      </div>
    </div >
  </>
  )
}

export default Contact