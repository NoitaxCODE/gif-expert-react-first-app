
export const getGifs = async (category)=>{
  
  const url = `https://api.giphy.com/v1/gifs/search?api_key=k3kaNH1HJMh50FyrFWVV1dW4WgG1FntN&q=${ category }&limit=5`
  const resp = await fetch( url );
  const { data } = await resp.json();


  //En la siguiente linea retorno un objeto por cada elemento de data. Lo cual me crea un nuevo arreglo con los elementos que necesito
  const gifs = data.map( gif => (
      {
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
      }
    )
  ) 

  // console.log(gifs);
  return gifs;

}