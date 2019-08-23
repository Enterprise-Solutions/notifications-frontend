import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnesignalComponent } from './onesignal.component';

describe('OnesignalComponent', () => {
  let component: OnesignalComponent;
  let fixture: ComponentFixture<OnesignalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnesignalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnesignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
