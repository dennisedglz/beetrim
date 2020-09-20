import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BeeworkerPerfilComponent } from './beeworker-perfil.component';


describe('BeeworkerPerfilComponent', () => {
  let component: BeeworkerPerfilComponent;
  let fixture: ComponentFixture<BeeworkerPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeworkerPerfilComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeeworkerPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
