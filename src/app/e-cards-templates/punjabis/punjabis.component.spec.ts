import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunjabisComponent } from './punjabis.component';

describe('PunjabisComponent', () => {
  let component: PunjabisComponent;
  let fixture: ComponentFixture<PunjabisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunjabisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PunjabisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
