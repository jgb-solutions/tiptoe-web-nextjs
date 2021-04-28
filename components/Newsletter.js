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
    <>
        <Style.Input 
          placeholder="Your email here" 
          type="email" 
          style={{ width: '80%' }} 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
            <Style.SecondaryButton 
              style={{ width: '18%', marginTop: isTabletOrMobileDevice && '30px' }}
              disabled={state === "LOADING"}
              onClick={subscribe}
              > {state === "LOADING" ? "Loading" : "Send"}
            </Style.SecondaryButton>
              {state === "ERROR" && <span><br></br>{errorMessage}</span>}
              {state === "SUCCESS" && <span>{"Welcome to our newsletter!"}</span>}
    </>
  )
}

export default Newsletter;