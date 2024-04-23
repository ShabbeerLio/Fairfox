import React from 'react'
import "./Table.css"

const Table = ({ item }) => {
    return (
        <div className="list-table">
            <h5>{item.title}</h5>
            <table>
                <thead>
                    <tr>
                        <th>{item.type}</th>
                        <th>{item.value}</th>
                    </tr>
                </thead>
                <tbody>
                    {item.table.map((detail, index) => (
                        <tr key={index}>
                            <td>{detail.type}</td>
                            <td>{detail.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table
