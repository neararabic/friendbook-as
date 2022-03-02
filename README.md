# friendbook
الكود الخاص بمشروع كتاب الأصدقاء 

## مزيد من التفاصيل مع الشرح و التطبيق هنا:

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/PrPqBi_lSUc/0.jpg)](https://www.youtube.com/watch?v=PrPqBi_lSUc)ا
## طريقة الاستخدام

1. انسخ هذا المشروع clone على جهازك الشخصي فى أى مكان
2. فى شاشة الأوامر terminal /  command line interface  افتح المجلد و قم بكتابة الأمر   `yarn`  لتثبيت المكتبات التي يحتاجها المشروع للتشغيل
3. اكتب الأمر `yarn build:release` لبناء و استخراج ملف wasm من الكود استعداداً لرفعه. ستجد بعد تنفيذ هذا الأمر ملف `friendbook.wasm` تم انشاءه فى هذا المسار `build\release` 
4. قم بكتابة الأمر `near dev-deploy .\build\release\friendbook.wasm` لرفع الملف السابق على البلوك تشين 
5. من المفروض بعد تنفيذ الأمر السابق أن تجد رسالة تحتوى على الحساب الذي تم انشاؤه و وضع الكود عليه - مثل dev-XXXXXX-XXXXXXX 
6. هذا مثال لناتج تنفيذ الأمر السابق

`Transaction Id EtdLuXkhT5eex1ubT1pRKhETZNv8AoAMzadHiJMdGH9z
To see the transaction in the transaction explorer, please open this url in your browser
https://explorer.testnet.near.org/transactions/EtdLuXkhT5eex1ubT1pRKhETZNv8AoAMzadHiJMdGH9z
Done deploying to dev-1643380555927-18139425398700
` 

8. قم بكتابة هذا الأمر لاستدعاء الدالة `near call CONTRACT_ACCOUNT_NAME METHOD_NAME '{PARAMETERS_IF_ANY}' --accountId=EXAMPLE.testnet`  
9. ستجد ناتج الرسالة ظهر على شاشة الأوامر بناتج العلية 

ملحوطة: يمكنك رفع ملف الwasm على حساب مخصص. تجد الخطوات فى هذا الرابظ  : https://www.youtube.com/watch?v=Yuid1QH_NWg&list=PLYH8jWLZAVt62bVY0aEnMquZn-jpTZPhQ&index=11



