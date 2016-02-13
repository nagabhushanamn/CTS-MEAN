/**
 * http://usejsdoc.org/
 */

var trainer = {
	name : 'Nag',
	doTeach : function() {
		console.log(this.name + " teaching JS"); // this==> trainer
		var me = this;
		function learn() {
			console.log('JS learnt from ' + me.name); // this ==> ??
		}
		var participant = {
			name : 'CTS'
		};
		learn.call(participant);
	}
};

trainer.doTeach();