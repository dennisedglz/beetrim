import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BeeworkerDto } from 'src/app/dto/BeeworkerDto';
import { ResenasDto } from 'src/app/dto/ResenasDto';

@Injectable({
  providedIn: 'root'
})
export class BeeworkerService {

  private beeworkerCollection: AngularFirestoreCollection<BeeworkerDto>;
  private beeworkers: Observable<BeeworkerDto[]>;

  constructor(private db: AngularFirestore) {
    this.beeworkerCollection = db.collection<BeeworkerDto>('beeworkers');

    this.beeworkers = this.beeworkerCollection.snapshotChanges().pipe(map(actions =>{
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    }));
  }

  getBeeworkers() {
    return this.beeworkers;
  }

  getBeeworker(id) {
    return this.beeworkerCollection.doc<BeeworkerDto>(id).valueChanges();
  }

  updateBeeworker(evento: BeeworkerDto, id: string) {
    return this.beeworkerCollection.doc(id).update(evento);
  }

  addEventoBeeworker(evento: BeeworkerDto) {
    return this.beeworkerCollection.add(evento);
  }

  removeEventoBeeworker(id) {
    return this.beeworkerCollection.doc(id).delete();
  }


  /*public consultarBeeworkerPorId(documentId) {
    let resultado = this.db.collection('beeworkers').doc(documentId).snapshotChanges();
  }
*/
  public consultarResenaPorId(documentId) {
    return this.db.collection('resenas', ref => ref.where('idUsuario', '==', documentId))
    .snapshotChanges().pipe(map(rooms => {
      return rooms.map(a =>{
        const data = a.payload.doc.data() as ResenasDto;
        return data;
      })
    }))
  }

}
