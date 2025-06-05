import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesRecibidasComponent } from './solicitudesRecibidas.component';

describe('SolicitudesRecibidasComponent', () => {
  let component: SolicitudesRecibidasComponent;
  let fixture: ComponentFixture<SolicitudesRecibidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudesRecibidasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesRecibidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
