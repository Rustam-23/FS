import React from "react";
import Item from "./Item";
import * as PropTypes from "prop-types";

function ItemList(props) {
    return (
        <ul>
            {props.items.map((item, index) => {
                return <Item item={item} key={item.id} index={index} onChange={props.onToggle} />
            })}
        </ul>
    )
}

ItemList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default ItemList