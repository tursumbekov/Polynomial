<template>
  <div class="polynomial">

  </div>
</template>

<script>
	class Polynomial {
		constructor(string) {
			this.string = string;
			this.consts = this.findConsts(string);
		}

		getMonomials(string) {
			const regexp = /\+|\-/g;
			const trimmedString = string.replace(/ /g, '');
			let monomials = trimmedString.split(regexp);

			return monomials;
		}

		findConsts(string) {
			let monomials = this.getMonomials(string);
			let monomialsObject = {};

			monomials.forEach((item, i) => {
				let numbers = item.split('x');
				let constant = numbers[0];
				let exponent = numbers[1] || 1;
				if (numbers.length === 2) {
					monomialsObject[exponent] = +constant;
				} else {
					monomialsObject[0] = +constant;
				}
			});

			return monomialsObject;
		}
	}

	function exponentsSum(first, second) {
		let sum = {};
		for (let i = 0, arrays = [first, second]; i < arrays.length; i++) {
			for (let key in arrays[i]) {
				if (sum[key] === undefined) {
					sum[key] = arrays[i][key];
				} else {
					sum[key] = sum[key] + arrays[i][key];
				}
			}
		}

		let monomials = [];
		for (let key in sum) {
			if (key == 0) {
				monomials.push(sum[key] + '');
			} else if (key == 1) {
				monomials.push(sum[key] + 'x');
			} else {
				monomials.push(sum[key] + 'x' + key);
			}
		}
		console.log('sum: ', monomials.reverse().join(' + '));
	}

	exponentsSum(new Polynomial('2x2 + 5x + 5').consts, new Polynomial('2x5 + 5x3 + 5x + 8').consts);
	exponentsSum(new Polynomial('2x10 + 5x8 + 5').consts, new Polynomial('2x5 + 5x3 + 5').consts);
	exponentsSum(new Polynomial('2x2 + 5x4 + 5x').consts, new Polynomial('2x5 + 6x2 + 5x + 8').consts);

	export default {
		name: 'Polynomial',
		data() {
			return {
				msg: '',
			};
		},
	};
</script>

<style scoped>

</style>
