import { Link } from "react-router-dom"

const NotFound = () => {
  const STYLE = {
    container: `min-h-screen flex justify-center items-center flex-col text-4xl text-center gap-8`,
    button: `rounded-lg p-2 m-8 text-xl`,
  }


  return (
    <div className={STYLE.container}>
      <p>404</p>
      <p>Oops! Diese Seite konnte nicht gefunden werden.</p>
      <Link className={STYLE.button} to="/">Zurück zur Hauptseite</Link>
    </div>
  )
}

export default NotFound
