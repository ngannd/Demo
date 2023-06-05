import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { MainComponent } from './main/main.component';
import { mainRouter } from './main/main.routes';

@NgModule({
  declarations: [
    AppComponent, MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(mainRouter)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
