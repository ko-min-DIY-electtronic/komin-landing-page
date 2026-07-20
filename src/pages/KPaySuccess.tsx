import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function KPaySuccess() {
  const [searchParams] = useSearchParams();
  const linkRef = useRef<HTMLAnchorElement>(null);

  const getDeepLink = () => {
    const params = searchParams.toString();
    return `komin-diy-store://payment_result${params ? "?" + params : ""}`;
  };

  const handleRedirect = () => {
    const deepLink = getDeepLink();

    // Method 1: Programmatic click on a real link (trusted by many browsers)
    if (linkRef.current) {
      linkRef.current.click();
    }

    // Method 2: Direct location update as a backup
    setTimeout(() => {
      window.location.replace(deepLink);
    }, 100);
  };

  useEffect(() => {
    // Automatically redirect after a short delay
    const timer = setTimeout(() => {
      handleRedirect();
    }, 1500);

    return () => clearTimeout(timer);
  }, [searchParams]);

  const handleManualRedirect = () => {
    handleRedirect();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6 text-center">
      {/* Hidden redirection link for browser compatibility */}
      <a
        ref={linkRef}
        href={getDeepLink()}
        style={{ display: "none", position: "absolute", opacity: 0 }}
      >
        Redirecting...
      </a>

      <div className="relative w-full max-w-md">
        {/* Background glow */}
        <div className="absolute -inset-4 bg-emerald-400/20 blur-3xl rounded-full opacity-50 animate-pulse"></div>

        <div className="relative bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white/50 flex flex-col items-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-25"></div>
            <CheckCircle2 className="w-12 h-12 text-emerald-500 relative z-10" />
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
            Payment Successful!
          </h1>
          <p className="text-slate-500 mb-8 font-medium leading-relaxed">
            Thank you for your payment. We are redirecting you back to the
            KoMin-DIY app to complete your order.
          </p>

          <div className="flex flex-col w-full gap-4">
            <div className="flex items-center justify-center gap-3 py-3 px-6 bg-slate-50 rounded-2xl border border-slate-100 mb-2">
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></div>
              </div>
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-widest">
                Redirecting...
              </span>
            </div>

            <button
              onClick={handleManualRedirect}
              className="group flex items-center justify-center gap-2 w-full py-4 bg-slate-900 text-white rounded-2xl font-bold transition-all hover:bg-slate-800 hover:shadow-lg active:scale-95"
            >
              Back to App
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 max-w-xs">
        <p className="text-sm text-slate-400 font-medium leading-relaxed">
          If you are not redirected automatically, please click the button
          above.
        </p>
        <div className="mt-4 flex justify-center space-x-4 opacity-30 grayscale contrast-125">
          <img
            src="/images/kpay-logo.png"
            alt="KBZPay"
            className="h-4 object-contain"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
        </div>
      </div>
    </div>
  );
}
