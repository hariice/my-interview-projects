import React from 'react'

const FormStep1 = (properties) => {
    const {formData, setFormData, setStepType} = properties;


    const onInputChange = (e) => {
        setFormData({
            ...formData,
           [e.target.name] : e.target.value
        })
    }

  return (
    <div>
        
            <label>Name:</label>
            <input onChange={onInputChange} name='name' value={formData.name} type='text'/>
            <label>age:</label>
            <input onChange={onInputChange} name='age' value={formData.age} type='number'/>
            <label>email:</label>
            <input onChange={onInputChange} name='email' value={formData.email} type='email'/>
            <label>Number:</label>
            <input onChange={onInputChange} name='number' value={formData.number} type='number'/>
            <button onClick={()=>setStepType('step2')}>Next</button>
    </div>
  )
}

export default FormStep1;