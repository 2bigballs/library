import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {TestModule} from "./test/test.module";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


