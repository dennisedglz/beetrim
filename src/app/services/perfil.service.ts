import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

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

  public insertar(coleccion, datos) {
    return this.db.collection(coleccion).add(datos);
  }

  public actualizar(coleccion, documentId, datos) {
    return this.db.collection(coleccion).doc(documentId).set(datos);
  }

}
