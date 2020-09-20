import { UsuarioClienteDto } from './UsuarioClienteDto';

export class ResenasDto {
    idReseña: string;
    idUsuario: string
    idUsuarioCalificador: UsuarioClienteDto;
    calificacion: number;
    justificacion: string;
    fecha: Date;
}
