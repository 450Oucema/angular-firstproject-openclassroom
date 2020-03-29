import {Subject} from 'rxjs';

export class AppareilService {

  appareilSubject = new Subject<any[]>();

  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'Éteint'
    },
    {
      id: 2,
      name: 'Télévision',
      status: 'Allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'Éteint'
    }
  ];

  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice())
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
      return appareilObject.id === id;
      }
    );
    return appareil;
  }
  onAllumer() {
    console.log('On allume tout !');
    this.appareils.forEach(appareil => appareil.status = 'Allumé');
    this.emitAppareilSubject();
  }
  onEteindre() {
    this.appareils.forEach(appareil => appareil.status = 'Éteint');
    this.emitAppareilSubject();
  }
  switchOnOne(index: number) {
    this.appareils[index].status = 'Allumé';
    this.emitAppareilSubject();
  }
  switchOffOne(index: number) {
    this.appareils[index].status = 'Éteint';
    this.emitAppareilSubject();
  }
}
