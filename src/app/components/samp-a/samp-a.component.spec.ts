import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampAComponent } from './samp-a.component';

describe('SampAComponent', () => {
  let component: SampAComponent;
  let fixture: ComponentFixture<SampAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SampAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
