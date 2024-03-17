import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

// perfect scrollbar
import { NgScrollbarModule } from 'ngx-scrollbar';

//Import all material modules
import { SyncfusionModule } from '@issp/common';
import { MaterialModule } from '@issp/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from '@issp/components';
import { BlankComponent } from '@issp/components';

import { FilterPipe } from './pipe/filter.pipe';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { StartupService } from '@issp/common';

export function HttpLoaderFactory(http: HttpClient): unknown {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// export function startupServiceFactory(startupService: StartupService) {
//   console.log('startupServiceFactory');
//   return () => startupService.load();
// }

@NgModule({
  declarations: [AppComponent, BlankComponent, FilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SyncfusionModule,
    TablerIconsModule.pick(TablerIcons),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgScrollbarModule,
    FullComponent,
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: startupServiceFactory,
    //   deps: [StartupService],
    //   multi: true,
    // },
  ],
})
export class AppModule {}
