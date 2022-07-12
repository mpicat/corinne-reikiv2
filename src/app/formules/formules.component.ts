import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-formules',
  templateUrl: './formules.component.html',
  styleUrls: ['./formules.component.scss']
})
export class FormulesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
