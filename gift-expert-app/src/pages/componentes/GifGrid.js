import React from 'react'
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


   const {data:images, loading} = useFetchGifs( category );
 
//  useEffect ( () => {
//         getGifs( category )
//         .then (imgs => setImages( imgs ))
    
       
//     }, [ category ])

   

    //getGifs()

    return (
        <>
            <h3 className='animate__animated animate__bounce animate__repeat-3	3'>{category}</h3>

            {loading && <p>Loading...</p>}
        <div className="card-grid">
          <ul>
              {
                  images.map( img =>(
                      <GifGridItem 
                      key={img.id}
                       { ...img }/>
                  ))
              }
          </ul>
            
        </div>
        </>
    )
}
