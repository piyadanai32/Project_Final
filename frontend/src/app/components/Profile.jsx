import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container text-center">
      <h1 className="profile-title text-3xl font-extrabold mb-8">ทีมผู้จัดทำโครงการ</h1>
      <div className="advisor-section mt-10">
        <h1 className="advisor-title text-2xl font-bold mb-6">อาจารย์ที่ปรึกษา</h1>
        <img
          src="/images/sangdaow.jpg"
          alt="Sangdaow"
          className="profile-image w-48 h-48 rounded-full mx-auto mb-4"
        />
        <h2 className="advisor-name text-xl font-semibold">อาจารย์ ดร.แสงดาว นพพทกษ์</h2>
        <h2 className="advisor-role text-sm">อาจารย์ที่ปรึกษาโครงการ</h2>
      </div>
      <div className="profile-horizontal">
        <div className="profile-section">
          <img
            src="/images/piyadanai.jpg"
            alt="Piyadanai"
            className="profile-image w-48 h-48 rounded-full mx-auto mb-4"
          />
          <h2 className="profile-name text-xl font-semibold">นาย ปิยดนัย โครงกลาง</h2>
          <h2 className="profile-id text-sm">รหัสนักศึกษา 650112418059</h2>
        </div>
        <div className="profile-section">
          <img
            src="/images/thanet.jpg"
            alt="Thanet"
            className="profile-image w-48 h-48 rounded-full mx-auto mb-4"
          />
          <h2 className="profile-name text-xl font-semibold">นาย ธเนศ ไตแดง</h2>
          <h2 className="profile-id text-sm">รหัสนักศึกษา 650112418053</h2>
        </div>
      </div>

      <div className="department text-2xl font-medium mt-8">
        เทคโนโลยีสารสนเทศ
      </div>
    </div>
  );
}

export default Profile;
