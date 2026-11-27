import Form from "next/form";
<Form action="/movies"></Form>

export default async function MovieForm(){
    return (
        <Form action="/movies" style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Busca de Filmes</h1>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="idTitleSearchKey">Título: </label>
                <input id="idTitleSearchKey" name="titleSearchKey" placeholder="Ex: Matrix" />
            </div>
            <button type="submit">Pesquisar</button>
        </Form>
    );
}