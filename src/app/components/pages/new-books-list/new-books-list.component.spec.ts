import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBooksListComponent } from './new-books-list.component';

describe('NewBooksListComponent', () => {
  let component: NewBooksListComponent;
  let fixture: ComponentFixture<NewBooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBooksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
