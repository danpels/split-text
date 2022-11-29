console.log('testing connection webflow')
import './styles/style.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

/*
SplitText.min.js is a Club GreenSock perk

import { SplitText } from "gsap/SplitText";

Sign up at https://greensock.com/club or try them for free on CodePen or CodeSandbox
*/


gsap.registerPlugin(ScrollTrigger, SplitText);

let text = new SplitText('.content__text',{
  type: 'words'
})

gsap.from(text.words){
  opacity: 0
  scrollTrigger:{
    trigger: '.content__text',
    start: 'bottom bottom',
    end: 'top top',
    scrub: true,
    pin: '.content__wrapper'

  }
}