import Link from 'next/link'

export default function Home(){
    return (
        <div>
            <div>
                <h1>
                    Viva Santana!
                </h1>
                <Link href="/novarota">Rota1 (com Link do Next)</Link> <br/><br/>
                <a href="/novarota">Rota 1, jeito antigo (com tag a)</a>
            </div>
        </div>
    )
}