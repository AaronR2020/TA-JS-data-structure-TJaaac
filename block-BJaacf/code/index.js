// 1. Create an array named numbers and store 5 number values in it
let numbers=[10,2,33,24,16];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum=0;
for(i in numbers){
sum+=numbers[i];
}
console.log(`sum is ${sum}`);
// 3. Calculate the average of array items and print it to the console using console.log()
let avg=0;
for(i in numbers){
avg+=numbers[i];
}
console.log(`the average is ${avg/numbers.length}`);

// 4. Find the highest number in the array and print it to the console using console.log()
let large=numbers[0];
for(i in numbers){
    large<=numbers[i]?  large=numbers[i]:"";
}
console.log(`largest number is ${large}`);
// 5. Find the lowest number in the array and print it to the console using console.log()
let min=numbers[4];
for(i in numbers){
    min<=numbers[i]?"":min=numbers[i];
}
console.log(`min value is ${min}`);
// 6. Find the even numbers in the array and print them to the console using console.log()
for(i in numbers){
numbers[i]%2==0?console.log(numbers[i]):"";
}

// 7. Find the odd numbers in the array and print them to the console using console.log()
for(i in numbers){
    numbers[i]%2!=0?console.log(`odd numbers are \n:${numbers[i]}`):"";
    }
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for(i in numbers){
    numbers[i]%5==0?console.log(`divisible by 5 are numbers are \n:${numbers[i]}`):"";
    }
// 9. Log all the element of the array one by one
for(i in numbers){
    console.log(`=>\n:${numbers[i]}`);
    }
// 10. Find all the number in the array that is divisible by 3
for(i in numbers){
    numbers[i]%3==0?console.log(   ` numbers divisible by 3 are \n ${numbers[i]}`):"";
    }