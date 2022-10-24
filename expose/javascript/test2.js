// Question 1
function discountPrices(prices, discount) {
    const discounted = [];
    const finalPrice = 0;
    const length = prices.length;

    for (let i = 0; i < prices.length; i++) {
        const discountedPrice = prices[i] * (1 - discount);
        //finalPrice = Math.round(discountedPrice * 100) / 100;
        //discounted.push(finalPrice);
        discounted.push(discountedPrice);
    }

    //console.log(i);
    //console.log(discountedPrice);
    //console.log(finalPrice);
    console.log(length);

    return discounted;
    }

//console.log(discountPrices([100, 200, 300], 0.5));
//discountPrices([100, 200, 300], 0.5);

let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() {console.log('hello'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

console.log(student.courseLoad[0]);