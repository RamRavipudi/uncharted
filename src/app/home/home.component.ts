import { Component, OnInit } from '@angular/core';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MatDialog } from '@angular/material/dialog'
import { ContactComponent } from '../contact/contact.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [{ 'image': '../../assets/material-image.png' }, { 'image': '../../assets/download.jpeg' }, { 'image': '../../assets/material-image.png' }, { 'image': '../../assets/images.jpeg' }]

  constructor(public dialog: MatDialog) { }

  scroll: any;

  openContact() {
    setTimeout(() => {
      this.dialog.open(ContactComponent);

    }, 200);


  }

  ngOnInit(): void {

    const video: HTMLVideoElement = <HTMLVideoElement>document.querySelector('.video-content');

    video.play();
    video.muted = true;

    gsap.registerPlugin(ScrollTrigger, Draggable);

    this.initScrollTriggers();

  }

  initScrollTriggers() {

    gsap.registerPlugin(ScrollTrigger)

    // gsap.to('.onload-image', {
    //   scrollTrigger: {

    //     trigger: '.onload-image',
    //     toggleActions: 'restart resume restart pause',
    //     onEnter: () => { gsap.set('.onload-image', { opacity: 1 }) },

    //     onLeave: () => { gsap.set('.onload-image', { opacity: 0 }) }

    //   },
    //   y: 200,
    //   x: -400,
    //   scale: 14,
    //   duration: 2,
    //   ease: 'sine',
    //   opacity: 0,
    //   color: '#896249'

    // });

    // about animation

    gsap.from('.image-card', {

      scrollTrigger: {
        trigger: '.image-card',
        // markers:true,
        toggleActions: 'restart resume none resume'

      },
      y: 100,
      duration: 2,
      ease: 'slow',
    });

    gsap.from('.background-card', {
      scrollTrigger: {
        trigger: '.background-card',
        toggleActions: 'restart resume none resume'
      },
      y: 200,
      duration: 2,
      ease: 'slow',
      // scrub:true,
      // pin:'.about-container',
      // pinSpacing:false
    });


    gsap.from('.about-text', {
      scrollTrigger: {
        trigger: '.background-card',
        toggleActions: 'restart resume none resume',
        // markers:true,
      },
      y: 50,
      duration: 2,
      opacity: 0,
      ease: 'slow',
      // scrub:true,
      // pin:true
    });


    let underline = gsap.timeline({
      scrollTrigger: {
        trigger: '.background-card',
        toggleActions: 'restart pause none resume',

      }
    });

    underline.fromTo('.about-text--underline',
      {
        width: "0%",
        left: "0%",
      }, {
      width: "100%",
      left: "100%",
      duration: 2,
      immediateRender: false
    })


    // TweenLite.fromTo('.about-text--underline',1,{drawSVG:'0 0'},{drawSVG:'100% 100%'})

    // gsap.from('.about-text--underline', {
    //   scrollTrigger: {
    //     trigger: '.background-card',
    //     toggleActions: 'restart pause restart resume',

    //     // markers:true,
    //     // onEnter: () => { gsap.set('.about-text--underline', 
    //     // { opacity: 1}) }
    //   },

    //   x: 0,
    //   duration: 4,
    //   ease: 'elastic',
    //   stagger: 1,
    //   opacity: 0,


    //   // scrub:true,
    //   // pin:true
    // });


    gsap.from('.about-button', {
      scrollTrigger: {
        trigger: '.background-card',
        toggleActions: 'restart pause none resume',
        // markers:true,
        // scrub:true,
        // pin:true,
      },
      y: 100,
      duration: 2,
      ease: 'slow',
      stagger: 1,
      opacity: 0,
      delay: 2,
    });


    // contact animation

    gsap.from('section',{ 
      scrollTrigger: {
        trigger: '.container',
        toggleActions: 'restart pause none resume',
        // markers:true,
        // scrub:true,
        // pin:true,
      },
      y: 100,
      duration: 2,
      ease: 'slow',
      stagger: 1,
      delay: 2,

    });


    gsap.from('.contact-button', {
      scrollTrigger: {
        trigger: '.contact-button',
        toggleActions: 'restart pause none resume',
        // markers:true,
        // scrub:true,
        // pin:true,
      },
      y: 100,
      duration: 2,
      ease: 'slow',
      stagger: 1,
      delay: 2,
    });


    // work Animations


    gsap.from('.work-button', {
      scrollTrigger: {
        trigger: '.work-button',
        toggleActions: 'restart pause none resume',
        // markers:true,
        // scrub:true,
        // pin:true,
      },
      y: 600,
      duration: 2,
      ease: 'slow',
      stagger: 1,
      delay: 2,
    });



  }


}

