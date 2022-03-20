import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'

function ShowallProds() {
    const [ref, setref] = useState(false)
    const [allprods, setallprods] = useState([])
    const getAllProds = () => {
        axios.get('http://localhost:8008/seller/all-prod').then((result) => {
            console.log(result);
            setallprods(result.data.prods)
        })
    }
    const deleteProd =(id)=>{
        let it= window.confirm('Are You Sure Delete ?')
        it && axios.get(`http://localhost:8008/seller/remove-prod/${id}`).then((res)=>{
            console.log(res);
            setref(true)
            setref(false)
        }) 
        
        
    }
    
    useEffect(() => {
        getAllProds()
    }, [ref])
    return (
        <div className='main-i' >
            
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>mail id</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {allprods.map((i,index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{i.Name}</td>
                            <td>{i.Category}</td>

                            <td><button onClick={()=>deleteProd(i._id)}  className='btn btn-danger' >Delete</button></td>
                        </tr>

                    ))}



                </tbody>
            </Table>
            

        </div>
    )
}

export default ShowallProds
