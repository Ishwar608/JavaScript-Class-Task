import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
export default function NavBar({ lgout, setLgout, regi, setRegi }) {
    const myNav = useNavigate()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Link to='/'
                        style={{
                            textDecoration: 'none',
                        }}
                    >
                        <Button variant="text" sx={{ color: '#fff' }}>Login</Button>
                    </Link>
                    {
                        regi ? <Link to='/regi'
                            style={{
                                textDecoration: 'none',
                            }}
                        ><Button variant="text" sx={{ color: '#fff' }}>Registration</Button>
                        </Link>:''
                    }
                   
                    <Link to='/todolist'
                        style={{
                            textDecoration: 'none',
                        }}
                    ><Button variant="text" sx={{ color: '#fff' }}>TodoList</Button>
                    </Link>
                    {
                        lgout ?
                            <Link to='/'
                                style={{
                                    textDecoration: 'none',
                                }}
                            ><Button variant="text" sx={{ color: '#fff' }} onClick={() => { 
                                    localStorage.removeItem('TOKEN');
                                    setLgout(false);
                                    setRegi(true);
                                    myNav('/')
                            }}>LogOut</Button>
                            </Link>
                            : ''
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}