# biplab-notifier
Reference to use biplab-notifier

## Selector
biplab-notifier

### Properties
|   Name    | Description|
|-----------|-------------|
|  @Input() customTemplate: TemplateRef<any> | Design your own template and pass that to use |
|  @Input() notification: Notification | You must have to pass as instance of `Notification` |

`Notification` is a class, which contain all configuration need to execute biplab-notifier

### Notification attibutes
|   Name    | Description|
|-----------|-------------|
|  type: 'warn', 'error' , 'note' , 'success', 'help' | You must have to specify the type |
|  timer?: Timer | You can set duration for message, once set it will hide notification, Default setting will not hide notification  |
|  message: string | You will use if you want  to pass single value |
|  message: string[] | You will use if you want to pass multiple values |
|  layoutType: 'single' or 'multi' | Default is single, meaning you can only set data to `message` attribute, Always remember to set `layoutType` as 'multi' if you want to set list of values in notices attribute otherwise it will generate error |


### Notification methods
|   Name    | Description|
|-----------|-------------|
|  show | Will show the notification |
|  hide | Will hide the notification |



### Implementation
In component file
```
// First Import Notification class
import { Notification } from 'biplab-notifier';

// Declare and Initiliza the variable
notification = new Notification()

// Now for testing, add following line to see message

constructor() {
    //Setup the type, it can be success, error, warn, note, or help
    this.notification.type = 'success';

    //Send message to display
    this.notification.message = 'You will see this message with success title';

    //Calling function to display message
    this.notification.show();
}

```
In Template file ( HTML )
``` 
<biplab-notifier [(notification)]="notification"></biplab-notifier>
```
