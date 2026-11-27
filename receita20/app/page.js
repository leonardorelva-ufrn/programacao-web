"use client"

import Form from "next/form"
import { useState } from "react"

export default function Home() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    async function handleAction(formData) {
        const titleSearchKey = formData.get("titleSearchKey")
        if (!titleSearchKey) return

        setLoading(true)
        try {
            // Agora chama a SUA própria API criada no arquivo route.js
            const res = await fetch(`/api/searchMovies?titleSearchKey=${titleSearchKey}`)
            const data = await res.json()
            setMovies(data.Search || [])
        } catch (error) {
            console.error("Erro ao buscar filmes:", error)
            setMovies([])
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Receita 20 - Pesquisa via API Própria</h1>
            
            <Form action={handleAction} style={{ marginBottom: '20px' }}>
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

            <div>
                {movies.length > 0 ? (
                    movies.map((m) => (
                        <div key={m.imdbID} style={{ marginBottom: '15px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
                            <h3>{m.Title} --- {m.Year}</h3>
                            {m.Poster && m.Poster !== "N/A" && (
                                <img src={m.Poster} alt={m.Title} width="100" style={{ marginTop: '5px' }} />
                            )}
                        </div>
                    ))
                ) : (
                    <p>{loading ? "Carregando..." : "Nenhum filme para exibir."}</p>
                )}
            </div>
        </div>
    )
}