import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StepResumenComponent } from './step-resumen.component';

describe('StepResumenComponent', () => {
  let component: StepResumenComponent;
  let fixture: ComponentFixture<StepResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepResumenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
