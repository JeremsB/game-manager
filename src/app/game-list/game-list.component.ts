import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.less']
})
export class GameListComponent implements OnInit {

  cards = [
    ['Un super jeu', 'Gestion', 'https://image.shutterstock.com/image-photo/cheerful-businessman-thumbs-posing-smiling-260nw-371076662.jpg', 9, 'Vu le titre ce jeu est probablement super'],
    ['Un super jeu', 'RPG', 'https://image.shutterstock.com/image-photo/image-successful-old-woman-showing-600w-122204170.jpg', 8, 'Vu le titre ce jeu est probablement super'],
    ['Un super jeu', 'FPS', 'https://image.shutterstock.com/image-photo/young-african-american-man-gives-260nw-157500044.jpg', 9, 'Vu le titre ce jeu est probablement super'],
    ['Un super jeu', 'Gestion', 'https://image.shutterstock.com/image-photo/happy-senior-man-giving-thumb-600w-73143208.jpg', 10, 'Vu le titre ce jeu est probablement super'],
    ['Un super jeu', 'FPS', 'https://image.shutterstock.com/image-photo/businessman-showing-thumbs-closeup-shot-600w-533368390.jpg', 9, 'Vu le titre ce jeu est probablement super']
  ];
  constructor() { }

  ngOnInit() {
  }

}
