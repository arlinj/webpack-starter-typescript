import  db from './Firebase/Config';

const usuario = {
    nombre: 'fernando',
    activo: true,
    fechaNaci: 0
}

// insert into usuarios ....

db.collection('usuarios')
    .add( usuarios )