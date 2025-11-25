import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginarComponent } from './paginar.component';

describe('PaginarComponent', () => {
  let component: PaginarComponent;
  let fixture: ComponentFixture<PaginarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
