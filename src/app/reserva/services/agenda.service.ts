import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AgendaDto } from 'src/app/dto/StepDto';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(private db: AngularFirestore) { }

  public consultar(coleccion) {
    return this.db.collection(coleccion).snapshotChanges();
  }

  public consultarPorId(coleccion, documentId) {
    return this.db.collection(coleccion).doc(documentId).snapshotChanges();
  }

  public consultarAgendaPorId(coleccion, documentId){
    return this.db.collection('agenda', ref => ref.where('id_cliente', '==', documentId))
    .snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as AgendaDto;
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
