import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { mainRouter } from './main.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(mainRouter)

  ]
})
export class MainModule { }
