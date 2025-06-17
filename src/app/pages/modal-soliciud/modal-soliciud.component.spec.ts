import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSoliciudComponent } from './modal-soliciud.component';

describe('ModalSoliciudComponent', () => {
  let component: ModalSoliciudComponent;
  let fixture: ComponentFixture<ModalSoliciudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalSoliciudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSoliciudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
