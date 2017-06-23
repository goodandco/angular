import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './components/app/app';
import {DashboardComponent} from './components/dashboard/dashboard';
import {HeroDetailComponent} from './components/hero-detail/hero-detail';
import {HeroesComponent} from './components/heroes/heroes';
import {HeroService} from './services/hero';
import { SelectModule } from 'ng2-select';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        SelectModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent
    ],
    providers: [HeroService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

