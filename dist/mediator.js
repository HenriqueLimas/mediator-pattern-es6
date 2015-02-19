"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Mediator = exports.Mediator = (function () {
    function Mediator() {
        _classCallCheck(this, Mediator);

        this.channels = {};
    }

    _prototypeProperties(Mediator, null, {
        subscribe: {
            value: function subscribe(channel, fn) {
                if (!this.channels[channel]) this.channels[channel] = [];

                this.channels[channel].push({
                    context: this,
                    callback: fn
                });
            },
            writable: true,
            configurable: true
        },
        publish: {
            value: function publish(channel) {
                if (!this.channels[channel]) {
                    return false;
                }var args = Array.prototype.slice.call(arguments, 1);

                this.channels[channel].forEach(function (subscription) {
                    subscription.callback.apply(subscription.context, args);
                });

                return this;
            },
            writable: true,
            configurable: true
        },
        installTo: {
            value: function installTo(obj) {
                obj.channels = {};

                obj.publish = this.publish;
                obj.subscribe = this.subscribe;
            },
            writable: true,
            configurable: true
        }
    });

    return Mediator;
})();
Object.defineProperty(exports, "__esModule", {
    value: true
});
//# sourceMappingURL=mediator.js.map