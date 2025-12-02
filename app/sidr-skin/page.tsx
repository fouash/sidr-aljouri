import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { BenefitCard } from "@/components/benefit-card"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, Heart, Shield, Droplet, Sun, CheckCircle2, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "السدر للبشرة والوجه - ماسكات ووصفات طبيعية لبشرة نضرة | سدر الجوري",
  description: "اكتشف فوائد السدر المذهلة للبشرة والوجه. ماسكات السدر الطبيعية، وصفات مجربة، علاج حب الشباب، تفتيح البشرة، ترطيب طبيعي. دليل شامل للعناية بالبشرة بالسدر العضوي",
  keywords: "السدر للبشرة، ماسك السدر، السدر للوجه، sidr face mask, jujube skincare, فوائد السدر للبشرة، ماسك السدر للوجه، السدر لحب الشباب، السدر للتفتيح، السدر للترطيب، natural skincare, organic face mask, العناية الطبيعية بالبشرة، ماسك طبيعي، السدر العضوي، السدر للبقع، السدر للتجاعيد، anti-aging sidr, السدر للحساسية، sensitive skin sidr, السدر للبشرة الجافة، السدر للبشرة الدهنية",
  openGraph: {
    title: "السدر للبشرة - ماسكات طبيعية لبشرة نضرة | سدر الجوري",
    description: "ماسكات السدر الطبيعية لبشرة نضرة ومشرقة. وصفات مجربة لعلاج حب الشباب وتفتيح البشرة",
    url: "https://sidr-aljouri.com/sidr-skin",
    siteName: "سدر الجوري",
    images: [{
      url: "/natural-skincare-sidr-face-mask-glowing-skin.jpg",
      width: 1200,
      height: 630,
      alt: "ماسك السدر للبشرة - عناية طبيعية لبشرة نضرة"
    }],
    locale: "ar_SA",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "السدر للبشرة - ماسكات طبيعية",
    description: "ماسكات السدر الطبيعية لبشرة نضرة. وصفات مجربة لعلاج حب الشباب",
    images: ["/natural-skincare-sidr-face-mask-glowing-skin.jpg"]
  },
  alternates: {
    canonical: "https://sidr-aljouri.com/sidr-skin"
  },
  robots: "index, follow",
  authors: [{ name: "سدر الجوري" }],
  category: "Beauty & Skincare"
}

export default function SidrSkinPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                العناية بالبشرة الطبيعية
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                السدر للوجه والبشرة
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                بشرة نضرة ومشرقة بفضل <Link href="/sidr-benefits" className="text-primary hover:underline">السدر الطبيعي</Link>. يرطب، ينظف، ويحمي بشرتك من العوامل الخارجية. جرب <Link href="/sidr-recipes" className="text-primary hover:underline">وصفات السدر الطبيعية</Link>
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                اطلب منتجات السدر للبشرة
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/natural-skincare-sidr-face-mask-glowing-skin.jpg" alt="السدر للبشرة" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Skin */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">فوائد السدر للبشرة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اكتشفي كيف يمكن للسدر أن يحول بشرتك إلى بشرة صحية ومشرقة
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard
              icon={Sparkles}
              title="تنظيف عميق"
              description="ينظف البشرة من الشوائب والزيوت الزائدة بلطف"
            />
            <BenefitCard
              icon={Droplet}
              title="ترطيب طبيعي"
              description="يرطب البشرة بعمق ويحافظ على نعومتها"
            />
            <BenefitCard
              icon={Shield}
              title="مضاد للبكتيريا"
              description="يحارب البكتيريا المسببة لحب الشباب"
            />
            <BenefitCard
              icon={Sun}
              title="مضاد للأكسدة"
              description="يحمي من علامات الشيخوخة المبكرة"
            />
          </div>
        </div>
      </section>

      {/* Skin Problems Solutions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">حلول طبيعية لمشاكل البشرة</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                problem: "حب الشباب",
                solution: "يقلل من التهابات وينظف المسام بعمق",
                icon: Shield
              },
              {
                problem: "البشرة الجافة",
                solution: "يرطب البشرة ويمنع التشقق والتقشر",
                icon: Droplet
              },
              {
                problem: "البقع الداكنة",
                solution: "يوحد لون البشرة ويقلل من التصبغات",
                icon: Sparkles
              },
              {
                problem: "الحساسية",
                solution: "يهدئ البشرة الحساسة ويقلل من الاحمرار",
                icon: Heart
              },
              {
                problem: "علامات الشيخوخة",
                solution: "يحفز إنتاج الكولاجين ويقلل من التجاعيد",
                icon: Sun
              },
              {
                problem: "المسام الواسعة",
                solution: "يقلص المسام وينظف البشرة بعمق",
                icon: Sparkles
              }
            ].map((item, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{item.problem}</h3>
                  <p className="text-muted-foreground text-sm">{item.solution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Face Masks Recipes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">وصفات ماسكات السدر للوجه</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">ماسك السدر والعسل</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">المكونات:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 2 ملعقة كبيرة من مسحوق السدر</li>
                      <li>• 1 ملعقة كبيرة عسل طبيعي</li>
                      <li>• ماء ورد حسب الحاجة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">طريقة الاستخدام:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• اخلطي المكونات حتى تحصلي على عجينة</li>
                      <li>• ضعي الماسك على الوجه النظيف</li>
                      <li>• اتركيه 15 دقيقة ثم اشطفيه</li>
                    </ul>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm text-primary font-medium">مفيد للبشرة الجافة والمتعبة</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">ماسك السدر واللبن</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">المكونات:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 2 ملعقة كبيرة من مسحوق السدر</li>
                      <li>• 3 ملاعق لبن طازج</li>
                      <li>• نصف ملعقة عسل</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">طريقة الاستخدام:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• اخلطي جميع المكونات جيداً</li>
                      <li>• ضعي الخليط على الوجه والرقبة</li>
                      <li>• اتركيه 20 دقيقة ثم اشطفيه</li>
                    </ul>
                  </div>
                  <div className="bg-primary/5 p-3 rounded-lg">
                    <p className="text-sm text-primary font-medium">مفيد لتفتيح البشرة وتوحيد لونها</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips and Precautions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">نصائح مهمة</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    نصائح للاستخدام
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• ابدئي بكمية قليلة لاختبار رد فعل بشرتك</li>
                    <li>• استخدمي السدر الطبيعي 100% فقط</li>
                    <li>• اخلطي السدر بالماء الفاتر فقط</li>
                    <li>• استخدميه 2-3 مرات في الأسبوع</li>
                    <li>• رطبي بشرتك بعد الاستخدام</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Shield className="w-5 h-5 text-amber-500" />
                    احتياطات
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• تجنبي منطقة العينين عند الاستخدام</li>
                    <li>• لا تتركي الماسك يجف تماماً</li>
                    <li>• اشطفي بالماء الفاتر فقط</li>
                    <li>• توقفي عن الاستخدام عند ظهور حساسية</li>
                    <li>• احفظي السدر في مكان جاف وبارد</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">متى تظهر النتائج؟</h2>
            <div className="space-y-6">
              {[
                { time: "بعد الاستخدام الأول", result: "بشرة نظيفة ومنتعشة" },
                { time: "بعد أسبوع", result: "تحسن في نعومة البشرة وإشراقها" },
                { time: "بعد أسبوعين", result: "تقليل واضح في البقع والتصبغات" },
                { time: "بعد شهر", result: "بشرة أكثر صحة وإشراقاً وتوحد في اللون" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{item.time}</h4>
                    <p className="text-muted-foreground">{item.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">مواضيع ذات صلة</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/sidr-hair" className="block p-4 bg-background rounded-lg border hover:border-primary transition-colors">
              <h3 className="font-semibold text-foreground mb-2">السدر للشعر</h3>
              <p className="text-sm text-muted-foreground">تقوية وعلاج مشاكل الشعر</p>
            </Link>
            <Link href="/sidr-recipes" className="block p-4 bg-background rounded-lg border hover:border-primary transition-colors">
              <h3 className="font-semibold text-foreground mb-2">وصفات السدر</h3>
              <p className="text-sm text-muted-foreground">ماسكات ووصفات طبيعية</p>
            </Link>
            <Link href="/sidr-body" className="block p-4 bg-background rounded-lg border hover:border-primary transition-colors">
              <h3 className="font-semibold text-foreground mb-2">السدر للجسم</h3>
              <p className="text-sm text-muted-foreground">فوائد صحية عامة</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="بشرة نضرة وصحية مع السدر"
        description="جرّب منتجات السدر الطبيعية للعناية بالبشرة واحصل على إطلالة مشرقة"
      />

      <Footer />
    </>
  )
}
