import React, {useState} from 'react';
import {TextInput as PaperTextInput, useTheme} from 'react-native-paper';
import {View, StyleSheet} from 'react-native';

interface InputProps {
  value: string;
  placeholder: string;
  onChangeText?: (text: string) => void;
  right?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  onChangeText,
  value,
  right,
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
    <View style={styles.container}>
      <PaperTextInput
        label={placeholder}
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
    margin: 18,
  },
  inputOutlineStyle: {
    borderRadius: 14,
  },
});

export default Input;
