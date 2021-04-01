import  db from './Firebase/Config';

const usuario = {
    nombre: 'maria',
    activo: true,
    fechaNaci: 0
}

const usuariosRef = db.collection('usuarios');

// insert into usuarios ....
// db.collection('usuarios')
//    .add( usuario)
//    .then( docRef => {
 //   console.log(docRef)
//  })
//  .catch{e => console.log('error', e)}
//  delete from usuario where id = 'xx'
//  then () => console.log('bborado')
// .catch e => consoles,log('error' , r);


// select = from usuarios ;

usuariosRef
.onSnapshot(snap => {
    sna.forEach( snapHijo => )
    console.log(snapHijo.data())
});
