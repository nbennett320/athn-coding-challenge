import "../css/theme.css";

const __root__ = window.getComputedStyle(document.body);
const theme = {
  darkblue: __root__.getPropertyValue("--darkblue"),
  lightblue: __root__.getPropertyValue("--lightblue"),
  blue: __root__.getPropertyValue("--blue"),
  gold: __root__.getPropertyValue("--gold"),
  green: __root__.getPropertyValue("--green"),
  red: __root__.getPropertyValue("--red"),
  white: __root__.getPropertyValue("--white"),
  grey: __root__.getPropertyValue("--grey"),
  black: __root__.getPropertyValue("--black"),
};

export { theme };

