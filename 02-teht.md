---
title: "Matematiikkaa kaikille: harjoitus 2"
---
::: title
- HY / Avoin yliopisto
- Matematiikan ja tilastotieteen laitos
- Matematiikkaa kaikille (kesä 2017)
- Harjoitus 2
:::

Ohessa taulukko kirjainten “numerovastaavuuksista”. Huomaa, ettei merkistössä ole ääkkösiä.

|A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z|
|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
|0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|



::: teht
# Tehtävä
Caesar-salaus.

* Salaa viesti `PERJANTAI AARRESAARELLA` menetelmällä Caesar-13.
* Mitä tapahtuu, jos toistat prosessin salatekstillesi?
* Pura viesti `ZHABT HPULU ZHSHP ZBBZ` kun menetelmä on ollut Caesar-7.
:::
::: ratk
# Ratkaisuehdotus

* `CREWN AGNVN NEERF NNERY YN`
* Viesti tulee puretuksi, koska $26 = 2\cdot 13$.
* `SATUMAINEN SALAISUUS`
:::



::: teht
# Tehtävä
Vigenèren salaus (käytä [Vigenèren neliötä](assets/pdf/vigenere.pdf))

* Salaa viesti `TAVATAAN AAMUNKOITTEESSA` avainsanalla `VIGENERE`.
* Millä "avainsanalla" salatekstiksi tulisi `ASSEE TTIOK NUMAA NAATA VAT`? Entä alkuperäinen selkoteksti?
* Millaisella avainsanalla Vigenèren menetelmä vastaisi jotain Caesarin salausta?
* Miten Vigenèren salaus puretaan, kun avainsana tunnetaan?
:::
::: ratk
# Ratkaisuehdotus
* `COIBE GERRVI SYAOF MOBKI FWR`
* puuttuu...
* Millä tahansa tahansa "vakiojonolla". Esim `nnn...` vastaisi salausta Caesar-13
* Vigeneren salaus puretaan suorittamalla prosessi toiseen suuntaan,
  eli lukemalla taulukko päinvastaisessa järjestyksessä.
:::



::: teht
# Tehtävä
Beaufortin salaus (käytä [Vigenèren neliötä](assets/pdf/vigenere.pdf))

* Salaa viesti `TAVATAAN AAMUNKOITTEESSA` avainsanalla `BEAUFORT`.
* Toista prosessi salatekstillesi. Miksi näin käy?
* Pura viesti `OXAVZ FMRPO XABOS RXJOY O`, kun tiedät avainsanan olevan `GRONSFELD`.

:::
::: ratk
# Ratkaisuehdotus
puuttuu...
:::



::: teht
# Tehtävä
Kerta-avain (one-time pad)

* Salaa viesti `NOIN KUULIN SANELTAVAKSI` avaimella `JMDOY QVLNS UQIUA ODLWS ON`.
* Pura viesti `VYBBZ TLKEP DQOYW MMCOG`, kun tiedät avaimen olevan `DYOBG BRQMX DDGGC BMHON`.
* Keksi kaksi samanpituista viestiä (vaikkapa `KALEVALAN` ja `LUONNOTAR`) ja
  salaa keksimäsi selkotekstit (vastoin periaatetta)
  samalla, itse valitsemallasi kerta-avaimella.
* Vähennä salatekstit toistaan merkki kerrallaan käyttäen yltä löytyvää taulukkoa.
  Esimerkiksi kirjainten D ja J erotus olisi $4 - 9 = -5 \equiv 21\text{ mod }26$, eli
  vastaisi kirjainta V.
* Vähennä vielä selkotekstisi toisistaan. Mitä huomaat?
  Miksi kerta-avainta ei tule käyttää kahdesti?
:::
::: ratk
# Ratkaisuehdotus
* WALB IKPWVF MQVYL HDGWC GV
* SANAT SUUSSANI SULAVAT
* Jos avain on JMDOYQVLNS, niin KALEVALAN -> TMOSTQGLA ja LUONNOTAR -> UGRBLEOLE.
* `TMOSTQGLA - UGRBLEOLE = ZGXRIMSAW`
* `KALEVALAN - LUONNOTAR = ZGXRIMSAW`

Huomataan, että selkotekstien erotus on
sama kuin salatekstien erotus. Toisin sanoen, vähentämällä salatekstit toisistaan,
kerta-avaimen vaikutus häviää. Tällöin salaus on menettänyt tehonsa.
:::



::: teht
# Tehtävä
Transpositiosalaus (reitti)
* Salaa viesti `THE QUEEN OF HEARTS` käyttäen 5-sarakkeista taulukkoa
  ja reittiä "oikeasta yläkulmasta vastapäivään".
* Pura viesti `IWFFO TIDSX XXAEH THRHE` käyttäen edellisen kohdan salaustapaa.
:::
::: ratk
# Ratkaisuehdotus
* `UQEHT EHSX XXXTF ONEEA R`
* `OFF WITH THEIR HEADS XX`

Tässä 'XX' ovat täytemerkkejä.
:::



::: teht
# Tehtävä
Transpositiosalaus (sarakkeittain)
* Salaa viesti `BEGIN AT THE BEGINNING` käyttäen vuorotellen avainsanoja `BCRYPT` ja `TWOFISH`.
* Pura viesti `NTTET PNETH ADOES H` kun tiedät avainsanan olleen `ELGAMAL`.
:::
::: ratk
# Ratkaisuehdotus
* `BANET BINHI GENEN ITGG` ja `BBIAI ETEIE  NNGTGN NHG`
* `THEN STOP AN THE END`
:::



::: teht
# Tehtävä
Tutki (pikku-)Enigman mallia ja toimintaa alta löytyvien materiaalien avulla.
Kummankin version käyttöohjeet löytyvät jälkimmäisestä tiedostosta.

* [Linkki: Enigma (pdf)](http://blogs.helsinki.fi/summamutikka/files/2014/06/Enigma.pdf)
* [Linkki: pikku-Enigma (pdf)](http://blogs.helsinki.fi/mathversum/files/2016/09/Enigma_osat.pdf)
:::



::: teht
# Tehtävä
Enigman etupaneelissa on pistoke kullekin 26 kirjaimelle. Kirjaimista valitaan

* 1 pari,
* 2 paria,
* 10 paria,

jotka kytketään toisiinsa kaapeleilla. Kuinka monella tavalla kytkentä voidaan tehdä?
Laskuja ei tarvitse suorittaa loppuun.
:::
::: ratk
# Ratkaisuehdotus
* $\binom{26}{20}$
* $\binom{26}{2}\binom{24}{2}$
* $\binom{26}{2}\binom{24}{2}\binom{22}{2}\binom{20}{2}\binom{18}{2}$
:::



::: teht
# Tehtävä

Hajamielinen henkilö on unohtanut pankkikorttinsa tunnusluvun. Tilannetta ennakoiden hän on
jo aiemmin hajauttanut tunnuslukunsa käyttäen (yksinkertaistettua) Shamirin menetelmää.
Pienen etsinnän jälkeen hän on löytänyt piilottamistaan avaimista kaksi, ja uskoo niiden
riittävän tunnusluvun selvittämiseksi:
$$
f(112) = 3929, f(211) = 4622.
$$
Selvitä kadonnut tunnusluku.
:::
::: ratk
# Ratkaisuehdotus
Jos kaksi pistettä riittää, kyseessä on ensimmäisen asteen polynomi $y = ax + b$.
Avainten avulla tiedetään, että
$$
  3929 = a\cdot112 + b \quad\text{ja}\quad 4622 = a\cdot 211 + b.
$$
Ottamalla yhtälöiden erotus puolittain, saadaan yhtälö $-693 = a\cdot(112-211) = -99a$,
jonka ratkaisu on $a = 7$. Sijoittamalla tämä vaikkapa ensimmäiseen yhtälöön
saadaan
$$
  3929 = 7\cdot112 + b = 784 + b,
$$
joten $b = 3145$. Toisaalta $b$ on polynomin kuvaajan ja $y$-akselin leikkauspiste,
eli tunnusluku on löytynyt: $3145$.
:::




::: teht
# Tehtävä

Jatkoa edelliseen tehtävään: samainen henkilö on saanut erääseen palveluun tunnusluvun
$65537$ ja haluaa hajauttaa sen kolmelle avaimelle. Miten hajauttamisen voisi tehdä?
Shamirin menetelmän sijaan voit halutessasi mukailla [Blakleyn menetelmää](https://en.wikipedia.org/wiki/Secret_sharing#Blakley.27s_scheme).
:::
::: ratk
# Ratkaisuehdotus
Shamirin menetelmää mukaillen riittää kehittää toisen asteen polynomi, jonka vakiotermi on tunnusluku $65537$.

:::
