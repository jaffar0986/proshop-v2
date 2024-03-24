import bcrypt from "bcryptjs"

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Mohammad Ali',
        email: 'ali@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Irtika Ahmad',
        email: 'ahmad@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
];

export default users;