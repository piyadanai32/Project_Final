import React, { useState } from "react";

function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");
  const [percentages, setPercentages] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // สร้าง URL สำหรับแสดงภาพที่เลือก
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    } else {
      setPreview(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setShowPopup(true);
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.result);
        setPercentages(data.percentages);
      } else {
        console.error("Error from server:", response.statusText);
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการอัปโหลดรูปภาพ:", error);
    } finally {
      setIsLoading(false);
      setShowPopup(true);
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r flex flex-col items-center justify-center px-4 text-white">
      <div className="bg-gray-800 shadow-2xl rounded-2xl p-10 max-w-lg w-full text-center border border-gray-700">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6">
          อัปโหลดภาพ Sentinel-2
        </h1>
        <p className="text-gray-300 mb-8 text-lg">
          เลือกรูปภาพเพื่อจำแนกประเภท เช่น "อ้อย" หรือ "มันสำปะหลัง"
        </p>
        <div className="mb-6">
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            className="w-full px-4 py-3 border border-gray-600 rounded-lg text-gray-300 bg-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {preview && (
          <div className="mb-6">
            <p className="text-gray-300 mb-3 text-lg">ภาพที่คุณเลือก:</p>
            <img
              src={preview}
              alt="Preview"
              className="w-64 h-64 object-contain border border-gray-600 rounded-lg shadow-lg"
            />
          </div>
        )}

        <button
          onClick={handleUpload}
          className={`w-full ${
            isLoading ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          } text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400 mb-6`}
          disabled={isLoading}
        >
          {isLoading ? "กำลังประมวลผล..." : "อัปโหลดและจำแนก"}
        </button>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-sm text-center border border-gray-700">
            {result ? (
              <>
                <p className="text-blue-400 text-xl font-bold mb-4">
                  ผลการจำแนก: <span className="text-green-400">{result}</span>
                </p>
                <p className="text-md text-gray-300 mb-6">
                  <strong>ความน่าจะเป็น:</strong>
                  <span className="block mt-2">
                    <strong>อ้อย:</strong> {percentages["SugarCane"] || "-"}
                  </span>
                  <span>
                    <strong>มันสำปะหลัง:</strong> {percentages["Cassava"] || "-"}
                  </span>
                </p>
                {preview && (
                  <div className="mb-6">
                    <p className="text-gray-300 mb-3">ภาพที่คุณอัปโหลด:</p>
                    <img
                      src={preview}
                      alt="Uploaded Preview"
                      className="w-64 h-64 object-contain border border-gray-600 rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </>
            ) : (
              <p className="text-blue-400 text-xl font-bold mb-4">
                กรุณาเลือกรูปภาพก่อนอัปโหลด!
              </p>
            )}
            <button
              onClick={refreshPage}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg focus:outline-none"
            >
              ตกลง
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadImage;
