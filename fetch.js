let newPays = "";
let oldPays = "";

selectVille = document.getElementById("selectVille");
affichageVille = document.getElementById("affichageVille");

// FUNCTION //////////////////////////////////////////
const getPays = async function () {
    let response = await fetch('http://listevillepaysjs/cities');
    let data = await response.json();

    for (i = 0; i < data.length; i++) {
        newPays = data[i].countrycode.name;
        if (newPays !== oldPays) {
            // console.log(newPays);
            let opt = document.createElement("option");
            opt.value = newPays;
            opt.innerHTML = newPays;
            selectVille.appendChild(opt);
            oldPays = newPays;
        }
    }
    console.log(data);
}

const getVilleParPays = async function () {
    affichageVille.innerHTML = "";
    let response = await fetch('http://listevillepaysjs/cities');
    let data = await response.json();
    // console.log(data);
    let pays = selectVille.options[selectVille.selectedIndex].value;
    for (i = 0; i < data.length; i++) {
        if (pays == data[(i)].countrycode.name) {
            // console.log(data[(i)].name);
            let ville = document.createElement("p");
            ville.innerHTML = data[(i)].name;
            affichageVille.appendChild(ville);
        }
    }
}

// VUE ///////////////////////////////////////////////
getPays();
