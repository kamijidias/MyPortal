import Box from '@mui/material/Box';
import { DataGrid, GridRowsProp } from '@mui/x-data-grid';
import { GridColDef } from "@mui/x-data-grid";

type DataTableProps = {
    columns: GridColDef[];
    rows: GridRowsProp;
}

const DataTable: React.FC<DataTableProps> = ({ columns, rows }) => {
    return (
      <Box sx={{ width: '50vw', margin: 'auto', display: 'flex', alignContent: 'center' }}>
        <DataGrid
          rows={rows}
          autoPageSize
          autoHeight
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Box>
    );
  }
export default DataTable;