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
      <div className="space-y-5 text-md text-gray-700" id="telescopic">
        <h1 className="text-gray-900">Hey, I'm Calix. I love software and storytelling.</h1>

        <div>
          I’m an incoming <a className="highlight" data-o="1">student</a> <span data-ob="1">studying Design, Technology, Business, and Communication</span> at the <a className="cursor-pointer underline" href="https://iovine-young.usc.edu" target="_blank">USC Iovine and Young Academy</a>.
        </div>

        <div>
          I love <Link href="/software"><p className="cursor-pointer underline">building software</p></Link>, <Link href="/writing"><p className="cursor-pointer underline">telling stories</p></Link>, and <a className="highlight" data-o="2">making memories</a>. <span data-ob="2">I'm constantly documenting life through <a className="highlight" data-o="3">words</a> and <Link href="/life-in-photos"><p className="cursor-pointer underline">photos</p></Link>.</span> <span data-ob="3">I often take time to write publish <Link href="/writing/?tag=reflections"><p className="cursor-pointer underline">monthly reflections</p></Link> and save my memories day-by-day in <a href="https://myrecollect.com" target="_blank">Recollect</a>.</span>
        </div>

        <div>I’ve previously <a className="highlight" data-o="4">founded startups</a><span data-ob="4">, <Link href="/writing/hours-acquired-by-fiveable"><p className="cursor-pointer underline">sold them</p></Link>,</span> and I now currently lead <a className="highlight" data-o="5">Labs</a><span data-ob="5">, a department testing early product hypotheses,</span> at <a className="cursor-pointer underline" href="https://fiveable.me" target="_blank">Fiveable</a>.</div>

        <div>Explore my <Link href="/writing/failures"><p className="cursor-pointer underline">failures</p></Link>, <Link href="/life-in-photos"><p className="cursor-pointer underline">life in photos</p></Link>, and recent <Link href="/writing/april-2022"><p className="cursor-pointer underline">April</p></Link> reflection.</div>
      </div>
    </div>
  )
}

export default Intro;