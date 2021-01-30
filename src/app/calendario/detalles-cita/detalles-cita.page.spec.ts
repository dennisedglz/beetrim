import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallesCitaPage } from './detalles-cita.page';

describe('DetallesCitaPage', () => {
  let component: DetallesCitaPage;
  let fixture: ComponentFixture<DetallesCitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesCitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallesCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
