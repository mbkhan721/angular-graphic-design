import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core' ;
import { r1 } from '../products';

@Component({
  selector: 'app-flushing-details',
  templateUrl: './flushing-details.component.html',
  styleUrls: ['./flushing-details.component.css']
})
export class FlushingDetailsComponent implements OnInit {

  queens = r1.garden;
  @Input() garden;

  constructor() { }

  ngOnInit() {
  }

}