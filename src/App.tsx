import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import KPayRedirect from "./pages/KPayRedirect";
import KPaySuccess from "./pages/KPaySuccess";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/kpay-redirect" element={<KPayRedirect />} />
                <Route path="/kpay-success" element={<KPaySuccess />} />
                <Route path="/payment_result" element={<KPaySuccess />} />
            </Routes>
        </Router>
    );
}

export default App;
