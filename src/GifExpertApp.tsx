import { useState } from "react";
import { AddCategoria } from "./components/AddCategoria";
import { GifGrid } from "./components/GifGrid";

export default function GifExpertApp() {
    const [categorias, setCategorias] = useState(["One punch man"])
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategoria setCategorias={setCategorias} />
            <ol>
                {
                    categorias.map((item, i) =>
                        <GifGrid key={i} categoria={item}/>
                    )
                }
            </ol>
        </>

    )
}