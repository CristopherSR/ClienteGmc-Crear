const express=require('express');
const router=express.Router();

const conexion= require('./database/db')
const util = require('util');


//router.get('/contacto', (req, res)=>{
 //   res.send('CONTACTO');
//});

const queryAsync = util.promisify(conexion.query).bind(conexion);


router.get('/',async (req, res)=>{
    let materia = await queryAsync("SELECT * FROM materia")

    let estudiante =  await queryAsync("SELECT * FROM estudiante")

    // Ejecutar la consulta y esperar el resultado
    const results = await queryAsync("SELECT * FROM usuario");

    res.render('index',{results:results, estudiante: estudiante, materia: materia});
})
//Router Crear registros 
router.get('/create',(req,res)=>{
    res.render('create')
})
router.get('/createEstudiante',(req,res)=>{
    res.render('createEstudiante')
})
router.get('/createMateria',(req,res)=>{
  res.render('createMateria')
})
//Router Editar registros
router.get('/edit/:id',(req,res)=>{
  const id=req.params.id;
    conexion.query('SELECT * FROM usuario WHERE id=?',[id],(error, results)=>{
      if(error){
          throw error;
      }else{
          res.render('edit',{usuario:results[0]});
      }
    })
});

router.get('/editEstudiante/:id',(req,res)=>{
    const id=req.params.id;
      conexion.query('SELECT * FROM estudiante WHERE id=?',[id],(error, results)=>{
        if(error){
            throw error;
        }else{
            console.log(results[0], "----")
            res.render('editEstudiante',{usuario:results[0]});
        }
      })
  });
  router.get('/editMateria/:id',(req,res)=>{
    const id=req.params.id;
      conexion.query('SELECT * FROM materia WHERE id=?',[id],(error, results)=>{
        if(error){
            throw error;
        }else{
            console.log(results[0], "----")
            res.render('editMateria',{materia:results[0]});
        }
      })
  });
//Ruta para eliminar  registros
router.get('/delete/:id',(req, res)=>{
  const id=req.params.id;
  conexion.query('DELETE FROM estudiante WHERE id=?',[id],(error,results)=>{
    if(error){
        throw error;
    }else{
        res.redirect('/');
    }
  })
})
router.get('/deleteMateria/:id',(req, res)=>{
  const id=req.params.id;
  conexion.query('DELETE FROM materia WHERE id=?',[id],(error,results)=>{
    if(error){
        throw error;
    }else{
        res.redirect('/');
    }
  })
})
router.get('/deleteUsuario/:id',(req, res)=>{
  const id=req.params.id;
  conexion.query('DELETE FROM usuario WHERE id=?',[id],(error,results)=>{
    if(error){
        throw error;
    }else{
        res.redirect('/');
    }
  })
})

const crud= require('./controllers/crud');
router.post('/save',crud.save);
router.post('/saveEstudiante',crud.saveEstudiante);
router.post('/saveMateria',crud.saveMateria);
router.post('/update',crud.update);
router.post('/updateEstudiante',crud.updateEstudiante);
router.post('/updateMateria',crud.updateMateria);


module.exports = router;
