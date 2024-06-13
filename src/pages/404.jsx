import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="centered-container">
      <h1 className="heading">Not found – 404!</h1>
      <div>
        <Link href="/">
          <button className="button">Go back to Home</button>
        </Link>
      </div>
    </div>
  )
}
