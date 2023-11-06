
import React from 'react'
import DataTable from 'react-data-table-component';
import './Table.css'
import { useState } from 'react';



export default function Table() {
    
    
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'E-mail',
            selector: row => row.email,
        },
        {
            name: 'Number phone',
            selector: row => row.phone,
        },
        {
            name: 'Actions',
            selector: row => row.actions,
        },
    ];
    
    const data = [
        {
            id: 1,
            name: 'mohammed',
            email: 'mohammed@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 2,
            name: 'gaber',
            email: 'gaber@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 3,
            name: 'ziad',
            email: 'ziad@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 4,
            name: 'fakhr',
            email: 'fakhr@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 5,
            name: 'ghassan',
            email: 'ghassan@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 6,
            name: 'mohammed',
            email: 'mohammed@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 7,
            name: 'gaber',
            email: 'gaber@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 8,
            name: 'ziad',
            email: 'ziad@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 9,
            name: 'fakhr',
            email: 'fakhr@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 10,
            name: 'ghassan',
            email: 'ghassan@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 112,
            name: 'mohammed',
            email: 'mohammed@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 12,
            name: 'gaber',
            email: 'gaber@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 13,
            name: 'ziad',
            email: 'ziad@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 14,
            name: 'fakhr',
            email: 'fakhr@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 15,
            name: 'ghassan',
            email: 'ghassan@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 16,
            name: 'mohammed',
            email: 'mohammed@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 17,
            name: 'gaber',
            email: 'gaber@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 18,
            name: 'ziad',
            email: 'ziad@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 19,
            name: 'fakhr',
            email: 'fakhr@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 20,
            name: 'ghassan',
            email: 'ghassan@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 21,
            name: 'mohammed',
            email: 'mohammed@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 22,
            name: 'gaber',
            email: 'gaber@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 23,
            name: 'ziad',
            email: 'ziad@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 24,
            name: 'fakhr',
            email: 'fakhr@gmail.com',
            phone: '01111111111',
            actions: '',
        },
        {
            id: 25,
            name: 'ghassan',
            email: 'ghassan@gmail.com',
            phone: '01111111111',
            actions: '',
        },
    
    ]


    const [result, setResult] = useState(data)
    function handleSearch(e) {
        const newData = data.filter(row =>{
            return row.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setResult(newData);
    }
    return (
        <>
          <div className='text-end'>  <input className="search" type="search" placeholder="Search" onChange={handleSearch} /></div>
            <DataTable
                columns={columns}
                data={result}
                pagination
                paginationRowsPerPageOptions={[10, 20, 30, 50, 100]}
                fixedHeader
                className='tableMain'
                theme='dark'
            />

        </>
    )
}