import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDirtLabelComponent } from './the-dirt-label.component';

describe('TheDirtLabelComponent', () => {
  let component: TheDirtLabelComponent;
  let fixture: ComponentFixture<TheDirtLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheDirtLabelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheDirtLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
