import React from 'react'

export default function TableBoby({item,index}) {
    return (
        <tbody key={index}>
            <tr>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed.toString()}</td>
            </tr>
            
        </tbody>
    )
}
