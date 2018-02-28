class SmartCalculator {
  constructor(initialValue) {
    this.operandArray = [];
    this.operandArray.push(initialValue);
    this.operatorArray = [];
    this.valueOf = function() {
      while(this.operatorArray.length != 0) {
        this.operandArray.push(this.operatorArray.pop());
      }
      var cond = false;
      /*if(this.operandArray[0] == 2 && this.operandArray[1] == 2 && this.operandArray[2] == 1) {
        console.log(this.operandArray);
        cond = true;
      }*/
      while(this.operandArray.length != 1) {
        var i = 0;
        while(typeof this.operandArray[i] === 'number') {
            i++; //console.log(this.operandArray[i]);
        }
        //console.log("operator: " + this.operandArray);
        if(this.operandArray[i] === '+') {
          this.operandArray[i-2] = this.operandArray[i-2] + this.operandArray[i-1];
        }
        if(this.operandArray[i] === '-') {
          this.operandArray[i-2] = this.operandArray[i-2] - this.operandArray[i-1];
        }
        if(this.operandArray[i] === '*') {
          this.operandArray[i-2] = this.operandArray[i-2] * this.operandArray[i-1];
        }
        if(this.operandArray[i] === '/') {
          this.operandArray[i-2] = this.operandArray[i-2] / this.operandArray[i-1];
        }
        if(this.operandArray[i] === '^') {
          
          /////////////////////////////
          /*var j = i+1;
          var isLastPower = false;
          var isSinglePower = true;
          while(!isLastPower && j < this.operandArray.length) {
            while(typeof this.operandArray[j] === 'number') {
              j++;
            }
            if(this.operandArray[j] === '^') {
              i = j;
              isLastPower = true;
              isSinglePower = false;
            }
            j++;
          }

          if(isSinglePower) {
            this.operandArray[i-2] = Math.pow(this.operandArray[i-2], this.operandArray[i-1]);
          } else {
            this.operandArray[i-3] = Math.pow(this.operandArray[i-3], this.operandArray[i-1]);
          }*/

          /////////////////////////////
          
          this.operandArray[i-2] = Math.pow(this.operandArray[i-2], this.operandArray[i-1]);
        }
        this.operandArray.splice(i-1, 2);
        /*if(cond) {
          console.log(this.operandArray);
        }*/
      }
      return this.operandArray[0];
    }
  }

  add(number) {
    while(this.operatorArray.length !== 0) {
      this.operandArray.push(this.operatorArray.pop());
    }
    this.operandArray.push(number);
    this.operatorArray.push('+');
    return this;
  }
  
  subtract(number) {
    while(this.operatorArray.length !== 0) {
      this.operandArray.push(this.operatorArray.pop());
    }
    this.operandArray.push(number);
    this.operatorArray.push('-');
    return this;
  }

  multiply(number) {
    while(this.operatorArray.length != 0 && this.operatorArray[this.operatorArray.length - 1] !== '-' &&
                 this.operatorArray[this.operatorArray.length - 1] !== '+') {
      this.operandArray.push(this.operatorArray.pop());
    }
    this.operandArray.push(number);
    this.operatorArray.push('*');
    return this;
  }

  devide(number) {
    while(this.operatorArray.length != 0 && this.operatorArray[this.operatorArray.length - 1] !== '-' &&
                 this.operatorArray[this.operatorArray.length - 1] !== '+') {
      this.operandArray.push(this.operatorArray.pop());
    }
    this.operandArray.push(number);
    this.operatorArray.push('/');
    return this;
  }

  pow(number) {
    /*while(this.operatorArray.length != 0 && this.operatorArray[this.operatorArray.length - 1] === '^' ) {
      this.operandArray.push(this.operatorArray.pop());
    }*/
    this.operandArray.push(number);
    this.operatorArray.push('^');
    return this;
  }
}



module.exports = SmartCalculator;
