import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservaPage } from './reserva.page';

describe('AgendaPage', () => {
  let component: ReservaPage;
  let fixture: ComponentFixture<ReservaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
