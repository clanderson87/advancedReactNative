import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import { ROOT_URL, VERIFY } from '../secrets/GCF_URLS';

class SignInForm extends Component {
  state = { phone: '', code: '' };

  handleSubmit = async () => {
    const sendObj = { phone: this.state.phone, code: this.state.code };
    try {
      let { data } = await axios.post(`${ROOT_URL}${VERIFY}`, sendObj);
      
      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return(
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Code</FormLabel>
          <FormInput 
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Code</FormLabel>
          <FormInput 
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    )
  };
};

export default SignInForm;