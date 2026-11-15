import { createClient } from "@/utils/supabase/server";
import { pedir } from "./actions";


//aqui a gente ta começando com o home pra ser a cara do nosso site
export default async function Home(){

  const supabase = await createClient();
  const { data: cliente } = await supabase.from('cliente').select('id, nome_cliente')
  const{ data: cardapio } = await supabase.from('cardapio').select('id, prato, acompanhamento');

//aqui é a parte visual do site
  return(
  <form action={pedir}>
    <input type="date" name="data" />
    <select name="id_cardapio">
      <option value="">
        Selecione um item
      </option>
      {cardapio?.map((ca) => (
        <option key={ca.id} value={ca.id}>
          {ca.prato} - {ca.acompanhamento}
        </option>
      ))}
      
    </select>


    <select name="id_cliente">
      <option value="">Selecione o cliente</option>
      {cliente?.map((c) => (
        <option key={c.id} value={c.id}>
          {c.nome_cliente}
        </option>
    ))}

    </select>

    <input type="number" name="quantidade" placeholder="selecione uma quantidade"></input>

    <button type="submit">Fazer pedido</button>
  </form>
)}
