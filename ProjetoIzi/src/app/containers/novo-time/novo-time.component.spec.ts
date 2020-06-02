import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoTimeComponent } from './novo-time.component';

describe('NovoTimeComponent', () => {
  let component: NovoTimeComponent;
  let fixture: ComponentFixture<NovoTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
