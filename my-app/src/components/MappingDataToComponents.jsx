import React from 'react';
import Card from './Card';
import Data from './data.json'

export default function MappingDataToComponents() {
    return (
        <div>
            {Data.map((item) => <Card titleText={item.title} descText={item.Desc} />)}
        </div>
    )
}