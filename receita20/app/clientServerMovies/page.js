"use client"

import { searchMovies } from "../actions/movieActions"
import Form from "next/form"
import { useState } from "react" 

export default function Home(){
    const [data, setData] = useState({})

    async function handleAction(formData){
        const res = await searchMovies(formData)
        setData(res)
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Receita 20 - Server Actions</h1>
            <MovieForm actionHandler={handleAction}/>
            {data.Search && <MovieTable movies={data.Search}/>}
        </div>        
    )
}

export function MovieForm({actionHandler}){
    return (
        <Form action={actionHandler} style={{ marginBottom: '20px' }}>
            <label htmlFor="idTitleSearchKey" style={{ marginRight: '10px' }}>Título</label>            
            <input id="idTitleSearchKey" name="titleSearchKey" placeholder="Ex: Matrix" style={{ padding: '8px', marginRight: '10px' }} />
            <button type="submit" style={{ padding: '8px 16px' }}>Pesquisar</button>
        </Form>
    )
}

export function MovieTable({movies}){
    return (
        <div>
            <h2>Resultados:</h2>
            <div>
                {movies.map((m) => (
                    <div key={m.imdbID} style={{ marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
                        <strong>{m.Title}</strong> --- {m.Year}
                    </div>
                ))}
            </div>
        </div>
    )
}