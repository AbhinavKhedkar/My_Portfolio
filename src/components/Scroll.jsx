import { useState, useEffect } from 'react';
import { FaChevronUp } from "react-icons/fa";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          id="myBtn"
          title="Go to top"
          style={{
            display: 'block',
            position: 'fixed',
            bottom: '20px',
            right: '30px',
            zIndex: '99',
            fontSize: '18px',
            border: 'none',
            outline: 'none',
            backgroundColor: 'red',
            color: 'white',
            cursor: 'pointer',
            padding: '15px',
            borderRadius: '100%',
          }}
        >
          <FaChevronUp />
        </button>
      )}
    </>
  );
};

export default Scroll;
