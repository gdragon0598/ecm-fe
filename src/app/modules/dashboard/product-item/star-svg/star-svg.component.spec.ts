import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarSvgComponent } from './star-svg.component';

describe('StarSvgComponent', () => {
  let component: StarSvgComponent;
  let fixture: ComponentFixture<StarSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarSvgComponent]
    });
    fixture = TestBed.createComponent(StarSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
