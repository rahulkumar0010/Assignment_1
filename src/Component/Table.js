import React, { useState } from 'react';
import MaterialTable from 'material-table'

const empList = [
  { id: 1, name: "Neeraj", email: 'neeraj@gmail.com', phone: 9876543111, city: "Bangalore" },
  { id: 2, name: "Raj", email: 'raj@gmail.com', phone: 9812345111, city: "Chennai" },
  { id: 3, name: "David", email: 'david342@gmail.com', phone: 7896536111, city: "Jaipur" },
  { id: 4, name: "Vikas", email: 'vikas75@gmail.com', phone: 9087654111, city: "Hyderabad" },
]

function Table() {

  const [data, setData] = useState(empList)
  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone Number", field: 'phone', },
    { title: "City", field: "city", }
  ]


  return (
    <div style={{height:'120vh',width:'90%',marginLeft:'4%'}} >
      <h1 align="center">React-App</h1>
      <h4 align='center'>Icube Solution</h4>
      <MaterialTable
        title="Employee Data"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          })

        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first",
          filtering: true,
          selection: true
        }}
      />
    </div>
  );
}

export default Table;

