import { Component, OnInit, ViewChild } from '@angular/core';
import { StepDtoAnswer, AgendaDto } from '../dto/StepDto';
import { AgendaService } from '../services/agenda.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-agenda-steps',
  templateUrl: './agenda-steps.page.html',
  styleUrls: ['./agenda-steps.page.scss'],
})
export class AgendaStepsPage implements OnInit {

  @ViewChild('slides') slides;
  respAgenda: AgendaDto;
  slideOpts = {
    allowTouchMove: false
  }
  contador = 0;

  constructor(private agendaService: AgendaService, private router: Router, private authSvc: AuthService, public appData: AppDataService) { }

  ngOnInit() {
    this.respAgenda = {
      ciudad: '',
      codigo_postal: '',
      direccion: '',
      extras: '',
      fecha: '',
      frecuencia: '',
      hora_final: '',
      hora_inicial: '',
      periodo: '',
      id_cliente: '',
      id_empleado: '',
      lat: '',
      lng: '',
      tipo_servicio: '',
    }
  }

  ionViewDidLoad() {
    this.slides.lockSwipes(true);
    this.slides.pager = false;
  }

  //gets the output function from the component
  onSwipeEmitted(ans: StepDtoAnswer) {
    const pos = ans.pregunta;
    //Asigna el valor en la posicion del objeto de respuestas
    this.respAgenda[pos] = ans.valor;
    setTimeout(() => {
      this.goNext();
     }, 1000);
  }

  goNext() {
    this.contador++;
    if (this.contador == 6) {
      this.contador--;
      this.validateRespAgenda();
      // Esta función la voy a mover al componente del resumen
     // this.agendaService.addEventoAgenda(this.respAgenda);
    }else {
      this.slides.lockSwipes(false);
      this.slides.slideNext();
      this.slides.lockSwipes(true);
    }
  }

  goBack() {
    this.contador--;
    if(this.contador != 0) {
      this.contador--;
      this.slides.lockSwipes(false);
      this.slides.slidePrev();
      this.slides.lockSwipes(true);
    }
  }
  
  validateRespAgenda() {
    this.respAgenda.tipo_servicio = 'limpieza';
    const today = new Date();
    const fecha = new Date(this.respAgenda.fecha);
    if (fecha > today) {
      this.appData.datosCita = this.respAgenda;
      this.router.navigateByUrl('/resumen-cita');
      //Mandar al resumen... 
    } else if(fecha ==  today) {
      console.log('checar horas');
    }else {
      console.log('Día invalido');
    }
  }

  goHome() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }

  goToPerfil() {
    this.router.navigateByUrl('/mi-perfil', { replaceUrl: true });
  }

  goToAgenda() {
    console.log('Agregar función a tu agenda');
  }

  logout() {
    this.authSvc.logoutUser()
      .then(res => {
        console.log(res);
        this.router.navigateByUrl('/login', { replaceUrl: true });
      })
      .catch(error => {
        console.log(error);
      })
  }
}