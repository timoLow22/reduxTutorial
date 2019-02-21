//How you need to look at this page:
//First import the stuff, then look at the code starting from line 48 onwards


import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

//When you want to use redux stuff in pages, just import connect from react-redux
import { connect } from 'react-redux';

//then import the functions you created in the actions page you made
import { incrementNum, decrementNum } from './actions/IncrementDecrementAction';

class ReduxExamplePage extends Component {
    render() {
        return (
            <View style = {{flex:1}}>
                <View style = {styles.instructionContainer}>
                    <Text style= {styles.boldText}>Welcome to the React-Redux Boilerplate! Today, we will be coding out a simple app to decrement and increment a number</Text>
                    <Text>Give those plus-minus buttons a go to change the value of the number you see</Text>

                    <Text style = {styles.boldText}>You will need to do the following in your editor to sort of get how to code Redux stuff:</Text>
                    <Text>1. npm install --save react-redux in your app directory</Text>
                    <Text>2. npm install --save redux in your app director</Text>
                    <Text>3. Then in your app folder, create a src folder</Text>
                    <Text>4. In the src folder, create two folders named actions and reducers</Text>
                    <Text>5. In the actions folder, create two files called types.js and index.js (Follow the comments and code in the file I wrote)</Text>
                    <Text>6. Then create your very own actions file and your very own reducers file in the reducer folder</Text>
                    <Text>7. You can then later follow the code I wrote in my actions and reducer code</Text>
                    <Text>8. After that, go to the App.js and index.js and read the comments and code I wrote there to set up Redux</Text>
                    <Text>9. Finally, open up the ReduxExamplePage.js and go through the code there and hopefully you can understand how I normally set up Redux</Text>



                </View>
                <View style={styles.container}>

                    {/* if you look in the onPress function, that is how you use a function you created in your action file */}
                    <Button style={styles.button} title="-" onPress={() => this.props.decrementNum(this.props.plusMinus.number - 1)} />

                    {/*and in the text there, that is how you call out a variable from your redux state*/}
                    <Text style={styles.text}> {this.props.plusMinus.number} </Text>

                    <Button style={styles.button} title="+" onPress={() => this.props.incrementNum(this.props.plusMinus.number + 1)} />
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    instructionContainer:{
        padding: 10,
        justifyContent:'center'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 50
    },
    text: {
        padding: 10,
        width: 50
    },
    boldText:{
        fontWeight:"bold"
    }
})

//this part is just as the name says, mapping state to props. These props is just only accessible in this page so make it unqiue
const mapStateToProps = (state) => {
    return {
        //declare a variable and store the state in it. The way to declare the state is "state.theNameYouSetInTheIndex.js"
        plusMinus: state.incrementDecrement
    }
}


//this part is very important, make sure you copy paste the names of the functions you created in your action page. Refer to the code below
export default connect(mapStateToProps, { incrementNum, decrementNum })(ReduxExamplePage)