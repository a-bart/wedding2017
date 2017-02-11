import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.styl']
})
export class TimerComponent implements OnInit {

  intervalId = 0;

  givenDate:any = new Date("22 July 2017 09:00");
  now:any = new Date();
  dateDifference:any = (this.givenDate - this.now);

  week_title:string;
  day_title:string;
  hour_title:string;
  minute_title:string;
  second_title:string;

  weeks = this.dateDifference / (1000 * 60 * 60 * 24 * 7);
  days = (this.dateDifference - (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24);
  hours = this.dateDifference / (1000 * 60 * 60);
  minutes = this.dateDifference / (1000 * 60);
  seconds = this.dateDifference / 1000;

  days_diff = (this.dateDifference / (1000 * 60 * 60 * 24) - this.weeks * 7);
  hours_diff = (this.dateDifference / (1000 * 60 * 60) - this.days * 24);
  minutes_diff = (this.dateDifference / (1000 * 60) - this.hours * 60);
  seconds_diff = (this.dateDifference / (1000) - this.minutes * 60);

  clearTimer() { clearInterval(this.intervalId); }

  declOfNum(number, titles) {
    var cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
  }

  countdown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {

      this.dateDifference -= 1 * 1000;

      var units: any = {
        weeks: 1000 * 60 * 60 * 24 * 7,
        days: (1000 * 60 * 60 * 24),
        hours: (1000 * 60 * 60),
        minutes: (1000 * 60),
        seconds: 1000,
        milliseconds: 1
      };

      this.weeks = Math.floor(this.dateDifference / units.weeks);
      this.days = Math.floor(this.dateDifference / units.days)
      this.hours = Math.floor(this.dateDifference / units.hours);
      this.minutes = Math.floor(this.dateDifference / units.minutes);
      this.seconds = Math.floor(this.dateDifference / units.seconds);

      this.days_diff = Math.floor(this.dateDifference / units.days) - this.weeks * 7;
      this.hours_diff = Math.floor(this.dateDifference / units.hours) - this.days * 24;
      this.minutes_diff = Math.floor(this.dateDifference / units.minutes) - this.hours * 60;
      this.seconds_diff = Math.floor(this.dateDifference / units.seconds) - this.minutes * 60;

      this.week_title = this.declOfNum(this.weeks, ['неделя', 'недели', 'недель']);
      this.day_title = this.declOfNum(this.days_diff, ['день', 'дня', 'дней']);
      this.hour_title = this.declOfNum(this.hours_diff, ['час', 'часа', 'часов']);
      this.minute_title = this.declOfNum(this.minutes_diff, ['минуту', 'минуты', 'минут']);
      this.second_title = this.declOfNum(this.seconds_diff, ['секунду', 'секунды', 'секунд']);
    }, 1000);
  }

  ngOnInit() {
    this.countdown();
    console.log(this.declOfNum(25, ['день', 'дня', 'дней']));
  }
}
