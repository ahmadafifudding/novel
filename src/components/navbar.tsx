import Link from 'next/link'

export function Navbar() {
  return (
    <header className="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-colors">
      <div className="max-w-container mx-auto">
        <div className="py-4">
          <div className="relative flex items-center px-4 lg:px-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 54 33"
              className="h-8 w-8 text-brand-500"
            >
              <g clipPath="url(#prefix__clip0)">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                  clipRule="evenodd"
                />
              </g>
              <defs>
                <clipPath id="prefix__clip0">
                  <path fill="#fff" d="M0 0h54v32.4H0z" />
                </clipPath>
              </defs>
            </svg>
            <div className="ml-auto">
              <nav className="text-sm font-semibold leading-6 text-slate-700">
                <ul>
                  <li>
                    <Link href={`/novels`} className="hover:text-brand-500">
                      Novels
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
