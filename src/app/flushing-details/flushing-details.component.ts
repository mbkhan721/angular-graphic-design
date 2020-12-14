import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core' ;

/* Importing data from products.ts file */
import { r1 } from '../products';

@Component({
  selector: 'app-flushing-details',
  templateUrl: './flushing-details.component.html',
  styleUrls: ['./flushing-details.component.css']
})
export class FlushingDetailsComponent implements OnInit {

  /* Importing data from products.ts file */
  queens = r1.garden;
  @Input() garden;

  constructor() { }

  ngOnInit() {
  }

}