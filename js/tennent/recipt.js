
    document.getElementById('download-btn').addEventListener('click', function () {
        const element = document.querySelector('.receipt-content');
        const opt = {
            margin:       0.5,
            filename:     'receipt.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(opt).save();
    });
