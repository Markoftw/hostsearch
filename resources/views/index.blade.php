<!DOCTYPE html>
<html ng-app="app" ng-strict-di>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="{!! elixir('css/vendor.css') !!}">
    <link rel="stylesheet" href="{!! elixir('css/app.css') !!}">
    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>

    <title>MareFX: Server finder</title>

    <!--[if lte IE 10]>
    <script type="text/javascript">document.location.href = '/unsupported-browser'</script>
    <![endif]-->
</head>
<body layout="row">

<div layout="column" layout-fill>
    <header ui-view="header"></header>
    <md-content layout="column" flex id="top-page">
        <div ui-view="main"></div>
        <span flex></span>
        <footer ui-view="footer"></footer>
    </md-content>
</div>
<div ui-view="scrolling"></div>


<!--<div layout="column" role="main" flex>
    <md-toolbar ui-view="header"></md-toolbar>
    <md-content ui-view="main"></md-content>
    <span flex></span>
    <div ui-view="footer"></div>
</div>-->


<script src="{!! elixir('js/vendor.js') !!}"></script>
<script src="{!! elixir('js/partials.js') !!}"></script>
<script src="{!! elixir('js/app.js') !!}"></script>

{{--livereload--}}
@if ( env('APP_ENV') === 'local' )
    <script type="text/javascript">
        document.write('<script src="' + location.protocol + '//' + (location.host.split(':')[0] || 'localhost') + ':35729/livereload.js?snipver=1" type="text/javascript"><\/script>')
    </script>
@endif
</body>
</html>
