//CSS
import './About.css';

const About = () => {
    return(
        <div className='about_section'> 
            <div className='about_title-div'>
                <span className='about_title-subtitle'>About</span>
                <span className='about_title-title'>Learn More About Me</span>
            </div>

            <div className='des_div'>
                <div className='des_profile'>
                    <img src='https://bootstrapmade.com/demo/templates/Personal/assets/img/me.jpg' alt='Profile Pic' className='profile_img' />

                </div>
                <div className='des_description'>
                    <div className='description_title-div'>
                        <span className='description-title'>Web Developer</span>
                        <p className='description-detail'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    <div className='description-detail'>
                        <ul className='detail_list'>
                            <li className='detail_list-item'>
                                <div className='detail_list-item-div'>
                                <span class="material-symbols-outlined list-item-icon">
                                    chevron_right
                                </span>
                                <span className='list-item-title'>Birthday: </span>
                                <span className='list-item-detail'>8 November 1999</span>
                                </div>
                            </li>

                            <li className='detail_list-item'>
                                <div className='detail_list-item-div'>
                                <span class="material-symbols-outlined list-item-icon">
                                    chevron_right
                                </span>
                                <span className='list-item-title'>Age: </span>
                                <span className='list-item-detail'>23</span>
                                </div>
                            </li>

                            <li className='detail_list-item'>
                                <div className='detail_list-item-div'>
                                <span class="material-symbols-outlined list-item-icon">
                                    chevron_right
                                </span>
                                <span className='list-item-title'>Website: </span>
                                <span className='list-item-detail'>www.example.com</span>
                                </div>
                            </li>

                            <li className='detail_list-item'>
                                <div className='detail_list-item-div'>
                                <span class="material-symbols-outlined list-item-icon">
                                    chevron_right
                                </span>
                                <span className='list-item-title'>Degree: </span>
                                <span className='list-item-detail'>Master</span>
                                </div>
                            </li>

                            <li className='detail_list-item'>
                                <div className='detail_list-item-div'>
                                <span class="material-symbols-outlined list-item-icon">
                                    chevron_right
                                </span>
                                <span className='list-item-title'>Phone: </span>
                                <span className='list-item-detail'>+91 9876 543 210</span>
                                </div>
                            </li>

                            <li className='detail_list-item'>
                                <div className='detail_list-item-div'>
                                <span class="material-symbols-outlined list-item-icon">
                                    chevron_right
                                </span>
                                <span className='list-item-title'>Email: </span>
                                <span className='list-item-detail'>shariqhussain8@gmail.com</span>
                                </div>
                            </li>

                            <li className='detail_list-item'>
                                <div className='detail_list-item-div'>
                                <span class="material-symbols-outlined list-item-icon">
                                    chevron_right
                                </span>
                                <span className='list-item-title'>City: </span>
                                <span className='list-item-detail'>Bareilly, UP</span>
                                </div>
                            </li>

                             <li className='detail_list-item'>
                                <div className='detail_list-item-div'>
                                <span class="material-symbols-outlined list-item-icon">
                                    chevron_right
                                </span>
                                <span className='list-item-title'>Freelance: </span>
                                <span className='list-item-detail'>Available</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                <p className='des_description-detail'>
                    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. 
                    Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. 
                    Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. 
                    Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                </p>
                </div>
            </div>

            {/* Skills div */}
            <div className='about_skills'>
                <span className='about_skills-title'>Skills</span>

                <div className='about_skills-skillSet'>
                    <div className='skillSet-progress-div'>
                        <div className='skillSet-name-div'>
                            <span className='skillSet-name'>HTML</span>
                            <span className='skillSet-value'>75%</span>
                        </div>
                        <div className='progress-div'>
                            <div className='skillSet-progress'></div>
                        </div>
                    </div>
                

                
                    <div className='skillSet-progress-div'>
                        <div className='skillSet-name-div'>
                            <span className='skillSet-name'>CSS</span>
                            <span className='skillSet-value'>75%</span>
                        </div>
                        <div className='progress-div'>
                            <div className='skillSet-progress'></div>
                        </div>
                    </div>
                

                
                    <div className='skillSet-progress-div'>
                        <div className='skillSet-name-div'>
                            <span className='skillSet-name'>JavaScript</span>
                            <span className='skillSet-value'>75%</span>
                        </div>
                        <div className='progress-div'>
                            <div className='skillSet-progress'></div>
                        </div>
                    </div>
                

                
                    <div className='skillSet-progress-div'>
                        <div className='skillSet-name-div'>
                            <span className='skillSet-name'>NodeJs</span>
                            <span className='skillSet-value'>75%</span>
                        </div>
                        <div className='progress-div'>
                            <div className='skillSet-progress'></div>
                        </div>
                    </div>
                

                
                    <div className='skillSet-progress-div'>
                        <div className='skillSet-name-div'>
                            <span className='skillSet-name'>React</span>
                            <span className='skillSet-value'>75%</span>
                        </div>
                        <div className='progress-div'>
                            <div className='skillSet-progress'></div>
                        </div>
                    </div>
                

                
                    <div className='skillSet-progress-div'>
                        <div className='skillSet-name-div'>
                            <span className='skillSet-name'>HTML</span>
                            <span className='skillSet-value'>75%</span>
                        </div>
                        <div className='progress-div'>
                            <div className='skillSet-progress'></div>
                        </div>
                    </div>
                

                
                    <div className='skillSet-progress-div'>
                        <div className='skillSet-name-div'>
                            <span className='skillSet-name'>HTML</span>
                            <span className='skillSet-value'>75%</span>
                        </div>
                        <div className='progress-div'>
                            <div className='skillSet-progress'></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interest div */}
            <div className='interests'>
                <span className='about_skills-title'>interests</span>

                <div className='interests_card-div'>
                    <div className='interests-card'>
                        <span class="material-symbols-outlined interest-icon">
                            exercise
                        </span>
                        <span className='interests_card-name'>Exercise</span>
                    </div>

                    <div className='interests-card'>
                        <span class="material-symbols-outlined interest-icon">
                            music_video
                        </span>
                        <span className='interests_card-name'>Music</span>
                    </div>

                    <div className='interests-card'>
                        <span class="material-symbols-outlined interest-icon">
                            deployed_code
                        </span>
                        <span className='interests_card-name'>Coding</span>
                    </div>

                    <div className='interests-card'>
                        <span class="material-symbols-outlined interest-icon">
                            roller_skating
                        </span>
                        <span className='interests_card-name'>Skating</span>
                    </div>

                    <div className='interests-card'>
                        <span class="material-symbols-outlined interest-icon">
                            sports_esports
                        </span>
                        <span className='interests_card-name'>Gaming</span>
                    </div>

                    <div className='interests-card'>
                        <span class="material-symbols-outlined interest-icon">
                            calendar_month
                        </span>
                        <span className='interests_card-name'>Event Planning</span>
                    </div>

                    <div className='interests-card'>
                        <span class="material-symbols-outlined interest-icon">
                            exercise
                        </span>
                        <span className='interests_card-name'>Exercise</span>
                    </div>

                    <div className='interests-card'>
                        <span class="material-symbols-outlined interest-icon">
                            exercise
                        </span>
                        <span className='interests_card-name'>Exercise</span>
                    </div>

                </div>
            </div>

        </div>
    );

    // return (
    //     <div className='about-content'>
    //         <div className='about-card'>
    //             <div className='about-card_left-div'>
    //                 <div className='info-div'>
    //                     <img 
    //                         src='https://bootstrapmade.com/demo/templates/DevFolio/assets/img/testimonial-2.jpg' 
    //                         // src={profile}
    //                         alt="Profile Image" className='profile-img' />
    //                     <ul className='info-list'>
    //                         <li className='info-list_item'>
    //                             <span className='info-heading'>Name: </span>
    //                             <span className='info-detail'>Mohd Shariq Hussain</span>
    //                         </li>
    //                         <li className='info-list_item'>
    //                             <span className='info-heading'>Profile: </span>
    //                             <span className='info-detail'>Full Stack Developer</span>
    //                         </li>
    //                         <li className='info-list_item'>
    //                             <span className='info-heading'>Email: </span>
    //                             <span className='info-detail'>shariqhussain8@gmail.com</span>
    //                         </li>
    //                         <li className='info-list_item'>
    //                             <span className='info-heading'>Phone: </span>
    //                             <span className='info-detail'>(+91) 8938936027 </span>
    //                         </li>
    //                     </ul>

    //                 </div>
    //                 <div className='skills-div'>
    //                     <h3>Skills</h3>
    //                     <div className='skills-div_items'>
    //                         <span className='skills-title'>
    //                             HTML 90%
    //                         </span>
    //                         <progress value={90} max={100} className='skills-progress'></progress>
    //                     </div>
    //                     <div className='skills-div_items'>
    //                         <span className='skills-title'>
    //                             CSS 85%
    //                         </span>
    //                         <progress value={85} max={100} className='skills-progress'></progress>
    //                     </div>
    //                     <div className='skills-div_items'>
    //                         <span className='skills-title'>
    //                             JavaScript 90%
    //                         </span>
    //                         <progress value={90} max={100} className='skills-progress'></progress>
    //                     </div>
    //                     <div className='skills-div_items'>
    //                         <span className='skills-title'>
    //                             NodeJs 80%
    //                         </span>
    //                         <progress value={80} max={100} className='skills-progress'></progress>
    //                     </div>
    //                     <div className='skills-div_items'>
    //                         <span className='skills-title'>
    //                             React 65%
    //                         </span>
    //                         <progress value={65} max={100} className='skills-progress'></progress>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className='about-card_right-div'>
    //                 <h2>About Me!</h2>
    //                 <p>
    //                     Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. 
    //                     Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. 
    //                     Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. 
    //                     Nulla porttitor accumsan tincidunt.
    //                 </p>
    //                 <p>
    //                     Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. 
    //                     Vivamus suscipit tortor eget felis porttitor volutpat. 
    //                     Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. 
    //                     porttitor at sem.
    //                 </p>
    //                 <p>
    //                     Nulla porttitor accumsan tincidunt. 
    //                     Quisque velit nisi, pretium ut lacinia in, elementum id enim. 
    //                     Nulla porttitor accumsan tincidunt. 
    //                     Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
    //                 </p>
    //             </div>
                
    //         </div>
    //     </div>
    // );
}

export default About;
