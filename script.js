async function getUsers() {
  try {
    const response = await axios.get("https://api.spacexdata.com/v3/rockets");
    this.data = response.data;
    let x = response.data;
    console.log(x);
  } catch (error) {
    console.error(error);
  }
}

function move() {
  console.log(this.data);

  let x = this.data;

  // for (var id1 in x) {
  //   postObj = x[id1];

  // }
  let first = this.data[0].first_stage.fuel_amount_tons;
  let second = this.data[0].second_stage.fuel_amount_tons;

  let falcon1 =  (first + second);

  var div = document.getElementById("start");
  div.id = "image1";
  div.className = "image1";

  var div1 = document.getElementById("start1");
  div1.className = "image2";
  div1.id = "image2";

  var div2 = document.getElementById("start2");
  div2.className = "image3";
  div2.id = "image3";
  // do your thing

  var el1 = document.getElementById("image1");

  el1.style.animation = "none";
  el1.offsetHeight; /* trigger reflow */
  el1.style.animation = "";
  el1.style.animationDuration = `${falcon1}s`;

  var el = document.getElementById("image2");
  el.style.animation = "none";
  el.offsetHeight; /* trigger reflow */
  el.style.animation = "";
  el.style.animationDuration = `${falcon1}s`;

  var el2 = document.getElementById("image3");
  el2.style.animation = "none";
  el2.offsetHeight; /* trigger reflow */
  el2.style.animation = "";
  el2.style.animationDuration = `${falcon1}s`;

  var el3 = document.getElementById("myProgress");
  el3.style.animation = "none";
  el3.offsetHeight; /* trigger reflow */
  el3.style.animation = "";
  el3.style.animationDuration = `${falcon1 }s`;

  let elem = document.getElementById("myBar");
  let width = 10;
  let id = setInterval(frame, falcon1*100);
  function frame() {
    if (width >= 50) {
      clearInterval(id);
    } else {
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
      width--;
    }
  }
  

  el.id = "start1";
  el1.id = "start";
  el2.id = "start2";
}

function move1() {
  console.log(this.data);

  let x = this.data;
  console.log(this.data);
  console.log(x);
  for (var id1 in x) {
    postObj = x[id1];
  }
  let first = this.data[1].first_stage.fuel_amount_tons;
  let second = this.data[1].second_stage.fuel_amount_tons;

  let falcon1 = 10 * (first + second);

  var div = document.getElementById("start01");
  div.id = "falcon91";
  div.className = "falcon91";

  var div1 = document.getElementById("start11");
  div1.className = "falcon92";
  div1.id = "falcon92";

  var div2 = document.getElementById("start12");
  div2.className = "falcon93";
  div2.id = "falcon93";
  // do your thing

  var el1 = document.getElementById("falcon91");

  el1.style.animation = "none";
  el1.offsetHeight; /* trigger reflow */
  el1.style.animation = "";
  el1.style.animationDuration = `${falcon1 / 10}s`;

  var el = document.getElementById("falcon92");
  el.style.animation = "none";
  el.offsetHeight; /* trigger reflow */
  el.style.animation = "";
  el.style.animationDuration = `${falcon1 / 10}s`;

  var el2 = document.getElementById("falcon93");
  el2.style.animation = "none";
  el2.offsetHeight; /* trigger reflow */
  el2.style.animation = "";
  el2.style.animationDuration = `${falcon1 / 10}s`;

  var el3 = document.getElementById("myProgress1");
  el3.style.animation = "none";
  el3.offsetHeight; /* trigger reflow */
  el3.style.animation = "";
  el3.style.animationDuration = `${falcon1 / 10}s`;

  let elem = document.getElementById("myBar1");
  let width = 10;
  let id = setInterval(frame, falcon1);
  function frame() {
    if (width >= 50) {
      clearInterval(id);
    } else {
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
      width--;
    }
  }
  

  el.id = "start01";
  el1.id = "start11";
  el2.id = "start12";
}
function move2() {
  console.log(this.data);

  let x = this.data;
  console.log(this.data);
  console.log(x);
  for (var id1 in x) {
    postObj = x[id1];
  }
  let first = this.data[2].first_stage.fuel_amount_tons;
  let second = this.data[2].second_stage.fuel_amount_tons;

  let falcon1 = 10 * (first + second);

  var div = document.getElementById("start011");
  div.id = "falconheavy1";
  div.className = "falconheavy1";

  var div1 = document.getElementById("start012");
  div1.className = "falconheavy2";
  div1.id = "falconheavy2";

  var div2 = document.getElementById("start013");
  div2.className = "falconheavy3";
  div2.id = "falconheavy3";
  // do your thing

  var el1 = document.getElementById("falconheavy1");

  el1.style.animation = "none";
  el1.offsetHeight; /* trigger reflow */
  el1.style.animation = "";
  el1.style.animationDuration = `${falcon1 / 10}s`;

  var el = document.getElementById("falconheavy2");
  el.style.animation = "none";
  el.offsetHeight; /* trigger reflow */
  el.style.animation = "";
  el.style.animationDuration = `${falcon1 / 10}s`;

  var el2 = document.getElementById("falconheavy3");
  el2.style.animation = "none";
  el2.offsetHeight; /* trigger reflow */
  el2.style.animation = "";
  el2.style.animationDuration = `${falcon1 / 10}s`;

  var el3 = document.getElementById("myProgress2");
  el3.style.animation = "none";
  el3.offsetHeight; /* trigger reflow */
  el3.style.animation = "";
  el3.style.animationDuration = `${falcon1 / 10}s`;

  let elem = document.getElementById("myBar2");
  let width = 10;
  let id = setInterval(frame, falcon1);
  function frame() {
    if (width >= 50) {
      clearInterval(id);
    } else {
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
      width--;
    }
  }
  

  el.id = "start011";
  el1.id = "start012";
  el2.id = "start013";
}
function move3() {
  console.log(this.data);

  let x = this.data;
  console.log(this.data);
  console.log(x);
  for (var id1 in x) {
    postObj = x[id1];
  }
  let first = this.data[3].first_stage.fuel_amount_tons;
  let second = this.data[3].second_stage.fuel_amount_tons;

  let falcon1 = 10 * (first + second);

  var div = document.getElementById("start0111");
  div.id = "bfr1";
  div.className = "bfr1";

  var div1 = document.getElementById("start0112");
  div1.className = "bfr2";
  div1.id = "bfr2";

  var div2 = document.getElementById("start0113");
  div2.className = "bfr3";
  div2.id = "bfr3";
  // do your thing

  var el1 = document.getElementById("bfr1");

  el1.style.animation = "none";
  el1.offsetHeight; /* trigger reflow */
  el1.style.animation = "";
  el1.style.animationDuration = `${falcon1 / 10}s`;

  var el = document.getElementById("bfr2");
  el.style.animation = "none";
  el.offsetHeight; /* trigger reflow */
  el.style.animation = "";
  el.style.animationDuration = `${falcon1 / 10}s`;

  var el2 = document.getElementById("bfr3");
  el2.style.animation = "none";
  el2.offsetHeight; /* trigger reflow */
  el2.style.animation = "";
  el2.style.animationDuration = `${falcon1 / 10}s`;

  var el3 = document.getElementById("myProgress3");
  el3.style.animation = "none";
  el3.offsetHeight; /* trigger reflow */
  el3.style.animation = "";
  el3.style.animationDuration = `${falcon1 / 10}s`;

  let elem = document.getElementById("myBar3");
  let width = 10;
  let id = setInterval(frame, falcon1);
  function frame() {
    if (width >= 50) {
      clearInterval(id);
    } else {
      elem.style.width = width + "%";
      elem.innerHTML = width * 1 + "%";
      width--;
    }
  }
  // const r11 = x[0].first_stage.fuel_amount_tons
  // const r12 = x[0].second_stage.fuel_amount_tons

  // const r21 = x[1].first_stage.fuel_amount_tons
  // const r22 = x[1].second_stage.fuel_amount_tons

  // const r31 = x[2].first_stage.fuel_amount_tons
  // const r32 = x[2].second_stage.fuel_amount_tons

  // const r41 = x[3].first_stage.fuel_amount_tons
  // const r42 = x[3].second_stage.fuel_amount_tons

  // console.log(falcon1);
  // console.log(typeof falcon1);

  el.id = "start0111";
  el1.id = "start0112";
  el2.id = "start0113";
}


function start() {
  getUsers();
  setTimeout(function() {
    move();
  }, 1000);
  setTimeout(function() {
    move1();
  }, 1000);
  setTimeout(function() {
    move2();
  }, 1000);
  setTimeout(function() {
    move3();
  }, 1000);


}
