export interface BlogPost {
    id: string;
    slug: string;
    title: Record<string, string>;
    excerpt: Record<string, string>;
    content: Record<string, string>;
    date: string;
    author: string;
    category: 'installation' | 'design' | 'trends';
    readTime: number; // in minutes
    image: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'kitchen-demolition-guide',
        title: {
            he: 'פירוק מטבח ישן: המדריך המלא להכנת השטח',
            ru: 'Демонтаж старой кухни: Полное руководство по подготовке',
            en: 'Kitchen Demolition: The Ultimate Guide to Site Prep',
        },
        excerpt: {
            he: 'כל מה שחובה לדעת לפני שוברים קירות: ניתוק תשתיות, פינוי פסולת וטיפים שיחסכו לכם אלפי שקלים בשיפוץ המטבח.',
            ru: 'Все, что нужно знать перед сносом: отключение коммуникаций, вывоз мусора и советы, которые сэкономят тысячи шекелей.',
            en: 'Everything needed before breaking walls: disconnecting utilities, waste removal, and tips to save thousands on renovation.',
        },
        content: {
            he: `
        <p class="lead">החלטתם לשפץ את המטבח? מזל טוב! אבל לפני שהמטבח החדש והנוצץ נכנס, הישן חייב לצאת. שלב הפירוק הוא קריטי להצלחת הפרויקט כולו.</p>
        
        <h2>שלב 1: בטיחות לפני הכל - ניתוק תשתיות</h2>
        <p>לפני הנפת הפטיש הראשונה, חובה לנטרל את כל הסכנות במטבח:</p>
        <ul class="check-list">
            <li><strong>גז:</strong> הזמינו טכנאי גז מוסמך לניתוק הברז הראשי ופינוי בלוני גז אם קיימים. אל תנסו לעשות זאת לבד!</li>
            <li><strong>חשמל:</strong> הורידו את המפסק הראשי של המטבח בלוח החשמל. ודאו בעזרת טסטר שאין זרם בשקעים.</li>
            <li><strong>מים:</strong> סגרו את ברז המים הראשי בדירה או את הברזים המקומיים מתחת לכיור. רוקנו את שאריות המים מהצנרת.</li>
        </ul>

        <div class="my-8">
            <img src="https://images.unsplash.com/photo-1590487372728-64478d10f27f?auto=format&fit=crop&q=80&w=800" alt="ניתוק ברזים וצנרת" class="rounded-xl shadow-lg w-full h-64 object-cover" />
            <p class="text-sm text-gray-500 mt-2 text-center">הקפידו על סגירת ברזי ניל לפני פירוק הכיור</p>
        </div>

        <h2>שלב 2: סדר פירוק נכון</h2>
        <p>כדי להימנע מפציעות ונזק לרצפה, עבדו בסדר הבא:</p>
        <ol>
            <li>פינוי תכולה ומכשירים חשמליים ניידים.</li>
            <li>פירוק דלתות הארונות והמגירות (להפחתת משקל).</li>
            <li><strong>ארונות עליונים:</strong> תמיד מפרקים קודם את הלמעלה כדי שלא יפלו עליכם בזמן העבודה על החלק התחתון.</li>
            <li>הסרת השיש: דורש זהירות רבה ושבירה מבוקרת עם פטישון.</li>
            <li>ארונות תחתונים: ניתוק הברגים מהקיר ומהרצפה.</li>
        </ol>

        <h2>שלב 3: פינוי הפסולת כחוק</h2>
        <p>זריקת פסולת בניין לפח הזבל הרגיל או לרחוב היא עבירה שגוררת קנסות כבדים מהעיריה. יש לכם שתי אפשרויות חוקיות:</p>
        <ul>
            <li>הזמנת מכולה ייעודית ("רמסה").</li>
            <li>תיאום פינוי מיוחד מול המוקד העירוני (לא גזם!).</li>
        </ul>
        
        <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-8">
            <h3 class="text-blue-800 font-bold mb-2">💡 טיפ לחיסכון בכסף</h3>
            <p>אם המטבח הישן שלכם במצב סביר, אל תזרקו אותו! פרסמו אותו בקבוצות פייסבוק או ביד2 למסירה או מכירה סמלית. לרוב, אנשים ישמחו לבוא ולפרק אותו עבורכם בחינם, מה שיחסוך לכם את עבודת הפירוק ועלות המכולה.</p>
        </div>
      `,
            ru: `
        <p class="lead">Решили обновить кухню? Поздравляем! Но прежде чем приедет новая мебель, старая должна уйти. Этап демонтажа критичен для успеха всего проекта.</p>
        
        <h2>Шаг 1: Безопасность превыше всего - Отключение</h2>
        <p>Перед первым ударом молотка обязательно нейтрализуйте все опасности:</p>
        <ul class="check-list">
            <li><strong>Газ:</strong> Вызовите сертифицированного техника для отключения крана. Не пытайтесь делать это сами!</li>
            <li><strong>Электричество:</strong> Отключите автомат кухни в щитке. Проверьте тестером отсутствие напряжения.</li>
            <li><strong>Вода:</strong> Перекройте главный кран в квартире или локальные краны под мойкой. Слейте остатки воды.</li>
        </ul>

        <div class="my-8">
            <img src="https://images.unsplash.com/photo-1590487372728-64478d10f27f?auto=format&fit=crop&q=80&w=800" alt="Отключение сантехники" class="rounded-xl shadow-lg w-full h-64 object-cover" />
            <p class="text-sm text-gray-500 mt-2 text-center">Обязательно перекройте воду перед снятием мойки</p>
        </div>

        <h2>Шаг 2: Правильный порядок демонтажа</h2>
        <p>Чтобы избежать травм и повреждения пола, работайте в следующем порядке:</p>
        <ol>
            <li>Вынос содержимого и мелкой техники.</li>
            <li>Снятие дверей и ящиков (для облегчения веса).</li>
            <li><strong>Верхние шкафы:</strong> Всегда начинайте сверху, чтобы они не упали на вас при работе с низом.</li>
            <li>Снятие столешницы: требует осторожности, часто нужно разбивать её перфоратором.</li>
            <li>Нижние шкафы: откручивание креплений от стен и пола.</li>
        </ol>

        <h2>Шаг 3: Законный вывоз мусора</h2>
        <p>Выброс строительного мусора в обычный бак или на улицу — нарушение, влекущее крупные штрафы. У вас есть два пути:</p>
        <ul>
            <li>Заказ специализированного контейнера ("рамса").</li>
            <li>Согласование вывоза с муниципалитетом.</li>
        </ul>

        <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-8">
            <h3 class="text-blue-800 font-bold mb-2">💡 Как сэкономить?</h3>
            <p>Если ваша кухня еще жива, не ломайте её! Выставьте на Yad2 на продажу или отдачу. Часто люди готовы приехать и разобрать её бесплатно, что сэкономит вам силы и деньги на вывоз мусора.</p>
        </div>
      `,
            en: `
        <p class="lead">Decided to renovate your kitchen? Congratulations! But before the shiny new one arrives, the old one must go. Demolition is critical for the project's success.</p>
        
        <h2>Step 1: Safety First - Disconnect Utilities</h2>
        <p>Before swinging the hammer, neutralize all hazards:</p>
        <ul class="check-list">
            <li><strong>Gas:</strong> Call a certified technician to disconnect the main valve. Never D.I.Y with gas!</li>
            <li><strong>Electricity:</strong> Switch off the kitchen breaker. Use a tester to ensure outlets are dead.</li>
            <li><strong>Water:</strong> Turn off the main water valve. Drain remaining water from pipes.</li>
        </ul>

        <div class="my-8">
            <img src="https://images.unsplash.com/photo-1621905476059-5f80280c4233?auto=format&fit=crop&q=80&w=800" alt="Plumbing disconnection" class="rounded-xl shadow-lg w-full h-64 object-cover" />
            <p class="text-sm text-gray-500 mt-2 text-center">Always shut off water valves before removing the sink</p>
        </div>

        <h2>Step 2: Correct Demolition Order</h2>
        <p>To avoid injury and floor damage, work in this order:</p>
        <ol>
            <li>Clear contents and appliances.</li>
            <li>Remove doors and drawers (to reduce weight).</li>
            <li><strong>Upper Cabinets:</strong> Always start top-down so they don't fall on you later.</li>
            <li>Countertop Removal: Requires care, often needs breaking.</li>
            <li>Base Cabinets: Unscrew from walls and floor.</li>
        </ol>

        <h2>Step 3: Legal Waste Disposal</h2>
        <p>Dumping construction debris in regular bins is illegal and carries heavy fines. Use:</p>
        <ul>
            <li>Rented construction dumpster ("Ramsa").</li>
            <li>Coordinated city pickup.</li>
        </ul>

        <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-8">
            <h3 class="text-blue-800 font-bold mb-2">💡 Money Saving Tip</h3>
            <p>If your old kitchen is decent, don't trash it! List it on marketplaces for free or cheap. People will often dismantle and haul it away for free, saving you demolition labor and disposal fees.</p>
        </div>
      `,
        },
        date: '2024-02-01',
        author: 'Elite Design Team',
        category: 'installation',
        readTime: 4,
        image: 'https://images.unsplash.com/photo-1574359411659-15573a21cccf?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: '2',
        slug: 'kitchen-plumbing-prep',
        title: {
            he: 'אינסטלציה למטבח חדש: המדריך למיקום נקודות מים',
            ru: 'Сантехника для кухни: Гид по размещению водорозеток',
            en: 'Kitchen Plumbing Guide: Positioning Water Points',
        },
        excerpt: {
            he: 'מיקום קריטי של ברז מדיח, הכנה למקרר עם קיוסק וגבהים תקניים. טעויות שאינסטלטורים עושים ואיך להימנע מהן.',
            ru: 'Критическое размещение крана посудомойки, подготовка для холодильника с водой и стандарты высот. Ошибки сантехников.',
            en: 'Critical placement of dishwasher taps, fridge water lines, and standard heights. Mistakes plumbers make and how to avoid them.',
        },
        content: {
            he: `
        <p class="lead">אינסטלציה היא הלב של המטבח. טעות במיקום נקודה של 5 ס"מ יכולה למנוע מהמדיח להיכנס למקום או לדרוש חיתוך מכוער בארון החדש.</p>

        <h2>חוק הברזל: נגישות (Accessibility)</h2>
        <p>כל ברזי הניתוק (ניל) חייבים להיות נגישים לתפעול מיידי במקרה של פיצוץ צינור. לכן:</p>
        <div class="bg-red-50 p-4 border-l-4 border-red-500 my-4 text-red-800">
            <strong>אסור בתכלית האיסור:</strong> למקם נקודות מים או ביוב מאחורי מדיח הכלים! המדיח חייב להיכנס עד הקיר, ואין שם מקום לברזים.
        </div>
        <p>המיקום הנכון לברז מדיח הוא <strong>בתוך ארון הכיור הסמוך</strong>. הצינורות עוברים דרך חור בדופן הארון.</p>

        <h2>נקודת מים למקרר (Ice Maker)</h2>
        <p>מקררים מודרניים רבים דורשים חיבור מים לקיוסק או לייצור קרח. 
        יש להכין נקודת מים (לרוב 1/2 צול עם ברז) במיקום שלא יפריע למקרר להיצמד לקיר.
        ההמלצה שלנו: גובה 220 ס"מ (מעל המקרר) או בתוך ארון מזווה סמוך.</p>

        <div class="my-8">
            <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800" alt="שרטוט אינסטלציה" class="rounded-xl shadow-lg w-full h-64 object-cover" />
            <p class="text-sm text-gray-500 mt-2 text-center">תכנון נכון מונע בעיות בהתקנת הארונות</p>
        </div>

        <h2>גבהים מומלצים (מהריצוף הסופי)</h2>
        <ul class="list-disc pl-6 space-y-2">
            <li><strong>נקודות לברז (חם/קר):</strong> 50-60 ס"מ.</li>
            <li><strong>נקודת ביוב:</strong> 40-50 ס"מ.</li>
            <li><strong>ברז מדיח:</strong> בתוך ארון כיור, גובה 60 ס"מ.</li>
        </ul>
      `,
            ru: `
        <p class="lead">Сантехника — это сердце кухни. Ошибка в 5 см может помешать установке посудомойки или потребовать уродливого выпила в новой мебели.</p>

        <h2>Золотое правило: Доступность</h2>
        <p>Все запорные краны должны быть доступны для перекрытия. Поэтому:</p>
        <div class="bg-red-50 p-4 border-l-4 border-red-500 my-4 text-red-800">
            <strong>Строго запрещено:</strong> Размещать трубы или краны ЗА посудомоечной машиной! Там нет места, машина должна вставать вплотную к стене.
        </div>
        <p>Правильное место для крана посудомойки — <strong>в соседнем шкафу под мойкой</strong>.</p>

        <h2>Вода для холодильника</h2>
        <p>Современные холодильники требуют воды для льда. Подготовьте точку (обычно 1/2 дюйма) так, чтобы она не мешала холодильнику. 
        Наша рекомендация: высота 220 см (над холодильником) или в соседнем шкафу.</p>

         <div class="my-8">
            <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800" alt="План сантехники" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>Рекомендуемые высоты (от чистого пола)</h2>
        <ul class="list-disc pl-6 space-y-2">
            <li><strong>Выводы смесителя:</strong> 50-60 см.</li>
            <li><strong>Канализация:</strong> 40-50 см.</li>
            <li><strong>Кран посудомойки:</strong> внутри тумбы мойки, 60 см.</li>
        </ul>
      `,
            en: `
        <p class="lead">Plumbing is the kitchen's heart. A 5cm error can prevent a dishwasher fit or require ugly cabinet cuts.</p>

        <h2>Golden Rule: Accessibility</h2>
        <p>All shut-off valves must be accessible. Therefore:</p>
        <div class="bg-red-50 p-4 border-l-4 border-red-500 my-4 text-red-800">
            <strong>STRICTLY FORBIDDEN:</strong> Placing water points behind the dishwasher! The machine sits flush against the wall; there's no room for valves.
        </div>
        <p>The correct spot for the dishwasher valve is <strong>inside the adjacent sink cabinet</strong>.</p>

        <h2>Fridge Water Line</h2>
        <p>Ice-maker fridges need water. Prepare a point (usually 1/2 inch) that won't push the fridge out. 
        We recommend: 220cm height (above fridge) or inside a pantry cabinet.</p>

        <div class="my-8">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800" alt="Plumbing Rough-in" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>Standard Heights (AFF - Above Finished Floor)</h2>
        <ul class="list-disc pl-6 space-y-2">
            <li><strong>Sink Supply:</strong> 50-60 cm.</li>
            <li><strong>Drain:</strong> 40-50 cm.</li>
            <li><strong>Dishwasher Valve:</strong> Inside sink base, 60 cm.</li>
        </ul>
      `,
        },
        date: '2024-02-02',
        author: 'Daniel Master',
        category: 'installation',
        readTime: 5,
        image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: '3',
        slug: 'kitchen-electrical-plan',
        title: {
            he: 'תוכנית חשמל למטבח: איפה וכמה שקעים צריך?',
            ru: 'Электрика на кухне: Где и сколько розеток нужно?',
            en: 'Kitchen Electrical Plan: Socket Layout & Power Reqs',
        },
        excerpt: {
            he: 'מטבח חכם דורש חשמל חכם. ההבדל בין שקע כוח לשקע שירות, גבהים מומלצים ומיקום שקעים לאי למטבח.',
            ru: 'Умной кухне - умная электрика. Разница между силовыми и рабочими розетками, высоты и розетки для острова.',
            en: 'Smart kitchens need smart power. Difference between power & service sockets, recommended heights, and island outlets.',
        },
        content: {
            he: `
        <h2>סוגי שקעים במטבח</h2>
        <p>במטבח קיימים שני סוגי שקעים עיקריים שחשוב להבדיל ביניהם:</p>
        <ol>
            <li><strong>שקעי כוח (Direct Lines):</strong> מיועדים למכשירים "כבדים". לכל אחד מהם נדרש קו נפרד ישירות ללוח החשמל.
                <ul>
                    <li>תנור אפייה</li>
                    <li>מדיח כלים</li>
                    <li>מכונת כביסה</li>
                    <li>כיריים אינדוקציה (לרוב תלת-פאזי, שקע "שוקו")</li>
                </ul>
            </li>
            <li><strong>שקעי שירות:</strong> שקעים רגילים מעל השיש למיקסר, טוסטר, מכונת קפה ומטען לטלפון.</li>
        </ol>

        <div class="my-8">
            <img src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80&w=800" alt="שקעי שירות במטבח" class="rounded-xl shadow-lg w-full h-64 object-cover" />
            <p class="text-sm text-gray-500 mt-2 text-center">שקעי שירות מעוצבים משדרגים את המראה</p>
        </div>

        <h2>גבהים מומלצים</h2>
        <p>מיקום לא נכון של שקע ישאיר אתכם עם כבלים משתלשלים ומכוערים.</p>
        <ul class="list-disc pl-6">
            <li><strong>שקעי שירות:</strong> 105-110 ס"מ מהריצוף (כ-15-20 ס"מ מעל השיש).</li>
            <li><strong>שקע למדיח:</strong> בתוך ארון הכיור (60 ס"מ), לעולם לא מאחורי המדיח!</li>
            <li><strong>שקע לקולט אדים:</strong> גובה 200-210 ס"מ (מוסתר בתוך הארובה או הארון).</li>
            <li><strong>שקע למקרר:</strong> גובה 220 ס"מ או בארון שירות צמוד.</li>
        </ul>
      `,
            ru: `
        <h2>Типы розеток</h2>
        <p>На кухне важно различать два типа розеток:</p>
        <ol>
            <li><strong>Силовые (Прямые линии):</strong> Для мощных приборов. Каждому нужна своя линия от щитка.
                <ul>
                    <li>Духовой шкаф</li>
                    <li>Посудомойка</li>
                    <li>Стиральная машина</li>
                    <li>Индукция (часто 3 фазы)</li>
                </ul>
            </li>
            <li><strong>Рабочие:</strong> Обычные розетки над столешницей для чайника, миксера и т.д.</li>
        </ol>

        <div class="my-8">
            <img src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80&w=800" alt="Розетки на фартуке" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>Высоты установки</h2>
        <p>Неверная высота = висящие провода.</p>
        <ul class="list-disc pl-6">
            <li><strong>Рабочая зона:</strong> 105-110 см от пола.</li>
            <li><strong>Для посудомойки:</strong> В тумбе мойки (60 см), никогда ЗА машиной!</li>
            <li><strong>Вытяжка:</strong> 200-210 см (спрятана в коробе).</li>
            <li><strong>Холодильник:</strong> 220 см.</li>
        </ul>
      `,
            en: `
        <h2>Types of Sockets</h2>
        <p>Distinguish between two main types:</p>
        <ol>
            <li><strong>Power (Dedicated Circuits):</strong> For heavy appliances. Each needs a direct line to the breaker box.
                <ul>
                    <li>Oven</li>
                    <li>Dishwasher</li>
                    <li>Washing Machine</li>
                    <li>Induction Hob (often 3-phase)</li>
                </ul>
            </li>
            <li><strong>Service:</strong> Standard backsplash outlets for toasters, blenders, etc.</li>
        </ol>

        <div class="my-8">
            <img src="https://images.unsplash.com/photo-1550966871-3ed3afbf79f3?auto=format&fit=crop&q=80&w=800" alt="Kitchen Outlets" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>Recommended Heights</h2>
        <ul class="list-disc pl-6">
            <li><strong>Backsplash:</strong> 105-110 cm AFF.</li>
            <li><strong>Dishwasher:</strong> Inside sink cabinet (60 cm), NEVER behind unit!</li>
            <li><strong>Hood:</strong> 200-210 cm (hidden in chimney).</li>
            <li><strong>Fridge:</strong> 220 cm.</li>
        </ul>
      `,
        },
        date: '2024-02-03',
        author: 'Elite Design Team',
        category: 'installation',
        readTime: 6,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: '4',
        slug: 'kitchen-walls-prep',
        title: {
            he: 'קירות ישרים וזווית 90: סוד ההתאמה המושלמת',
            ru: 'Идеальные стены и угол 90: Секрет качественной кухни',
            en: 'Straight Walls & 90° Angles: The Fit Secret',
        },
        excerpt: {
            he: 'למה ארונות מטבח שונאים קירות עקומים? ההשפעה של חוסר דיוק בבנייה על התוצאה הסופית ואיך להכין את הקירות נכון.',
            ru: 'Почему кухни ненавидят кривые стены? Влияние неточности на результат и как правильно подготовить стены.',
            en: 'Why kitchen cabinets hate crooked walls? The impact of construction inaccuracies and how to prep walls correctly.',
        },
        content: {
            he: `
        <h2>גיאומטריה פשוטה</h2>
        <p>ארונות מטבח מיוצרים במפעל רובוטי ברמת דיוק של מילימטרים, ובזווית מושלמת של 90 מעלות. הבית שלכם, לעומת זאת, נבנה על ידי בני אדם.</p>
        <p>כאשר נפגשים ארון ישר וקיר עקום, נוצרים שני דברים:</p>
        <ol>
            <li><strong>רווח משתנה (Gap):</strong> רווח שהולך ומתרחב בין השיש לקיר, שקשה מאוד לאטום אותו בצורה יפה.</li>
            <li><strong>בעיות פתיחה:</strong> במטבחים פינתיים, אם הזווית חדה מ-90 מעלות, המגירות והדלתות יתנגשו זו בזו ולא יפתחו.</li>
        </ol>

        <div class="my-8">
            <img src="https://images.unsplash.com/photo-1505798577917-a65157d62773?auto=format&fit=crop&q=80&w=800" alt="קירות מטבח" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>הכנת הקירות והחיפוי</h2>
        <p>הקפידו לדרוש מהקבלן שלכם "זווית 90" בפינות המטבח באמצעות שימוש ב"זוויתן" בזמן הטיח.</p>
        <h3>מתי מתקינים קרמיקה?</h3>
        <p><strong>אחרי, ורק אחרי!</strong> את חיפוי הקיר (Backsplash) מתקינים אך ורק לאחר שהמטבח והשיש מותקנים במקומם. זה מבטיח שהאריחים ישבו בצורה מושלמת על השיש ללא רווחים וללא צורך ב"פנל שיש" מיושן.</p>
      `,
            ru: `
        <h2>Простая геометрия</h2>
        <p>Кухни делаются роботами с точностью до миллиметра и под углом 90°. Ваш дом строили люди.</p>
        <p>Когда встречаются ровный шкаф и кривая стена, происходит:</p>
        <ol>
            <li><strong>Щели:</strong> Зазоры между столешницей и стеной, которые трудно красиво заделать.</li>
            <li><strong>Проблемы открывания:</strong> В угловых кухнях, если угол меньше 90°, ящики будут биться друг об друга.</li>
        </ol>

        <div class="my-8">
            <img src="https://images.unsplash.com/photo-1505798577917-a65157d62773?auto=format&fit=crop&q=80&w=800" alt="Выравнивание стен" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>Когда класть плитку?</h2>
        <p><strong>Только ПОСЛЕ!</strong> Фартук укладывается после установки кухни и столешницы. Это гарантирует идеальное прилегание плитки к камню без уродливых бортиков.</p>
      `,
            en: `
        <h2>Simple Geometry</h2>
        <p>Cabinets are robot-made with mm precision at 90°. Your house was built by humans.</p>
        <p>When straight cabinets meet crooked walls:</p>
        <ol>
            <li><strong>Gaps:</strong> Uneven gaps between counter and wall.</li>
            <li><strong>Opening Issues:</strong> In corners, if the angle is acute (<90°), drawers will collide.</li>
        </ol>

        <div class="my-8">
            <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=800" alt="Kitchen Walls" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>When to Tile?</h2>
        <p><strong>AFTER!</strong> Backsplash should be installed only after cabinets and countertops are in. This ensures tiles sit perfectly on the counter without old-fashioned risers.</p>
      `,
        },
        date: '2024-02-04',
        author: 'Daniel Master',
        category: 'installation',
        readTime: 3,
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: '5',
        slug: 'kitchen-flooring-guide',
        title: {
            he: 'ריצוף במטבח: לפני או אחרי הארונות?',
            ru: 'Пол на кухне: До или после шкафов?',
            en: 'Kitchen Flooring: Before or After Cabinets?',
        },
        excerpt: {
            he: 'הדילמה הנצחית: האם לרצף מתחת למטבח? ומה עושים עם הפנלים? התשובות שיחסכו לכם כאב ראש ורטיבות.',
            ru: 'Вечная дилемма: класть плитку под кухней? А плинтуса? Ответы, которые спасут от головной боли.',
            en: 'The eternal dilemma: flooring under cabinets? What about skirting? Answers inside.',
        },
        content: {
            he: `
        <h2>ריצוף מלא (מומלץ)</h2>
        <p>אנו ממליצים בחום לרצף את כל חדר המטבח, מקיר לקיר, לפני התקנת הארונות. הסיבות:</p>
        <ul>
            <li><strong>הגנה מרטיבות:</strong> במקרה של נזילה, המים יזרמו על הריצוף החוצה ולא יחלחלו לחול שמתחת לריצוף (שם הם גורמים לנזק נסתר עצום).</li>
            <li><strong>גמישות עיצובית:</strong> אם בעוד 10 שנים תרצו להחליף מטבח ולשנות את צורתו, לא תהיו מוגבלים על ידי "חור" בריצוף.</li>
            <li><strong>גובה אחיד:</strong> קל יותר לפלס את המטבח על משטח מרוצף וישר.</li>
        </ul>

          <div class="my-8">
            <img src="https://images.unsplash.com/photo-1581858726768-7589d36de639?auto=format&fit=crop&q=80&w=800" alt="ריצוף מטבח" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>פנלים (Skirting) - זהירות!</h2>
        <p class="text-red-600 font-bold">לא להתקין פנלים בקירות המטבח!</p>
        <p>ארונות המטבח חייבים להיצמד לקיר. פנל בולט ירחיק את הארון מהקיר ב-1-2 ס"מ, מה שיצור מרווח בעייתי לשיש ולכלוך.
        התקינו פנלים רק בקירות שיישארו חשופים, או המתינו עם הפנלים לאחר התקנת המטבח.</p>
      `,
            ru: `
        <h2>Полная укладка (Рекомендуем)</h2>
        <p>Мы советуем укладывать пол во всем помещении до установки мебели. Причины:</p>
        <ul>
            <li><strong>Защита от воды:</strong> При протечке вода вытечет наружу, а не впитается в стяжку под шкафами.</li>
            <li><strong>Гибкость:</strong> Если через 10 лет вы смените кухню, вы не будете ограничены "дырой" в полу.</li>
        </ul>

          <div class="my-8">
            <img src="https://images.unsplash.com/photo-1581858726768-7589d36de639?auto=format&fit=crop&q=80&w=800" alt="Укладка пола" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>Плинтуса - Осторожно!</h2>
        <p class="text-red-600 font-bold">Не ставьте плинтуса за кухней!</p>
        <p>Шкафы должны прилегать к стене. Плинтус отодвинет их на 1-2 см, создавая щель. Ставьте плинтуса только на открытых стенах.</p>
      `,
            en: `
        <h2>Full Flooring (Recommended)</h2>
        <p>We strongly recommend flooring wall-to-wall before cabinet installation:</p>
        <ul>
            <li><strong>Water Protection:</strong> Leaks flow out instead of soaking into the subfloor.</li>
            <li><strong>Flexibility:</strong> Changing layout later won't reveal unfloored patches.</li>
        </ul>

          <div class="my-8">
            <img src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800" alt="Flooring" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>Skirting Boards - Warning!</h2>
        <p class="text-red-600 font-bold">Do not install skirting behind cabinets!</p>
        <p>Cabinets must sit flush. Skirting pushes them out, creating gaps. Only install skirting on visible walls.</p>
      `,
        },
        date: '2024-02-05',
        author: 'Elite Design Team',
        category: 'installation',
        readTime: 3,
        image: 'https://images.unsplash.com/photo-1502005229766-31e70d3a3e75?auto=format&fit=crop&q=80&w=800',
    },
    {
        id: '6',
        slug: 'kitchen-installation-access',
        title: {
            he: 'יום ההתקנה: לוגיסטיקה וגישה למשאית',
            ru: 'День установки: Логистика и доступ',
            en: 'Installation Day: Logistics & Access',
        },
        excerpt: {
            he: 'איך למנוע עיכובים ביום ההתקנה? שמירת חניה, מעליות ומנופים - המדריך הלוגיסטי.',
            ru: 'Как избежать задержек? Парковка, лифты и краны — логистический гид.',
            en: 'Avoiding delays: Parking, elevators, and cranes — the logistics guide.',
        },
        content: {
            he: `
        <h2>המשאית מגיעה</h2>
        <p>ביום ההתקנה, הצוות מגיע עם משאית גדולה וציוד כבד. כדי למנוע סחיבת ציוד למרחקים (שמעכב את העבודה), <strong>אנא שמרו מקום חניה כפול</strong> קרוב ככל האפשר לכניסה לבניין.</p>
        
        <h2>מעלית vs מנוף</h2>
        <p>האם יש לכם:</p>
        <ul class="check-list">
            <li>משטחי שיש גדולים (מעל 2.4 מטר)?</li>
            <li>ארונות מזווה גבוהים יחידה אחת?</li>
            <li>מעלית קטנה או חדר מדרגות צר?</li>
        </ul>
        <p>אם התשובה היא "כן", סביר להניח שנצטרך להזמין מנוף. עדכנו אותנו מראש כדי שנתאם זאת!</p>

         <div class="my-8">
            <img src="https://images.unsplash.com/photo-1549421263-606bea5458c6?auto=format&fit=crop&q=80&w=800" alt="הובלת מטבח" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>הכנת הבית</h2>
        <p>התקנת מטבח היא עבודה שדורשת מקום. המתקינים צריכים לפרוס קרטונים, כלי עבודה ומסורים. פנו את המעברים ואת החדרים הסמוכים מרהיטים שבירים או שטיחים יקרים כדי למנוע אבק ונזק.</p>
      `,
            ru: `
        <h2>Грузовик прибывает</h2>
        <p>В день установки нужна парковка. <strong>Займите двойное место</strong> как можно ближе к подъезду.</p>
        
        <h2>Лифт или Кран?</h2>
        <p>Если у вас:</p>
        <ul class="check-list">
            <li>Длинная столешница (>2.4м)?</li>
            <li>Высокие шкафы-пеналы?</li>
            <li>Узкий лифт?</li>
        </ul>
        <p>Скорее всего, понадобится кран. Сообщите нам заранее!</p>

          <div class="my-8">
            <img src="https://images.unsplash.com/photo-1549421263-606bea5458c6?auto=format&fit=crop&q=80&w=800" alt="Доставка мебели" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>Подготовка дома</h2>
        <p>Установщикам нужно место. Уберите ковры и хрупкие вещи из коридора и гостиной.</p>
      `,
            en: `
        <h2>The Truck Arrives</h2>
        <p>Please <strong>reserve a double parking spot</strong> closest to the entrance.</p>
        
        <h2>Elevator vs Crane</h2>
        <p>Do you have:</p>
        <ul class="check-list">
            <li>Large countertops (>2.4m)?</li>
            <li>Tall pantry units?</li>
            <li>Small elevator?</li>
        </ul>
        <p>We might need a crane. Let us know in advance!</p>

          <div class="my-8">
            <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800" alt="Kitchen Delivery" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>Home Prep</h2>
        <p>Clear the way! Installers need space for tools and assembly. Remove fragile items.</p>
      `,
        },
        date: '2024-02-06',
        author: 'Daniel Master',
        category: 'installation',
        readTime: 2,
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800',
    },
];
