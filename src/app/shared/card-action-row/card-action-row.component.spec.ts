import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActionRowComponent } from './card-action-row.component';

describe('CardActionRowComponent', () => {
  let component: CardActionRowComponent;
  let fixture: ComponentFixture<CardActionRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardActionRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardActionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
