import React from 'react';

const b = new Date();
const date =b.getDate()+"-"+ b.getMonth()+"-" +b.getFullYear();

function Card(props){
    const {titleText, descText} = props;
  return <div className='card'>
            <h3 className='cardTitle'>{titleText}</h3>
            <p className='cardDescription'>{descText}</p>
            <p className='cardFooter'>{date}</p>
          </div>
}

export default Card;
