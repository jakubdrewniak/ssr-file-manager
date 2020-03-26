import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { TestService } from './communication/test.service';

@NgModule({
   declarations: [
      AppComponent,
      MainComponent
   ],
   imports: [
      AppRoutingModule,
      BrowserModule.withServerTransition({ appId: 'serverApp' }),
      HttpClientModule
   ],
   providers: [
      TestService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
