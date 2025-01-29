// مصفوفة بيانات المشاريع
const projects = [
    {
        image: "images/project1.jpg",
        date: "أبريل",
        title: "بادر: نقلة نوعية لتقديم خدمات",
        description: "في أحد الشوارع الرئيسية بين المحافظات...",
        status: "قيد التنفيذ",
        progress: 50
    },
    {
        image: "images/project2.jpg",
        date: "مارس",
        title: "مشروع دعم الأسر المحتاجة",
        description: "يهدف المشروع إلى تقديم المساعدات الأساسية...",
        status: "مكتمل",
        progress: 100
    },
    {
        image: "images/project3.jpg",
        date: "فبراير",
        title: "ترميم المدارس",
        description: "تقديم بيئة تعليمية أفضل للطلاب...",
        status: "قيد التنفيذ",
        progress: 20
    },

    {
        image: "images/project5.jpeg",
        date: "فبراير",
        title: "ترميم المدارس",
        description: "تقديم بيئة تعليمية أفضل للطلاب...",
        status: "مكتمل",

        progress: 100
    },
    {
        image: "images/project6.jpg",
        date: "فبراير",
        title: "ترميم المدارس",
        description: "تقديم بيئة تعليمية أفضل للطلاب...",
        status: "قيد التنفيذ",
        progress: 20
    },
    {
        image: "images/project7.jpg",
        date: "فبراير",
        title: "ترميم المدارس",
        description: "تقديم بيئة تعليمية أفضل للطلاب...",
        status: "قيد التنفيذ",
         progress: 20
    },
    {
        image: "images/project8.jpg",
        date: "فبراير",
        title: "ترميم المدارس",
        description: "تقديم بيئة تعليمية أفضل للطلاب...",
        status: "قيد التنفيذ",
        progress: 20
    },
    {
        image: "images/project10.jpg",
        date: "فبراير",
        title: "ترميم المدارس",
        description: "تقديم بيئة تعليمية أفضل للطلاب...",
        status: "مكتمل",
        progress: 100
    },
    {
        image: "images/project11.jpg",
        date: "فبراير",
        title: "ترميم المدارس",
        description: "تقديم بيئة تعليمية أفضل للطلاب...",
        status: "قيد التنفيذ",
        progress: 20
    },
    {
        image: "images/project12.jpg",
        date: "فبراير",
        title: "ترميم المدارس",
        description: "تقديم بيئة تعليمية أفضل للطلاب...",
        status: "قيد التنفيذ",
        progress: 20
    },
    {
        image: "images/project13.jpg",
        date: "فبراير",
        title: "ترميم المدارس",
        description: "تقديم بيئة تعليمية أفضل للطلاب...",
        status: "مكتمل",
        progress: 100
    },
    {
        image: "images/project14.jpg",
        date: "فبراير",
        title: "ترميم المدارس",
        description: "تقديم بيئة تعليمية أفضل للطلاب...",
        status: "مكتمل",
        progress:100
    },
    
    // أضف المزيد من المشاريع هنا
];

// حاوية الكروت
const container = document.getElementById("cards-container");

// إنشاء الكروت ديناميكيًا
projects.forEach((project) => {
    // تحديد الأزرار بناءً على حالة المشروع
    const buttons = project.status === "مكتمل"
        ? `<button class="details-button">عرض التفاصيل</button>` // زر عرض التفاصيل
        : `
        <button class="details-button">عرض التفاصيل</button>
            <button class="donate-button">تبرع</button>
            <button class="volunteer-button">تطوع</button>
          `;

    // بناء الكارد باستخدام البيانات
    const card = `
        <div class="news-card">
            <img src="${project.image}" alt="${project.title}" class="news-image">
            <div class="news-content">
                <p class="date">${project.date}</p>
                <h3>${project.title}</h3>
                <p class="description">${project.description}</p>
                <div class="project-status">
                    <span class="status-label">حالة المشروع: </span>
                    <span class="status">${project.status}</span>
                </div>
                <div class="progress-bar">
                    <div class="progress" style="width: ${project.progress}%;"></div>
                </div>
                <div class="buttons">
                    ${buttons}
                </div>
            </div>
        </div>
    `;
    // إضافة الكارد إلى الحاوية
    container.innerHTML += card;





    
});
//   3333333333333333333333333333


