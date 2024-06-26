import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home">
      <div className="home-inner">
        <span>&#123; 나는, 개발자입니다 &#125; &#59;</span>
        <hr />
        <p>웹 개발자 | 프론트엔드</p>
      </div>
      <div className="scroll-down">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>

    </section>
  );
};

export default Home;
