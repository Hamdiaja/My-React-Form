import {useRouterError} from "react-router-dom";
const ErrorPage = () => {
 const error = useRouterError();
 return ( 
    <div>
  <h1>Oops!</h1>
  <p>Sorry, an unexpected error has occurred.</p>
  <p>{error.statusText || error.message}
  </p>
  </div>
  )
}

export default ErrorPage