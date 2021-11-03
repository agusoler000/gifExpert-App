import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setImputValue] = useState('')
    
    const handleInputChange = (e)=>{
       
        setImputValue(e.target.value)
    }



    const handleSubmit = (e)=>{
        e.preventDefault()
        if(inputValue.trim().length > 2){
            
           setCategories(categories => [ inputValue, ...categories,])
           setImputValue('')

        }
    }
    return (
        <form onSubmit={handleSubmit}>
        
          <input
          type="text"
          value={inputValue} 
          onChange={handleInputChange}
          />
        
        </form>
    )


   
}

AddCategory.propTypes = {   //PRESTA ATENCION A LO QUE ESCRIBIS
    setCategories: PropTypes.func.isRequired
}

