var Bicicleta = require('../../models/bicicleta');

beforeEach(() => {
    Bicicleta.allBicis = [];
});

describe('Bicicleta.allBicis', () => {
    it('comienza vacia', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});

describe('Bicicleta.add', () => {
    it('agregamos una', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var a = new Bicicleta(1, 'rojo', 'urbana', [4.587067826932398, -74.16080334293196]);
        Bicicleta.add(a);

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);
        });
});

describe('Bicicleta.findById', () => {
    it('debe devolver la bici con id', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var aBici = new Bicicleta(1, "verde", "urbana");
        var aBici2 = new Bicicleta(2, "roja", "montana");

        Bicicleta.add(aBici);
        Bicicleta.add(aBici2);

        var targetBici = Bicicleta.findById(1);

        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(aBici.color);
        expect(targetBici.modelo).toBe(aBici.modelo);
    })
})