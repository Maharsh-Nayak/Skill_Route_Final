let div = document.querySelectorAll(".roadmap .tab-content button");
let bar = document.querySelector(".progress .progress-bar");
let p=document.querySelector(".per");
let src=document.querySelectorAll("iframe");
// let a=document.querySelectorAll(".accordion-body a");

for(let i=0 ; i<src.length ; i++)
{
    // src[i].setAttribute("src", "https://www.youtube.com/embed/oW2r0r_i5Ps?si=7mrUMCXs7LU3QE0G");
    // a[i].setAttribute("src","https://www.geeksforgeeks.org/writing-first-c-program-hello-world-example/?ref=lbp");
    src[i].setAttribute("width" , "100%");
}

let per=0;

let cb=[];
for(let i=0 ; i<div.length ; i++)
{
    let b = document.createElement("input");
    b.setAttribute("class", "form-check-input");
    b.setAttribute("type" , "checkbox");
    b.style.margin= "10px";
    cb.push(b);
}

for (let i = 0; i < div.length; i++) {
    div[i].insertAdjacentElement("afterbegin",cb[i]);
}

div.forEach(function (el) {
    el.addEventListener("click",score , { once: true });
});

function score(){
    per+=9;
    console.log(this);
    this.style.backgroundColor = "#198754";
    // this.style.color="#0D6EFD";
    this.style.fontWeight="900";
    bar.style.width=`${[per]}%`;
    if(per < 99){
        p.innerHTML=`${parseInt(per)}%`;
    }
    else{
        p.innerHTML="100%";
        bar.style.width+=10;
    }
}
