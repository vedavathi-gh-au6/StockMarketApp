import React from 'react'
import {Table,Button}from 'react-bootstrap'
const ViewTables = () => {
    return (
      <div className="container">
      <div className='Searchbar'>
        
         <h3 className="header"><center>View Tables</center></h3>
         
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>

</div >
<div className="container"><Button >Back</Button></div>

</div>
    )
}

export default ViewTables;
