import { GameFilter } from './../game-list-filter/game-list-filter.component';
import { Component, OnInit } from '@angular/core';

import { Game } from './game';
import { GameActions } from './game-actions';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  defaultSize = 300;
  width = this.defaultSize;

  entities: Game[] = [{
    id: 1,
    name: 'Un super jeu 1',
    description: 'Vu le titre ce jeu est probablement super',
    editor: 'The Behemoth',
    image: 'https://image.shutterstock.com/image-photo/cheerful-businessman-thumbs-posing-smiling-260nw-371076662.jpg',
    note: 9.0,
    category: 'RPG'
  }, {
    id: 2,
    name: 'Un super jeu 2',
    description: 'Vu le titre ce jeu est probablement super',
    editor: 'Activision',
    image: 'https://image.shutterstock.com/image-photo/image-successful-old-woman-showing-600w-122204170.jpg',
    note: 8,
    category: 'FPS'
  }, {
    id: 3,
    name: 'Un super jeu 3',
    description: 'Vu le titre ce jeu est probablement super',
    editor: 'The Behemoth',
    image: 'https://image.shutterstock.com/image-photo/young-african-american-man-gives-260nw-157500044.jpg',
    note: 7.5,
    category: 'RPG'
  }, {
    id: 4,
    name: 'Un super jeu 4',
    description: 'Vu le titre ce jeu est probablement super',
    editor: 'The Behemoth',
    image: 'https://image.shutterstock.com/image-photo/happy-senior-man-giving-thumb-600w-73143208.jpg',
    note: 9.8,
    category: 'Gestion'
  }, {
    id: 5,
    name: 'Un super jeu 5',
    description: 'Vu le titre ce jeu est probablement super',
    editor: 'The Behemoth',
    image: 'https://image.shutterstock.com/image-photo/businessman-showing-thumbs-closeup-shot-600w-533368390.jpg',
    note: 7.8,
    category: 'Gestion'
  }];

  filteredEntities = this.entities;

  constructor() { }

  ngOnInit() {
    // this.width = document.querySelector('article').offsetWidth;
  }

  truncate(value: string) {
    const words = value.split(' ', 20);

    return words.join(' ') + (words.length > 20 ? + '...' : '');
  }

  sizeUp() {
    this.width += 10;
  }

  sizeDown() {
    this.width = Math.max(100, this.width - 10);
  }

  sizeReset() {
    this.width = this.defaultSize;
  }

  onActionClick(action: GameActions, game: Game) {
    alert(`${['follow', 'share', 'buy'][action]} the game nammed ${game.name}`);
  }

  onFilter(filterForm: GameFilter) {
    this.filteredEntities = this.entities
        .filter(e => (!filterForm.name || e.name.toLocaleLowerCase().includes(filterForm.name))
            && (!filterForm.category || e.category === filterForm.category)
            && (!filterForm.editor || e.editor.toLowerCase().includes(filterForm.editor)));
  }
}
