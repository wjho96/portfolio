import React, { useEffect, useRef, forwardRef } from 'react';
import './Skills.css';

// Import images for skills (example images)
import html5Icon from '../img/html.png';
import css3Icon from '../img/css.png';
import jsIcon from '../img/js.png';
import jqueryIcon from '../img/jquery.png';
import reactIcon from '../img/react.png';
import scssIcon from '../img/scss.png';
import mysqlIcon from '../img/mysql.png';

const Skills = forwardRef((props, ref) => {
    // const bubbleContainerRef = useRef(null);
    const mainSkillsRef = useRef([
        { lang: 'HTML5', icon: html5Icon },
        { lang: 'CSS3', icon: css3Icon },
        { lang: 'JavaScript', icon: jsIcon },
        { lang: 'jQuery', icon: jqueryIcon },
        { lang: 'React', icon: reactIcon },
        { lang: 'SCSS', icon: scssIcon },
        { lang: 'MySQL', icon: mysqlIcon },
    ]);

    // useEffect(() => {
    //     const colors = ['#274df8', '#ff24e2'];
    //     const numBubbles = 10;
    //     const bubbles = [];
    
    //     // Function to create a single bubble element
    //     const createBubble = () => {
    //         const size = Math.random() * 60 + 20;
    //         const duration = Math.random() * 8 + 4;
    //         const delay = Math.random() * 2;
    //         const left = Math.random() * 100;
    //         const color = colors[Math.floor(Math.random() * colors.length)];
    
    //         const bubble = document.createElement('div');
    //         bubble.classList.add('bubble');
    //         bubble.style.width = `${size}px`;
    //         bubble.style.height = `${size}px`;
    //         bubble.style.animationDuration = `${duration}s`;
    //         bubble.style.animationDelay = `${delay}s`;
    //         bubble.style.left = `${left}%`;
    //         bubble.style.backgroundColor = color;
    
    //         return bubble;
    //     };
    
    //     // Create bubbles and append to bubbleContainerRef
    //     const animateBubbles = () => {
    //         for (let i = 0; i < numBubbles; i++) {
    //             const bubble = createBubble();
    //             bubbleContainerRef.current.appendChild(bubble);
    //             bubbles.push(bubble);
    //         }
    //     };
    
    //     animateBubbles(); // Initial animation setup
    
    //     // Remove bubbles when component unmounts
    //     return () => {
    //         bubbles.forEach((bubble) => bubble.remove());
    //     };
    // }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <section className="skills-section" id="skills" ref={ref}>
            <h2 className="skills-title">주요 기술</h2>
            <ul className="skills-list">
                {mainSkillsRef.current.map((skill, index) => (
                    <li className="skill-item" key={`${skill.lang}-${index}`}>
                        <div className="skill-name">{skill.lang}</div>
                        <div className="skill-icon">
                            <img src={skill.icon} alt={skill.lang} />
                        </div>
                    </li>
                ))}
            </ul>
            {/* <div ref={bubbleContainerRef} className="bubble-container" /> */}
        </section>
    );
});

export default Skills;
