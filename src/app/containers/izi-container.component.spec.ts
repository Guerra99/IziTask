import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IziContainerComponent } from './izi-container.component';

describe('IziContainerComponent', () => {
  let component: IziContainerComponent;
  let fixture: ComponentFixture<IziContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IziContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IziContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
