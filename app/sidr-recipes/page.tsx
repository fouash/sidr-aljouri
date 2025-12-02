import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Users, Star, CheckCircle2, Sparkles, Heart, Droplet, Sun } from "lucide-react"

export const metadata: Metadata = {
  title: "وصفات السدر الطبيعية - ماسكات وخلطات مجربة للشعر والبشرة | سدر الجوري",
  description: "مجموعة شاملة من وصفات السدر الطبيعية المجربة. ماسكات السدر للشعر، ماسكات للوجه، وصفات للجسم، خلطات طبيعية، طرق تحضير سهلة، نتائج مضمونة. دليل شامل للعناية الطبيعية بالسدر في المنزل",
  keywords: "وصفات السدر، ماسك السدر، sidr recipes, jujube mask, خلطات السدر، وصفات طبيعية، DIY sidr mask, homemade beauty, ماسك السدر للشعر، ماسك السدر للوجه، السدر والعسل، السدر والزبادي، السدر والحناء، natural beauty recipes, organic skincare, العناية الطبيعية، وصفات جدتي، traditional beauty, سكراب السدر، حمام السدر، sidr scrub, sidr bath, لوشن السدر، وصفات منزلية، home remedies, الجمال الطبيعي، natural glow, وصفات مجربة",
  openGraph: {
    title: "وصفات السدر الطبيعية - ماسكات مجربة | سدر الجوري",
    description: "مجموعة شاملة من وصفات السدر المجربة. ماسكات للشعر والبشرة، وصفات سهلة ونتائج مضمونة",
    url: "https://sidr-aljouri.com/sidr-recipes",
    siteName: "سدر الجوري",
    images: [{
      url: "/sidr-powder-mixing-bowl-preparation-natural.jpg",
      width: 1200,
      height: 630,
      alt: "وصفات السدر الطبيعية - تحضير ماسكات السدر"
    }],
    locale: "ar_SA",
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "وصفات السدر الطبيعية",
    description: "مجموعة شاملة من وصفات السدر المجربة للشعر والبشرة",
    images: ["/sidr-powder-mixing-bowl-preparation-natural.jpg"]
  },
  alternates: {
    canonical: "https://sidr-aljouri.com/sidr-recipes"
  },
  robots: "index, follow",
  authors: [{ name: "سدر الجوري" }],
  category: "Beauty & DIY"
}

export default function SidrRecipesPage() {
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
                وصفات طبيعية مجربة
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
                وصفات السدر الطبيعية
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                اكتشف أفضل وصفات السدر المجربة للعناية بـ<Link href="/sidr-hair" className="text-primary hover:underline">الشعر</Link> و<Link href="/sidr-skin" className="text-primary hover:underline">البشرة</Link> و<Link href="/sidr-body" className="text-primary hover:underline">الجسم</Link>. وصفات سهلة التحضير ونتائج مضمونة مع <Link href="/sidr-benefits" className="text-primary hover:underline">فوائد السدر الطبيعية</Link>
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                اطلب منتجات السدر
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/sidr-powder-mixing-bowl-preparation-natural.jpg" alt="وصفات السدر" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Hair Recipes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">وصفات السدر للشعر</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ماسكات طبيعية لتقوية الشعر وعلاج مشاكله
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "ماسك السدر الكلاسيكي",
                difficulty: "سهل",
                time: "30 دقيقة",
                rating: 5,
                ingredients: ["3 ملاعق سدر مطحون", "ماء دافئ", "ملعقة عسل"],
                benefits: ["تقوية الجذور", "منع التساقط", "لمعان طبيعي"],
                instructions: [
                  "اخلط السدر مع الماء الدافئ",
                  "أضف العسل واخلط جيداً",
                  "اترك الخليط 15 دقيقة",
                  "ضعه على الشعر لمدة ساعة",
                  "اشطف بالماء الفاتر"
                ],
                icon: Sparkles
              },
              {
                title: "ماسك السدر والزبادي",
                difficulty: "سهل",
                time: "45 دقيقة",
                rating: 5,
                ingredients: ["2 ملعقة سدر", "3 ملاعق زبادي", "ملعقة زيت زيتون"],
                benefits: ["ترطيب عميق", "نعومة فائقة", "علاج الجفاف"],
                instructions: [
                  "اخلط السدر مع الزبادي",
                  "أضف زيت الزيتون",
                  "ضع الماسك على الشعر المبلل",
                  "اتركه 30 دقيقة",
                  "اشطف بالماء البارد"
                ],
                icon: Droplet
              },
              {
                title: "ماسك السدر والحناء",
                difficulty: "متوسط",
                time: "2 ساعة",
                rating: 4,
                ingredients: ["2 ملعقة سدر", "ملعقة حناء", "ماء دافئ", "عصير ليمون"],
                benefits: ["تقوية الشعر", "لون طبيعي", "كثافة أكبر"],
                instructions: [
                  "اخلط السدر والحناء",
                  "أضف الماء وعصير الليمون",
                  "اترك الخليط 3 ساعات",
                  "ضعه على الشعر لمدة ساعتين",
                  "اشطف جيداً"
                ],
                icon: Sun
              }
            ].map((recipe, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <recipe.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{recipe.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {recipe.time}
                        </span>
                        <span>{recipe.difficulty}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(recipe.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">المكونات:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {recipe.ingredients.map((ingredient, i) => (
                          <li key={i}>• {ingredient}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">الفوائد:</h4>
                      <div className="flex flex-wrap gap-2">
                        {recipe.benefits.map((benefit, i) => (
                          <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">طريقة التحضير:</h4>
                      <ol className="text-sm text-muted-foreground space-y-1">
                        {recipe.instructions.map((step, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary font-semibold">{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Recipes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">وصفات السدر للبشرة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ماسكات طبيعية لبشرة نضرة ومشرقة
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "ماسك السدر والعسل للوجه",
                skinType: "جميع أنواع البشرة",
                time: "20 دقيقة",
                ingredients: ["2 ملعقة سدر مطحون", "ملعقة عسل طبيعي", "ماء ورد"],
                benefits: ["تنظيف عميق", "ترطيب طبيعي", "إشراق البشرة"],
                instructions: [
                  "اخلط السدر مع العسل",
                  "أضف ماء الورد تدريجياً",
                  "ضع الماسك على الوجه النظيف",
                  "اتركه 15 دقيقة حتى يجف",
                  "اشطف بالماء الفاتر بحركات دائرية"
                ],
                tips: ["استخدم مرتين أسبوعياً", "تجنب منطقة العينين", "رطب البشرة بعد الاستخدام"]
              },
              {
                title: "ماسك السدر واللبن للتفتيح",
                skinType: "البشرة الدهنية والمختلطة",
                time: "25 دقيقة",
                ingredients: ["2 ملعقة سدر", "3 ملاعق لبن رائب", "نصف ملعقة كركم"],
                benefits: ["تفتيح البقع", "توحيد اللون", "تقليل الدهون"],
                instructions: [
                  "اخلط السدر مع اللبن الرائب",
                  "أضف الكركم واخلط جيداً",
                  "ضع طبقة رقيقة على الوجه",
                  "اتركه 20 دقيقة",
                  "اشطف بالماء البارد"
                ],
                tips: ["استخدم مساءً فقط", "ضع واقي الشمس في اليوم التالي", "اختبر على منطقة صغيرة أولاً"]
              }
            ].map((recipe, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{recipe.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {recipe.time}
                        </span>
                        <span>{recipe.skinType}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">المكونات:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {recipe.ingredients.map((ingredient, i) => (
                          <li key={i}>• {ingredient}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">الفوائد:</h4>
                      <div className="flex flex-wrap gap-2">
                        {recipe.benefits.map((benefit, i) => (
                          <span key={i} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">طريقة التحضير:</h4>
                      <ol className="text-sm text-muted-foreground space-y-1">
                        {recipe.instructions.map((step, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary font-semibold">{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">نصائح مهمة:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {recipe.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Body Care Recipes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">وصفات السدر للجسم</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              وصفات للعناية بالجسم والاسترخاء
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "سكراب السدر للجسم",
                purpose: "تقشير وتنعيم",
                ingredients: ["3 ملاعق سدر", "2 ملعقة سكر", "زيت جوز الهند"],
                usage: "دلك الجسم بحركات دائرية ثم اشطف"
              },
              {
                title: "حمام السدر المهدئ",
                purpose: "استرخاء وتهدئة",
                ingredients: ["4 ملاعق سدر", "ملح البحر", "زيت اللافندر"],
                usage: "أضف للماء الدافئ وانقع لمدة 20 دقيقة"
              },
              {
                title: "لوشن السدر الطبيعي",
                purpose: "ترطيب يومي",
                ingredients: ["2 ملعقة سدر", "زيت اللوز", "ماء الورد"],
                usage: "ضع على الجسم بعد الاستحمام"
              }
            ].map((recipe, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">{recipe.title}</h3>
                  <p className="text-primary font-medium mb-4">{recipe.purpose}</p>
                  <div className="text-left space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">المكونات:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {recipe.ingredients.map((ingredient, i) => (
                          <li key={i}>• {ingredient}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">الاستخدام:</h4>
                      <p className="text-sm text-muted-foreground">{recipe.usage}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">نصائح مهمة لتحضير وصفات السدر</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    نصائح التحضير
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• استخدم السدر الطبيعي المطحون ناعماً</li>
                    <li>• اخلط بالماء الفاتر وليس الساخن</li>
                    <li>• اترك الخليط يتخمر قبل الاستخدام</li>
                    <li>• استخدم أدوات نظيفة للخلط</li>
                    <li>• حضر الكمية المطلوبة فقط</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-500" />
                    نصائح الاستخدام
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• اختبر الوصفة على منطقة صغيرة أولاً</li>
                    <li>• لا تترك الماسك يجف تماماً</li>
                    <li>• اشطف بالماء الفاتر فقط</li>
                    <li>• رطب البشرة بعد الاستخدام</li>
                    <li>• استخدم بانتظام للحصول على أفضل النتائج</li>
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
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">مواضيع ذات صلة</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/sidr-benefits" className="block p-4 bg-background rounded-lg border hover:border-primary transition-colors">
              <h3 className="font-semibold text-foreground mb-2">فوائد السدر</h3>
              <p className="text-sm text-muted-foreground">دليل شامل عن فوائد السدر</p>
            </Link>
            <Link href="/sidr-hair" className="block p-4 bg-background rounded-lg border hover:border-primary transition-colors">
              <h3 className="font-semibold text-foreground mb-2">السدر للشعر</h3>
              <p className="text-sm text-muted-foreground">تقوية وعلاج مشاكل الشعر</p>
            </Link>
            <Link href="/sidr-skin" className="block p-4 bg-background rounded-lg border hover:border-primary transition-colors">
              <h3 className="font-semibold text-foreground mb-2">السدر للبشرة</h3>
              <p className="text-sm text-muted-foreground">عناية طبيعية لبشرة نضرة</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="جرب وصفات السدر الطبيعية"
        description="احصل على منتجات السدر عالية الجودة لتحضير أفضل الوصفات الطبيعية في المنزل"
      />

      <Footer />
    </>
  )
}