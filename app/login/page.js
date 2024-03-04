"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const router = useRouter();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email()
      .required("User Email required"),
    password: Yup.string()
      .min(4, "Password Too Short!")
      .max(10, "Password Too Long!")
      .required("User Password required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const SubmitHandle = async (values,{resetForm}) => {
    const userData = {
      email: ("email", values.email),
      password: ("password", values.password),
    };
    console.log(userData);
    try {
      const response = await axios.post(
        "http://localhost:3200/api/auth/login",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      if (response.data && response.data.status === true) {
        toast.success("User has been logged in");
        resetForm();
        router.push("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };


  return (
    <>
      <div className="flex min-h-screen items-center justify-center ">
        <Formik
          validationSchema={LoginSchema}
          initialValues={initialValues}
          onSubmit={SubmitHandle}
        >
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder=""
              />
            </div>
            <ErrorMessage
              name="email"
              component={"p"}
              className="text-red-500"
            />
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                placeholder=""
              />
            </div>
            <ErrorMessage
              name="password"
              component={"p"}
              className="text-red-500"
            />
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
