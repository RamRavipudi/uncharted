import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, Scroll} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  panelOpenState=false;

  constructor(private router:Router, viewportScroller: ViewportScroller) { 
    
    
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }

}
