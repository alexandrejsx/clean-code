import { calc } from '../src/v1/calc';

test('Deve calcular uma corrida em horário normal', () => {
	const fare = calc([{ dist: 10, ds: new Date('2023-02-06T10:00:00') }]);
	expect(fare).toBe(21);
});

test('Deve calcular uma corrida em horário noturno', () => {
	const fare = calc([{ dist: 10, ds: new Date('2023-02-06T22:00:00') }]);
	expect(fare).toBe(39);
});

test('Deve calcular uma corrida em horário normal no domingo', () => {
	const fare = calc([{ dist: 10, ds: new Date('2023-02-12T10:00:00') }]);
	expect(fare).toBe(29);
});

test('Deve calcular uma corrida em horário noturno no domingo', () => {
	const fare = calc([{ dist: 10, ds: new Date('2023-02-12T22:00:00') }]);
	expect(fare).toBe(50);
});

test('Não deve calcular uma corrida com distância inválida', () => {
	const fare = calc([{ dist: -10, ds: new Date('2023-02-06T10:00:00') }]);
	expect(fare).toBe(-1);
});

test('Não deve calcular uma corrida com data inválida', () => {
	const fare = calc([{ dist: 10, ds: new Date('error') }]);
	expect(fare).toBe(-2);
});

test('Deve calcular uma corrida em horário normal com valor mínimo', () => {
	const fare = calc([{ dist: 3, ds: new Date('2023-02-06T10:00:00') }]);
	expect(fare).toBe(10);
});
