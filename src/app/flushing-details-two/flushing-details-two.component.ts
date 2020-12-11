import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core' ;
import { r2 } from '../products';

@Component({
  selector: 'app-flushing-details-two',
  templateUrl: './flushing-details-two.component.html',
  styleUrls: ['./flushing-details-two.component.css']
})
export class FlushingDetailsTwoComponent implements OnInit {

  info = r2.hotel;
  @Input() hotel;

  constructor() { }

  ngOnInit() {
  }

}