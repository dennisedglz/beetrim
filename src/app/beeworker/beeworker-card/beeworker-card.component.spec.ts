import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BeeworkerCardComponent } from './beeworker-card.component';


describe('BeeworkerCardComponent', () => {
  let component: BeeworkerCardComponent;
  let fixture: ComponentFixture<BeeworkerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeworkerCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeeworkerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
