import React, { Component } from 'react';

class Box extends Component{
    render(){
        return (
            <div style={{border: '1px solid #000', margin: 5, padding: 5}}>
                {this.props.children}
            </div>
        )
    }
}

class PropChildren extends Component {
    render() { 
        return (  
            <>
                <h4>Children Props</h4>
                <Box>Holaa</Box>
                <Box>Otro children </Box>
                <Box>Otro otro children</Box>
            </>
        );
    }
}
 
export default PropChildren;