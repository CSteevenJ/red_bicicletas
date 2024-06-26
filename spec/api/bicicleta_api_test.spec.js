var mongoose = require('mongoose');
var Bicicleta = require('../../models/bicicleta');
var request = require('request');
var server = require('../../bin/www');

var base_url = "http://localhost/5000/api/bicicletas";

describe("Bicicleta API", () => {
    beforeEach(function(done) {
        var mongoDB = 'mongodb://localhost/testdb';
        mongoose.connect(mongoDB, {userNewUrlParser: true});

        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function() {
            console.log('we are connected to test database!');
            done();
        });
    });

    afterEach(function(done) {
        Bicicleta.deleteMany({}, function(error, success){
            if (err) console.log(err);
            done();
        });
    });

    describe("GET BICICLETAS /", () => {
        it("Status 200", (done) => {
            request.get(base_url, function(error, response, body){
                var result = JSON.parse(body);
                expect(response.statusCode).toBe(200);
                expect(result.bicicletas.lenght).toBe(0);
                done();
            });
        });
    });

    describe("POST BICICLETAS /create", () => {
        it("Status 200", (done) => {
            var headers = {'content-type' : 'application/json'};
            var aBici = '{"code": 10, "color": "rojo", "modelo": "urbana", "lat": -34,546, "lng": 75,645';
            request.post({
                headers: headers,
                url: base_url + '/create',
                body: aBici
            }, function(error, response, body){
                expect(response.statusCode).toBe(200);
                var bici = JSON.parse(body).bicicleta;
                console.log(bici);
                expect(bici.color).toBe("rojo");
                expect(bici.ubicacion[0]).toBe(-34);
                expect(bici.ubicacion[1]).toBe(-54);
                done();
            });
        });
    });
});



/*
describe('Bicicleta API', () => {
    describe('GET BICICLETAS /', () => {
        it('Status 200', () => {
            expect(Bicicleta.allBicis.length).toBe(0);

            var a = new Bicicleta(1, 'negro', 'urbana', [4.580460185642228, -74.1573926862186]);
            Bicicleta.add(a);

            request.get('http://localhost:5000/api/bicicletas', function(error, response, body){
                expect(response.statusCode).toBe(400);
            });
        });
    });
});

describe('POST BICICLETAS /create', () => {
    it('Status 200', (done) => {
        var headers = {'content-type' : 'application/json'};
        var aBici = '{"id" : 10, "color" : "rojo", "modelo" : "urbana", "lat" : 4, "lng" : -74}';
        request.post({
            headers: headers,
            url: 'http://localhost:5000/api/bicicletas/create',
            body: aBici
        }, function(error, response, body) {
            expect(response.statusCode).toBe(200);
            expect(Bicicleta.findById(10).color).toBe("rojo");
            done();
        });
    });
});
*/