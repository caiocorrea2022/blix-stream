import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import THEME from "../../config/theme";
import { FooterText } from "../../config/theme/globalStyles";

export function Cookie() {
    return (
        <CookieConsent
            buttonText="Ok, entendido!"
            cookieName="myAwesomeCookieName2"
            buttonStyle={{
                color: THEME.COLORS.TEXT_ABOUT,
                fontSize: THEME.FONTSIZE.EXTRASMALL,
                fontFamily: THEME.FONTFAMILY.REGULAR,
                borderRadius: "10px",
                backgroundColor: THEME.COLORS.PRIMARY_800
            }}
            style={{
                backgroundColor: 'rgba(128,128,128,0.9)'
            }}
            expires={150}
            onAccept={(acceptedByScrolling) => {
               acceptedByScrolling=true
               console.log(getCookieConsentValue());
            }}
        >
            <FooterText color={THEME.COLORS.BACKGROUND_ABOUT}>Utilizamos cookies para lhe oferecer uma experiência mais personalizada na nossa plataforma. Se você permanecer neste site, você concorda com nosso uso de cookies.</FooterText>
        </CookieConsent>
    )
}