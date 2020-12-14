import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core' ;

/* Importing data from products.ts file */
import { r1 } from '../products';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  /* Window alert when clicking submit button in flushing main page */
  share() {
    window.alert('You will get a response shortly!');
  }

  /* Importing data from products.ts file */
  profile = r1.image;
  @Input() image;

  constructor() { }

  ngOnInit() {
  }

}