import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>An error occurred...</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
