export default async function Home({ searchParams }) {
    // Extrai o parâmetro titleSearchKey da URL, usando 'bagdad' como valor padrão
    const { titleSearchKey = 'bagdad' } = await searchParams;

    // Faz a requisição à API externa usando a sua API Key e o termo de busca
    const res = await fetch(`http://www.omdbapi.com/?apikey=ME_SUBSTITUA&s=${titleSearchKey}`);
    const data = await res.json();

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Resultados da Busca de Filmes</h1>
            <div>
                {data.Search && data.Search.map((m) => (
                    <div key={m.imdbID} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                        <h3>{m.Title} --- {m.Year}</h3>
                        {/* Exercício 2: Exibindo o pôster do filme */}
                        <img src={m.Poster} alt={`Poster de ${m.Title}`} width="150" />
                    </div>
                ))}
            </div>
        </div>
    );
}