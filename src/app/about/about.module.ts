import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutEntryComponent } from './container/about-entry/about-entry.component';

@NgModule({
  declarations: [AboutEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutEntryComponent,
      },
      {
        path: '',
        component: AboutEntryComponent,
      },
      {
        path: '',
        component: AboutEntryComponent,
      },
      {
        path: '',
        component: AboutEntryComponent,
        canActivate: [() => false],
      },
      {
        path: '',
        component: AboutEntryComponent,
      },
    ]),
  ],
})
export class AboutModule {}
