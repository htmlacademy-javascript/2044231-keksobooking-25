function random_number (min, max, num_of_decimals ){

    return +((Math.random() * (max - min + 1)) + min).toFixed(num_of_decimals);
}

random_number();