import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StepLugarComponent } from './step-lugar.component';

describe('StepLugarComponent', () => {
  let component: StepLugarComponent;
  let fixture: ComponentFixture<StepLugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepLugarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepLugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
