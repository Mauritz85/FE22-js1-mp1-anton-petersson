
//FÖRSTA DELEN

for(let i=1; i<=5; i++){
    const radText = document.createElement('p')
    document.body.appendChild(radText)
    radText.innerText = "Rad " + [i];
    radText.style.backgroundColor = `hsl(${[110 + 15*i]}, 80%, 80%)`;
    radText.style.color = `hsl(245, 100%, 70%)`;
    radText.style.fontSize = `${10*i}px`;
    radText.style.textAlign = 'center';
    
}

//ANDRA DELEN

const maindiv = document.createElement("div");
document.body.appendChild(maindiv)
maindiv.style.cssText = `
    display: flex; 
    justify-content: space-around
`;
maindiv.style.border = "1px solid black";
maindiv.style.padding = "50px 50px 50px 50px";

const tabelldiv1 = document.createElement("div");
maindiv.appendChild(tabelldiv1)
tabelldiv1.style.border = "10px solid hsl(245, 100%, 85%)";

const tabelldiv2 = document.createElement("div");
maindiv.appendChild(tabelldiv2)
tabelldiv2.style.border = "10px solid hsl(245, 100%, 85%)";

const tabelldiv3 = document.createElement("div");
maindiv.appendChild(tabelldiv3)
tabelldiv3.style.border = "10px solid hsl(245, 100%, 85%)";

const tabell1 =  [0, 1, 2, 3, 4, 5, 6, 7 ,8, 9]
for(let e=0; e<tabell1.length; e++){
    const radText = document.createElement('p')
    radText.innerText = tabell1[e];
    tabelldiv1.appendChild(radText);
    tabelldiv1.style.width = "50px"
    radText.style.margin = "0px"

    if (e%2 == 0){
        radText.style.backgroundColor = 'black'
        radText.style.color = 'white'
    }
    if (e == 4){
        radText.style.backgroundColor = 'hsl(245, 100%, 85%)'
    }


}

const tabell2 =  [0, 1, 2, 3, 4, 5, 6, 7 ,8, 9]
for(let e = tabell2.length - 1; e >= 0; e--){
    const radText = document.createElement('p')
    radText.innerText = tabell2[e];
    tabelldiv2.appendChild(radText)
    tabelldiv2.style.width = "50px"
    radText.style.margin = "0px"
    radText.style.textAlign = "center"
    if (e%2 == 0){
        radText.style.backgroundColor = 'black'
        radText.style.color = 'white'
    }
    if (e == 8){
        radText.style.backgroundColor = 'hsl(245, 100%, 85%)'
    }


}

const tabell3 =  ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta' ,'nio','tio']
for(let e=0; e<tabell1.length; e++){
    const radText = document.createElement('p')
    radText.innerText = tabell3[e];
    tabelldiv3.appendChild(radText)
    tabelldiv3.style.width = "50px"
    radText.style.margin = "0px"
    radText.style.textAlign = "right"
    if (e%2 == 0){
        radText.style.backgroundColor = 'black'
        radText.style.color = 'white'
    }
    if (e == 5){
        radText.style.backgroundColor = 'hsl(245, 100%, 85%)'
    }
}








