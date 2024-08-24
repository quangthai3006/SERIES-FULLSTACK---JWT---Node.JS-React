
const handleHelloWorld = (req, res) => {
    let name = "Sniper"
    return res.render("home.ejs", {name})
}

const handleUser = (req, res) => {
    return res.render("user.ejs")
}

module.exports = {
    handleHelloWorld,
    handleUser
}