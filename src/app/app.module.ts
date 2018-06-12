import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { registerLocaleData } from "@angular/common";
// import localeEs from '@angular/common/locales/es';
// import localeEsExtra from '@angular/common/locales/extra/es';
// registerLocaleData(localeEs);

import { AppComponent } from './app.component';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [
		// {provide: LOCALE_ID, useValue: 'es-MX'},
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
