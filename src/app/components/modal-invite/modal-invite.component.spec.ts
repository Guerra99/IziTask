import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInviteComponent } from './modal-invite.component';

describe('ModalInviteComponent', () => {
  let component: ModalInviteComponent;
  let fixture: ComponentFixture<ModalInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
