import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';
import { StepDtoAnswer } from 'src/app/dto/StepDto';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-step-calendario',
  templateUrl: './step-calendario.component.html',
  styleUrls: ['./step-calendario.component.scss'],
})
export class StepCalendarioComponent implements OnInit {
  @ViewChild(CalendarComponent) calendario: CalendarComponent;

  @Output() clickSwipe = new EventEmitter<StepDtoAnswer>(); 
  fecha: string = '';
  step: StepDtoAnswer = {
    pregunta: 'fecha',
    valor: ''
  };

  eventSource = [];
  calendar = {
    mode: 'month',
    currentDate: new Date(),

  };

  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
  }
  viewTitle = '';
  minDate = new Date().toISOString();
  lockSwipeToPrev: boolean;


  constructor( public alertCtrl: AlertController ) { }

  ngOnInit() {
    this.resetEvents();
  }

  resetEvents() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    }
  }

  onCurrentDateChanged(event:Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);

    if (this.calendar.mode === 'month') {
        if (event.getFullYear() < today.getFullYear() || (event.getFullYear() === today.getFullYear() && event.getMonth() <= today.getMonth())) {
            this.lockSwipeToPrev = true;
        } else {
            this.lockSwipeToPrev = false;
        }
    }
  }

  onEventSelected(ev) {
    let selected = new Date(ev.selectedTime);
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onTimeSelected(ev) {
    let selected = new Date(ev.selectedTime);
    this.step.valor = selected.toLocaleDateString();
    //console.log(selected.toLocaleDateString());
  }

  nextSlide() {
    console.log(this.step.valor);
    if(this.step.valor == ""){
      this.valueNeeded();
    }else{
      console.log("Next Slide ", this.step);
      this.clickSwipe.emit(this.step);
    }
  }

  async valueNeeded(){
    const alert = await this.alertCtrl.create({
      header: 'Lo sentimos',
      subHeader: 'Es necesario elegir una fecha para continuar',
      buttons: ['OK']
    });
    await alert.present();
  }

  markDisabled = (date: Date) => {
    var current = new Date();

    var future = new Date();
    future.setDate( future.getDate() + 120 );

    // No permite seleccionar fechas pasadas o fechas que pasen de los 4 meses
    return date < current || date > future ;
  };


}
