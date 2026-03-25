import request from 'supertest';
import { expect } from 'chai';

describe('Login', () => {
    describe('POST / login', () => {
        it('Deve retornar 200 com token em string quando usar credenciais válidas', async () => {
            const resposta =  await request('http://localhost:3000') //await é pq vai retornar uma promisse
                .post('/login')
                .set('Content-Type', 'application/json')//setando o cabecalho
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
               }) //é onde coloco o body

               //console.log(resposta.status)
               //console.log(resposta.body.token)

               //validacoes com o uso do chai:
               expect(resposta.status).to.equal(200);
               expect(resposta.body.token).to.be.a('string');
               //rodar o mocha apontando pra pasta test e procurar todos os .test.js / precisa alterar no package json os scripts de teste
               //rodar npm test no terminal

        })

    })


})