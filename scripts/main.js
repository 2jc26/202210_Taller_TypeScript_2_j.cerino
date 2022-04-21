import { series } from './data.js';
var seriesTable = document.getElementById("series");
mostrarSeries(series);
function mostrarSeries(listaSeries) {
    var tbodySeries = document.createElement("tbody");
    for (var _i = 0, listaSeries_1 = listaSeries; _i < listaSeries_1.length; _i++) {
        var serie = listaSeries_1[_i];
        tbodySeries.innerHTML += "\n        <tr style=\"background-color:#F2F3F2\">\n        <th scope=\"row\">".concat(serie.id, "</th>\n            <td style=\"color:blue\">").concat(serie.name, "</td>\n            <td>").concat(serie.chanel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        </tr>");
    }
    tbodySeries.innerHTML += "<tr><th scope=\"row\" colspan=\"4\">Seasons avarage: ".concat(calcularMedia(listaSeries), "</th></tr>");
    seriesTable.appendChild(tbodySeries);
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
