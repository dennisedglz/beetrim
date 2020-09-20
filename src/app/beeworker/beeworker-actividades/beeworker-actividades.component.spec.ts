import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BeeworkerActividadesComponent } from './beeworker-actividades.component';


describe('BeeworkerActividadesComponent', () => {
  let component: BeeworkerActividadesComponent;
  let fixture: ComponentFixture<BeeworkerActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeworkerActividadesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeeworkerActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
