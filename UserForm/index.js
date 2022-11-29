import React, { Component } from 'react';
import { Alert, StyleSheet, View, Text, TextInput, TouchableOpacity, } from 'react-native';
import { ImageBackground } from 'react-native';

export default class UserForm extends Component {
  state = {};

  handleButtonPress = () => {
    const { ingredient, instructions, quantity } = this.state;

    Alert.alert(`User's data`,`Ingredient: ${ingredient}, Instructions: ${instructions}, Quantity: ${quantity}`);
  }

  renderTextfield(options) {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textfield}
                onChangeText={(value) => this.setState({ [options.ingredient]: value })}
                placeholder={options.placeholder}
                value={this.state[options.ingredient]}
                keyboardType={options.keyboard || 'default'}
                multiline={false}
            />
            {/* <TextInput
                style={styles.textfield1}
                onChangeText={(value) => this.setState({ [options.quantity]: value })}
                placeholder={options.placeholder}
                value={this.state[options.quantity]}
                keyboardType={options.keyboard || 'default'}
            />*/}
        </View>
    );
  }

  renderButton() {
    return (
      <TouchableOpacity
        onPress={this.handleButtonPress}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.panel}>
        <Text style={styles.instructions}>
          Please enter your recipe information
        </Text>
        <ImageBackground
            source={require('../assets/recipe-note.jpg')}
            style={{ width: '100%', height: '100%', opacity: 0.8 }}>
            <View style={styles.ingredients}>
                {this.renderTextfield({ ingredient: 'Enter ingredient 1', placeholder: 'Enter ingredient' })}{this.renderTextfield({ quantity: 'Enter quantity 1', placeholder: 'Qty'})}
                {this.renderTextfield({ ingredient: 'Enter ingredient 2', placeholder: 'Enter ingredient' })}
                {this.renderTextfield({ quantity: 'Enter quantity 2', placeholder: 'Qty'})}
                {this.renderTextfield({ ingredient: 'Enter ingredient 3', placeholder: 'Enter ingredient' })}
                {this.renderTextfield({ quantity: 'Enter quantity 3', placeholder: 'Qty'})}
                {this.renderTextfield({ ingredient: 'Enter ingredient 4', placeholder: 'Enter ingredient' })}
                {this.renderTextfield({ quantity: 'Enter quantity 4', placeholder: 'Qty'})}
                {this.renderTextfield({ ingredient: 'Enter ingredient 5', placeholder: 'Enter ingredient' })}
                {this.renderTextfield({ quantity: 'Enter quantity 5', placeholder: 'Qty'})}
        {/*     {this.renderTextfield({ ingredient: 'Enter ingredient 6', placeholder: 'Enter ingredient' })}
                {this.renderTextfield({ quantity: 'Enter quantity 6', placeholder: 'Qty'})}
                {this.renderTextfield({ ingredient: 'Enter ingredient 7', placeholder: 'Enter ingredient' })}
                {this.renderTextfield({ quantity: 'Enter quantity 7', placeholder: 'Qty'})}
                {this.renderTextfield({ ingredient: 'Enter ingredient 8', placeholder: 'Enter ingredient' })}
                {this.renderTextfield({ quantity: 'Enter quantity 8', placeholder: 'Qty'})}
                {this.renderTextfield({ ingredient: 'Enter ingredient 9', placeholder: 'Enter ingredient' })}
                {this.renderTextfield({ quantity: 'Enter quantity 9', placeholder: 'Qty'})}
                {this.renderTextfield({ ingredient: 'Enter ingredient 10', placeholder: 'Enter ingredient' })}
                {this.renderTextfield({ quantity: 'Enter quantity 10', placeholder: 'Qty'})} */}
                {this.renderTextfield({ instructions: 'Enter instructions', placeholder: 'Enter Instructions' })}
            </View>
        </ImageBackground>
            <View>
                {this.renderButton()}
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: "left",
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#5e503f',
    borderRadius: 3,
    padding: 10,
    marginBottom: 20,
  },
  ingredients: {
    color: '#f2f4f3',
  },
  instructions: {
    color: '#f2f4f3',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 10,
  },
  textfield: {
    color: '#5e503f',
    backgroundColor: 'transparent',
    height: 40,
    marginBottom: 10,
    //width: 250,
  },
  textfield1: {
    color: '#f2f4f3',
    backgroundColor: '#5e503f',
    height: 40,
    marginBottom: 10,
    width: 50,
  },
  button: {
    backgroundColor: '#49111c',
    borderRadius: 3,
    padding: 12,
    flex: 1,
    width: 100,
  },
  buttonText: {
    textAlign: 'center',
    color: '#f2f4f3',
    fontSize: 16,
  },
  container: {
    flexDirection: "row",
    color: '#000000',
  },
  placeholder: {
    color: '#000000',
  }
});