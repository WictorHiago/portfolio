module.exports = class mainController {

    static homePage(req,res) {
        res.render('home')
    }

    static aboutme(req,res) {
        res.render('pages/aboutme')
    }

    static skills(req,res) {
        res.render('pages/skills')
    }

    static projects(req,res) {
        res.render('pages/projects')
    }
    static contacts(req,res) {
        res.render('pages/contacts')
    }
}