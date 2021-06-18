//loader
function loader() {
  var a = setTimeout(myFunction,0000)
  function myFunction() {
    document.querySelector(".loader").style.display = "none";
  }
}
  /*alert("This will take some time To load\nPlease make sure you have a decent Internet Connection\nLeft side of the page there is a blue stick hover on it and click on the sun icon to switch to Night mode");*/
//date
setInterval(time, 1000);
function time() {
  var d = new Date();
  document.getElementById('time').innerHTML = "Time:" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
// nav dropdown-f
document.querySelector("#nav-institute").addEventListener("mouseover", opener_f);
document.querySelector(".opener-f").addEventListener("mouseover", opener_f);
function opener_f() {
  document.querySelector(".opener-f").style.display = "flex"
}
document.querySelector("#nav-institute").addEventListener("mouseout", opener_fn);
document.querySelector(".opener-f").addEventListener("mouseout", opener_fn);
function opener_fn() {
  document.querySelector(".opener-f").style.display = "none";
}
// nav dropdown-s
document.querySelector(".nav-administration").addEventListener("mouseover", opener_s);
document.querySelector(".opener-s").addEventListener("mouseover", opener_s);
function opener_s() {
  document.querySelector(".opener-s").style.display = "flex"
}
document.querySelector(".nav-administration").addEventListener("mouseout", opener_sn);
document.querySelector(".opener-s").addEventListener("mouseout", opener_sn);
function opener_sn() {
  document.querySelector(".opener-s").style.display = "none";
}
// nav dropdown-t
document.querySelector(".nav-student").addEventListener("mouseover", opener_t);
document.querySelector(".opener-t").addEventListener("mouseover", opener_t);
function opener_t() {
  document.querySelector(".opener-t").style.display = "flex"
}
document.querySelector(".nav-student").addEventListener("mouseout", opener_tn);
document.querySelector(".opener-t").addEventListener("mouseout", opener_tn);
function opener_tn() {
  document.querySelector(".opener-t").style.display = "none";
}
// nav dropdown-ff
document.querySelector(".nav-department").addEventListener("mouseover", opener_ff);
document.querySelector(".opener-ff").addEventListener("mouseover", opener_ff);
function opener_ff() {
  document.querySelector(".opener-ff").style.display = "flex"
}
document.querySelector(".nav-department").addEventListener("mouseout", opener_ffn);
document.querySelector(".opener-ff").addEventListener("mouseout", opener_ffn);
function opener_ffn() {
  document.querySelector(".opener-ff").style.display = "none";
}
{
  document.querySelector(".update-box").addEventListener("mouseover", function () {
    document.getElementById("scroll").stop();
  });
  document.querySelector(".update-box").addEventListener("mouseout", function () {
    document.getElementById("scroll").start();
  });
}
document.querySelector(".imp-news").addEventListener("mouseover", function () {
  document.getElementsByClassName("scroll")[0].stop();
});
document.querySelector(".imp-news").addEventListener("mouseout", function () {
  document.getElementsByClassName("scroll")[0].start();
});

//crousel
const slides_1 = document.querySelector(".slides-1");
const slides_2 = document.querySelector(".slides-2");
const butt = document.querySelectorAll(".butt");
const n = document.querySelectorAll(".slides-1 img").length;
var i = 1;
var transX = 0;
setInterval(function () {
  if (i != n) {
    i++;
    transX -= 40;
  }
  else {
    i = 1;
    transX = 0;
  }
  slides_1.style.transform = `translateX(${transX}vw)`;
  slides_2.style.transform = `translateX(${transX}vw)`;
}, 3000);
butt.forEach((butt) => {
  butt.addEventListener("click", (event) => {
    if (event.target.id == "pre") {
      if (i != 1) {
        i--;
        transX += 40;
      } else {
        i = n;
        transX -= 400;
      }
    } else {
      if (i != n) {
        i++;
        transX -= 40;
      } else {
        i = 1;
        transX = 0;
      }
    }
    slides_1.style.transform = `translateX(${transX}vw)`;
    slides_2.style.transform = `translateX(${transX}vw)`;
  });
});

//counter
{
  const per_1 = 92;
  const per_2 = 87;
  const per_3 = 76;
  const per_4 = 58;
  const per_5 = 55;
  const per_6 = 50;
  var x1, x2, x3, x4, x5, x6;
  var my1, my2, my3, my4, my5, my6;
  function alertFunc() {
    if (x1 != 93 && x1 != undefined)
      return;
    if (my1 != undefined) {
      clearInterval(my1);
      clearInterval(my2);
      clearInterval(my3);
      clearInterval(my4);
      clearInterval(my5);
      clearInterval(my6);
    }
    (x1 = 0), (x2 = 0), (x3 = 0), (x4 = 0), (x5 = 0), (x6 = 0);
    my1 = setInterval(count_1, 3000 / 92);
    my2 = setInterval(count_2, 3000 / 87);
    my3 = setInterval(count_3, 3000 / 76);
    my4 = setInterval(count_4, 3000 / 58);
    my5 = setInterval(count_5, 3000 / 55);
    my6 = setInterval(count_6, 3000 / 50);
  }
  function count_1() {
    if (++x1 <= per_1) {
      document.getElementById("count-1").innerText = x1;
    } else clearInterval(my1);
  }
  function count_2() {
    if (++x2 <= per_2) {
      document.getElementById("count-2").innerText = x2;
    } else clearInterval(my2);
  }
  function count_3() {
    if (++x3 <= per_3) {
      document.getElementById("count-3").innerText = x3;
    } else clearInterval(my3);
  }
  function count_4() {
    if (++x4 <= per_4) {
      document.getElementById("count-4").innerText = x4;
    } else clearInterval(my4);
  }
  function count_5() {
    if (++x5 <= per_5) {
      document.getElementById("count-5").innerText = x5;
    } else clearInterval(my5);
  }
  function count_6() {
    if (++x6 <= per_6) {
      document.getElementById("count-6").innerHTML = x6;
    } else clearInterval(my6);
  }
}
//night mode not totally succesfull

{
  var x = 0;
  var d = new Date();
  if(d.getHours()<6||d.getHours()>=20)
  nightc();
  document.querySelector('.night').addEventListener("click", nightc)

  function nightc() {
    x++;
    if (x % 2 != 0) {
      //image
      document.querySelector(".night").style.backgroundImage = 'url("img/night.png")';
      //main
      var box_1 = document.querySelectorAll(".opener-box-1,.opener-box-2,.opener-f,.opener-s,.opener-t,.opener-ff,body,input,.nav-bar,select");
      for (let i = 0; i < box_1.length; i++)
        box_1[i].classList.add("jignesh");
      document.querySelector(".college-img h1").style.backgroundColor="rgb(17, 17, 17)";
        //collegelogo
      document.getElementById("center-logo").style.backgroundColor = "black";
      //nav-tex,opener-text
      //opener-text
      var opener_text = document.querySelectorAll(".opener-links li a,.box-content,.nav-bar a span,.icons a span,.explore h2,.programs a,.update-box h3,.programs p,.college-img h1,.place,.count h2,.count h2 span,.card p,.card a,.bottom div,.up div,.usefull a,input,select");
      for (var i = 0; i < opener_text.length; i++)
        opener_text[i].classList.add('ramesh');
      var icon = document.querySelectorAll(".nav-bar ul img");
      for (let i = 1; i < icon.length; i++) {
        icon[i].style.backgroundColor = "white";
        icon[i].style.borderRadius = "50%";
      }
      //explore
      document.querySelector(".program-1").classList.add('box-shadow');
      document.querySelector(".program-2").classList.add('box-shadow');
      document.querySelector(".program-3").classList.add('box-shadow');
      document.querySelector(".update-box h3").classList.add('box-shadow');
      //usefull
      document.querySelectorAll('.usefull div')[0].style.boxShadow = "0vw 0vw 0.7vw rgb(255, 255, 255)";
      document.querySelectorAll('.usefull div')[1].style.boxShadow = "0vw 0vw 0.7vw rgb(255, 255, 255)";
      document.querySelectorAll('.usefull div')[2].style.boxShadow = "0vw 0vw 0.7vw rgb(255, 255, 255)";
      var border_bottom=document.querySelectorAll(".usefull div ul li,.update-links li");
      for(let i=0;i<border_bottom.length;i++)
      border_bottom[i].style.borderBottom="0.1vw inset white"
      //contact us
      document.querySelector('.contact-us-box').style.boxShadow = "0 0 0.4vw rgb(255, 255, 255)";
      document.querySelector('.contact-us-box').style.border = "0.2vw inset rgb(255, 255, 255)"
    }
    else {
      //image
      document.querySelector(".night").style.backgroundImage = 'url("img/day.png")';
     //main
     var box_1 = document.querySelectorAll(".opener-box-1,.opener-box-2,.opener-f,.opener-s,.opener-t,.opener-ff,body,input,.nav-bar,select");
     for (let i = 0; i < box_1.length; i++)
       box_1[i].classList.remove("jignesh");
     document.querySelector(".college-img h1").style.backgroundColor="white";
      //collegelogo
      document.getElementById("center-logo").style.backgroundColor = "white";
      //nav-tex,opener-text
      //opener-text
      var opener_text = document.querySelectorAll(".opener-links li a,.box-content,.nav-bar a span,.icons a span,.explore h2,.programs a,.update-box h3,.programs p,.college-img h1,.place,.count h2,.count h2 span,.card p,.card a,.bottom div,.up div,.usefull a,input,select");
      for (var i = 0; i < opener_text.length; i++)
        opener_text[i].classList.remove('ramesh');
      var icon = document.querySelectorAll(".nav-bar ul img");
      for (let i = 1; i < icon.length; i++) {
        icon[i].style.borderRadius = "0";
      }
      //explore
      document.querySelector(".program-1").classList.remove('box-shadow');
      document.querySelector(".program-2").classList.remove('box-shadow');
      document.querySelector(".program-3").classList.remove('box-shadow');
      document.querySelector(".update-box h3").classList.remove('box-shadow');

      //usefull
      document.querySelectorAll('.usefull div')[0].style.boxShadow = "0vw 0vw 0.7vw rgb(0, 0, 0)";
      document.querySelectorAll('.usefull div')[1].style.boxShadow = "0vw 0vw 0.7vw rgb(0, 0, 0)";
      document.querySelectorAll('.usefull div')[2].style.boxShadow = "0vw 0vw 0.7vw rgb(0, 0, 0)";
      var border_bottom=document.querySelectorAll(".usefull div ul li,.update-links li");
      for(let i=0;i<border_bottom.length;i++)
      border_bottom[i].style.borderBottom="0.1vw inset black"
      //contact us
      document.querySelector('.contact-us-box').style.boxShadow = "0 0 0.4vw rgb(0,0,0)";
      document.querySelector('.contact-us-box').style.border = "0.2vw inset rgb(0,0, 0)";
    }
  }
}
