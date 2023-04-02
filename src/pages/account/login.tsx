import { Form, Formik } from "formik"
import { signIn } from "next-auth/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { BsFacebook, BsGoogle, BsInstagram } from "react-icons/bs"
import { object, string } from "yup"
import { MainLayout } from "~/components"

const initialFormValues = {
  email: '',
  password: ''
}

const validationSchema = object({
  email: string().email('Please enter a valid email').required('Email is required'),
  password: string().min(8, 'Password must be at least 8 characters').required('Password is required')
})

const LoginPage = () => {
  const router = useRouter()
  
  return (
    <>
      <Head>
        <title>Panda - Login</title>
      </Head>
      <MainLayout banner={
        <div className="px-2 py-12 bg-orange-100">
          <div className="mx-auto p-6 sm:p-12 h-[calc(100vh-16rem)] shadow-md bg-white rounded-lg max-w-[28rem] flex flex-col items-center justify-center h-full">
            <h1 className="mb-3 text-2xl font-bold">Login</h1>
            <p className="mb-3 px-4 sm:px-10 leading-4 text-sm text-gray-500 font-medium text-center tracking-[-0.3px]">Hey, Enter your details to get sign in to your account</p>
            <Formik
              initialValues={initialFormValues}
              onSubmit={ async(values, { resetForm }) => {
                const status =  await signIn('credentials', {
                  email: values.email,
                  password: values.password,
                  redirect: false,
                  callbackUrl: '/'
                })
                console.log(status)
                // status?.url && router.push('/')
                // status?.ok && resetForm()
              }}
              validationSchema={validationSchema}
              validateOnMount={false}
            >
              {({ isValid, isSubmitting, errors, touched, getFieldProps }) => (
                <Form className="w-full">
                  <div className="mt-2 sm:mt-3">
                    <input
                      type="email"
                      placeholder="Enter Email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-5 py-3 border text-sm border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                      {...getFieldProps('email')}
                      />
                      {
                        errors.email && touched.email && (
                          <span className="text-red-500 text-xs mt-4">{errors.email}</span>
                        )
                      }
                  </div>
                  <div className="mt-2 sm:mt-3">
                    <input
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-5 py-3 border text-sm border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                      {...getFieldProps('password')}
                    />
                    {
                        errors.password && touched.password && (
                          <span className="text-red-500 text-xs mt-4">{errors.password}</span>
                        )
                      }
                  </div>
                  <div className="mt-2 text-xs text-end">
                    <a href="#" className="font-semibold select-none" tabIndex={-1}>
                      Forgot your password?
                    </a>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-light-primary bg-orange-400 transition-all duration-200 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-200 disabled:bg-orange-200"
                      onSubmit={() => signIn('credentials', { email: 'email', password: 'password' })}
                      disabled={!isValid || isSubmitting}
                    >
                      Sign in
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            <div className="mt-6 flex flex-col gap-6 items-center">
              <span className="text-xs font-semibold">--- Or sign in with ---</span>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <button type="button" onClick={() => signIn('google')} className="flex gap-1.5 items-center border border-gray-200 py-2 px-3 rounded-lg focus:ring-1 focus:ring-offset-2 focus:ring-gray-400 hover:ring-1 hover:ring-offset-2 hover:ring-gray-400 transition-all duration-200">
                  <BsGoogle className="w-5 h-5" /> <span className="text-xs font-bold">Google</span>
                  <span className="sr-only">Sign in with Google</span>
                </button>
                <button type="button" className="flex gap-1.5 items-center border border-gray-200 py-2 px-3 rounded-lg focus:ring-1 focus:ring-offset-2 focus:ring-gray-400 hover:ring-1 hover:ring-offset-2 hover:ring-gray-400 transition-all duration-200">
                  <BsInstagram className="w-5 h-5" /> <span className="text-xs font-bold">Instagram</span>
                  <span className="sr-only">Sign in with Instagram</span>
                </button>
                <button type="button" className="flex gap-1.5 items-center border border-gray-200 py-2 px-3 rounded-lg focus:ring-1 focus:ring-offset-2 focus:ring-gray-400 hover:ring-1 hover:ring-offset-2 hover:ring-gray-400 transition-all duration-200">
                  <BsFacebook className="w-5 h-5" /> <span className="text-xs font-bold">Facebook</span>
                  <span className="sr-only">Sign in with Facebook</span>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xs text-center text-gray-700">
                Don&apos;t have an account?{' '} <span className="font-bold underline"><a href="/account/register">Register here</a></span>
              </p>
            </div>
          </div>
        </div>
      }>
      </MainLayout>
    </>
  )
}

export default LoginPage