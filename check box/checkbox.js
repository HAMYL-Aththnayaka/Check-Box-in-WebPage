window.alert(`රටම  අනුරට`);
const checkbox=document.getElementById("checkbox");
const radioo=document.getElementById("radioo");
const mst=document.getElementById("mst");
const pay=document.getElementById("pay");
const mySubmit=document.getElementById("mySubmit");
const subresult=document.getElementById("subresult");
const payresult=document.getElementById("payresult");
mySubmit.onclick=function(){
    
    if(checkbox.checked){
        subresult.textContent=`you are subscribed උබ මගෙ එකා`
        if(radioo.checked){
            payresult.textContent=`you choose to pay by radio`;
        }
        if(mst.checked){
            payresult.textContent=`You choose master card එලම මගෙ එකා`;
        }
        if(pay.checked){
            payresult.textContent=`yoy choose paypal මහින්ද මහත්තය් හින්ද තමා`;
        }   
    }
        else{
            window.alert(`ඊය කෙල්ලෙක් නැති එකා`);
    
            subresult.textContent=`you are not subscribed ඇයි එ???`;
        }
        if(radioo.checked){
            payresult.textContent=`you cant choose to pay by radio`;
        }
        if(mst.checked){
            payresult.textContent=`You cant choose master card එලම මගෙ එකා`;
        }
        if(pay.checked){
            payresult.textContent=`you cant choose paypal මහින්ද මහත්තය් හින්ද තමා`;
        }
    
}


