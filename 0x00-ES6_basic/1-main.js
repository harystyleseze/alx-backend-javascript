// 1-main.js

import taskBlock from './1-block-scoped.js';

console.log(taskBlock(true));  // Expected output: [ true, false ]
console.log(taskBlock(false)); // Expected output: [ false, true ]

