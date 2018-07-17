import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {sanitizeHtmlPipe} from "./sanitize-html.pipe";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [sanitizeHtmlPipe],
  exports: [sanitizeHtmlPipe]
})
export class PipeModule { }
