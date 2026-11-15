"use-server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { error } from "console";

export async function pedir(formData: FormData) {
    const supabase = await createClient();

    const {data: dataPedido, error: errorPedido} = await supabase.from("pedido").insert({
        data: String(formData.get("data")),
        id_cliente: Number(formData.get("id_cliente")),
        id_entregador: Number(formData.get("id_entregador")),
        status_pedido: "preparando"
    })
    .select("id_pedido")
    .single();

    const {data: dataItem, error: errorItem} = await supabase.from("item_pedido").insert({
        id_pedido: dataPedido?.id_pedido,
        id_cardapio: Number(formData.get("id_cardapio")),
        quantidade: Number(formData.get("quantidade"))
    });

    if (errorPedido || errorItem) throw new Error(errorPedido?.message || errorItem?.message);
    revalidatePath("/");
}

export async function cadastrar(formData: FormData){
    const supabase = await createClient();

    const nome_cliente = formData.get("nome_cliente");
    const endereco_cliente = formData.get("endereco_cliente");
    const telefone_cliente = formData.get("telefone_cliente");
    const senha_cliente = formData.get("senha_cliente");

    const {error} = await supabase
    .from('cliente')
    .insert([   
        {
        nome_cliente: nome_cliente,
        endereco_cliente: endereco_cliente,
        telefone_cliente: telefone_cliente,
        senha_cliente: senha_cliente

        }
    ]);
    if(error){
        console.error("Erro ao cadastrar cliente");
        return;
    }
    revalidatePath("/");
}
