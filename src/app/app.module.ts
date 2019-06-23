import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import {FormsModule} from '@angular/forms';
 
import { AppComponent } from './app.component';
import { MapsComponent } from './components/maps/maps.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANhgWUoOk3sb92HpeAvrTrvq5n-b6Afu0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
