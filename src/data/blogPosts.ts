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
            <img src="/blog/demolition-safety.jpg" alt="ניתוק ברזים וצנרת" class="rounded-xl shadow-lg w-full h-64 object-cover" />
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
            <img src="/blog/demolition-safety.jpg" alt="Отключение сантехники" class="rounded-xl shadow-lg w-full h-64 object-cover" />
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
            <img src="/blog/demolition-safety.jpg" alt="Plumbing disconnection" class="rounded-xl shadow-lg w-full h-64 object-cover" />
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
        image: '/blog/demolition-main.jpg',
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
            <img src="/blog/plumbing-details.jpg" alt="שרטוט אינסטלציה" class="rounded-xl shadow-lg w-full h-64 object-cover" />
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
            <img src="/blog/plumbing-details.jpg" alt="План сантехники" class="rounded-xl shadow-lg w-full h-64 object-cover" />
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
            <img src="/blog/plumbing-details.jpg" alt="Plumbing Rough-in" class="rounded-xl shadow-lg w-full h-64 object-cover" />
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
        image: '/blog/plumbing-main.jpg',
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
            <img src="/blog/flooring-details.jpg" alt="ריצוף מטבח" class="rounded-xl shadow-lg w-full h-64 object-cover" />
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
            <img src="/blog/flooring-details.jpg" alt="Укладка пола" class="rounded-xl shadow-lg w-full h-64 object-cover" />
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
            <img src="/blog/flooring-details.jpg" alt="Flooring" class="rounded-xl shadow-lg w-full h-64 object-cover" />
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
        image: '/blog/flooring-main.png',
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
    {
        id: '7',
        slug: 'custom-closets-guide',
        title: {
            he: 'המדריך המלא לארונות קיר: הזזה או פתיחה?',
            ru: 'Полный гид по встроенным шкафам: Купе или Распашные?',
            en: 'The Ultimate Guide to Custom Closets: Sliding vs. Hinged',
        },
        excerpt: {
            he: 'כל מה שרציתם לדעת על תכנון ארונות לחדר השינה. יתרונות, חסרונות, וטיפים לתחזוקה נכונה שתשמור על הארון לשנים.',
            ru: 'Всё, что вы хотели знать о проектировании шкафов в спальню. Плюсы, минусы и советы по уходу.',
            en: 'Everything you wanted to know about bedroom closet design. Pros, cons, and maintenance tips to keep your closet lasting for years.',
        },
        content: {
            he: `
        <p class="lead">בחירת ארון היא אחת ההחלטות החשובות בריהוט הבית. הארון תופס נפח משמעותי בחלל ומשמש אותנו יום-יום. אז מה עדיף - דלתות הזזה או פתיחה?</p>

        <h2>ארונות הזזה (Sliding Closets)</h2>
        <p>ארונות הזזה הם הפתרון המודרני לניצול מקום מקסימלי, במיוחד בחדרים קטנים.</p>
        
        <h3>יתרונות:</h3>
        <ul class="check-list">
            <li>חיסכון משמעותי במקום בחדר (אין צורך במקום לפתיחת דלתות).</li>
            <li>מראה נקי, מודרני ומינימליסטי.</li>
            <li>אפשרות לדלתות רחבות במיוחד (עד 1.2 מטר לדלת).</li>
            <li>שילוב מראות ענק שמגדילות את תחושת החלל.</li>
        </ul>

        <h3>חסרונות:</h3>
        <ul class="cross-list">
            <li>לא ניתן לפתוח את כל הארון בבת אחת (תמיד דלת אחת מסתירה חלק מהארון).</li>
            <li>מנגנון מורכב יותר הדורש איכות גבוהה למניעת תקלות.</li>
            <li>דורש עומק גדול יותר (כ-65 ס"מ לעומת 60 ס"מ) בגלל המסילות.</li>
        </ul>

        <div className="my-8">
            <img src="/assets/closets/sliding-new.png" alt="Sliding Closet" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>ארונות פתיחה (Hinged Closets)</h2>
        <p>הקלאסיקה שלא נעלמת. ארונות פתיחה מעניקים גישה מלאה ונוחה לכל התכולה.</p>

        <h3>יתרונות:</h3>
        <ul class="check-list">
            <li>גישה מלאה לכל חלקי הארון בו זמנית.</li>
            <li>אפשרות להתקנת מגירות חיצוניות ועיצובים מגוונים בידיות.</li>
            <li>עומק ארון סטנדרטי (60 ס"מ) - מתאים לנישות.</li>
            <li>מנגנונים פשוטים ואמינים לאורך שנים.</li>
        </ul>

        <h3>חסרונות:</h3>
        <ul class="cross-list">
            <li>דורשים מקום פנוי לפני הארון לפתיחת הדלתות.</li>
            <li>רוחב דלת מוגבל (לרוב עד 60 ס"מ) כדי לא להעמיס על הצירים.</li>
        </ul>

        <div class="my-8">
            <img src="/assets/closets/hinged-new.png" alt="Hinged Closet" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>טיפים לתחזוקה נכונה</h2>
        <p>כדי שהארון יחזיק מעמד שנים רבות:</p>
        <ul class="list-disc pl-6 space-y-2">
            <li>נקו את המסילות של ארונות ההזזה מאבק אחת לחודש בעזרת שואב אבק.</li>
            <li>הימנעו מטריקה חזקה של הדלתות - זה שומר על הצירים והמעצורים.</li>
            <li>אל תעמיסו יתר על המידה על המדפים (מקסימום 20 ק"ג למדף סטנדרטי).</li>
        </ul>
      `,
            ru: `
        <p class="lead">Выбор шкафа — одно из важнейших решений при меблировке. Шкаф занимает много места и используется ежедневно. Так что же лучше — купе или распашной?</p>

        <h2>Шкафы-купе (Sliding Closets)</h2>
        <p>Шкафы-купе — это современное решение для максимальной экономии места, особенно в небольших комнатах.</p>
        
        <h3>Плюсы:</h3>
        <ul class="check-list">
            <li>Значительная экономия места (не нужно пространство для открывания дверей).</li>
            <li>Чистый, современный и минималистичный вид.</li>
            <li>Возможность очень широких дверей (до 1.2 метра).</li>
            <li>Использование огромных зеркал, расширяющих пространство.</li>
        </ul>

        <h3>Минусы:</h3>
        <ul class="cross-list">
            <li>Нельзя открыть весь шкаф сразу (одна дверь всегда перекрывает часть секций).</li>
            <li>Более сложный механизм, требующий высокого качества.</li>
            <li>Требует большей глубины (около 65 см против 60 см) из-за рельсов.</li>
        </ul>

        <div class="my-8">
            <img src="/assets/closets/sliding-new.png" alt="Шкаф-купе" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>Распашные шкафы (Hinged Closets)</h2>
        <p>Классика, которая не стареет. Распашные шкафы дают полный и удобный доступ ко всему содержимому.</p>

        <h3>Плюсы:</h3>
        <ul class="check-list">
            <li>Полный доступ ко всем частям шкафа одновременно.</li>
            <li>Возможность внешних ящиков и разнообразных ручек.</li>
            <li>Стандартная глубина (60 см) — идеально для ниш.</li>
            <li>Простые и надежные механизмы на долгие годы.</li>
        </ul>

        <h3>Минусы:</h3>
        <ul class="cross-list">
            <li>Требуют свободного места перед шкафом для открывания дверей.</li>
            <li>Ограниченная ширина двери (обычно до 60 см), чтобы не нагружать петли.</li>
        </ul>

        <div class="my-8">
            <img src="/assets/closets/hinged-new.png" alt="Распашной шкаф" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>Советы по уходу</h2>
        <p>Чтобы шкаф служил долгие годы:</p>
        <ul class="list-disc pl-6 space-y-2">
            <li>Очищайте рельсы шкафов-купе от пыли пылесосом раз в месяц.</li>
            <li>Избегайте сильного хлопанья дверями — это бережет петли и доводчики.</li>
            <li>Не перегружайте полки (максимум 20 кг на стандартную полку).</li>
        </ul>
      `,
            en: `
        <p class="lead">Choosing a closet is a key furnishing decision. It takes up significant space and is used daily. So, Sliding or Hinged?</p>

        <h2>Sliding Closets</h2>
        <p>Sliding closets are the modern solution for maximizing space, especially in small rooms.</p>
        
        <h3>Pros:</h3>
        <ul class="check-list">
            <li>Significant space saving (no clearance needed for doors).</li>
            <li>Clean, modern, and minimalist look.</li>
            <li>Extra-wide doors possible (up to 1.2m per door).</li>
            <li>Integration of large mirrors to expand the room feel.</li>
        </ul>

        <h3>Cons:</h3>
        <ul class="cross-list">
            <li>Cannot open the entire closet at once.</li>
            <li>More complex mechanism requiring high quality.</li>
            <li>Requires more depth (approx 65cm vs 60cm) due to tracks.</li>
        </ul>

        <div class="my-8">
            <img src="/assets/closets/sliding-new.png" alt="Sliding Closet" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>Hinged Closets</h2>
        <p>The classic that never ages. Hinged closets provide full access.</p>

        <h3>Pros:</h3>
        <ul class="check-list">
            <li>Full access to all parts of the closet simultaneously.</li>
            <li>Option for external drawers and varied handle designs.</li>
            <li>Standard depth (60cm) - fits niches perfectly.</li>
            <li>Simple and reliable mechanisms for years.</li>
        </ul>

        <h3>Cons:</h3>
        <ul class="cross-list">
            <li>Requires clearance space in front of the closet.</li>
            <li>Limited door width (usually up to 60cm) to save hinges.</li>
        </ul>

        <div class="my-8">
            <img src="/assets/closets/hinged-new.png" alt="Hinged Closet" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>

        <h2>Care Tips</h2>
        <p>To keep your closet lasting for years:</p>
        <ul class="list-disc pl-6 space-y-2">
            <li>Vacuum the sliding tracks monthly to remove dust.</li>
            <li>Avoid slamming doors - this protects hinges and soft-close mechanisms.</li>
            <li>Do not overload shelves (max 20kg per standard shelf).</li>
        </ul>
      `,
        },
        date: '2024-02-10',
        author: 'Elite Design Team',
        category: 'design',
        readTime: 5,
        image: '/assets/closets/bedroom-new.png',
    },
    {
        id: '8',
        slug: 'bedroom-closet-guide',
        title: {
            he: 'ארון לחדר שינה: המדריך השלם לבחירה נכונה',
            ru: 'Шкаф в спальню: Полное руководство по выбору',
            en: 'Bedroom Closet: The Complete Design Guide',
        },
        excerpt: {
            he: 'חדר השינה הוא המקדש הפרטי שלכם, והארון הוא הלב שלו. איך מתכננים ארון שמשלב רוגע, עיצוב ופרקטיקה? כל התשובות בפנים.',
            ru: 'Спальня — ваш личный храм, а шкаф — его сердце. Как спроектировать шкаф, сочетающий уют, дизайн и практичность?',
            en: 'The bedroom is your private sanctuary, and the closet is its heart. How to design a closet that combines calm, style, and utility?',
        },
        content: {
            he: `
        <p class="lead">הארון בחדר השינה הוא הרבה יותר מאשר מקום לאחסון בגדים. הוא קובע את האווירה בחדר, את תחושת המרחב ואת נוחות ההתארגנות בבוקר.</p>

        <h2>שקט נפשי (תרתי משמע)</h2>
        <p>בחדר השינה, השקט הוא קריטי. לכן, בארונות הפתיחה שלנו אנו משתמשים בצירים בטריקה שקטה, ובארונות הזזה במנגנונים רחפים שנעים בדממה מוחלטת.</p>
        
        <h2>תכנון פנימי חכם</h2>
        <p>הסוד לארון מושלם הוא החלוקה הפנימית:</p>
        <ul class="check-list">
            <li><strong>תלייה ארוכה vs קצרה:</strong> הפרידו בין שמלות/מעילים לחולצות ומכנסיים.</li>
            <li><strong>מגירות שליפה מלאה:</strong> לגישה נוחה גם לגרביים שנמצאים הכי עמוק.</li>
            <li><strong>מדפים עליונים:</strong> לאחסון מצעים, כריות ושמיכות חורף.</li>
        </ul>

        <h2>עיצוב וגימור</h2>
        <p>לאווירה רגועה, אנו ממליצים על גוונים בהירים וניטרליים (לבן, שמנת, אפור בהיר) או שילוב של זכוכית למראה יוקרתי ומאוורר.</p>
        
        <div class="my-8">
            <img src="/assets/closets/bedroom-new.png" alt="ארון חדר שינה" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>
      `,
            ru: `
        <p class="lead">Шкаф в спальне — это не просто место для хранения одежды. Он задает атмосферу комнаты, ощущение пространства и удобство утренних сборов.</p>

        <h2>Душевное спокойствие (буквально)</h2>
        <p>В спальне тишина критически важна. Поэтому в наших распашных шкафах мы используем петли с тихим закрыванием, а в шкафах-купе — парящие механизмы, скользящие в полной тишине.</p>
        
        <h2>Умная внутренняя планировка</h2>
        <p>Секрет идеального шкафа — внутри:</p>
        <ul class="check-list">
            <li><strong>Длинная vs Короткая вешалка:</strong> Разделите платья/пальто и рубашки/брюки.</li>
            <li><strong>Ящики полного выдвижения:</strong> Для удобного доступа даже к самым дальним носкам.</li>
            <li><strong>Верхние полки:</strong> Для постельного белья, подушек и зимних одеял.</li>
        </ul>

        <h2>Дизайн и отделка</h2>
        <p>Для спокойной атмосферы мы рекомендуем светлые и нейтральные тона (белый, кремовый, светло-серый) или сочетание со стеклом для роскошного и воздушного вида.</p>
        
        <div class="my-8">
            <img src="/assets/closets/bedroom-new.png" alt="Шкаф в спальню" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>
      `,
            en: `
        <p class="lead">The bedroom closet is more than just storage. It sets the room's mood, spatial feel, and morning routine comfort.</p>

        <h2>Peace of Mind (Literally)</h2>
        <p>Silence is critical in the bedroom. That's why we use soft-close hinges for swing doors and silent floating mechanisms for sliding doors.</p>
        
        <h2>Smart Internal Layout</h2>
        <p>The secret is inside:</p>
        <ul class="check-list">
            <li><strong>Long vs Short Hang:</strong> Separate dresses/coats from shirts/pants.</li>
            <li><strong>Full Extension Drawers:</strong> For easy access to items at the back.</li>
            <li><strong>Top Shelves:</strong> For linens, pillows, and winter blankets.</li>
        </ul>

        <h2>Design & Finish</h2>
        <p>For a calm atmosphere, we recommend light neutrals (white, cream, light gray) or glass accents for a luxurious, airy look.</p>
        
        <div class="my-8">
            <img src="/assets/closets/bedroom-new.png" alt="Bedroom Closet" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>
      `,
        },
        date: '2024-02-12',
        author: 'Elite Design Team',
        category: 'design',
        readTime: 4,
        image: '/assets/closets/bedroom-new.png',
    },
    {
        id: '9',
        slug: 'hallway-closet-guide',
        title: {
            he: 'ארון כניסה: כרטיס הביקור של הבית',
            ru: 'Шкаф в прихожую: Визитная карточка вашего дома',
            en: 'Entryway Closet: Your Home\'s Business Card',
        },
        excerpt: {
            he: 'הדבר הראשון שרואים כשנכנסים הביתה. איך יוצרים ארון כניסה שגם מסתיר את הבלגן (נעליים, מעילים) וגם נראה מדהים?',
            ru: 'Первое, что видят при входе. Как создать шкаф, который скрывает беспорядок (обувь, куртки) и выглядит потрясающе?',
            en: 'The first thing seen upon entry. How to create a closet that hides clutter (shoes, coats) and looks amazing?',
        },
        content: {
            he: `
        <p class="lead">הכניסה לבית היא המקום שבו נוצר הרושם הראשוני. ארון הכניסה (Hallway Closet) חייב להיות המאסטר של ההסוואה: יפה מבחוץ, וסוס עבודה מבפנים.</p>

        <h2>מה מאחסנים שם?</h2>
        <ul class="check-list">
            <li><strong>מעילים ותיקים:</strong> תאים גבוהים לתלייה יומיומית.</li>
            <li><strong>נעליים:</strong> מגירות נשלפות או מדפים משופעים לאחסון נוח של נעליים בשימוש תדיר.</li>
            <li><strong>דברים קטנים:</strong> מפתחות, דואר, משקפי שמש - במגירה ייעודית שתמנע בלגן על השידה.</li>
        </ul>

        <h2>טריקים לעיצוב</h2>
        <ul>
            <li><strong>מראות:</strong> דלת מראה בארון הכניסה היא חובה כפולה - גם לבדיקת המראה לפני היציאה וגם להגדלת חלל הכניסה שלרוב הוא צר.</li>
            <li><strong>נישה לישיבה:</strong> טרנד חם - שילוב ספסל התארגנות מרופד בתוך מבנה הארון.</li>
        </ul>
        
        <div class="my-8">
            <img src="/assets/closets/hallway-small.png" alt="ארון כניסה" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>
      `,
            ru: `
        <p class="lead">Прихожая — это место первого впечатления. Шкаф в прихожей должен быть мастером маскировки: красивым снаружи и "рабочей лошадкой" внутри.</p>

        <h2>Что храним?</h2>
        <ul class="check-list">
            <li><strong>Куртки и сумки:</strong> Высокие секции для повседневной одежды.</li>
            <li><strong>Обувь:</strong> Выдвижные полки или наклонные стеллажи для часто используемой обуви.</li>
            <li><strong>Мелочи:</strong> Ключи, почта, очки — в специальном ящике, чтобы не захламлять тумбу.</li>
        </ul>

        <h2>Дизайнерские трюки</h2>
        <ul>
            <li><strong>Зеркала:</strong> Зеркальная дверь обязательна — проверить вид перед выходом и визуально расширить узкий коридор.</li>
            <li><strong>Ниша для сидения:</strong> Горячий тренд — встроенная мягкая скамья внутри конструкции шкафа.</li>
        </ul>
        
        <div class="my-8">
            <img src="/assets/closets/hallway-small.png" alt="Шкаф в прихожую" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>
      `,
            en: `
        <p class="lead">The entryway creates the first impression. The Hallway Closet must be a master of camouflage: beautiful outside, workhorse inside.</p>

        <h2>What's inside?</h2>
        <ul class="check-list">
            <li><strong>Coats & Bags:</strong> Tall sections for daily wear.</li>
            <li><strong>Shoes:</strong> Pull-out drawers or angled shelves for frequent footwear.</li>
            <li><strong>Small Items:</strong> Keys, mail, sunglasses - in a dedicated drawer to avoid clutter.</li>
        </ul>

        <h2>Design Tricks</h2>
        <ul>
            <li><strong>Mirrors:</strong> A mirror door is a double must - for a last look before leaving and to expand the typically narrow hallway space.</li>
            <li><strong>Seating Nook:</strong> Hot trend - integrating a padded bench within the closet structure.</li>
        </ul>
        
        <div class="my-8">
            <img src="/assets/closets/hallway-small.png" alt="Entryway Closet" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>
      `,
        },
        date: '2024-02-14',
        author: 'Elite Design Team',
        category: 'design',
        readTime: 3,
        image: '/assets/closets/hallway-small.png',
    },
    {
        id: '10',
        slug: 'guest-room-sliding-closet',
        title: {
            he: 'ארון הזזה לחדר אורחים: אירוח בסטייל',
            ru: 'Шкаф-купе в гостевую: Максимум функциональности',
            en: 'Guest Room Sliding Closet: Hosting in Style',
        },
        excerpt: {
            he: 'חדר האורחים הוא לעיתים גם חדר עבודה או חדר אחסון. איך ארון הזזה פותר את בעיית המקום ומעניק לאורחים תחושת מלון?',
            ru: 'Гостевая комната часто служит кабинетом или складом. Как шкаф-купе решает проблему места и дарит гостям ощущение отеля?',
            en: 'The guest room often doubles as an office or storage. How does a sliding closet solve space issues and give guests a hotel feel?',
        },
        content: {
            he: `
        <p class="lead">חדר האורחים הוא החדר ה"גמיש" בבית. ביום יום הוא משמש לאחסון או עבודה, ובסופ"ש הוא הופך לסוויטת אירוח. ארון הזזה הוא הפתרון המושלם כאן.</p>

        <h2>למה דווקא הזזה?</h2>
        <p>חדרי אורחים הם לרוב קטנים יותר. דלתות הזזה חוסכות את הצורך במקום לפתיחת דלתות, ומאפשרות להציב מיטה או שולחן כתיבה ממש בסמוך לארון.</p>

        <h2>החלוקה המנצחת</h2>
        <ul class="check-list">
            <li><strong>צד הבית:</strong> מדפים עמוקים לאחסון ציוד שאינו בשימוש יומיומי (מזוודות, שמיכות קיץ, ספרים).</li>
            <li><strong>צד האורחים:</strong> חלק עם תלייה ומגירות שנותר ריק ונקי, מוכן תמיד לבואם של האורחים בחגים ובשבתות.</li>
        </ul>
        
        <div class="my-8">
            <img src="/assets/closets/sliding-new.png" alt="ארון הזזה" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>
      `,
            ru: `
        <p class="lead">Гостевая — самая "гибкая" комната. В будни это склад или кабинет, в выходные — люкс для гостей. Шкаф-купе здесь идеален.</p>

        <h2>Почему купе?</h2>
        <p>Гостевые комнаты обычно небольшие. Раздвижные двери экономят место, позволяя поставить кровать или стол вплотную к шкафу.</p>

        <h2>Победная планировка</h2>
        <ul class="check-list">
            <li><strong>Сторона дома:</strong> Глубокие полки для хранения вещей не первой необходимости (чемоданы, летние одеяла, архивы).</li>
            <li><strong>Сторона гостей:</strong> Секция с вешалкой и ящиками, которая всегда пуста и чиста, ожидая гостей на праздники.</li>
        </ul>
        
        <div class="my-8">
            <img src="/assets/closets/sliding-new.png" alt="Шкаф-купе" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>
      `,
            en: `
        <p class="lead">The guest room is the "flexible" room. Daily it's storage or office, weekends it's a guest suite. A sliding closet is perfect here.</p>

        <h2>Why Sliding?</h2>
        <p>Guest rooms are often smaller. Sliding doors save opening space, allowing a bed or desk to be placed right next to the closet.</p>

        <h2>Winning Layout</h2>
        <ul class="check-list">
            <li><strong>Home Side:</strong> Deep shelves for long-term storage (suitcases, seasonal bedding, archives).</li>
            <li><strong>Guest Side:</strong> A section with hanging space and drawers left empty and clean, always ready for visitors.</li>
        </ul>
        
        <div class="my-8">
            <img src="/assets/closets/sliding-new.png" alt="Sliding Closet" class="rounded-xl shadow-lg w-full h-64 object-cover" />
        </div>
      `,
        },
        date: '2024-02-15',
        author: 'Elite Design Team',
        category: 'design',
        readTime: 3,
        image: '/assets/closets/sliding-new.png',
    },
];
