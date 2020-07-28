import { Component, OnInit, ViewChild } from '@angular/core';
import { StepDtoAnswer, AgendaDto } from '../dto/StepDto';
import { AgendaService } from '../services/agenda.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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

  constructor(private agendaService: AgendaService, private router: Router, private authSvc: AuthService) { }

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
      console.log('Is end saving... ');
      console.log(this.respAgenda);
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
    console.log('Fecha: ', fecha);
    if (fecha > today) {
      console.log('todo bien');
      //Mandar al resumen... 
    } else if(fecha ==  today) {
      console.log('checar horas');
    }else {
      console.log('Día invalido');
    }
  }

  goToPerfil() {
    this.router.navigateByUrl('/mi-perfil');
  }

  goToAgenda() {
    console.log('Agregar función a tu página');
  }

  logout() {
    console.log('Logout');
    this.authSvc.logoutUser();
  }
}