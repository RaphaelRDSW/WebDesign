

/*console.log(c);*/

/*c =b-a ;
console.log(c);

c=a*b;
console.log(c);

c=a%b;
console.log(c);

c=a/b;
console.log(c);

var a1 = (a!=b)
console.log(a1);

var a1 = (a==d);
console.log(a1)

var a1 =(a===d);
console.log('a1 = ',a1);*/

// logical

/*if (a===d && a==b) {
	console.log('ok');

}else {
	console.log('not ok')
}
*/
/*var a4 = 10 ;
a4 *=10 ;
console.log(a4);*/
/*var a = 10 ;
var	b = 10;
var c = 5 ; var d = 10 ;
var a5 = ( a==b?c:d) ;
console.log("a5=",a5);*/

/*var str = new String ("String object content")
console.log(str)*/

/*var str1 = new String("Hello World");
var str2 = new String ("Hello World");
var str3 =  "Hello World" ;
var str4 = str1 ;*/

/*console.log("str1==str2",(str1==str2));
console.log("str1==str3",(str1==str3));
console.log("str1===str3",(str1===str3));
console.log("str1==str4",(str1==str4));

console.log("type of str1", typeof(str1));
console.log("type of str3", typeof(str3));
console.log("type of str4", typeof(str4));*/

/*console.log(str1+ "   "+ str2);

for (var i = str1.length - 1; i >= 0; i--) {
   console.log (str1[i]);
}

console.log("hi, hong trun \" det \" chan nhan") ;*/


/*var str5 = "A Su Det Su" ;

console.log (str5.toUpperCase()) ;
console.log(str5.toLowerCase()) ;

console.log(str5.indexOf("Su"));
console.log(str5.lastIndexOf("Su"));

*/


/*var hex = new Number(0xff);

console.log(hex);
console.log(hex.valueOf());
var x = 101010 ;
var str = "ffff" ;
console.log(x.toString());
console.log(isNaN("aa"));
console.log(parseInt(str,16));

*/

/*var Dai = {
	firstname :"Bui" ,lastname :"Dai" ,age:24 , heigh :1760 ,
	getFullInfo : function(){
		return Dai.firstname + '  ' + Dai.lastname  ;
	}
}

console.log(Dai.firstname ,Dai.lastname,Dai.age,Dai.heigh);
console.log(Dai.getFullInfo()) ;
*/


/*var Dai = new Object() ;
	Dai.firstname = 'Dai' ;
	Dai.lastname = 'Bui' ;
	Dai.age = 24 ;
	Dai.sex = "female" ;
	Dai.job = 'Developer'

for (var property in Dai){
	console.log(property) ;
}

function change (Dai){
	Dai.firstname = 'Dai1' ;
}
*/


/*if(Dai.hasOwnProperty('firstname')){
	console.log("ten cua dai la " , Dai.firstname) ;
}else{
	console.log('this property is avainable') ;
}*/

/*var date1  = new Date() ;
console.log('date1',date1) ;


var date2  = new Date(1000) ;
console.log('date2',date2) ;*/
/*a=prompt("so can tinh","nhap mot so vao day xem nao");
b=a*a;
alert("Bình phương của " +a +" = "+b);*/

/*a=Number("8");
alert("a="+a) ;*/

/*c = prompt("Nhap vao mot so tu 1 den 9 :")
if(c>9 || c<1){
	alert("so ban vua nhap khong dung");
}else{
	alert("ban da nhap dung so chung toi can")
}*/


/*var i = 0 ;
while ( i < 1001){
	document.write(" <p>Hello Vietnam </p> ");
i++;
}*/

/*for(var i = 0 ; i < 11 ; i++){
	a = prompt("2 X  " + i + "la :","Dien tiep vao o trong") ;
	 if(a == 2*i){
	 	alert("Dung roi, 2 lan " + i + " la :" + 2*i ) ;
	 } else{
	 	alert("Em hoc bai chua ki roi") ;
	 	break;
	 }
}*/

/*mang = Array();

for (var i = 0 ; i < 10; i++){
	mang[i] = i ;
	document.write("a[" + i + "] = " + mang[i]+ "") ;
}*/



/*A = Array();

A[0] = "Dang" ;
A[1] = "Cong" ;
A[2] = "San" ;
A[3] = "Vietnam" ;
A[4] = "Quang Vinh" ;

//alert(A.toString()) ; // hien ra duoi dang pop-up

document.write(A.reverse()); // hien ra duoi dang html

B = Array();
B = [ 2,3,6,7,1,9,7,4,2 ] ;

document.write(B.sort().toString()) ;*/

/*C = [ 'nguyen van dai'];

document.write(C.split(0,C.length).toString());*/



//count number of each charater in one paragraph

/*var str = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like";
var res = str.split("");
A = Array();

for( var i = 0 ;i < (126-32+1) ;i++){
	A[i] = 0 ;
}

for(var i = 0 ; i< str.length; i++){
A[str.charCodeAt(i)-32]++ ;    //character to number ;
}


for ( var i = 0 ; i < A.length; i++){
    if (i==0){
          document.write(A[i]+" Space--") ;
          continue ;
	  }
	document.write(A[i] + String.fromCharCode(i+32)+"--"); //  number to charater
	  
}*/

/*function vd2()
{
	a=prompt("Số a","");
	b=prompt("Số b","");
	c=prompt("Số c","");
		if((a==b)&&(a==c)&&(c==b))
{
	return true;
}else{
	return false;
}

}
	if(vd2())
  {
	alert("Đúng");
}else{
	alert("Sai");
}*/


// <input>
<input type="text" name="type_text" />
<input type="text" name="aaa" value="Điền cái g ì đó vào đây"/>
<input type="checkbox" name="type_checkbox" /> 
<input type="checkbox" name="type_checkbox" checked="yes" />