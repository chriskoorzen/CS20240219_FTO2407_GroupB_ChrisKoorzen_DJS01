/**
 * Debugging Guide
 * 1. Make the code more readable => expand variable names for readability (a packaging tool can take care of compressing names for saving space in production)
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000;       // velocity (km/h)
const acceleration = 3;       // acceleration (m/s^2)
const time = 3600;            // seconds (1 hour)
const distance = 0;           // distance (km)
const startingFuel = 5000;    // remaining fuel (kg)
const fuelBurnRate = 0.5;     // fuel burn rate (kg/s)


const currentDistance = distance + (velocity*(time/3600));          //calcultes new distance
const currentFuel = startingFuel - (fuelBurnRate*time);             //calculates remaining fuel
const currentVelocity = calcNewVel(velocity, acceleration, time);   //calculates new velocity based on acceleration


/**
 * Calculate an object's end velocity based on acceleration over time and starting velocity
 *
 * @param {number} startVelocity expressed in "km/h"
 * @param {number} acceleration expressed in "m/s^2"
 * @param {number} time expressed in "seconds"
 * @returns {number} endVelocity expressed in "km/h"
 */
function calcNewVel(startVelocity, acceleration, time){ 
  
  // Assume "velocity" is always given in km/h -> convert to m/s
  const baseVelocity = startVelocity / 3.6;

  // Calculate result in base units
  const baseResult = baseVelocity + (acceleration * time);

  // Return result in scaled units of km/h
  return baseResult * 3.6;
};

console.log(`Corrected New Velocity: ${currentVelocity} km/h`);
console.log(`Corrected New Distance: ${currentDistance} km`);
console.log(`Corrected Remaining Fuel: ${currentFuel} kg`);






