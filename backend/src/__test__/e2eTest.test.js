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
		test('login with admin', async () => {
			const { body: { success }, statusCode } = await request(app).post('/user/login').send({
				email: 'admin@gmail.com',
				password: 'admin123'
			});
			expect(success).toBe(true);
			expect(statusCode).toBe(200);
		});
		test('login bad', async () => {
			const { body: { success }, statusCode } = await request(app).post('/user/login').send({
				email: 'admin@gmail.com',
				password: 'admin123'
			});
			expect(success).toBe(true);
			expect(statusCode).toBe(200);
		});
	});
	describe('cars', () => {
		test('get all', async () => {
			const { body, statusCode } = await request(app).get('/car/getAll');
			expect(typeof body).toBe(typeof []);
			expect(statusCode).toBe(200);
		});
	});
	describe('flight', () => {
		test('get all', async () => {
			const { body, statusCode } = await request(app).get('/flight/getAll');
			expect(typeof body).toBe(typeof []);
			expect(statusCode).toBe(200);
		});
		test('error on get destination', async () => {
			const { statusCode } = await request(app).get('/getByDestination/error');
			expect(statusCode).toBe(404);
		});
	});
	describe('review', () => {
		test('get all', async () => {
			const { body, statusCode } = await request(app).get('/review/getAll');
			expect(typeof body).toBe(typeof []);
			expect(statusCode).toBe(200);
		});
	});
	describe('tertiaryService', () => {
		test('get all', async () => {
			const { body, statusCode } = await request(app).get('/tertiaryService/getAll');
			expect(typeof body).toBe(typeof []);
			expect(statusCode).toBe(200);
		});
	});
	describe('room', () => {
		test('get all', async () => {
			const { body, statusCode } = await request(app).get('/room/getAll');
			expect(typeof body).toBe(typeof []);
			expect(statusCode).toBe(200);
		});
	});
	describe('reserveRoom', () => {
		test('get all', async () => {
			const { body, statusCode } = await request(app).get('/reserveRoom/getAll');
			expect(typeof body).toBe(typeof []);
			expect(statusCode).toBe(200);
		});
	});
});
