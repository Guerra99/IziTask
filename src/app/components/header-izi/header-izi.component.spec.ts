import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIziComponent } from './header-izi.component';

describe('HeaderIziComponent', () => {
  let component: HeaderIziComponent;
  let fixture: ComponentFixture<HeaderIziComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderIziComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderIziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
