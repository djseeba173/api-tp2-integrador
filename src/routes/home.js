const { Router } = require('express')
const router = Router()

const lista = [];
const master = {
    user: 'cuchau',
    pass: 'Rayo95'
}
const listaUsuarios = [master];


// Idear un login con un middleware
router.post('/login', (req, res) => {
    const { user } = req.body
    const { pass } = req.body

    if(user == master.user && pass == master.pass){
        return res.status(202).json({mensaje: 'Usuario Aceptado'})
    }

    return res.status(401).json({mensaje: 'Usuario No Autorizado'})
})

router.get('/users', (req, res) => {
    return res.json(listaUsuarios)
})

router.post('/register', (req,res) => {
    const { user } = req.body
    const { pass } = req.body

    if(user != null && pass != null){
        if(!listaUsuarios.find(us => us.user == user)){
            listaUsuarios.push({user:user, pass:pass})
            return res.status(201).json({mensaje: 'Usuario Registrado'})
        }else{
            return res.status(403).json({mensaje: 'Usuario Ya Existe'})
        }
    }else{
        return res.status(400).json({mensaje: 'Datos Invalidos'})
    }
})

router.get('/', (req, res) => {
    return res.json(lista)
})

// router.get("/asignarSueldo", (req, res) => {
//     return res.json("OK asignarSueldo");
// });

router.post("/sueldo/", (req, res) => {

    const { sueldo } = req.body
    if (sueldo > 0) {
        return res.status(201).json({mensaje: 'Sueldo asignado con exito!'})
    }
    res.status(400).json({mensaje:'El sueldo no puede ser negativo.'})
});

// router.get("/agregarGasto", (req, res) => {
//     return res.json("OK agregarGasto");
// });

router.post("/gasto/", (req, res) => {
    const gasto  = req.body
    if (gasto.importe > 0 && gasto.categoria != null && gasto.descripcion != null ) {
        lista.push(gasto)
        return res.status(201).json({mensaje: 'Sueldo asignado con exito!'})
    }
    res.status(400).json({mensaje:'El sueldo no puede ser negativo.'})
});

// router.get("/agregarDinero", (req, res) => {
//     return res.json("OK agregarDinero");
// });

// router.get("/crearCuenta", (req, res) => {
//     return res.json("OK crearCuenta");
// });

module.exports = router
