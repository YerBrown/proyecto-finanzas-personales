import userModel from '../model/userModel.js'

function getAll(req, res) {
    const users = userModel.getAll();
  res.render('user/list',{users});
}

function getById(req, res) {
  const id = parseInt(req.params.id);
  res.render('user/show',"Get user by id " + id);
}


function renderLogin(req,res){
    res.render('user/login')
}

function renderRegister(req,res){
    res.render('user/register');
}
function sendLogin(req,res){
    res.send('Login Complete!');
    // Todo: redirect
}

export const functions = {
    getAll,
    renderLogin,
    renderRegister
}

export default functions;
