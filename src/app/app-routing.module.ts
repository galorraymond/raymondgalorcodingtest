import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/countries/countries.module').then(
        (m) => m.CountriesModule
      ),
  },
  {
    path: ':country',
    loadChildren: () =>
      import('./modules/country-detail/country-detail.module').then(
        (m) => m.CountryDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
