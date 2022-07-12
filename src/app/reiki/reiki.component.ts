import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-reiki',
  templateUrl: './reiki.component.html',
  styleUrls: ['./reiki.component.scss']
})
export class ReikiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
