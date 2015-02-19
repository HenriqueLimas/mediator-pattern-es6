'use strict';

import {Mediator} from './mediator';

var mediator = new Mediator();

mediator.name = 'Luke';

mediator.subscribe('nameChange', function(arg) {
	console.log(this.name);
	this.name = arg;
	console.log(this.name);
});

mediator.publish('nameChange', 'Anakin');

var robot = {
	name: 'R2D2'
};

mediator.installTo(robot);

robot.subscribe('makeNoise', function() {
	console.log(this.name + ' is making noise!');
});

robot.publish('makeNoise');