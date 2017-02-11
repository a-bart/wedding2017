import { Component, Input } from '@angular/core';
import { MnFullpageService, MnFullpageOptions } from "ng2-fullpage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {

  @Input() public options: MnFullpageOptions = new MnFullpageOptions({
    controlArrows: false,
    loopHorizontal: false,
    scrollingSpeed: 1000,

    menu: '.menu',
    css3: true,
    anchors: [
        'welcome', 'about-us', 'story',
        'countdown', 'map'
    ],
  });
}
