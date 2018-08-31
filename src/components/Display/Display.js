import React from 'react';

const Display = (props) => {
    const styles = {
        background: "#eee",
        padding: "20px",
        border: "3px solid #ada0a0",
        margin: "0 25%",
        listStyle: "none",
        textAlign: 'center'
    };

    const span = {
        // margin: '30px',
        float: 'right',
        width: '1.5rem',
        lineHeight: '1.5rem',
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '0.25rem',
        backgroundColor: 'lightgray'
    }
    const list = props.data;
    return <ul>
        {list.map((e, i) =>
            <li style={styles} key={i}>
                <span onClick={props.remove} style={span}>&times;</span>{e}
            </li>
        )}
    </ul>

};

export default Display;
