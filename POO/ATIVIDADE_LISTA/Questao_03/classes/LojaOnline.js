
import Produto from "./Produto.js";
import Carrinho from "./Carrinho.js";

export default class LojaOnline{
    constructor(){
        this.produto = [
            new Produto('Tênis',399),
            new Produto('Camiseta',250),
            new Produto('Calça',299),
            new Produto('Bolsa',500),
            new Produto('Short',99),
            new Produto('Jaqueta',450),
        ]
        this.carrinho = new Carrinho();
    }

    listarProdutos(){
        this.produto.forEach((produto, index) => console.log(`[${index}]: ${produto.infoProduto()}\n`));
    }

    adicionarAoCarrinho(idProduto){
        this.carrinho.addProduto(this.produto[idProduto]);
    }

    removerDoCarrinho(idProduto){
        this.carrinho.removerProduto(idProduto);
    }

    totalCarrinho(){
        return this.carrinho.getTotal();
    }

    showCarrinhoInfo(){
        console.log(this.carrinho.getInfo());
    }



}
