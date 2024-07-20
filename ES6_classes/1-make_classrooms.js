// 1-make_classrooms.js

import ClassRoom from './0-classroom';

/**
 * Initializes and returns an array ClassRoom objects w specified sizes.
 * @returns {Array<ClassRoom>} Array ClassRoom objects.
 */
export default function initializeRooms() {
  // Create ClassRoom objects with the specified sizes
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);

  // Return array ClassRoom objects
  return [room1, room2, room3];
}
