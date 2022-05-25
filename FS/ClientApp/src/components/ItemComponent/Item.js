import React from "react";
import * as PropTypes from "prop-types";

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '3rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function Item({item, index, onChange}) {
    console.log('item', item.title)
    return (
        <li style={styles.li}>
            <span> <input type="checkbox" style={styles.input} onChange={() => onChange(item.id)}/> </span>
            <strong>{index + 1}</strong>&nbsp;
            {item.title}
            
            <button className="rm">&times;</button>
        </li>
    )
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default Item