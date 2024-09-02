import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './components/display/display.component';
import { SampComponent } from './components/samp/samp.component';
import { AdiComponent } from './components/adi/adi.component';
import { GuyComponent } from './components/guy/guy.component';
import { SampAComponent } from './components/samp-a/samp-a.component';
import { SampBComponent } from './components/samp-b/samp-b.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    SampComponent,
    AdiComponent,
    GuyComponent,
    SampAComponent,
    SampBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
