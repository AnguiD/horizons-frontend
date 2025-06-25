import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudChatComponent } from './solicitud-chat.component';

describe('SolicitudChatComponent', () => {
  let component: SolicitudChatComponent;
  let fixture: ComponentFixture<SolicitudChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
