export const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "DARK":
      return { isDarkMode: true };
      break;
    case "LIGHT":
      return { isDarkMode: false };
      break;
    case "TOGGLE":
      return { isDarkMode: !state.isDarkMode };
      break;

    default:
      return state;
  }
};
