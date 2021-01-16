import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { StepCuartosComponent } from './step-cuartos.component';


describe('StepCuartosComponent', () => {
  let component: StepCuartosComponent;
  let fixture: ComponentFixture<StepCuartosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepCuartosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepCuartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
