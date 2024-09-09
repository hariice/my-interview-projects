import React, { useEffect, useState } from 'react'

const TableComponent = () => {
    const [tableData, setTableData] = useState([]);
    const [duplicateData, setDuplicateData] = useState([]);
    const [loading, setLoading] = useState(true);
const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {setTableData(data); setLoading(false); setDuplicateData(data)})

}

    useEffect(()=>{
        fetchData()
    }, []);
     
    const onSearch = (e) => {
        const text = e.target.value;
        if (text.length > 0) {
            const updateDate = duplicateData.filter((item) => item.name.toLowerCase().includes(text));
            setDuplicateData(updateDate);
        } else {
            setDuplicateData(tableData);

        }
    }

    const tableHeader = tableData.length > 0 ? Object.keys(tableData[0]) : [];
    
  return (
    <div style={{textAlign: 'center', padding: '50px'}}>
        <input type='search' onChange={onSearch} placeholder='search name' />
       {!loading && 
        <table>
            <thead>

            <tr>
                {tableHeader.map(header => 

                <th  style={{border: '1px solid #ddd'}}>{header}</th>
                )}
            </tr>
            </thead>
            <tbody>
                    {duplicateData.map(item => 
                <tr>
                    <td style={{border: '1px solid #ddd'}}>{item.id}</td>
                    <td style={{border: '1px solid #ddd'}}>{item.name}</td>
                    <td style={{border: '1px solid #ddd'}}>{item.username}</td>
                    <td style={{border: '1px solid #ddd'}}>{item.email}</td>
                    <td style={{border: '1px solid #ddd'}}>{item.address.city}</td>
                    <td style={{border: '1px solid #ddd'}}>{item.phone}</td>
                    <td style={{border: '1px solid #ddd'}}>{item.website}</td>
                    <td style={{border: '1px solid #ddd'}}>{item.company.name}</td>
                </tr>
                    )}
            </tbody>
        </table>
        }
    </div>
  )
}

export default TableComponent