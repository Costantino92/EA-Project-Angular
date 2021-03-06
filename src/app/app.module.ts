import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DesignSystemComponent } from './design-system/design-system.component';
import { FooterComponent } from './footer/footer.component';

import { OrangeBtnComponent } from './design-system/orange-btn/orange-btn.component';
import { TransparentBtnComponent } from './design-system/transparent-btn/transparent-btn.component';
import { RedBtnComponent } from './design-system/red-btn/red-btn.component';
import { PaginationBtnsComponent } from './design-system/pagination-btns/pagination-btns.component';
import { SlideBarComponent } from './design-system/slide-bar/slide-bar.component';
import { DropUpComponent } from './design-system/drop-up/drop-up.component';
import { BlueFormButtonComponent } from './design-system/blue-form-button/blue-form-button.component';
import { SocialIconsComponent } from './design-system/social-icons/social-icons.component';
import { FormComponent } from './design-system/form/form.component';

import { RedWhiteCardComponent } from './design-system/red-white-card/red-white-card.component';
import { RedCardComponent } from './design-system/red-card/red-card.component';
import { DarkgreyCardComponent } from './design-system/darkgrey-card/darkgrey-card.component';
import { MassEffectCardComponent } from './design-system/mass-effect-card/mass-effect-card.component';
import { AzureCardComponent } from './design-system/azure-card/azure-card.component';
import { LightgreyCardComponent } from './design-system/lightgrey-card/lightgrey-card.component';
import { SquareEffectCardComponent } from './design-system/square-effect-card/square-effect-card.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';

import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { LatestNewsCardsComponent } from './latest-news-cards/latest-news-cards.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { FormsModule } from '@angular/forms';
import { RegisterTwoComponent } from './register-two/register-two.component';
import { eaRoutingModule } from './ea-routing/ea-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    DesignSystemComponent,

    OrangeBtnComponent,
    TransparentBtnComponent,
    RedBtnComponent,
    PaginationBtnsComponent,
    SlideBarComponent,
    DropUpComponent,
    BlueFormButtonComponent,
    SocialIconsComponent,
    FormComponent,

    RedWhiteCardComponent,
    RedCardComponent,
    DarkgreyCardComponent,
    MassEffectCardComponent,
    AzureCardComponent,
    LightgreyCardComponent,
    SquareEffectCardComponent,
    MainHeaderComponent,
    NavBarComponent,
    FirstSectionComponent,
    AsideMenuComponent,

    SecondSectionComponent,
    ThirdSectionComponent,
    ListComponentComponent,
    FooterComponent,
    LatestNewsCardsComponent,
    LoginComponent,
    RegisterComponent,
    RegisterTwoComponent,
    HomeComponent,
  ],
  imports: [BrowserModule,FormsModule,eaRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
