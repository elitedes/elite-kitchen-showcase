const fs = require('fs');
const path = 'c:\\Users\\danie\\elite-kitchen-showcase-main\\src\\contexts\\LanguageContext.tsx';
let content = fs.readFileSync(path, 'utf8');

const mapping = {
    "'fitting.title': 'Интерактивная примерка дизайна'": "'fitting.title': 'הדמיית עיצוב אינטראקטיבית'",
    "'fitting.btn.white': 'Белый Nano'": "'fitting.btn.white': 'לבן נאנו'",
    "'fitting.btn.graphite': 'Графит'": "'fitting.btn.graphite': 'גרפיט'",
    "'fitting.btn.oak': 'Дуб'": "'fitting.btn.oak': 'אלון'",
    "'fitting.btn.concrete': 'Бетон'": "'fitting.btn.concrete': 'בטון'",
    "'fitting.btn.beige': 'Беж'": "'fitting.btn.beige': 'בז\\''",
    "'fitting.white.title': 'Белый Nano – Технологичный минимализм'": "'fitting.white.title': 'לבן נאנו – מינימליזם טכנולוגי'",
    "'fitting.white.desc': 'Идеально матовая поверхность, на которой не остаются отпечатки пальцев. Ваша кухня всегда выглядит безупречно.'": "'fitting.white.desc': 'משטח מט מושלם שאינו משאיר טביעות אצבע. המטבח שלכם תמיד נראה ללא רבב.'",
    "'fitting.graphite.title': 'Серый графит – Глубина и стиль'": "'fitting.graphite.title': 'אפור גרפיט – עומק וסטייל'",
    "'fitting.graphite.desc': 'Благородный темный оттенок для создания элегантного контраста. Придает интерьеру архитектурную строгость.'": "'fitting.graphite.desc': 'גוון כהה ואצילי ליצירת ניגודיות אלגנטית. מעניק לחלל עוצמה אדריכלית.'",
    "'fitting.oak.title': 'Светлый дуб – Натуральный уют'": "'fitting.oak.title': 'אלון בהיר – חמימות טבעית'",
    "'fitting.oak.desc': 'Текстура дерева наполняет дом теплом. Износостойкий шпон с неповторимым природным рисунком.'": "'fitting.oak.desc': 'טקסטורת עץ הממלאת את הבית בחמימות. פורניר עמיד עם דוגמה טבעית ייחודית.'",
    "'fitting.concrete.title': 'Темный бетон – Лофт и характер'": "'fitting.concrete.title': 'בטון כהה – לופט ואופי'",
    "'fitting.concrete.desc': 'Фактурное решение для современных пространств. Практичный материал с уникальной индустриальной эстетикой.'": "'fitting.concrete.desc': 'פתרון טקסטורלי לחללים מודרניים. חומר פרקטי עם אסתטיקה תעשייתית ייחודית.'",
    "'fitting.beige.title': 'Беж – Мягкая гармония'": "'fitting.beige.title': 'בז\\' – הרמוניה רכה'",
    "'fitting.beige.desc': 'Спокойный, теплый тон, который визуально расширяет пространство и создает атмосферу уюта.'": "'fitting.beige.desc': 'גוון רגוע וחם המרחיב ויזואלית את החלל ויוצר אווירת נעימות.'"
};

for (const [key, value] of Object.entries(mapping)) {
    content = content.replace(key, value);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed translations in LanguageContext.tsx');
