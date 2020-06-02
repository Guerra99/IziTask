import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuQuadrosComponent } from './menu-quadros.component';

describe('MenuQuadrosComponent', () => {
  let component: MenuQuadrosComponent;
  let fixture: ComponentFixture<MenuQuadrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuQuadrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuQuadrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
