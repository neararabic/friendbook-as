# friendbook
الكود الخاص بمشروع كتاب الأصدقاء 

## طريقة الاستخدام

1. انسخ هذا المشروع clone على جهازك الشخصي فى أى مكان.
2. فى شاشة الأوامر terminal /  command line interface  افتح المجلد وقم بتثبيت المكتبات التي يحتاجها المشروع للتشغيل عن طريق الأمر: 

 ```
yarn
```
 
3. لبناء واستخراج ملف wasm من الكود استعداداً لرفعه، استخدم الأمر التالي:

 ```
 yarn build:release
```

استخدم الأمر التالي، ستجد بعد تنفيذ هذا الأمر ملف `friendbook.wasm` تم انشاءه فى هذا المسار`build/release` 




4. لرفع الملف السابق على البلوك تشين قم بكتابة الأمر:
```
near dev-deploy ./build/release/friendbook.wasm
```

  
5. هذا مثال لناتج تنفيذ الأمر السابق:



<img width="1295" alt="Screen Shot 2022-03-03 at 5 29 42 PM" src="https://user-images.githubusercontent.com/58190902/156587143-ab38c8c7-a839-480d-853d-526d96a943b6.png">




6.  يمكنك استخدام الدالة (function)`writeSomething` لكتابة رسالة وإضافة نص الرسالة والشخص المُرسل إليه 


```
near call dev-1646314780524-36067631587978 writeSomething '{"message":"Hello", "toWho":"three.testnet"}' --accountId four.testnet
```


7.  عند تمام العملية سوف تظهر لك النتائج التالية: 


<img width="1103" alt="Screen Shot 2022-03-03 at 5 48 35 PM" src="https://user-images.githubusercontent.com/58190902/156601310-e09d2dc0-ea94-481b-b643-3be7d89b8d64.png">


8.  يمكنك استخدام الدالة (function)`listWritings` لمشاهدة جميع الرسائل التي تمت إضافتها: 
```
near view dev-1646314780524-36067631587978 listWritings
```

9.  عند تمام العملية سوف تظهر لك النتائج التالية:
<img width="1498" alt="Screen Shot 2022-03-03 at 6 57 11 PM" src="https://user-images.githubusercontent.com/58190902/156601916-fabcee0d-2635-4740-a663-c7ab221d9244.png">



ملحوظة: يمكنك رفع ملف الwasm على حساب مخصص. تجد الخطوات فى هذا [الرابط]( https://www.youtube.com/watch?v=Yuid1QH_NWg&list=PLYH8jWLZAVt62bVY0aEnMquZn-jpTZPhQ&index=11)




## مزيد من التفاصيل مع الشرح و التطبيق هنا:

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/PrPqBi_lSUc/0.jpg)](https://www.youtube.com/watch?v=PrPqBi_lSUc)
