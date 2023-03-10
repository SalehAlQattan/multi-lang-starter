# Multi-Language React App Starter

This is a starter template for a React application that supports multiple languages (Arabic and English) using i18next and react-i18next packages.

## Getting Started

To get started with this template, you can simply clone the repository and install the dependencies using npm.

```bash
git clone https://github.com/SalehAlQattan/multi-lang-starter.git
cd multi-lang-starter
npm install
```

## Usage

The translations for this template are located in the public/translations directory. There are two JSON files, en.json and ar.json, for English and Arabic translations respectively.

Here is a preview of the en.json file:

```json
{
	"brand": "Multi lang App",
	"heading": "This is the heading in English",
	"subheading": "This is subheading in English, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
```

And here is a preview of the ar.json file:

```json
{
	"brand": "موقع متعدد اللغات",
	"heading": "هذا هو العنوان باللغة العربية",
	"subheading": "هذا هو العنوان الفرعي باللغة العربية ، هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام هنا يوجد محتوى نصي، هنا يوجد محتوى نصيفتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال lorem ipsum في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها."
}
```

To modify the translations for your application, simply edit these JSON files with your own translations.

Once you have made the necessary changes to the translations, you can start the development server by running the following command.

```bash
npm start
```

This will start the development server at http://localhost:3000 and you should be able to see the application in your browser.

## Features

This starter template comes with the following features:

- Multi-language support (Arabic and English)
- Responsive design using [mui](https://mui.com/)
- Localization using [i18next](https://www.i18next.com) and [react-i18next](https://react.i18next.com) packages

## Contributing

If you find any issues with this starter template or have any suggestions for improvement, feel free to open an issue or pull request on the repository.

## MIT License

Copyright (c) 2023 Saleh AlQattan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
