export const textSlice = (text, length) => {
    const windowWidth = window.innerWidth;

    const sliceLength = windowWidth > 768 ? length : length - 10;

  if (text.length > length) {
    return text.slice(0, length) + "...";
  }
  return text;
};
