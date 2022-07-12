import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-prestations',
  templateUrl: './prestations.component.html',
  styleUrls: ['./prestations.component.scss']
})
export class PrestationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
