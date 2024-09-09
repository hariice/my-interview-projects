import React, { useEffect, useState } from 'react'

const TodoList = () => {
    const arrayList = ["hari", 'aishan', 'bodhi', 'abina', 'balaji'];
    const [list, setList] = useState([]);
    const [addText, setAddText] = useState('');
    const [selectedList, setSelectedList] = useState([]);
    const [loading, setLoading] = useState(true);

    const onDelete = (index) => {
        const updateList = list.filter((value, i) => i !== index);
        setList(updateList)
    }

    const onAdd =()=>{
        list.push(addText);
        setAddText('');
    }

    const onChangeText = (e) => {
        const text = e.target.value;
        setAddText(text);
    }
    const onChangeCheckBox = (e) => {
        setSelectedList((pre) => {
            if (e.target.checked) {
                return [...pre, e.target.value]
            } else {
                return pre.filter(value => value !== e.target.value)
            }
        }
        );

    }

    const onSelectDelete = () => {
        const filter1 = list.filter(item => !selectedList.includes(item.title))
        console.log("filter1", filter1);
        setList(filter1);
        setSelectedList([])
    }

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then((resp) => resp.json()).then((data) => {setList(data);
        setLoading(false);
        })
    }, [])

    return (
        <div className='todo-main'>
            {loading ? (<p>loading...!</p>) :(
                <>
                <input type='text' onChange={onChangeText} value={addText} /> <button onClick={onAdd}>Add</button> <button onClick={onSelectDelete}>Delete selected</button>
            {list.map((item, index) =>
                <div className='todo-child'>
                <input onChange={onChangeCheckBox} type="checkbox" id={index} name={item} value={item.title} /> <p>{item.title}</p> <button onClick={() => onDelete(index)} className='button-dlt'>Delete</button>
                </div>
                
            )}
            </>
        ) }
        </div>
    )
}

export default TodoList