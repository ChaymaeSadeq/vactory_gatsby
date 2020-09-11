import React, {useState, useEffect} from 'react';
import {
  Button,
  Icon,
} from 'vactory-ui';

export const BackToTopButton = () => {
  const [isVisible, setVisibility] = useState(false);

  const adjustVisibility = () => {
    setVisibility( window.scrollY / window.scrollMaxY * 100 > 33.3 );
  }

  useEffect(() => {
    console.log('effect run')
    window.addEventListener('scroll', adjustVisibility)

    return () => {
      window.removeEventListener('scroll', adjustVisibility);
    }
  });

  return <Button sx={{
    position: 'fixed',
    bottom: 50,
    right: 50,
    p: 15,
    bg: 'primary',
    color: 'white',
    boxShadow: 'buttons',
    border: '2px solid currentColor',
    transition: '.5s ease',
    borderRadius: 8,
    visibility: isVisible ? 'visible' : 'hidden',
    opacity: isVisible ? 1 : 0,

    '&:hover': {
      bg: 'white',
      color: 'primary',
    }
  }} onClick={ ()=> {window.scrollTo({top: 0, behavior: 'smooth'})}} >
    <Icon name="chevron-up" size="20px" />
  </Button>
}