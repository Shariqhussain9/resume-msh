//CSS
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-div'>
                <div className='list-div'>
                    <span className='footer-heading'> Get in Touch </span>
                    <ul className='footer_list'>
                        <li className='footer_list-item'>Email: </li>
                        <li className='footer_list-item'>Instagram : </li>
                        <li className='footer_list-item'>Facebook: </li>
                        <li className='footer_list-item'>Contact: </li>
                    </ul>
                </div>
                <div className='msg-div'>
                    <span className='footer_msg-heading'>Send Message</span>
                    <input className='footer_msg_email-input' type='email' placeholder='Enter Your Email' />
                    <textarea className='footer_msg-text' placeholder='Type Your Queries here' />

                    <button className='footer_msg-btn'>Send</button>
                </div>
            </div>

            <div className='footer_social-div'>
                <div className='social-copywrite-div'>
                    <span className='footer-copywrite'>
                        @copywrite - 2023
                    </span>
                </div>

                <div className='social'>
                    <ul className='social-list'>
                        <Link className='social-links'>
                            <li className='socail_list-item'>Facebook</li>
                        </Link>
                        <Link className='social-links'>
                            <li className='socail_list-item'>Instagram</li>
                        </Link>
                        <Link className='social-links'>
                            <li className='socail_list-item'>LinkedIn</li>
                        </Link>
                        <Link className='social-links'>
                            <li className='socail_list-item'>Github</li>
                        </Link>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer