import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdiComponent } from './adi.component';

describe('AdiComponent', () => {
  let component: AdiComponent;
  let fixture: ComponentFixture<AdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
