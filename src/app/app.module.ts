import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes, Route} from '@angular/router';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonlistComponent } from './components/personlist/personlist.component';
import { PersonformComponent } from './components/personform/personform.component';
import {PersonService} from './services/person.service';
const approute:Routes=[
  {path:'',component:PersonlistComponent},
  {path:'op',component:PersonformComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PersonlistComponent,
    PersonformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(approute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
