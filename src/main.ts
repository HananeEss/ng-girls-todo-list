import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


//De cette façon, nous disons à Angular quel composant utiliser comme point de départ de notre application.
//Dans ce cas: le composant de départ est : AppComponent
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
