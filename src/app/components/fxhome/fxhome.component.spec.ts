import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxhomeComponent } from './fxhome.component';

describe('FxhomeComponent', () => {
  let component: FxhomeComponent;
  let fixture: ComponentFixture<FxhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
