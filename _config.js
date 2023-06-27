var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: ' mongodb+srv://Emily:CzNx1ryDwGqnitsl@cluster0.dmeduzo.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: ' mongodb+srv://Emily:CzNx1ryDwGqnitsl@cluster0.dmeduzo.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: ' mongodb+srv://Emily:CzNx1ryDwGqnitsl@cluster0.dmeduzo.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
