import { TipoUsuarioDto } from "./TipoUsuarioDto";
import { ResenasDto } from './ResenasDto';

export class PerfilDto {
    idPerfil: string;
    nombre: string;
    apellidoPat: string;
    apellidoMat: string;
    correo: string;
    foto: string;
    descripcion: string;
    telefono: string;
    vigIni: Date;
    vigFin: Date;
    verificado: number;
    tipoUsuario: TipoUsuarioDto;
    servicioTitulo: string;
    servicioDescripcion: string;
    fotosServicio: Array<string>;
}
