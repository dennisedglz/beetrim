import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StepDtoAnswer } from 'src/app/dto/StepDto';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-step-lugar',
  templateUrl: './step-lugar.component.html',
  styleUrls: ['./step-lugar.component.scss'],
})
export class StepLugarComponent implements OnInit {

  @Output() clickSwipe = new EventEmitter<StepDtoAnswer>(); 
  lugar: string = '';
  step: StepDtoAnswer = {
    pregunta: 'ciudad',
    valor: ''
  };


  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {}

  nextSlide() {
    console.log(this.lugar);
    if(this.lugar == ""){
      this.valueNeeded();
    }else{
      this.step.valor = this.lugar;
      this.clickSwipe.emit(this.step);
    }
  }

  async valueNeeded(){
    const alert = await this.alertCtrl.create({
      header: 'Lo sentimos',
      subHeader: 'Es necesario escribir la ciudad',
      buttons: ['OK']
    });
    await alert.present();
  }
}
