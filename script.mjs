console.log("Javascript Runing....")

function Check() {
     let Karachi = document.getElementById("Karachi").value   
     
     console.log("Temp.." + Karachi);

     result = "";

     if (Karachi>=60) {
        result = "🥵 Garmi Hai Garmi";
     } 
     else if(Karachi>=40){
       result = "☀️ Garmi ka mausam hai.";
     }
     
     else if(Karachi>=30){
       result = "🌤 Mausam theek hai.";
     }
     else if(Karachi>=20){
       result = "❄ Sardi Hai Or Thandi hawa chal rahi hai.";
     }
     else if(Karachi>=20){
       result = "🧥 Sardi Hai Jacket Pehen Kar Jao";
     }
     else if(Karachi>=10){
       result = "🤧 Bimar Hojyengy Bahar Na niklen";
     }
     else{
         result = "🥶 Boht zyada sardi hai!";
     }
     
         document.getElementById("result").innerText = "Karachi Weather. "+Karachi+ "° " +result;
     
}