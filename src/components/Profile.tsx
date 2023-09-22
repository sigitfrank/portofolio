import { ReactElement, useState } from 'react'
import '../css/profile.css'
import { SiCodewars, SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";
import { MdSchool } from "react-icons/md";
import { RiOrganizationChart } from "react-icons/ri";
import { CgAwards, CgFileDocument } from "react-icons/cg";
import calculateAge from '../utils/calculcateAge';
import { birthday, profileDescription } from '../namespace';
import MouseScroll from './Icons/MouseScroll';
import { PropsGetterArgs, usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs';

type PortofolioTooltipProps = {
    visible: boolean
    getTooltipProps: (args?: PropsGetterArgs | undefined) => {
        'data-popper-interactive': boolean | undefined;
        style: React.CSSProperties;
    }
    setTooltipRef: React.Dispatch<React.SetStateAction<HTMLElement | null>>
    getArrowProps: (args?: PropsGetterArgs | undefined) => {
        style: React.CSSProperties;
        'data-popper-arrow': boolean;
    }
}

const PortofolioTooltip = ({
    visible,
    getTooltipProps,
    setTooltipRef,
    getArrowProps,
}: PortofolioTooltipProps) => {
    return visible ? (
        <div
            ref={setTooltipRef}
            {...getTooltipProps({ className: 'tooltip-container' })}
        >
            <a href='/assets/sigit-portofolio.pdf' download target='_blank' rel='noopener noreferrer'>as .PDF</a>
            <a href='/assets/sigit-portofolio.pptx' download target='_blank' rel='noopener noreferrer'>as .PPT</a>
            <div {...getArrowProps({ className: 'tooltip-arrow' })} />
        </div>
    ) : null
}

function Profile(): ReactElement {
    const [controlledVisible, setControlledVisible] = useState(false);

    const {
        getArrowProps,
        getTooltipProps,
        setTooltipRef,
        setTriggerRef,
        visible,
    } = usePopperTooltip({
        trigger: 'click',
        closeOnOutsideClick: true,
        visible: controlledVisible,
        onVisibleChange: setControlledVisible,
    });

    const [profilePicture, setProfilePicture] = useState('me-2.jpg')

    const handleToggleProfile = () => setProfilePicture(prev => prev === 'me-2.jpg' ? 'me.jpg' : 'me-2.jpg')
    const handleLink = (url: string) => window.open(url, '_blank')

    return (
        <div className='section profile' id='profile'>
            <div className="container">
                <div className="introduction">
                    <h2 className='text-center'>Hello, I'm</h2>
                    <h1 className='section__space text-center'>
                        Sigit Tunggul Waskito
                    </h1>
                    <h4 className='text-center text-muted'>Web Developer &#x2022; {calculateAge(birthday)} years old</h4>
                </div>
                <div className="text-center mt-4">
                    <MouseScroll />
                </div>

                <div className="btn-wrapper text-center my-4">
                    <button className='btn'>
                        <a href='/assets/Sigit-CV.pdf' download target='_blank' rel='noopener noreferrer' className='cv'>
                            <CgFileDocument className='file-icon' />
                            Curriculum vitae
                        </a>
                    </button>
                    <button className='btn mx-3'>
                        <a href="#contact" className='color__secondary'>Let's Talk</a>
                    </button>
                    <button className='btn' ref={setTriggerRef}>
                        <a className='portofolio'>
                            <BsFillFileEarmarkCodeFill className='file-icon' />
                            Portofolio File
                        </a>
                        <PortofolioTooltip
                            visible={visible}
                            getTooltipProps={getTooltipProps}
                            setTooltipRef={setTooltipRef}
                            getArrowProps={getArrowProps}
                        />
                    </button>
                </div>
                <div className="profile-wrapper">
                    <div className="profile-detail">
                        <div className="overlay"></div>
                        <div className="profile-picture-wrapper">
                            <img src={`/assets/${profilePicture}`} alt="profile" onClick={handleToggleProfile} />
                        </div>
                        <ul className='social-media_links'>
                            <li className='on_hover' onClick={() => handleLink('https://www.instagram.com/sigit_frank/')}>
                                <SiInstagram style={{ marginBottom: '.25rem' }} />
                                <span>Instagram</span>
                            </li>
                            <li className='on_hover' onClick={() => handleLink('https://www.linkedin.com/in/sigittuw/')}>
                                <SiLinkedin style={{ marginBottom: '.25rem' }} />
                                <span>Linkedin</span>
                            </li>
                            <li className='on_hover' onClick={() => handleLink('https://github.com/sigitfrank')}>
                                <SiGithub style={{ marginBottom: '.25rem' }} />
                                <span>Github</span>
                            </li>
                            <li className='on_hover' onClick={() => handleLink('https://www.codewars.com/users/sigitfrank')}>
                                <SiCodewars style={{ borderRadius: '50%' }} />
                                <span>Codewars</span>
                            </li>
                        </ul>
                    </div>

                    <div className="row mx-0 justify-content-center">
                        <div className="col-lg-5">
                            <div className="profile-description section__space rotate">
                                {profileDescription}
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="profile-description text-center section__space">
                                <h2><CgAwards className='awards' /> Awards</h2>
                                <ul>
                                    <li>Runner Up Codig 2.0</li>
                                    <li>Finalist IT FEST 3.0</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="profile-description text-center section__space">
                                <h2><RiOrganizationChart className='organization' /> Organizations</h2>
                                <ul>
                                    <li>Himpunan Mahasiswa Jurusan Ilmu Komputer - HIMAKOM</li>
                                    <li>ROIS FMIPA UNILA</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="profile-description text-center section__space">
                                <h2><MdSchool className='university' /> Education</h2>
                                <ul>
                                    <li>Lampung University</li>
                                    <li>Computer Science (S.KOM)</li>
                                    <li>GPA 3.81 out of 4.00</li>
                                </ul>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Profile