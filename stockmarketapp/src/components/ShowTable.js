import React from 'react'
import {Table} from 'react-bootstrap'
const ShowTable = () => {
    return (
    <div className="showtable">
        <Table striped bordered hover>
     <thead>
       <tr>
      
      <th>COMPANY NAME</th>
      <th>SYMBOL</th>
      <th>MARKET CAP</th>
      <th>CURRENT PRICE</th>
    </tr>
  </thead>
  <tbody>
    
  </tbody>
</Table>
</div>      
    )
}

export default ShowTable
