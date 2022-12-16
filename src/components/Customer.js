import React from 'react';

class Customer extends React.Component {
  render () {
    return(
      <div>
        <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
        <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} />
        <CustomerBeautiful hair={this.props.hair}/>
      </div>
    )
  }
}


class CustomerProfile extends React.Component{
  render(){
    return(
      <div>
        <img src={this.props.image} alt="profile" />
        <h2>{this.props.name}({this.props.id})</h2>
      </div>
    )
  }
}

class CustomerInfo extends React.Component {
  render(){
    return(
      <div>
        <p>{this.props.birthday}</p>
        <p>{this.props.gender}</p>
        <p>{this.props.job}</p>
      </div>
    )
  }
}

class CustomerBeautiful extends React.Component {
  render(){
    return(
      <div>
        <span>{this.props.hair === true ? "풍성충" : "머머리"}</span>
      </div>
    )
  }
}

export default Customer;