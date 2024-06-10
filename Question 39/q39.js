// Method 01.
function city_country(city, country) {
    return city + country;
}
;
var pair = city_country("Lahore", " Pakistan");
console.log(pair);
var pair2 = city_country("Tokyo", " Japan");
console.log(pair2);
var pair3 = city_country("New York", " USA");
console.log(pair3);
// Method 02:
function city_with_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
;
console.log(city_with_country("Lahore", "Pakistan"));
console.log(city_with_country("Tokyo", " Japan"));
console.log(city_with_country("New York", " USA"));
