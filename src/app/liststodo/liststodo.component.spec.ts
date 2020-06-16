import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstodoComponent } from './liststodo.component';

describe('ListstodoComponent', () => {
  let component: ListstodoComponent;
  let fixture: ComponentFixture<ListstodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListstodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListstodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
