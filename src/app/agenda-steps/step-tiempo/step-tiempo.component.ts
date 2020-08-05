import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StepDtoAnswer } from 'src/app/dto/StepDto';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-step-tiempo',
  templateUrl: './step-tiempo.component.html',
  styleUrls: ['./step-tiempo.component.scss'],
})
export class StepTiempoComponent implements OnInit {
  
  @Output() clickSwipe = new EventEmitter<StepDtoAnswer>(); 
  tiempo: string = '';
  step: StepDtoAnswer = {
    pregunta: 'tiempo',
    valor: ''
  };
  
  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {}

  changeTiempo(t) {
    this.tiempo = t;
  }

  nextSlide() {
    if(this.tiempo == ""){
      this.valueNeeded();
    }else{
      this.step.valor = this.tiempo;
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

}
