import React, { useState } from 'react';
import { segmentOptions } from './helper/constant-helper'

const Segment = () => {
    const [selectedField, setSelectedField] = useState([]);
    const [segmentName, setSegmentName] = useState('');
    const [availableSchemas, setAvailableSchemas] = useState(segmentOptions);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };


    const addNewSelect = () => {
        if (selectedField.length < 7)
            setSelectedField([...selectedField, { value: '', label: '' }]);
    };


    const onSaveSegment = () => {
        const payload = {
            segment_name: segmentName,
            schema: selectedField.map((item) => { return { [item.value]: item.label } })
        };

        fetch('https://webhook.site/9d568fe3-928e-4dd8-aa96-fe9c3b14a483', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch((error) => console.error('Error---------->:', error));
        setIsModalOpen(false);
    };

    const onChangeSelect = (e, index) => {
        const value = e.target.value;
        const selectedOption = segmentOptions.find((option) => option.value === value);
        const updatedSchemas = [...selectedField];
        updatedSchemas[index] = selectedOption;
        setSelectedField(updatedSchemas);
        const selectedValues = updatedSchemas.map((schema) => schema.value);
        setAvailableSchemas(segmentOptions.filter((option) => !selectedValues.includes(option.value)));
    };

    return (
        <div className="segment">
            <div className='left-btn'>
                <button className='segment-btn' onClick={openModal}>Save Segment</button>
            </div>
            {isModalOpen && (
                <div className="modal">
                    <div className='modal-header'>
                        <h2>← Saving segment</h2>
                    </div>
                    <div className="modal-content">
                        <h5>Enter the name of the Segment</h5>
                        <input
                            type="text"
                            placeholder="Segment Name"
                            value={segmentName}
                            onChange={(e) => setSegmentName(e.target.value)}
                        />
                        <p>To save the segment, you  need to add the schemaa to build the query</p>
                        <div className="main-select-container">
                            {selectedField.map((schema, index) => (
                                <div key={index}>
                                    <select
                                        value={schema.value}
                                        onChange={(e) => onChangeSelect(e, index)}
                                    >
                                        <option value="" disabled>
                                            Select schema
                                        </option>
                                        {segmentOptions.map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                                disabled={selectedField.some((s) => s.value === option.value)}
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            ))}
                        </div>
                        <a href="#" onClick={() => addNewSelect()}>
                            + Add new schema
                        </a>
                        <button className='segment-btn' onClick={onSaveSegment}>Save the Segment</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Segment;
