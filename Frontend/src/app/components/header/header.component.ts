import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(window.innerHeight, window.outerHeight, window.innerWidth, window.outerWidth);
  }

}
