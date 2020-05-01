import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HashRouter, Switch, Route } from 'react-router-dom'
import routes from '../routes'

class App extends Component {
  
  render () {
    return (
      <HashRouter>
        <Switch>
          {routes.routes.map(route => {
            return (
              <Route
                exact
                key={route.name}
                path={route.path}
                component={route.component}
              />
            )
          })}
        </Switch>
      </HashRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
