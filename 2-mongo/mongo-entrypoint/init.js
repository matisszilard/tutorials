var db = connect(
    "mongodb://admin:admin@localhost:27017/admin"
);
db.createUser(
{
    user: "myUser",
    pwd: "myPassword",
    roles: [
        { role: "clusterMonitor", db: "admin"},
        { role: "read", db: "test" }
    ],
    passwordDigestor: "server",
})
