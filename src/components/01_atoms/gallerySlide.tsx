import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { zdepth } from '../../lib/zdepth';


interface IGallerySlide {
  slideState: number
  image: string
}

interface IStyledSlide {
  image: string
}

const StyledSlide = styled.div`
  position: absolute;
  top: 0;
  left: 25%;
  height: 100%;
  width: 80%;
  border-radius: 5px;
  overflow: hidden;
  opacity: 0;
  background-size: cover;
  background-position: center;
  transform: scale(.8) translate3d(0,0,0);
  transition: all .8s;
  z-index: ${zdepth('low')};
  pointer-events: none;
  background-image: ${(p:IStyledSlide) => p.image};
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 110%;
    width: 110%;
    opacity: 1;
    background: rgb(var(--snow));
    transition: all .8s;
  }
  &.out{
    left: -10%;
    opacity: 0;
    z-index: ${zdepth('high')};
    transform: scale(1.1) translate3d(0,0,0);
  }
  &.current{
    left: 0;
    z-index: ${zdepth('high')};
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
    box-shadow: 10px 10px 30px rgba(0,0,0,.3);
    &:before{ opacity: 0; }
  }
  &.next{
    left: 10%;
    opacity: 1;
    box-shadow: 10px 10px 30px rgba(0,0,0,.1);
    transform: scale(.9) translate3d(0,0,0);
    z-index: ${zdepth('mid')};
    &:before{ opacity: .4; }
  }
  &.last{
    left: 20%;
    opacity: 1;
    transform: scale(.8) translate3d(0,0,0);
    z-index: ${zdepth('lowest')};
    &:before{ opacity: .8; }
  }
`;

const GallerySlide = (props: IGallerySlide) => {
  const slideRef = useRef(null);

  useEffect(() => {
    if (props.slideState === 4) {
      setTimeout(() => {
        slideRef.current.classList.remove('out');
      }, 200);
    }
  },[props.slideState]);


  function getClasses(index) {
    switch(index) {
      case 1:
        return 'current';
      case 2:
        return 'next';
      case 3:
        return 'last';
      case 4:
        return 'out';
      default:
        return '';
    }
  }

  return (
    <StyledSlide
      className={`slide ${getClasses(props.slideState)}`}
      image={props.image}
      ref={slideRef}
    ></StyledSlide>
  )
}


export default GallerySlide;