import React, { Component } from 'react';
import PropTypes from 'prop-types'
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
    static propTypes = {
        author: PropTypes.string
    }
    render(){
        const{title, author, date, children} = this.props 
        return(
            <section>
                <h2>{title}</h2>
                {author && <p><em>Escrito por {author}</em></p>}
                <Box>{date}</Box>
                <article>
                    {children}
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
                author="Jose Martinez"
                date={new Date().toLocaleDateString()}
               >
                <p>Estoy aprendiendo Boostrap</p>
                </Article>
            </>
        );
    }
}

export default ChildrenLayout;