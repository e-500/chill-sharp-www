import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StepPageComponent } from './steps/step-page.component';
import { getClientSideContent,  getServerSideContent } from './steps/step-content';

export const routes: Routes = [
  { path: '', title: 'ChillSharp', component: HomeComponent },
  { path: 'server-side/dbcontext-to-api', title: 'ChillSharp - From DbContext to API', component: StepPageComponent, data: { step: getServerSideContent('dbcontext-to-api')! } },
  { path: 'server-side/query-and-schema', title: 'ChillSharp - Quary and Schema', component: StepPageComponent, data: { step: getServerSideContent('query-and-schema')! } },
  { path: 'server-side/schema-metadata', title: 'ChillSharp - Schema metadata', component: StepPageComponent, data: { step: getServerSideContent('schema-metadata')! } },
  { path: 'server-side/authentication', title: 'ChillSharp - Auth by default', component: StepPageComponent, data: { step: getServerSideContent('authentication')! } },
  { path: 'server-side/permissions', title: 'ChillSharp - Permissions', component: StepPageComponent, data: { step: getServerSideContent('permissions')! } },
  { path: 'server-side/dockerize', title: 'ChillSharp - Dockerize', component: StepPageComponent, data: { step: getServerSideContent('dockerize')! } },
  { path: 'client-side/typescript', title: 'ChillSharp - TypeScript', component: StepPageComponent, data: { step: getClientSideContent('typescript')! } },
  { path: 'client-side/react', title: 'ChillSharp - React', component: StepPageComponent, data: { step: getClientSideContent('react')! } },
  { path: 'client-side/angular', title: 'ChillSharp - Angular', component: StepPageComponent, data: { step: getClientSideContent('angular')! } },
  { path: 'client-side/vue', title: 'ChillSharp - Vue', component: StepPageComponent, data: { step: getClientSideContent('vue')! } },
  { path: 'client-side/python', title: 'ChillSharp - Python', component: StepPageComponent, data: { step: getClientSideContent('python')! } },
  { path: 'how-to', redirectTo: 'step-1' },
  { path: 'how-to-basic', redirectTo: 'step-1' },
  { path: 'how-to-install-nuget-package', redirectTo: 'step-1' },
  { path: 'how-to-blogging-api', redirectTo: 'step-2' },
  { path: 'how-to-blogging-api-client', redirectTo: 'client-side/typescript' },
  { path: 'step-5', redirectTo: 'client-side/typescript' },
  { path: '**', redirectTo: '' }
];
