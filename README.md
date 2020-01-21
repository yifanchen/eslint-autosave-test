# ESlint Autosave Test

## Run the project

```
npm install
```

## Content

```
.vscode
.eslintrc
test.js
package.json
package-lock.json
setting.json // For VSCode config
```

## How to test

1. Open `test.js`
```javascript
// Testing code snippet
var john = {
  name: "John Doe",
  balance: 1500,
  deduct: function(amount){
    this.balance = this.balance - amount
    return this.name + ' has a balance of ' + this.amount
  }
}
```

2. Assuming your VSCode setting is same as `setting.json`, when hit `Command + S`, should be expecting the following code change

* line 1: var to const
* line 2: doube quote to single quote
* line 4: function to `=>` syntax
* line 6: template string

```javascript
// When Command + S, should be expecting
const john = {
  name: 'John Doe',
  balance: 1500,
  deduct: amount => {
    this.balance = this.balance - amount
    return `${this.name} has a balance of ${this.balance}`
  }
}
```
