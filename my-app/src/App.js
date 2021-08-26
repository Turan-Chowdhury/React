import React , { useState } from 'react';
import Communication from './components/Communication';
import TaskList from './components/TaskList';


function App(){
        const name = 'Turan Chowdhury'

        const [address, setAddress] = useState({
                village: 'azimpur',
                city: 'ctg',
                country: 'bangladesh'
        })

        const [programminglanguages, setProgrammingLanguages] = useState([
                'java',
                'php',
                'c#'
        ]) 

        const changeCityFromParent = () => {
                setAddress({
                        village: 'azimpur',
                        city: address.city === 'ctg' ? 'another city' : 'ctg',
                        country: 'bangladesh'  
                })
        }

        const changeCityFromParentDynamic = (value) => {
                setAddress({
                        village: 'azimpur',
                        city: address.city === 'ctg' ? value : 'ctg',
                        country: 'bangladesh'  
                })
        }

        return <div>
                <h1>Component Communication</h1><hr/><br/>
                <Communication 
                        name={name} 
                        address={address} 
                        pl={programminglanguages} 
                        changeCityFromParent={changeCityFromParent} 
                        changeCityFromParentDynamic={changeCityFromParentDynamic}
                        setProgrammingLanguages={setProgrammingLanguages}
                />
                <br/>
                <TaskList/>
            </div>
}

export default App;