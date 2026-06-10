import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleSchool } from './middle-school';

describe('MiddleSchool', () => {
  let component: MiddleSchool;
  let fixture: ComponentFixture<MiddleSchool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddleSchool],
    }).compileComponents();

    fixture = TestBed.createComponent(MiddleSchool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
