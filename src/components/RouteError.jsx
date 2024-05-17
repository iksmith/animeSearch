import { useRouteError } from 'react-router-dom';


function RouteError() {

    const error = useRouteError();
    console.log(error);
    
  return (
    <div className='errorPage'>
        <h1>Oops! 😅</h1>
        <h4>Sorry, an unexpected error has occured.</h4>
        <h4>Please try again!</h4>
        <p> <i> { error.statusText || error.message } </i> </p>
    </div>
  )
}

export default RouteError