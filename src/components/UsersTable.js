import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {Box} from "@mui/material";
import {useSelector} from "react-redux";

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'Email', width: 200,
    },
    {
        field: 'address',
        headerName: 'Address',
        description: 'This is a fake address',
        sortable: false,
        width: 400,
        valueGetter: (params) =>
            `${params.row.address.zipcode || ''}, ${params.row.address.street || ''}, ${params.row.address.suite || ''}, ${params.row.address.city || ''}`,
    },
];

export default function UsersTable() {
    const {users} = useSelector(state => state.data);
    return (
        <Box sx={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </Box>
    );
}
