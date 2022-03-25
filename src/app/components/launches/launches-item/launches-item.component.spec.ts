import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesItemComponent } from './launches-item.component';

describe('LaunchesItemComponent', () => {
  let component: LaunchesItemComponent;
  let fixture: ComponentFixture<LaunchesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
