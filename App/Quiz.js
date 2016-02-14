/**
 * http://usejsdoc.org/
 */

function f() {

	var name='Nag';
	try {
		
		setTimeout(function() {
			console.log('after break...');
			//throw new Error('ooops...');
			console.log('teaching JS..'+ name +" again");
		}, 5000);

	} catch (e) {
		console.log('i caught ' + e);
	}

}

f();