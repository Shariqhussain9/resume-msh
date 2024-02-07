//CSS 
import './Banner.css'

//react imports
import { useEffect, useState } from 'react';

export default function Banner() {
    const [text, setText] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);
    const [fullTextIndex, setFullTextIndex] = useState(0);
    const roles = ["Web Developer", "Node Developer", "React Developer"];

    useEffect(() => {
        let currentIndex = 0;
        let typingInterval;
        let cursorBlinkIntervalId; 

        const startTyping = () => {
            const currentFullText = roles[fullTextIndex];
            typingInterval = setInterval(()=>{
                
               if(currentIndex <= currentFullText.length ){
                   setText(currentFullText.slice(0, currentIndex));
                   currentIndex++;
               }
               else{
                   clearInterval(typingInterval);
                   setTimeout(clearText, 2000);
               }
           }, 100);
        };

        const clearText = () => {
            setText('');
            currentIndex = 0;
            setFullTextIndex((prevIndex) => (prevIndex + 1) % roles.length );
            startTyping();
        };

        startTyping();

        cursorBlinkIntervalId = setInterval(() => {
            setCursorVisible((prevCursorVisible) => !prevCursorVisible);
          }, 500);

        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorBlinkIntervalId);
        };
    }, [fullTextIndex]);

  return (
    <div className='banner bg-img'>
        <div className='banner-title-div'>
            <h1 className='banner-title'>I am Mohd Shariq Hussain</h1>
            <p className='banner-sub_title'>
                <span>{text}</span>
                <span className={cursorVisible? 'cursor-visible' : 'cursor-hidden'}>|</span>
            </p>
        </div>
    </div>
  )
}
