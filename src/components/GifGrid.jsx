import { GifItem } from "../components";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category)

  return (
    <>
      <h3>{category}</h3>

    {/* En la siguiente linea lo que decimos es que si isLoading es verdadero, que renderice el h2 */}
      { isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">                              
        {
          images.map((img) => (
            <GifItem 
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
  )
}
