import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { BsFacebook, BsGoogle, BsInstagram } from "react-icons/bs";
import { boolean, object, string } from "yup";
import type { StringSchema } from "yup";

import { MainLayout } from "~/components";
import { api, getErrorDescription } from "~/utils";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  termsAndConditions: false,
};

const validationSchema = object({
  name: string()
    .min(4, "Name must be at least 4 characters")
    .required("Your name is required"),
  email: string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: string()
    .required("Confirm password is required")
    .test("passwords-match", "Passwords must match", function (value) {
      // could add others properties to the parent object
      const parent = this.parent as { password: string };
      return parent.password === value;
    }) as unknown as StringSchema<string>,
  termsAndConditions: boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const RegisterPage = () => {
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const {
    isValid,
    isSubmitting,
    handleSubmit,
    errors,
    touched,
    resetForm,
    getFieldProps,
  } = useFormik({
    initialValues: initialFormValues,
    onSubmit: async (values) => {
      const { email, password, name } = values;
      mutation.mutate({ email, password, name });
    },
    validateOnMount: false,
    validationSchema,
  });

  const mutation = api.users.create.useMutation({
    onError(error) {
      // validate error
      const errorMessage =
        error && getErrorDescription(error.data?.httpStatus, error.data?.stack);
      errorMessage && setShowErrorMessage(errorMessage);
    },
    async onSuccess(_, variables) {
      // login user
      setShowErrorMessage("");
      await signIn("credentials", {
        email: variables.email,
        password: variables.password,
      });
      resetForm();
    },
  });

  return (
    <>
      <Head>
        <title>Panda - Register</title>
      </Head>
      <MainLayout
        banner={
          <div className="bg-orange-100 px-2 py-12">
            {/* Form */}
            <div className="mx-auto flex h-[calc(100vh-16rem)] h-full max-w-[28rem] flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md sm:p-12">
              <h1 className="mb-3 text-2xl font-bold">Sign up</h1>
              <p className="mb-3 px-4 text-center text-sm font-medium leading-4 tracking-[-0.3px] text-gray-500 sm:px-10">
                Why not create an account? It&apos;s free
              </p>
              {/* Register */}
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="mt-2 sm:mt-3">
                  <input
                    type="text"
                    placeholder="Name"
                    autoComplete="name"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-200 px-5 py-3 text-sm placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                    {...getFieldProps("name")}
                  />
                  {errors.name && touched.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>
                <div className="mt-2 sm:mt-3">
                  <input
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-200 px-5 py-3 text-sm placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                    {...getFieldProps("email")}
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                  {showErrorMessage !== "" && (
                    <p className="mb-1 text-xs text-red-500">
                      {showErrorMessage}
                    </p>
                  )}
                </div>
                <div className="mt-2 sm:mt-3">
                  <input
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-200 px-5 py-3 text-sm placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                    {...getFieldProps("password")}
                  />
                  {errors.password && touched.password && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.password}
                    </p>
                  )}
                </div>
                <div className="mt-2 sm:mt-3">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    autoComplete="current-password"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-200 px-5 py-3 text-sm placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
                    {...getFieldProps("confirmPassword")}
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
                <div className="mt-2 sm:mt-3">
                  {/* Checkbox */}
                  <div className="flex items-center">
                    <input
                      id="terms-and-conditions"
                      type="checkbox"
                      required
                      className="h-3 w-3 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      {...getFieldProps("termsAndConditions")}
                    />
                    <label
                      htmlFor="terms-and-conditions"
                      className="ml-1 block text-xs text-gray-500"
                    >
                      I agree to the{" "}
                      <span className="font-bold text-gray-700 underline">
                        <a href="/terms">Terms of Service</a>
                      </span>
                    </label>
                  </div>
                  {errors.termsAndConditions && touched.termsAndConditions && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.termsAndConditions}
                    </p>
                  )}
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-orange-400 py-3 px-4 text-sm font-bold text-light-primary shadow-sm transition-all duration-200 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2 disabled:bg-orange-200"
                    disabled={!isValid || isSubmitting}
                  >
                    Get started
                  </button>
                </div>
              </form>
              {/* Register with providers */}
              <div className="mt-6 flex flex-col items-center gap-6">
                <span className="text-xs font-semibold">
                  --- Or sign up with ---
                </span>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                  <button
                    type="button"
                    className="flex items-center gap-1.5 rounded-lg border border-gray-200 py-2 px-3 transition-all duration-200 hover:ring-1 hover:ring-gray-400 hover:ring-offset-2 focus:ring-1 focus:ring-gray-400 focus:ring-offset-2"
                    onClick={async () => await signIn("google")}
                  >
                    <BsGoogle className="h-5 w-5" />{" "}
                    <span className="text-xs font-bold">Google</span>
                    <span className="sr-only">Sign in with Google</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 rounded-lg border border-gray-200 py-2 px-3 transition-all duration-200 hover:ring-1 hover:ring-gray-400 hover:ring-offset-2 focus:ring-1 focus:ring-gray-400 focus:ring-offset-2"
                  >
                    <BsInstagram className="h-5 w-5" />{" "}
                    <span className="text-xs font-bold">Instagram</span>
                    <span className="sr-only">Sign in with Instagram</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 rounded-lg border border-gray-200 py-2 px-3 transition-all duration-200 hover:ring-1 hover:ring-gray-400 hover:ring-offset-2 focus:ring-1 focus:ring-gray-400 focus:ring-offset-2"
                  >
                    <BsFacebook className="h-5 w-5" />{" "}
                    <span className="text-xs font-bold">Facebook</span>
                    <span className="sr-only">Sign in with Facebook</span>
                  </button>
                </div>
              </div>
              {/* Already have an account? Login */}
              <div className="mt-6"></div>

              <p className="text-center text-xs text-gray-700">
                Already have an account?{" "}
                <span className="font-bold underline">
                  <Link href="/account/login">Log In</Link>
                </span>
              </p>
            </div>
          </div>
        }
      ></MainLayout>
    </>
  );
};

export default RegisterPage;
