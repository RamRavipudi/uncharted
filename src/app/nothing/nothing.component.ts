import { Component, OnInit } from '@angular/core';
import { gsap } from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
@Component({
  selector: 'app-nothing',
  templateUrl: './nothing.component.html',
  styleUrls: ['./nothing.component.scss']
})
export class NothingComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {

    gsap.registerPlugin(ScrollTrigger, Draggable);


    this.animation();
  }



animation(){
  var tl = gsap.timeline({
    scrollTrigger:{
      trigger:'.holder'
    }
  });

tl
  .fromTo(".holder", {yPercent:-100}, {duration: 0.5, yPercent:0})
  .fromTo(".holder img", {yPercent:100}, {duration: 0.5, yPercent: 0}, "<").repeat();
  
 

}





}