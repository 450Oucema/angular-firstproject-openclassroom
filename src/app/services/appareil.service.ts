export class AppareilService {
  appareils = [
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
  }
  onEteindre() {
    this.appareils.forEach(appareil => appareil.status = 'Éteint');
  }
  switchOnOne(index: number) {
    this.appareils[index].status = 'Allumé';
  }
  switchOffOne(index: number) {
    this.appareils[index].status = 'Éteint';
  }
}
