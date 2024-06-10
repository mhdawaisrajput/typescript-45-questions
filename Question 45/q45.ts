
function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car: any = { manufacturer, model};
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("kia", "Sportage", ["color", "white"], ["year", 2023]));
console.log(make_car("audi", "Gt etron5", ["color", "black"], ["abs", true]));