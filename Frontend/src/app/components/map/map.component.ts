import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.styl']
})
export class MapComponent implements OnInit {

  lat: number = 53.905477;
  lng: number = 27.522069;

  constructor() { }

  ngOnInit() {
  }

}
