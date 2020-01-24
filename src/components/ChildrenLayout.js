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

class Article extends Component{
    render(){
        return(
            <section>
                <h2>{this.props.title}</h2>
                <p><em>Escrito por {this.props.author}</em></p>
                <Box>{this.props.date}</Box>
                <article>
                    {this.props.children}
                </article>
            </section>
        )
    }
}
class ChildrenLayout extends Component {
    render() { 
        return (  
            <>
               <Article
                title="Aprendiendo Reactjs"
                author="Daniel Cornelio"
                date={new Date().toLocaleDateString()}
               >
                   <p>Estoy aprendiendo Reactjs</p>
                </Article>
                <Article
                title="Aprendiendo Bootstrap"
                author="Daniel Cornelio"
                date={new Date().toLocaleDateString()}
               >
                   <p>Estoy aprendiendo Boostrap</p>
                </Article>
            </>
        );
    }
}
 
export default ChildrenLayout;