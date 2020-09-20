import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BeeworkerResenasComponent } from './beeworker-resenas.component';


describe('BeeworkerResenasComponent', () => {
  let component: BeeworkerResenasComponent;
  let fixture: ComponentFixture<BeeworkerResenasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeworkerResenasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeeworkerResenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
