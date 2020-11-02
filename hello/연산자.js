let strNum = '3';
let sum = strNum + 5;
console.log(sum);

sum = 5 + Number(strNum);
console.log(sum);


// 원둘레 연산
let circle = 3 * 3.14;
console.log("지름이 3인 원의 둘레길이", circle);
circle = 3 * Math.PI;
console.log(circle);

for(let i =0; i<10; ++i)
{    
    let rnd = Math.floor(Math.random() * 10) + 1;
    console.log(rnd);
}

let str1;
let str2 = null;
let str3 = '';
let str4 = 0;
let str5 = NaN;
let str6 = undefined;

// 임의의 변수들에 담길 예정인 값중에 실제 문자열, 숫자 형태인 값이 담긴 변수를 찾아 
// 그 변수값을  다른 변수에 담고 싶을때
// if문을 사용하지 않고 || 연산자를 통하여 구현할수 있다.
let result = str1 || str2 || str4 || str5 || str6 || "Korea";

let 어떤값 = "3A";
if(!Number(어떤값)) { console.log("숫자가 아님"); }

console.log("parseInt", parseInt(어떤값));

