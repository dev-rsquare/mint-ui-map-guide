import { Position } from "@mint-ui/map";

export class PositionGenerator {

  static get(base:Position, count:number, gap:number){

    const list = [base]
    for(let i = 0 ; i <= count ; i++){
      list.push(new Position(
        base.lat + (Math.random() * gap * this.getDirection()),
        base.lng + (Math.random() * gap * this.getDirection())
      ))
    }

    return list
  }

  static getDirection(){
    return Math.random() > 0.5?1:-1
  }

}

export default PositionGenerator