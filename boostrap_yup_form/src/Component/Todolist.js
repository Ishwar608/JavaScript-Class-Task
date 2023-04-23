import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import TableBoby from './TableBoby';
import TableHead from './TableHead';
import axios from 'axios';


export default function Todolist() {
    const [data, setData] = useState();
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/todos")
            .then(y => setData(y.data))
    })
    return (
        <>
            <h1 className='text-center my-2'>Todo-List</h1>
            <Table striped bordered hover variant="secondary" >
                <TableHead />
                {
                    data?.map((item, index) => {
                        return (
                            <TableBoby item={item} index={index} />
                        )
                    })
                }
            </Table>
        </>
    )
}
