import React from "react";
import  ReactDOM from "react-dom";
import './search.css'
import './searchLess.less'

class Search extends  React.Component {
    render() {
        return <div className="search searchLess">
            search
        </div>
    }
}


ReactDOM.render(<Search/>, document.getElementById('root'))
