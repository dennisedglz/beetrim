import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { BeeworkerDto } from 'src/app/dto/BeeworkerDto';
import { BeeworkerService } from '../services/beeworker.service';

@Component({
  selector: 'app-beeworker-avatar',
  templateUrl: './beeworker-avatar.component.html',
  styleUrls: ['./beeworker-avatar.component.scss'],
})
export class BeeworkerAvatarComponent implements OnInit {

  @Input() beeworker = new BeeworkerDto();
  sinFotoUrl = 'https://firebasestorage.googleapis.com/v0/b/beetrim-b69e0.appspot.com/o/blank-profile-picture-973460_1280.png?alt=media&token=cdeb8148-e1eb-48bf-9ab0-223906c0db5c';

  constructor(private router: Router,
    private beeworkerService: BeeworkerService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.beeworker.currentValue && this.beeworker.id) {
      this.beeworkerService.getCalificacionBeeworker(this.beeworker.id).then(calificacion => {
        this.beeworker.calificacion = calificacion
      });
    }
  }

  detallesBeeworker() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        beeworker: JSON.stringify(this.beeworker)
      }
    };
    this.router.navigate(['/beeworker'], navigationExtras);
  }

}
