// ฟังก์ชันคำนวณค่าโดยสารรถ NGV ในมหาวิทยาลัย
const calcFare = (distanceKm) => {
  // ตรวจสอบว่าอินพุตเป็นตัวเลขที่ถูกต้องและไม่ติดลบ
  if (typeof distanceKm !== 'number' || isNaN(distanceKm) || distanceKm <= 0) {
    return 0;
  }

  // ปัดเศษกิโลเมตรขึ้นเสมอ
  const distance = Math.ceil(distanceKm);

  // คำนวณค่าโดยสาร: 2 กม. แรก 10 บาท, กม. ถัดไปคิด กม. ละ 2 บาท
  if (distance <= 2) {
    return 10;
  }
  return 10 + (distance - 2) * 2;
};

// ทดสอบ 3 กรณี
console.log(calcFare(1.5)); // คืนค่า 10 (ปัดเป็น 2 กม. -> 10 บาท)
console.log(calcFare(2));   // คืนค่า 10 (2 กม. พอดี -> 10 บาท)
console.log(calcFare(7.2)); // คืนค่า 22 (ปัดเป็น 8 กม. -> 10 + (6 * 2) = 22 บาท)