import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJokesComponent } from './jokes.component';

describe('JokesComponent', () => {
  let component: MyJokesComponent;
  let fixture: ComponentFixture<MyJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
