const express = require('express');
const servidor = express();
servidor.use(express.json());

/* TABELAS */
const categoria = [];
const receita = [];
const despesa = [];

/* CATEGORIA - métodos */
/* GET */
servidor.get('/controleGastos/categoria', (requisicao, resposta) => {
    let categorias = '';
    for (let index = 0; index < categoria.length; index++) {
        const categ = categoria[index];
        categorias += '<p>';
        categorias += 'Código: ';
        categorias += categ.id;
        categorias += '</br>Descrição: ';
        categorias += categ.descricao;
        categorias += '</p>';
    }
    
    resposta.send(categorias);
});
servidor.get('/controleGastos/categoria/:id', (requisicao,resposta) =>{
    const iCategoria = requisicao.params.id;
    
    resposta.send(despesa.find((itemAtual) => {
        return itemAtual.id == idCategoria;
    }));
    return;
});
/* POST */
servidor.post('/controleGastos/categoria', (requisicao, resposta) => {
    const descricao = requisicao.body.descricao;
    
    let codigo = -99999999999999999;
    for (let index = 0; index < categoria.length; index++) {
        const item = categoria[index];
        if (item.id > codigo) {
            codigo = item.id;
        }
    }
    if (codigo < 0) { codigo = 0; }
    
    const novoItem = {
        id: codigo + 1,
        descricao: descricao
    };
    
    categoria.push(novoItem);
    resposta.send();
});
/* PUT */
servidor.put('/controleGastos/cateoria/:id', (requisicao, resposta) => {
    const idCategoria = requisicao.params.id;
    
    const encontrado = categoria.find((itemAtual) => {
        return itemAtual.id == idCategoria;
    });
    
    const descricao = requisicao.body.descricao;
    encontrado.descricao = descricao;
    
    resposta.send();
});
/* DELETE */
servidor.delete('/controleGastos/categoria/:id', (requisicao, resposta) => {
    const idCategoria = requisicao.params.id;
    
    const encontrado = categoria.findIndex((itemAtual) => {
        return itemAtual.id == idCategoria;
    });
    
    if (encontrado !== -1) {
        categoria.splice(encontrado, 1);
        
        resposta.send('Excluído com sucesso.');
    } else {
        resposta.status(404).send('Categoria não encontrado.');
    }
});

/* RECEITAS - métodos */
/* GET */
servidor.get('/controleGastos/receitas', (requisicao, resposta) => {
    let receitas = '';
    for (let index = 0; index < receita.length; index++) {
        const rec = receita[index];
        receitas += '<p>';
        receitas += 'Código: ';
        receitas += rec.id;
        receitas += '</br>Descrição: ';
        receitas += rec.descricao;
        receitas += '</br>Valor: ';
        receitas += rec.valor;
        receitas += '</br>Categoria: ';
        const encontrado = categoria.find((itemAtual) => {
            return itemAtual.id == rec.idCategoria;
        });
        receitas +=encontrado.descricao;
        receitas += '</p>';
    }

    resposta.send(receitas);
});
servidor.get('/controleGastos/receitas/:id', (requisicao,resposta) =>{
    const idReceita = requisicao.params.id;
    
    resposta.send(despesa.find((itemAtual) => {
        return itemAtual.id == idReceita;
    }));
    return;
});
/* POST */
servidor.post('/controleGastos/receitas', (requisicao, resposta) => {
    const descricao = requisicao.body.descricao;
    const valor = requisicao.body.valor;
    const idCategoria = requisicao.body.idCategoria;
    
    let codigo = -99999999999999999;
    for (let index = 0; index < receita.length; index++) {
        const item = receita[index];
        if (item.id > codigo) {
            codigo = item.id;
        }
    }
    if (codigo < 0) { codigo = 0; }
    
    const novoItem = {
        id: codigo + 1,
        descricao: descricao,
        valor: valor,
        idCategoria: idCategoria
    };
    
    receita.push(novoItem);
    resposta.send();
});
/* PUT */
servidor.put('/controleGastos/receitas/:id', (requisicao, resposta) => {
    const idReceita = requisicao.params.id;
    
    const encontrado = receita.find((itemAtual) => {
        return itemAtual.id == idReceita;
    });
    
    const descricao = requisicao.body.descricao;
    const valor = requisicao.body.valor;
    encontrado.descricao = descricao;
    encontrado.valor = valor;
    
    resposta.send();
});
/* DELETE */
servidor.delete('/controleGastos/receitas/:id', (requisicao, resposta) => {
    const idReceita = requisicao.params.id;
    
    const encontrado = receita.findIndex((itemAtual) => {
        return itemAtual.id == idReceita;
    });
    
    if (encontrado !== -1) {
        receita.splice(encontrado, 1);
        
        resposta.send('Excluído com sucesso.');
    } else {
        resposta.status(404).send('Receita não encontrado.');
    }
});

/* DESPESAS - métodos */
/* GET */
servidor.get('/controleGastos/despesas', (requisicao, resposta) => {
    let despesas = '';
    for (let index = 0; index < despesa.length; index++) {
        const des = despesa[index];
        despesas += '<p>';
        despesas += 'Código: ';
        despesas += des.id;
        despesas += '</br>Descrição: ';
        despesas += des.descricao;
        despesas += '</br>Valor: ';
        despesas += des.valor;
        despesas += '</br>Categoria: ';
        const encontrado = categoria.find((itemAtual) => {
            return itemAtual.id == des.idCategoria;
        });
        despesas += encontrado.descricao;
        despesas += '</p>';
    }

    resposta.send(despesas);
});
servidor.get('/controleGastos/despesas/:id', (requisicao,resposta) =>{
    const idDespesa = requisicao.params.id;
    
    resposta.send(despesa.find((itemAtual) => {
        return itemAtual.id == idDespesa;
    }));
    return;
});
/* POST */
servidor.post('/controleGastos/despesas', (requisicao, resposta) => {
    const descricao = requisicao.body.descricao;
    const valor = requisicao.body.valor;
    const idCategoria = requisicao.body.idCategoria;
    
    let codigo = -99999999999999999;
    for (let index = 0; index < despesa.length; index++) {
        const item = despesa[index];
        if (item.id > codigo) {
            codigo = item.id;
        }
    }
    if (codigo < 0) { codigo = 0; }
    
    const novoItem = {
        id: codigo + 1,
        descricao: descricao,
        valor: valor,
        idCategoria: idCategoria
    };
    
    despesa.push(novoItem);
    resposta.send();
});
/* PUT */
servidor.put('/controleGastos/despesas/:id', (requisicao, resposta) => {
    const idDespesa = requisicao.params.id;
    
    const encontrado = despesa.find((itemAtual) => {
        return itemAtual.id == idDespesa;
    });
    
    const descricao = requisicao.body.descricao;
    const valor = requisicao.body.valor;
    encontrado.descricao = descricao;
    encontrado.valor = valor;
    
    resposta.send();
});
/* DELETE */
servidor.delete('/controleGastos/despesas/:id', (requisicao, resposta) => {
    const idDepesa = requisicao.params.id;
    
    const encontrado = despesa.findIndex((itemAtual) => {
        return itemAtual.id == idDepesa;
    });
    
    if (encontrado !== -1) {
        despesa.splice(encontrado, 1);
        
        resposta.send('Excluído com sucesso.');
    } else {
        resposta.status(404).send('Despesa não encontrado.');
    }
});


servidor.listen(4300, () => {
    console.log('Servidor conectado.');
});