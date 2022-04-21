import {series} from './data.js';
import {Serie} from './Serie.js';

let seriesTable: HTMLElement = document.getElementById("series")!;
let tarjetaSerie: HTMLElement = document.getElementById("tarjetaSerie")!;
const filasTablaSerie: HTMLElement[] = [];

mostrarSeries(series);
mostrarPromedio(series);
mostrarCard('', series);

for(let fila of filasTablaSerie){
    fila.onclick = () => mostrarCard(fila.children[1].textContent||'',series);
}


function mostrarCard(nombreSerie:string, series: Serie[]):void{
    let serie = nombreSerie==''? series: series.filter( p => p.name.match(nombreSerie));
    tarjetaSerie.innerHTML = `
    <img src="${serie[0].image}" class="card-img-top" alt="No se ha podido cargar la imagen">
    <div class="card-body">
        <h5 class="card-title">${serie[0].name}</h5>
        <p class="card-text">${serie[0].sinopsis}</p>
        <a href="${serie[0].moreInfo}" target="_blank">${serie[0].moreInfo}</a>
    </div>`;
}

function mostrarSeries(listaSeries: Serie[]): void {
    for(let serie of listaSeries){
        let tRowSeries = document.createElement("tr");
        tRowSeries.style.setProperty('background-color','#F2F3F2');
        tRowSeries.innerHTML = `
        <th scope="row">${serie.id}</th>
        <td style="color:blue">${serie.name}</td>
        <td>${serie.chanel}</td>
        <td>${serie.seasons}</td>`;
        filasTablaSerie.push(tRowSeries);
        seriesTable.appendChild(tRowSeries);
    }
}

function mostrarPromedio(listaSeries:Serie[]):void{
    let tRowPromedio = document.createElement("tr");
    tRowPromedio.innerHTML =
    `<th scope="row" colspan="4">Seasons avarage: ${calcularMedia(listaSeries)}</th>`;
    seriesTable.appendChild(tRowPromedio);
}

function calcularMedia(listaSeries:Serie[]):number{
    let promedio: number = 0;
    for(let i= 0; i<listaSeries.length; i++){
        let serie: Serie = listaSeries[i];
        promedio += serie.seasons;
    }
    promedio /= listaSeries.length;
    return promedio;
}