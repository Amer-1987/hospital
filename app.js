

// 

alert("Welcome Mr Abdulhakim in my Project")

var x = prompt("هل ترغب بمراجعة مستشفى حكومي أم مستشفى خاص (حكومي/خاص)؟")

while (x != "خاص" && x != "حكومي"){
x = prompt("يرجى الادخال بشكل صحيح ( حكومي / خاص )")
 }

if ( x == "خاص"){
alert("في الوقت الحالي نملك عقدا مع المستشفى التخصصي ")
var numofpic = prompt("سأعرض عليك صورة المستشفى , كم مرة تود رؤية ذلك؟")
numofpic=parseInt(numofpic)

for (var y=0; y<=numofpic; y++){ 
  document.write( "<section>" + "<h3>" + "خاص" + "<img src='http://alrai.com/uploads/images/2020/04/08/220691.jpg'>"+ "</section>")

}


}
 else if ( x == "حكومي"){ 
var DesiredHospital = prompt("ما المستشفى الذي ترغب بمراجعته ( مستشفى البشير /   مستشفى الجامعه الاردنيه) ?")

while (DesiredHospital != "مستشفى البشير" && DesiredHospital != "مستشفى الجامعه الاردنيه"){
DesiredHospital = prompt("يرجى الادخال بشكل صحيح (مستشفى البشير / مستشفى الجامعه الاردنيه)")
 }
 }

 if (DesiredHospital == "مستشفى البشير"){
   document.write("<p>"+"أهلا وسهلا سنكون سعيدين بتقديم الخدمة"+"</p>")
alert("  انت حر ... بس أنا ما بنصحك ")
}
else if  (DesiredHospital == "مستشفى الجامعه الاردنيه"){
document.write("<p>"+"أهلا وسهلا سنكون سعيدين بتقديم الخدمة"+"</p>")
alert(" أهلا و سهلا سنكون سعيدين بتقديم الخدمة , طبعا بعيد الشر عنك")
} 



 

