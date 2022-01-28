import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bra2NgCoreComponent } from './bra2-ng-core.component';

describe('Bra2NgCoreComponent', () => {
  let component: Bra2NgCoreComponent;
  let fixture: ComponentFixture<Bra2NgCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bra2NgCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bra2NgCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
