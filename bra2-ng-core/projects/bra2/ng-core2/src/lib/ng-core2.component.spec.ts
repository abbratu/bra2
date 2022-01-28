import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCore2Component } from './ng-core2.component';

describe('NgCore2Component', () => {
  let component: NgCore2Component;
  let fixture: ComponentFixture<NgCore2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCore2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
