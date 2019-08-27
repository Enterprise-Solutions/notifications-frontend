import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseNotificacionesComponent } from './firebase-notificaciones.component';

describe('OnesignalNotificacionesComponent', () => {
  let component: FirebaseNotificacionesComponent;
  let fixture: ComponentFixture<FirebaseNotificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseNotificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseNotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
