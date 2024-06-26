import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import todolist from '../img/Todolist.png';
import starbucks from '../img/Starbucks.png';
import swatch from '../img/Swatch.png';
import reactIcon from '../img/react.png';
import htmlIcon from '../img/html.png';
import cssIcon from '../img/css.png';
import jsIcon from '../img/js.png';
import githubIcon from '../img/github.png'

const Portfolio = () => {
  const [activeButton, setActiveButton] = useState('전체');
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [maxHeight, setMaxHeight] = useState(0);
  const [filteredItems, setFilteredItems] = useState([]);

  const handleClick = (category) => {
    setActiveButton(category);
  };

  const openPopup = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedItem(null);
    setShowPopup(false);
  };

  useEffect(() => {
    // Calculate maximum height of .square elements
    const squares = document.querySelectorAll('.square');
    let max = 0;
    squares.forEach(square => {
      const height = square.offsetHeight;
      if (height > max) {
        max = height;
      }
    });
    setMaxHeight(max);
    
    // Initialize portfolioItems
    const portfolioItems = [
      {
        category: '웹',
        title: 'Todolist',
        link: 'https://wjho96.github.io/todolist_react/build',
        github: 'https://github.com/wjho96/todolist_react',
        description: '프로젝트 Todolist는 저의 리액트 개발 경험을 향상시키기 위해 시작한 것입니다. 이 프로젝트에서 저는 전반적인 프론트엔드 개발 과정에서 많은 것을 배웠습니다. 주로 상태 관리와 컴포넌트 기반 설계에 집중했으며, 리액트 훅을 활용하여 기능을 구현하는 방법에 대해 심도 깊게 공부했습니다. 또한, GitHub을 통한 협업 경험을 쌓았고, 버전 관리와 코드 리뷰의 중요성을 깨달았습니다.',
        technologies: ['React JS'],
        image: todolist
      },
      {
        category: '웹',
        title: 'Starbucks',
        link: 'https://wjho96.github.io/starbucks_korea/',
        github: 'https://github.com/wjho96/starbucks_korea',
        description: '스타벅스 클론 프로젝트는 HTML, CSS, JavaScript를 활용하여 웹 사이트를 구축한 경험을 가지고 있습니다. 이 프로젝트에서 저는 웹 디자인과 사용자 경험(UX) 개선에 대해 깊이 고민하게 되었습니다. 특히, 반응형 웹 디자인을 구현함으로써 다양한 디바이스에서의 호환성을 고려했고, CSS 프레임워크를 사용하여 빠르게 스타일을 적용하는 방법을 익혔습니다.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: starbucks
      },
      {
        category: '웹',
        title: 'Swatch',
        link: 'https://wjho96.github.io/swatch/',
        github: 'https://github.com/wjho96/swatch',
        description: 'Swatch 프로젝트는 JavaScript를 중심으로 한 웹 개발에 대한 저의 이해를 높이기 위해 시작한 클론 프로젝트입니다. 이 경험을 통해 저는 DOM 조작과 이벤트 처리에 대한 실습을 많이 진행했습니다. 또한, 웹 페이지 성능 최적화와 코드의 모듈화에 대해 심도 깊게 고민하게 되었습니다. 이러한 경험들은 저의 프론트엔드 개발자로서의 역량을 크게 향상시키는 데 기여했습니다.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: swatch
      },
      {
        category: ['웹', '모바일'],
        title: 'Portfolio',
        link: 'https://wjho96.github.io/new_portfolio2/',
        github: 'https://github.com/wjho96/new_portfolio2.git',
        description: 'Portfolio 프로젝트는 저의 포트폴리오 웹사이트입니다. 이 프로젝트를 통해 저는 React JS를 사용하여 웹 및 모바일 환경에서의 개발 능력을 향상시키고자 했습니다. 프로젝트를 통해 저는 사용자 경험(UX)을 중시하며, 최신 웹 개발 기술을 활용하여 반응형 디자인을 구현하였습니다. 또한, GitHub을 통한 버전 관리와 협업 경험을 쌓았으며, 코드의 품질을 유지하기 위해 지속적으로 코드 리뷰와 리팩토링을 진행했습니다.',
        technologies: ['React JS'],
        image: '' // 이미지가 있으면 해당 이미지 경로로 설정
      },
      {
        category: ['웹', '모바일'],
        title: 'Life Logger',
        link: 'https://wjho96.github.io/life_logger/',
        github: 'https://github.com/wjho96/life_logger',
        description: 'Life Logger는 제 개인 포트폴리오 웹사이트입니다. 이 프로젝트를 통해 웹 및 모바일 환경에서의 개발 능력을 향상시키고자 하였습니다. 사용자 경험(UX)을 중시하며, 최신 웹 개발 기술을 활용하여 반응형 디자인을 구현했습니다. GitHub을 통한 버전 관리와 개인적인 프로젝트 관리를 진행하였으며, 모바일 기능 구현에 특히 힘썼습니다. 코드의 품질을 유지하기 위해 지속적으로 코드 리뷰와 리팩토링을 진행했습니다.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: '' // 이미지가 있으면 해당 이미지 경로로 설정  
      },
      // 추가 포트폴리오 항목들
    ];

    // Update filteredItems based on activeButton
    const filtered = activeButton === '전체'
      ? portfolioItems
      : portfolioItems.filter(item => Array.isArray(item.category) ? item.category.includes(activeButton) : item.category === activeButton);
    setFilteredItems(filtered);
  }, [activeButton]); // Only run useEffect when activeButton changes

  const techIcons = {
    'React JS': reactIcon,
    'HTML': htmlIcon,
    'CSS': cssIcon,
    'JavaScript': jsIcon,
    // 추가 기술 아이콘 매핑
  };

  return (
    <section id="portfolio" style={{ minHeight: `${maxHeight}px` }}>
      <div className="portfolio-header">
        <div className="title">포트폴리오</div>
        <div className="portfolio-menu">
          <button
            className={`btn ${activeButton === '전체' ? 'on' : ''}`}
            onClick={() => handleClick('전체')}
          >
            전체
          </button>
          <button
            className={`btn ${activeButton === '웹' ? 'on' : ''}`}
            onClick={() => handleClick('웹')}
          >
            웹
          </button>
          <button
            className={`btn ${activeButton === '모바일' ? 'on' : ''}`}
            onClick={() => handleClick('모바일')}
          >
            모바일
          </button>
        </div>
      </div>
      <div className="container">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div className="square" key={index} onClick={() => openPopup(item)}>
              <span></span>
              <span></span>
              <span></span>
              <div>
                <a href={item.link} target="_blank" rel="noopener noreferrer">보러가기</a>
                <p>{item.title}</p>
              </div>
            </div>
          ))
        ) : (
          <p>해당 카테고리에 포트폴리오가 없습니다.</p>
        )}
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
  <button className="popup-close" onClick={closePopup}></button>
  <h2>{selectedItem.title}</h2>
  <img src={selectedItem.image} alt={selectedItem.title} className="popup-image" />
  <p>{selectedItem.description}</p>
  <h3>사용된 기술</h3>
  <div className="tech-icons">
    {selectedItem.technologies.map((tech, index) => (
      <img key={index} src={techIcons[tech]} alt={tech} className="tech-icon" />
    ))}
  </div>
  <div className="popup-links">
    <a href={selectedItem.link} target="_blank" rel="noopener noreferrer">프로젝트 보기</a>
    <a href={selectedItem.github} target="_blank" rel="noopener noreferrer" className="github-link">
      <img src={githubIcon} alt="GitHub" className="github-icon" />
      GitHub
    </a>
  </div>
</div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
