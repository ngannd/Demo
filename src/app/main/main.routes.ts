import { Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { HomeComponent } from "./home/home.component";
import { MainComponent } from "./main.component";

export const mainRouter: Routes = [
    {
        path: '', component: MainComponent, children: [
            {
                path: 'main/user',
                component: UserComponent,

            },
            {
                path: 'main/home',
                component: HomeComponent
            }
        ]
    }

]