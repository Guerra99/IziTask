import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuIziComponent } from './meu-izi.component';

describe('MeuIziComponent', () => {
  let component: MeuIziComponent;
  let fixture: ComponentFixture<MeuIziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuIziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuIziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
