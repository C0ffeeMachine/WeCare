import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachViewProfileComponent } from './coach-view-profile.component';

describe('CoachViewProfileComponent', () => {
  let component: CoachViewProfileComponent;
  let fixture: ComponentFixture<CoachViewProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachViewProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachViewProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
