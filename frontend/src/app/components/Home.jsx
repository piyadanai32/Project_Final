import React from "react";

function Home() {
  return (
    <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-xl text-white shadow-lg text-center">
      <h1 className="text-2xl font-bold mb-4">สวัสดียินดีต้อนรับเข้าสู่เว็บแอปพลิเคชันจำแนกภาพถ่าย SENTINEL-2 ของอ้อยและมันสัมปะหลัง</h1>
      <p className="text-lg text-gray-300">
      สำรวจพลังของภาพถ่ายดาวเทียมและ AI ในการจำแนกและวิเคราะห์ข้อมูล
      </p>
      <img
        src="https://dataspace.copernicus.eu/sites/default/files/styles/opengraph/public/media/images/2023-03/sentinel-2.jpg?itok=V6k97eQF"
        alt="Satellite imagery from SENTINEL-2"
        className="w-full h-auto rounded-lg my-4"
      />
      <p className="text-lg text-gray-300">
        ภาพถ่ายจากดาวเทียม SENTINEL-2 รายละเอียด 20 เมตร และข้อมูลจุดความร้อนจากดาวเทียม Suomi NPP ระบบ VIIRS วันที่ 5 มีนาคม 2564
      </p>
      <p className="text-sm text-gray-400 mt-2">
        ดาวเทียมสแกนเขื่อนภูมิพลพบพื้นที่เผาไหม้กว่า 52,200 ไร่ กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม โดยสำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ (องค์การมหาชน) หรือ GISTDA เผยภาพจากดาวเทียม SENTINEL-2 พบพื้นที่เผาไหม้บริเวณโดยรอบเขื่อนภูมิพล จ.ตาก กว่า 52,200 ไร่ และปรากฏภาพหัวไฟที่ยังคงลุกไหม้กระจายอยู่หลายจุด...
      </p>
      <p className="text-sm text-gray-400 mt-2">
        ข้อมูลดังกล่าวจะใช้เป็นข้อมูลพื้นฐานให้กับหน่วยงานที่เกี่ยวข้องในการเข้าตรวจสอบในพื้นที่จริงร่วมกับจังหวัด เพื่อนำไปสู่การวางแผนฟื้นฟู ป้องกัน และสร้างความเข้าใจให้กับประชาชนในพื้นที่ในการสนับสนุนการมีส่วนร่วมของชุมชนและสังคมอย่างยั่งยืน...
      </p>
    </div>
  );
}

export default Home;
