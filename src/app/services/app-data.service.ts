import { Injectable } from '@angular/core';
import { AgendaDto } from '../dto/StepDto';
import { UsuarioClienteDto } from '../dto/PerfilDto';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  public user: UsuarioClienteDto;
  public loading: boolean;
  public address: string;

  public datosCita: AgendaDto;

  constructor() {
    this.user = null;
    this.loading = false;
    this.address = "";
    this.datosCita = null;
  }
}
