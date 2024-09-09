import React, { useState } from 'react'
import FormStep1 from './step1';
import FormStep2 from './step2';
import FromStep3 from './step3';

const MultipleForm = () => {
  const [stepType, setStepType ] = useState('step1');
  const [formData, setFormData] = useState([]);
  // const onFormSubmit = (e) => {
  //   e.preventDefault();
  //   // const formData = new FormData(e.target);
  //   // const data = {
  //   //     name: formData.get('name'),
  //   //     age: formData.get('age')
  //   // };

  //   // Log the form data to the console
  //   console.log('Form Submitted:', formData);

  // };
  return (
    <div>
      <div>
        {/* <form onSubmit={onFormStep}> */}
          {stepType === 'step1' &&
            <FormStep1
              setFormData={setFormData}
              formData={formData}
              setStepType={setStepType}
            />
          }
          {stepType === 'step2' &&
            <FormStep2    
              setFormData={setFormData}
              formData={formData}
              setStepType={setStepType} 
              />
          }
          {stepType === 'step3' &&
            <FromStep3    
              setFormData={setFormData}
              formData={formData}
              setStepType={setStepType}
            />
          }
          {stepType === 'final' && 
          <p>
            {formData.name},
            {formData.age},
            {formData.email},
            {formData.number},
            {formData.address},
            {formData.city},
            {formData.state},
            {formData.pincode},
            {formData.review},
          </p>
          }
        {/* </form> */}
      </div>
    </div>
  )
}

export default MultipleForm