import React, { useContext } from 'react'
import { Box } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from "../../types/types";
export const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    console.log('Accionado');
    const action = {
      type: types.login,
      payload: {
        name: "Armando123"
      }
    };
    dispatch(action);
    localStorage.setItem('user', JSON.stringify(action.payload));
    if (JSON.parse(localStorage.getItem('lastPath')) === null || JSON.parse(localStorage.getItem('lastPath')) === undefined) {
      navigate("/marvel", {
        replace: true
      });
    } else {
      navigate(JSON.parse(localStorage.getItem('lastPath')), {
        replace: true
      });
    }
  }
  return (
    <>
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <div id="loginform">
            <h2 id="headerTitle">Login</h2>
            <div>
              <div className="row">
                <label>Username</label>
                <input type="text" placeholder="Enter your username" />
              </div>
              <div className="row">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <div id="button" className="row" onClick={handleLogin}>
                <button>Log in</button>
              </div>
            </div>
            <div id="alternativeLogin">
              <label>Or sign in with:</label>
              <div id="iconGroup">
                <FacebookIcon id="facebookIcon" sx={{ color: 'blue' }}   ></FacebookIcon>
                <TwitterIcon id="twitterIcon" sx={{ color: '#00acee' }}></TwitterIcon>
                <GoogleIcon id="googleIcon" sx={{ color: 'red' }}     ></GoogleIcon>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  )
}
