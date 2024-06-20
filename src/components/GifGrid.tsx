import  { GifItem } from "../interfaces/GifGird";
import { GifGridItem } from "./GifGridItem";
import styles from "./GifGrid.module.css";
import { useFetchGif } from "../hooks/useFetchGif";


export const GifGrid = ({ categoria }) => {
  const {data:images,loading}=useFetchGif(categoria);
  return (
    <>
      <h3 className="animate__animated animate__bounceIn">{categoria}</h3>
      {/* LA CONDICION SI ES TRUE SE AGREGAR LA CONDICION Y NO LA OTRA FOTO HASTA QUE CAMBIEN */}
      {loading && <p className="animate__animated animate__flash">Loading</p> } 
      <div className={styles['card-grid']}>
        {images.map((item: GifItem) =>
          <GifGridItem
            key={item.id}
            {...item} //Esto es una manera de enviarlo destructurado y lo pueda aceptar el tipado
          />
        )
        }
      </div>
    </>
  )
}
