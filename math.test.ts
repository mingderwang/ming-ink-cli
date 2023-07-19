import test from 'ava';
import {add} from './source/math.js';

test('should add two numbers', t => {
	const result = add(2, 3);
	t.is(result, 5);
});

test('should return zero when adding zero to zero', t => {
	const result = add(0, 0);
	t.is(result, 0);
});
