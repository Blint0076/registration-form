render() {
    return (
      <View style={styles.panel}>
        <Text style={styles.instructions}>
          Please enter your recipe information
        </Text>
        {this.renderTextfield({ ingredient: 'Enter ingredient 1', placeholder: 'Enter ingredient' })}
        {this.renderTextfield({ quantity: 'Enter quantity 1', placeholder: 'Qty'})}
        {this.renderTextfield({ ingredient: 'Enter ingredient 2', placeholder: 'Enter ingredient' })}
        {this.renderTextfield({ quantity: 'Enter quantity 2', placeholder: 'Qty'})}
        {this.renderTextfield({ ingredient: 'Enter ingredient 3', placeholder: 'Enter ingredient' })}
        {this.renderTextfield({ quantity: 'Enter quantity 3', placeholder: 'Qty'})}
        {this.renderTextfield({ ingredient: 'Enter ingredient 4', placeholder: 'Enter ingredient' })}
        {this.renderTextfield({ quantity: 'Enter quantity 4', placeholder: 'Qty'})}
        {this.renderTextfield({ ingredient: 'Enter ingredient 5', placeholder: 'Enter ingredient' })}
        {this.renderTextfield({ quantity: 'Enter quantity 5', placeholder: 'Qty'})}
        {this.renderTextfield({ ingredient: 'Enter ingredient 6', placeholder: 'Enter ingredient' })}
        {this.renderTextfield({ quantity: 'Enter quantity 6', placeholder: 'Qty'})}
        {this.renderTextfield({ ingredient: 'Enter ingredient 7', placeholder: 'Enter ingredient' })}
        {this.renderTextfield({ quantity: 'Enter quantity 7', placeholder: 'Qty'})}
        {this.renderTextfield({ ingredient: 'Enter ingredient 8', placeholder: 'Enter ingredient' })}
        {this.renderTextfield({ quantity: 'Enter quantity 8', placeholder: 'Qty'})}
        {this.renderTextfield({ ingredient: 'Enter ingredient 9', placeholder: 'Enter ingredient' })}
        {this.renderTextfield({ quantity: 'Enter quantity 9', placeholder: 'Qty'})}
        {this.renderTextfield({ ingredient: 'Enter ingredient 10', placeholder: 'Enter ingredient' })}
        {this.renderTextfield({ quantity: 'Enter quantity 10', placeholder: 'Qty'})}
        {this.renderTextfield({ instructions: 'Enter instructions', placeholder: 'Enter Instructions' })}
        {this.renderButton()}
      </View>
    );
  }
}