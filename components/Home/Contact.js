const Contact = () => {
  return (
    <div className="py-14 space-y-5">
      <h3>Contact</h3>
      <div className="grid grid-cols-2 space-x-14">
        <div className="space-y-5 text-gray-500">
          <p>I'm always happy to chat, whether it's about work, interests, hobbies, or even just the weather.</p>
          <p>Never hesitate to send a message my way :)</p>
        </div>
        <div className="space-y-5 text-gray-600">
          <p><a className="underline" href="mailto:hey@calix.dev" target="_blank">hey@calix.dev</a></p>
          <p><a className="underline" href="https://cal.com/calix" target="_blank">cal.com/calix</a></p>
          <div className="flex flex-row items-center space-x-2 mt-5">
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
      </div>
    </div>
  )
}

export default Contact;