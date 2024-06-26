import React from 'react';
import './About.css';
import profile from '../img/hello@reallygreatsite.com.png'

const About = () => {
  const handleButtonClick = () => {
    // 새 창에서 이력서 PDF 파일 열기
    window.open(' https://wjho96.github.io/pdf/resume.pdf', '_blank');
  };

  return (
    <section id="about">
      <div className="intro">
        <div className="profile-img">
          <img src={profile} alt="프로필 이미지" />
          <button onClick={handleButtonClick}>자세히 보기</button>
        </div>
      </div>
    </section>
  );
};

export default About;
