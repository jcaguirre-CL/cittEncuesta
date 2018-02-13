import { RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Component5Component } from './component5/component5.component';
import { AppComponent } from './app.component';

const routes = [
    { path: 'component1', component: Component1Component },
    { path: 'component2', component: Component2Component },
    { path: 'component3', component: Component3Component },
    { path: 'component4', component: Component4Component },
    { path: 'component5', component: Component5Component },
    { path: '', redirectTo: 'component1', pathMatch: 'full' }
];

export const AppRouting = RouterModule.forRoot(routes, { 
  useHash: true
});