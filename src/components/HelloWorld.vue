<template>
  <div class="hello">

  </div>
</template>

<script>
  class Polynomial {
  	constructor(string) {
      this.string = string;
      this.exponets = this.strToArray(string);
    }

    strToArray(string) {
			let regexp = /x/ig;
			let result;
			let resultArray = [];
			let exponentsArray = [];

			while (result = regexp.exec(string)) {
				resultArray.push(regexp.lastIndex);
				exponentsArray = this.findExponent(string, regexp.lastIndex, exponentsArray);
      }
      // console.log('---',exponentsArray );
			return exponentsArray;
    }
    
    findExponent(string, lastIndex, exponentsArray = []) {
			let exponent = string.substring(lastIndex);
			let exponentNumber = parseInt(exponent);
			if (isNaN(exponentNumber)) {
				if(exponent === '') {
					exponentsArray.push(1);
        } else {
					let end = /[+*/-]/.exec(exponent);
					if(end) {
						exponentsArray.push(1, 0);
					}
        }
      } else {
				exponentsArray.push(exponentNumber);
      }

			return exponentsArray;
    }
  }

  // new Polynomial('2x2 + 5x + 5');
  // new Polynomial('2x5 + 5x');
  // new Polynomial('2x10 + 5x8 + 5x');
  // console.log('---', new Polynomial('2x2 + 5x + 5'));

  function exponentsSum(first, second) {
  	let obj = {};
  	for (let i = 0; i < first.length; i++) {
  		let index = first[i];
			obj[index] = 1;
    }
		for (let i = 0; i < second.length; i++) {
			let index = second[i];
			obj[index] = 1;
		}
    console.log('---', Object.keys(obj));
  }

	exponentsSum(new Polynomial('2x2 + 5x + 5').exponets, new Polynomial('2x5 + 5x3 + 5x + 8').exponets);
	exponentsSum(new Polynomial('2x10 + 5x8 + 5').exponets, new Polynomial('2x5 + 5x3 + 5').exponets);
	exponentsSum(new Polynomial('2x2 + 5x4 + 5x').exponets, new Polynomial('2x5 + 5x + 8').exponets);

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
