import { useState } from "react";
import { auth } from "../api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

type TInputForm = {
  email: string;
  password: string;
};

const Login = () => {
  const [notice, setNotice] = useState<string>("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputForm>();

  const onSubmit: SubmitHandler<TInputForm> = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("./profile");
    } catch {
      setNotice("wrong credentials");
    }
  };

  return (
    <div className="container">
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: 300,
            }}
          >
            <TextField
              type="text"
              label="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <span>{errors.email.message}</span>}
            <TextField
              type="password"
              label="Password"
              {...register("password", { required: "Password is required" })}
            />
          </Box>
          {errors.password && <span>{errors.password.message}</span>}
          <p>{notice}</p>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
        <div>
          don't have an account yet ? <Link to="/signup">signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
