module.exports.users = async(req, res) => {
    let db = req.db;
    let response;
    try {
         response = await db.collection('users').find();
    } catch (ex) {
        console.error(ex);
    }
    res.send(response);
};

module.exports.register = async(req, res) => {
    let db = req.db;
    let found;
    try {
         found = await db.collection('users').find({
            login: req.body.login
        });
        if (found.length > 0) res.send('User exists!');
        else {
            let response = await db.collection('users').insert({
                login: req.body.login,
                password: req.body.password
            });
            console.log(response);
            res.status(200).send('User created');
        }
    } catch (ex) {
        console.error(ex);
    }
};

module.exports.login = async(req, res) => {
    let db = req.db;
    let found;
    try {
         found = await db.collection('users').find({
            login: req.headers.login
        });
        if (found.length > 0) {
            if (req.headers.password === found[0].password) {
                res.status(200).send('correct password');
            } else {
                res.status(400).send('incorrect password');
            }
        } else {
            res.status(401).send('user does not exist')
        };
    } catch (ex) {
        console.error(ex);
    }
};
