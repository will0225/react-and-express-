import React, { Component } from 'react';

class PublicDashboard extends Component {
    componentDidMount(){
        document.title="Requin | Dashboard"
      }
    render() {
        return (
            <div className="columns" >
                <div className="column is-12">
                    <p style={{ color:"black"}}> Display publics datas (for all users) </p>
                </div>
            </div>
        )
    }
}

export default PublicDashboard;
