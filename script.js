// 发送邮件函数
function sendEmail(event) {
    event.preventDefault();
    
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('邮件发送成功！');
            form.reset();
        } else {
            alert('发送失败，请稍后再试。');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('发送过程中出现错误。');
    });
}

// 图片预览功能（如果需要的话）
document.querySelectorAll('.folder').forEach(folder => {
    folder.addEventListener('click', function() {
        const link = this.getAttribute('onclick').match(/'([^']+)'/)[1];
        window.location.href = link;
    });
}); 