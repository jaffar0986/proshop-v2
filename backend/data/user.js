import bcrypt from "bcryptjs"

const users = [
    {
        name: 'Admin User',
        eamil: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Mohammad Ali',
        eamil: 'ali@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Irtika Ahmad',
        eamil: 'ahmad@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
];

export default users;