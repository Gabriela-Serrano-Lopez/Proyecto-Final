import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaUsuarioComponent } from './grafica-usuario.component';

describe('GraficaUsuarioComponent', () => {
  let component: GraficaUsuarioComponent;
  let fixture: ComponentFixture<GraficaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
