function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
;
describe_city("Karachi", "Pakistan");
describe_city("Islamabad");
describe_city("Istanbul", "Turkey");
