import React, { Component } from 'react';

class Dashboard extends Component {
    componentDidMount(){
        document.title="Requin | Dashboard"
      }
    render() {
        return (
            <div className="columns">
                <div className="column is-12">
                    <p> Private datas (n° of sells, etc..) </p>
                </div>
            </div>
        )
    }
}

export default Dashboard;
