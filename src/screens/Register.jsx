import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
      />
      <View style={{alignItems: 'center', marginTop: 20}}>
        <Text>or register with</Text>
        {/* <FontAwesome.Button
          name="google"
          backgroundColor="#dd4b39"
          onPress={handleGoogleRegister}>
          Register with Google
        </FontAwesome.Button> */}
      </View>
    </View>
  );
};

export default Register;
