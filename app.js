/*1.
let a = +prompt("inter  your namber");
let b,c;
b = Math.floor(a/60%24);
c = a%60;
console.log(`${b} ${c}`);

2. // noll 
let n = +prompt("inter  your namber");
let h,m,s;
 h = Math.floor(n/3600%24);
 m = Math.floor(n/60%60);
 s = n%60;

 console.log(`${h}  ${m}   ${s} `);

3. // khato
let a = +prompt("inter  your namber");
let b = +prompt("inter  your namber");
let n = +prompt("inter  your namber");
let d;

d = (a * 100+b)/n;
console.log(`${d/100}    ${d%100}`)

4.
let h = +prompt("inter  your namber");
let m = +prompt("inter  your namber");
let s = +prompt("inter  your namber");
let h1= +prompt("inter  your namber");
let m1 = +prompt("inter  your namber");
let s1 = +prompt("inter  your namber");

let a ,b,c,d,e,f;
a = h*3600+m*60+s;
b = h1*3600+m1*60+s1;
c = b-a;
console.log(c);


//duym list
1.

2.
let a= +prompt("inter  your namber");
let b = +prompt("inter  your namber");
let s = +prompt("inter  your namber");
let cnt = 0;

if( a>0)cnt++;
if( b>0)cnt++;
if( s>0)cnt++;

console.log(cnt);

3.
let n = +prompt("inter  your namber");
for(let i = 1;i<=n;i++){
    console.log(i);
}

for(let i = n; i>0;i--){
    console.log(i);
}

4.*/
let a = +prompt("inter  your namber");
let b = +prompt("inter  your namber");
let sum = 0;

for(let i=a;i<=b;i++){
  sum+=(i*i);
}
console.log(sum);