import {useLanguage} from '../contexts'

export const useLanguageHandler = ()=>{
    const {languageDispatch} = useLanguage()
    const  langHindi = {
        "startup_reads":"स्टार्टअप रीड्स",
        "join_startup_reads":"स्टार्टअप रीड्स से जुड़िये",
        "join":"जुड़िये",
        "already_have_an_account":"पहले से ही खाता है?",
        "login":"लॉग इन करें",
        "enter_name":"यहां नाम दर्ज करें",
        "enter_email":"यहां ईमेल दर्ज करें",
        "enter_password":"यहां पासवर्ड डालें",
        "confirm_password":"पासवर्ड की पुष्टि कीजिये",
        "join_now":"अभी सम्मिलित हों",
        "enter_username_or_email":"अपना उपयोगकर्ता नाम या ईमेल दर्ज करें",
        "or_login_with":"या इनके साथ लॉगिन करें",
        "login_with_otp":"ओटीपी के साथ लॉगिन करें",
        "search":"पुस्तकों की खोज करें",
        "ascending":"आरोही",
        "descending":"अवरोही",
        "stock":"स्टॉक में",
        "delivery":"तेजी से वितरण",
        "clear":"इसे साफ करें",
        "sort":"भेद",
        "filter":"निस्पंदन",
        "add_to_cart":"कार्ट में जोड़ें",
        "go_to_cart":"कार्ट पर जाएं",
        "close":"बंद करे",
        "wishlist":"इच्छा-सूची",
        "remove":"इसे हटा दो",
        "shopping_cart":"शॉपिंग कार्ट",
        "cart":"कार्ट",
        "items":"आइटम",
        "quantity":"मात्रा",
        "price":"कीमत",
        "total":"कुल",
        "total_cost":"कुल लागत",
        "order_summary":"आदेश सारांश",
        "shipping":"शिपिंग",
        "checkout":"चेक आउट",
        "continue_shopping":"खरीदारी जारी रखें",
        "shipping_address":"शिपिंग पता",
        "select_address_from_the_list":"सूची से पता चुनें",
        "address_type":"पते का प्रकार",
        "name":"नाम",
        "address":"पता",
        "country":"देश",
        "pincode":"पिन कोड",
        "city":"शहर",
        "state":"राज्य",
        "continue_to_payment":"भुगतान जारी रखें",
        "payment":"भुगतान",
        "card_number":"कार्ड नंबर",
        "expiration_date":"समाप्ति तिथि",
        "security_code":"सुरक्षा कोड",
        "make_payment":"भुगतान करें",
        "invoice":"बीजक",
        "thank_you_for_your_order":"आपके ऑर्डर के लिए धन्यवाद।",
        "date":"11 मई, 2021",
        "subtotal":"उप-योग",
        "name_of_item":"मद का नाम",
        "shipping_and_handling":"शिपिंग और हैंडलिंग",
        "gst":"जीएसटी",
        "billing_information":"बिलिंग जानकारी"
    }
    const languageHandler=(e)=>{
        const lang = e.target.value;
        if(lang==="hi"){
            languageDispatch({type:"ADD_HINDI",payload:{lang:langHindi}})
        }else{
            languageDispatch({type:"DEFAULT"})
        }
       
    }

return {languageHandler}
    
}