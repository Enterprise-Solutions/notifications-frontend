import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnesignalNotificacionesComponent } from './onesignal-notificaciones.component';

describe('OnesignalNotificacionesComponent', () => {
  let component: OnesignalNotificacionesComponent;
  let fixture: ComponentFixture<OnesignalNotificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnesignalNotificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnesignalNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
