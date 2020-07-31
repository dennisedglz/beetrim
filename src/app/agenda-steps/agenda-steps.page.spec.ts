import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgendaStepsPage } from './agenda-steps.page';

describe('AgendaStepsPage', () => {
  let component: AgendaStepsPage;
  let fixture: ComponentFixture<AgendaStepsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaStepsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgendaStepsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
