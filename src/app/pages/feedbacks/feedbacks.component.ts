import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

interface Feedback {
    id: number;
    nombre: string;
    puesto: string;
    iniciales: string;
    avatarColor: string;
    fecha: Date;
    tipo: 'Reconocimiento' | 'Constructivo' | 'Reconocimiento';
    titulo: string;
    texto: string;
    calificacion: number;
    mostrarRespuesta?: boolean;
    respuesta?: string;
}

interface Stats {
    promedio: string;
    recibidos: number;
    dados: number;
    esteMes: number;
}

@Component({
    selector: 'app-feedbacks',
    standalone: true,
    imports: [CommonModule, HeaderComponent, SidebarComponent, FormsModule],
    templateUrl: './feedbacks.component.html',
    styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent {
    currentTab: 'recibidos' | 'dados' | 'pendientes' = 'recibidos';

    stats: Stats = {
        promedio: '4.6',
        recibidos: 23,
        dados: 15,
        esteMes: 8
    };

    recibidos: Feedback[] = [
        {
            id: 1,
            nombre: 'María González',
            puesto: 'Gerente de Recursos Humanos',
            iniciales: 'MG',
            avatarColor: '#6366f1',
            fecha: new Date('2024-01-15'),
            tipo: 'Reconocimiento',
            titulo: 'Excelente liderazgo en el proyecto Q4',
            texto:
                'Tu capacidad para liderar el equipo durante el último trimestre ha sido excepcional. ' +
                'La forma en que manejaste los desafíos y motivaste al equipo resultó en un incremento ' +
                'del 25% en la productividad.',
            calificacion: 5
        },
        {
            id: 2,
            nombre: 'Carlos Ruiz',
            puesto: 'Director de Operaciones',
            iniciales: 'CR',
            avatarColor: '#059669',
            fecha: new Date('2024-01-10'),
            tipo: 'Constructivo',
            titulo: 'Oportunidad de mejora en comunicación',
            texto:
                'Has demostrado gran competencia técnica, sin embargo, sería beneficioso trabajar ' +
                'en la comunicación con otros departamentos. Considera programar reuniones regulares ' +
                'para mantener a todos informados sobre el progreso de los proyectos.',
            calificacion: 4
        },
        {
            id: 3,
            nombre: 'Paulina Salgado',
            puesto: 'Coordinadora de Proyectos',
            iniciales: 'PS',
            avatarColor: '#d97706',
            fecha: new Date('2024-01-05'),
            tipo: 'Reconocimiento',
            titulo: 'Apoyo excepcional al equipo',
            texto:
                'Quiero reconocer tu disposición para ayudar a los miembros del equipo cuando ' +
                'enfrentan dificultades. Tu mentoría ha sido fundamental para el desarrollo ' +
                'profesional de varios colaboradores.',
            calificacion: 5
        }
    ];

    dados: Feedback[] = [
        {
            id: 4,
            nombre: 'Andrés Pérez',
            puesto: 'Líder Técnico',
            iniciales: 'AP',
            avatarColor: '#ee7202',
            fecha: new Date('2024-01-12'),
            tipo: 'Constructivo',
            titulo: 'Mejora en la documentación técnica',
            texto:
                'Sería muy útil que actualizaras la documentación del proyecto semanalmente para ' +
                'que el equipo tenga información al día.',
            calificacion: 3
        }
    ];

    pendientes: Feedback[] = [
        {
            id: 5,
            nombre: 'Laura Martínez',
            puesto: 'Analista QA',
            iniciales: 'LM',
            avatarColor: '#059669',
            fecha: new Date('2024-01-20'),
            tipo: 'Constructivo',
            titulo: 'Pendiente de revisión de bug',
            texto: 'Por favor revisa el bug en el módulo de autenticación que reporté la semana pasada.',
            calificacion: 4
        }
    ];

    switchTab(tab: 'recibidos' | 'dados' | 'pendientes') {
        this.currentTab = tab;
    }

    respondFeedback(id: number) {
        const feedback = this.recibidos.find(fb => fb.id === id);
        if (feedback) {
            feedback.mostrarRespuesta = !feedback.mostrarRespuesta;
        }
    }

    guardarRespuesta(id: number) {
        const fb = this.recibidos.find(f => f.id === id);
        if (fb) {
            console.log(`Respuesta al feedback ${id}: ${fb.respuesta}`);
            fb.mostrarRespuesta = false;
        }
    }

    saveFeedback(id: number) {
        alert(`Guardando feedback ${id}`);
    }

    createActionPlan(id: number) {
        alert(`Creando plan de acción para feedback ${id}`);
    }

    thankFeedback(id: number) {
        alert(`Agradeciendo feedback ${id}`);
    }

    shareFeedback(id: number) {
        alert(`Compartiendo feedback ${id}`);
    }

    showModal = false;

    nuevoFeedback = {
        correo: '',
        titulo: '',
        texto: '',
        calificacion: 5,
        tipo: 'Reconocimiento'
    };

    newFeedback() {
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
        this.nuevoFeedback = {
            correo: '',
            titulo: '',
            texto: '',
            calificacion: 5,
            tipo: 'Reconocimiento'
        };
    }

    enviarFeedback() {
        console.log('Nuevo feedback enviado:', this.nuevoFeedback);
        this.closeModal();
    }
}
