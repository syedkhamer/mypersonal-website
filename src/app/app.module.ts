import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionComponent } from './section/section.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DownloadButtonComponent } from './download-button/download-button.component';
import {Router,RouterModule,Routes} from '@angular/router';


const routes: Routes = [
  {
    path : 'sendmail',
    component : ContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    BlogsComponent,
    DownloadButtonComponent

    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{enableTracing:true}),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
