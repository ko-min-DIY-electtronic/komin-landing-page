import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <Link
                        to="/"
                        className="flex items-center gap-2 hover:opacity-75 transition-opacity"
                    >
                        <img
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
                        to="/"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* Privacy Policy Content */}
            <section className="px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold tracking-tight mb-2">
                            သီးသန့်လုံခြုံမှုမူဝါဒ
                        </h1>
                        <p className="text-lg text-muted-foreground">Privacy Policy</p>
                    </div>

                    <div className="prose prose-invert max-w-none space-y-8">
                        <div>
                            <p className="text-muted-foreground mb-4">
                                အကျိုးသက်ရောက်သည့်နေ့စွဲ: နိုဝင်ဘာလ ၁၃ ရက်၊ ၂၀၂၅
                            </p>
                            <p className="text-muted-foreground">
                                ဤသီးသန့်လုံခြုံမှုမူဝါဒသည် သုံးစွဲသူများမှ "Ko-MIn D.I.Y Store"
                                မိုဘိုင်းအပလီကေးရှင်း (ယခုနောက်ပိုင်းတွင် "App"
                                ဟုညွှန်းဆိုပါမည်) ကို အသုံးပြုသောအခါတွင် စုဆောင်း၊ အသုံးပြု၊
                                ထိန်းသိမ်းသည့် အချက်အလက်များအား မည်သို့ စီမံခန့်ခွဲကြောင်း
                                ရှင်းပြထားပါသည်။ ဤ App ကို အသုံးပြုခြင်းဖြင့် သင်သည် ဤမူဝါဒပါ
                                စည်းကမ်းချက်များကို သဘောတူလက်ခံပါသည်။
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-4">
                                ၁။ ကျွန်ုပ်တို့ စုဆောင်းသော အချက်အလက်များ
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        ၁.၁။ ကိုယ်ရေးကိုယ်တာ သတ်မှတ်နိုင်သော အချက်အလက်များ (PII)
                                    </h3>
                                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                                        <li>
                                            <strong>အမည်နှင့် ဆက်သွယ်ရန်အချက်အလက်များ:</strong>{" "}
                                            အမည်အပြည့်အစုံ၊ အီးမေးလ်လိပ်စာ၊ တယ်လီဖုန်းနံပါတ်၊
                                            ပို့ဆောင်ရေးလိပ်စာ။
                                        </li>
                                        <li>
                                            <strong>အကောင့်အချက်အလက်များ:</strong> အသုံးပြုသူအမည်၊
                                            လျှို့ဝှက်နံပါတ်များ (ကျွန်ုပ်တို့စနစ်တွင်
                                            ကုတ်ဝှက်သိမ်းဆည်းထားသည်)။
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        ၁.၂။ ငွေပေးချေမှုနှင့် အရောင်းအဝယ်အချက်အလက်များ
                                    </h3>
                                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                                        <li>
                                            <strong>ငွေပေးချေမှုအချက်အလက်များ:</strong>{" "}
                                            ငွေပေးချေမှုပုံစံ (ဥပမာ- KBZ Pay)၊ ငွေပေးချေမှု
                                            ID/Transaction ID နှင့် ငွေပမာဏ။ (မှတ်ချက်-
                                            ကျွန်ုပ်တို့သည် ဘဏ်ကတ်အမှတ်အပြည့်အစုံကဲ့သို့သော
                                            လျှို့ဝှက်ငွေပေးချေမှု အချက်အလက်များကို App တွင်
                                            တိုက်ရိုက်သိမ်းဆည်းထားခြင်းမရှိပါ။ ငွေပေးချေမှု
                                            လုပ်ငန်းစဉ်အားလုံးကို KBZ Pay ကဲ့သို့သော ပြင်ပ
                                            ငွေပေးချေမှု ဝန်ဆောင်မှုပေးသူများမှ စီမံခန့်ခွဲပါသည်။)
                                        </li>
                                        <li>
                                            <strong>မှာယူမှုမှတ်တမ်း:</strong> သင်ဝယ်ယူခဲ့သည့်
                                            ပစ္စည်းများ၊ မှာယူမှု အခြေအနေနှင့် ရက်စွဲများ။
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-2">
                                        ၁.၃။ အသုံးပြုမှုနှင့် စက်ပစ္စည်းအချက်အလက်များ
                                    </h3>
                                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                                        <li>
                                            <strong>စက်ပစ္စည်းအချက်အလက်:</strong> သင်အသုံးပြုသည့်
                                            ဖုန်းအမျိုးအစား၊ Operating System ဗားရှင်း၊ ထူးခြားသည့်
                                            Device Identifier များ။
                                        </li>
                                        <li>
                                            <strong>အသုံးပြုမှုမှတ်တမ်း:</strong> သင် App ကို
                                            မည်သို့အသုံးပြုသည်၊ မည်သည့်စာမျက်နှာများအား ကြည့်ရှုသည်၊
                                            အသုံးပြုသည့်အချိန်နှင့် ရက်စွဲများ။
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-4">
                                ၂။ အချက်အလက်များကို အသုံးပြုပုံ
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                ကျွန်ုပ်တို့သည် စုဆောင်းရရှိသော အချက်အလက်များကို အောက်ပါ
                                ရည်ရွယ်ချက်များအတွက် အသုံးပြုပါသည်။
                            </p>
                            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                                <li>
                                    <strong>အရောင်းအဝယ်ဆောင်ရွက်ရန်:</strong> သင်၏ မှာယူမှုများကို
                                    လက်ခံရန်၊ စီမံဆောင်ရွက်ရန်နှင့် ပစ္စည်းပို့ဆောင်ရန်။
                                </li>
                                <li>
                                    <strong>အသုံးပြုသူအကောင့် စီမံခန့်ခွဲရန်:</strong>{" "}
                                    သင့်အကောင့်ကို ထိန်းသိမ်းရန်နှင့် ဝန်ဆောင်မှုပေးရန်။
                                </li>
                                <li>
                                    <strong>ဆက်သွယ်ပြောဆိုရန်:</strong> မှာယူမှု အခြေအနေများ၊
                                    ဝန်ဆောင်မှုဆိုင်ရာ သတ္တိများ၊ နှင့် ပြဿနာများအတွက်
                                    အကူအညီပေးရန်။
                                </li>
                                <li>
                                    <strong>ဆက်စပ်သောအကြောင်းအရာ လူတူတူအတွက် ပေးပို့ရန်:</strong>{" "}
                                    သင်၏ စိတ်ဝင်စားမှုအပေါ် အခြေခံသည့် အကြောင်းအရာ၊
                                    ကမ်းလှမ်းချက်နှင့် သတ်မှတ်ချက်များ။
                                </li>
                                <li>
                                    <strong>
                                        ကမ်းလှမ်းချက်များ နှင့် မြေးဝါးများ မှာ လွှမ်းမိုးရန်:
                                    </strong>{" "}
                                    သင့်ကို အကြောင်းကြားချက်များ၊ အသစ်သောတစ်ခြား လုပ်ဆောင်မှုများ၊
                                    သို့မဟုတ် အဆင်ဆင်းသုံးစွဲခွင့်ပြုကြည့်။
                                </li>
                                <li>
                                    <strong>အက်ပ်လီကေးရှင်းကို ကောင်းမွန်စေရန်:</strong>{" "}
                                    အသုံးပြုသူများ၏ အမူအရာများကို နားလည်၍ ကျွန်ုပ်တို့၏
                                    ဝန်ဆောင်မှုများကို အဆင့်မြှင့်တင်ရန်။
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-4">
                                ၃။ အချက်အလက်များ ဝေမျှခြင်း
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                ကျွန်ုပ်တို့သည် သင့်ကိုယ်ရေးကိုယ်တာ အချက်အလက်များကို
                                အလျှင်းမဖွင့်ဝမည်ဖြစ်သည်။ သို့သော် အောက်ပါ ကိစ္စများတွင်
                                ကျွန်ုပ်တို့သည် အချက်အလက်များကို မျှဝေနိုင်သည်။
                            </p>
                            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                                <li>
                                    <strong>ပြင်ပ ဝန်ဆောင်မှုပေးသူများ:</strong> အကောင့်ကျ
                                    ယုံကြည်ရသည့် ပြင်ပ ဝန်ဆောင်မှုပေးသူများ (ဥပမာ- ပို့ဆောင်ရန်၊
                                    ငွေပေးချေမှု) သည် သင်၏ အချက်အလက်များကို ကျွန်ုပ်တို့ အစ်ခွင့်
                                    တစ်ခွင့်သုံးသုံးနိုင်သည်။
                                </li>
                                <li>
                                    <strong>ဥပဒေစိုးမိုးမှုအတွက်:</strong> ကျွန်ုပ်တို့သည်
                                    ဥပဒေအခြေခံ အသုံးအခိုင်းအခြင်းများကို ကျေးဇူးပြု၍
                                    လက်ခံရွက်ကောင်း သို့မဟုတ် အခွင့်အရေးကာကွယ်ရန် အချက်အလက်များကို
                                    ဝေမျှရန် လိုအပ်နိုင်သည်။
                                </li>
                                <li>
                                    <strong>ကုမ္ပဏီ ငွေကြေးဆိုင်ရာ အရှုပ်အထွေထွေ:</strong>{" "}
                                    အကယ်အဖြစ်ခြင်း ကုမ္ပဏီ ယူဆောင်သည့်အခါ သို့မဟုတ် ကုမ္ပဏီ
                                    အခြားတစ်ခု မှ ယူဆောင်သည့်အခါ သင့်ကိုယ်ရေးကိုယ်တာ
                                    အချက်အလက်များကို အရှုပ်အထွေထွေအားလုံးသည် ကျွန်ုပ်တို့၏ လဒ္ဒါ
                                    ကုမ္ပဏီများ၏ အစီအစဉ်အဖြစ် သွားရောက်နိုင်သည်။
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-4">
                                ၄။ ကုတ်ဝှက်အေအိတ်စာ သုံးစွဲခြင်း
                            </h2>
                            <p className="text-muted-foreground">
                                ကျွန်ုပ်တို့သည် သင့်အချက်အလက်များကို ကုတ်ဝှက် လုပ်ဆောင်ပြီးနောက်
                                လုံခြုံရန် အမြင့်ဆုံး လုံခြုံရန် အဆင့်များကို အသုံးပြုသည်။
                                သို့သော် အင်္ဂတေ ထုံးမဟုတ်သော လုံခြုံရန် ပုံစံများ ကျွန်ုပ်တို့
                                အဆိုအမြွေမည်ခွင့်ပြုခြင်း မရှိသည်။
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-4">
                                ၅။ သင့်ခွင့်အခွင့်များ
                            </h2>
                            <p className="text-muted-foreground mb-4">
                                မြန်မာ ကျွန်ုပ်တို့ အလုံးစုံ အချက်အလက်များအတွက်
                            </p>
                            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                                <li>သင့်အချက်အလက်များကို အသုံးပြုခြင်းမှ ငြင်းပယ်ခွင့်</li>
                                <li>
                                    သင့်အချက်အလက်များကို ဖျက်ပစ်ခွင့် (သို့သော် ဥပဒေ လိုအပ်မှုအရ
                                    သိုမ်းဆည်းရန် လိုအပ်သည့် အချက်အလက်များ မှလွဲ))
                                </li>
                                <li>
                                    သင့်အချက်အလက်များကို အသုံးပြုလုပ်ဆောင်မှု မှ အသုံးပြုသူများ
                                    ရယူခွင့်
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-4">
                                ၆။ ဤမူဝါဒ အပ်ဒေတ
                            </h2>
                            <p className="text-muted-foreground">
                                ကျွန်ုပ်တို့သည် ဤသီးသန့်လုံခြုံမှုမူဝါဒကို အခါအားလျာ
                                အဆင်မြှင့်တင်နိုင်သည်။ မူလ အဆင်မြှင့်တင်မှုများ နွန်းခဲ့မည့် အခါ
                                ကျွန်ုပ်တို့သည် App မှ သတ္တိများ အပ်ဒေတ်ပြုလုပ်ပါမည်။
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold tracking-tight mb-4">
                                ၇။ ကျွန်ုပ်တို့ ကိုဆက်သွယ်ခြင်း
                            </h2>
                            <p className="text-muted-foreground">
                                သီးသန့်လုံခြုံမှုအတွက် ခွင့်အယူခွင့် ရှိပါက ကျွန်ုပ်တို့
                                အီးမေးလ်မှ ကျွန်ုပ်တို့ကို ဆက်သွယ်ပါ။
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
                            <Link
                                to="/terms-and-conditions"
                                className="hover:text-foreground transition-colors"
                            >
                                Terms
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
