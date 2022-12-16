import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/1',
    'name' : "홍길동",
    'birthday' : "960902",
    'gender' : "남자",
    'job' : "루저",
    'hair' : false
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/64/64/2',
    'name' : "이순신",
    'birthday' : "121212",
    'gender' : "여쟈",
    'job' : "루저",
    'hair' : true
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/64/64/3',
    'name' : "정약용",
    'birthday' : "424242",
    'gender' : "남자",
    'job' : "위너",
    'hair' : false
  }
]

class App extends Component{
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
                hair={c.hair}
              />
            )
          })
        }
      </div>
    )
  }
}
  
export default App;