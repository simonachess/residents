// Data set nurodo (sveikieji skaiciai) namo numeri ir gyventoju skaiciu kiekviename name,
// numeriai lyginiai - desineje, nelyginiia-kaireje
// 1. kiek gyvena gyventoju is viso
// 2. kiek gyventoju kaireje, kiek desineje
// 3. kiek vidutiniskai desineje ir kaireje

const data = [
    [1, 5],
    [2, 4],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 5],
    [7, 0],
    [8, 0],
    [9, 5],
    [10, 0]
]

function totalResidents(data) {
    let residents = [];
    data.forEach(resident => {
        residents.push(resident[1])
    });
    let totalResidents = residents.reduce((prev, current) => prev + current, 0);

    return totalResidents
}

console.log('total residents: ', totalResidents(data));

function calculateAverage(side, filterSide) {
    const filtered = side.filter(filterSide);
    let residents = filtered.reduce((prev, current) => prev + current[1], 0);
    let average = residents / filtered.length;

    return [residents, average]
}

console.log(calculateAverage(data, resident => resident[0] % 2 === 0));
console.log(calculateAverage(data, resident => resident[0] % 2 !== 0));