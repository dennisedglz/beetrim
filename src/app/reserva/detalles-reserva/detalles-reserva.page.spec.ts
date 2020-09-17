import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallesReservaPage } from './detalles-reserva.page';

describe('DetallesReservaPage', () => {
  let component: DetallesReservaPage;
  let fixture: ComponentFixture<DetallesReservaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesReservaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
