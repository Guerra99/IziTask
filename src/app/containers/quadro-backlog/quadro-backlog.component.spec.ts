import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadroBacklogComponent } from './quadro-backlog.component';

describe('QuadroDashboardComponent', () => {
  let component: QuadroBacklogComponent;
  let fixture: ComponentFixture<QuadroBacklogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuadroBacklogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuadroBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
