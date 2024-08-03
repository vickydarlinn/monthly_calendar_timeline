const Button = ({
  backgroundColor,
  textColor,
  buttonText,
  onClick,
  customStyle,
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || "#4F46E5",
    color: textColor || "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 500,
    ...customStyle,
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
