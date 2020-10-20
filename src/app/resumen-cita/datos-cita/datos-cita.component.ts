import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { BeeworkerService } from 'src/app/beeworker/services/beeworker.service';
import { BeeworkerDto } from 'src/app/dto/BeeworkerDto';
import { AppDataService } from 'src/app/services/app-data.service';

@Component({
  selector: 'app-datos-cita',
  templateUrl: './datos-cita.component.html',
  styleUrls: ['./datos-cita.component.scss'],
})
export class DatosCitaComponent implements OnInit {
  @Input() idPerfil;
  beeworker = new BeeworkerDto();
  constructor(private appData: AppDataService,
    private beeworkerService: BeeworkerService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.idPerfil.currentValue && this.idPerfil) {
      this.beeworkerService.getBeeworker(this.idPerfil).subscribe((resultado) => {
        this.beeworker = resultado;
        this.beeworker.id = this.idPerfil;
      });
    }
  }

}
