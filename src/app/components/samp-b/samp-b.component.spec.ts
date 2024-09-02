import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampBComponent } from './samp-b.component';

describe('SampBComponent', () => {
  let component: SampBComponent;
  let fixture: ComponentFixture<SampBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
