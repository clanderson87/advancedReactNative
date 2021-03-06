import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';
import { ROOT_URL, CREATE, REQUEST_CODE } from '../secrets/GCF_URLS';

class SignUpForm extends Component {
  state = { phone: '' };

  handleSubmit = async () => {
    const phoneObj = { phone: this.state.phone };
    try {
      console.log()
      await axios.post(`${ROOT_URL}${CREATE}`, phoneObj);
      await axios.post(`${ROOT_URL}${REQUEST_CODE}`, phoneObj);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return(
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput 
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    )
  };
};

export default SignUpForm;