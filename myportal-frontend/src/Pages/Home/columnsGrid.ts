import { GridColDef } from "@mui/x-data-grid";

type Row = {
    id: number;
    firstName: string;
    secondName: string;
    email: string;
    cellphone: string;
    zipCode: string;
}

type Column = GridColDef & { field: keyof Row }

const columns: Column[] = [
    { field: 'id', headerName: 'ID', width: 90 },
      {
        field: 'firstName',
        headerName: 'Primeiro nome',
        width: 150,
        editable: true,
      },
      {
        field: 'secondName',
        headerName: 'Segundo nome',
        width: 150,
        editable: true,
      },
      {
        field: 'email',
        headerName: 'Email',
        width: 250,
      },
      {
        field: 'cellphone',
        headerName: 'Telefone',
        width: 110,
      },
      {
        field: 'zipCode',
        headerName: 'CEP',
        width: 110,
      },
    ];
    
    const rows = [
      { id: 1, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 2, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 3, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 4, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 5, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 6, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 7, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 8, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 9, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 10, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 11, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 12, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 13, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 14, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 15, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 16, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 17, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 18, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 19, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 20, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 21, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 22, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 23, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 24, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
      { id: 25, firstName: 'Andrew', secondName: 'Kamiji', email: 'kamiji@dev.com', cellphone: '47997797018', zipCode: '88385000' },
    ];

export {columns, rows};