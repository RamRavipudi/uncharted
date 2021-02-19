import { Component, OnInit } from '@angular/core';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [{ 'image': '../../assets/download (1).jpeg' }, { 'image': '../../assets/download.jpeg' }, { 'image': '../../assets/images (1).jpeg' }, { 'image': '../../assets/images.jpeg' }]

  constructor() { }

  scroll: any;



  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger, Draggable);

    this.initScrollTriggers();

  }

  initScrollTriggers() {

    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.image-card', {

      scrollTrigger: {
        trigger: '.image-card',
        start:'top bottom',
        end:'bottom center',
        id:'imge',
        markers:true,
        toggleActions:'restart resume restart resume'

      },
      y: 100,
      scale: 1.5,
      duration: 2.5,
      ease:'expo.inOut',
      opacity:0
    });

    gsap.from('.background-card',{
      scrollTrigger : {
        trigger:'.background-card',
        toggleActions:'restart resume restart resume'
      },
      y:100,
      duration: 2,
      ease:'slow',
      opacity:0
      // scrub:true,
      // pin:'.about-container',
      // pinSpacing:false
    });


    gsap.from('.about-text', {
      scrollTrigger : {
        trigger:'.background-card',
        toggleActions:'restart resume restart resume',
        // markers:true,
      },
      y:50,
      duration: 2,
      opacity:0,
      ease:'slow',
      // scrub:true,
      // pin:true
    });


    gsap.from('.about-text--underline',{
      scrollTrigger : {
        trigger:'.background-card',
        toggleActions:'restart pause restart resume',
        // markers:true,
        onEnter: () => {gsap.set('.about-text--underline', {opacity:1})}
      },
      x:-400,
      duration: 2,
      ease:'slow',
      stagger:1,
      opacity:0,
      // scrub:true,
      // pin:true
    });
    
    
    gsap.from('.about-button',{
      scrollTrigger : {
        trigger:'.background-card',
        toggleActions:'restart pause restart resume',
        // markers:true,
        // scrub:true,
        // pin:true,
        onEnter: () => {gsap.set('.about-text--underline', {opacity:1})}
      },
      x:-400,
      duration: 2,
      ease:'expo.inOut',
      stagger:1,
      opacity:0,
      rotation:360
    });

    
  }


}
