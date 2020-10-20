import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AgendaDto } from '../dto/StepDto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private agendaCollection: AngularFirestoreCollection<AgendaDto>;
  private agenda: Observable<AgendaDto[]>;

  constructor(private db: AngularFirestore) {
    this.agendaCollection = db.collection<AgendaDto>('agenda');

    this.agenda = this.agendaCollection.snapshotChanges().pipe(map(actions =>{
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    }));
  }

  getAgendas() {
    return this.agenda;
  }

  consultarAgendaPorId(documentId) {
    return this.db.collection('agenda', ref => ref.where('id_cliente', '==', documentId))
      .snapshotChanges().pipe(map(agendas => {
        return agendas.map(a => {
          const data = a.payload.doc.data() as AgendaDto;
          const id = a.payload.doc.id;
          return { id, ...data };
        }) as Array<AgendaDto>
      }))
  }

  getAgenda(id) {
    return this.agendaCollection.doc<AgendaDto>(id).valueChanges();
  }

  updateAgenda(evento: AgendaDto, id: string) {
    return this.agendaCollection.doc(id).update(evento);
  }

  addEventoAgenda(evento: AgendaDto) {
    return this.agendaCollection.add(evento);
  }

  removeEventoAgenda(id) {
    return this.agendaCollection.doc(id).delete();
  }

}
