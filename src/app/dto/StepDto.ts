export class AgendaDto {
    id: string;
    ciudad: string;
    codigo_postal: string;
    direccion: string;
    extras: string;
    fecha;
    cuartos: Cuartos;
    frecuencia: string;
    hora_final;
    hora_inicial;
    periodo: string;
    id_cliente: string;
    id_empleado: string;
    lat: string;
    lng: string;
    tipo_servicio: string;
    tiempo: string;
    total: number;
    constructor(){
        this.ciudad = '';
        this.codigo_postal = '';
        this.direccion = '';
        this.extras = '';
        this.fecha;
        this.frecuencia = '';
        this.hora_final;
        this.hora_inicial;
        this.periodo = '';
        this.id_cliente = '';
        this.id_empleado = '';
        this.lat = '';
        this.lng = '';
        this.tipo_servicio = '';
        this.tiempo = '';
   }
}

export class StepDtoAnswer {
    pregunta: string;
    valor;
}

export class Answer {
    pregunta: string;
    valor: string;
}

export class Cuartos{
    dormitorio: number;
    bano: number;
    cocina: number;
    comedor: number;
    sala: number;
    patio: number;
    cochera: number;
    total: number;
    tiempo;
}