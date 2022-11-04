import React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ForgottPassword() {
  return (
    <>
      <div className="container">
      <form className="form">
        <div className="form-content">
          <h3 className="title">Forgott Password</h3>
          <div className="mt-3">
            <TextField
              id="outlined-basic"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
            />
          </div>
          <div className="mt-3">
            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              fullWidth
              variant="standard"
            />
          </div>
          <div className="mt-3">
            <TextField
              id="outlined-basic"
              type="password"
              label="Confirm Password"
              fullWidth
              variant="standard"
            />
          </div>
          <div className="mt-5">
            <Button variant="contained" fullWidth>
              Save Password
            </Button>
          </div>
        </div>
      </form>
    </div>
    </>
  )
}
