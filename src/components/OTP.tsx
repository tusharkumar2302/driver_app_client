import {StyleSheet, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {TextInput} from 'react-native';

interface OTPProps {
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
}

interface handleOtpChangeProps {
  text: string;
  prev: React.MutableRefObject<any> | null;
  refToFocus: React.MutableRefObject<any>;
}

//TODO: allowing users to update the otp from between
const OTP = ({setOtp, otp}: OTPProps) => {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const [focusedInput, setFocusedInput] = useState<number | null>(null);

  useEffect(() => {
    input1Ref.current?.focus();
  }, []);

  const handleOtpChange = ({text, prev, refToFocus}: handleOtpChangeProps) => {
    if (text && !prev) {
      setOtp(text);
      refToFocus.current?.focus();
    } else if (text && prev) {
      setOtp((prevOtp: string) => `${prevOtp}${text}`);
      refToFocus.current?.focus();
    } else if (!text && prev) {
      setOtp((prevOtp: string) => prevOtp.slice(0, -1));
      prev.current?.focus();
    } else {
      setOtp('');
    }
  };

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <TextInput
        caretHidden={true}
        ref={input1Ref}
        keyboardType="numeric"
        placeholder="-"
        placeholderTextColor={'black'}
        style={[
          styles.inputField,
          focusedInput === 0 && styles.focusedInputField,
        ]}
        maxLength={1}
        onChangeText={text =>
          handleOtpChange({text, prev: null, refToFocus: input2Ref})
        }
        value={otp[0] || ''}
        onFocus={() => setFocusedInput(0)}
        onBlur={() => setFocusedInput(null)}
      />
      <TextInput
        caretHidden={true}
        ref={input2Ref}
        keyboardType="numeric"
        placeholder="-"
        placeholderTextColor={'black'}
        style={[
          styles.inputField,
          focusedInput === 1 && styles.focusedInputField,
        ]}
        maxLength={1}
        onChangeText={text =>
          handleOtpChange({text, prev: input1Ref, refToFocus: input3Ref})
        }
        value={otp[1] || ''}
        onFocus={() => setFocusedInput(1)}
        onBlur={() => setFocusedInput(null)}
      />
      <TextInput
        caretHidden={true}
        ref={input3Ref}
        keyboardType="numeric"
        placeholder="-"
        placeholderTextColor={'black'}
        style={[
          styles.inputField,
          focusedInput === 2 && styles.focusedInputField,
        ]}
        maxLength={1}
        onChangeText={text =>
          handleOtpChange({text, prev: input2Ref, refToFocus: input4Ref})
        }
        value={otp[2] || ''}
        onFocus={() => setFocusedInput(2)}
        onBlur={() => setFocusedInput(null)}
      />
      <TextInput
        caretHidden={true}
        ref={input4Ref}
        keyboardType="numeric"
        placeholder="-"
        placeholderTextColor={'black'}
        style={[
          styles.inputField,
          focusedInput === 3 && styles.focusedInputField,
        ]}
        maxLength={1}
        onChangeText={text => {
          if (text) {
            setOtp(prevOtp => `${prevOtp}${text}`);
          } else {
            setOtp(prevOtp => prevOtp.slice(0, -1));
            input3Ref.current?.focus();
          }
        }}
        value={otp[3] || ''}
        onFocus={() => setFocusedInput(3)}
        onBlur={() => setFocusedInput(null)}
      />
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: 'white',
    color: 'black',
    marginHorizontal: 5,
    height: 44,
    width: 59,
    textAlign: 'center',
    borderRadius: 9,
    fontSize: 20,
    fontWeight: '600',
  },
  focusedInputField: {
    borderColor: '#FF4A4A',
    borderWidth: 2,
  },
});
