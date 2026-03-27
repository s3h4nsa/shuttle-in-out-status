const categories = [
  { id: 'shuttle', name: 'Shuttle' },
  { id: 'pickup', name: 'Pickup Shuttle' },
  { id: 'branch', name: 'Branch Shuttle' },
];

const shuttles = [
// Shuttle Shuttles
  { id:1, name:'Baddegama', category:'shuttle', template:'{name} Shuttle now in Polgasowita Warehouse.'},
  { id:2, name:'Balangoda', category:'shuttle', template:'{name} Shuttle now in Polgasowita Warehouse.'},
  { id:3, name:'Chilaw', category:'shuttle', template:'{name} Shuttle now in Polgasowita Warehouse.'},
  { id:4, name:'Gampaha', category:'shuttle', template:'{name} Shuttle now in Polgasowita Warehouse.'},
  { id:5, name:'Karawanella', category:'shuttle', template:'{name} Shuttle now in Polgasowita Warehouse.'},
  { id:6, name:'Matara', category:'shuttle', template:'{name} Shuttle now in Polgasowita Warehouse.'},
  { id:7, name:'Mathugama', category:'shuttle', template:'{name} Shuttle now in Polgasowita Warehouse.'},
  { id:8, name:'Minuwangoda', category:'shuttle', template:'{name} Shuttle now in Polgasowita Warehouse.'},
  { id:9, name:'Monaragala', category:'shuttle', template:'{name} Shuttle now in Polgasowita Warehouse.'},
  { id:10, name:'Pettah', category:'shuttle', template:'{name} Shuttle now in Polgasowita Warehouse.'},
 
  
// Pickup Shuttles
  { id:11, name:'2-8', category:'pickup', template:'{name} Pickup Shuttle now in Polgasowita Warehouse.'},
  { id:12, name:'9-15', category:'pickup', template:'{name} Pickup Shuttle now in Polgasowita Warehouse.'},
  { id:13, name:'Balangoda', category:'pickup', template:'{name} Pickup Shuttle now in Polgasowita Warehouse.'},
  { id:14, name:'Gampaha', category:'pickup', template:'{name} Pickup Shuttle now in Polgasowita Warehouse.'},
  { id:15, name:'Homagama', category:'pickup', template:'{name} Pickup Shuttle now in Polgasowita Warehouse.'},
  { id:16, name:'Kadawatha', category:'pickup', template:'{name} Pickup Shuttle now in Polgasowita Warehouse.'},
  { id:17, name:'Kaduwela', category:'pickup', template:'{name} Pickup Shuttle now in Polgasowita Warehouse.'},
  { id:18, name:'Matugama', category:'pickup', template:'{name} Pickup Shuttle now in Polgasowita Warehouse.'},
  { id:19, name:'Moratuwa', category:'pickup', template:'{name} Pickup Shuttle now in Polgasowita Warehouse.'},
  { id:20, name:'Panadura', category:'pickup', template:'{name} Pickup Shuttle now in Polgasowita Warehouse.'},
  { id:21, name:'Piliyandala', category:'pickup', template:'{name} Pickup Shuttle now in Polgasowita Warehouse.'},
  { id:22, name:'Rajagiriya', category:'pickup', template:'{name} Pickup Shuttle now in Polgasowita Warehouse.'},
  { id:23, name:'U Drop', category:'pickup', template:'{name} Pickup Shuttle now in Polgasowita Warehouse.'},
  { id:24, name:'Wellampitiya', category:'pickup', template:'{name} Pickup Shuttle now in Polgasowita Warehouse.'},
  { id:25, name:'Wattala', category:'pickup', template:'{name} Pickup Shuttle now in Polgasowita Warehouse.'},

// Branch Shuttles
  { id:26, name:'Kadawatha', category:'branch', template:'{name} Branch Shuttle now in Polgasowita Warehouse.'},
  { id:27, name:'Piliyandala', category:'branch', template:'{name} Branch Shuttle now in Polgasowita Warehouse.'},

];

 shuttles.sort((a, b) => a.name.localeCompare(b.name))
 
