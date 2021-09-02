import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FxhomeComponent } from './components/fxhome/fxhome.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorksComponent } from './components/content/works/works.component';
import { AboutComponent } from './components/content/about/about.component';
import { FormComponent } from './components/content/form/form.component';

@NgModule({
  declarations: [	
    AppComponent,
    HeaderComponent,
    FxhomeComponent,
    ContentComponent,
    FooterComponent,
    WorksComponent,
    AboutComponent,
    FormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
