//CSS
import './Skills.css';

import jsGif from '../../assets/JS.gif';
import nodeIcon from '../../assets/node.png';
import reactIcon from '../../assets/react-light.png';
import mongoIcon from '../../assets/mongodb.png'
import cssIcon from '../../assets/css.png'
import htmlIcon from '../../assets/html.png'

//imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SkillsArray from '../../Data/Skills'

const Skills = () => {
  // const [skillsWithDetails] = useState(SkillsArray);

  return (
    <div className="skills">
      <div className='skills_title-div'>
        <span className="skills-heading-subtitle">Skills</span>
        <span className='skills-heading-title'>My Services</span>
      </div>

      {/* {skillsWithDetails.map((category, index) => (
        <div key={index} className="category">
          <h3 className="category-heading">{category.category}</h3>

          <ul className="skill-list">
            {category.skills.map((skill, skillIndex) => (
              <Link to={`skillsSet/${skill.id}`} className='skills-list_item-link' id={skillIndex}>
                <li key={skillIndex} className="skill">

                  <div className="skills-heading">
                    {skill.name} - Proficiency: {skill.proficiency}
                  </div>

                  {skill.description && <p className="skill-description">{skill.description}</p>}

                  {skill.institution && (
                    <p className="education">
                      Institution: {skill.institution}, Year: {skill.year}
                    </p>
                  )}

                </li>
              </Link>
            ))}
          </ul>

        </div>
      ))} */}
      <div className='skill_category'>
      {/* <Link to={`skillsSet/${skill.id}`} className='skills-list_item-link' id={skillIndex}> */}
        <div className='skill_div'>
          <div className='skill_icon-div'>
            <img src={htmlIcon} alt='HTML Icon ' className='skill-icon_img' />
          </div>
          <div className='skill_des'>
            <span className='skill_des-title'>HTML</span>
            <span className='skill_des-description'>JS with ES6.</span>
          </div>
        </div>
      {/* </Link> */}
        <div className='skill_div'>
          <div className='skill_icon-div'>
          <img src={cssIcon} alt='CSS Icon ' className='skill-icon_img'/>
          </div>
          <div className='skill_des'>
            <span className='skill_des-title'>CSS</span>
            <span className='skill_des-description'>JS with ES6.</span>
          </div>
        </div>
        <div className='skill_div'>
          <div className='skill_icon-div'>
            <img src={jsGif} alt='JS GIF' className='skill-icon_img'/>
          </div>
          <div className='skill_des'>
            <span className='skill_des-title'>JavaScript</span>
            <span className='skill_des-description'>JS with ES6.</span>
          </div>
        </div>
        <div className='skill_div'>
          <div className='skill_icon-div'>
            <img src={nodeIcon} alt='Node Icon' className='skill-icon_img'/>
          </div>
          <div className='skill_des'>
            <span className='skill_des-title'>NodeJS</span>
            <span className='skill_des-description'>JS with ES6.</span>
          </div>
        </div>
        <div className='skill_div'>
          <div className='skill_icon-div'>
            <img src={reactIcon} alt='React Icon' className='skill-icon_img'/>
          </div>
          <div className='skill_des'>
            <span className='skill_des-title'>React</span>
            <span className='skill_des-description'>JS with ES6.</span>
          </div>
        </div>
        <div className='skill_div'>
          <div className='skill_icon-div'>
          <img src={htmlIcon} alt='HTML Icon ' className='skill-icon_img'/>
          </div>
          <div className='skill_des'>
            <span className='skill_des-title'>Redux</span>
            <span className='skill_des-description'>JS with ES6.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
