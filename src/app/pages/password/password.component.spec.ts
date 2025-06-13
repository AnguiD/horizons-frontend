import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RecuperarPasswordComponent } from './password.component';

class RouterStub {
  navigate(path: any[]) {}
}

describe('RecuperarPasswordComponent', () => {
  let component: RecuperarPasswordComponent;
  let fixture: ComponentFixture<RecuperarPasswordComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperarPasswordComponent],
      providers: [{ provide: Router, useClass: RouterStub }]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperarPasswordComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sendRecoveryLink sin correo no navega', () => {
    const spy = spyOn(router, 'navigate');
    component.sendRecoveryLink('');
    expect(spy).not.toHaveBeenCalled();
  });

  it('sendRecoveryLink con correo válido navega a /login', () => {
    const spy = spyOn(router, 'navigate');
    component.sendRecoveryLink('usuario@empresa.com');
    expect(spy).toHaveBeenCalledWith(['/login']);
  });

  it('goToLogin debe navegar a /login', () => {
    const spy = spyOn(router, 'navigate');
    component.goToLogin();
    expect(spy).toHaveBeenCalledWith(['/login']);
  });
});
