import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { clearMessage } from "../slices/messageSlice.js";
import { login } from "../slices/authSlice.js";

const Login = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  //
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { email, password } = formValue;

    setLoading(true);

    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        navigate("/dashboard");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn && user.role === 1) {
    return <Navigate to="/dashboard" />;
  } else if (isLoggedIn && user.role === 0) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <div className="h-screen flex items-center justify-center">
            <div className="w-4/12 bg-gray-100 p-8 shadow-xl rounded-md">
              <h1 className="text-4xl  font-semibold text-center">
                Pharmacy Management System
              </h1>
              <h3 className="text-2xl mb-10 mt-4 font-semibold text-center">
                Login
              </h3>
              <Form>
                <div>
                  <Field
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="input input-bordered w-full bg-transparent"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-error"
                  />
                </div>

                <div>
                  <Field
                    name="password"
                    type="text"
                    placeholder="Password"
                    className="input input-bordered w-full bg-transparent mt-2"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-error"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-neutral mt-2 w-full mt-4"
                  >
                    {loading && (
                      <span className="loading loading-spinner loading-md"></span>
                    )}
                    <span> Login</span>
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </Formik>
      </div>
      {message && (
        <div className="form-group">
          <div className="alert alert-error">{message}</div>
        </div>
      )}
    </div>
  );
};

export default Login;
