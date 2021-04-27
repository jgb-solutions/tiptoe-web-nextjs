import { useState } from "react";
import axios from "axios";
import { useMediaQuery } from 'react-responsive';
import Style from "../styles/style";

const Newsletter =  () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/subscribe", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  }

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1100px)",
  });

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Style.Input
          style={{ width: '80%', height: isTabletOrMobileDevice && '20px' }}
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Style.SecondaryButton
          style={{ width: '25%', marginTop: isTabletOrMobileDevice && '0px', padding: isTabletOrMobileDevice && '3px' }}
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          {state === "LOADING" ? "Loading" : "Send"}
          </Style.SecondaryButton>
      </div>
      {state === "ERROR" && <p >{errorMessage}</p>}
      {state === "SUCCESS" && <p >Welcome to our newsletter!</p>}
    </div>
  )
}

export default Newsletter;