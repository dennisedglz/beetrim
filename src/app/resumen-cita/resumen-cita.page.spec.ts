import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResumenCitaPage } from './resumen-cita.page';

describe('ResumenCitaPage', () => {
  let component: ResumenCitaPage;
  let fixture: ComponentFixture<ResumenCitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumenCitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResumenCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
