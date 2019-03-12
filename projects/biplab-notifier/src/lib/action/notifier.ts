import { BehaviorSubject } from 'rxjs';
import { Notification } from '../notification';

export class Notifier {
    trigger = new BehaviorSubject<Notification>(new Notification());
    constructor(notification: Notification) {
        if (notification) {
           this.trigger.next(notification);
            this.notice.action.subscribe((toggle: boolean) => {
                if (toggle) {
                    this.activate();
                } else {
                    this.deactivate();
                }
                if (!this.notice.actionButtons || this.notice.actionButtons.length === 0) {
                    this.notice.defaultButtons();
                }

            });
        }
    }

    get notice(): Notification {
        return this.trigger.value;
    }

    get isActive(): boolean {
        return this.notice.status === 'activate' ? true : false;
    }

    get type(): string {
        return this.notice.type;
    }

    get duration(): number | null {
        return this.notice.timer.duration || null;
    }

    activate() {
        const notification = this.notice;
        notification.status = 'activate';
        this.trigger.next(notification);
        notification.opened();
    }

    deactivate(status?: any) {
        const notification = this.notice;
        notification.status = 'deactivate';
        this.trigger.next(notification);
        notification.close = status;
    }
}
