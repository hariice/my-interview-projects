import React, { useEffect, useState } from 'react'

const Gamer = () => {
    const [someClasses , setSomeClasses] = useState([]);
    const [headerClick , setHeaderClick] = useState('');
    const [counter , setCounter] = useState(0);
    const [timeRun , setTimeRun] = useState(false);
    const [listClick, setListClick] = useState([]);

     const onHeaderButtonClick = (type) => {
        if (type === 'reset') {
            setListClick([]);
            setTimeRun(false);
            setCounter(0);
            setSomeClasses([]);
        } else if (type === 'pause') {
            let sumObj = [];
            setCounter(0);
            setTimeRun(false);
             sumObj = {count: listClick.length ? listClick.length + 1 : 1, time: 3 + counter};
            setListClick(pre => [...pre, sumObj]);
        } else {
            
        }

     }

    const onStart = () => {

        console.log("listClick", typeof listClick)
        let sumObj = [];
           setCounter(0);
           setTimeRun(true);
            sumObj = {count: listClick.length ? listClick.length + 1 : 1, time: 3 + Math.random()};
           setListClick(pre => [...pre, sumObj]);
    }

     const onDragClick =() =>{
        const someArray = ["some-class-1", "some-class-2", "some-class-3", "some-class-4"];
        const someRandomIndex = Math.floor(Math.random()*  someArray.length);
        // console.log('someRandomClass', someRandomClass)
        setSomeClasses(someArray[someRandomIndex]);
     }

useEffect(()=> {
    // if (headerClick === 'start') {
        let interval;
        if(timeRun) {
            interval = setInterval(()=>{
                setCounter((prev)=> prev + 1)
            }, 1000)
            setTimeout(()=>{
                setTimeRun(false);
                const someArray = ["some-class-1", "some-class-2", "some-class-3", "some-class-4"];
                const someRandomIndex = Math.floor(Math.random()*  someArray.length);
                // console.log('someRandomClass', someRandomClass)
                setSomeClasses(someArray[someRandomIndex]);
                clearInterval(interval);
            }, 3000);
            // setHeaderClick('');
        }
        return()=> clearTimeout(interval)
    // }
}, [timeRun])

console.log(counter)

  return (
    <>
    <div>Gamer</div>
    <div className='gamer-main-container'>
        <div className='header-btn'>
            <button className='header-start' onClick={onStart} disabled={timeRun}>Start</button>
            <button className='header-pause' onClick={()=>onHeaderButtonClick("pause")}>Pause</button>
            <button className='header-reset' onClick={()=>onHeaderButtonClick("reset")}>Reset</button>
            <button className='header-start'>Timer : {counter} </button>
        </div>
        <div className='gamer-body-container'>
            <div className='body-main-container'>
                <div className='container-1'>
                    <button className={`${someClasses} drag-button`} onClick={()=>onDragClick()} ></button>
                </div>
                <div className='container-2'>


                          <div>
                              <h3>Mouse Click Number</h3>
                              {listClick.map((item) =>

                                  <div>
                                      <h3>{item.count}</h3>
                                  </div>
                              )}
                          </div>
                          <div>
                              <h3>Reaction Time</h3>
                              {listClick.map((item) =>

                                  <div>
                                      <h3>{item.time}</h3>
                                  </div>
                              )}
                    </div>
</div>

            </div>
        </div>

    </div>
    </>
  )
}

export default Gamer