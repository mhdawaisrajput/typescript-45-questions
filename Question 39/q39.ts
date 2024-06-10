
// Method 01.
function city_country(city : string, country : string ){
    return city + country;
};
let pair : string = city_country("Lahore", " Pakistan");
console.log(pair);
let pair2 : string = city_country("Tokyo", " Japan");
console.log(pair2);
let pair3 : string = city_country("New York", " USA");
console.log(pair3);

// Method 02:
function city_with_country(city : string, country : string) : string {
    return `${city}, ${country}`
};
console.log(city_with_country("Lahore", "Pakistan"));
console.log(city_with_country("Tokyo", " Japan"));
console.log(city_with_country("New York", " USA"));