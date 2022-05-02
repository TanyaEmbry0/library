import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home/home-page.component';
import { NavComponent } from './components/nav/nav.component';
import { AdminMainPageComponent } from './components/pages/admin-main-page/admin-main-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterUserComponent } from './components/pages/registerUser/register-user.component';
import { RegisterAdminComponent } from './components/pages/registerAdmin/register-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadAllBooksComponent } from './components/load-all-books/load-all-books.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { UnapprovedUsersListComponent } from './components/unapproved-users-list/unapproved-users-list.component';
import { AuthInterceptors } from './components/interceptors/auth.interceptor';
import { UnapprovedUserCardComponent } from './components/unapproved-user-card/unapproved-user-card.component';
import { NewBooksListComponent } from './components/pages/new-books-list/new-books-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterUserComponent,
    NavComponent,
    AdminMainPageComponent,
    RegisterUserComponent,
    RegisterAdminComponent,
    LoadAllBooksComponent,
    BookCardComponent,
    UnapprovedUsersListComponent,
    UnapprovedUserCardComponent,
    NewBooksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptors, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
