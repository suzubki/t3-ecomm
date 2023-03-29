import { signIn, useSession } from "next-auth/react"
import Head from "next/head"
import { BsGoogle, BsInstagram, BsFacebook } from "react-icons/bs"
import { MainLayout } from "~/components"

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>Panda - Register</title>
      </Head>
      <MainLayout banner={
        <div className="px-2 py-12 bg-orange-100">
          <div className="mx-auto p-6 sm:p-12 h-[calc(100vh-16rem)] shadow-md bg-white rounded-lg max-w-[28rem] flex flex-col items-center justify-center h-full">
            <h1 className="mb-3 text-2xl font-bold">Sign up</h1>
            <p className="mb-3 px-4 sm:px-10 leading-4 text-sm font-medium text-center tracking-[-0.3px]">Why not create an account? It's free</p>
            <form className="w-full">
              <div className="mt-2 sm:mt-3">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-5 py-3 border text-sm border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="mt-2 sm:mt-3">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-5 py-3 border text-sm border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="mt-2 sm:mt-3">
                <input
                  name="password"
                  type="password"
                  placeholder="Confirm Password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-5 py-3 border text-sm border-gray-200 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="mt-2 sm:mt-3">
                {/* Checkbox */}
                <div className="flex items-center">
                  <input
                    id="terms-and-conditions"
                    type="checkbox"
                    className="h-3 w-3 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms-and-conditions" className="ml-1 block text-xs text-gray-500">
                    I agree to the{' '} <span className="font-bold underline text-gray-700"><a href="/terms">Terms of Service</a></span>
                  </label>
                </div>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-dark-primary bg-orange-200 transition-all duration-200 hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-200"
                >
                  Get started
                </button>
              </div>
            </form>
            <div className="mt-6 flex flex-col gap-6 items-center">
              <span className="text-xs font-semibold">--- Or sign up with ---</span>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                <button type="button" className="flex gap-1.5 items-center border border-gray-200 py-2 px-3 rounded-lg focus:ring-1 focus:ring-offset-2 focus:ring-gray-400 hover:ring-1 hover:ring-offset-2 hover:ring-gray-400 transition-all duration-200" onClick={() => signIn('google')}>
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
                Already have an account?{' '} <span className="font-bold underline"><a href="/account/login">Log In</a></span>
              </p>
            </div>
          </div>
        </div>}
      >
      </MainLayout>
    </>
  )
}

export default RegisterPage