import { useState } from 'react'
import frameworkList from './frameworkList';
import ListView from './ListView';

//Componentes de presentación y componentes contenedores

function List(){
    let [items, setItems] = useState(frameworkList)

    function filterItems(searchPattern) {
        if(seacrhPattern === "" ) {
            setItems(frameworkList);
        }else {
            let newItems =filterItemsBySearchPattern(searchPattern);
            setItems(newItems);
        }
    }

    function filterItemsBySearchPattern(searchPattern) {
        let filterItems = frameworkList.map(item => 
        item.toLowerCase().includes(searchPattern.toLowerCase()) 
        ? item : null)
        return filterItems;
    }

    return (
        <ListView elements={items} funcFilterItems={filterItems}  />
    )
}

export default List