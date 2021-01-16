import { Injectable } from '@angular/core';
import { BeeworkerDto } from '../dto/BeeworkerDto';
import { AgendaDto } from '../dto/StepDto';
import { UsuarioClienteDto } from '../dto/UsuarioClienteDto';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  public user: UsuarioClienteDto;
  public beeworker: BeeworkerDto;
  public loading: boolean;
  public address: string;

  public datosCita: AgendaDto;

  constructor() {
    this.user = null;
    this.beeworker = null;
    this.loading = false;
    this.address = "";
    this.datosCita = null;
  }
}
