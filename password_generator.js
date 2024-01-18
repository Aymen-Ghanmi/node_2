var generator = require('generate-password');

var passwords = generator.generateMultiple(3, {
	length: 8,
	uppercase: false
});

// [ 'hnwulsekqn', 'qlioullgew', 'kosxwabgjv' ]
console.log(passwords);