<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>اینفوگرافیک روند بازار هوش مصنوعی در صنایع خلاق</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;800&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Vazirmatn', sans-serif;
            background-color: #f8fafc;
        }
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            height: 350px;
            max-height: 400px;
        }
        @media (max-width: 768px) {
            .chart-container {
                height: 300px;
            }
        }
        .kpi-box {
            background: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
    </style>
</head>
<body class="bg-slate-50 text-slate-800">

    <div class="container mx-auto p-4 sm:p-6 md:p-8">

        <header class="text-center my-8 md:my-12">
            <h1 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-800">
                تحلیل جامع بازار هوش مصنوعی در صنایع خلاق
            </h1>
            <p class="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                نگاهی عمیق به آمار، روندها و پیش‌بینی‌های کلیدی که آینده این صنعت پویا را شکل می‌دهند.
            </p>
        </header>

        <section class="text-center my-12">
             <div class="kpi-box rounded-xl shadow-lg p-6 max-w-md mx-auto">
                <p class="text-2xl font-semibold text-slate-700">ارزش تخمینی بازار تا سال ۲۰۲۸</p>
                <p class="text-6xl font-bold text-indigo-700 my-2">
                    $۱۵۰<span class="text-4xl align-baseline">میلیارد</span>
                </p>
                <p class="text-base text-slate-500">با نرخ رشد سالانه ترکیبی ۲۵.۷٪</p>
            </div>
        </section>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div class="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
                <h2 class="text-2xl font-bold mb-1 text-slate-800">رشد اندازه بازار (۲۰۲۰ - ۲۰۲۸)</h2>
                <p class="text-slate-500 mb-4 text-sm">این نمودار روند صعودی و رشد نمایی ارزش بازار جهانی هوش مصنوعی در صنایع خلاق را نشان می‌دهد که بر اساس میلیارد دلار محاسبه شده است.</p>
                <div class="chart-container">
                    <canvas id="marketSizeChart"></canvas>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
                <h2 class="text-2xl font-bold mb-1 text-slate-800">سهم بازار شرکت‌های کلیدی</h2>
                <p class="text-slate-500 mb-4 text-sm">تحلیل توزیع سهم بازار بین بازیگران اصلی در سال ۲۰۲۴. شرکت‌های پیشرو با نوآوری در الگوریتم‌ها، سهم بیشتری را به خود اختصاص داده‌اند.</p>
                <div class="chart-container">
                    <canvas id="marketShareChart"></canvas>
                </div>
            </div>

            <div class="lg:col-span-3 bg-white rounded-xl shadow-lg p-6">
                <h2 class="text-2xl font-bold mb-1 text-slate-800">نرخ پذیرش در بخش‌های مختلف صنعت خلاق</h2>
                <p class="text-slate-500 mb-4 text-sm">این نمودار مقایسه‌ای، میزان استفاده از ابزارهای هوش مصنوعی را در بخش‌های اصلی صنعت خلاق در سال‌های ۲۰۲۲ و ۲۰۲۴ نشان می‌دهد. بخش بازی‌سازی و طراحی گرافیک پیشتاز هستند.</p>
                <div class="chart-container" style="max-width: 900px;">
                    <canvas id="adoptionRateChart"></canvas>
                </div>
            </div>

            <div class="lg:col-span-3 bg-white rounded-xl shadow-lg p-6">
                <h2 class="text-2xl font-bold mb-1 text-slate-800">فرآیند گردش کار خلاق با هوش مصنوعی</h2>
                <p class="text-slate-500 mb-4 text-sm">این نمودار فرآیندی، چگونگی ادغام هوش مصنوعی در مراحل مختلف یک پروژه خلاق، از ایده تا محصول نهایی را به تصویر می‌کشد.</p>
                <div class="mt-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 text-center">
                    <div class="p-4 bg-slate-100 rounded-lg w-full md:w-auto">
                        <p class="text-2xl mb-2">💡</p>
                        <h3 class="font-bold">۱. ایده و مفهوم</h3>
                        <p class="text-xs text-slate-500">طوفان فکری اولیه</p>
                    </div>
                    <div class="font-bold text-3xl text-indigo-400 transform md:-translate-y-4">→</div>
                    <div class="p-4 bg-indigo-100 rounded-lg w-full md:w-auto">
                        <p class="text-2xl mb-2">🤖</p>
                        <h3 class="font-bold text-indigo-800">۲. تولید توسط AI</h3>
                        <p class="text-xs text-slate-500">ساخت پیش‌نویس اولیه</p>
                    </div>
                    <div class="font-bold text-3xl text-indigo-400 transform md:-translate-y-4">→</div>
                     <div class="p-4 bg-slate-100 rounded-lg w-full md:w-auto">
                        <p class="text-2xl mb-2">🎨</p>
                        <h3 class="font-bold">۳. پالایش انسانی</h3>
                        <p class="text-xs text-slate-500">ویرایش و بهینه‌سازی</p>
                    </div>
                    <div class="font-bold text-3xl text-indigo-400 transform md:-translate-y-4">→</div>
                    <div class="p-4 bg-green-100 rounded-lg w-full md:w-auto">
                        <p class="text-2xl mb-2">🏆</p>
                        <h3 class="font-bold text-green-800">۴. محصول نهایی</h3>
                        <p class="text-xs text-slate-500">انتشار و توزیع</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
<script>
const PALETTE = {
    blue_dark: '#1e3a8a',
    blue_medium: '#2563eb',
    blue_light: '#60a5fa',
    accent_yellow: '#facc15',
    accent_green: '#4ade80',
    slate_light: '#cbd5e1',
    slate_dark: '#475569'
};

function wrapLabel(label, maxWidth = 16) {
    if (label.length <= maxWidth) {
        return label;
    }
    const words = label.split(' ');
    const lines = [];
    let currentLine = '';
    for (const word of words) {
        if ((currentLine + ' ' + word).length > maxWidth) {
            lines.push(currentLine);
            currentLine = word;
        } else {
            currentLine = currentLine ? currentLine + ' ' + word : word;
        }
    }
    lines.push(currentLine);
    return lines;
}

const tooltipCallbacks = {
    plugins: {
        legend: {
            labels: {
                font: { family: 'Vazirmatn' }
            }
        },
        tooltip: {
            titleFont: { family: 'Vazirmatn' },
            bodyFont: { family: 'Vazirmatn' },
            callbacks: {
                title: function(tooltipItems) {
                    const item = tooltipItems[0];
                    let label = item.chart.data.labels[item.dataIndex];
                    if (Array.isArray(label)) {
                        return label.join(' ');
                    } else {
                        return label;
                    }
                }
            }
        }
    },
    scales: {
        y: {
            ticks: { font: { family: 'Vazirmatn' } }
        },
        x: {
            ticks: { font: { family: 'Vazirmatn' } }
        }
    }
};

new Chart(document.getElementById('marketSizeChart'), {
    type: 'line',
    data: {
        labels: ['۲۰۲۰', '۲۰۲۱', '۲۰۲۲', '۲۰۲۳', '۲۰۲۴', '۲۰۲۵ (تخمین)', '۲۰۲۶ (تخمین)', '۲۰۲۷ (تخمین)', '۲۰۲۸ (تخمین)'],
        datasets: [{
            label: 'ارزش بازار (میلیارد دلار)',
            data: [12, 19, 28, 40, 55, 72, 95, 120, 150],
            borderColor: PALETTE.blue_medium,
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        ...tooltipCallbacks
    }
});

new Chart(document.getElementById('marketShareChart'), {
    type: 'doughnut',
    data: {
        labels: ['شرکت آلفا (نوآوری)', 'شرکت بتا (راهکار جامع)', 'شرکت گاما (متن‌باز)', 'سایر شرکت‌ها'],
        datasets: [{
            label: 'سهم بازار',
            data: [35, 28, 17, 20],
            backgroundColor: [PALETTE.blue_dark, PALETTE.blue_medium, PALETTE.blue_light, PALETTE.slate_light],
            borderColor: '#ffffff',
            borderWidth: 2,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        ...tooltipCallbacks
    }
});

new Chart(document.getElementById('adoptionRateChart'), {
    type: 'bar',
    data: {
        labels: ['تولید موسیقی', 'بازی‌سازی و سرگرمی', 'طراحی گرافیک و هنر', 'صنعت فیلم و انیمیشن', 'نویسندگی و محتوا'].map(l => wrapLabel(l)),
        datasets: [{
            label: 'سال ۲۰۲۲',
            data: [30, 65, 55, 40, 25],
            backgroundColor: PALETTE.slate_light,
            borderColor: PALETTE.slate_dark,
            borderWidth: 1
        }, {
            label: 'سال ۲۰۲۴',
            data: [50, 85, 80, 65, 55],
            backgroundColor: PALETTE.blue_medium,
            borderColor: PALETTE.blue_dark,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        ...tooltipCallbacks
    }
});
</script>
</body>
</html>
