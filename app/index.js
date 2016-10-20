var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Raven = require('raven-js');

var sentryKey = '45a54d00305e45b9b0ebbb11751ae8e6';
var sentryApp = '106922';
var sentryUrl = 'https://' + sentryKey + '@app.getsentry.com/' + sentryApp;

Raven.config(sentryUrl).install();

ReactDOM.render(
    routes,
    document.getElementById('app')
);