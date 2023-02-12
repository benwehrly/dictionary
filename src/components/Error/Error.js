import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const Error = ({ error }) => {

    const { isDarkTheme } = useContext(ThemeContext)

    const serverDown = error?.message.split(" ")[0] === "timeout";
    const errorMessage = serverDown
      ? "Server seems to be down at the moment, try again later"
      : `${error?.message}, try again`;
    return (
      <h2
        className={isDarkTheme ? "error message-dark" : "error message-light"}
      >
        {errorMessage}
      </h2>
    );
  };

  export default Error