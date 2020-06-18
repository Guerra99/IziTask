import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroQuadroComponent } from './cadastro-quadro.component';

describe('CadastroQuadroComponent', () => {
  let component: CadastroQuadroComponent;
  let fixture: ComponentFixture<CadastroQuadroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroQuadroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroQuadroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
