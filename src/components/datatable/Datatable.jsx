import './datatable.scss';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { collection, getDocs } from "firebase/firestore";

import { db } from '../../firebase';
import { userColumns } from '../../dataFiles/datatable';


const Datatable = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const list = [];
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
          list.push({id: doc.id, ...doc.data()});
          console.log('list is', list);
          setData(list);
        });
      } catch (error) {
        console.log('There was a fetching error:', error)
      }
    };
    fetchData();
  }, [])

  const handleDelete = (id) => {
    const newRows = data.filter(item => item.id !== id)
    setData(newRows);
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cell-action">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="view-button">View</div>
            </Link>
            <div
              className="delete-button"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatable-title">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;