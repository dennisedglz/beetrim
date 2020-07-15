import { TipoUsuarioDto } from "./TipoUsuarioDto";

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
    fotoServicio1: string;
    fotoServicio2: string;
    fotoServicio3: string;
    servicioDescripcion: string;
}
