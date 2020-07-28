import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StepDtoAnswer } from '../../dto/StepDto';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-step-extras',
  templateUrl: './step-extras.component.html',
  styleUrls: ['./step-extras.component.scss'],
})
export class StepExtrasComponent implements OnInit {

  @Output() clickSwipe = new EventEmitter<StepDtoAnswer>(); 
  extra: string = '';
  step: StepDtoAnswer = {
    pregunta: 'extras',
    valor: ''
  };


  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {}

  nextSlide() {
    this.step.valor = this.extra;
    this.clickSwipe.emit(this.step);
    
  }

}
