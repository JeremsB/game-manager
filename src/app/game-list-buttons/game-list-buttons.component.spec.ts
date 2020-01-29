import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListButtonsComponent } from './game-list-buttons.component';

describe('GameListButtonsComponent', () => {
  let component: GameListButtonsComponent;
  let fixture: ComponentFixture<GameListButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameListButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
