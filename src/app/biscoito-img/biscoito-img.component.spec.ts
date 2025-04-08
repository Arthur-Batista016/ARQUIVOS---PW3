import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiscoitoImgComponent } from './biscoito-img.component';

describe('BiscoitoImgComponent', () => {
  let component: BiscoitoImgComponent;
  let fixture: ComponentFixture<BiscoitoImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiscoitoImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiscoitoImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
