import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCatFactComponent } from './get-cat-fact.component';

describe('GetCatFactComponent', () => {
  let component: GetCatFactComponent;
  let fixture: ComponentFixture<GetCatFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCatFactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCatFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
