import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const GoogleReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      author: "Sasha Gohlerner",
      rating: 5,
      comment: "נגר מצויין ברמה הגבוהה ביותר , עשה הכל באופן מושלם ועמד בזמנים, מומלץ ביותר!!!!",
    },
    {
      id: 2,
      author: "Yevgenia Nabutovskaya",
      rating: 5,
      comment: "The kitchen furniture was delivered and installed in time. The service is excellent, the manager is punctual and professional. I recommend elite design kitchens to everybody who looks for comfort in his home.",
    },
    {
      id: 3,
      author: "Dina Sh.",
      rating: 5,
      comment: "Заказали кухню,после того,как подруга получила свою,двумя месяцами раньше.😍Сразу же подкупило: качество,оперативность ,отзывчивость и пунктуальность компании.Роман Москович был с нами терпелив и вежлив на всем протяжении процесса от заказа до полной сборки кухни.Комплект получился точно по нашему представлению,и с учетом всех наших нюансов.Кухней наслаждаемся каждый день🙂,получая кучу комплиментов от друзей и близких.😍Желаем компании Elite Design kitchens процветания и великолепной прибыли.Привет Славе!!🙂Прилагаю 2 фото:до и после.",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Отзывы с Google Business (Общая оценка 5.0)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                      } fill-current`}
                    />
                  ))}
                </div>
                <CardTitle className="text-xl font-semibold">{review.author}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">"{review.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?rlz=1C1KNTJ_enIL1065IL1180&sca_esv=3d16839f334d68f5&cs=1&sxsrf=ANbL-n5XvZF9c4iypi0e6t6WgNbDYvnUug:1769615050272&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qORqilvmwHq9cJfbubSTp2DwBtW8gnELCUIhLNLxshEwdTWdDactlEoLKtEBZHZubTl5Cn5H4suZA-5ROSxg5vWEVqbTOjyxj2PRP-2SlYHhP-U8fSTJk1-8fxGE5SUymqsJaKnQ%3D&q=Elite+Design+kitchens+%26+more+%D0%9E%D1%82%D0%B7%D1%8B%D0%B2%D1%8B&sa=X&ved=2ahUKEwifsNfjya6SAxXL2wIHHWxlAJ0Q0bkNegQIIBAH&biw=1920&bih=963&dpr=1&aic=0&sei=4i56aaWxNIivi-gPiYrR2Ac"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Читать все отзывы на Google Business
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
