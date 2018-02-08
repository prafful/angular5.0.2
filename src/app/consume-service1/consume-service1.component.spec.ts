import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeService1Component } from './consume-service1.component';

describe('ConsumeService1Component', () => {
  let component: ConsumeService1Component;
  let fixture: ComponentFixture<ConsumeService1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeService1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeService1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
