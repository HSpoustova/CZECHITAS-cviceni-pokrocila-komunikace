import './style.css';

export const NumpadButton = ({ digit, onDigitClick }) => {
  const handleClick = () => {
    onDigitClick(digit);
  };

  return (
    <button className="numpad-button" onClick={handleClick}>
      {digit}
    </button>
  );
};
