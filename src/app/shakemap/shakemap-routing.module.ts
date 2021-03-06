import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShakemapComponent } from './shakemap/shakemap.component';
import { StationListComponent } from './station-list/station-list.component';
import { MetadataComponent } from './metadata/metadata.component';
import { UncertaintyComponent } from './uncertainty/uncertainty.component';
import { IntensityComponent } from './intensity/intensity.component';

const shakemapRoutes: Routes = [
  {
    // this module must be loaded lazily using "loadChildren"
    // the actual url mount point is defined in "app/app-routing.module.ts"
    path: '',
    component: ShakemapComponent,
    children: [
      {
        path: 'intensity',
        component: IntensityComponent
      },
      {
        path: 'stations',
        component: StationListComponent
      },
      {
        path: 'metadata',
        component: MetadataComponent
      },
      {
        path: 'uncertainty',
        component: UncertaintyComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'intensity'
      }
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(shakemapRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShakemapRoutingModule { }
