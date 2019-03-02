import { Message } from '../message/notifer';
import { NotifierTemplate } from '../template/notifier';

export interface Css {
    background?: string;
    color?: string;
    width?: string;
    height?: string;
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


    closeButton: Visibility;
    title: Visibility;
    constructor(closeButton?: Visibility, title?: Visibility) {
        this.closeButton = closeButton || { status: 'show' };
        this.title = title || { status: 'show' };
    }
}

export class MultiNotifier extends SingleNotifier {
    head?: string;
    actionRow?: Visibility;
    body?: Visibility;
    constructor(
        actionRow?: Visibility,
        body?: Visibility,
        public titleText?: string,
        public isDailog = false,
        public trueButtonText = 'OK',
        public falseButtonText = 'Cancel',
        public disableOutsideClick = false) {
        super();
        this.actionRow = actionRow || { status: 'show' };
        this.body = body || { status: 'show' };
        this.head = '';
    }
}

export interface NotificationHint {
    template?: NotifierTemplate;
    layout: SingleNotifier | MultiNotifier;
    data: Message | Message[];
    type: string;
    css?: Css;
}
