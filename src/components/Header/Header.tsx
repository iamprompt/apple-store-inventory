import Link from 'next/link'

export const Header = () => {
  return (
    <header className="h-11 bg-black/80 font-normal text-xs fixed w-full z-50">
      <nav className="flex justify-between items-center h-full flex-row max-w-screen-lg mx-auto px-8">
        <Link scroll={false} href="/" className="text-[#f5f5f7] opacity-80 hover:opacity-100 transition-all px-2">
          Home
        </Link>
        <Link
          scroll={false}
          href="/#iphone"
          className="text-[#f5f5f7] opacity-80 hover:opacity-100 transition-all px-2"
        >
          iPhone
        </Link>
        <Link scroll={false} href="/#ipad" className="text-[#f5f5f7] opacity-80 hover:opacity-100 transition-all px-2">
          iPad
        </Link>
        <Link
          scroll={false}
          href="/#AppleWatch"
          className="text-[#f5f5f7] opacity-80 hover:opacity-100 transition-all px-2"
        >
          Watch
        </Link>
        <Link scroll={false} href="/#mac" className="text-[#f5f5f7] opacity-80 hover:opacity-100 transition-all px-2">
          Mac
        </Link>
        <Link
          scroll={false}
          href="/#apple-tV"
          className="text-[#f5f5f7] opacity-80 hover:opacity-100 transition-all px-2"
        >
          TV
        </Link>
      </nav>
    </header>
  )
}
