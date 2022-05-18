import Link from "next/link";

const Intro = () => {
  return (
    <div className="flex flex-row py-14 space-x-14">
      <div>
        <img
          className="rounded-full"
          style={{ minWidth: 175, width: 175, boxShadow: "0 5px 15px rgba(0,0,0,.2)" }}
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

        <div className="text-xs text-gray-500" style={{ lineHeight: "20px" }}>
          Press: <a href="https://techcrunch.com/2021/05/12/fiveable-hours-acquisition/" target="_blank">TechCrunch</a> <a href=" https://techcrunch.com/2021/09/28/fiveable-lands-10m-series-a-to-become-the-hallways-of-the-educational-internet/" target="_blank">(x2)</a>, <a href="https://markets.businessinsider.com/news/stocks/fiveable-acquires-hours-a-virtual-studying-platform-founded-by-a-16-year-old-high-school-junior-1030409076" target="_blank">Business Insider</a>, <a href="https://news.yahoo.com/fiveable-acquires-hours-virtual-studying-122500748.html" target="_blank">Yahoo News</a>, <a href="https://sanfrancisco.cbslocal.com/2021/11/27/teenage-programmer-in-east-bay-creates-internet-study-buddy-platform-for-students/" target="_blank">CBS</a>, <a href="https://www.morningbrew.com/sidekick/issues/2021/02/22" target="_blank">Morning Brew</a>, <a href="https://medium.com/authority-magazine/`young-change-makers-why-and-how-calix-huang-is-helping-to-change-our-world-4c88a983823f" target="_blank">Authority Magazine</a>, <a href="https://www.tiktok.com/@ourfuturehq/video/6975241083806682374" target="_blank">OurFuture</a>, <a href="https://thriveglobal.com/stories/calix-huang-be-selective-with-your-opportunities/" target="_blank">Thrive Global</a>, <a href="https://www.futuremindsnetwork.org/future25u25/" target="_blank">FMN</a>, <a href="https://itspmagazine.simplecast.com/episodes/a-6-figure-acquisition-at-age-16-building-and-exiting-two-edtech-startups-as-a-high-school-student-a-conversation-with-calix-huang-deltax-podcast-with-ellen-xu-1YqlLpp8" target="_blank">ITSP Magazine</a>, <a href="https://www.youtube.com/watch?v=hn01JJGoy60" target="_blank">The Seed</a>, <a href="https://news.elearninginside.com/why-i-built-a-virtual-studying-platform-in-the-midst-of-the-pandemic/" target="_blank">eLearningInside</a>, <a href="https://blog.doist.com/60-resources-students-stay-productive/" target="_blank">Doist</a>, <a href="https://every.to/cybernaut/caught-in-the-study-web" target="_blank">Every</a>, <a href="https://startupsavant.com/news/fiveable-virtual-study-group" target="_blank">Startup Savant</a>, <a href="https://itspmagazine.simplecast.com/episodes/a-6-figure-acquisition-at-age-16-building-and-exiting-two-edtech-startups-as-a-high-school-student-a-conversation-with-calix-huang-deltax-podcast-with-ellen-xu-1YqlLpp8" target="_blank">DeltaX</a>, <a href="https://biztimes.com/fiveable-acquires-virtual-studying-platform-founded-by-a-16-year-old-high-school-junior/ " target="_blank">Biztimes</a>, <a href="https://www.bizjournals.com/milwaukee/inno/stories/news/2021/05/10/fiveables-first-acquisition-is-virtual-study.html " target="_blank">Bizjournals</a>, <a href="https://topnews-usa.com/wi/fiveable-acquires-virtual-studying-platform-founded-by-16-year-old/" target="_blank">Top News USA</a>, <a href="https://www.pleasantonweekly.com/news/2021/07/05/tri-valley-teen-reflects-on-selling-his-edtech-company-for-six-figures" target="_blank">Pleasanton Weekly</a>
        </div>
      </div>
    </div>
  )
}

export default Intro;