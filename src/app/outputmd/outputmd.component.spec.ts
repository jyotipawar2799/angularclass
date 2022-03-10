import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputmdComponent } from './outputmd.component';

describe('OutputmdComponent', () => {
  let component: OutputmdComponent;
  let fixture: ComponentFixture<OutputmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
