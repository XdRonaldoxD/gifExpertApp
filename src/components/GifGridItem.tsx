import { GifItem } from "../interfaces/GifGird"
import styles from "./GifGridItem.module.css";
export const GifGridItem = (img: GifItem) => {
    return (
        <div className={`${styles['card']}`}>
            <img src={img.url} alt={img.title} />
            <p>{img.title}</p>
        </div>

    )
}
