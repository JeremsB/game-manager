import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.less']
})
export class GameListComponent implements OnInit {

  gamePicture = 'https://image.shutterstock.com/image-photo/cheerful-businessman-thumbs-posing-smiling-260nw-371076662.jpg';
  constructor() { }

  ngOnInit() {
  }

}
