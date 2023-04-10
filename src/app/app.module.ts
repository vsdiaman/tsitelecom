import { NgModule } from '@angular/core'; //ok
import { BrowserModule } from '@angular/platform-browser'; //ok
// import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChatComponent } from './chat/chat/chat.component';

import { HttpClientModule } from '@angular/common/http'; //ok
import { FakeBackendProvider } from './fake-backend.interceptor';
// import { UsersModel } from './models/users';

// import { NavigationComponent } from './navigation/navigation.component';

// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    // NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [FakeBackendProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
