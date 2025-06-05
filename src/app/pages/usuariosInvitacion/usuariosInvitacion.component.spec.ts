import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosInvitacionComponent } from './usuariosInvitacion.component';

describe('SidebarComponent', () => {
    let component: UsuariosInvitacionComponent ;
    let fixture: ComponentFixture<UsuariosInvitacionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UsuariosInvitacionComponent ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(UsuariosInvitacionComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});