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

    this.beeworkers = this.beeworkerCollection.snapshotChanges().pipe(map(beeworkers => {
      return beeworkers.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      }) as Array<BeeworkerDto>
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

  getBeeworkerByIdUsuario(documentId) {
    return this.db.collection('beeworkers', ref => ref.where('idUsuario', '==', documentId))
      .snapshotChanges().pipe(map(beeworker => {
        return beeworker.map(a => {
          const data = a.payload.doc.data() as BeeworkerDto;   
          const id = a.payload.doc.id;
          return { id, ...data };
        }) as Array<BeeworkerDto>
      }))
  }  

  getBeeworkerCercano(latitud: number, longitud: number): Promise<Array<BeeworkerDto>> {
    let beeworkersCercanos = new Array<BeeworkerDto>();
    return new Promise((resolve) => {
      this.beeworkers.subscribe(beeworkers => {
        for (let beeworker of beeworkers) { //trae los beeworker que se encuentren a menos de 8 kilometros
          if (parseInt(this.getKilometros(latitud, longitud, beeworker.latitud, beeworker.longitud)) < 8) {
            if (!beeworkersCercanos.find(b => b.id === beeworker.id)) {
              beeworkersCercanos.push(beeworker)
            }
          }
        }
        let promesasCalificaciones = new Array<Promise<any>>();
        for (let beeworker of beeworkersCercanos) { //trae sus calificaciones
          promesasCalificaciones.push(new Promise((resolve) => {
            this.getCalificacionBeeworker(beeworker.id).then(calificacion => {
              beeworker.calificacion = calificacion
              resolve(beeworker);
            });
          }));
        }
        Promise.all(promesasCalificaciones).then(values => { // una vez que trae todas las calificaciones
          beeworkersCercanos.sort((b1, b2) => { // los ordena por calificacion
            if (b1.calificacion < b2.calificacion) {
              return 1;
            }
            if (b1.calificacion > b2.calificacion) {
              return -1;
            }
            return 0;
          });
          resolve(beeworkersCercanos);
        });
      });
    });
  }

  consultarResenaPorId(documentId) {
    return this.db.collection('resenas', ref => ref.where('idUsuario', '==', documentId))
      .snapshotChanges().pipe(map(resenas => {
        return resenas.map(a => {
          const resenas = a.payload.doc.data() as ResenasDto;
          return resenas;
        })
      }))
  }

  getCalificacionBeeworker(documentId): Promise<number> {
    let calificacion = 0;
    let cantidadResenas = 0;
    return new Promise((resolve) => {
      this.consultarResenaPorId(documentId).subscribe((resenas) => {
        for (let resena of resenas) {
          calificacion += resena.calificacion;
          cantidadResenas++;
        }
        calificacion = calificacion / cantidadResenas;
        resolve(calificacion);
      });
    });
  }

  private getKilometros(lat1: number, lon1: number, lat2: number, lon2: number) {
    var rad = function (x) { return x * Math.PI / 180; }
    var R = 6378.137; //Radio de la tierra en km
    var dLat = rad(lat2 - lat1);
    var dLong = rad(lon2 - lon1);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d.toFixed(3); //Retorna tres decimales
  }

}
