import { Bottom, Adres, Kontakt, Fb } from "./styled";

const Footer = () => (
    <Bottom>
        <Fb><strong>Odwiedź nas na fb!</strong></Fb>
        <Adres>
            ADRES<br></br>
            KURIER S.C JANKOWSCY<br></br>
            ul. Dworcowa 6<br></br>
            19-100 Mońki<br></br>
            NIP: 546-12-60-799<br></br>
        </Adres>
        <Kontakt>
            KONTAKT<br></br>
            biuro@kurierjankowski.pl<br></br>
            transport@kurierjankowski.pl<br></br>
            Telefon: 85 716 21 91<br></br> 
            kom. 515 073 556<br></br>
            kom. 506 110 936<br></br>
        </Kontakt>

    </Bottom>
)

export default Footer;