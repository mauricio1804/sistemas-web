class Endereco {
    private _rua: string;
    private _numero: number;
    private _cidade: string;
    private _estado: string;

    constructor(rua: string, numero: number, cidade: string, estado: string) {
        this._rua = rua;
        this._numero = numero;
        this._cidade = cidade;
        this._estado = estado;
    }

    get rua(): string {
        return this._rua;
    }
    set rua(rua: string) {
        this._rua = rua;
    }

    get numero(): number {
        return this._numero;
    }
    set numero(numero: number) {
        this._numero = numero;
    }

    get cidade(): string {
        return this._cidade;
    }
    set cidade(cidade: string) {
        this._cidade = cidade;
    }

    get estado(): string {
        return this._estado;
    }
    set estado(estado: string) {
        this._estado = estado;
    }
}

class Telefone {
    private _ddd: string;
    private _numero: number;
    private _tipo: string;

    constructor(ddd: string, numero: number, tipo: string) {
        this._ddd = ddd;
        this._numero = numero;
        this._tipo = tipo;
    }

    get ddd(): string {
        return this._ddd;
    }
    set ddd(ddd: string) {
        this._ddd = ddd;
    }

    get numero(): number {
        return this._numero;
    }
    set numero(numero: number) {
        this._numero = numero;
    }

    get tipo(): string {
        return this._tipo;
    }
    set tipo(tipo: string) {
        this._tipo = tipo;
    }
}

class Cliente {
    private _nome: string;
    private _cpf: number;
    private _data_nascimento: number;
    private _sexo: string;
    private _endereco: Endereco;
    private _telefones: Telefone[];

    constructor(nome: string, cpf: number, data_nascimento: number, sexo: string, endereco: Endereco, telefones: Telefone[]) {
        this._nome = nome;
        this._cpf = cpf;
        this._data_nascimento = data_nascimento;
        this._sexo = sexo;
        this._endereco = endereco;
        this._telefones = telefones;
    }

    get nome(): string {
        return this._nome;
    }
    set nome(nome: string) {
        this._nome = nome;
    }

    get cpf(): number {
        return this._cpf;
    }

    get data_nascimento(): number {
        return this._data_nascimento;
    }

    get sexo(): string {
        return this._sexo;
    }

    get endereco(): Endereco {
        return this._endereco;
    }
    set endereco(endereco: Endereco) {
        this._endereco = endereco;
    }

    get telefones(): Telefone[] {
        return this._telefones;
    }
    set telefones(telefones: Telefone[]) {
        this._telefones = telefones;
    }
}

class Produto {
    private _codigo: number;
    private _descricao: string;
    private _valor: number;

    constructor(codigo: number, descricao: string, valor: number) {
        this._codigo = codigo;
        this._descricao = descricao;
        this._valor = valor;
    }

    get codigo(): number {
        return this._codigo;
    }

    get descricao(): string {
        return this._descricao;
    }
    set descricao(descricao: string) {
        this._descricao = descricao;
    }

    get valor(): number {
        return this._valor;
    }
    set valor(valor: number) {
        this._valor = valor;
    }
}

class Venda {
    private _codigo: number;
    private _data: number;
    private _cliente: Cliente;
    private _produtos: Produto[];

    constructor(codigo: number, data: number, cliente: Cliente, produtos: Produto[]) {
        this._codigo = codigo;
        this._data = data;
        this._cliente = cliente;
        this._produtos = produtos;
    }

    get codigo(): number {
        return this._codigo;
    }

    get data(): number {
        return this._data;
    }

    get cliente(): Cliente {
        return this._cliente;
    }

    get produtos(): Produto[] {
        return this._produtos;
    }
    set produtos(produtos: Produto[]) {
        this._produtos = produtos;
    }

    calcularTotal(): number {
        return this._produtos.reduce((total, produto) => total + produto.valor, 0);
    }
}

const endereco = new Endereco("Rua A", 123, "São Paulo", "SP");
const telefone = new Telefone("11", 987654321, "Celular");
const cliente = new Cliente("João Silva", 12345678900, 19900101, "Masculino", endereco, [telefone]);
const produto1 = new Produto(1, "Produto 1", 100.0);
const produto2 = new Produto(2, "Produto 2", 200.0);
const venda = new Venda(1, 20230404, cliente, [produto1, produto2]);

console.log("Nome do Cliente:", cliente.nome);
console.log("Endereço do Cliente:", cliente.endereco.rua, cliente.endereco.numero, cliente.endereco.cidade, cliente.endereco.estado);
console.log("Telefone do Cliente:", cliente.telefones[0].ddd, cliente.telefones[0].numero, cliente.telefones[0].tipo);
console.log("Produtos na Venda:", venda.produtos.map(p => `${p.descricao} - R$${p.valor}`).join(", "));
console.log("Total da Venda:", venda.calcularTotal());
