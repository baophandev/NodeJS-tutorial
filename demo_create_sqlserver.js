const sql = require('mssql');

// Cấu hình kết nối
const config = {
    user: 'sa',
    password: 'sa2023',
    server: 'LAPTOP-1QVPM352', // Tên máy chủ SQL Server
    database: 'CAFEACCOUNT',
    options: {
        encrypt: true, // Sử dụng kết nối an toàn (SSL)
        trustServerCertificate: true, // Bỏ qua chứng chỉ tự ký
    },
};

// Kết nối đến cơ sở dữ liệu
sql.connect(config)
    .then(() => {
        // Truy vấn SQL
        return sql.query`SELECT * FROM VOUCHER`; // Thêm "FROM" vào truy vấn
    })
    .then(result => {
        console.dir(result);
    })
    .catch(err => {
        console.error('Error:', err);
    })
    .finally(() => {
        // Đóng kết nối sau khi hoàn thành công việc
        sql.close();
    });