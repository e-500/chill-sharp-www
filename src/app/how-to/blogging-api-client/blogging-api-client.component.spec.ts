import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggingClientComponent } from './blogging-api-client.component';

describe('BloggingClientComponent', () => {
  let component: BloggingClientComponent;
  let fixture: ComponentFixture<BloggingClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloggingClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloggingClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
