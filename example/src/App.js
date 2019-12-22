import React, { Component } from 'react'

import { ExampleComponent } from 'react-library'

import { Button } from 'react-library'

export default class App extends Component {
  render () {
    return (
      <div>
        <p>asd213</p>
        <ExampleComponent text='123Modern React component module' />
        <Button text="123" />
        <p>asd</p>
      </div>
    )
  }
}
