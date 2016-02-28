/**
 * http://usejsdoc.org/
 */


/*
 *  read file from disk and display in console  ( IO )
 *  --------------------------------------------------
 *  
 *  thread-1
 *  
 *  // open file ....................
 *  // create buffer
 *  // read file.....................
 *  // display console
 * 
 */


/*
 *  result=query("select * from from T); ...............blocking  .. thread-waiting
 *  // use result
 *   
 * 
 */

var fs=require('fs');  // node core-module

var handle=fs.openSync('info.txt', 'r');//...........// blockig.... thread-waiting...
var buf=new Buffer(100000);
var read=fs.readSync(handle, buf, 0, 10000, null);//................. // blocking.. thread-waiting...
console.log(buf.toString('utf8',0,read));
fs.closeSync(handle);


// with other work.....
console.log('with other work.....');



/*
 *  this code like in java,c,c#,PHP..... ( blocking IO )
 * 
 */












