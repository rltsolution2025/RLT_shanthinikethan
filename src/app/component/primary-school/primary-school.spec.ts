import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySchool } from './primary-school';

describe('PrimarySchool', () => {
  let component: PrimarySchool;
  let fixture: ComponentFixture<PrimarySchool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimarySchool],
    }).compileComponents();

    fixture = TestBed.createComponent(PrimarySchool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
