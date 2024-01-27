/* 1. Event Loop

Event loop consists of the message queue and the call stack
The Call Stack handles synchronous code, message queue handles async code, and the event loop
will track both of those structures and will only dequeue and event from the message queue when the call
stack is empty.
*/


/* 2. Why Async?

synchronous code has a guaranteed order while async doesn't.

Delay executions to allow the user to do different things at the same time.

ex: when requesting data from an external server over a network, we cannot predict
when we will get a response back.
a lot of things can affect this like traffic on the network, the server being
busy handling other requests and more.

ex: the human element. users interacting with our programs, hitting keys,
clicking a button, scrolling, whatever.
we don't know what order they'll do them in.

*/

/* 3. First Class Objects in JS

1. Can be stored in a variable
2. Passed as an argument
3. Returned from a function

** Key take away, you can treat functions like any other data type.

*/
