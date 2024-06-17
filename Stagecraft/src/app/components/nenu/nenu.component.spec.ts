import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NenuComponent } from './nenu.component';

describe('NenuComponent', () => {
  let component: NenuComponent;
  let fixture: ComponentFixture<NenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
