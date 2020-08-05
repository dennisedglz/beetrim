import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../services/app-data.service';
import { Router } from '@angular/router';
import { AgendaService } from '../services/agenda.service';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-resumen-cita',
  templateUrl: './resumen-cita.page.html',
  styleUrls: ['./resumen-cita.page.scss'],
})
export class ResumenCitaPage implements OnInit {

  constructor(public appData: AppDataService, private router: Router, private agendaSvc: AgendaService, private alertCtrl: AlertController) { }

  ngOnInit() {
    console.log('Datos ',this.appData.datosCita);
    this.appData.datosCita.hora_final = moment(this.appData.datosCita.hora_inicial).add(Number(this.appData.datosCita.tiempo), 'hours').format('HH:mm');


  }

  
  confirmar() {
    this.agendaSvc.addEventoAgenda(this.appData.datosCita).then((res) => {
      this.showAlert('Gracias', 'Tu cita se ha agendado').then(() => {
        alert('Elegir perfil...');
        this.router.navigateByUrl('/perfil', { replaceUrl: true });

      });
    }).catch((err) => {
      this.showAlert('Lo sentimos', 'Ocurrió un error al agendar tu cita, por favor vuelva a intentarlo');
    })
  }

  async showAlert(header, subheader){
    const alert = await this.alertCtrl.create({
      header: header,
      subHeader: subheader,
      buttons: ['OK']
    });
    await alert.present();
  }
}
