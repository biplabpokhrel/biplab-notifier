import { TemplateRef } from '@angular/core';
export interface NotifierTemplate {
    typeIcon?: TemplateRef<any>;
    head?: TemplateRef<any>;
    body?: TemplateRef<any>;
    button?: TemplateRef<any>;
    footer?: TemplateRef<any>;
}
