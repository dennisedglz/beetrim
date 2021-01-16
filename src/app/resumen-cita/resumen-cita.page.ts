import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../services/app-data.service';
import { Router } from '@angular/router';
import { AgendaService } from '../services/agenda.service';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { BeeworkerService } from '../beeworker/services/beeworker.service';

@Component({
  selector: 'app-resumen-cita',
  templateUrl: './resumen-cita.page.html',
  styleUrls: ['./resumen-cita.page.scss'],
})
export class ResumenCitaPage implements OnInit {
  beeworkersCercanos;

  constructor(private appData: AppDataService, private router: Router,
    private agendaSvc: AgendaService, private alertCtrl: AlertController,
    private beeworkeService: BeeworkerService) { }

  ngOnInit() {
    if (!this.appData.datosCita.id_empleado) {
      //ToDo agregar latitud y longitud de la reserva
      this.beeworkeService.getBeeworkerCercano(21.8804477, -102.293085).then(beeworkersCercanos => {
        this.beeworkersCercanos = beeworkersCercanos;
        this.appData.datosCita.id_empleado = this.beeworkersCercanos[0].id;
      });
    }
      let horaIni = new Date(this.appData.datosCita.fecha);
      let horaFin = new Date(this.appData.datosCita.fecha);      
      let horaMinutos = this.appData.datosCita.hora_inicial.split(":");
      horaIni.setHours(horaMinutos[0], horaMinutos[1]);
      horaFin.setHours((+horaMinutos[0] + this.appData.datosCita.cuartos.tiempo), horaMinutos[1]);
      this.appData.datosCita.hora_inicial = horaIni;
      this.appData.datosCita.hora_final = horaFin;
      this.appData.datosCita.tiempo = this.appData.datosCita.cuartos.tiempo;
      this.appData.datosCita.total = this.appData.datosCita.cuartos.total;
    // this.appData.datosCita.hora_final = moment(this.appData.datosCita.hora_inicial).add(Number(this.appData.datosCita.tiempo), 'hours').format('HH:mm');
  }


  confirmar() {
    this.agendaSvc.addEventoAgenda(this.appData.datosCita).then((res) => {
      this.showAlert('Gracias', 'Tu cita se ha agendado').then(() => {
        //alert('Elegir perfil...');
        this.router.navigateByUrl('/reserva', { replaceUrl: true });

      });
    }).catch((err) => {
      this.showAlert('Lo sentimos', 'Ocurrió un error al agendar tu cita, por favor vuelva a intentarlo');
    })
  }

  async showAlert(header, subheader) {
    const alert = await this.alertCtrl.create({
      header: header,
      subHeader: subheader,
      buttons: ['OK']
    });
    await alert.present();
  }
}
