import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StepDtoAnswer } from 'src/app/dto/StepDto';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-step-periodo',
  templateUrl: './step-periodo.component.html',
  styleUrls: ['./step-periodo.component.scss'],
})
export class StepPeriodoComponent implements OnInit {
  
  @Output() clickSwipe = new EventEmitter<StepDtoAnswer>(); 
  frecuencia: string = '';
  step: StepDtoAnswer = {
    pregunta: 'frecuencia',
    valor: ''
  };

  constructor( public alertCtrl: AlertController ) { }

  ngOnInit() {}

  changeFrec(frec) {
    this.frecuencia = frec;
    console.log(frec);
  }

  nextSlide() {
    if(this.frecuencia == ""){
      this.valueNeeded();
    }else{
      this.step.valor = this.frecuencia;
      console.log("Next Slide ", this.step);
      this.clickSwipe.emit(this.step);
    }
  }

  async valueNeeded(){
    const alert = await this.alertCtrl.create({
      header: 'Lo sentimos',
      subHeader: 'Es necesario elegir una opción para continuar',
      buttons: ['OK']
    });
    await alert.present();
  }

}
