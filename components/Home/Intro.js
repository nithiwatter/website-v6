import Link from "next/link";

const Intro = () => {
  return (
    <div className="flex flex-row py-14 space-x-14">
      <div>
        <img
          className="rounded-full drop-shadow-2xl"
          style={{ minWidth: 175, width: 175 }}
          src="https://www.calix.dev/img/people/calix2.jpeg"
          alt="Calix Headshot"
        />
        <div className="flex flex-row items-center justify-center space-x-2 mt-5">
          <a href="https://instagram.com/calixo888" target="_blank">
            <img src="/icons/instagram.svg" alt="Instagram Icon" />
          </a>
          <a href="https://twitter.com/calixo888" target="_blank">
            <img src="/icons/twitter.svg" alt="Twitter Icon" />
          </a>
          <a href="https://linkedin.com/in/calix-huang" target="_blank">
            <img src="/icons/linkedin.svg" alt="LinkedIn Icon" />
          </a>
        </div>
      </div>
      <div className="space-y-5 text-md text-gray-700">
        <h1 className="text-gray-900">Hey, I'm Calix. I love software and storytelling.</h1>

        <p>I’m an incoming student at the <a className="cursor-pointer underline" href="https://iovine-young.usc.edu" target="_blank">USC Iovine and Young Academy</a>.</p>

        <p>I love <Link href="/software"><span className="cursor-pointer underline">building software</span></Link>, <Link href="/writing"><span className="cursor-pointer underline">telling stories</span></Link>, and making memories.</p>

        <p>I’ve previously founded startups and I now currently lead Labs at <a className="cursor-pointer underline" href="https://fiveable.me" target="_blank">Fiveable</a>.</p>

        <p>Explore my <Link href="/writing/failures"><span className="cursor-pointer underline">failures</span></Link>, <Link href="/life-in-photos"><span className="cursor-pointer underline">life in photos</span></Link>, and recent <Link href="/writing/april-2022"><span className="cursor-pointer underline">April</span></Link> reflection.</p>
      </div>
    </div>
  )
}

export default Intro;