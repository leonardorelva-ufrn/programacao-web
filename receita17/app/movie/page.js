export default async function MoviesPage({ searchParams }) {
    const { titleSearchKey = 'bagdad' } = await searchParams;

    const res = await fetch(`http://www.omdbapi.com/?apikey=SUA_API_KEY&s=${titleSearchKey}`);
    const data = await res.json();

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Resultados para: "{titleSearchKey}"</h1>
            <div>
                {data.Search && data.Search.map((m) => (
                    <div key={m.imdbID} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                        <h3>{m.Title} --- {m.Year}</h3>
                        <img src={m.Poster} alt={m.Title} width="150" />
                    </div>
                ))}
            </div>
        </div>
    );
}