import { Message } from '../message/notifer';
import { NotifierTemplate } from '../template/notifier';

export interface NotificationButton {
    type: 'button' | 'submit';
    disabled: boolean;
    css: Css;
    text: string;
    emitValue: any;
    callBackFunctions?: { func: Function, param?: any }[];
}

export interface Css {
    background?: string;
    color?: string;
    width?: string;
    height?: string;
    shadow?: boolean;
    position?: 'top'|'left'|'bottom'|'right'|'center'|'default';
}

interface Visibility {
    status: 'show' | 'hide';
}

export class NotifcationLayout {
    layout: MultiNotifier | SingleNotifier;
    constructor(type?: MultiNotifier | SingleNotifier) {
      this.layout = type || new SingleNotifier();
    }
}

export class SingleNotifier {
    constructor(
        public closeButton: Visibility = { status: 'show' },
        public title: Visibility = { status: 'show' },
        public displayAs: 'dialog' | 'snack-bar' | 'notification' = 'notification',
        public disableOutsideClick: boolean = false) {
    }
}

export class MultiNotifier extends SingleNotifier {
    constructor(
        public head: string = '',
        public actionRow: Visibility =  { status: 'show' },
        public body: Visibility =  { status: 'show' },
        public titleText?: string,
        public isDailog = false
        ) {
        super();
    }
}

export interface NotificationHint {
    template?: NotifierTemplate;
    layout: SingleNotifier | MultiNotifier;
    data: Message | Message[];
    type: string;
    css?: Css;
    buttons?: NotificationButton[];
}
