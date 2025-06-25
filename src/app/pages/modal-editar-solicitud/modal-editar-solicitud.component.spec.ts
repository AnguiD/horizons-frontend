import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarSolicitudComponent } from './modal-editar-solicitud.component';

describe('ModalEditarSolicitudComponent', () => {
  let component: ModalEditarSolicitudComponent;
  let fixture: ComponentFixture<ModalEditarSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditarSolicitudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
