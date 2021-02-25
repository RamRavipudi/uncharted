import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router';
import { TweenMax } from 'gsap';
import {TimelineMax} from 'gsap';
import SplitText from 'gsap';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  slides = [{ 'image': '../../assets/material/material-image.png' }, { 'image': '../../assets/material/projects-2.jpg' }, { 'image': '../../assets/material/projects-3.jpg' }, { 'image': '../../assets/material/projects.jpg' }]

  workslides = [{ 'image': '../../assets/projects/fendi.jpg' }, { 'image': '../../assets/projects/hyatt.jpg' }, { 'image': '../../assets/projects/mandrain.jpg' }, { 'image': '../../assets/projects/munich.jpg' }]
  constructor(public dialog: MatDialog, public router: Router) { }

  scroll: any;

  openContact() {
    setTimeout(() => {
      this.router.navigate(['/contact']);

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




//     var tl1 = new TimelineMax;

// tl1.from('.holder', {y:100, duration:2.5, ease: 'Power2.easeOut'}, 0.5)
// .from('#about-illustration', {y:-100, duration:2.5, ease: 'Power2.easeOut'}, 0.5);


    let illu = gsap.timeline({
      scrollTrigger: {
        trigger: '.holder',
        toggleActions: 'restart none none  restart',

      },
    });
    

    illu.fromTo('.holder',
    {
      yPercent:100,

    },{
        yPercent:0,
        duration:5,
       
        
 
    }
   ).fromTo('#about-illustration',{
    //  yPercent:-100,

    height:'7%',
    bottom:'100%'

   },{
      height:'100%',
      bottom:'0%',
       duration:5,
       ease:'slow'
      
       
       

   },
   "<").reverse();


  //  

  let rightImage = gsap.timeline({
    scrollTrigger: {
      trigger: '.antique-rightImage',
      toggleActions: 'restart none none  none',

    },
  });
  

  rightImage.fromTo('.antique-rightImage',
  {
    yPercent:100,

  },{
      yPercent:0,
      duration:5,
     
      

  }
 ).fromTo('.antique-holder',{
  //  yPercent:-100,

  height:'7%',
  bottom:'100%'

 },{
    height:'100%',
    bottom:'0%',
     duration:5,
     ease:'slow'
  
 },
 "<").reverse();

    // 

    let work = gsap.timeline({
      scrollTrigger: {
        trigger: '.work-carousel',
        toggleActions: 'restart none none  restart',

      },
    });
    

    work.fromTo('.work-carousel',
    {
      yPercent:100,

    },{
        yPercent:0,
        duration:5,
       
        
 
    }
   ).fromTo('.carousel-holder',{
    //  yPercent:-100,

    height:'7%',
    bottom:'100%'

   },{
      height:'100%',
      bottom:'0%',
       duration:5,
       ease:'slow'
      
       
       

   },
   "<").reverse();
  
  


    let underline = gsap.timeline({
      scrollTrigger: {
        trigger: '.background-card',
        toggleActions: 'restart none none none',

      },
    });

    underline.fromTo('.about-text--underline',
      {
        width: "0%",
        left: "0%",
      }, {
      width: "80%",
      left: "100%",
      duration: 3,
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

// const titleSplit = new SplitText('h1',{
//     type:"lines",
//     linesClass:"split-child"
// });

// const parentSplit = new SplitText('h1', {
//   linesClass:'split-parent'
// });

// gsap.from(titleSplit.lines,{
//   duration:1.5,
//   yPercent:100,
//   ease:"power4",
//   stagger:0.1
// });


    // gsap.from('.about-button', {
    //   scrollTrigger: {
    //     trigger: '.background-card',
    //     toggleActions: 'restart pause none resume',
    //     // markers:true,
    //     // scrub:true,
    //     // pin:true,
    //   },
    //   y: 100,
    //   duration: 1.5,
    // });


    // contact animation



    gsap.from('.contact-container--title__text', {
      scrollTrigger: {
        trigger: '.contact',
        toggleActions: 'restart resume none resume',
        // markers:true,
      },
      y: 100,
      duration: 2,
      ease: 'slow',
      // scrub:true,
      // pin:true
    });


    gsap.from('.contact-button', {
      scrollTrigger: {
        trigger: '.contact-button',
        toggleActions: 'play none none none',
        // markers:true,
        // scrub:true,
        // pin:true,
      },
      y: 100,
      duration: 1,
      ease: 'power4.easeOut',
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
      duration: 12,
      ease: 'slow',
      stagger: 1,
      delay: 2,
    });

    gsap.from('.work-carousel', {
      scrollTrigger: {
        trigger: '.work',
        toggleActions: 'restart resume none resume',
        // markers:true,
      },
      y: 100,
      duration: 2,
      ease: 'slow',
      // scrub:true,
      // pin:true
    });

    gsap.from('.work-container--title__text', {
      scrollTrigger: {
        trigger: '.work',
        toggleActions: 'restart resume none resume',
        // markers:true,
      },
      y: 100,
      duration: 2,
      ease: 'slow',
      // scrub:true,
      // pin:true
    });



    // antique animations

    gsap.from('.antique-left--image', {

      scrollTrigger: {
        trigger: '.antique-left--image',
        // markers:true,
        toggleActions: 'restart resume none resume'

      },
      y: 100,
      duration: 2,
      ease: 'slow',
    });

   

    


    gsap.from('.antique-left--text', {
      scrollTrigger: {
        trigger: '.antique-left--text',
        toggleActions: 'restart resume none resume',
        // markers:true,
      },
      y: 50,
      duration: 2,
      ease: 'slow',
      // scrub:true,
      // pin:true
    });

    gsap.from('.antique-right--text', {
      scrollTrigger: {
        trigger: '.antique-right--text',
        toggleActions: 'restart resume none resume',
        // markers:true,
      },
      y: 50,
      duration: 2,
      ease: 'slow',
      // scrub:true,
      // pin:true
    });


    let aUnderline = gsap.timeline({
      scrollTrigger: {
        trigger: '.antique-underline',
        toggleActions: 'restart pause none resume',

      }
    });

    aUnderline.fromTo('.antique-underline',
      {
        width: "0%",
        left: "0%",
      }, {
      width: "100%",
      left: "100%",
      duration: 2,
      immediateRender: false
    });


    gsap.from('.pro-container--title__text', {
      scrollTrigger: {
        trigger: '.pro',
        toggleActions: 'restart resume none resume',
        // markers:true,
      },
      y: 100,
      duration: 2,
      ease: 'slow',
      // scrub:true,
      // pin:true
    });

    // material animations

  //   let carousel = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.material-container--carousel',
  //       toggleActions: 'restart none none  none',

  //     },
  //   });
    

  //   carousel.fromTo('.material-container--carousel',
  //   {
  //     yPercent:100,

  //   },{
  //       yPercent:0,
  //       duration:5,
       
        
 
  //   }
  //  ).fromTo('.material-carousel',{
  //   //  yPercent:-100,

  //   height:'7%',
  //   bottom:'100%'

  //  },{
  //     height:'100%',
  //     bottom:'0%',
  //      duration:5,
  //      ease:'slow'
      
       
       

  //  },
  //  "<").reverse();

    gsap.from('.material-container--title__text', {
      scrollTrigger: {
        trigger: '.materials',
        toggleActions: 'restart none none none',
        // markers:true,
      },
      y: 100,
      duration: 2,
      ease: 'power4.easeOut',

      // scrub:true,
      // pin:true
    });




  }


}

