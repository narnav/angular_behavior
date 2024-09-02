import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuyComponent } from './guy.component';

describe('GuyComponent', () => {
  let component: GuyComponent;
  let fixture: ComponentFixture<GuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
