require('es6-promise').polyfill()
import React, { Component } from 'react'
import css from 'next/css'
import 'isomorphic-fetch'
import Header from '../components/header'

export default class Home extends Component {  
  
  static async getInitialProps({ req }) {
    const res = await fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10')
    const data = await res.json()
    return { data }
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
        <div>
        {this.props.data.map((item, i) => {
          return (
            <div key={i}>
              <h3>{item.title}</h3>
              <p dangerouslySetInnerHTML={{__html: item.content}} />
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}


