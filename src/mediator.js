'use strict';

export class Mediator {
    constructor() {
        this.channels = {};
    }

    subscribe(channel, fn) {
        if(!this.channels[channel]) this.channels[channel] = [];

        this.channels[channel].push({
            context: this,
            callback: fn
        });
    }

    publish(channel) {
        if(!this.channels[channel]) return false;

        var args = Array.prototype.slice.call(arguments, 1);

        for(var i = 0, length = this.channels[channel].length; i < length; i++) {
            var subscription = this.channels[channel][i];
            subscription.callback.apply(subscription.context, args);
        }

        return this;
    }

    installTo(obj) {
        obj.channels = {};

        obj.publish = this.publish;
        obj.subscribe = this.subscribe;
    }
}