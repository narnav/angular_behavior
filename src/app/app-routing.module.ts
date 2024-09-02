import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampComponent } from './components/samp/samp.component';
import { AdiComponent } from './components/adi/adi.component';
import { GuyComponent } from './components/guy/guy.component';
import { SampAComponent } from './components/samp-a/samp-a.component';
import { SampBComponent } from './components/samp-b/samp-b.component';

const routes: Routes = [
    { path: "samp", component: SampComponent,children:[
        { path: "sampa", component: SampAComponent },    
        { path: "sampb", component: SampBComponent },    
    ]} ,
    { path: "adi", component: AdiComponent },
    { path: "guy", component: GuyComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
