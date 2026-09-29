// ข้อมูลจำลองรายการเตือนความจำ (Array ของ Objects)
const reminders = [
  { id: 1, task: "ซื้อนมสด", location: "Supermarket", isCompleted: false },
  { id: 2, task: "ส่งพัสดุ", location: "Post Office", isCompleted: false },
  { id: 3, task: "ซื้อขนม", location: "Supermarket", isCompleted: true }, // ทำเสร็จแล้ว
  { id: 4, task: "คืนหนังสือ", location: "Library", isCompleted: false }
];

// ฟังก์ชันค้นหารายการเตือนเมื่อไปถึงสถานที่ที่กำหนด
function getRemindersByLocation(reminderList, currentLocation) {
  // ตรวจสอบข้อมูลนำเข้า (Edge Case)
  if (!Array.isArray(reminderList) || !currentLocation || typeof currentLocation !== 'string') {
    return [];
  }

  // กรองเอาเฉพาะสถานที่ตรงกัน และยังทำไม่เสร็จ (isCompleted === false)
  return reminderList.filter(item => 
    item.location.toLowerCase() === currentLocation.toLowerCase() && !item.isCompleted
  );
}

// === ทดสอบ 3 กรณี (Test Cases) ===

// กรณีที่ 1 (ปกติ): ไปถึง Supermarket (ควรเจอแค่งานที่ยังไม่เสร็จ คือ "ซื้อนมสด")
console.log("1. กรณีปกติ (Supermarket):", getRemindersByLocation(reminders, "Supermarket"));

// กรณีที่ 2 (กรณีขอบ - Edge Case): ไม่ระบุสถานที่ หรือส่งค่าเป็น null/ค่าว่าง
console.log("2. กรณีขอบ (ไม่ระบุสถานที่):", getRemindersByLocation(reminders, ""));

// กรณีที่ 3 (ไม่พบข้อมูล): ไปถึงสถานที่ที่ไม่มีในรายการเตือน เช่น "Hospital"
console.log("3. กรณีไม่พบข้อมูล (Hospital):", getRemindersByLocation(reminders, "Hospital"));