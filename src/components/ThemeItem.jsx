function ThemeItem({ color, img, changeColor }) {
  return (
    <img
      src={img}
      alt="color"
      className="theme__img"
      onClick={() => {
        changeColor(color);
      }}
    />
  );
}

export default ThemeItem;
