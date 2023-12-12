import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import "./style.css"; 
import SideImg from "../assets/th.jpg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="Auth">
      <img src={SideImg} alt="" />
      <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4">Login</Typography>
        <p>Welcome back! Please login to your account.</p>

        <div className="formgroup">
          <TextField
            {...register("email", { required: "Email Field Required" })}
            type="email"
            label="Email"
            color="success"
            variant="outlined"
          />
          <Typography color="error" variant="span">
            {errors?.email && errors.email.message}
          </Typography>

          <TextField
            {...register("psw", { required: "Password Field Required" })}
            type="password"
            label="Password"
            color="success"
            variant="outlined"
          />
          <Typography color="error" variant="span">
            {errors?.psw && errors.psw.message}
          </Typography>

          <FormControlLabel
            control={<Checkbox color="success" />}
            label="Remember Me"
          />

          <Button type="submit" variant="contained">
            Login
          </Button>

          
          <Typography variant="body2">
            Already a user? <Link to="/register">Register</Link>
          </Typography>
          <Typography variant="body2">
            <Link to="/link-wallet">Link Your Wallet</Link>
          </Typography>
        </div>
      </form>
    </div>
  );
};

export default Login;
