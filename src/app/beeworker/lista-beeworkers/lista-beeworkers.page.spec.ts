import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaBeeworkersPage } from './lista-beeworkers.page';

describe('ListaBeeworkersPage', () => {
  let component: ListaBeeworkersPage;
  let fixture: ComponentFixture<ListaBeeworkersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBeeworkersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaBeeworkersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
