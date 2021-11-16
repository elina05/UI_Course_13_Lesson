'use strict';

class Hello{
  constructor (firstName, lastName, emotion){
  this.firstName = firstName;
  this.lastName = lastName;
  this.emotion = emotion;
  };
  sentence () {
    alert(`Hello, my first name is ${this.firstName}, last name is ${this.lastName}. ${this.emotion}`)
  }
}


let user = new Hello ('Elina', 'Tymtsev', 'I am very exited to learn JavaScript!')
user.sentence()
