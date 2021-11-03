import React, {useState} from 'react'
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';

const GifExpertApp = ()=> {
    //const categories = ['Soccer', 'Tennis', 'Rugby']
    const [categories, setCategories] = useState(['Soccer']);
    // const handleAdd = () =>{
    //     setCategories([...categories,  'Basquet']);
    //     // setCategories (categories => [...categories, 'basquet'] {})
    // }
    return (<>
    <h2 className='animate__animated animate__headShake animate__infinite	infinite animate__slower 3s'> GifExpert App</h2>
    <AddCategory setCategories = {setCategories} />
    <hr />
    

    <ol className='categories'>
       { categories.map( category => 
       <GifGrid
       key={category}
       category={ category }  />     
       )
    }
    </ol>
    </>  )
    


}

export default GifExpertApp