import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare let verovioReady: boolean;

if (environment.production) {
  enableProdMode();
}

init().then( () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))
});

async function init() {
  console.debug('check');
  while (!verovioReady) {
    console.debug('wait');
    await new Promise(r => { setTimeout(r, 250); });
  }
  console.debug('done');
}
