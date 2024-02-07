import './Contact.css'

function Contact() {
  return (
    <div className='contact-div'>
        <div className='contact_title-div'>
            <span className='contact_title-subtitle'>Contact</span>
            <span className='contact_title-title'>Contact Me</span>
        </div>
        <div className='cards_section'>
            <div className='cards'>
                <div className='cards_icon'>
                <span class="material-symbols-outlined contact_cards-icon">
                    location_on
                </span>
                </div>
                <div className='cards_desc'>
                    <span className='cards_desc-title'>
                        My Address
                    </span>
                    <span className='cards_desc-detail'>
                        A108 Adam Street, New York, NY 535022
                    </span>
                </div>
            </div>

            <div className='cards'>
                <div className='cards_icon'>
                <span class="material-symbols-outlined contact_cards-icon">
                    share
                </span>
                </div>
                <div className='cards_desc'>
                    <span className='cards_desc-title'>
                        Social Profiles
                    </span>
                    <span className='cards_desc-detail'>
                        A108 Adam Street, New York, NY 535022
                    </span>
                </div>
            </div>

            <div className='cards'>
                <div className='cards_icon'>
                <span class="material-symbols-outlined contact_cards-icon">
                    mail
                </span>
                </div>
                <div className='cards_desc'>
                    <span className='cards_desc-title'>
                        Email
                    </span>
                    <span className='cards_desc-detail'>
                        shariqhussain8@gmail.com
                    </span>
                </div>
            </div>

            <div className='cards'>
                <div className='cards_icon'>
                <span class="material-symbols-outlined contact_cards-icon">
                    call
                </span>
                </div>
                <div className='cards_desc'>
                    <span className='cards_desc-title'>
                        Call Me
                    </span>
                    <span className='cards_desc-detail'>
                        +91 9876-543-210
                    </span>
                </div>
            </div>
        </div>

        <div className='msg_section'>
            <div className='msg_row'>
                <input className='msg_input' type='text' placeholder='Your Name' />
                <input className='msg_input' type='text' placeholder='Your Email' />
            </div>
            {/* <div className='msg_subject'> */}
                <input className='msg_input subject-input' type='text' placeholder='Subject' />
            {/* </div> */}
            <textarea className='msg_input message-area' type='textarea' placeholder="Message" />

            <button className='btn btn-submit'>Send Message</button>
        </div>
    </div>
  )
}

export default Contact