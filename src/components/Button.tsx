import React, {ReactNode, FC} from 'react';
import {Button as PaperButton} from 'react-native-paper';

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
  mode?: 'contained' | 'outlined';
  style?: any;
  backgroundColor?: string;
  textColor?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onPress,
  mode = 'contained',
  style,
  backgroundColor = '#231E60',
  textColor = '#fff',
  ...restProps
}) => {
  return (
    <PaperButton
      mode={mode}
      style={{
        borderRadius: 8,
        paddingLeft: 8,
        paddingRight: 8,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
      onPress={onPress}
      buttonColor={backgroundColor}
      textColor={textColor}
      {...restProps}>
      {children}
    </PaperButton>
  );
};

export default Button;
