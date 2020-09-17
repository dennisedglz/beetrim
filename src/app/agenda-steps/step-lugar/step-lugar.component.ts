import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StepDtoAnswer } from 'src/app/dto/StepDto';
import { AlertController } from '@ionic/angular';
import { AppDataService } from '../../services/app-data.service';

@Component({
  selector: 'app-step-lugar',
  templateUrl: './step-lugar.component.html',
  styleUrls: ['./step-lugar.component.scss'],
})
export class StepLugarComponent implements OnInit {

  @Output() clickSwipe = new EventEmitter<StepDtoAnswer>(); 
  lugar: string = '';
  step: StepDtoAnswer = {
    pregunta: 'direccion',
    valor: ''
  };


  constructor(public alertCtrl: AlertController, public appData: AppDataService,) { }

  ngOnInit() {
    if(this.appData.address) {
      this.lugar = this.appData.address;
    }
  }

  nextSlide() {
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
      subHeader: 'Es necesario que ingreses la dirección',
      buttons: ['OK']
    });
    await alert.present();
  }
}
