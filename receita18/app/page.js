"use client"

import { useState } from "react"
import Form from "next/form"

export default function Receita18Home() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    async function handleSearch(formData) {
        const query = formData.get("titleSearchKey")
        if (!query) return

        setLoading(true)
        try {
            // Substitua 'f1cbc41e' pela sua API Key da OMDb se necessário
            const res = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${query}`)
            const data = await res.json()
            setMovies(data.Search || [])
        } catch (error) {
            console.error("Erro ao buscar dados:", error)
            setMovies([])
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Receita 18 - Pesquisa Dinâmica</h1>
            
            {/* Formulário de Pesquisa */}
            <Form action={handleSearch} style={{ marginBottom: '20px' }}>
                <label htmlFor="idTitleSearchKey" style={{ marginRight: '10px' }}>Título:</label>
                <input 
                    id="idTitleSearchKey" 
                    name="titleSearchKey" 
                    placeholder="Digite um filme..." 
                    style={{ padding: '8px', marginRight: '10px' }}
                />
                <button type="submit" disabled={loading} style={{ padding: '8px 16px' }}>
                    {loading ? "Pesquisando..." : "Pesquisar"}
                </button>
            </Form>

            <hr style={{ marginBottom: '20px' }} />

            {/* Listagem de Resultados */}
            <div>
                {movies.length > 0 ? (
                    movies.map((m) => (
                        <div key={m.imdbID} style={{ marginBottom: '15px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                            <h3>{m.Title} ({m.Year})</h3>
                            {m.Poster && m.Poster !== "N/A" && (
                                <img src={m.Poster} alt={m.Title} width="100" style={{ marginTop: '5px' }} />
                            )}
                        </div>
                    ))
                ) : (
                    <p>{loading ? "Carregando filmes..." : "Nenhum filme encontrado."}</p>
                )}
            </div>
        </div>
    )
}