import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import a from '../assets/a.mp4';
import a1 from '../assets/a1.mp4';
import a2 from '../assets/a2.mp4';
import a3 from '../assets/a3.mp4';
import a4 from '../assets/a4.mp4';
import n from '../assets/n.mp4';
import n1 from '../assets/n1.mp4';

const videos = [a, a1, a2, a3, a4, n, n1];

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pauseAllVideos = () => {
    videoRefs.current.forEach(video => {
      if (video && !video.paused) {
        video.pause();
      }
    });
  };

  const handleSlideChange = (newIndex) => {
    pauseAllVideos();
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    handleSlideChange((currentIndex + 1) % videos.length);
  };

  const prevSlide = () => {
    handleSlideChange((currentIndex - 1 + videos.length) % videos.length);
  };

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds exact
    
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) {
          pauseAllVideos();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handlePlay = (idx) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== idx && video && !video.paused) {
        video.pause();
      }
    });
  };

  const slideWidth = isMobile ? 85 : 50; 
  const offset = 50 - (slideWidth / 2) - (currentIndex * slideWidth);

  return (
    <div className="overview-section" id="overview" ref={sectionRef}>
      <div className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
        <h2>Overview</h2>
        <p style={{ margin: 0 }}>Explore our premium video content and get a deeper look.</p>
      </div>
      
      <div 
        className="slider-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        onTouchCancel={() => setIsPaused(false)}
      >
        <button className="slider-arrow prev-arrow" onClick={prevSlide} aria-label="Previous Video">
          <ChevronLeft size={32} />
        </button>
        <button className="slider-arrow next-arrow" onClick={nextSlide} aria-label="Next Video">
          <ChevronRight size={32} />
        </button>

        <div 
          className="slider-track" 
          style={{ transform: `translateX(${offset}%)` }}
        >
          {videos.map((vid, idx) => (
            <div 
              className={`slide ${idx === currentIndex ? 'active' : ''}`} 
              key={idx}
              style={{ flex: `0 0 ${slideWidth}%` }}
              onClick={() => {
                if(idx !== currentIndex) {
                    handleSlideChange(idx);
                }
              }}
            >
              <div className="video-frame">
                <video 
                  ref={el => videoRefs.current[idx] = el}
                  src={vid} 
                  controls 
                  controlsList="nodownload"
                  playsInline
                  preload="metadata"
                  onPlay={() => handlePlay(idx)}
                  onClick={(e) => e.stopPropagation()}
                ></video>
              </div>
            </div>
          ))}
        </div>
        
        <div className="slider-dots">
          {videos.map((_, idx) => (
            <button 
              key={idx} 
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => handleSlideChange(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
