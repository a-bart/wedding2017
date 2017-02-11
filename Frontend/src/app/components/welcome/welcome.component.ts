import { Component, OnInit } from '@angular/core';
import { MnFullpageService } from 'ng2-fullpage';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.styl']
})
export class WelcomeComponent implements OnInit {

  constructor(private fullpageService: MnFullpageService) { }

  onArrowClick() {

  }

  ngOnInit() {
  }

}
