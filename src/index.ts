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

usuariosRef.doc('https://console.firebase.google.com/project/undefined/firestore/data/Fernando%20/XRYxOuyl8AaRTrpo0eO6')