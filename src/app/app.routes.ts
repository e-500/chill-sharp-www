import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './how-to/basic/basic.component';
import { InstallNugetPackageComponent } from './how-to/install-nuget-package/install-nuget-package.component';
import { BloggingApiComponent } from './how-to/blogging-api/blogging-api.component';
import { BloggingApiClientComponent } from './how-to/blogging-api-client/blogging-api-client.component';

export const routes: Routes = [

  { path: '', title: 'ChillSharp', component: HomeComponent },
  { path: 'how-to', redirectTo: 'how-to-basic' },
  { path: 'how-to-basic', title: 'HowTo - Basic setup', component: BasicComponent },
  { path: 'how-to-install-nuget-package', title: 'HowTo - Install NuGet package', component: InstallNugetPackageComponent },
  { path: 'how-to-blogging-api', title: 'HowTo - Blogging API', component: BloggingApiComponent },
  { path: 'how-to-blogging-api-client', title: 'HowTo - Blogging API Client', component: BloggingApiClientComponent },
  
];
