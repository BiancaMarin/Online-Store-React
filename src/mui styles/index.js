import { styled } from '@mui/material/styles';
import { Card, FormControl, InputBase } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#F0EFEF',
  '&:hover': {
    backgroundColor: '#E5FDFD',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  marginBottom: 12,
  [theme.breakpoints.up('sm')]: {
    marginLeft: 0,
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#3C4048',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const StyledFormControl = styled(FormControl)(() => ({
  width: 180,
  paddingBottom: 5,
  marginBottom: 8,
}));

export const StyledCardQuestion = styled(Card)(() => ({
  width: 500,
  backgroundColor: '#F2F2F2',
  padding: 15,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 5,
}));
