const XLSX = require('xlsx');
const fs = require('fs');
const moment = require('moment');

// Function to convert JSON to XLSX
function jsonToXlsx(jsonData, fileName) {
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(jsonData);
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Receipts');
  XLSX.writeFile(workbook, fileName);
}

// Read the external JSON file
/* fs.readFile('Admin_Receipts_Aug10-Oct3.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    jsonData.map((ele) => {
        ele.customer_name = ele.user_id.name;
        ele.phone_number = String(ele.user_id.mobile_number);
        ele.user_id = ele.user_id.id;
        if (ele.createdAt) {
          ele.createdAt = moment(ele.createdAt).format(
            'YYYY-MM-DD HH:mm:ss'
          );
        }
      });
    // Call the function to convert JSON to XLSX
    jsonToXlsx(jsonData, 'Admin_Receipts_Aug10-Oct3.xlsx');
    console.log('Conversion complete.');
  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
}); */

let test = [
  {
      "sku": 20058646,
      "brand": "Glucerna",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": 20058694,
      "brand": "Glucerna",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": 20058725,
      "brand": "Ensure",
      "points": 3,
      "weightInGrams": 370
  },
  {
      "sku": "100S907223140",
      "brand": "Ensure",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100S907223185",
      "brand": "Ensure",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100S956223185",
      "brand": "Ensure",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100S907223187",
      "brand": "Ensure",
      "points": 0,
      "weightInGrams": 61
  },
  {
      "sku": "100S907223240",
      "brand": "Ensure",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100S907223287",
      "brand": "Ensure",
      "points": 0,
      "weightInGrams": 61
  },
  {
      "sku": "100S956223140",
      "brand": "Ensure",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100S956223240",
      "brand": "Ensure",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100S956223287",
      "brand": "Ensure",
      "points": 0,
      "weightInGrams": 61
  },
  {
      "sku": "100Y511223185",
      "brand": "Ensure",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100Y511223187",
      "brand": "Ensure",
      "points": 0,
      "weightInGrams": 61
  },
  {
      "sku": "100Y511223240",
      "brand": "Ensure",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100Y511223287",
      "brand": "Ensure",
      "points": 0,
      "weightInGrams": 61
  },
  {
      "sku": "100Y576223187",
      "brand": "Ensure",
      "points": 0,
      "weightInGrams": 61
  },
  {
      "sku": "100S348223452",
      "brand": "Similac Mom ",
      "points": 9,
      "weightInGrams": 900
  },
  {
      "sku": "100S975223140",
      "brand": "PediaSure ",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100S975223160",
      "brand": "PediaSure ",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": "100S975223185",
      "brand": "PediaSure ",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100S976223160",
      "brand": "PediaSure ",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": "100S976223185",
      "brand": "PediaSure ",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100Y496223160",
      "brand": "PediaSure ",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": "100Y496223185",
      "brand": "PediaSure ",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100Y576223140",
      "brand": "Ensure",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100Y576223185",
      "brand": "Ensure",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100Y511223340",
      "brand": "Ensure",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100S907223340",
      "brand": "Ensure",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100S956223340",
      "brand": "Ensure",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100Y511223285",
      "brand": "Ensure",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100S907223285",
      "brand": "Ensure",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100S956223285",
      "brand": "Ensure",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100Y535223185",
      "brand": "Pediasure",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100Y534223185",
      "brand": "Pediasure",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100Y650223185",
      "brand": "Pediasure",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100Y650223140",
      "brand": "Pediasure",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100Y650223160",
      "brand": "Pediasure",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": "100Y651223185",
      "brand": "Pediasure",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100Y651223160",
      "brand": "Pediasure",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": "100Y674223185",
      "brand": "Pediasure",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100Y674223160",
      "brand": "Pediasure",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": "100Y523223185",
      "brand": "Glucerna",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100Y523223140",
      "brand": "Glucerna",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100Y495223285",
      "brand": "Glucerna",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100Y495223240",
      "brand": "Glucerna",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100Y524223185",
      "brand": "Glucerna",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100Y524223140",
      "brand": "Glucerna",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "S907.140FB",
      "brand": "Ensure",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": "S907.140FC",
      "brand": "Ensure",
      "points": 24,
      "weightInGrams": 2400
  },
  {
      "sku": "S956.140FB",
      "brand": "Ensure",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": "S956.140FC",
      "brand": "Ensure",
      "points": 24,
      "weightInGrams": 2400
  },
  {
      "sku": "S975.151A",
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "S975.151B",
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "S975.151C",
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "S975.151P",
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S976.151A",
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "S976.151B",
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "S976.151C",
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "S976.151P",
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "Y496.151A",
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "Y496.151B",
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "Y496.151C",
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "Y496.151P",
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "Y650.151A",
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "Y650.151B",
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "Y650.151C",
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "Y650.151P",
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "Y651.151A",
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "Y651.151B",
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "Y651.151C",
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "Y651.151P",
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "Y674.151A",
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "Y674.151B",
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "Y674.151C",
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "Y674.151P",
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S934.151XA",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": "S934.151XB",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1800
  },
  {
      "sku": "S934.151XP",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": "S934.120XP",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 200
  },
  {
      "sku": "S935.151XP",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": "S936.151XA",
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "S936.151XB",
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "S936.151XC",
      "brand": "Similac",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "S936.151XP",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S937.151XA",
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "S937.151XB",
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "S937.151XC",
      "brand": "Similac",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "S937.151XP",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S936.151A",
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "S936.151B",
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "S936.151P",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S937.151A",
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "S937.151B",
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "S937.151P",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S900.151X",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": "S900.115X",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 150
  },
  {
      "sku": "S900.953X",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": "S901.151X",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": "S901.953X",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": "S902.151X",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S902.953X",
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "S903.151X",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S903.953X",
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "Y567.151A",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": "Y567.151B",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1800
  },
  {
      "sku": "Y567.151P",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": "Y567.120P",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 200
  },
  {
      "sku": "Y568.151B",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1800
  },
  {
      "sku": "Y568.151P",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": "Y569.151A",
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "Y569.151B",
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "Y569.151C",
      "brand": "Similac",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "Y569.151P",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "Y575.151A",
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "Y575.151B",
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "Y575.151C",
      "brand": "Similac",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "Y575.151P",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "Y511.140A",
      "brand": "Ensure",
      "points": 24,
      "weightInGrams": 2400
  },
  {
      "sku": "Y495.140PA",
      "brand": "Glucerna",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": "Y495.140PB",
      "brand": "Glucerna",
      "points": 24,
      "weightInGrams": 2400
  },
  {
      "sku": "Y524.140PA",
      "brand": "Glucerna",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": "Y524.140PB",
      "brand": "Glucerna",
      "points": 24,
      "weightInGrams": 2400
  },
  {
      "sku": "Y534.954AL",
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "Y534.82BL",
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "Y534.151AL",
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "Y535.954AL",
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "Y535.82BL",
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "Y535.151AL",
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S902.954X",
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "Y650.151B6",
      "brand": "PediaSure",
      "points": 42,
      "weightInGrams": 4200
  },
  {
      "sku": "Y651.151B6",
      "brand": "PediaSure",
      "points": 42,
      "weightInGrams": 4200
  },
  {
      "sku": "Y674.151B6",
      "brand": "PediaSure",
      "points": 42,
      "weightInGrams": 4200
  },
  {
      "sku": "Y511.140B",
      "brand": "Ensure",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": "J052.656",
      "brand": "Ensure",
      "points": 14,
      "weightInGrams": 1480
  },
  {
      "sku": "J053.656",
      "brand": "Ensure",
      "points": 14,
      "weightInGrams": 1480
  },
  {
      "sku": "J054.656",
      "brand": "Ensure",
      "points": 14,
      "weightInGrams": 1480
  },
  {
      "sku": "J052.371",
      "brand": "Ensure",
      "points": 22,
      "weightInGrams": 2220
  },
  {
      "sku": "J053.371",
      "brand": "Ensure",
      "points": 22,
      "weightInGrams": 2220
  },
  {
      "sku": "J054.371",
      "brand": "Ensure",
      "points": 22,
      "weightInGrams": 2220
  },
  {
      "sku": "Y495.656",
      "brand": "Glucerna",
      "points": 14,
      "weightInGrams": 1480
  },
  {
      "sku": "Y524.656",
      "brand": "Glucerna",
      "points": 14,
      "weightInGrams": 1480
  },
  {
      "sku": "Y495.371",
      "brand": "Glucerna",
      "points": 22,
      "weightInGrams": 2220
  },
  {
      "sku": "Y524.371",
      "brand": "Glucerna",
      "points": 22,
      "weightInGrams": 2220
  },
  {
      "sku": "S902.151XH",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S902.953XH",
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "S902.954XH",
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "S903.151XH",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S903.953XH",
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "S900.151XH",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": "S900.953XH",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": "S901.151XH",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": "S901.953XH",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": "S902.151XL",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S902.953XL",
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "S902.954XL",
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "S903.151XL",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S903.953XL",
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "Y650.151XP",
      "brand": "PediaSure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "Y650.953X",
      "brand": "PediaSure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "Y650.954X",
      "brand": "PediaSure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "Y650.82BX",
      "brand": "PediaSure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20040456,
      "brand": "Ensure",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": 20040759,
      "brand": "Ensure",
      "points": 24,
      "weightInGrams": 2400
  },
  {
      "sku": 20040774,
      "brand": "Ensure",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": 20040775,
      "brand": "Ensure",
      "points": 24,
      "weightInGrams": 2400
  },
  {
      "sku": 20040888,
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20040889,
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20043284,
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20043128,
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20040886,
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20040887,
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20043136,
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20043321,
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20043209,
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20043210,
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20042992,
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20042996,
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20040944,
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20040945,
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20040948,
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20043173,
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20040900,
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20040901,
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20040903,
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20043175,
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20040878,
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20040879,
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20040880,
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20043027,
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20040890,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": 20040891,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1800
  },
  {
      "sku": 20040831,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20040892,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 200
  },
  {
      "sku": 20040834,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20041056,
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20041057,
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20041040,
      "brand": "Similac",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20041058,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20040922,
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20040923,
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20040934,
      "brand": "Similac",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20040924,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20043264,
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20043293,
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20043059,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20043349,
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20043265,
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20043313,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20036061,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20036062,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": 20036063,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20036064,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": 20036065,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20036066,
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20036068,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20036067,
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20041065,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": 20041066,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1800
  },
  {
      "sku": 20041068,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20041067,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 200
  },
  {
      "sku": 20041070,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1800
  },
  {
      "sku": 20041071,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20041072,
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20041073,
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20041074,
      "brand": "Similac",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20041075,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20041077,
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20041078,
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20041079,
      "brand": "Similac",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20041080,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20040762,
      "brand": "Ensure",
      "points": 24,
      "weightInGrams": 2400
  },
  {
      "sku": 20040811,
      "brand": "Glucerna",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": 20040812,
      "brand": "Glucerna",
      "points": 24,
      "weightInGrams": 2400
  },
  {
      "sku": 20040860,
      "brand": "Glucerna",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": 20040861,
      "brand": "Glucerna",
      "points": 24,
      "weightInGrams": 2400
  },
  {
      "sku": 20044861,
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20044859,
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20044857,
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20044835,
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20044833,
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20044831,
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20041062,
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20046427,
      "brand": "PediaSure",
      "points": 42,
      "weightInGrams": 4200
  },
  {
      "sku": 20046435,
      "brand": "PediaSure",
      "points": 42,
      "weightInGrams": 4200
  },
  {
      "sku": 20046440,
      "brand": "PediaSure",
      "points": 42,
      "weightInGrams": 4200
  },
  {
      "sku": 20043008,
      "brand": "Ensure",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": 20046389,
      "brand": "Ensure",
      "points": 14,
      "weightInGrams": 1480
  },
  {
      "sku": 20046391,
      "brand": "Ensure",
      "points": 14,
      "weightInGrams": 1480
  },
  {
      "sku": 20046393,
      "brand": "Ensure",
      "points": 14,
      "weightInGrams": 1480
  },
  {
      "sku": 20046388,
      "brand": "Ensure",
      "points": 22,
      "weightInGrams": 2220
  },
  {
      "sku": 20046390,
      "brand": "Ensure",
      "points": 22,
      "weightInGrams": 2220
  },
  {
      "sku": 20046392,
      "brand": "Ensure",
      "points": 22,
      "weightInGrams": 2220
  },
  {
      "sku": 20046408,
      "brand": "Glucerna",
      "points": 14,
      "weightInGrams": 1480
  },
  {
      "sku": 20046415,
      "brand": "Glucerna",
      "points": 14,
      "weightInGrams": 1480
  },
  {
      "sku": 20046407,
      "brand": "Glucerna",
      "points": 22,
      "weightInGrams": 2220
  },
  {
      "sku": 20046414,
      "brand": "Glucerna",
      "points": 22,
      "weightInGrams": 2220
  },
  {
      "sku": 20046387,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20046397,
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20046400,
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20046445,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20046375,
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20046364,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20046395,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": 20046365,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20046396,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": 20047791,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20047782,
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20047784,
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20047795,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20047798,
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20040877,
      "brand": "PediaSure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20040943,
      "brand": "PediaSure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20040946,
      "brand": "PediaSure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20040949,
      "brand": "PediaSure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "S900.151D",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": "S900.953D",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": "S901.151D",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": "S901.953D",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": "S902.151D",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S902.953DB",
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "S902.954A",
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "S903.151D",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S903.953DB",
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "S934.120P",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 200
  },
  {
      "sku": "S934.151A",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": "S934.151P",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": "Y534.151A",
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "Y534.82B",
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "Y534.954",
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "Y535.151A",
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "Y535.82B",
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "Y535.954",
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "Y650.151DH",
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "Y650.82BDH",
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "Y650.953DH",
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "Y650.954DH",
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "Y651.151DH",
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "Y651.82BDH",
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "Y651.953DH",
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "Y651.954DH",
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "Y674.151DH",
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "Y674.82BDH",
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": "Y674.953DH",
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "Y674.954DH",
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": "S900.151E",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": "S900.953E",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": "S901.151E",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": "S901.953E",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": "S902.151E",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S902.953EB",
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": "S903.151E",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S903.953EB",
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20038327,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20038328,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": 20038329,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20038330,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": 20038331,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20038332,
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20045364,
      "brand": "Similac",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20038333,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20038334,
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20043312,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 200
  },
  {
      "sku": 20043058,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": 20043263,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20044836,
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20044858,
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20044860,
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20044830,
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20044832,
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20044834,
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20046444,
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20046431,
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20046432,
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20046433,
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20045877,
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20045876,
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20045360,
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20045361,
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20045367,
      "brand": "Pediasure",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20045883,
      "brand": "Pediasure",
      "points": 30,
      "weightInGrams": 3000
  },
  {
      "sku": 20045362,
      "brand": "Pediasure",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20045363,
      "brand": "Pediasure",
      "points": 18,
      "weightInGrams": 1800
  },
  {
      "sku": 20041819,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20041820,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": 20047786,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20047788,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 1200
  },
  {
      "sku": 20047789,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20047793,
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20041825,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20041826,
      "brand": "Similac",
      "points": 12,
      "weightInGrams": 1200
  },
  {
      "sku": 20056154,
      "brand": "Pediasure",
      "points": 54,
      "weightInGrams": 5400
  },
  {
      "sku": 20056163,
      "brand": "Pediasure",
      "points": 54,
      "weightInGrams": 5400
  },
  {
      "sku": 20056155,
      "brand": "Pediasure",
      "points": 54,
      "weightInGrams": 5400
  },
  {
      "sku": 20056148,
      "brand": "Pediasure",
      "points": 54,
      "weightInGrams": 5400
  },
  {
      "sku": 20056145,
      "brand": "Pediasure",
      "points": 54,
      "weightInGrams": 5400
  },
  {
      "sku": 20056146,
      "brand": "Pediasure",
      "points": 54,
      "weightInGrams": 5400
  },
  {
      "sku": 20046379,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": "S900.151XHZ",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20046380,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": "S901.151XHZ",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20046381,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S902.151XHZ",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20046374,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "S903.151XHZ",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "100Y650223240",
      "brand": "Pediasure",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": 20058930,
      "brand": "Similac",
      "points": 42,
      "weightInGrams": 4200
  },
  {
      "sku": 20058965,
      "brand": "Similac",
      "points": 42,
      "weightInGrams": 4200
  },
  {
      "sku": 20058968,
      "brand": "Similac",
      "points": 36,
      "weightInGrams": 3600
  },
  {
      "sku": 20058967,
      "brand": "Similac",
      "points": 36,
      "weightInGrams": 3600
  },
  {
      "sku": "100Y524223153",
      "brand": "Glucerna",
      "points": 8,
      "weightInGrams": 800
  },
  {
      "sku": "100J054223140",
      "brand": "Ensure",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100J053223153",
      "brand": "Ensure",
      "points": 8,
      "weightInGrams": 800
  },
  {
      "sku": "S903.151XLZ",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "100Y495223153",
      "brand": "Glucerna",
      "points": 8,
      "weightInGrams": 800
  },
  {
      "sku": 20047792,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "100J054223153",
      "brand": "Ensure",
      "points": 8,
      "weightInGrams": 800
  },
  {
      "sku": "100Y523223153",
      "brand": "Glucerna",
      "points": 8,
      "weightInGrams": 800
  },
  {
      "sku": "S902.151XLZ",
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "100J052223140",
      "brand": "Ensure",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100J053223140",
      "brand": "Ensure",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100J052223153",
      "brand": "Ensure",
      "points": 8,
      "weightInGrams": 800
  },
  {
      "sku": 20047796,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": "100Y576223153",
      "brand": "Ensure",
      "points": 8,
      "weightInGrams": 800
  },
  {
      "sku": "100M820823471",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 370
  },
  {
      "sku": "100S223823472",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 375
  },
  {
      "sku": "100S223823572",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 375
  },
  {
      "sku": "100S223823672",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 375
  },
  {
      "sku": "100S948823341",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 360
  },
  {
      "sku": "100S948823441",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 360
  },
  {
      "sku": "100Y540823171",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 370
  },
  {
      "sku": "100Y540823271",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 370
  },
  {
      "sku": "100M820823485",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 850
  },
  {
      "sku": "100S223823485",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 850
  },
  {
      "sku": "100S223823585",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 850
  },
  {
      "sku": "100S223823685",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 850
  },
  {
      "sku": "100S948823383",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 820
  },
  {
      "sku": "100S948823483",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 820
  },
  {
      "sku": "100S949823183",
      "brand": "Similac",
      "points": 8,
      "weightInGrams": 820
  },
  {
      "sku": "100S949823383",
      "brand": "Similac",
      "points": 8,
      "weightInGrams": 820
  },
  {
      "sku": "100Y540823185",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 850
  },
  {
      "sku": "100Y540823285",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 850
  },
  {
      "sku": "S935.151P",
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20040835,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20043339,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20043237,
      "brand": "Similac",
      "points": 6,
      "weightInGrams": 600
  },
  {
      "sku": 20043189,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": 20043289,
      "brand": "Similac",
      "points": 0,
      "weightInGrams": 600
  },
  {
      "sku": "100Y674223260",
      "brand": "Pediasure",
      "points": 16,
      "weightInGrams": 1600
  },
  {
      "sku": "100Y674223285",
      "brand": "Pediasure",
      "points": 8,
      "weightInGrams": 850
  },
  {
      "sku": "100S254123540",
      "brand": "Isomil",
      "points": 4,
      "weightInGrams": 400
  },
  {
      "sku": "100S254123585",
      "brand": "Isomil",
      "points": 8,
      "weightInGrams": 850
  }
];
let skuArray = [
  '100S907223140',
  '100S907223185',
  '100S956223185',
  '100S907223187',
  '100S907223240',
  '100S907223287',
  '100S956223140',
  '100S956223240',
  '100S956223287',
  '100Y511223185',
  '100Y511223187',
  '100Y511223240',
  '100Y511223287',
  '100Y576223187',
  '100S348223452',
  '100S975223140',
  '100S975223160',
  '100S975223185',
  '100S976223160',
  '100S976223185',
  '100Y496223160',
  '100Y496223185',
  '100Y576223140',
  '100Y576223185',
  '100Y511223340',
  '100S907223340',
  '100S956223340',
  '100Y511223285',
  '100S907223285',
  '100S956223285',
  '100Y535223185',
  '100Y534223185',
  '100Y650223185',
  '100Y650223140',
  '100Y650223160',
  '100Y651223185',
  '100Y651223160',
  '100Y674223185',
  '100Y674223160',
  '100Y523223185',
  '100Y523223140',
  '100Y495223285',
  '100Y495223240',
  '100Y524223185',
  '100Y524223140',
  '100Y650223240',
  '100Y524223153',
  '100J054223140',
  '100J053223153',
  '100Y495223153',
  '100J054223153',
  '100Y523223153',
  '100J052223140',
  '100J053223140',
  '100J052223153',
  '100Y576223153',
  '100M820823471',
  '100S223823472',
  '100S223823572',
  '100S223823672',
  '100S948823341',
  '100S948823441',
  '100Y540823171',
  '100Y540823271',
  '100M820823485',
  '100S223823485',
  '100S223823585',
  '100S223823685',
  '100S948823383',
  '100S948823483',
  '100S949823183',
  '100S949823383',
  '100Y540823185',
  '100Y540823285',
  '100Y674223260',
  '100Y674223285',
  '100S254123540',
  '100S254123585'
];
let url = 'https://loyalty.abbottmalaysia.com.my';
let testArray = [];
test.map((item) => {
  let brandPath = 'pediasure';
  if (item.brand.toLowerCase().replace(' ', '') === 'ensure') {
      brandPath = 'ensure-gold';
  } else if (item.brand.toLowerCase().replace(' ', '') === 'glucerna') {
      brandPath = 'glucerna';
  } else if (item.brand.toLowerCase().replace(' ', '') === 'similacmom') {
      brandPath = 'similac-mom';
  } else if (item.brand.toLowerCase().replace(' ', '') === 'pediasure') {
      brandPath = 'pediasure';
  } else if (item.brand.toLowerCase().replace(' ', '') === 'similac') {
      brandPath = 'similac';
  } else if (item.brand.toLowerCase().replace(' ', '') === 'isomil') {
      brandPath = 'isomil';
  }
  if (skuArray.includes(item.sku)) {
      item.img = `${url}/assets/images/layout-four/products/${brandPath}/${item.sku}.png`;
  } else {
      item.img = '';
  }
  testArray.push(item);

});
console.log(testArray);

// Convert JSON data to a string
const jsonString = JSON.stringify(testArray, null, 2); // The third parameter (2) is for indentation

// Specify the file path
const filePath = 'output.txt';

// Write the JSON string to the file
fs.writeFile(filePath, jsonString, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('JSON data written to', filePath);
  }
});