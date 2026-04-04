# Hướng Dẫn Thiết Lập Cáo Cơ Sở Dữ Liệu Google Sheet (Backend)

Vì ứng dụng không có server riêng, chúng ta sẽ biến **Google Sheets** thành Server Database bằng công cụ Google Apps Script. 

Hãy làm theo các bước siêu phân tích sau đây (mất chỉ 3 phút):

## Bước 1: Tạo bảng tính (Google Spreadsheet)
1. Hãy truy cập [Google Sheets](https://sheets.google.com/) và tạo một Bảng tính trống (Blank).
2. Trọng tâm: Đổi tên tab đầu tiên (vốn là `Sheet1`) thành `Users`. Ở dòng số 1, điền tên cột như sau:
   - Ô A1: `Username`
   - Ô B1: `Password`
   - Ô C1: `CreatedAt`
3. Nhấn dấu `+` ở góc dưới bên trái để tạo thêm 1 Tab tên là `Data`. Ở dòng 1 điền:
   - Ô A1: `Username`
   - Ô B1: `PayloadData`
   - Ô C1: `LastUpdated`

## Bước 2: Dán mã Backend (Apps Script)
1. Trên thanh công cụ Bảng tính, nhấp vào **Trực quan hóa (Extensions)** -> Chọn **Apps Script**.
2. Một tab mới hiện ra, hãy **xóa toàn bộ CODE CŨ** trong file `Mã.gs` (`Code.gs`) và dán toàn bộ đoạn code dưới đây vào:

```javascript
function doPost(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  };
  
  if (!e || !e.postData || !e.postData.contents) {
    return ContentService.createTextOutput(JSON.stringify({error: "No data"}))
                         .setMimeType(ContentService.MimeType.JSON);
  }
  
  var payload = JSON.parse(e.postData.contents);
  var action = payload.action;
  var username = payload.username;
  var password = payload.password;
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var userSheet = ss.getSheetByName("Users");
  var dataSheet = ss.getSheetByName("Data");
  
  if (action === "register") {
    // Check exist
    var uData = userSheet.getDataRange().getValues();
    for (var i = 1; i < uData.length; i++) {
      if (typeof uData[i][0] === "string" && uData[i][0].toLowerCase() === username.toLowerCase()) {
        return buildResponse({ success: false, message: "Tài khoản (Username) đã tồn tại!" });
      }
    }
    userSheet.appendRow([username, password, new Date().toISOString()]);
    // Create empty payload row
    dataSheet.appendRow([username, "{}", new Date().toISOString()]);
    return buildResponse({ success: true, message: "Đăng ký thành công!" });
  } 
  
  else if (action === "login") {
    var uData = userSheet.getDataRange().getValues();
    for (var i = 1; i < uData.length; i++) {
      if (typeof uData[i][0] === "string" && uData[i][0].toLowerCase() === username.toLowerCase()) {
        if (uData[i][1].toString() === password.toString()) {
          // Lấy dữ liệu cũ
          var dData = dataSheet.getDataRange().getValues();
          var userPayload = "{}";
          for (var j = 1; j < dData.length; j++) {
            if (dData[j][0].toLowerCase() === username.toLowerCase()) {
              userPayload = dData[j][1];
              break;
            }
          }
          return buildResponse({ success: true, message: "Đăng nhập thành công!", data: userPayload });
        } else {
          return buildResponse({ success: false, message: "Sai mật khẩu!" });
        }
      }
    }
    return buildResponse({ success: false, message: "Tài khoản không tồn tại!" });
  }
  
  else if (action === "sync") {
    var payloadData = payload.data; // chuỗi JSON của tiến độ học
    var dData = dataSheet.getDataRange().getValues();
    var found = false;
    for (var j = 1; j < dData.length; j++) {
       if (dData[j][0].toLowerCase() === username.toLowerCase()) {
          dataSheet.getRange(j + 1, 2).setValue(payloadData);
          dataSheet.getRange(j + 1, 3).setValue(new Date().toISOString());
          found = true;
          break;
       }
    }
    if (!found) {
      dataSheet.appendRow([username, payloadData, new Date().toISOString()]);
    }
    return buildResponse({ success: true, message: "Đồng bộ (sync) lên cloud thành công!" });
  }
  
  return buildResponse({ success: false, message: "Hành động không hợp lệ." });
}

function buildResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
                       .setMimeType(ContentService.MimeType.JSON);
}
```

3. Nhấp biểu tượng đĩa mềm (Save) lưu lại.

## Bước 3: Xuất bản (Thao tác cực kỳ quan trọng)
1. Góc phải trên cùng của màn hình Apps Script, nhấn nhút xanh **Triển khai (Deploy)** -> **Tùy chọn triển khai mới (New deployment)**.
2. Bên góc `Chọn loại (Select type)`, hãy nhắp biểu tượng Nút Răng cưa ⚙️ và chọn **Ứng dụng Web (Web app)**.
3. Trong biểu mẫu thiết lập:
   - Mô tả (Description): `v1`
   - Ứng dụng thực thi dưới dạng (Execute as): `Tôi (Me)`
   - Người có quyền truy cập (Who has access): `Bất kỳ ai (Anyone)` (Rất quan trọng, để app gọi không bị dính quyền Google).
4. Nhấn nút xanh **Triển khai (Deploy)**. Nó sẽ bắt bạn **Nộp quyền (Authorize access)**. Chọn vào tài khoản email của bạn -> Sẽ bị cảnh báo màu đỏ -> Nhấn `Nâng cao (Advanced)` -> Kéo xuống dòng `Đi tới Untitled project (không an toàn)`. Sau đó "Cho phép" (Allow).
5. Nó sẽ cho bạn một đường link rất dài bắt đầu bằng: `https://script.google.com/macros/s/..../exec`

## Xong
📋 **Hãy copy toàn bộ cái đường link đó và dán reply báo lại vào khung chat cho tôi.** 

> Lưu ý: Tôi đang ở trong chế độ chờ url để ráp vào mã bộ lõi (`app.js`). Cứ thong thả làm theo nhé, lấy được link thì rep tin nhắn cho tôi!
