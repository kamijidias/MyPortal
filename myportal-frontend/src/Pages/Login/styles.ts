export const formStyle = {
    maxWidth: '360px',
    height: '500px',
    f: 20,
    p: '40px',
    mt: '40px',
    border: '1px solid #ced4da',
    borderRadius: '5px',
    boxShadow: '6',
    flexDirection: 'column',
};

export const boxSubmitStyle = {
    '& .MuiTextField-root': { m: 1.8, width: '35ch' },
    height: '250px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignContent: 'space-between',
}

export const error = {
    height: 0,
    color: 'red',
    fontSize: 12,
    mb: '5px',
    display: 'flex',
    alignItems: 'center',
};

export const loadingButtonStyle = {
    width: '315px',
    height: '50px',
    bgcolor: '#000000',
    color: '#fff',
    '&:hover': {
      bgcolor: '#000000',
      color: '#fff',
      opacity: [0.9, 0.8, 0.7],
    },
}

export const linkStyle = { 
    display: 'block', 
    textDecoration: 'none', 
    color: '#000000',
    marginTop: '1rem',
    '&:hover': {
    color: '#333333',
    },
};