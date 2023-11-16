const conexion= require('../database/db');
exports.save =(req,res)=>{
    const usuario=req.body.usuario;
    const rol=req.body.rol;
    console.log(usuario+" - "+rol);
    conexion.query('INSERT INTO usuario SET ?',{usuario:usuario, rol:rol},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
};

exports.saveEstudiante =(req,res)=>{
    const usuario=req.body.usuario;
    const sede=req.body.sede;
    conexion.query('INSERT INTO estudiante SET ?',{usuario:usuario, sede:sede},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
};
exports.saveMateria =(req,res)=>{
    const materia=req.body.materia;
    const programa=req.body.programa;
    conexion.query('INSERT INTO materia SET ?',{materia:materia, programa:programa},(error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
};


//editar
exports.update=(req,res)=>{
  const id=req.body.id;
  const usuario=req.body.usuario;
  const rol=req.body.rol;
  conexion.query('UPDATE usuario SET ? WHERE id=?',[{usuario:usuario, rol:rol}, id],(error,results)=>{
    if(error){
        console.log(error);
    }else{
        res.redirect('/');
    }
  })
}

exports.updateEstudiante=(req,res)=>{
    const id=req.body.id;
    const usuario=req.body.usuario;
    const sede=req.body.sede;
    conexion.query('UPDATE estudiante SET ? WHERE id=?',[{usuario:usuario, sede:sede}, id],(error,results)=>{
      if(error){
          console.log(error);
      }else{
          res.redirect('/');
      }
    })
  }
  exports.updateMateria=(req,res)=>{
    const id=req.body.id;
    const materia=req.body.materia;
    const programa=req.body.programa;
    conexion.query('UPDATE materia SET ? WHERE id=?',[{materia:materia, programa:programa}, id],(error,results)=>{
      if(error){
          console.log(error);
      }else{
          res.redirect('/');
      }
    })
  }
