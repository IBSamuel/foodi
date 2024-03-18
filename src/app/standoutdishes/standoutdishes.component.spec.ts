import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandoutdishesComponent } from './standoutdishes.component';

describe('StandoutdishesComponent', () => {
  let component: StandoutdishesComponent;
  let fixture: ComponentFixture<StandoutdishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandoutdishesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandoutdishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
