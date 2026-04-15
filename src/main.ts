import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { registerServiceWorker } from './register.js';
import * as diamm from './app/utils/diamm';

declare let verovioReady: boolean;

if (environment.production) {
  enableProdMode();
}

init().then( () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err))
});

async function init() {
  await diamm.setup();
  registerServiceWorker(diamm.key, diamm.result, diamm.domain);
  while (!verovioReady) {
    console.debug('wait');
    await new Promise(r => { setTimeout(r, 250); });
  }
  console.debug('done');
}
