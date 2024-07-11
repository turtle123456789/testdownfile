const fs = require('fs');
const path = require('path');
const down = (newUser) => {
    return new Promise(async (resolve, reject) => {
        try {
        
        } catch (e) {
            reject(e)
        }
    })
}
const getAll = () => {
    const folder = path.join(__dirname, '../upload'); // Sử dụng __dirname để đảm bảo đường dẫn chính xác
    return new Promise((resolve, reject) => {
        try {
            fs.readdir(folder, (err, listFile) => {
                if (err) {
                    // Lỗi khi đọc thư mục
                    return reject({
                        status: 'ERROR',
                        message: 'Error reading folder',
                        error: err
                    });
                }
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: listFile
                });
            });
        } catch (e) {
            reject(e)
        }
    });
}
module.exports = {
    down,
    getAll
}