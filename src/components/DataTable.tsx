import Button from "./Button"
import Modal from "./Modal"
import { useState } from "react";
import { server_calls } from '../api/server';
import { DataGrid, GridColDef, gridPaginationModelSelector } from '@mui/x-data-grid';
import { useGetData } from "../custom-hooks/FetchData";

const columns: GridColDef[] = [
  { field: 'id', headerName: "ID", width: 90, hideable: true },
  { field: 'title', headerName: 'Title', flex: 1},
  { field: 'author', headerName: 'Author', flex: 1},
  { field: 'isbn', headerName: 'ISBN', flex: 1},
  { field: 'genre', headerName: 'Genre', flex: 2},
]

function DataTable() {
  let [ open, setOpen ] = useState(false);
  const { contactData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

const deleteData = () => {
  server_calls.delete(selectionModel[0]);
  getData();
  console.log(`Selection model: ${selectionModel}`)
  setTimeout( () => {window.location.reload() }, 500)
  
}

  return (
    <>
        <Modal 
          id={selectionModel}
            open={open}
            onClose={handleClose}

        />
        <div className="flex flex-row">
            <div>
                <button
                    className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >
                    Add New Book
                </button>
            </div>
            <Button onClick={handleOpen} className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white" >Update</Button>
            <Button onClick={deleteData} className="p-3 m-3 bg-slate-300 rounded hover:bg-slate-800 hover:text-white" >Delete</Button>
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
          style={{ height:450, width: '100%' }}
          >
            <h2 className="p-3 bg-slate-300 my-2 rounded">Library Catalog</h2>
            <DataGrid rows={contactData} columns={columns} 
            // how to make page size a defined number
            autoPageSize
            checkboxSelection={true}
            onRowSelectionModelChange = { (item: any) => {
              setSelectionModel(item)
            }}
            />
        </div>
    </>
  )
}

export default DataTable
