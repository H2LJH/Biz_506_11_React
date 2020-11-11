console.log("=============================================================");

const myArray = [1, 2, 3, 4, 5];
console.log(myArray);

console.log("=============================================================");
/*
    myArray 요소를 foreach문으로 반복하는 것과 같이 순회하면서
    각 요소를 arr 변수에 넘기고 내부의 코드를 실행해서
    return 하면 새로운 배열을 만드는 코드
    기존의 배열을 변경하지 않고, 어떤 연산을 수행한 후
    똑같은 개수의 배열을 만들어 준다.
    
    JS의 순수함수 
    함수에 전달된 매개변수를 직접 변경하지 않고
    연산을 수행한후 다른 변수에 return하여 값을 담는 구조
*/
const mapArr = myArray.map((arr) => {

  // arr ++ // map 함수내부에서 myArray의 요소를 변경하는 코드는 가급적 지양하라
  return arr + 1;
});


// filter()는 원본 배열에서 조건에 맞는 요소만 따로 출력하여 새로운 배열에 담아주는 함수
const filterArr = myArray.filter((arr)=>
{
  if(arr % 2 == 0) return arr;
});

const sliceArr = myArray.slice(0, 3);
console.log(sliceArr);
/*
    객체(JSON)의 전개연산자를 이용한 연산
    새로운 객체를 만들면서 원본 객체를 전개하고
    key : value // 형태의 값을 추가했을떄
    원본에 같은 key가 있으면 해당 key의 value를 변경하고
    없으면 새로운 key : value 형태의 값을 추가하여 객체를 생성한다.
*/
console.log("=============================================================");

const index = 3;
const updateArr = [ ...myArray.slice(0, index), 
                    100, 
                    ...myArray.slice( 3 + index) 
                  ]
const myObject = { id:1, name : "홍길동", number : "010-111-1111"};
const updateObject = {...myObject, name : "이몽룡"};
console.log(myObject, updateObject);


console.log("=============================================================");

const [a, b, c] = [1, 2, 3]; // 배열의 구조 분해 원본배열에서 다른 배열로 복사하기
console.log(a, b, c);

console.log("=============================================================");

let a1 = "name";
let b1 = "number";
[a1, b1] = ["홍길동" , "010-111"];
console.log(a1, b1);

console.log("=============================================================");

/*
  배열의 구조분해 or 비구조화
  배열에 담긴 값을 일반 변수에 각각 복사(할당)
*/
const mArr = [1, 2, 3, 4, 5]
const [ar1, ar2] = mArr;
console.log(ar1, ar2);

const [, a3, , a4] = mArr; // , == 무시 
console.log(a3, a4);

console.log("=============================================================");

/*
    배열의 구조분해를 이용하여
    user 객체를 생성하고 초기화하는 코드
*/
const phone = ["홍길동", "010-111", 32];
let user = {}; 
[user.name, user.number, user.age] = phone;
console.log(user);

console.log("=============================================================");

// 배열의 구조분해를 이용하여 두 변수의 값을 교환하기 (스왑)
let korea = "대한민국"
let usa = "미국";
[korea, usa] = [usa, korea];
console.log(korea, usa);

console.log("=============================================================");

const 폰 = "number";
const addr = {name : "홍길동", addr : "서울시", number : "010-1111"};
const newAddr = {...addr, [폰] : "010-2222"};
console.log(newAddr);
