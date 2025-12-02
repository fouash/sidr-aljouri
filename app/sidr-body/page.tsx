import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { BenefitCard } from "@/components/benefit-card"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Shield, Droplet, Sun, CheckCircle2, Leaf, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "السدر للجسم والصحة - فوائد طبيعية لتقوية المناعة والهضم | سدر الجوري",
  description: "اكتشف فوائد السدر المذهلة للجسم والصحة العامة. تقوية المناعة، تحسين الهضم، تنظيف الجسم من السموم، مضاد للالتهابات. شاي السدر، حمام السدر، وصفات طبيعية للعلاج بالأعشاب",
  keywords: "السدر للجسم، فوائد السدر للصحة، jujube health benefits, sidr tea, السدر للمناعة، السدر للهضم، شاي السدر، حمام السدر، السدر للتخلص من السموم، detox sidr, immune booster, السدر مضاد الالتهابات، anti-inflammatory sidr, العلاج بالأعشاب، herbal medicine, الطب البديل، natural healing, السدر للقلق، السدر للنوم، السدر للاسترخاء، relaxation sidr, السدر للدورة الدموية، circulation booster, السدر للقلب، heart health sidr",
  openGraph: {
    title: "السدر للجسم والصحة - فوائد طبيعية | سدر الجوري",
    description: "فوائد السدر المذهلة للجسم. تقوية المناعة، تحسين الهضم، تنظيف الجسم من السموم",
    url: "https://sidr-aljouri.com/sidr-body",
    siteName: "سدر الجوري",
    images: [{
      url: "/natural-sidr-tree-leaves-and-products-photography.jpg",
      width: 1200,
      height: 630,
      alt: "فوائد السدر للجسم والصحة العامة"
    }],
    locale: "ar_SA",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "السدر للجسم والصحة",
    description: "فوائد السدر لتقوية المناعة وتحسين الهضم وتنظيف الجسم",
    images: ["/natural-sidr-tree-leaves-and-products-photography.jpg"]
  },
  alternates: {
    canonical: "https://sidr-aljouri.com/sidr-body"
  },
  robots: "index, follow",
  authors: [{ name: "سدر الجوري" }],
  category: "Health & Wellness"
}

export default function SidrBodyPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                الصحة والعافية الطبيعية
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                السدر للجسم والصحة العامة
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                استفد من <Link href="/sidr-benefits" className="text-primary hover:underline">فوائد السدر المذهلة</Link> لصحة الجسم. يقوي المناعة، يحسن الهضم، وينظف الجسم من السموم بطريقة طبيعية وآمنة. اكتشف <Link href="/sidr-recipes" className="text-primary hover:underline">وصفات السدر</Link> للجسم
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                اطلب منتجات السدر للجسم
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/natural-sidr-tree-leaves-and-products-photography.jpg" alt="السدر للجسم" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">فوائد السدر للجسم والصحة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اكتشف كيف يمكن للسدر أن يحسن صحتك العامة ويقوي جسمك بطريقة طبيعية
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard
              icon={Shield}
              title="تقوية المناعة"
              description="يحتوي على مضادات الأكسدة القوية التي تعزز جهاز المناعة وتحارب الأمراض"
            />
            <BenefitCard
              icon={Heart}
              title="تحسين الهضم"
              description="يساعد في تحسين عملية الهضم ويهدئ اضطرابات المعدة والأمعاء"
            />
            <BenefitCard
              icon={Droplet}
              title="تنظيف الجسم"
              description="ينظف الجسم من السموم والشوائب ويحسن وظائف الكبد والكلى"
            />
            <BenefitCard
              icon={Sun}
              title="مضاد للالتهابات"
              description="يقلل من الالتهابات في الجسم ويساعد في علاج الأمراض المزمنة"
            />
          </div>
        </div>
      </section>

      {/* Body Systems Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">فوائد السدر لأجهزة الجسم</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Digestive System */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">الجهاز الهضمي</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "تحسين عملية الهضم وامتصاص الطعام",
                    "علاج عسر الهضم والانتفاخ",
                    "تهدئة التهابات المعدة والأمعاء",
                    "تنظيم حركة الأمعاء ومنع الإمساك",
                    "حماية جدار المعدة من القرح",
                    "تحسين البكتيريا النافعة في الأمعاء"
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Immune System */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">جهاز المناعة</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "تقوية الجهاز المناعي الطبيعي",
                    "محاربة الفيروسات والبكتيريا الضارة",
                    "زيادة إنتاج خلايا الدم البيضاء",
                    "تحسين مقاومة الجسم للأمراض",
                    "تسريع عملية الشفاء والتعافي",
                    "حماية من نزلات البرد والإنفلونزا"
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Circulatory System */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplet className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">الدورة الدموية</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "تحسين الدورة الدموية في الجسم",
                    "تنظيم ضغط الدم الطبيعي",
                    "تقوية عضلة القلب",
                    "تقليل مستوى الكوليسترول الضار",
                    "تحسين تدفق الأكسجين للأعضاء",
                    "حماية الأوعية الدموية من التلف"
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">طرق استخدام السدر للجسم</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Droplet className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">شاي السدر</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">المكونات:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• ملعقة صغيرة من أوراق السدر المجففة</li>
                      <li>• كوب من الماء المغلي</li>
                      <li>• عسل طبيعي حسب الرغبة</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">طريقة التحضير:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• انقع أوراق السدر في الماء المغلي</li>
                      <li>• اتركه لمدة 10-15 دقيقة</li>
                      <li>• صفي الشاي وأضف العسل</li>
                      <li>• اشرب كوب يومياً على الريق</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">حمام السدر</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">المكونات:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• 3 ملاعق كبيرة من مسحوق السدر</li>
                      <li>• ماء دافئ</li>
                      <li>• بضع قطرات من زيت اللافندر (اختياري)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">طريقة الاستخدام:</h4>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• اخلط السدر مع الماء الدافئ</li>
                      <li>• أضف الخليط لماء الاستحمام</li>
                      <li>• انقع لمدة 15-20 دقيقة</li>
                      <li>• استخدم مرة أسبوعياً للاسترخاء</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Health Conditions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">الحالات الصحية التي يساعد السدر في علاجها</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                condition: "اضطرابات الهضم",
                description: "عسر الهضم، الانتفاخ، متلازمة القولون العصبي",
                icon: Heart
              },
              {
                condition: "ضعف المناعة",
                description: "نزلات البرد المتكررة، الإرهاق المزمن، بطء الشفاء",
                icon: Shield
              },
              {
                condition: "مشاكل الجلد",
                description: "الأكزيما، الصدفية، الحكة، الالتهابات الجلدية",
                icon: Sparkles
              },
              {
                condition: "التوتر والقلق",
                description: "الأرق، التوتر النفسي، القلق، اضطرابات النوم",
                icon: Leaf
              },
              {
                condition: "مشاكل الدورة الدموية",
                description: "ضعف الدورة الدموية، برودة الأطراف، الدوالي",
                icon: Droplet
              },
              {
                condition: "الالتهابات المزمنة",
                description: "التهاب المفاصل، الالتهابات الداخلية، الألم المزمن",
                icon: Sun
              }
            ].map((item, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{item.condition}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
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
            <Link href="/sidr-skin" className="block p-4 bg-background rounded-lg border hover:border-primary transition-colors">
              <h3 className="font-semibold text-foreground mb-2">السدر للبشرة</h3>
              <p className="text-sm text-muted-foreground">عناية طبيعية لبشرة نضرة</p>
            </Link>
            <Link href="/sidr-recipes" className="block p-4 bg-background rounded-lg border hover:border-primary transition-colors">
              <h3 className="font-semibold text-foreground mb-2">وصفات السدر</h3>
              <p className="text-sm text-muted-foreground">وصفات طبيعية مجربة</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="استفد من فوائد السدر لصحة جسمك"
        description="اطلب منتجات السدر الطبيعية واستمتع بصحة أفضل وحيوية أكبر. منتجات طبيعية 100% وآمنة للاستخدام"
      />

      <Footer />
    </>
  )
}