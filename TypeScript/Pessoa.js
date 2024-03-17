var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(nome1, idade1) {
        this.nome = nome1;
        this.idade = idade1;
        this.msg = this.exibirDados();
    }
    Pessoa.prototype.exibirDados = function () {
        return this.nome + "-" + "-" + this.idade;
    };
    return Pessoa;
}());
var Empregado = /** @class */ (function (_super) {
    __extends(Empregado, _super);
    function Empregado(nome1, idade1, salario1) {
        var _this = _super.call(this, nome1, idade1) || this;
        _this.salario = salario1;
        return _this;
    }
    Empregado.prototype.exibirSalario = function () {
        return this.exibirDados + "-" + this.salario;
    };
    return Empregado;
}(Pessoa));
var Marcos = new Empregado("Marcos", 23, 2000);
console.log(Marcos.exibirDados);
