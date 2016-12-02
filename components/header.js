require('es6-promise').polyfill()
import React, { Component } from 'react'
import css from 'next/css'
import Head from 'next/head'
import 'isomorphic-fetch'

export default () => (
  <header>
    <Head>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          padding: 0;
          margin: 0;
        }
        #__next {
          padding: 6rem;
          font-family: Roboto;
        }`}</style>
    </Head>
  </header>
)