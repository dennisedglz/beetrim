import { TipoUsuarioDto } from "./TipoUsuarioDto";
import { ResenasDto } from './ResenasDto';

export class AgendaDto {
    fecha: Date;
    horaInicial: Date;
    horaFinal: Date;
    idCliente: string;
    idEmpleado: string;
}
