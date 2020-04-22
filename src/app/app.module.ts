import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionComponent } from './section/section.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DownloadButtonComponent } from './download-button/download-button.component';


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
    AppRoutingModule,
    BrowserAnimationsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
