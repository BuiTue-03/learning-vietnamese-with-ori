/** A queue of pop-ups to show ("level up", "new badge", "daily goal reached"), one at a time. */

const queue = [];

export const queueCelebration = (c) => { queue.push(c); };
export const currentCelebration = () => queue[0];
export const hasCelebration = () => queue.length > 0;
export const dismissCelebration = () => { queue.shift(); };
export const clearCelebrations = () => { queue.length = 0; };
