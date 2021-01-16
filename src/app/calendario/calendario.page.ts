import { CalendarComponent } from 'ionic2-calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { AgendaService } from '../services/agenda.service';
import { AppDataService } from '../services/app-data.service';
import { Router } from '@angular/router';
import { AgendaDto } from '../dto/StepDto';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})

export class CalendarioPage implements OnInit {
 
  agendas = new Array<AgendaDto>();
  beeworker = this.appData.beeworker;
  
  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  };
 
  minDate = new Date().toISOString();
 
  eventSource = [];
  viewTitle;
 
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
 
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  collapseCard = true;
 
  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string,
  private agendaService: AgendaService, private appData: AppDataService,private router: Router,
) { }

ngOnInit() {
  this.resetEvent();
  this.traerReservas();
}
  traerReservas(){
    this.agendaService.consultarAgendaPorBeeworker(this.beeworker.id).subscribe((listaAgendas) => {
      this.agendas = listaAgendas;
      this.agendas.sort((a, b) => {
        return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
      });
      console.log(this.agendas);
      for(let agenda of this.agendas){
        this.addEvent(agenda);
      }
    });
  }
 
  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  // Create the right event format and reload source
  addEvent(agenda: AgendaDto) {
    let eventCopy = {
      title: agenda.tipo_servicio,
      startTime:  agenda.hora_inicial,
      endTime: agenda.hora_final,
      desc: agenda.direccion
    }
 
    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
    this.resetEvent();
  }
 
  // Change current month/week/day
 next() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
}
 
back() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slidePrev();
}
 
// Change between month/week/day
changeMode(mode) {
  this.calendar.mode = mode;
}
 
// Focus today
today() {
  this.calendar.currentDate = new Date();
}
 
// Selected date reange and hence title changed
onViewTitleChanged(title) {
  this.viewTitle = title;
}
 
// Calendar event was clicked
async onEventSelected(event) {
  // Use Angular date pipe for conversion
  let start = formatDate(event.startTime, 'medium', this.locale);
  let end = formatDate(event.endTime, 'medium', this.locale);
 
  const alert = await this.alertCtrl.create({
    header: event.title,
    subHeader: event.desc,
    message: 'From: ' + start + '<br><br>To: ' + end,
    buttons: ['OK']
  });
  alert.present();
}
 
// Time slot was clicked
onTimeSelected(ev) {
  let selected = new Date(ev.selectedTime);
  this.event.startTime = selected.toISOString();
  selected.setHours(selected.getHours() + 1);
  this.event.endTime = (selected.toISOString());
}
}