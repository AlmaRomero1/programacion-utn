function allParrafo(){

    const all = document.getElementsByTagName('p');
    console.log(all)

    const num = all.length;//7
    console.log(num)

    alert (`Hay ${num} elementos p dentro de este documento`)

}

function caja1P(){
    const caja1 = document.getElementById('caja1');
    console.log(caja1)

    const caja1P = caja1.getElementsByTagName('p');
    console.log(caja1P)

    const num = caja1P.length;
    console.log(num)//5

    alert (`Hay ${num} elementos p dentro de la caja 1`)

}

function caja2P(){
    const caja2 = document.getElementById('caja2');
    console.log(caja2)

    const caja2P = caja2.getElementsByTagName('p');
    console.log(caja2P)

    const num = caja2P.length;
    console.log(num)//2

    alert (`Hay ${num} elementos p dentro de la caja 1`)

}





