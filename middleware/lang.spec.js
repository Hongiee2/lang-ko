const supertest = require('supertest');
const status = require('http-status');

const { PORT } = process.env;
const agent = supertest.agent(`http://localhost:${PORT}`);

describe('Middleware - lang', () => {
    test('/gcp-lang', async () => {
        // given
        const query = {
            text: '슬프구나. 난 기쁘다.',
        };

        // when
        const response = await agent.get('/gcp-lang').query(query);

        // then
        expect(response.header['content-type']).toEqual(
            'application/json; charset=utf-8',
        );
        expect(response.statusCode).toEqual(status.OK);
    });
});
