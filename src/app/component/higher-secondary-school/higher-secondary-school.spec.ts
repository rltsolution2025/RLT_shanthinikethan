import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherSecondarySchool } from './higher-secondary-school';

describe('HigherSecondarySchool', () => {
  let component: HigherSecondarySchool;
  let fixture: ComponentFixture<HigherSecondarySchool>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HigherSecondarySchool],
    }).compileComponents();

    fixture = TestBed.createComponent(HigherSecondarySchool);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
