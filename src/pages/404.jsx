import {useRouterError} from "react-router-dom";
const ErrorPage = () => {
 const error = useRouterError();
 return ( 
    <div className="flex justify-center min-h-screen items-center">
  <h1 className="font-bold text-8xl">Oops!</h1>
  <p className="mb-2 my-2 text-2xl font-bold">Sorry, an unexpected error has occurred.</p>
  <p className="mb-2">{error.statusText || error.message}
  </p>
  </div>
  )
}

export default ErrorPage