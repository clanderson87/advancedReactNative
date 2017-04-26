import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { axios } from 'axios';
import { ROOT_URL, CREATE, REQUEST_CODE, VERIFY } from '../secrets/GCF_URLS';

class SignUpForm extends Component {
  state = { phone: ''}

  handleSubmit = () => {
    const phoneObj = { phone: this.state.phone }
    axios.post(`${ROOT_URL}${CREATE}`, phoneObj)
      .then(() => {
        axios.post(`${ROOT_URL}${REQUEST_CODE}`, phoneObj)
      })
  }

  render() {
    return(
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <TextInput 
            value={this.state.phone}
            onChange={phone => this.setState({phone})}
          />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    )
  }
}

export default SignUpForm;