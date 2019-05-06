import { sumOf } from '../index';

describe('Testing function from index to sum 2 numbers', () => {
	test('adds 1 + 2 to equal 3', () => {
		expect(sumOf(1, 2)).toBe(3);
	});
});
