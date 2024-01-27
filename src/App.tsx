import React, {useEffect, useState} from 'react';
import {Deed} from "./components/Deed";
import {newDeedForm} from "./components/newDeedForm"
import {IDeed, IPosts} from "./models";
import axios from 'axios'


const my_url = 'http://127.0.0.1:8000/api/v1/deedlist/'

function App() {
    const[ftchd_deeds, setDeeds] = useState<IPosts>({'posts':[]})
    async function fetchToDoList(){
        const resp = await axios.get<IDeed[]>(my_url)
        let deeds: any;
        deeds = resp.data;
        setDeeds(deeds)
    }
    useEffect(() => {
        fetchToDoList()
    }, [])
  return (
    <div className="App">
      <div className='dos_container flex flex-col justify-center items-center gap-3'>
          <h1 className="inline-flex justify-center font-extrabold mb-8">YOUR TO DO LIST</h1>
              <div>
                  {newDeedForm()}
              </div>
          {/*}*/}
        {ftchd_deeds.posts.map(deed => <Deed deed={deed} key={ deed._id }/>)}
      </div>
    </div>
  );
}

export default App;
