import userModel from '../model/userModel.js'

async function getAll(req, res) {
    const users = await userModel.getAll();
  res.render('user/list',{users});
}

async function getById(req, res) {
  const id = parseInt(req.params.id);
  const user = await userModel.getById(id);
  res.render('user/show',user);
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
    getById,
    renderLogin,
    renderRegister
}

export default functions;
