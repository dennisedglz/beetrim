import { PerfilDto } from './PerfilDto';

export class ResenasDto {
    idReseña: string;
    idUsuarioCalificador: string;
    calificacion: number;
    justificacion: string;
    fecha: Date;
    perfilCalificador = new PerfilDto();
}
