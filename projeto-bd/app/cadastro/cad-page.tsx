import { cadastrar } from "../actions"

export default function CadastroPage () {
    return (
        <main style={{ padding: "20px" }}>
            <h1>Cadastro de Cliente</h1>

            <form action={cadastrar}>
                <input type="text" name="nome_cliente" placeholder="Nome" required/>
                <input type="text" name="endereco_cliente" placeholder="Endereço" required/>
                <input type="text" name="telefone_cliente" placeholder="Telefone - ex (xx) xxxxx-xxxx" required/>
                <input type="password" name="senha_cliente" placeholder="Senha" required/>
                <button type="submit">Cadastrar</button>
            </form>
        </main>
    )
}