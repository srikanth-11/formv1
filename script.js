// created div element of class container 
let container=document.createElement("div")
    container.classList.add("container")
// created form element 
let form1=document.createElement("form")
    form1.id="myform"
// created row element and two columns to float left side by side.we have used 9rows
let row1=document.createElement("div")
    row1.classList.add("row")
let col1=document.createElement("div")
    col1.classList.add("col-1")
let label1=document.createElement("label")
    label1.setAttribute("for","firstname")
    label1.innerHTML="FIRST NAME"
col1.append(label1)
row1.append(col1)
let col2=document.createElement("div")
    col2.classList.add("col-2")
let input1=document.createElement("input")
    input1.setAttribute("type","text")
    input1.setAttribute("class","i")
    input1.setAttribute("name","firstname")
    input1.setAttribute("placeholder","FIRST NAME")
    input1.id="fn"
    input1.required=true
col2.append(input1)
row1.append(col2)
form1.append(row1)
let row2=document.createElement("div")
    row2.classList.add("row")
let col3=document.createElement("div")
    col3.classList.add("col-1")
let label2=document.createElement("label")
    label2.setAttribute("for","lastname")
    label2.innerHTML="LAST NAME"
col3.append(label2)
row2.append(col3)
let col4=document.createElement("div")
    col4.classList.add("col-2")
let input2=document.createElement("input")
    input2.setAttribute("type","text")
    input2.setAttribute("class","i")
    input2.setAttribute("name","lastname")
    input2.setAttribute("placeholder","LAST NAME")
    input2.required=true
    input2.id="ln"
col4.append(input2)
row2.append(col4)
form1.append(row2)
let row3=document.createElement("div")
    row3.classList.add("row")
let col5=document.createElement("div")
    col5.classList.add("col-1")
let label3=document.createElement("label")
    label3.setAttribute("for","address")
    label3.innerHTML="ADDRESS"
col5.append(label3)
row3.append(col5)
let col6=document.createElement("div")
    col6.classList.add("col-2")
let input3=document.createElement("input")
    input3.setAttribute("type","text")
    input3.setAttribute("class","i")
    input3.setAttribute("name","address")
    input3.setAttribute("placeholder","ADDRESS")
    input3.required=true
    input3.id="ad"
col6.append(input3)
row3.append(col6)
form1.append(row3)
let row4=document.createElement("div")
    row4.classList.add("row")
let col7=document.createElement("div")
    col7.classList.add("col-1")
let label4=document.createElement("label")
    label4.setAttribute("for","pincode")
    label4.innerHTML="PINCODE"
col7.append(label4)
row4.append(col7)
let col8=document.createElement("div")
    col8.classList.add("col-2")
let input4=document.createElement("input")
    input4.setAttribute("type","text")
    input4.setAttribute("class","i")
    input4.setAttribute("name","pincode")
    input4.setAttribute("placeholder","PINCODE")
    input4.required=true
    input4.id="pc"
col8.append(input4)
row4.append(col8)
form1.append(row4)
let row5=document.createElement("div")
    row5.classList.add("row")
let col9=document.createElement("div")
    col9.classList.add("col-1")
let label5=document.createElement("label")
    label5.setAttribute("for","gender")
    label5.innerHTML="GENDER"
col9.append(label5)
row5.append(col9)
let col10=document.createElement("div")
    col10.classList.add("col-2")
let input5=document.createElement("input")
    input5.setAttribute("type","text")
    input5.setAttribute("class","i")
    input5.setAttribute("name","gender")
    input5.setAttribute("placeholder","GENDER")
    input5.required=true
    input5.id="ge"
col10.append(input5)
row5.append(col10)
form1.append(row5)
let row6=document.createElement("div")
    row1.classList.add("row")
let col11=document.createElement("div")
    col11.classList.add("col-1")
let label11=document.createElement("label")
    label11.setAttribute("for","choice of food")
    label11.innerHTML="CHOICE OF FOOD"
col11.append(label11)
row6.append(col11)
let col12=document.createElement("div")
    col12.classList.add("col-2")
let input6=document.createElement("select")
    input6.setAttribute("name","food[]")
    input6.setAttribute("class","i")
    input6.required=true
    input6.multiple=true
    input6.id="fo"
let op1=document.createElement("option")
    op1.setAttribute("value","INDIAN")
    op1.innerHTML="INDIAN"
input6.append(op1)
let op2=document.createElement("option")
    op2.setAttribute("value","CHINESE")
    op2.innerHTML="CHINESE"
input6.append(op2)
let op3=document.createElement("option")
    op3.setAttribute("value","MEXICAN")
    op3.innerHTML="MEXICAN"
input6.append(op3)
let op4=document.createElement("option")
    op4.setAttribute("value","RUSSIAN")
    op4.innerHTML="RUSSIAN"
input6.append(op4)
let op5=document.createElement("option")
    op5.setAttribute("value","CONTINENTAL")
    op5.innerHTML="CONTINENTAL"
input6.append(op5)
col12.append(input6)
row6.append(col12)
form1.append(row6)
let row7=document.createElement("div")
    row7.classList.add("row")
let col13=document.createElement("div")
    col13.classList.add("col-1")
let label7=document.createElement("label")
    label7.setAttribute("for","state")
    label7.innerHTML="STATE"
col13.append(label7)
row7.append(col13)
let col14=document.createElement("div")
    col14.classList.add("col-2")
let input7=document.createElement("input")
    input7.setAttribute("type","text")
    input7.setAttribute("class","i")
    input7.setAttribute("name","state")
    input7.setAttribute("placeholder","STATE")
    input7.required=true
    input7.id="st"
col14.append(input7)
row7.append(col14)
form1.append(row7)
let row8=document.createElement("div")
    row8.classList.add("row")
let col15=document.createElement("div")
    col15.classList.add("col-1")
let label8=document.createElement("label")
    label8.setAttribute("for","country")
    label8.innerHTML="COUNTRY"
col15.append(label8)
row8.append(col15)
let col16=document.createElement("div")
    col16.classList.add("col-2")
let input8=document.createElement("input")
    input8.setAttribute("type","text")
    input8.setAttribute("class","i")
    input8.setAttribute("name","country")
    input8.setAttribute("placeholder","COUNTRY")
    input8.required=true
    input8.id="co"
col16.append(input8)
row8.append(col16)
form1.append(row8)
let row9=document.createElement("div")
    row9.classList.add("row")
let input9=document.createElement("input")
    input9.setAttribute("type","submit")
    input9.innerHTML="SUBMIT"
row9.append(input9)
form1.append(row9)
var tab=document.createElement("table")
          tab.style.width="100%"
          tab.style.border="1"
          tab.classList.add("jo")
          tab.style.overflow="auto"
var tr1=document.createElement("tr")
var th1=document.createElement("th")
           th1.innerHTML="FIRST NAME"
var th2=document.createElement("th")
           th2.innerHTML="LAST NAME"
var th3=document.createElement("th")
           th3.innerHTML="ADDRESS"
var th4=document.createElement("th")
            th4.innerHTML="PINCODE"
var th5=document.createElement("th")
            th5.innerHTML="GENDER"
var th6=document.createElement("th")
            th6.innerHTML="CHOICE OF FOOD"
var th7=document.createElement("th")
            th7.innerHTML="STATE"
var th8=document.createElement("th")
            th8.innerHTML="COUNTRY"
var tr2=document.createElement("tr")
var td1=document.createElement("td")
var td2=document.createElement("td")
var td3=document.createElement("td")
var td4=document.createElement("td")
var td5=document.createElement("td")
var td6=document.createElement("td")
var td7=document.createElement("td")
var td8=document.createElement("td")

form1.onsubmit=function(e){
e.preventDefault()
var fn=document.getElementById("fn").value
var ln=document.getElementById("ln").value
var ad=document.getElementById("ad").value
var pc=document.getElementById("pc").value
var ge=document.getElementById("ge").value
var fo=document.getElementById("fo").value
var st=document.getElementById("st").value
var co=document.getElementById("co").value
td1.innerHTML=fn
td2.innerHTML=ln
td3.innerHTML=ad
td4.innerHTML=pc
td5.innerHTML=ge
td6.innerHTML=fo
td7.innerHTML=st
td8.innerHTML=co
tr1.append(th1,th2,th3,th4,th5,th6,th7,th8)
tab.append(tr1)
tr2.append(td1,td2,td3,td4,td5,td6,td7,td8)
tab.append(tr2)
form1.append(tab)
}
container.append(form1)
document.body.append(container)
  
