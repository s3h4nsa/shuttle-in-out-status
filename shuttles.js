// Shuttle categories
const categories = [
  { id: 'pickup', name: 'Pickup Shuttle' },
  { id: 'branch', name: 'Branch Shuttle' },
  { id: 'shuttle', name: 'Shuttle' }
];

// Shuttles data
const shuttles = [
  { id:1, name:'Gampaha Pickup', from:'Gampaha', category:'pickup', template:'{name} Shuttle now in Polgasowita WH {time}.' },
  { id:2, name:'Kelaniya Pickup', from:'Kelaniya', category:'pickup', template:'{name} Shuttle now in Polgasowita WH {time}.' },
  { id:3, name:'Main Branch', from:'Warehouse', category:'branch', template:'{name} Shuttle now in Polgasowita WH {time}.' },
  { id:4, name:'Branch B', from:'Branch B', category:'branch', template:'{name} Shuttle now in Polgasowita WH {time}.' },
  { id:5, name:'Shuttle 1', from:'Depot', category:'shuttle', template:'{name} Shuttle now in Polgasowita WH {time}.' },
  { id:6, name:'Shuttle 2', from:'Depot', category:'shuttle', template:'{name} Shuttle now in Polgasowita WH {time}.' },
  // Add more shuttles up to 20+
];