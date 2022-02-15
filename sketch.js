// Présenter
// Taux d'occupation des lits de réanimation par des patients
// Covid-19 en France au 20 janvier 2022, selon la région
// Source Statista
// Un bon exemple de *Pie Chart* https://p5js.org/examples/form-pie-chart.html

var letter = 'A';
var data = [["Provence-Alpes-Côte d'Azur", 100],
            ["Corse", 100],
            ["Île-de-France", 86],
            ["Auvergne-Rhône-Alpes", 85],
            ["Bourgogne-Franche-Comté", 81],
            ["Occitanie", 77],
            ["Centre-Val de Loire", 63],
            ["Hauts-de-France", 62],
            ["Pays de la Loire", 59],
            ["Grand Est", 56],
            ["Normandie", 55],
            ["Nouvelle-Aquitaine", 55],
            ["Bretagne", 54]
           ]
let x=50
let y=50

function setup() {
  createCanvas(660, 550);
  background(255);
  colorMode(HSL);
  textAlign(CENTER);
  for (let i = 0; i < data.length; i++){
    let couleur=map(data[i][1],0,100,108,0)
    if (data[i][0]=="Provence-Alpes-Côte d'Azur"){
      x=70;
      y=100;
    }
    else if (data[i][0]=="Corse"){
      x=170;
      y=100;
    }
    else if (data[i][0]=="Île-de-France"){
      x=270;
      y=100;
    }
     else if (data[i][0]=="Auvergne-Rhône-Alpes"){
      x=370;
      y=100;
    }
      else if (data[i][0]=="Bourgogne-Franche-Comté"){
      x=470;
      y=100;
    }
     else if (data[i][0]=="Occitanie"){
      x=570;
      y=100;
    }
      else if (data[i][0]=="Centre-Val de Loire"){
      x=70;
      y=250;
    }
      else if (data[i][0]=="Hauts-de-France"){
      x=170;
      y=250;
    }  else if (data[i][0]=="Centre-Val de Loire"){
      x=270;
      y=250;
    }  else if (data[i][0]=="Pays de la Loire"){
      x=370;
      y=250;
    }  else if (data[i][0]=="Grand Est"){
      x=470;
      y=250;
    }  else if (data[i][0]=="Normandie"){
      x=570;
      y=250;
    }  else if (data[i][0]=="Nouvelle-Aquitaine"){
      x=270;
      y=250;
    }
       else if (data[i][0]=="Bretagne"){
      x=70;
      y=400;
    }
      fill(couleur,80,50);
      console.log(data[i][0] + ": " + data[i][1])
      arc(x, y, 80, 80, 0, 2*PI*(data[i][1]/100), PIE);
      fill(0)
  }
  push()
      textFont("roboto-medium",11);
  text("PACA", 70, 160);
  text("Corse", 170, 160);
  text("Ile de France", 270, 160);
  text("Auverge Rhone Alpes", 370, 160);
  text("Bourgogne", 470, 160);
  text("Occitanie", 570, 160);
  text("Centre", 70, 320);
  text("Haut de France", 170, 320);
  text("Pays de la Loire", 270, 320);
  text("Grand Est", 370, 320);
  text("Normandie", 470, 320);
  text("Nouvelle Aquitaine", 570, 320);
  text("Bretagne", 70, 480);
  pop();
  push()
      textFont("roboto-medium",17)
  text("Taux de lits occupés par région", width/2, 30);
  pop();
  text("100%", 70, 120);
  text("100%", 170, 120);
  text("86%", 270, 120);
  text("85%", 370, 120);
  text("81%", 470, 120);
  text("77%", 570, 120);
  text("63%", 70, 270);
  text("62%", 170, 270);
  text("59%", 270, 270);
  text("56%", 370, 270);
  text("55%", 470, 270);
  text("55%", 570, 270);
  text("54%", 70, 420);
    push()
      textFont("roboto-thin",16)
  text("Source : Statista", 570, 530);
  pop()


}
function draw() {}
  