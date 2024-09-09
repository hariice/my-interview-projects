import React from 'react'

const FromStep3 = (properties) => {
    const {formData, setFormData, setStepType} = properties;

    const onInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div>        

    <label>Review:</label>
    <input onChange={onInputChange} name='review' value={formData.review ? formData.review : ""} type='text'/>
    <button onClick={()=>setStepType('step2')}>back</button>
    <button onClick={()=>setStepType('final')}>Next</button>
</div>
  )
}

export default FromStep3