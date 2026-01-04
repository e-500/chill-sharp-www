import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './how-to/basic/basic.component';
import { InstallNugetPackageComponent } from './how-to/install-nuget-package/install-nuget-package.component';

export const routes: Routes = [

  { path: '', title: 'ChillSharp', component: HomeComponent },
  { path: 'how-to', redirectTo: 'how-to-basic' },
  { path: 'how-to-basic', title: 'HowTo - Basic setup', component: BasicComponent },
  { path: 'how-to-install-nuget-package', title: 'HowTo - Install NuGet package', component: InstallNugetPackageComponent },
];
