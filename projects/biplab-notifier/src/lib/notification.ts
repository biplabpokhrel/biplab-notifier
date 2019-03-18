import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Message } from './message/notifer';
import { NotifcationLayout, SingleNotifier, MultiNotifier, Css, NotificationButton } from './layout/notifier';

export interface Timer {
    duration: number;
}

export class Notification extends NotifcationLayout  {
    protected readonly _afterOpened = new Subject<void>();
    protected readonly _afterClosed = new Subject<boolean | any>();
    private readonly _event =  new BehaviorSubject<boolean>(false);
    private notificationType: 'warn' | 'error' | 'note' | 'success' | 'help' | 'other';
    private _timer?: Timer;
    private cancelTimer: any;

    constructor(
        layoutType?: 'single' | 'multi',
        displayAs: 'dialog' | 'snack-bar' | 'notification' = 'notification',
        public status?:  'activate' | 'deactivate',
        public data?: Message | Message[],
        public css: Css = {
            shadow: true,
            position: 'default',
            background: undefined,
            color: undefined,
            width: undefined,
            height: undefined },
        public actionButtons: NotificationButton[] = []) {
        super();
        this.status = 'deactivate';
        if (layoutType) {
            this.layoutType = layoutType;
        }
        if (this.actionButtons) {
            this.defaultButtons();
        }

        if (displayAs === 'notification') {
            this.isNotification = true;
        } else if (displayAs === 'dialog') {
            this.isDialog = true;
        } else if (displayAs === 'snack-bar') {
            this.isSnack = true;
        }
    }

    set message(msg: string) {
        if (this.layoutType === 'single') {
            this.data = new Message(msg);
        }
    }

    defaultButtons(actionButtons?: NotificationButton[]):  void {
        this.actionButtons = actionButtons || [
            {
                text: 'Yes',
                disabled: false,
                type: 'button',
                emitValue: true,
                css: { color: '#3f51b5', background: 'transparent', shadow: true }
            },
            {
                text: 'Cancel',
                disabled: false,
                type: 'button',
                emitValue: false,
                css: { color: '#f44336', background: 'transparent', shadow: true }
            }
        ];
    }

    applyThemeColorInTrueButtons() {
        this.actionButtons.forEach((button: NotificationButton) => {
            if ( typeof(button.emitValue) === 'boolean' && button.emitValue ) {
                button.css.color = this.css.color;
                button.css.background = this.css.background;
            }
        });
    }

    set trueActionButtonStatus(status: 'enable' | 'disable') {
        this.actionButtons.forEach((button: NotificationButton) => {
            if ( typeof(button.emitValue) === 'boolean' &&  button.emitValue) {
                button.disabled = status === 'disable' ? true : false;
            }
        });
    }

    get currentStatus(): 'hide' | 'show' {
        return this.status === 'activate' ? 'show' : 'hide';
    }

    get trueActionButton(): NotificationButton {
        return this.actionButtons.filter((button: NotificationButton) =>
        typeof(button.emitValue) === 'boolean' &&  button.emitValue)[0] || undefined;
    }

    addNewButton(
        label: string,
        callBackFunctions: { func: Function, param: any }[],
        disabled: boolean = false,
        type: 'submit'| 'button' = 'button',
        emitValue: any,
        css: Css = { color: 'black', background: 'transparent', shadow: true },
        ) {
        const button: NotificationButton = {
            text : label,
            disabled: disabled,
            type: type,
            emitValue: emitValue,
            css: css || { color: '#3f51b5', background: 'transparent', shadow: true },
            callBackFunctions: callBackFunctions || undefined
        };
        if (this.actionButtons.length > 0) {
            const findIndex = this.actionButtons
            .find((btn: NotificationButton) =>
                (btn.type === type) &&
                (typeof(emitValue) === 'boolean') &&
                (typeof(emitValue) === typeof(btn.emitValue)) &&
                (emitValue ===  btn.emitValue));
            if (!findIndex) {
                this.actionButtons.splice(1, 0, button);
            }
        } else {
            this.actionButtons.push(button);
        }
    }

    buttonColorReverse() {
        this.actionButtons.forEach((button: NotificationButton) => {
            const background = button.css.color;
            const color = this._handleTransparentColor(button.css.background);
            button.css.color = color;
            button.css.background = background;
        });
    }

    private _handleTransparentColor(original: string): string {
        return original === 'transparent' ? 'white' : original === 'white' ? 'transparent' : original;
    }

    buttonShadow(status: 'show'|'hide') {
        this.actionButtons.forEach((button: NotificationButton) => {
            button.css.shadow = status === 'show' ? true : false;
        });
    }

    set messages(msgs: string[]) {
        if ( this.layoutType === 'multi') {
            this.data = msgs.map((msg: string) => new Message(msg));
        }
    }

    set layoutType(type: 'single' | 'multi') {
        if ( type === 'multi' ) {
            this.layout = new MultiNotifier();
        } else {
            this.layout = new SingleNotifier();
        }
    }

    get layoutType(): 'single' | 'multi' {
        if ( this.layout instanceof MultiNotifier) {
            return 'multi';
        } else if ( this.layout instanceof SingleNotifier ) {
            return 'single';
        }
    }

    get timer(): Timer | null {
        return this._timer;
    }

    show(): void {
        this._event.next(true);
        if (this.timer) {
            this.cancelTimer = setTimeout(() => this.hide(false), this.timer.duration);
        }
    }

    hide(why?: boolean): void {
        this._event.next(why);
    }

    set titleText(title: string) {
        if ( this.layoutType === 'multi') {
            const layout = this.layout as MultiNotifier;
            layout.titleText = title;
        }
    }

    get action(): Observable<boolean> {
        return this._event;
    }

    set header(msg: string) {
        if ( this.layoutType === 'multi') {
            const layout = this.layout as MultiNotifier;
            layout.head = msg;
        }
    }

    set isDialog(status: boolean) {
        if (status) {
            this.layout.displayAs = 'dialog';
            this.css.position = 'center';
        }
    }

    set isSnack(status: boolean) {
        if (status) {
            this.layout.displayAs = 'snack-bar';
            this.css.position = 'bottom';
        }
    }

    set isNotification(status: boolean) {
        if (status) {
            this.layout.displayAs = 'notification';
            this.css.position = 'default';
        }
    }

    set disableOutsideClick(status: boolean) {
        if ( this.layoutType === 'multi') {
            const layout = this.layout as MultiNotifier;
            layout.disableOutsideClick = status;
        }
    }

    set body(status:  'show' | 'hide') {
        if ( this.layoutType === 'multi') {
            const layout = this.layout as MultiNotifier;
            layout.body.status = status ;
        }
    }

    set actionRow(status:  'show' | 'hide') {
        if ( this.layoutType === 'multi') {
            const layout = this.layout as MultiNotifier;
            layout.actionRow.status = status;
        }
    }

    set closeButton(status:  'show' | 'hide') {
        this.layout.closeButton.status = status;
    }

    set title(status:  'show' | 'hide') {
        this.layout.title.status = status;
    }

    set trueButton(text: string) {
        if (!!this.actionButtons && this.actionButtons.length > 0) {
            this.actionButtons.forEach((button: NotificationButton) => {
                if (typeof(button.emitValue) === 'boolean' && button.emitValue === true) {
                    button.text = text;
                    return;
                }
            });
        }
    }

    set falseButton(text: string) {
        if (!!this.actionButtons && this.actionButtons.length > 0) {
            this.actionButtons.forEach((button: NotificationButton) => {
                if (typeof(button.emitValue) === 'boolean' && button.emitValue === false) {
                    button.text = text;
                    return;
                }
            });
        }
    }

    get type(): 'warn' | 'error' | 'note' | 'success' | 'help' | 'other' {
        return this.notificationType;
    }

    set type(_type: 'warn' | 'error' | 'note' | 'success' | 'help' | 'other') {
        this.notificationType = _type;
        /** default css setup */
        if ( _type === 'success' ) {
            this.css.background = '#4CAF50';
            this.css.color = 'white';
        } else if ( _type === 'error' ) {
            this.css.background = '#cc0000';
            this.css.color = 'white';
        } else if ( _type === 'warn' ) {
            this.css.background = '#ff9800';
            this.css.color = 'white';
        }  else if ( _type === 'note' ) {
            this.css.background = '#2196F3';
            this.css.color = 'white';
        }  else if ( _type === 'help' ) {
            this.css.background = 'rgb(2, 64, 114)';
            this.css.color = 'white';
        }  else if ( _type === 'other' ) {
            this.css.background = '#3f51b5';
            this.css.color = 'white';
        }
    }

    set timer(_timer: Timer) {
        clearTimeout(this.cancelTimer);
        this._timer = _timer;
    }

    get afterOpened(): Observable<void> {
        return this._afterOpened.asObservable()
        .pipe(take(1));
    }

    get afterClosed(): Observable<boolean | any> {
        return this._afterClosed.asObservable()
        .pipe(take(1));
    }

    set close(status: any) {
        this._afterClosed.next(status);
    }

    opened(): void {
        this._afterOpened.next();
    }

}
