import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BeeworkerPage } from './beeworker.page';


describe('BeeworkerPage', () => {
  let component: BeeworkerPage;
  let fixture: ComponentFixture<BeeworkerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeworkerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeeworkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
