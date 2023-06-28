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

export const errorStyle = {
    height: 0,
    color: 'red',
    fontSize: 12,
    mb: '5px',
    display: 'flex',
    alignItems: 'center',
};

export const errorIconStyle = { 
    mr: 0.5, 
    ml: 1.5, 
    width: '15px' 
};

export const buttonStyle = {
    width: '315px',
    height: '50px',
    bgcolor: '#000000',
    color: '#fff',
    '&:hover': {
        bgcolor: '#000000',
        opacity: [0.9, 0.8, 0.7],
    },
}

export const boxLoginStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
}

export const formControlStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '300px',
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

export const boxSubmitStyle = {
    '& .MuiTextField-root': { m: 1.8, width: '35ch' },
    height: '350px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignContent: 'space-between',
}