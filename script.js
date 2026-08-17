const screens=[...document.querySelectorAll(".screen")];
const input=document.getElementById("nameInput");
let userName="";
function show(id){screens.forEach(s=>s.classList.toggle("active",s.id===id))}
function cleanName(v){return v.trim().replace(/\s+/g," ").slice(0,30)}
function typeText(el,text){el.textContent="";let i=0;const t=setInterval(()=>{el.textContent+=text[i++];if(i>=text.length)clearInterval(t)},45)}
document.getElementById("nameBtn").onclick=()=>{
 userName=cleanName(input.value);
 if(!userName){document.getElementById("nameError").textContent="Please enter your name 💖";input.focus();return}
 document.getElementById("nameError").textContent="";
 ["welcomeName","birthdayName","messageName","finalName"].forEach(id=>document.getElementById(id).textContent=userName);
 show("welcomeScreen");
 setTimeout(()=>typeText(document.getElementById("welcomeText"),"Welcome to a little world created especially for you..."),500);
};
document.getElementById("worldBtn").onclick=()=>{show("birthdayScreen");confetti(70)};
document.getElementById("photosBtn").onclick=()=>show("photosScreen");
document.getElementById("messageBtn").onclick=()=>show("messageScreen");
document.getElementById("finalBtn").onclick=()=>show("finalScreen");
document.getElementById("openGiftBtn").onclick=()=>{
 document.getElementById("gift").textContent="🎉";
 document.getElementById("openGiftBtn").classList.add("hidden");
 document.getElementById("finalTitle").textContent="Surprise!";
 document.getElementById("finalSub").classList.add("hidden");
 document.getElementById("finalMessage").classList.remove("hidden");
 confetti(140);
};
document.getElementById("restartBtn").onclick=()=>{
 document.getElementById("openGiftBtn").classList.remove("hidden");
 document.getElementById("gift").textContent="🎁";
 document.getElementById("finalTitle").textContent="Ready?";
 document.getElementById("finalSub").classList.remove("hidden");
 document.getElementById("finalMessage").classList.add("hidden");
 input.value="";show("nameScreen");input.focus();
};
input.addEventListener("keydown",e=>{if(e.key==="Enter")document.getElementById("nameBtn").click()});
function confetti(n){
 const box=document.getElementById("confetti");
 for(let i=0;i<n;i++){const p=document.createElement("span");p.className="confetti-piece";p.style.left=Math.random()*100+"vw";p.style.animationDelay=Math.random()+ "s";p.style.transform=`rotate(${Math.random()*360}deg)`;box.appendChild(p);setTimeout(()=>p.remove(),4000)}
}