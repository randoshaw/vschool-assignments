import React from 'react';
import Item from './Item';

const List = (props) => {

    const mappedList = props.info.map(item => <Item key = {item._id} {...item}  deleteItem={() => props.deleteItem (item._id) } />)

    return (
        <div>
            {mappedList}
        </div>
    )
}

export default List;