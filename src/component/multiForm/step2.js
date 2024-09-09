import React from 'react'

const FormStep2 = (properties) => {

    const {formData, setFormData, setStepType} = properties;

    const onInputChange = (e)=> {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div>        
    <label>address:</label>
    <input onChange={onInputChange} name='address' value={formData.address ? formData.address : ''} type='text'/>
    <label>city:</label>
    <input onChange={onInputChange} name='city' value={formData.city ? formData.city : ''} type='text'/>
    <label>state:</label>
    <input onChange={onInputChange} name='state' value={formData.state ? formData.state : ''} type='text'/>
    <label>pincode:</label>
    <input onChange={onInputChange} name='pincode' value={formData.pincode ? formData.pincode : ''} type='number' maxLength={6}/>
    <button onClick={()=>setStepType('step1')}>back</button>
    <button onClick={()=>setStepType('step3')}>Next</button>

</div>
  )
}

export default FormStep2