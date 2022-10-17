import './datatable.scss';

import { Link } from 'react-router-dom';

import { DataGrid } from '@mui/x-data-grid';

import { userColumns, userRows } from '../../dataFiles/datatable';


const Datatable = () => {

  const actionColumn = [ 
    {
      field: 'action', 
      headerName: 'Action', 
      width: 200, 
      renderCell: () => {
        return <div className='cell-action'>
          <Link to='/users/test' style={{textDecoration: 'none'}}>
            <div className="view-button">View</div>
          </Link>
          <div className="delete-button">Delete</div>
        </div>
      }
    } 
  ];

  return <div className="datatable">
    <div className="datatable-title">
      Add New User
      <Link to='/users/new' style={{textDecoration: 'none'}} className='link'>
        Add New
      </Link>
    </div>
    <DataGrid
      className='datagrid'
      rows={userRows}
      columns={userColumns.concat(actionColumn)}
      pageSize={9}
      rowsPerPageOptions={[9]}
      checkboxSelection
      />
  </div>
};

export default Datatable;