"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

function KPayRedirectContent() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const prepay_id = searchParams.get("prepay_id");
        const merch_order_id = searchParams.get("merch_order_id");
        const appid = searchParams.get("appid");
        const sign = searchParams.get("sign");

        if (prepay_id && sign) {
            const kpayPwaUrl = `https://static.kbzpay.com/pgw/pwa/#/?prepay_id=${prepay_id}&merch_order_id=${merch_order_id}&appid=${appid}&sign=${sign}`;

            // We use a small timeout to let the user see the "connecting" message
            // and to ensure the component is fully mounted.
            const timer = setTimeout(() => {
                window.location.href = kpayPwaUrl;
            }, 1500);

            return () => clearTimeout(timer);
        }
    }, [searchParams]);

    const prepay_id = searchParams.get("prepay_id");
    const sign = searchParams.get("sign");

    if (!prepay_id || !sign) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
                <div className="bg-red-50 text-red-600 p-6 rounded-2xl border border-red-100 shadow-xl max-w-md">
                    <h1 className="text-xl font-bold mb-2">Error: Missing Payment Parameters</h1>
                    <p className="text-sm opacity-80">
                        Payment information is incomplete. Please try again from the app.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center">
            <div className="relative">
                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-10 animate-pulse rounded-full"></div>
                <div className="relative bg-white/80 backdrop-blur-sm p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/20 flex flex-col items-center max-w-sm mx-auto">
                    <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200 animate-bounce">
                        <img src="/images/kpay-logo.png" alt="KBZPay" className="w-12 h-12 object-contain brightness-0 invert"
                            onError={(e) => {
                                // Fallback to Icon if image doesn't exist
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement?.classList.add('flex-col');
                                const icon = document.createElement('div');
                                icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wallet"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/></svg>';
                                e.currentTarget.parentElement?.appendChild(icon.firstChild as Node);
                            }}
                        />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                        KBZPay သို့ ချိတ်ဆက်နေပါသည်
                    </h2>
                    <p className="text-gray-500 mb-8 font-medium">
                        ခဏစောင့်ပါ...
                    </p>

                    <div className="flex items-center gap-2 text-blue-600 font-semibold bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="text-xs uppercase tracking-widest">Redirecting</span>
                    </div>
                </div>
            </div>

            <p className="mt-12 text-sm text-gray-400 font-medium max-w-xs leading-relaxed">
                If you are not redirected automatically within 5 seconds, please check your internet connection.
            </p>
        </div>
    );
}

export default function KPayRedirectPage() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
                <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
            </div>
        }>
            <KPayRedirectContent />
        </Suspense>
    );
}
