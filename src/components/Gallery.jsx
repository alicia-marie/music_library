import GalleryItem from "./GalleryItem"
import { DataContext } from "../contexts/DataContext";
import { useContext } from "react";

export default function Gallery() {
    const data = useContext(DataContext)

    const galleryItems = data.map((item, index) => {
        return <GalleryItem item={item} key={index} />
    });

    return <div>
        { galleryItems }
    </div>
}