---
title: "Matematiikkaa kaikille: harjoitus 1"
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
* Millä salauksilla edellisen kohdan tilanne toistuu, jos käytössä onkin 27 tai kaikki 29 aakkosta?
* Pura viesti `ZHABT HPULU ZHSHP ZBBZ` kun menetelmä on ollut Caesar-7.
:::


::: teht
# Tehtävä
Vigenèren salaus (käytä [Vigenèren neliötä](assets/pdf/vigenere.pdf))

* Salaa viesti `TAVATAAN AAMUNKOITTEESSA` avainsanalla `VIGENERE`.
* Millä avainsanalla salatekstiksi tulisi `ASSEE TTIOK NUMAA NAATA VAT`? Entä alkuperäinen selkoteksti?
* Millaisella avainsanalla Vigenèren menetelmä vastaisi jotain Caesarin salausta?
* Miten Vigenèren salaus puretaan, kun avainsana tunnetaan?
:::

::: teht
# Tehtävä
Beaufortin salaus (käytä [Vigenèren neliötä](assets/pdf/vigenere.pdf))

* Salaa viesti `TAVATAAN AAMUNKOITTEESSA` avainsanalla `BEAUFORT`.
* Toista prosessi salatekstillesi. Miksi näin käy?
* Pura viesti `OXAVZ FMRPO XABOS RXJOY O`, kun tiedät avainsanan olevan `GRONSFELD`.
:::

::: teht
# Tehtävä
Kerta-avain (one-time pad)

* Salaa viesti `NOIN KUULIN SANELTAVAKSI` avaimella `JMDOY QVLNS UQIUA ODLWS ON`.
* Pura viesti `VYBBZ TLKEP DQOYW MMCOG`, kun tiedät avaimen olevan `DYOBG BRQMX DDGGC BMHON`.
* Keksi kaksi samanpituista viestiä (vaikkapa `KALEVALAN` ja `LUONNOTAR`).
  Muunna jälkimmäinen selkoteksteistäsi Atbash-salauksella.
  Käytä tulosta Vigenèren avaimena ja salaa ensimmäinen selkotekstisi.
* Salaa edellisessä kohdassa keksimäsi selkotekstit (vastoin periaatetta)
  samalla, itse valitsemallasi kerta-avaimella. "Vähennä" salatekstit toisistaan.
  Vertaa tulosta edellisen kohdan lopputulokseen.
:::

::: teht
# Tehtävä
Transpositiosalaus (reitti)
* Salaa viesti `THE QUEEN OF HEARTS` käyttäen 5-sarakkeista taulukkoa
  ja reittiä "oikeasta yläkulmasta vastapäivään".
* Pura viesti `IWFFO TIDSX XXAEH THRHE` käyttäen edellisen kohdan salaustapaa.
:::

::: teht
# Tehtävä
Transpositiosalaus (sarakkeittain)
* Salaa viesti `BEGIN AT THE BEGINNING` käyttäen vuorotellen avainsanoja `BCRYPT` ja `TWOFISH`.
* Pura viesti `ETSHN TTPNO EHADT E` kun tiedät avainsanan olleen `ELGAMAL`.
* Mieti, miten kaksinkertainen salaus vaikuttaa salauksen vahvuuteen.
:::

::: teht
# Tehtävä
Tutki (pikku-)Enigman mallia ja toimintaa alta löytyvien materiaalien avulla.
Kummankin version käyttöohjeet löytyvät jälkimmäisestä tiedostosta.

* [Linkki: pikku-Enigma (pdf)](http://blogs.helsinki.fi/mathversum/files/2016/09/Enigma_osat.pdf)
* [Linkki: Enigma (pdf)](http://blogs.helsinki.fi/summamutikka/files/2014/06/Enigma.pdf)
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

::: teht
# Tehtävä

Jatkoa edelliseen tehtävään: samainen henkilö on saanut erääseen palveluun tunnusluvun
$65517$ ja haluaa hajauttaa sen kolmelle avaimelle. Miten hajauttamisen voisi tehdä?
Shamirin menetelmän sijaan voit halutessasi mukailla Blakleyn menetelmää.
:::
