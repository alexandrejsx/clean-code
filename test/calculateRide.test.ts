import { calculateRide } from '../src/v1/calculateRide';

test('Deve calcular uma corrida em horário normal', function () {
	const fare = calculateRide([{ distance: 10, date: new Date('2021-03-10T10:00:00') }]);
	expect(fare).toBe(21);
});

test('Deve calcular uma corrida em horário noturno', function () {
	const fare = calculateRide([{ distance: 10, date: new Date('2021-03-10T22:00:00') }]);
	expect(fare).toBe(39);
});

test('Deve calcular uma corrida em horário no domingo', function () {
	const fare = calculateRide([{ distance: 10, date: new Date('2021-03-07T10:00:00') }]);
	expect(fare).toBe(29);
});

test('Deve calcular uma corrida em horário no domingo em horário noturno', function () {
	const fare = calculateRide([{ distance: 10, date: new Date('2021-03-07T22:00:00') }]);
	expect(fare).toBe(50);
});

test('Não deve calcular uma corrida com distância inválida', function () {
	expect(() => calculateRide([{ distance: -10, date: new Date('2021-03-10T10:00:00') }])).toThrow(new Error('Invalid Distance'));
});

test('Não deve calcular uma corrida com data inválida', function () {
	expect(() => calculateRide([{ distance: 10, date: new Date('javascript') }])).toThrow(new Error('Invalid Date'));
});

test('Deve calcular uma corrida em horário normal com valor mínimo', function () {
	const fare = calculateRide([{ distance: 3, date: new Date('2021-03-10T10:00:00') }]);
	expect(fare).toBe(10);
});