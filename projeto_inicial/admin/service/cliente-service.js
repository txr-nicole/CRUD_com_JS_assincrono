const listaClientes = async () => {
    const resposta = await fetch("http://localhost:3000/profile")
    if (resposta.ok) {
        return await resposta.json()
    }
    throw new Error('Não foi possivel listar os clientes')

}

const criaCliente = async (nome, email) => {
    const resposta = await fetch("http://localhost:3000/profile", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    if (resposta.ok) {
        return resposta.body
    }
    throw new Error('Não foi possivel criar um cliente')
}
const removeClientes = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: "DELETE",
    }).then(resposta => {
        if (!resposta.ok) {
            throw new Error('Não foi possivel deletar o cliente')
        }
    })
}
const detalhaCliente = async (id) => {
    const resposta = await fetch(`http://localhost:3000/profile/${id}`)
    if (resposta.ok) {
        return await resposta.json()
    }
    throw new Error('Não foi possivel detalhar o cliente')
}
const atualizaCliente = async (id, nome, email) => {
    const resposta = await fetch(`http://localhost:3000/profile/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    if (resposta.ok) {
        return await resposta.json()
    }
    throw new Error('Não foi possivel atualizar o cliente')

}



export const clienteService = {
    listaClientes,
    criaCliente,
    removeClientes,
    detalhaCliente,
    atualizaCliente
}

