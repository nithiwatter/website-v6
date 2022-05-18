import Link from "next/link";

const Footer = () => (
  <div className="text-center pt-14 pb-5 px-5">
    <p className="mb-2 text-gray-500 text-sm">
      <img className="text-gray-500 w-3 mb-1 mr-0.5 inline" src="/icons/cross.svg" /> Colossians 3:17
    </p>
    <p className="text-md text-gray-600">&copy; Designed and built by Calix Huang.</p>
    <p className="text-xs text-gray-400 mt-0.5">Inspired by <a className="underline" href="https://samsonzhang.com" target="_blank">Samson Zhang</a> and <a className="underline" href="https://rishi.cx" target="_blank">Rishi Kothari</a></p>
  </div>
)

export default Footer;