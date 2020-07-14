import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilCardPage } from './perfil-card.page';

describe('PerfilCardPage', () => {
  let component: PerfilCardPage;
  let fixture: ComponentFixture<PerfilCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
