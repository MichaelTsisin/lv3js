function starterup() {
    nod = 0;
    nor = 0;

           ftr = document.getElementById("oneone");
    oneone = 0;

    mena = document.getElementById("onetwo");
          onetwo = 0;

           medrr = document.getElementById("onethree");
    onethree = 0;

              modd = document.getElementById("twoone");
    twoone = 0;

           doublee = document.getElementById("twotwo");
          twotwo = 0;

    tripr = document.getElementById("twothree");
    twothree = 0;

      rayy = [];
}

function setrn() {
    rayy = [];
                  nod = parseInt(document.querySelector('input[name="nod"]:checked').value);
    nor = parseInt(document.getElementById('nor').value);
}

function roller() {
              setrn();
    trn = nod * nor;
    for (var j = 0; j < trn; j++) {
              rayy[j] = getr(1, 6);
    }
    console.log("successful role");
             froq();
    dobuc();
               trup();
              menc();
    medc();
                 modc();
    dispr();
}

function froq() {
         if (nod === 1) oneone = getr(1, 6);
    else if (nod === 2) oneone = getr(2, 12);
         else oneone = getr(3, 18);
}

function medc() {
                rayy.sort();
                if (rayy.length % 2 === 0) {
            middleSum = rayy[rayy.length / 2] + rayy[rayy.length / 2 + 1];
            onethree = Math.round((middleSum / 2.0) * 10) / 10;
    }
              else {
        onethree = rayy[Math.round(rayy.length / 2)];
    }
}       

function menc() {
              Totalval = 0.0;
    for (var i = 0; i < rayy.length; i++) {
        Totalval += rayy[i];
          }
    onetwo = Math.round((Totalval / rayy.length) * 100) / 100;
}           



function dobuc() {
         if (nod === 2 || nod === 3) twotwo = getr(1, nor - 2); 
                 else twotwo = 0;
}

function modc() {
    let module = [];
          let maximal = 0 
    let countervar = 0;
     for (let i = 0; i < rayy.length; i++) {
                 const item = rayy[i];
        
        if (module[item]) {
            module[item]++;
                  } else {
            module[item] = 1;
        }

        if (countervar < module[item]) {
            maximal = item;
                      countervar = module[item];
        }
           }
    twoone = maximal;
}

function trup() {
                   if (nod === 3) twothree = getr(1, nor - 2);
    else twothree = 0;
}           

function getr(low, up) {
                         var mult = up - low + 1;
    var round = parseInt(Math.random() * mult) + low;
          return round;
}               

function dispr() {
    ftr.innerHTML = oneone;
                       doublee.innerHTML = onethree;
    tripr.innerHTML = twothree;
               mena.innerHTML = onetwo;
    medrr.innerHTML = onethree;
    modd.innerHTML = twoone;
}