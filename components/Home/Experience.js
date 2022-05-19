const ExperienceEntry = ({ experienceEntry }) => (
  <div>
    <span className="text-lg text-gray-600">
      <strong className="font-bold text-gray-800">{experienceEntry.position}</strong> @ <a className="underline italic" href={experienceEntry.organization.url} target="_blank">{experienceEntry.organization.name}</a>
    </span>
    {experienceEntry.description ?
      <p className="mt-3 text-gray-500 text-sm">{experienceEntry.description}</p>
      : ""
    }
  </div>
)

const Experience = () => {
  const currently = [
    {
      position: "Incoming Freshman",
      organization: {
        name: "USC Iovine and Young Academy",
        url: "https://iovine-young.usc.edu"
      },
      description: "1 of 32 incoming IYA students in the 9th cohort of the Academy"
    },
    {
      position: "Head of Labs",
      organization: {
        name: "Fiveable",
        url: "https://fiveable.me"
      },
      description: "Testing early product hypotheses"
    },
    {
      position: "Research Assistant",
      organization: {
        name: "Cornell Future of Learning Lab",
        url: "https://learning.cis.cornell.edu"
      },
      description: "Analyzing MOOC samples to correlate course information to learner diversity & performance"
    },
  ];

  const previously = [
    {
      position: "Founder",
      organization: {
        name: "Hours",
        url: "https://hours.zone"
      },
      description: "Built solo & acquired by Fiveable in 2021. Now operates as the core platform and vision of Fiveable."
    },
    {
      position: "Growth",
      organization: {
        name: "Uiflow",
        url: "https://uiflow.com"
      },
      description: "Built no-code demo material. Work acknowledged by the founders of Wordpress, DataDog, NoCodeDevs, etc."
    },
    {
      position: "Software Engineer",
      organization: {
        name: "Cornell Pathways",
        url: "https://pathways.cornell.edu"
      },
      description: "Built & launched search function for student curriculum"
    },
    {
      position: "Lead Product Manager",
      organization: {
        name: "Fiveable",
        url: "https://fiveable.me"
      },
      description: "Hired via acquisition. Managed Hours as a separate divison of the company with a team of 5 software engineers."
    },
    {
      position: "Founder",
      organization: {
        name: "Ortexo",
        url: "https://ortexo.com"
      },
      description: "Built consumer software for students. Acquired by NovaCrypt in 2020."
    },
    {
      position: "Fellow (ODET2, ODC1)",
      organization: {
        name: "On Deck",
        url: "https://beondeck.com"
      }
    },
    {
      position: "Software Engineer Intern",
      organization: {
        name: "Hack+",
        url: "https://hackplus.io"
      },
    },
    {
      position: "Intern",
      organization: {
        name: "Spero Ventures",
        url: "https://spero.vc"
      },
    },
    {
      position: "Managing Director of Engineering",
      organization: {
        name: "Erevna",
        url: "https://erevna.us"
      },
    },
  ];


  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 py-14 sm:space-x-14 space-x-0 md:space-y-0 space-y-14">
      <div className="space-y-10">
        <h3>Currently</h3>
        {currently.map((experienceEntry) => (
          <ExperienceEntry experienceEntry={experienceEntry} />
        ))}
      </div>
      <div className="space-y-10">
        <h3>Previously</h3>
        {previously.map((experienceEntry) => (
          <ExperienceEntry experienceEntry={experienceEntry} />
        ))}
        <div className="text-md text-gray-500">
          <a className="underline" href="https://linkedin.com/in/calix-huang" target="_blank">LinkedIn</a> • <a className="underline" href="/calixhuang-resume.pdf" target="_blank">Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Experience;