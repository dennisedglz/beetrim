import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cuartos, StepDtoAnswer } from 'src/app/dto/StepDto';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-step-cuartos',
  templateUrl: './step-cuartos.component.html',
  styleUrls: ['./step-cuartos.component.scss'],
})
export class StepCuartosComponent implements OnInit {

  @Output() clickSwipe = new EventEmitter<StepDtoAnswer>();

  cuartos: Cuartos = {
  dormitorio: 2,
  bano: 1,
  cocina: 1,
  comedor: 1,
  sala: 1,
  patio: 1,
  cochera: 1,
  total: 250,
  tiempo: 3,
  }

  step: StepDtoAnswer = {
    pregunta: 'cuartos',
    valor: ''
  };

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() { 
    this.step.valor = this.cuartos;
  }

  masCuartos(cuarto) {
    switch (cuarto) {
      case 'dormitorio':
        this.cuartos.dormitorio++;
        this.cuartos.total = (this.cuartos.dormitorio>2) ? this.cuartos.total + 50 : this.cuartos.total;
        this.cuartos.tiempo += .5;
        break;
      case 'bano':
        this.cuartos.bano++;
        this.cuartos.total = (this.cuartos.bano>1) ? this.cuartos.total + 50 : this.cuartos.total;
        this.cuartos.tiempo += .5;
        break;
      case 'cocina':
        this.cuartos.cocina++;       
        this.cuartos.total = (this.cuartos.cocina>1) ? this.cuartos.total + 50 : this.cuartos.total;
        this.cuartos.tiempo += .5;
        break;
      case 'comedor':
        this.cuartos.comedor++;
        this.cuartos.total = (this.cuartos.comedor>1) ? this.cuartos.total + 50 : this.cuartos.total;
        this.cuartos.tiempo += .5;
        break;
      case 'sala':
        this.cuartos.sala++;
        this.cuartos.total = (this.cuartos.sala>1) ? this.cuartos.total + 50 : this.cuartos.total;
        this.cuartos.tiempo += .5;
        break;
      case 'patio':
        this.cuartos.patio++;
        this.cuartos.total = (this.cuartos.patio>1) ? this.cuartos.total + 50 : this.cuartos.total;
        this.cuartos.tiempo += .5;
        break;
      case 'cochera':
        this.cuartos.cochera++;
        this.cuartos.total = (this.cuartos.cochera>1) ? this.cuartos.total + 50 : this.cuartos.total;
        this.cuartos.tiempo += .5;
        break;
    }
    this.step.valor = this.cuartos;
  }

  menosCuartos(cuarto) {
    switch (cuarto) {
      case 'dormitorio':
        this.cuartos.total = (this.cuartos.dormitorio>2) ? this.cuartos.total - 50 : this.cuartos.total;
        this.cuartos.dormitorio--;
        this.cuartos.tiempo -= .5;
        break;
      case 'bano':
        this.cuartos.total = (this.cuartos.bano>1) ? this.cuartos.total - 50 : this.cuartos.total;
        this.cuartos.bano--;
        this.cuartos.tiempo -= .5;
        break;
      case 'cocina':
        this.cuartos.total = (this.cuartos.cocina>1) ? this.cuartos.total - 50 : this.cuartos.total;
        this.cuartos.cocina--;
        this.cuartos.tiempo -= .5;
        break;
      case 'comedor':
        this.cuartos.total = (this.cuartos.comedor>1) ? this.cuartos.total - 50 : this.cuartos.total;
        this.cuartos.comedor--;
        this.cuartos.tiempo -= .5;
        break;
      case 'sala':
        this.cuartos.total = (this.cuartos.sala>1) ? this.cuartos.total - 50 : this.cuartos.total;
        this.cuartos.sala--;
        this.cuartos.tiempo -= .5;
        break;
      case 'patio':
        this.cuartos.total = (this.cuartos.patio>1) ? this.cuartos.total - 50 : this.cuartos.total;
        this.cuartos.patio--;
        this.cuartos.tiempo -= .5;
        break;
      case 'cochera':
        this.cuartos.total = (this.cuartos.cochera>1) ? this.cuartos.total - 50 : this.cuartos.total;
        this.cuartos.cochera--;
        this.cuartos.tiempo -= .5;
        break;
    }
    this.step.valor = this.cuartos;
  }



  nextSlide() {
    //this.step.valor;
    this.clickSwipe.emit(this.step);
  }

  async valueNeeded() {
    const alert = await this.alertCtrl.create({
      header: 'Lo sentimos',
      subHeader: 'Es necesario elegir una fecha para continuar',
      buttons: ['OK']
    });
    await alert.present();
  }

}
