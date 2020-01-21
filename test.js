// Testing code snippet
var john = {
  name: "John Doe",
  balance: 1500,
  deduct: function(amount){
    this.balance = this.balance - amount
    return this.name + ' has a balance of ' + this.amount
  }
}

// When Command + S, should be expecting
const john = {
  name: 'John Doe',
  balance: 1500,
  deduct: amount => {
    this.balance = this.balance - amount
    return `${this.name} has a balance of ${this.balance}`
  }
}
