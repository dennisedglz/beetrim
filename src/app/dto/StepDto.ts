export class AgendaDto {
    ciudad: string;
    codigo_postal: string;
    direccion: string;
    extras: string;
    fecha: string;
    frecuencia: string;
    hora_final: string;
    hora_inicial: string;
    periodo: string;
    id_cliente: string;
    id_empleado: string;
    lat: string;
    lng: string;
    tipo_servicio: string;
    constructor(){
        this.ciudad = '';
        this.codigo_postal = '';
        this.direccion = '';
        this.extras = '';
        this.fecha = '';
        this.frecuencia = '';
        this.hora_final = '';
        this.hora_inicial = '';
        this.periodo = '';
        this.id_cliente = '';
        this.id_empleado = '';
        this.lat = '';
        this.lng = '';
        this.tipo_servicio = '';
   }
}

export class StepDtoAnswer {
    pregunta: string;
    valor: string;
}

export class Answer {
    pregunta: string;
    valor: string;
}