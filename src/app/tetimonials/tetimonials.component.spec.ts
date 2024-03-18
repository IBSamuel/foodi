import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetimonialsComponent } from './tetimonials.component';

describe('TetimonialsComponent', () => {
  let component: TetimonialsComponent;
  let fixture: ComponentFixture<TetimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TetimonialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TetimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
