import React, {useState} from 'react';
import {TextInput, useTheme} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

interface InputProps {
  value: string;
  placeholder?: string;
  label: string;
  onChangeText?: (text: string) => void;
  right?: React.ReactNode;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChangeText,
  value,
  right,
  label,
  className = '',
}) => {
  const [text, setText] = useState(value);
  const theme = useTheme();

  const handleTextChange = (newText: string) => {
    setText(newText);
    if (onChangeText) {
      onChangeText(newText);
    }
  };

  return (
    <View style={styles.container} className={className}>
      <TextInput
        label={label}
        placeholder={placeholder}
        value={text}
        mode="outlined"
        onChangeText={handleTextChange}
        outlineStyle={styles.inputOutlineStyle}
        theme={theme}
        right={right}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 18,
    marginTop: 18,
  },
  inputOutlineStyle: {
    borderRadius: 14,
  },
});

export default Input;
