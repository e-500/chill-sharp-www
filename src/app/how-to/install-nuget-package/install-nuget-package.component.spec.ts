import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallNugetPackageComponent } from './install-nuget-package.component';

describe('InstallNugetPackageComponent', () => {
  let component: InstallNugetPackageComponent;
  let fixture: ComponentFixture<InstallNugetPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallNugetPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallNugetPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
