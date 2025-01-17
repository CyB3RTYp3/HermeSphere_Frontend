import React, { useState } from 'react';
import styles from './passwordInput.module.css';
import EyeIcon from './Assets/eye.svg';
import CrossedEyeIcon from './Assets/crossed-eye.svg'; 

function PasswordInput() {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (event) => {
    if (event.target.value === '') {
      setIsFocused(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword); // Toggle the showPassword state
  };

  return (
    <div className={`${styles.inputContainer} ${isFocused ? styles.focused : ''}`}>
      <input
        type={showPassword ? 'text' : 'password'}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label>Password</label>
      <div className={styles.passwordToggle} onClick={togglePasswordVisibility}>
        {showPassword ? (
          <img src={CrossedEyeIcon} alt="Hide Password" className={styles.eyeIcon} />
        ) : (
          <img src={EyeIcon} alt="Show Password" className={styles.eyeIcon} />
        )}
      </div>
    </div>
  );
}

export default PasswordInput;
