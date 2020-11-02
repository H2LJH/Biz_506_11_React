const myfunc = function(num) { console.log(num); };
const callfunc = function(call) { call(2000); }

myfunc(1000);
callfunc(myfunc); // facade 패턴

let 이름 = ["홍길동", '이몽룡', '성춘향'];

이름.push('장보고');
console.log(이름);

이름 = [...이름, "장영실"];
console.log(이름);

let car = {이름 : '그랜저', 엔진 : '알파'};
console.log(car['이름']);

// JSON 객체의 어떤 요소 값을 변경 하고 싶을때
car['엔진'] = '솔타';
console.log(car["엔진"]);

car = {...car, '엔진' : '베타'} ;
console.log(car['엔진']);

car = {...car, 색깔 : '흰색' };
console.log(car);