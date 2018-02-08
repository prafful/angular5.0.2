import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeService2Component } from './consume-service2.component';

describe('ConsumeService2Component', () => {
  let component: ConsumeService2Component;
  let fixture: ComponentFixture<ConsumeService2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeService2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeService2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
