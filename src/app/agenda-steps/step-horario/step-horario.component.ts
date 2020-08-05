import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StepDtoAnswer } from 'src/app/dto/StepDto';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-step-horario',
  templateUrl: './step-horario.component.html',
  styleUrls: ['./step-horario.component.scss'],
})
export class StepHorarioComponent implements OnInit {

  @Output() clickSwipe = new EventEmitter<StepDtoAnswer>(); 
  hora: string = '';
  step: StepDtoAnswer = {
    pregunta: 'hora_inicial',
    valor: ''
  };

  constructor( public alertCtrl: AlertController ) { }

  ngOnInit() {}

  changeHora(t) {
    this.hora = t;
  }

  nextSlide() {
    if(this.hora == ""){
      this.valueNeeded();
    }else{
      this.step.valor = this.hora;
      this.clickSwipe.emit(this.step);
    }
  }

  async valueNeeded(){
    const alert = await this.alertCtrl.create({
      header: 'Lo sentimos',
      subHeader: 'Es necesario elegir un horario para continuar',
      buttons: ['OK']
    });
    await alert.present();
  }

}
