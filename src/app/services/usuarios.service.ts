import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { UsuarioClienteDto } from '../dto/UsuarioClienteDto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuariosCollection: AngularFirestoreCollection<UsuarioClienteDto>;
  private usuarios: Observable<UsuarioClienteDto[]>;

  constructor(private db: AngularFirestore) {
    this.usuariosCollection = db.collection<UsuarioClienteDto>('usuarios');

    this.usuarios = this.usuariosCollection.snapshotChanges().pipe(map(actions =>{
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    }));
  }

  /* getUsuarios() {
    return this.usuarios;
  } */

  getUsuario(id) {
    return this.usuariosCollection.doc<UsuarioClienteDto>(id).valueChanges();
  }


  updateUsuario(user: UsuarioClienteDto, id: string) {
    return this.usuariosCollection.doc(id).update(user);
  }

  addNuevoUsuario(id: string, user: UsuarioClienteDto) {
    return this.usuariosCollection.doc(id).set(user);
  }

  /* removeUsuario(id) {
    return this.usuariosCollection.doc(id).delete();
  } */
}
