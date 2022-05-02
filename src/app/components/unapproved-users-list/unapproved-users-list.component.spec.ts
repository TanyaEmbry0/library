import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedUsersListComponent } from './unapproved-users-list.component';

describe('UnapprovedUsersListComponent', () => {
  let component: UnapprovedUsersListComponent;
  let fixture: ComponentFixture<UnapprovedUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnapprovedUsersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovedUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
