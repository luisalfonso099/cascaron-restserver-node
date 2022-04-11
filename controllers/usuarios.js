
const usuariosGet = (req, res) => {

    const querys = req.query;

    res.json({
        msg: 'Get De la api Cotrolador',
        querys
    })
}

const usuariosPut = (req, res) => {

    res.json({
        msg: 'Put De la api Cotrolador'
    })
}
const usuariosPost = (req, res) => {

    const body = req.body;
    const {id} = req.params

    res.status(201).json({
        msg: 'Post De la api Cotrolador',
        body: body,
        id
    })
}

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'Delete De la api Cotrolador'
    })
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}