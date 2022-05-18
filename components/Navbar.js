import Link from "next/link";

const Navbar = () => (
  <div className="bg-custom sticky top-0 w-full mt-8">
    <div className="max-w-5xl py-4 px-5 flex flex-row items-center justify-between m-auto">
      <div className="flex flex-row items-center space-x-4">
        <span className="name">Calix Huang</span>
        <a className="mt-1 hidden md:inline-block" href="https://twitter.com/calixo888" target="_blank">
          <span className="text-md text-gray-500">@calixo888</span>
        </a>
      </div>
      <div className="flex flex-row items-center space-x-4">
        <Link href="/software">
          <span className="cursor-pointer">Software</span>
        </Link>
        <Link href="/writing">
          <span>Writing</span>
        </Link>
      </div>
    </div>
  </div>
)

export default Navbar;