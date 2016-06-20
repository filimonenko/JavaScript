/*поменять перменные местами
чтобы a было равно 20
а b было равно 10
(с третьей перменной или без)*/

var a = 10;
var b = 20;

// first method
var c = a;
a = b;
b = c;

// second method
a += b;
b = a - b;
a = a - b;

//http://www.quizful.net/interview/problems/swap-without-temp-var
b = [a, a = b][0]

console.log(a);
console.log(b);


//////////////////////////////////////////////////////////////////
/*Для трех переменных, с помощью конструкции if -
найти самое большее число и умножить его на 1000,
затем следующее по величине число умножить на 100
С оставшимся третьим числом ничего не делать.*/
var c = 23;
var d = 24;
var e = 25;


if (c > d && c > e) {
	c *= 1000;
	d > e ? d *= 100 : e *= 100

} else if (e > d && e > c) {
	e *= 1000
	d > c ? d *= 100 : с *= 100;

} else if (d > c && d > e) {
	d *= 1000;
	c > e ? c *= 100: e *= 100;
}

console.log(c);
console.log(d);
console.log(e);



