import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupertaskComponent } from './supertask.component';

describe('SupertaskComponent', () => {
  let component: SupertaskComponent;
  let fixture: ComponentFixture<SupertaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupertaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupertaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
