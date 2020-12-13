import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core' ;
import { r1 } from '../products';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {

  share() {
    window.alert('You will get a response shortly!');
  }

  profile = r1.image;
  @Input() image;

  constructor() { }

  ngOnInit() {
  }

}