// التأكد من أن DOM جاهز
document.addEventListener("DOMContentLoaded", () => {
    // الحصول على العناصر
    const form = document.querySelector("form");
    const governorate = document.getElementById("governorate");
    const area = document.getElementById("area");
    const street = document.getElementById("street");
    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const mapContainer = document.getElementById("map");

    // تحقق من صحة الحقول
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // منع الإرسال الافتراضي

        // التحقق من الحقول المطلوبة
        if (!governorate.value || !area.value || !street.value || !name.value || !phone.value) {
            alert("يرجى تعبئة جميع الحقول المطلوبة");
            return;
        }

        // التأكد من صحة رقم الهاتف
        if (!/^\d+$/.test(phone.value)) {
            alert("يرجى إدخال رقم هاتف صالح");
            return;
        }

        // هنا يتم إرسال البيانات أو معالجتها
        alert("تم تسجيل البلاغ بنجاح!");
    });

    // تهيئة الخريطة باستخدام Google Maps API (كمثال)
    const initMap = () => {
        const map = new google.maps.Map(mapContainer, {
            center: { lat: 31.963158, lng: 35.930359 }, // إحداثيات الأردن
            zoom: 8,
        });

        // إضافة محدد الموقع عند النقر
        google.maps.event.addListener(map, "click", (event) => {
            const marker = new google.maps.Marker({
                position: event.latLng,
                map: map,
                title: "موقع الحفرة",
            });
        });
    };

    // تحميل مكتبة Google Maps API
    const loadGoogleMapsScript = () => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    };

    // تحميل الخريطة
    loadGoogleMapsScript();
});
