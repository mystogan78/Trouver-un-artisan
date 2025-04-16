import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import './bootstrap-loader';


import 'bootstrap';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    // Active les tooltips après que l'app soit montée
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
      return new (window as any).bootstrap.Tooltip(tooltipTriggerEl);
    });
  })
  .catch((err) => console.error(err));
