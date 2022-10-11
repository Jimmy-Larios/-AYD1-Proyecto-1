const request = require('supertest');
const app = require('../index');

describe('Test e2e', () => {
	afterAll(() => {
		app.close();
	});
	describe('users', () => {
		test('get all', async () => {
			const { body, statusCode } = await request(app).get('/user/getAll');
			expect(typeof body).toBe(typeof []);
			expect(statusCode).toBe(200);
		});
		test('registro de turista', async () => {
			const { statusCode } = await request(app).post('/user/create').send({
				name: 'test',
				lastName: 'test',
				user: 'test',
				dateOfBirth: '2000-10-10',
				email: 'test',
				password: 'test'
			});
			expect(statusCode).toBe(200);
		});
		test('inicio de sesion', async () => {
			const { statusCode } = await request(app).post('/user/login').send({
				email: 'test',
				password: 'test',
				service: false
			});
			expect(statusCode).toBe(200);
		});
	});
	describe('tertiaryService', () => {
		test('get all', async () => {
			const { body, statusCode } = await request(app).get('/tertiaryService/getAll');
			expect(typeof body).toBe(typeof []);
			expect(statusCode).toBe(200);
		});
		test('registro de servicio tecnico', async () => {
			const { statusCode } = await request(app).post('/tertiaryService/create').send({
				typeService: 'test',
				name: 'test',
				country: 'test',
				city: 'test',
				email: 'test',
				password: 'test'
			});
			expect(statusCode).toBe(200);
		});
	});
	describe('cars', () => {
		test('get all', async () => {
			const { body, statusCode } = await request(app).get('/car/getAll');
			expect(typeof body).toBe(typeof []);
			expect(statusCode).toBe(200);
		});
		test('registro de carros', async () => {
			const { statusCode } = await request(app).post('/car/create').send({
				idCarRentalService: 'test',
				carRegistration: 'test',
				brand: 'test',
				model: 'test',
				price: 0
			});
			expect(statusCode).toBe(200);
		});
	});
	describe('flight', () => {
		test('get all', async () => {
			const { body, statusCode } = await request(app).get('/flight/getAll');
			expect(typeof body).toBe(typeof []);
			expect(statusCode).toBe(200);
		});
		test('registro de vuelos', async () => {
			const { statusCode } = await request(app).post('/flight/create').send({
				idAirlineService: 'test',
				travelDate: '2000-10-10',
				origin: 'test',
				destination: 'test',
				availableSeats: 100,
				price: 0,
				typeFlight: 1
			});
			expect(statusCode).toBe(200);
		});
	});
	describe('review', () => {
		test('get all', async () => {
			const { body, statusCode } = await request(app).get('/review/getAll');
			expect(typeof body).toBe(typeof []);
		});
		test('registro de reseñas', async () => {
			const { statusCode } = await request(app).post('/review/create').send({
				idUser: '6345823b82608d44358fff98',
				idService: 'test',
				description: 'test',
				confirmPassword: 'test'
			});
			expect(statusCode).toBe(200);
		});
	});
});
