import Head from "next/head"
import { MainLayout } from "~/components"

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>Panda - Login</title>
      </Head>
      <MainLayout banner={
        <div className="py-12 bg-orange-100">
          <div className="px-12 h-[calc(100vh-16rem)] shadow-md bg-white rounded-lg mx-auto max-w-[28rem] flex flex-col items-center justify-center h-full">
            <h1 className="mb-4 text-2xl font-bold">Login</h1>
            <p className="mb-4 px-10 leading-5 font-medium text-center tracking-[-0.3px]">Hey, Enter your details to get sign in to your account</p>
            <form className="w-full">
              <div className="mt-4">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-5 py-3 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-3">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-5 py-3 border border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="mt-4 text-xs text-end">
                <a href="#" className="font-semibold">
                  Forgot your password?
                </a>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-dark-primary bg-orange-200 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-200"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="mt-6">
              <span className="text-sm font-semibold">--- Or sign in with ---</span>
            </div>
            <div className="mt-6">
              <p className="text-sm text-center text-gray-700">
                Don&apos;t have an account?{' '} <span className="font-bold"><a href="/account/register">Register here</a></span>
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