// Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

// Aplicação
const app = require('../../app');

// Testes
describe('Transfer Controller', () =>{
    describe('POST /transfers', () => {
        it('Quando informo remetente e destinario inexistente recebo 400', async () => {
            const resposta = await request(app)
                .post('/transfers')
                .send({
                    from: "fernanda",
                    to: "renata",
                    amount: 100
                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Remetente ou destinatário não encontrado.')
        });

        it('Quando não informo os campos obrigatórios recebo 400', async () => {
            const resposta = await request(app)
                .post('/transfers')
                .send({
                    from: "",
                    to: "",
                    amount: 0
                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Remetente, destinatário e valor são obrigatórios.')
        });
    });

    describe('GET /transfers', () => {

    });
});