def calculate_fuel_cost(distance_km, fuel_consumption_km_l, fuel_price_per_liter):
    """
    คำนวณค่าน้ำมันสำหรับการเดินทาง
    :param distance_km: ระยะทาง (กิโลเมตร)
    :param fuel_consumption_km_l: อัตราประหยัดน้ำมัน (กิโลเมตร/ลิตร)
    :param fuel_price_per_liter: ราคาน้ำมันปัจจุบัน (บาท/ลิตร)
    :return: ค่าน้ำมันรวม (บาท)
    """
    if fuel_consumption_km_l <= 0:
        return "อัตราประหยัดน้ำมันต้องมากกว่า 0"
    
    liters_used = distance_km / fuel_consumption_km_l
    total_cost = liters_used * fuel_price_per_liter
    return round(total_cost, 2)

# ตัวอย่างการใช้งาน: ระยะทาง 150 กม., รถกินน้ำมัน 15 กม./ลิตร, น้ำมันราคา 38 บาท/ลิตร
distance = 150
consumption = 15
price = 38

cost = calculate_fuel_cost(distance, consumption, price)
print(f"ค่าน้ำมันรวม: {cost} บาท")
# ผลลัพธ์: ค่าน้ำมันรวม: 380.0 บาท

"ตรวจแล้วถูก"


## Part C - c_debug.js
**Prompt:**
ช่วยดีบั๊กโค้ด JavaScript ไฟล์นี้ให้หน่อยครับ
1. ผลลัพธ์ที่ได้จริงจาก Terminal: [มี Error / ได้ค่าไม่ตรงตามคาด]
2. โค้ดในไฟล์ c_debug.js:
const buses = [
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
];
const lateRoutes = buses.filter(b => { b.late }).map(b => b.route);
const total = buses.reduce((sum, b) => sum + b.passengers);
console.log("สายที่มาสาย:", lateRoutes);
console.log("ผู้โดยสารรวม:", total);

3. สิ่งที่คาดหวัง: lateRoutes ได้ ["NGV-2", "NGV-3"], total ได้ 145
4. สิ่งที่เดาไว้: filter มีปัญหาเรื่องการคืนค่าจากปีกกา {}, reduce ขาดค่าเริ่มต้น
คำสั่ง: ช่วยอธิบายสาเหตุของบั๊กก่อน แล้วค่อยให้โค้ดที่แก้แล้ว โดยอย่าเปลี่ยนส่วนที่ไม่เกี่ยวข้อง

**ผลลัพธ์ย่อ:** ได้อธิบายบั๊กเรื่อง arrow function ปีกกาขาด return และ reduce ขาด initial value พร้อมโค้ดที่แก้ไขแล้ว
**ตรวจแล้ว:** ใช้ได้
**รอบที่ iterate:** 1 - ได้ผลถูกต้องในรอบแรก

---

## Part D - d_story.js
**Prompt:**
กำลังทำระบบแจ้งเตือนตามสถานที่ (Location-based Reminder)
User Story: As a user, I want the app to automatically remind me about important things when I arrive at a specific location, so that I don't forget what I need to do at that place.

ข้อกำหนด:
- ขอเป็นฟังก์ชัน JavaScript ล้วนที่ทำงานกับ array ของ object (ยังไม่ต้องมี UI)
- ก่อนเขียนโค้ด ถาม 3 คำถามที่จำเป็นต่อการทำงานนี้ให้ถูกต้อง

หลังจากตอบคำถาม AI 3 ข้อ (กำหนดโครงสร้างข้อมูล, สถานะการทำเสร็จ, และกรณีไม่พบสถานที่) จึงสั่งให้สร้างฟังก์ชันพร้อมตัวอย่างข้อมูลจำลอง และ console.log ทดสอบ 3 กรณี (รวมกรณีขอบ 1 กรณี)

**ผลลัพธ์ย่อ:** ได้ฟังก์ชัน getRemindersByLocation + 3 กรณีทดสอบ (กรณีปกติ, กรณีขอบค่าว่าง, กรณีไม่พบสถานที่)
**ตรวจแล้ว:** ใช้ได้
**รอบที่ iterate:** 1 - รันผ่านทั้ง 3 กรณีในรอบแรก