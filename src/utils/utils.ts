// sleep function with type annotations
export function sleep(seconds: number = 0): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, seconds * 1000); // Convert seconds to milliseconds
    });
  }
  
  // randomNumber function with type annotations
  export function randomNumber(max: number, type: "int" | "float" = "int"): number {
    if (type === "int") {
      return Math.floor(Math.random() * max);  // Generates a random integer
    } else {
      return Math.random() * max;  // Generates a random float
    }
  }
  
  // Timestamp class with type annotations
  type TimeUnit = "DAY" | "HOUR";  // Allowed time units
  
  export class Timestamp {
    value: number;
    units: Record<TimeUnit, number>;
  
    constructor() {
      this.value = Math.floor(Date.now() / 1000); // Initialize with the current Unix timestamp
      this.units = {
        DAY: 86400,  // Seconds in a day
        HOUR: 3600,  // Seconds in an hour
      };
    }
  
    add(number: number, unit: TimeUnit): number {
      const _unit = this.units[unit];
      this.value = this.value + number * _unit;
      return this.value;
    }
  
    subtract(number: number, unit: TimeUnit): number {
      const _unit = this.units[unit];
      this.value = this.value - number * _unit;
      return this.value;
    }
  }
  