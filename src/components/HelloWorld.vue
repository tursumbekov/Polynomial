<template>
    <div class="hello">

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
            const regexp = /\d+/;
            let monomialsArray = [];

            let consts = monomials.forEach(function(item, i) {
                let number = item.match(regexp)[0];
                let exponent = item.replace(/\d+x/, '$\'');
                console.log('---', exponent);
                monomialsArray.push(item.match(regexp)[0]);
            });
            console.log('---', monomialsArray);

            return consts;




//            let exponent = string.substring(lastIndex);
//            let exponentNumber = parseInt(exponent);
//            if (isNaN(exponentNumber)) {
//                if (exponent === '') {
//                    exponentsArray.push(1);
//                } else {
//                    let end = /[+*/-]/.exec(exponent);
//                    if (end) {
//                        exponentsArray.push(1, 0);
//                    }
//                }
//            } else {
//                exponentsArray.push(exponentNumber);
//            }
        }
    }

    // new Polynomial('2x2 + 5x + 5');
    // new Polynomial('2x5 + 5x');
    // new Polynomial('2x10 + 5x8 + 5x');
     console.log('---', new Polynomial('12x2 + 5x + 5'));

//    function exponentsSum(first, second) {
//        let obj = {};
//        for (let i = 0; i < first.length; i++) {
//            let index = first[i];
//            obj[index] = 1;
//        }
//        for (let i = 0; i < second.length; i++) {
//            let index = second[i];
//            obj[index] = 1;
//        }
//        console.log('---', Object.keys(obj));
//    }

//    exponentsSum(new Polynomial('2x2 + 5x + 5').exponets, new Polynomial('2x5 + 5x3 + 5x + 8').exponets);
//    exponentsSum(new Polynomial('2x10 + 5x8 + 5').exponets, new Polynomial('2x5 + 5x3 + 5').exponets);
//    exponentsSum(new Polynomial('2x2 + 5x4 + 5x').exponets, new Polynomial('2x5 + 5x + 8').exponets);

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
