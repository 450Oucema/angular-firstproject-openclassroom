export class AppareilService {
  appareils = [
    {
      name: 'Machine à laver',
      status: 'Éteint'
    },
    {
      name: 'Télévision',
      status: 'Allumé'
    },
    {
      name: 'Ordinateur',
      status: 'Éteint'
    }
  ];

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
