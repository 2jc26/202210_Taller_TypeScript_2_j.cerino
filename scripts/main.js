import { series } from './data.js';
var seriesTable = document.getElementById("series");
var tarjetaSerie = document.getElementById("tarjetaSerie");
var filasTablaSerie = [];
mostrarSeries(series);
mostrarPromedio(series);
mostrarCard('', series);
var _loop_1 = function (fila) {
    fila.onclick = function () { return mostrarCard(fila.children[1].textContent || '', series); };
};
for (var _i = 0, filasTablaSerie_1 = filasTablaSerie; _i < filasTablaSerie_1.length; _i++) {
    var fila = filasTablaSerie_1[_i];
    _loop_1(fila);
}
function mostrarCard(nombreSerie, series) {
    var serie = nombreSerie == '' ? series : series.filter(function (p) { return p.name.match(nombreSerie); });
    tarjetaSerie.innerHTML = "\n    <img src=\"".concat(serie[0].image, "\" class=\"card-img-top\" alt=\"No se ha podido cargar la imagen\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">").concat(serie[0].name, "</h5>\n        <p class=\"card-text\">").concat(serie[0].sinopsis, "</p>\n        <a href=\"").concat(serie[0].moreInfo, "\" target=\"_blank\">").concat(serie[0].moreInfo, "</a>\n    </div>");
}
function mostrarSeries(listaSeries) {
    for (var _i = 0, listaSeries_1 = listaSeries; _i < listaSeries_1.length; _i++) {
        var serie = listaSeries_1[_i];
        var tRowSeries = document.createElement("tr");
        tRowSeries.style.setProperty('background-color', '#F2F3F2');
        tRowSeries.innerHTML = "\n        <th scope=\"row\">".concat(serie.id, "</th>\n        <td style=\"color:blue\">").concat(serie.name, "</td>\n        <td>").concat(serie.chanel, "</td>\n        <td>").concat(serie.seasons, "</td>");
        filasTablaSerie.push(tRowSeries);
        seriesTable.appendChild(tRowSeries);
    }
}
function mostrarPromedio(listaSeries) {
    var tRowPromedio = document.createElement("tr");
    tRowPromedio.innerHTML =
        "<th scope=\"row\" colspan=\"4\">Seasons avarage: ".concat(calcularMedia(listaSeries), "</th>");
    seriesTable.appendChild(tRowPromedio);
}
function calcularMedia(listaSeries) {
    var promedio = 0;
    for (var i = 0; i < listaSeries.length; i++) {
        var serie = listaSeries[i];
        promedio += serie.seasons;
    }
    promedio /= listaSeries.length;
    return promedio;
}
