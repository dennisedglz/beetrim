import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { ResenasDto } from 'src/app/dto/ResenasDto';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private db: AngularFirestore) { }

  public consultar(coleccion) {
    return this.db.collection(coleccion).snapshotChanges();
  }

  public consultarPorId(coleccion, documentId) {
    return this.db.collection(coleccion).doc(documentId).snapshotChanges();
  }

  public consultarResenaPorId(coleccion, documentId) {
    console.log('doc', documentId);
    return this.db.collection('resenas', ref => ref.where('idUsuario', '==', documentId))
    .snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as ResenasDto;
        return data;
      })
    }))
  }

  public insertar(coleccion, datos) {
    return this.db.collection(coleccion).add(datos);
  }

  public actualizar(coleccion, documentId, datos) {
    return this.db.collection(coleccion).doc(documentId).set(datos);
  }

}
