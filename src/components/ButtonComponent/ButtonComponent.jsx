import { Button } from 'antd';
import React from 'react';

const ButtonComponent = ({ size,styleButton ,styleTextButton,textButton,disabled, ...rests }) => {
    return (
        <Button
        size={size}
        {...rests}
        style={{
          ...styleButton,
          cursor: disabled ? 'not-allowed' : 'pointer',
          background: disabled ? '#ccc' : styleButton.background,
        }}
        disabled={disabled} // Truyền prop disabled cho Button
      >
        <span style={styleTextButton}>{textButton}</span>
      </Button>
      
    );
};

export default ButtonComponent;
