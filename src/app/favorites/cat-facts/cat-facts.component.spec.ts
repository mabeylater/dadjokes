import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCatFactsComponent } from './cat-facts.component';

describe('CatFactsComponent', () => {
  let component: MyCatFactsComponent;
  let fixture: ComponentFixture<MyCatFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCatFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCatFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
