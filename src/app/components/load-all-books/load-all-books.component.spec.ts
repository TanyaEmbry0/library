import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAllBooksComponent } from './load-all-books.component';

describe('LoadAllBooksComponent', () => {
  let component: LoadAllBooksComponent;
  let fixture: ComponentFixture<LoadAllBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadAllBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadAllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
