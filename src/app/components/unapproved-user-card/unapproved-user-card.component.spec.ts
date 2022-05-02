import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedUserCardComponent } from './unapproved-user-card.component';

describe('UnapprovedUserCardComponent', () => {
  let component: UnapprovedUserCardComponent;
  let fixture: ComponentFixture<UnapprovedUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnapprovedUserCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovedUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
