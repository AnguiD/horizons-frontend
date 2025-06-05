import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUsuarioComponent } from './editarUsuarios.component';

describe('EditarUsuarioComponent', () => {
    let component: EditarUsuarioComponent;
    let fixture: ComponentFixture<EditarUsuarioComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [EditarUsuarioComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(EditarUsuarioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});