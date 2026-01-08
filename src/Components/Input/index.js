import InputWrapper from './index.styles';
import { useState } from 'react';

function Input({ handleUserName }) {
  const [isFocus, setIsFocus] = useState(false);

  const onHandleFocusOut = ({ target }) => {
    handleUserName(target.value);
    setIsFocus(false);
  };

  const onHandleFocusOn = () => setIsFocus(true);

  const resize = ({ target }) => {
    target.style.width = `${target.value.length * 0.6 + 1.65}em`;
  };

  const onPreventTab = (e) => {
    if (e.key === 'Tab') e.preventDefault();
  };

  return (
    <InputWrapper>
      <input
        onKeyUp={resize}
        onFocus={onHandleFocusOn}
        onBlur={onHandleFocusOut}
        onKeyDown={onPreventTab}
        maxLength='8'
        placeholder='2026년이나'
      />
    </InputWrapper>
  );
}

export default Input;
