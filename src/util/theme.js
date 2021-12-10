import "../css/theme.css";

const __root__ = window.getComputedStyle(document.body);
const theme = {
  darkblue: __root__.getPropertyValue("--darkblue"),
  blue: __root__.getPropertyValue("--blue"),
  gold: __root__.getPropertyValue("--gold"),
  white: __root__.getPropertyValue("--white"),
  lightblue: __root__.getPropertyValue("--lightblue"),
};

export { theme };

