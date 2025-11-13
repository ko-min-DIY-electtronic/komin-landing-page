"use client";

import Image from "next/image";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-75 transition-opacity"
          >
            <Image
              src="/images/komin.jpg"
              alt="Ko-MIn D.I.Y Store Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="hidden text-xl font-bold sm:inline">
              Ko-MIn D.I.Y Store
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Terms and Conditions Content */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-2">
              အသုံးပြုမှု စည်းကမ်းသတ်မှတ်ချက်များ
            </h1>
            <p className="text-lg text-muted-foreground">
              Terms and Conditions
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <p className="text-muted-foreground mb-4">
                အကျိုးသက်ရောက်သည့်နေ့စွဲ: နိုဝင်ဘာလ ၁၃ ရက်၊ ၂၀၂၅
              </p>
              <p className="text-muted-foreground">
                ဤအသုံးပြုမှု စည်းကမ်းသတ်မှတ်ချက်များသည် "DIY Electric Myanmar"
                မိုဘိုင်းအပလီကေးရှင်း (ယခုနောက်ပိုင်းတွင် "App"
                ဟုညွှန်းဆိုပါမည်) နှင့် App မှတစ်ဆင့် ဝန်ဆောင်မှုများကို
                အသုံးပြုသူ (ယခုနောက်ပိုင်းတွင် "အသုံးပြုသူ" သို့မဟုတ် "သင်"
                ဟုညွှန်းဆိုပါမည်) ကြားတွင် သဘောတူညီထားသော စည်းမျဉ်းများ
                ဖြစ်ပါသည်။ App ကို အသုံးမပြုမီ ဤစည်းကမ်းချက်များကို သေချာစွာ
                ဖတ်ရှုရန် တိုက်တွန်းပါသည်။ App ကို အသုံးပြုခြင်း၊
                မှတ်ပုံတင်ခြင်း သို့မဟုတ် ဝန်ဆောင်မှုများကို ရယူခြင်းဖြင့်
                သင်သည် ဤစည်းကမ်းချက်များကို အပြည့်အဝ သဘောတူလက်ခံပြီး ဖြစ်ပါသည်။
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                ၁။ အကောင့်မှတ်ပုံတင်ခြင်းနှင့် အသုံးပြုသူ၏ တာဝန်များ
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    ၁.၁။ အကောင့်ဖန်တီးခြင်း
                  </h3>
                  <p className="text-muted-foreground">
                    App ကို အသုံးပြုရန်အတွက် သင်သည် မှန်ကန်သော အမည်၊
                    ဖုန်းနံပါတ်၊ လိပ်စာ နှင့် အခြားလိုအပ်သော အချက်အလက်များကို
                    ပေးရမည်။ သင့်အချက်အလက်များသည် မှန်ကန်ပြီး ပြည့်စုံရန်အတွက်
                    သင်သာလျှင် တာဝန်ရှိသည်။
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    ၁.၂။ အကောင့်လုံခြုံရေး
                  </h3>
                  <p className="text-muted-foreground">
                    သင့်အကောင့် လျှို့ဝှက်နံပါတ်၏ လျှို့ဝှက်ချက်ကို
                    ထိန်းသိမ်းရန်နှင့် သင့်အကောင့်အောက်တွင် ဖြစ်ပေါ်သည့်
                    လုပ်ဆောင်မှုအားလုံးအတွက် သင်သာ တာဝန်ရှိပါသည်။
                    ခွင့်ပြုချက်မရှိဘဲ သင့်အကောင့်အား အသုံးပြုမှုများအား
                    ချက်ချင်း ကျွန်ုပ်တို့အား အကြောင်းကြားရပါမည်။
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    ၁.၃။ အသုံးပြုမှု ကန့်သတ်ချက်များ
                  </h3>
                  <p className="text-muted-foreground">
                    App ကို အသုံးပြုခြင်းသည် မြန်မာနိုင်ငံ၏ ဥပဒေများနှင့်
                    မဆန့်ကျင်ရပါ။ App ၏ စနစ်လုံခြုံရေးကို ထိခိုက်စေနိုင်သော၊
                    အခြားအသုံးပြုသူများ၏ အခွင့်အရေးကို ချိုးဖောက်နိုင်သော
                    မည်သည့်လုပ်ဆောင်မှုမျိုးကိုမဆို တင်းကျပ်စွာ တားမြစ်ထားသည်။
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                ၂။ ကုန်ပစ္စည်းများ၊ ဈေးနှုန်းနှင့် မှာယူမှုများ
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    ၂.၁။ ကုန်ပစ္စည်းဖော်ပြချက်
                  </h3>
                  <p className="text-muted-foreground">
                    ကျွန်ုပ်တို့သည် App တွင် ဖော်ပြထားသော
                    ကုန်ပစ္စည်းဖော်ပြချက်များ၊ ပုံများနှင့် ဈေးနှုန်းများ
                    တိကျမှန်ကန်မှုရှိစေရန် အစွမ်းကုန် ကြိုးစားပါသည်။ သို့သော်
                    ဖော်ပြချက်တွင် မှားယွင်းမှုများ သို့မဟုတ်
                    လွဲချော်မှုများရှိပါက ကျွန်ုပ်တို့တွင်
                    ပြင်ဆင်ပိုင်ခွင့်ရှိပါသည်။
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">၂.၂။ ဈေးနှုန်း</h3>
                  <p className="text-muted-foreground">
                    ကုန်ပစ္စည်းများ၏ ဈေးနှုန်းများကို အခါအားလျော်စွာ
                    ပြောင်းလဲနိုင်ပါသည်။ မှာယူမှုကို အတည်ပြုပြီးနောက်
                    ဈေးနှုန်းအပြောင်းအလဲရှိပါက သင့်အား အကြောင်းကြားပါမည်။
                    မှာယူမှု တန်ဖိုးတွင် ကုန်ပစ္စည်းဈေးနှုန်း၊ အခွန်အခ
                    (ရှိလျှင်) နှင့် ပို့ဆောင်ခကို ထည့်သွင်းသည်။
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    ၂.၃။ မှာယူမှု လက်ခံခြင်း
                  </h3>
                  <p className="text-muted-foreground">
                    မှာယူမှုများကို App မှတစ်ဆင့် အလိုအလျှောက် လက်ခံပါသည်။
                    ကျွန်ုပ်တို့သည် သင့်ဖုန်းနံပါတ်သို့ အတည်ပြုချက် SMS
                    ပို့ဆောင်ပါမည်။ ကျွန်ုပ်တို့သည် သုံးစွဲသူများ၏
                    အုပ်စုံကြောင်း သို့မဟုတ် အခြား အကြောင်းအရာများအကြောင်း
                    အသိပေးချက်ပြုလုပ်ခွင့်ရှိပါသည်။
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                ၃။ ငွေပေးချေမှုများ
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    ၃.၁။ ငွေပေးချေမှုများ အတည်ပြု ခြင်း
                  </h3>
                  <p className="text-muted-foreground">
                    ကျွန်ုပ်တို့သည် KBZ Pay ကဲ့သို့သော ယုံကြည်ရသည့် ငွေပေးချေမှု
                    သုံးစွဲပုံစံများကို ခွင့်ပြုထားသည်။ မှာယူမှုကို
                    အတည်ပြုရန်အတွက် ငွေပေးချေမှုကို အဆင့်မြှင့်တင်ရန် လိုအပ်သည်။
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    ၃.၂။ နံကွက်သုံးစွဲမှုများ
                  </h3>
                  <p className="text-muted-foreground">
                    ကျွန်ုပ်တို့သည် ငွေပေးချေမှုအီးမေးလ်များ၏ လုံခြုံမှုအတွက်
                    အလှည့်လှည့်သုံးစွဲမှုများကိုသုံးစွဲသည်။ သင်၏ ငွေပေးချေမှု
                    အချက်အလက်များ တစ်ခါမျှ ကျွန်ုပ်တို့စနစ်တွင်
                    သိမ်းဆည်းထားခြင်း မရှိသည်။
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    ၃.၃။ အကြွေးအငွေများနှင့် ပြန်လည်ငွေပေးချေမှု
                  </h3>
                  <p className="text-muted-foreground">
                    ပစ္စည်းကို မရယူခြင်း သို့မဟုတ် မှားယွင်းသော
                    မှာယူမှုများအတွက် ပြန်လည်ငွေပေးချေမှုများကို တင်ခံပါသည်။
                    ပြန်လည်ငွေပေးချေမှုကျန်းချေမှုများကို သင့်ဒ်ခြင်းအဖြင့်
                    ကျန်းချေမှုများ ရယူသည်။
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                ၄။ ပို့ဆောင်မှုများ
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    ၄.၁။ ပို့ဆောင်ရေး နေရာများ
                  </h3>
                  <p className="text-muted-foreground">
                    ကျွန်ုပ်တို့သည် မြန်မာနိုင်ငံ အဏ္ဏဋ္ဌမကြီးမြို့နှင့်
                    ပတ်လည်မြို့များသို့ ပို့ဆောင်မှုများ ပေးလုပ်ထားသည်။
                    ပို့ဆောင်မှု ဈေးနှုန်းများကို မှာယူမှုစာမျက်နှာတွင်
                    ပြသထားသည်။
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    ၄.၂။ ပို့ဆောင်မှု အချိန်များ
                  </h3>
                  <p className="text-muted-foreground">
                    ပို့ဆောင်မှု အချိန်များသည် သုံးစွဲသူတည်နေရာ၊
                    အများအပြားမှာယူမှုများနှင့် အခြားအခြေအနေများအပေါ် မူတည်သည်။
                    ကျွန်ုပ်တို့သည် လူလုံခြုံမှုအတွက် အလယ်တန်း သုံးစွဲမှုများကို
                    အခြေခံသည့် အကြေးခံဆီးဆめြာများ ပြုလုပ်သည်။
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    ၄.၃။ ပစ္စည်းများ ကျေးဇူးပြုခြင်း
                  </h3>
                  <p className="text-muted-foreground">
                    သင်သည် သင့်အပတ်ဆက်သွယ်ရန်အချက်အလက်ကို ပေးခြင်းအတွက်
                    တာဝန်ရှိသည်။ ပို့ဆောင်မှု စဉ်ကြားတွင် ကျွန်ုပ်တို့၏
                    တာဝန်မရှိ၏။
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                ၅။ ပြန်လည်ငွေပေးချေမှု နှင့် ပြန်လည်ပေးအပ်ခြင်းများ
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    ၅.၁။ ပြန်လည်ပေးအပ်ခြင်း အချိန်
                  </h3>
                  <p className="text-muted-foreground">
                    ပစ္စည်းများ လက်ခံထားချိန်မှ ၇ ရက်အတွင်း
                    ပြန်လည်ပေးအပ်ခြင်းများ ခွင့်ပြုထားသည်။
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    ၅.၂။ ပြန်လည်ပေးအပ်မှု အခြေအနေများ
                  </h3>
                  <p className="text-muted-foreground">
                    ပစ္စည်းများသည် မူလအခြေအနေတွင် ရှိရမည်။ သုံးစွဲထားသည့်
                    သို့မဟုတ် ထိခိုက်ခံထားသော ပစ္စည်းများအတွက်
                    ပြန်လည်ငွေပေးချေမှုများ ခွင့်ပြုထားခြင်း မရှိသည်။
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    ၅.၃။ ပြန်လည်ငွေပေးချေမှု လုပ်ဆောင်ခြင်း
                  </h3>
                  <p className="text-muted-foreground">
                    အကြွေးအငွေများကို အတည်ပြုပြီးနောက် ၅ မှ ၇ ရက်အတွင်း
                    ပြန်လည်ငွေပေးချေမှုများ လုပ်ဆောင်ပါမည်။
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                ၆။ ကုမ္ပဏီ တာဝန်ကင်းခွင့်များ
              </h2>
              <p className="text-muted-foreground mb-4">
                App သည် "ကဲ့သို့ရှိသည်" အခြေအနေတွင် အဆုံးမဲ့သုံးစွဲစေသည်။
                ကျွန်ုပ်တို့သည် App မှ ကျေးဇူးပြုခြင်း၊ အယုံအကြည်ခြင်း သို့မဟုတ်
                အခြားအကြေးခံဆီးဆမြာများအတွက် တာဝန်ကင်းခွင့်ရှိသည်။ App၏
                အသုံးပြုမှုမှ ကုန်ရှုံးဆုံးရှုံးမှုများအတွက် ကျွန်ုပ်တို့သည်
                တာဝန်မယူသည်။
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                ၇။ ဥပဒေ နှင့် အခြေခံ
              </h2>
              <p className="text-muted-foreground">
                ဤစည်းကမ်းချက်များသည် မြန်မာနိုင်ငံ၏ ဥပဒေများအောက်မှ
                အုပ်စုံလုံခြုံမှုများ ရယူသည်။ တစ်စုံတစ်ရာ ပဋိပက္ခများသည်
                မြန်မာနိုင်ငံ၏ တရားဥပဒေများအရ အဆုံးအဖြတ် လုပ်ဆောင်ပါမည်။
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                ၈။ စည်းကမ်း အပ်ဒေတ
              </h2>
              <p className="text-muted-foreground">
                ကျွန်ုပ်တို့သည် ဤစည်းကမ်းချက်များကို အခါအားလျော်စွာ
                အဆင်မြှင့်တင်နိုင်သည်။ အဆင်မြှင့်တင်မှုများ ကျွန်ုပ်တို့
                အီးမေးလ်သို့မဟုတ် App မှ အကြောင်းကြားချက်များအဖြင့် အသိပေးပါမည်။
                အဆင်မြှင့်တင်မှုများ အတည်ပြုပြီးနောက် App ကို အသုံးပြုခြင်းဖြင့်
                သင်သည် အဆင်မြှင့်တင်ထားသော စည်းကမ်းချက်များကို လက်ခံပါသည်။
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                ၉။ ကျွန်ုပ်တို့ ကိုဆက်သွယ်ခြင်း
              </h2>
              <p className="text-muted-foreground">
                ယင်းစည်းကမ်းချက်များ၊ App သို့မဟုတ် ကျွန်ုပ်တို့၏
                ဝန်ဆောင်မှုများနှင့် ပတ်သက်သည့် မည်သည့်အမေးအမြန်များအတွက်
                ကျွန်ုပ်တို့အီးမေးလ်သို့ ဆက်သွယ်ပါ။
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2025 Ko-Min D.I.Y Store Myanmar. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a
                href="/privacy-policy"
                className="hover:text-foreground transition-colors"
              >
                Privacy
              </a>
              {/* <a
                href="/terms-and-conditions"
                className="hover:text-foreground transition-colors"
              >
                Terms
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
