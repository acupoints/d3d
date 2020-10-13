import React, { Component } from 'react'
import axios from 'axios'

class TrData extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
        this.props.users.map((user,i)=>{
            return (
                <tr key={user.ipRegion} className="text-center">
                    <td>{user["ipRegion"]}</td>
                    <td>{user["total"]}</td>
                    <td>{user["01"]}</td>
                    <td>{user["02"]}</td>
                    <td>{user["03"]}</td>
                    <td>{user["04"]}</td>
                    <td>{user["05"]}</td>
                    <td>{user["06"]}</td>
                    <td>{user["07"]}</td>
                    <td>{user["08"]}</td>
                    <td>{user["09"]}</td>
                    <td>{user["10"]}</td>
                    <td>{user["11"]}</td>
                    <td>{user["12"]}</td>
                    {/* <td>{user.sex}</td> */}
                </tr>
            )       
        })
        )
    }
}

class List extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[],
            isLoaded:false
        }
    }

    componentDidMount(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        // axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
        // axios.get('http://127.0.0.1:5000/')
        axios.get('/api')
        .then(function (response) {
            _this.setState({
            users:response.data,
            isLoaded:true
            });
        })
        .catch(function (error) {
            console.log(error);
            _this.setState({
            isLoaded:false,
            error:error
            })
        })
    }
    render() {
        if(!this.state.isLoaded){
          return <div>Loading</div>
        }else{
        return (
          <table className="table table-bordered">
            <thead>
              <tr>
                {/* <th className="text-center">ID</th> */}
                <th className="text-center">ipRegion</th>
                <th className="text-center">total</th>
                <th className="text-center">01</th>
                <th className="text-center">02</th>
                <th className="text-center">03</th>
                <th className="text-center">04</th>
                <th className="text-center">05</th>
                <th className="text-center">06</th>
                <th className="text-center">07</th>
                <th className="text-center">08</th>
                <th className="text-center">09</th>
                <th className="text-center">10</th>
                <th className="text-center">11</th>
                <th className="text-center">12</th>
              </tr>
            </thead>
          <tbody>
             <TrData users={this.state.users}/>
          </tbody>
          </table>
        )  
      }
    }
}

export default List;
