import * as React from 'react';
import stylesheet from 'antd/dist/antd.min.css'

import Dashboard from "../containers/Dashboard";


export default class App extends React.Component {
  render() {
    return (
    <>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <Dashboard/>
    </>
    )
  }
}