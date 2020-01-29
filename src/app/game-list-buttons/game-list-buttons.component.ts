import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-list-buttons',
  templateUrl: './game-list-buttons.component.html',
  styleUrls: ['./game-list-buttons.component.less']
})
export class GameListButtonsComponent implements OnInit {

  @Input() gameName;

  buttons = ['Follow', 'Share', 'Buy'];

  constructor() { }

  ngOnInit() {
  }

  clicSurBouton(btnName) {
    alert('Vous venez de cliquer sur le bouton ' + btnName + ' de ' + this.gameName);
  }

}
