import { useState } from "react";
import { auth } from "../api/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

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
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <input
            type="text"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <p>{notice}</p>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
