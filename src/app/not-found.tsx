import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-brand-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-slate-600">
          Sorry, we could&apos;t find the page you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="mt-6 block text-sm font-semibold leading-6 text-brand-500 hover:underline"
        >
          Go back home
        </Link>
      </div>
    </main>
  )
}
