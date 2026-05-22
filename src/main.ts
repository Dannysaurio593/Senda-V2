/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.config';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
