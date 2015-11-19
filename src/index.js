import {IApp} from 'sapps.ui.api';
import App from './app';

var app;

export function start(ctx) {
    app = new App();
    app.start(ctx);
    ctx.services.register(IApp, app, {
        name:'forms',
        url:'/forms',
        label:'Forms'
    });

}
export function stop(ctx) {
    app.stop();
    app = null;
}
