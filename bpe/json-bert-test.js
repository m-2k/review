function check() {
    var res = true;
    //@TODO: MORE TEST DATA
    testData = [
        1,
        [1, 2, 3],
        "string",
        {tup: 'io', code: 'login', data: {tup: '$', 0: 'Auth', 1: 12}},
        {tup: 'io', code: 'login', data: {tup: 'Auth'}},
        {tup: 'io', code: 'login', data: {tup: '$', 0: 'пизда', 1: 12}},
        {tup: 'Roster', userlist: [{tup: 'Contact'}], status: 'get'},
        {tup: 'p2p', from: 'хуй', to: 'пизда'},
        {tup: 'Profile', accounts: [1], status: 'maxim'}
    ];
    testData.forEach(function (o) {
        var o = JSON.stringify(o);
        var d = JSON.stringify(decode(dec(enc(encode(o)).buffer))).replace(/\\/g, '');

        if (JSON.stringify(o) != JSON.stringify(decode(dec(enc(encode(o)).buffer)))) {
            console.log("Original: " + o + " <=> Decode: " + d + " %c [Error]", "color: red");
            res = false;
        } else {
            console.log("Data: " + o + " %c [OK]", "color: green");
        }
    });

    return res;
}
