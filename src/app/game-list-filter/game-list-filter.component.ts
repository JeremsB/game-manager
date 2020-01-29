import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-list-filter',
  templateUrl: './game-list-filter.component.html',
  styleUrls: ['./game-list-filter.component.less']
})
export class GameListFilterComponent implements OnInit {

  @Input()
  color: string;

  @Input()
  categories = [ 'RTS', 'RPG', 'FPS' ];

  constructor() { }

  ngOnInit() {
  }

}
