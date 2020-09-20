import { TipoUsuarioDto } from "./TipoUsuarioDto";

export class UsuarioClienteDto {
    userAuthID: string;
    nombre: string;
    apellidos: string;
    apellidoPat: string;
    apellidoMat: string;
    fechaNacimiento: string;
    correo: string;
    telefono: string;
    foto: string;
    tipoUsuario: string;
    verificado: boolean;
    vigIni: Date;
    vigFin: Date;
}