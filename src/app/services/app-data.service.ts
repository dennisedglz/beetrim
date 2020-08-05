import { Injectable } from '@angular/core';
import { AgendaDto } from '../dto/StepDto';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  public loading: boolean;
  public address: string;

  public datosCita: AgendaDto;

  constructor() {
    this.loading = false;
    this.address = "";
    this.datosCita = null;
  }
}
