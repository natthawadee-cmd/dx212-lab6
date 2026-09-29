const buses = [
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
];

// แก้จุดที่ 1: เอาปีกกาออก หรือใส่ return b.late
const lateRoutes = buses.filter(b => b.late).map(b => b.route);

// แก้จุดที่ 2: ใส่ค่าเริ่มต้น , 0 ที่ด้านหลัง reduce
const total = buses.reduce((sum, b) => sum + b.passengers, 0);

console.log("สายที่มาสาย:", lateRoutes);    // ผลลัพธ์: ["NGV-2", "NGV-3"]
console.log("ผู้โดยสารรวม:", total);        // ผลลัพธ์: 145

// Arrow function ที่มีปีกกา {}: หากเปิดปีกกา {} ใน arrow function แล้ว จะต้องมีคำสั่ง return ชัดเจนเสมอ ถ้าไม่มีการใส่ return ฟังก์ชันจะคืนค่าเป็น undefined (ส่งผลให้ .filter() ได้ array ว่าง) หรือหากไม่ต้องการเขียน return ต้องเอาปีกกาออกเพื่อใช้การ return แบบ implicit (คืนค่าอัตโนมัติ)   
// reduce ควรใส่ค่าเริ่มต้นเสมอ: การไม่ใส่ค่าเริ่มต้น (Initial Value) ให้กับ .reduce() จะทำให้ JavaScript ใช้ element ตัวแรกของ array (ซึ่งเป็น Object) เป็นค่าเริ่มต้นของสะสม (sum) ในการวนรอบแรก ทำให้การบวกเลขผิดพลาด ดังนั้นการใส่ค่าเริ่มต้นเป็น 0 (เช่น , 0) จะช่วยป้องกันไม่ให้เกิดบั๊กและทำให้ชนิดข้อมูลของตัวสะสมถูกต้องเสมอ