import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosComponent } from './usuarios.component';

describe('SegurosComponent', () => {
    let component: UsuariosComponent;
    let fixture: ComponentFixture<UsuariosComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UsuariosComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(UsuariosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});