import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggingApiComponent } from './blogging-api.component';

describe('BloggingApiComponent', () => {
  let component: BloggingApiComponent;
  let fixture: ComponentFixture<BloggingApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloggingApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloggingApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
