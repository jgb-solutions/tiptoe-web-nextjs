import { useState } from "react"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [state, setState] = useState("IDLE")
  const [errorMessage, setErrorMessage] = useState(null)

  const subscribe = async () => {
    setState("LOADING")
    setErrorMessage(null)
    try {
      const response = await fetch("/api/subscribe", { method: 'post', body: JSON.stringify({ email }) })
      setState("SUCCESS")
    } catch (e) {
      setErrorMessage(e.response.data.error)
      setState("ERROR")
    }
  }


  return (
    <div>
      <div>
        <div>
          <div>
            <input
              placeholder="Your email here"
              type="email"
              style={{ width: '80%' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div
              onClick={subscribe}
            > {state === "LOADING" ? "Loading" : "Send"}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div >
          {state === "ERROR" && <div >{errorMessage}</div>}
          {state === "SUCCESS" && <div >Welcome to our newsletter!</div>}
        </div>
      </div>
    </div>
  )
}

export default Newsletter