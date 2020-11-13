/*
 * Exercise 5
 *
 * If you believe the class below can be refactored then please refactor it and explain why you felt it
 *  could/should
 * be refactored.
 *
 * If you believe a refactor for the class below is unecessary please state so and explain why you felt 
 * this way.
 *
 * IMPORTANT: all exercises are best effort. If you cannot arrive at the working solution requested,
 *  please just include an explanation
 * as to your approach, what worked, what didn't, and anything else you feel may be relevant.
 */

export class Machine {

  constructor(public type: number, public machineName: string) {}

  get name(): string {
    let machineName = '';
    /*
     if (this.machineName == null || this.machineName == '' || this.machineName == undefined)
     replacing this as below as per ES6 standards 
    */
    if (this.machineName) {
      if (this.type == 2) machineName = 'tractor';
      else if (this.type == 0) machineName = 'bulldozer';
      else if (this.type == 1) machineName = 'crane';
      else if (this.type == 4) machineName = 'car';
      else if (this.type == 3) machineName = 'truck';
    }
    return machineName;
  }

  get description(): string {
    let hasMaxSpeed = true;
    if (this.type == 3||this.type==4) hasMaxSpeed = false;
    else  hasMaxSpeed = true;
    // if (this.type == 1||this.type==2) hasMaxSpeed = true;
    // else if (this.type == 2) hasMaxSpeed = true;
    // else if (this.type == 4) hasMaxSpeed = false;
    let description = '';
    description += ' ';
    description += this.color + ' '+ this.name+' '+'['+this.getMaxSpeed(this.type, hasMaxSpeed) + '].';
    // description +=;
    // description += ' ';
    //description += '[';
    //description += ;
    return description;
  }

  get color(): string {
    let color;
    if (this.type == 1) color = 'blue';
    else if (this.type == 0) color = 'red';
    else if (this.type == 4) color = 'brown';
    else if (this.type == 3) color = 'yellow';
    else if (this.type == 2) color = 'green';
    else color = 'white';
    return color;

    
  }

  get trimColor(): string {
    let baseColor;
    if (this.type == 0) baseColor = 'red';
    else if (this.type == 1) baseColor = 'blue';
    else if (this.type == 2) baseColor = 'green';
    else if (this.type == 3) baseColor = 'yellow';
    else if (this.type == 4) baseColor = 'brown';
    else baseColor = 'white';

    let trimColor = '';
    if (this.type == 1 && this.isDark(baseColor)) trimColor = 'black';
    else if (this.type == 1 && !this.isDark(baseColor)) trimColor = 'white';
    else if (this.type == 2 && this.isDark(baseColor)) trimColor = 'gold';
    else if (this.type == 3 && this.isDark(baseColor)) trimColor = 'silver';
    return trimColor;
  }

  isDark(color: string) {
    let isDark = false;
    if (color == 'red') isDark = true;
    else if (color == 'yellow') isDark = false;
    else if (color == 'green') isDark = true;
    else if (color == 'black') isDark = true;
    else if (color == 'white') isDark = false;
    else if (color == 'beige') isDark = false;
    else if (color == 'babyblue') isDark = false;
    else if (color == 'crimson') isDark = true;
    return isDark;
  }

  getMaxSpeed(machineType: any, noMax = false) {
    // let absoluteMax = 70; //  variable asiignment unused
    let max = 70;
    if (machineType == 1 && noMax == false) max = 70;
    else if (noMax == false && machineType == 2) max = 60;
    else if (machineType == 0 && noMax == true) max = 80;
    else if (machineType == 2 && noMax == true) max = 90;
    else if (machineType == 4 && noMax == true) max = 90;
    else if (machineType == 1 && noMax == true) max = 75;
    return max;
  }

}

export class HelloComponent {
  constructor(public type: number, public machineName: string) {}
  get name(): string {
    let machineName = "";
    if (!this.machineName) {
 
      switch (this.type) {
        case 0:
          machineName = "bulldozer";
          break;
        case 1:
          machineName = "crane";
          break;
        case 2:
          machineName = "tractor";
          break;
        case 3:
          machineName = "truck";
          break;
        case 4:
          machineName = "car";
          break;
        default:
          machineName = "car";
          break;
      }
    }
    console.log(machineName)
    return machineName;
  }

  get description(): string {
    let hasMaxSpeed = true;

    if (this.type == 3 || this.type == 4) hasMaxSpeed = false;
    else if (this.type == 1 || this.type == 2) hasMaxSpeed = true;
    let description = this.color + " " + this.name;
    description += "[" + this.getMaxSpeed(this.type, hasMaxSpeed) + "].";
    return description;
  }

  get color(): string {
    let color = "white";
    switch (this.type) {
      case 0:
        color = "red";
        break;
      case 1:
        color = "blue";
        break;
      case 2:
        color = "green";
        break;
      case 3:
        color = "yellow";
        break;
      case 4:
        color = "brown";
        break;
      default:
        color = "white";
        break;
    }
    return color;
  }

  get trimColor(): string {
    let baseColor = "white";
    let trimColor = "";
    switch (this.type) {
      case 0:
        baseColor = "red";
        break;
      case 1:
        baseColor = "blue";
        trimColor = this.isDark(baseColor) ? "black" : "white";
        break;
      case 2:
        baseColor = "green";
        trimColor = this.isDark(baseColor) ? "gold" : "";
        break;
      case 3:
        baseColor = "yellow";
        trimColor = this.isDark(baseColor) ? "silver" : "";
        break;
      case 4:
        baseColor = "brown";
        break;
      default:
        baseColor = "white";
        trimColor = "";
        break;
    }
    return trimColor;
  }

  isDark(color: string) {
    if (
      color == "red" ||
      color == "green" ||
      color == "black" ||
      color == "crimson"
    )
      return true;
    else if (
      color == "yellow" ||
      color == "white" ||
      color == "beige" ||
      color == "babyblue"
    )
      return false;

  }

  getMaxSpeed(machineType: any, noMax = false) {
   // let absoluteMax = 70;//  variable asiignment unused
    let max = 70;
    switch (machineType) {
      case 0:
        max = noMax == true ? 80 : 70;
        break;
      case 1:
        max = noMax == true ? 80 : 70;
        break;
      case 2:
        max = noMax == true ? 90 : 60;
        break;
      case 4:
        max = noMax == true ? 90 : 70;
        break;
      default:
        max = 70;
        break;
    }
    return max;
  }
}

