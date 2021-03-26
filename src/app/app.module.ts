import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { interceptorProviders } from './services/auth';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ResourceNotFoundComponent } from './shared/resource-not-found/resource-not-found.component';
import { ApplicationErrorComponent } from './shared/application-error/application-error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {ReactiveFormsModule} from '@angular/forms'
import { TabsModule } from 'ngx-bootstrap/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxFontAwesomeModule } from 'ngx-font-awesome';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NewArticleModule } from './components/new-article/new-article.module';
import { ArticlesModule } from './components/articles/articles.module';
import { ArticleDetailsModule } from './components/article-details/article-details.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ResourceNotFoundComponent,
    ApplicationErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxFontAwesomeModule,
    NewArticleModule,
    ArticlesModule,
    ArticleDetailsModule
  ],
  providers: [
    // interceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
