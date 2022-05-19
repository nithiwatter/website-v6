const Journey = () => {
  const journey = [
    {
      year: "2018",
      items: [
        "Quit competitive tennis",
        "Started high school",
        "Discovered ethical hacking",
        "Started programming with Python"
      ]
    },{
      year: "2019",
      items: [
        "Learned the basics of programming",
        "Studied data science and ML/AI",
        "Pivoted to learning full-stack web development",
        "Fell in love with UI/UX design",
        "Attended 10+ hackathons",
        "Founded my first nonprofit... and failed",
        "Landed first SWE internship"
      ]
    },{
      year: "2020",
      items: [
        "Built projects: Ano.js, HackCollab, GroceryMeals, etc...",
        "Directed engineering in an international, collegiate nonprofit",
        "Started (and sold) my first company",
        "Started (and failed) my first startup",
        "Started building Hours"
      ]
    },{
      year: "2021",
      items: [
        "Scaled Hours to 20k+ users",
        "Hours acquired by Fiveable",
        "Worked at various tech startups",
        "Hacked multiple side projects",
        "Built my first mobile app",
        "Joined 4 different fellowships"
      ]
    },{
      year: "2022",
      items: [
        "Graduated high school",
        "More to come..."
      ]
    },
  ]

  return (
    <div className="py-14 space-y-5">
      <h3>My Journey</h3>
      <div className="grid grid-cols-3 gap-8">
        {journey.map((year) => (
          <div>
            <h3>{year.year}</h3>
            <ul className="list-disc text-gray-600 pl-4">
              {year.items.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Journey;