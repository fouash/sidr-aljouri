import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { BenefitCard } from "@/components/benefit-card"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Leaf, Heart, Shield, Sparkles, Droplet, Sun, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "فوائد السدر الصحية - دليل شامل عن شجرة السدر والنبق | سدر الجوري",
  description: "اكتشف فوائد السدر المذهلة للصحة والجمال. دليل شامل عن شجرة السدر، النبق، فوائد السدر للشعر والبشرة والجسم. معلومات علمية موثقة عن استخدامات السدر الطبيعية",
  keywords: "فوائد السدر، السدر الطبيعي، شجرة السدر، النبق، jujube benefits, ziziphus, السدر للصحة، فوائد السدر العلمية، السدر المطحون، أوراق السدر، السدر العضوي، فوائد النبق، السدر الجبلي، natural sidr, organic jujube, sidr tree benefits, السدر للمناعة، السدر مضاد الأكسدة، السدر الطبي، herbal sidr, السدر التقليدي، السدر الأصلي",
  openGraph: {
    title: "فوائد السدر الصحية - دليل شامل | سدر الجوري",
    description: "اكتشف فوائد السدر المذهلة للصحة والجمال. معلومات علمية موثقة عن استخدامات السدر الطبيعية",
    url: "https://sidr-aljouri.com/sidr-benefits",
    siteName: "سدر الجوري",
    images: [{
      url: "/sidr-tree-with-fruits-and-leaves-natural.jpg",
      width: 1200,
      height: 630,
      alt: "فوائد السدر الصحية - شجرة السدر الطبيعية"
    }],
    locale: "ar_SA",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "فوائد السدر الصحية - دليل شامل",
    description: "اكتشف فوائد السدر المذهلة للصحة والجمال. معلومات علمية موثقة",
    images: ["/sidr-tree-with-fruits-and-leaves-natural.jpg"]
  },
  alternates: {
    canonical: "https://sidr-aljouri.com/sidr-benefits"
  },
  robots: "index, follow",
  authors: [{ name: "سدر الجوري" }],
  category: "Health & Beauty"
}

export default function SidrBenefitsPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Leaf className="w-4 h-4" />
                كنز طبيعي
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                ماهو السدر وما فوائده؟
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                السدر أو النبق هو شجرة مباركة معروفة منذ القدم بفوائدها الصحية والجمالية المذهلة. اكتشف <Link href="/sidr-hair" className="text-primary hover:underline">فوائده للشعر</Link>، <Link href="/sidr-skin" className="text-primary hover:underline">للبشرة</Link>، و<Link href="/sidr-body" className="text-primary hover:underline">للجسم</Link>
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                اكتشف منتجات السدر
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/sidr-tree-with-fruits-and-leaves-natural.jpg" alt="شجرة السدر" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What is Sidr */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">ما هو السدر؟</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  السدر (Ziziphus) هو شجرة مباركة ذُكرت في القرآن الكريم، وتُعرف أيضاً باسم النبق أو العناب. تنمو في المناطق الجافة وشبه الجافة، وتتميز بأوراقها الخضراء وثمارها الصغيرة.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  استُخدم السدر منذ آلاف السنين في الطب الشعبي والعناية الطبيعية، حيث يحتوي على مركبات طبيعية مفيدة مثل الصابونين والفلافونويد والفيتامينات. يمكن استخدامه في <Link href="/sidr-recipes" className="text-primary hover:underline">وصفات طبيعية متعددة</Link>.
                </p>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden">
                <Image src="/majestic-sidr-tree-in-nature-landscape.jpg" alt="شجرة السدر في الطبيعة" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">الفوائد الصحية للسدر</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              فوائد متعددة لصحة الجسم والشعر والبشرة
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitCard
              icon={Heart}
              title="تقوية المناعة"
              description="يحتوي على مضادات الأكسدة التي تقوي جهاز المناعة وتحارب الجذور الحرة"
            />
            <BenefitCard
              icon={Shield}
              title="مضاد للبكتيريا"
              description="له خصائص مضادة للبكتيريا والفطريات، مما يساعد في علاج الالتهابات"
            />
            <BenefitCard
              icon={Sparkles}
              title="تنظيف طبيعي"
              description="ينظف الجسم والشعر بلطف دون إزالة الزيوت الطبيعية المفيدة"
            />
            <BenefitCard
              icon={Droplet}
              title="ترطيب عميق"
              description="يرطب البشرة والشعر بعمق ويمنع الجفاف والتشقق"
            />
            <BenefitCard
              icon={Sun}
              title="حماية طبيعية"
              description="يحمي من أضرار أشعة الشمس والعوامل البيئية الضارة"
            />
            <BenefitCard
              icon={Leaf}
              title="مهدئ ومضاد للالتهاب"
              description="يهدئ التهابات الجلد وفروة الرأس ويقلل من الحكة والتهيج"
            />
          </div>
        </div>
      </section>

      {/* Benefits by Category */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">فوائد السدر حسب الاستخدام</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Hair Benefits */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">فوائد السدر للشعر</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "تقوية جذور الشعر ومنع التساقط",
                    "علاج قشرة الرأس والحكة",
                    "زيادة كثافة ولمعان الشعر",
                    "تنظيف فروة الرأس بعمق",
                    "تحفيز نمو الشعر الطبيعي",
                    "حماية الشعر من التلف"
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skin Benefits */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">فوائد السدر للبشرة</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "تنظيف البشرة من الشوائب",
                    "ترطيب البشرة الجافة",
                    "تهدئة الالتهابات والحساسية",
                    "تأخير علامات الشيخوخة",
                    "توحيد لون البشرة",
                    "علاج حب الشباب وآثاره"
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Body Benefits */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">فوائد السدر للجسم</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "تقوية جهاز المناعة",
                    "تحسين الهضم والتمثيل الغذائي",
                    "تنظيم مستوى السكر في الدم",
                    "مضاد طبيعي للأكسدة",
                    "تهدئة الجهاز العصبي",
                    "تحسين جودة النوم"
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

      {/* How to Use */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">طرق استخدام السدر</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">للشعر وفروة الرأس</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• اخلطي مسحوق السدر مع الماء الدافئ</li>
                    <li>• اتركي الخليط لمدة 15 دقيقة</li>
                    <li>• ضعيه على الشعر المبلل ودلكي فروة الرأس</li>
                    <li>• اتركيه لمدة 20-30 دقيقة ثم اشطفيه</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">للوجه والبشرة</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• اخلطي السدر مع ماء الورد أو العسل</li>
                    <li>• ضعي الماسك على الوجه النظيف</li>
                    <li>• اتركيه حتى يجف (10-15 دقيقة)</li>
                    <li>• اشطفيه بالماء الفاتر برفق</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">اقرأ أيضاً</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/sidr-hair" className="block p-4 bg-background rounded-lg border hover:border-primary transition-colors">
              <h3 className="font-semibold text-foreground mb-2">فوائد السدر للشعر</h3>
              <p className="text-sm text-muted-foreground">تقوية وعلاج مشاكل الشعر</p>
            </Link>
            <Link href="/sidr-skin" className="block p-4 bg-background rounded-lg border hover:border-primary transition-colors">
              <h3 className="font-semibold text-foreground mb-2">فوائد السدر للبشرة</h3>
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
        title="استفد من فوائد السدر الطبيعية"
        description="اطلب منتجات السدر الأصلية واستمتع بفوائدها الصحية والجمالية"
      />

      <Footer />
    </>
  )
}
