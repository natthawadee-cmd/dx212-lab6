# My Personal Prompt Library

# 1. อธิบายโค้ด
Prompt เต็ม: 
"ช่วยอธิบายการทำงานของโค้ด JavaScript ชุดนี้แบบเป็นขั้นตอน สำหรับผู้เริ่มต้น ให้เข้าใจง่ายและกระชับ:
const distance = 12;
let fare = 35;
if (distance > 10) { fare += (distance - 10) * 5; }
console.log(`ค่ามินิบะสรวม: ${fare} บาท`);"

ใช้กับสถานการณ์ไหน: เมื่อเจอโค้ดที่ไม่เข้าใจ หรือต้องการศึกษาการทำงานของฟังก์ชัน
ข้อควรระวัง: AI อาจอธิบายยาวเกินไป ควรระบุว่าขอสรุปสั้นๆ เป็นข้อๆ

# 2. สร้างฟังก์ชันจาก User Story
Prompt เต็ม: 
"กำลังทำระบบแจ้งเตือนตามสถานที่ (Location-based Reminder)
User Story: As a user, I want the app to automatically remind me about important things when I arrive at a specific location, so that I don't forget what I need to do at that place.
ข้อกำหนด: ขอเป็นฟังก์ชัน JavaScript ล้วนที่ทำงานกับ array ของ object (ยังไม่ต้องมี UI) และก่อนเขียนโค้ด ให้ถาม 3 คำถามที่จำเป็นต่อการทำงานนี้ให้ถูกต้อง"

ใช้กับสถานการณ์ไหน: เมื่อเริ่มพัฒนาฟีเจอร์ใหม่จาก User Story
ข้อควรระวัง: อย่าให้ AI เขียนโค้ดทันที ควรให้ถามคำถามเพื่อเก็บ Edge Cases ให้ครบก่อน

# 3. ดีบั๊กโค้ด
Prompt เต็ม: 
"ช่วยดีบั๊กโค้ด JavaScript นี้ให้หน่อย
1. ผลลัพธ์/error ที่ได้จริงจาก terminal: lateRoutes ได้ [] และ total ได้ [object Object]6238
2. โค้ดทั้งไฟล์:
const buses = 
[
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
];
const lateRoutes = buses.filter(b => { b.late }).map(b => b.route);
const total = buses.reduce((sum, b) => sum + b.passengers);
3. สิ่งที่คาดหวัง: lateRoutes ได้ ["NGV-2", "NGV-3"], total ได้ 145
4. สิ่งที่เดาไว้: filter มีปัญหาเรื่องการคืนค่าจากปีกกา {}, reduce ขาดค่าเริ่มต้น
คำสั่ง: ช่วยอธิบายสาเหตุก่อน แล้วค่อยให้โค้ดที่แก้แล้ว โดยอย่าเปลี่ยนส่วนที่ไม่เกี่ยวข้อง"

ใช้กับสถานการณ์ไหน: เมื่อรันโค้ดแล้วเกิด Error หรือได้ผลลัพธ์ไม่ตรง
ข้อควรระวัง: ต้องแนบผลลัพธ์จริงและผลลัพธ์ที่คาดหวังให้ AI เสมอ

# 4. รีวิวและปรับปรุงคุณภาพโค้ด
Prompt เต็ม: 
"ช่วยรีวิวโค้ด JavaScript ต่อไปนี้ให้หน่อย ว่าต้องแก้อะไร เพราะอะไร และขอเหตุผลตามหลัก Clean Code / Best Practice:
function calcFare(d) 
{
  var f = 35;
  if (d > 10) { f = f + (d - 10) * 5; }
  return f;
}"

ใช้กับสถานการณ์ไหน: เมื่อโค้ดทำงานได้แล้ว แต่ต้องการปรับให้ clean อ่านง่ายขึ้น
ข้อควรระวัง: AI อาจเปลี่ยน Logic เดิมมากเกินไปจนส่วนอื่นพัง

# 5. เขียนกรณีทดสอบ
Prompt เต็ม: 
"จากฟังก์ชัน JavaScript ต่อไปนี้:
function getRemindersByLocation(reminderList, currentLocation) 
{
  if (!Array.isArray(reminderList) || !currentLocation || typeof currentLocation !== 'string') { return []; }
  return reminderList.filter(item => item.location.toLowerCase() === currentLocation.toLowerCase() && !item.isCompleted);
}
ช่วยสร้างกรณีทดสอบ (Test Cases) ร่วมกับ console.log ให้หน่อย อย่างน้อย 3 กรณี (กรณีปกติ 2 กรณี และกรณีขอบ/Edge Case 1 กรณี)"

ใช้กับสถานการณ์ไหน: เมื่อต้องการสร้างชุดทดสอบครอบคลุมทุกกรณี
ข้อควรระวัง: ตรวจสอบว่าเงื่อนไข Edge Case ที่ AI สร้างตรงตาม Business Logic จริง