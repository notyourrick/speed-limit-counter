// // Example usage:
// const carSpeed = 156;

// function trafficFine(speed) {
//   const speedLimit = 70;
//   const fineAmount = 10;
//   const pointsPer5km = 1;
//   const pointsToCancelLicense = 12;

//   if (speed > speedLimit) {
//     console.log(`You were caught speeding! Fine amount: $${fineAmount}`);
//   } else {
//     console.log('You are within speeed limit. Drive safely!');
//     return;
//   }

//   const points = Math.floor((speed - speedLimit) / 5);

//   if (points > 0) {
//     console.log(`You've earned ${points} point(s) on your license.`);

//     if (points >= pointsToCancelLicense) {
//       console.log(`Your license is cancelled  (${pointsToCancelLicense}).`);
//     }
//   }
// }

// trafficFine(carSpeed);
