/**
 * Hacker Typer Effect for s1mpl3 Portfolio
 */
const typewriterEffect = () => {
    const element = document.getElementById("typewriter");
    const text = "< Hi, I'm Huynh Minh Truong (Marc) />";
    const speed = 100; // Tốc độ gõ (ms)
    let i = 0;

    // Hàm thực hiện việc gõ từng ký tự
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    // Kiểm tra xem phần tử có tồn tại không trước khi chạy để tránh lỗi console
    if (element) {
        type();
    }
};

// Đảm bảo DOM đã load hoàn toàn trước khi thực thi script
document.addEventListener("DOMContentLoaded", () => {
    typewriterEffect();
    
    // Bạn có thể thêm các hàm xử lý sự kiện khác ở đây trong tương lai
    console.log("System status: [ONLINE] - Welcome, s1mpl3.");
});
