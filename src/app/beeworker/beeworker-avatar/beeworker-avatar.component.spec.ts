import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BeeworkerAvatarComponent } from './beeworker-avatar.component';

describe('BeeworkerAvatarComponent', () => {
  let component: BeeworkerAvatarComponent;
  let fixture: ComponentFixture<BeeworkerAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeeworkerAvatarComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeeworkerAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
