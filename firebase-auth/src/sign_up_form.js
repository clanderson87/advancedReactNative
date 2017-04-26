import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';

class SignUpForm extends Component {
  state = { phone: ''}

  handleSubmit = () => {

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