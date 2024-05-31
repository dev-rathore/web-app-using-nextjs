'use client';

import {
  useEffect,
} from 'react';
import './slide-in-on-scroll.css';

type Procedure = (...args: any[]) => void;

const debounce = (func: Procedure, wait = 20, immediate = true) => {
  let timeout: NodeJS.Timeout | null;
  return function(this: any, ...args: any[]) {
    const context = this;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout!);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const SlideInOnScroll = () => {
  let sliderImages: any;
  if (typeof document !== 'undefined') {
    sliderImages = document.querySelectorAll('.slide-in');
  }

  function checkSlide(e: any) {
    sliderImages.forEach((sliderImage: any) => {
      const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.clientHeight / 2;
      // offsetTop: The offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element.
      // sliderImage.clientHeight: The height property returns the height of an element.
      const imageBottom = sliderImage.offsetTop + sliderImage.clientHeight;
      const isHalfShown = slideInAt > sliderImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    });
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener('scroll', debounce(checkSlide));
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener('scroll', debounce(checkSlide));
      }
    }
  }, []);

  return (
    <div className='p-8 overflow-hidden'>
      <h1 className='text-3xl font-medium text-center mb-4'>Slide in on Scroll</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
      <div className='flex gap-4'>
        <div
          className='slide-in slide-right min-w-96 h-96 bg-gray-300'
        />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque ullam a atque modi aut minima quia numquam amet? Aperiam corporis aliquam nemo libero nostrum doloremque beatae quasi dolorem ad!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque ullam a atque modi aut minima quia numquam amet? Aperiam corporis aliquam nemo libero nostrum doloremque beatae quasi dolorem ad!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque ullam a atque modi aut minima quia numquam amet? Aperiam corporis aliquam nemo libero nostrum doloremque beatae quasi dolorem ad!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
      <div className='flex gap-4'>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque ullam a atque modi aut minima quia numquam amet? Aperiam corporis aliquam nemo libero nostrum doloremque beatae quasi dolorem ad!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque ullam a atque modi aut minima quia numquam amet? Aperiam corporis aliquam nemo libero nostrum doloremque beatae quasi dolorem ad!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
        </div>
        <div
          className='slide-in slide-left min-w-96 h-96 bg-gray-300'
        />
      </div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sapiente ipsam quam labore magnam fugit expedita libero velit numquam dolores est, hic laboriosam molestias maxime porro cum voluptatum vero quibusdam.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae ducimus quo sunt! Quasi qui ab neque corporis. Minus veniam maxime libero explicabo enim architecto minima cum asperiores laboriosam, odio sit.</p>
    </div>
  )
};

export default SlideInOnScroll;
