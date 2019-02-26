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
    dismissButton?: Visibility;
    body?: Visibility;

    constructor(dismissButton?: Visibility, body?: Visibility) {
        super();
        this.dismissButton = dismissButton || { status: 'show' };
        this.body = body || { status: 'show' };
        this.head = '';
    }
}


