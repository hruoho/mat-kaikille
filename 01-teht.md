---
title: "Matematiikkaa kaikille: harjoitus 1"
---
::: title
- HY / Avoin yliopisto
- Matematiikan ja tilastotieteen laitos
- Matematiikkaa kaikille (kesä 2017)
- Harjoitus 1
:::

::: teht
# Tehtävä
* Valitse mikä tahansa kolminumeroinen luku.
* Muodosta kuusinumeroinen luku toistamalla valitsemasi luvun numerot.
* Jaa kuusinumeroinen lukusi 13:lla. Meneekö jako tasan?
* Jaa tulos edelleen 11:lla. Meneekö jako tasan?
* Jaa tulos edelleen 7:lla. Meneekö jako tasan?
* Vertaa tulosta alkuperäiseen kolminumeroiseen lukuun. Mitä huomaat?
* Osaatko perustella havaintosi pätevän yleisesti?
:::


::: teht
# Tehtävä
Fibonaccin lukujono määritellään asettamalla $a_0=1$, $a_1=1$ ja $a_{n+2} = a_{n} + a_{n+1}$. Jono alkaa $1, 1, 2, 3, 5, 8, 13, \ldots$.

Lukujonon sanotaan joskus olevan *fibonaccimainen*, jos sen jäsenet muodostetaan kahden edeltävän jäsenen summana, kuten alkuperäisessä Fibonaccin lukujonossa, mutta mielivaltaisilla aloitusluvuilla.

* Valitse kaksi (pientä) luonnollista lukua $a_1$ ja $a_2$ fibonaccimaisen jonon ensimmäisiksi jäseniksi.
* Selvitä jonosi 10 ensimmäistä jäsentä yksi kerrallaan. Esimerkiksi kolmas jäsen on $a_3 = a_2 + a_1$.
* Laske 10 ensimmäisen jäsenen summa ja jaa se jonosi 7. jäsenellä.
* Vertaa tulosta toisten ryhmäläisten tuloksiin. Mitä huomaat?
* Osaatko perustella havaintosi pätevän yleisesti? Voisiko tulosta yleistää?
:::

::: teht
# Tehtävä
Collatzin jono muodostetaan aloittamalla mielivaltaisesta luonnollisesta luvusta ja käyttämällä toistuvasti kaavaa
$$
  a_{n+1} =
  \begin{cases}
    a_n / 2, \text{ kun } a_n \text{ on parillinen }\\
    3a_n + 1, \text{ kun } a_n \text{ on pariton}
  \end{cases}
$$

Collatzin konjektuuri sanoo, että prosessi johtaa lukuun 1 äärellisellä määrällä askelia riippumatta aloitusluvusta. Väitettä ei ole onnistuttu todistamaan, mutta se on tarkistettu valtavan suurelle joukolle lukuja. Joidenkin mielestä näyttää siltä, että todistus on nykymatematiikan ulottumattomissa.
[https://en.wikipedia.org/wiki/3x_%2B_1_problem](https://en.wikipedia.org/wiki/3x_%2B_1_problem)

Tee toinen tai molemmat seuraavista tehtävistä (järjestyksellä ei väliä):

* Valitse kolme lukua väliltä 10 - 100 ja muodosta Collatzin jono. Kuinka monta askelta tarvitset päästäksesi lukuun 1?
* Kirjoita ohjelma, joka tulostaa Collatzin jonon annetulle luvulle väliltä 1 - 100 ja kertoo tarvittavien askelten lukumäärän. Voit käyttää valitsemaasi ohjelmointikieltä, myös pseudokoodia.
:::

::: note
Jokainen luonnollinen luku voidaan jakaa yksikäsitteisellä tavalla alkulukujen tuloksi eli *alkutekijöihin*.

Esimerkiksi luvun $60$ esitys alkutekijöidensä tulona on $60 = 2^2\cdot3\cdot5$ ja luvun $28$ vastaavasti $28=2^2\cdot7$.

Ottamalla luvun alkutekijöiden kaikki mahdolliset yhdistelmät, löydetään kaikki luvun *tekijät* eli *jakajat*. Esimerkiksi luvun $60$ jakajat ovat
$$
1, 2, 3, 5, 4, 6, 10, 15, 12, 20, 30, 60
$$
jotka saadaan alkutekijöiden $2,2,3,5$ avulla esimerkiksi seuraavasti:
$$
1, 2, 3, 5, 2\cdot2, 2\cdot3, 2\cdot5, 3\cdot 5, 2\cdot2\cdot3, 2\cdot2\cdot5, 2\cdot3\cdot5, 2\cdot2\cdot3\cdot5.
$$
Tilanteesta riippuen luku $1$ saatetaan jättää jakajista pois. Muut jakajat kuin luku itse ovat sen *aitoja jakajia*.
:::

::: teht
# Tehtävä
Jaa seuraavat luvut a) alkutekijöihin b) tekijöihin:

$$
4, 6, 12, 18, 28, 30, 40, 70
$$

Voit laskea päässäsi tai käyttää apuvälineitä (välivaiheita ei tarvitse kirjoittaa näkyviin).
:::

::: teht
# Tehtävä
Luonnollisia lukuja voidaan ryhmitellä monella tavalla niiden ominaisuuksien mukaan.
Esimerkiksi sanotaan, että luku on

1. *täydellinen*, jos se on kaikkien tekijöidensä summa.
2. *puolitäydellinen*, jos se on joidenkin tekijöidensä summa.
3. *outo*, jos se on pienempi kuin kaikkien tekijöidensä summa, muttei puolitäydellinen.

Tässä lukua ei lasketa itsensä tekijäksi, mutta $1$ lasketaan.

Tutki edellisen tehtävän avulla, ovatko seuraavat luvut täydellisiä, puolitäydellisiä tai outoja:
$$
4, 6, 12, 18, 28, 30, 40, 70
$$
:::

::: teht
# Tehtävä
Luvut $m$ ja $n$ ovat suhteellisia alkulukuja, jos niiden suurin yhteinen tekijä on 1. Esimerkiksi luvut $6$ ja $25$ ovat suhteellisia alkulukuja, mutta $6$ ja $24$ eivät ole.

*Eulerin funktio* $\varphi\colon\mathbb{N}\to\mathbb{N}$ määritellään siten, että $\varphi(n)$ on sellaisten luvun $n$ suhteellisten alkulukujen määrä, jotka ovat pienempiä kuin $n$. Esimerkiksi $\varphi(6)$ = 2 ja $\varphi(8) = 4$.

* Määritä $\varphi(12)$, $\varphi(30)$ ja $\varphi(70)$ esimerkiksi etsimällä lukujen alkutekijät ja käyttämällä Erastotheneen seulaa.
* Mitä voit sanoa luvusta $\varphi(n)$, kun $n$ on alkuluku?
* Jos $m$ ja $n$ ovat suhteellisia alkulukuja, niin $\varphi(mn) = \varphi(m)\varphi(n)$. Määritä tämän tiedon avulla luvut $\varphi(77)$ ja $\varphi(99)$.
* Jos $p$ on alkuluku, niin $\varphi(p^k) = p^k\left(1-\frac{1}{p}\right)$. Määritä tämän tiedon avulla luvut $\varphi(128)$ ja $\varphi(625)$.
:::

::: teht
# Tehtävä
Gauss osoitti, että jokainen luonnollinen luku $n$ voidaan esittää tekijöidensä $d$ avulla summana Eulerin funktion arvoista $\varphi(d)$.
Lyhyesti sanottuna siis kaikilla $n\in\mathbb{N}$ pätee
$$
  \sum_{d\mid n}\varphi(d) = n.
$$
Tarkista Gaussin väite lukujen $18$, $28$ ja $70$ osalta. Voit käyttää apuna alta löytyvää taulukkoa.

| +   | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 0   |     | 1   | 1   | 2   | 2   | 4   | 2   | 6   | 4   | 6   |
| 10  | 4   | 10  | 4   | 12  | 6   | 8   | 8   | 16  | 6   | 18  |
| 20  | 8   | 12  | 10  | 22  | 8   | 20  | 12  | 18  | 12  | 28  |
| 30  | 8   | 30  | 16  | 20  | 16  | 24  | 12  | 36  | 18  | 24  |
| 40  | 16  | 40  | 12  | 42  | 20  | 24  | 22  | 46  | 16  | 42  |
| 50  | 20  | 32  | 24  | 52  | 18  | 40  | 24  | 36  | 28  | 58  |
| 60  | 16  | 60  | 30  | 36  | 32  | 48  | 20  | 66  | 32  | 44  |
| 70  | 24  | 70  | 24  | 72  | 36  | 40  | 36  | 60  | 24  | 78  |
| 80  | 32  | 54  | 40  | 82  | 24  | 64  | 42  | 56  | 40  | 88  |
| 90  | 24  | 72  | 44  | 60  | 46  | 72  | 32  | 96  | 42  | 60  |
:::

::: teht
# Tehtävä
Fermat'n pieni lause sanoo, että jos $p$ on alkuluku, niin luku $a^{p-1}-1$ on jaollinen luvulla $p$.
Tulkitse ja tarkista lauseen väite

* luvuilla $a=2$ ja $p=7$
* joillakin muilla luvuilla $a$ ja $p$.
:::

::: teht
# Tehtävä
Euler tarkensi Fermat'n tulosta osoittamalla, että jos luonnolliset luvut $a$ ja $n$ ovat suhteellisia alkulukuja, niin $a^{\varphi(n)}-1$ on jaollinen luvulla $n$.
Tulkitse ja tarkista lauseen väite

* luvuilla $a=9$ ja $n=4$
* joillakin muilla luvuilla $a$ ja $n$.

Miksi Fermat'n pieni lause seuraa Eulerin tuloksesta?
:::
