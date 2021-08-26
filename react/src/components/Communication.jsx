import React from 'react'

export default function Communication(props) {

    const changeLanguage = (index) => {
        const newLangs = props.pl.filter((item, idx) => index !== idx)
        props.setProgrammingLanguages(newLangs)
    }

    return (
        <div>
            <h3>Hello! {props.name}</h3><br/>
           
            <address>
                {props.address.village} <br/>
                {props.address.city} <br/>
                {props.address.country} <br/>
            </address><br/>
            <button onClick={props.changeCityFromParent}>change City</button>
            <button onClick={() => props.changeCityFromParentDynamic('dhaka')}>change City Dynamic</button>
            <br/>
            <div>
                <h2>Programming Languages</h2>
                <ul>
                    {
                        props.pl.map((item, index) => (
                            <li key={index} onClick={() => changeLanguage(index)}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <button onClick={() => props.setProgrammingLanguages(['c', 'c++', 'php', 'java', 'react'])}>Change language</button>
        </div>
    )
}
