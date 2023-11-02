
export const toObject = array => Object.assign({}, ...array);

export const getNextBidAmount = (price) => {
    let increase = 0;

    if (price >= 0 && price <= 500) {
        increase = 50;
    } else if (price >= 501 && price <= 1000) {
        increase = 100;
    } else if (price >= 1001 && price <= 2000) {
        increase = 150;
    } else if (price >= 2001 && price <= 5000) {
        increase = 200;
    }
    else if (price >= 5001 && price <= 10000) {
        increase = 300;
    }
    else if (price >= 10001 && price <= 20000) {
        increase = 500;
    }
    else if (price >= 20001 && price <= 50000) {
        increase = 1000;
    }
    else if (price >= 50001 && price <= 100000) {
        increase = 2000;
    }
    else if (price >= 100001) {
        increase = 5000;
    }


    return price + increase;
}

export const getDepositeAmount = (price) => {
    let deposite = 0;

    if (price >= 0 && price <= 500) {
        deposite = 200;
    } else if (price >= 501 && price <= 1000) {
        deposite = 300;
    } else if (price >= 1001 && price <= 2000) {
        deposite = 400;
    } else if (price >= 2001 && price <= 5000) {
        deposite = 500;
    }
    else if (price >= 5001 && price <= 10000) {
        deposite = 1000;
    }
    else if (price >= 10001 && price <= 20000) {
        deposite = 2000;
    }
    else if (price >= 20001 && price <= 50000) {
        deposite = 5000;
    }
    else if (price >= 50001 && price <= 100000) {
        deposite = 10000;
    }
    else if (price >= 100001) {
        deposite = 20000;
    }


    return deposite;
}
