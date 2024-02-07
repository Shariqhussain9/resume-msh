import './Resume.css'

function Resume() {
  return (
    <div className='resume'>
        <div className='resume_section'>
            <span className='resume_section-subTitle'>RESUME</span> 
            <span className='resume_section-title'> CHECK MY RESUME</span> 
        </div>

        <div className='resume-row'>
            <div className='row_section'>
                <span className='row_section-title'>Sumary</span>
                <div className='section-item'>
                    <h4 className='section-item-title'>Something</h4>
                    
                    <p className='section-item-description'>
                        Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and 
                        developing user-centered digital/print marketing material from initial concept to final, 
                        polished deliverable.
                    </p>
                </div>
                
                <span className='row_section-title'>Education</span>
                <div className='section-item'>
                    <h4 className='section-item-title'>Bachelor of Technology</h4>
                    <span className='section-item-duration'>2017 - 2021 </span>
                    <p>
                        <em>
                            Future Institute of Engineering & Technology
                        </em>
                    </p>
                    <p className='section-item-description'>
                        Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and 
                        developing user-centered digital/print marketing material from initial concept to final, 
                        polished deliverable.
                    </p>
                </div>
            </div>

            <div className='row_section'>
                <span className='row_section-title'>Professional experience</span>
                <div className='section-item'>
                    <h4 className='section-item-title'>Assocait-I  Engineer</h4>
                    <span className='section-item-duration'>2021 - Present </span>
                    <p className='section-item-description'>
                        Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and 
                        developing user-centered digital/print marketing material from initial concept to final, 
                        polished deliverable.
                    </p>
                {/* </div> */}
                
                {/* <span className='row_section-title'>Intern</span> */}
                {/* <div className='section-item'> */}
                    <h4 className='section-item-title'>Backend Intern</h4>
                    <span className='section-item-duration'>2017 - 2021 </span>
                    <p>
                        <em>
                            Future Institute of Engineering & Technology
                        </em>
                    </p>
                    <p className='section-item-description'>
                        Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and 
                        developing user-centered digital/print marketing material from initial concept to final, 
                        polished deliverable.
                    </p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Resume