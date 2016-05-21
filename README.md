# bootstrap-datetimepicker-angular
Angular 1.5.x Component for Eonasdan's bootstrap-datetimepicker


### Demo
[https://ejfrias.github.io/bootstrap-datetimepicker-angular](https://ejfrias.github.io/bootstrap-datetimepicker-angular)


### Requirements
[jQuery](https://jquery.com)

[Bootstrap](https://github.com/twbs/bootstrap)

[Eonasdan's date/time picker widget](https://github.com/Eonasdan/bootstrap-datetimepicker)


### How to use
Just add a bootstrap-datetimepicker-angular.js after bootstrap-datetimepicker.js:
```
<script src="/path/to/bootstrap-datetimepicker-angular.js"></script>
```

Require the component in your module
```
angular.module('myApp', ['bootstrap-datetimepicker-angular'])
```

Then, add the `<date-time-picker><date-time-picker>` component anywhere on your app:
```
<script src="/path/to/tooltip.js"></script>
```


### Options

Name | Type | Required | Description
---- | ---- | ------- | -----------
ng-model | string | required | Scope property.
placeholder | string | optional | Placeholder of the input element.
format | string | optional | DateTime format based from moment.js
