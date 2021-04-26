import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImperialOneComponent } from './imperial-one.component';

describe('ImperialOneComponent', () => {
  let component: ImperialOneComponent;
  let fixture: ComponentFixture<ImperialOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImperialOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImperialOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
