class TrafficTower {
  public airplanes: Airplane[] = [];

  requestPositions() {
    return this.airplanes.map((airplane) => airplane.position);
  }
}

class Airplane {
  constructor(public position: number, private trafficTower: TrafficTower) {
    this.trafficTower.airplanes.push(this);
  }

  requestPositions() {
    return this.trafficTower.requestPositions();
  }
}
