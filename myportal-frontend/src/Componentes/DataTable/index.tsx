import Box from '@mui/material/Box';
import { DataGrid, GridRowParams } from '@mui/x-data-grid';
import { GridColDef } from "@mui/x-data-grid";
import { useNavigate } from 'react-router';
import { DataTableProps } from './types';

const DataTable: React.FC<DataTableProps> = ({ columns, rows }) => {
    const navigate = useNavigate();

    const responsiveColumns: GridColDef[] = columns.map((column) => {
        return {
            ...column,
            flex: 1,
        }
    })

    const handleRowClick = (params: GridRowParams) => {
        const id = params.id
        navigate(`/profile/${id}`)
    }

    return (
      <Box sx={{ width: '50vw', margin: 'auto', display: 'flex', alignContent: 'center' }}>
        <DataGrid
          rows={rows}
          autoPageSize
          autoHeight
          columns={responsiveColumns}
          onRowClick={handleRowClick}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
        />
      </Box>
    );
  }
export default DataTable;