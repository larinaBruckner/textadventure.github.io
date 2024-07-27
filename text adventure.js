const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const storyImage = document.getElementById('story-image');
const backgroundMusic = document.getElementById('background-music');
const clickSound = document.getElementById('click-sound');
const titleScreen = document.getElementById('title-screen');
const characterSelection = document.getElementById('character-selection');
const gameContainer = document.getElementById('game-container');
const startButton = document.getElementById('start-button');

let selectedCharacter = null;

const characters = {
      Chris: {
        name: "Chris",
        description: "mutig, humorvoll, impulsiv",
        image: "images/chris_ch.jpg",
        storyline: {
            start: {
                text: "Der Flügelschlag eines einzigen Schmetterlings, kann in einigen Wochen zu einem verheerenden Hurricane führen.",
                image: "images/butterfly.gif",
                choices: [
                    { text: "Folge mir", next: "first" },
                ]
            },
            first: {
                text: "Die kleinste Entscheidung kann die Zukunft dramatisch verändern.",
                image: "images/butterfly.gif",
                choices: [
                    { text: "Folge mir", next: "second" },
                ]
            },
            second: {
                text: "Deine Handlungen formen den Verlauf deiner Geschichte.",
                image: "images/butterfly.gif",
                choices: [
                    { text: "Folge mir", next: "third" },
                ]
            },
            third: {
                text: "Deine Geschichte ist eine von vielen Möglichkeiten.",
                image: "images/butterfly.gif",
                choices: [
                    { text: "Folge mir", next: "fourth" },
                ]
            },
            fourth: {
                text: "Wähle deine Handlungen mit Bedacht.",
                image: "images/butterfly.gif",
                choices: [
                    { text: "Folge mir", next: "fifth" },
                ]
            },
            fifth: {
                text: "Die kleinste Entscheidung kann die Zukunft dramatisch verändern.",
                image: "images/butterfly.gif",
                choices: [
                    { text: "Folge mir", next: "sixth" },
                ]
            },
            sixth: {
                text: "Im Laufe des Spiels wirst du mit schwierigen Entscheidungen konfrontiert, die über Leben und den Tod deiner Freunde und sogar dein eigenes, Einfluss haben werden. Denke gut über deine Entscheidungen nach, denn… der Tod ist endgültig.",
                image: "images/butterfly.gif",
                choices: [
                    { text: "Folge mir", next: "Charakter1" },
                ]
            },
            Charakter1: {
                text: "Du spielst nun als Chris.",
                image: "images/chris.gif",
                choices: [
                    { text: "Beginne deine Geschichte", next: "prologue1" },
                ]
            },
            prologue1: {
                text: "2. Februar 2014",
                image: "images/snow.gif",
                choices: [
                    { text: "weiter…", next: "prologue2" },
                ]
            },
            prologue2: {
                text: "Die Freunde Sam, Josh, seine Zwillingsschwestern Hannah und Beth, Jessica und Chris treffen sich in der Berghütte der Blackwood Pines auf Mount Washington zu ihrem alljährlichen Winterausflug.",
                image: "images/snow.gif",
                choices: [
                    { text: "weiter…", next: "prologue3" },
                ]
            },
            prologue3: {
                text: "Während des Aufenthalts spielt ein Teil der Gruppe, Hannah, die in Chris verliebt ist, einen Streich. Woraufhin sie gedemütigt in den verschneiten Wald rennt.",
                image: "images/hannah_beth.gif",
                choices: [
                    { text: "weiter…", next: "prologue4" },
                ]
            },
            prologue4: {
                text: "Sowohl Beth, die ihr nachläuft, als auch Hannah, kamen nicht mehr zurück und wurden auch nicht von der Polizei gefunden und gelten als vermisst.",
                image: "images/hannah_beth_fall.gif",
                choices: [
                    { text: "weiter…", next: "prologue5" },
                ]
          },
          prologue5: {
              text: "Zum ersten Jahrestag des Verschwindens von Hannah und Beth Washington, lädt ihr Bruder Josh die verbliebenen drei Freunde erneut in die Blackwood Pines ein. Alle machen sich auf den Weg dorthin.",
              image: "images/josh_einladung.gif",
              choices: [
                  { text: "weiter…", next: "prologue6" },
              ]
          },
          prologue6: {
              text: "Im Verlauf der Nacht beginnt der idyllisch-wirkende Ausflug… unheilvoll zu werden.",
              image: "images/josh_einladung.gif",
              choices: [
                  { text: "weiter…", next: "chris_ankunft" },
              ]
          },
          chris_ankunft: {
              text: "Chris freut sich die anderen wiederzusehen. Er selbst ist von der Einladung etwas überrascht, denn nach dem Vorfall mit Hannah und Beth hat er nur mit wenigen den Kontakt gehalten.",
              image: "images/chris_ankunft.gif",
              choices: [
                  { text: "weiter…", next: "chris_ankunft1" },
              ]
          },
          chris_ankunft1: {
              text: "Egal was die Absicht hinter Josh ist, eine Party kann er nicht einfach so sausen lassen. Da er mit einem früheren Bus gefahren ist, ist er der erste bei der Seilbahn, die ihn und seine Freunde zur Hütte bringen soll.",
              image: "images/seilbahn.jpg",
              choices: [
                  { text: "Hochfahren", next: "hochfahren" },
                  { text: "Auf Sam warten", next: "warten" },
              ]
          },
          hochfahren: {
              text: "Chris wartet nicht auf die Ankunft von Sam, sondern fährt schon einmal allein hoch. Als er oben ankommt, trifft er zu seiner Freundin Jessica, die ihn mit einer leicht unmoralischen Art begrüßt. Sie ist sichtlich glücklich, ihn wiederzusehen, obwohl das letzte Treffen der beiden gar nicht allzu lange her ist.",
              image: "images/jessica_treffen.gif",
              choices: [
                  { text: "weiter…", next: "hochfahren1" },
              ]
          },
          hochfahren1: {
              text: "Als Jessica ihm noch näherkommen will, begrüßt sie jemand von hinten. Es ist Sam, die alleine hochgefahren ist und jetzt etwas misstrauisch die beiden anschaut. Als habe sie zwei Schüler beim Spicken erwischt.",
              image: "images/jessica_treffen.gif",
              choices: [
                  { text: "weiter…", next: "ankunft_lodge" },
            ]
          },
          warten: {
              text: "Chris wartet auf die Ankunft von Sam, um gemeinsam mit der Seilbahn hochzufahren. In der Seilbahn tauschen sie die Neuigkeiten aus, die im vergangenen Jahr in ihrem Leben passiert sind.",
              image: "images/sam_seilbahn.gif",
              choices: [
                  { text: "weiter…", next: "warten1" },
            ]
          },
          warten1: {
              text: "Als sie oben ankommen, treffen sie überraschenderweise auf Jessica, die schon auf die beiden wartet. Mit einem spöttischen Spruch, warum sie so lange gebraucht haben, begrüßt sie die beiden recht unfreundlich.",
              image: "images/jessica_treffen.gif",
              choices: [
                  { text: "weiter…", next: "ankunft_lodge" },
            ]
          },
          ankunft_lodge: {
              text: "In der Lodge angekommen treffen die drei Freunde auf Josh, der freudig auf sie wartet und schon etwas ungeduldig wirkt. Chris beginnt sich mit Josh zu unterhalten, während alle ihre Sachen in die Lobby tragen. Denn im Grunde haben sie sich nach dem Verschwinden der Zwillingsschwestern kaum mehr richtig unterhalten können.",
              image: "images/joshchris_talk.gif",
              choices: [
                  { text: "Sich um Josh sorgen", next: "sorgen" },
                  { text: "Zuversichtlich sein", next: "zuversicht" },
            ]
          },
          sorgen: {
              text: "Chris fragt Josh, wie es ihm nach dem Verschwinden von Hannah und Beth geht. Doch ohne seine Frage richtig aussprechen zu können, wird er sofort von Josh unterbrochen. Josh sagt ihm, dass er bereits darüber hinweg ist und nur will, dass sie alle eine gute Zeit haben.",
              image: "images/joshchris_talk.gif",
              choices: [
                  { text: "weiter…", next: "sorgen1" },
            ]
          },
          sorgen1: {
              text: "Chris weiß nicht recht, ob er diese Aussage seinem besten Freund einfach so ankaufen kann. Er wechselt schnell das Thema, bis sie alles in das Haus getragen haben.",
              image: "images/joshchris_talk.gif",
              choices: [
                  { text: "weiter…", next: "kontakt" },
            ]
          },
          zuversicht: {
              text: "Chris versucht recht zuversichtlich auf die Situation mit Josh einzugehen. Er freut sich alle wiederzusehen und ein erholsames Wochenende hat er dringend nötig hat. Josh begrüßt die anderen.",
              image: "images/joshchris_talk.gif",
              choices: [
                  { text: "weiter…", next: "zuversicht1" },
            ]
          },
          zuversicht1: {
              text: "Zugleich merkt Chris, dass Josh doch etwas abwesend wirkt, behält aber erst mal seine Gedanken für sich.",
              image: "images/joshchris_talk.gif",
              choices: [
                  { text: "weiter…", next: "kontakt" },
            ]
          },
          kontakt: {
              text: "Nachdem sie sich in der Hütte eingerichtet haben, geht die Party erst richtig los. Josh hat sich reichlich um die Versorgung gekümmert.",
              image: "images/josh_ankunft1.gif",
              choices: [
                  { text: "weiter…", next: "kontakt1" },
            ]
          },
          kontakt1: {
              text: "Nach einer Weile nutzen Josh, Jessica, Chris und Sam angeheitert ein sogenanntes Ouja-board. Josh hat dies zufällig in einer der alten Schränke in der Berghütte gefunden, um mit seinen Schwestern im Jenseits Kontakt aufzunehmen.",
              image: "images/ouja.jpg",
              choices: [
                  { text: "weiter…", next: "kontakt2" },
            ]
          },
          kontakt2: {
              text: "Chris ist von der Idee, mit Geistern Kontakt aufzunehmen, sichtlich angetan.",
              image: "images/ouja.jpg",
              choices: [
                  { text: "weiter…", next: "kontakt3" },
            ]
          },
          kontakt3: {
              text: "Josh erklärt den anderen die Regeln und bestimmte Sam, die Séance zu führen. Seine Begeisterung steigt, als sie mit der ersten Frage beginnt. IST JEMAND HIER? Plötzlich bewegt sich der Zeiger zu den Buchstaben: 'H E L P' was sich deutlich als ein Hilferuf entpuppt.",
              image: "images/ouja.jpg",
              choices: [
                  { text: "Sam stoppen", next: "stoppen" },
                  { text: "Sam weiter animieren", next: "animieren" },
            ]
          },
          stoppen: {
              text: "Chris bekommt es allmählich mit der Angst zu tun, weil er weiß, dass sich keiner von ihnen so einen schlechten Scherz ausdenken würde. Er versucht Sam zu stoppen, diese scheint aber nicht auf seine Reaktionen zu hören, sondern fragt weiter.",
              image: "images/ouja.jpg",
              choices: [
                  { text: "weiter…", next: "stoppen1" },
            ]
          },
          stoppen1: {
              text: "Die Fragen machen deutlich, dass sie mit Josh's Schwestern kommunizieren. Doch mit einem lauten Schlag fällt der Zeiger mit einer Wucht selbstständig zu Boden.",
              image: "images/ouja.jpg",
              choices: [
                  { text: "weiter…", next: "spaziergang" },
            ]
          },
          animieren: {
              text: "Keiner von ihnen sagt ein Wort. Nur Chris provoziert Sam, die nächste Farge zu stellen. Die Fragen machen deutlich, dass sie mit Josh's Schwestern kommunizieren.",
              image: "images/ouja.jpg",
              choices: [
                  { text: "weiter…", next: "animieren1" },
            ]
          },
          animieren1: {
              text: "Josh ruft Sam zu, sie soll fragen, wer der Geist ist. Doch mit einem lauten Schlag fällt der Zeiger mit einer Wucht selbstständig zu Boden.",
              image: "images/ouja.jpg",
              choices: [
                  { text: "weiter…", next: "spaziergang" },
            ]
          },
          spaziergang: {
              text: "Josh beschuldigt sie, ihm einen geschmacklosen Streich gespielt zu haben. Josh geht daraufhin wütend fort, aber keiner der Freunde wagt sich ihm hinterherzurennen, so versteift sind sie.",
              image: "images/josh_1.gif",
              choices: [
                  { text: "weiter…", next: "spaziergang1" },
            ]
          },
          spaziergang1: {
              text: "Keiner von ihnen hat mit einer Absicht den Zeiger bewegt und das weiß jeder hier im Raum.",
              image: "images/josh_1.gif",
              choices: [
                  { text: "weiter…", next: "spaziergang2" },
            ]
          },
          spaziergang2: {
              text: "Nach der Séance besprechen Chris und Sam, ob Hannah oder Beth tatsächlich mit ihnen kommunizierten. Plötzlich ruft Jessica Chris zu sich, wobei Chris ihrer Stimme folgt.",
              image: "images/jessica_7.gif",
              choices: [
                  { text: "weiter…", next: "spaziergang3" },
            ]
          },
          spaziergang3: {
              text: "Die beiden haben ein Geheimnis, wovon keiner bisher etwas weiß. Sie haben seit dem Verschwinden der Schwestern eine laufende Affäre.",
              image: "images/jessica_7.gif",
              choices: [
                  { text: "weiter…", next: "spaziergang4" },
            ]
          },
          spaziergang4: {
              text: "Jessica entscheidet sich für einen kleinen nächtlichen Spaziergang zu einer abgelegenen Hütte mitten im Wald. Sie will Chris als starken Begleiter dabeihaben und da kann er doch nicht nein sagen.",
              image: "images/wald_1.gif",
              choices: [
                  { text: "weiter…", next: "spaziergang5" },
            ]
          },
          spaziergang5: {
              text: "Sie gehen los. Nach längerem Gehen hören sie plötzlich ein lautes Geschrei. Sie ignorieren es, laufen jedoch jetzt etwas schneller durch den Wald.",
              image: "images/wald_1.gif",
              choices: [
                  { text: "weiter…", next: "spaziergang6" },
            ]
          },
          spaziergang6: {
              text: "Auf ihrem Weg finden sie ein Teleskop, wodurch Jessica schaut und zu Chris sagt, dass sie jemanden im Wald gesehen hat. Chris schaut ebenfalls hindurch und sieht etwas, was ihm einen kalten Schauer den Rücken hinunter laufen lässt.",
              image: "images/teleskop.jpg",
              choices: [
                  { text: "Jessica nicht berichten", next: "nein" },
                  { text: "Jessica berichten", next: "ja" },
            ]
          },
          nein: {
              text: "Um Jessica zu schützen, macht er einen Witz daraus. Er habe einen Bär gesehen und jetzt müsse er sie beschützen. Dabei posed er heldenhaft.",
              image: "images/teleskop.jpg",
              choices: [
                  { text: "weiter…", next: "hirsch" },
            ]
          },
          ja: {
              text: "Chris erzählt ihr davon, doch Jessica glaubt ihm nicht und meint, er wolle ihr nur Angst einjagen.",
              image: "images/teleskop.jpg",
              choices: [
                  { text: "weiter…", next: "hirsch" },
            ]
          },
          hirsch: {
              text: "Als sie weitergehen, finden Jessica und Chris einen sterbenden Hirsch, der über einem Baumstamm liegt. Er ist stark verwundet.",
              image: "images/hirsch.jpg",
              choices: [
                  { text: "Hirsch erlösen", next: "erlösen" },
                  { text: "Hirsch trösten", next: "trösten" },
            ]
          },
          erlösen: {
              text: "Chris nimmt einen naheliegenden Stein und schlägt mehrmals auf den Hirsch ein, bis dieser keinen Ton mehr von sich gibt. Jessica wirkt erschrocken.",
              image: "images/hirsch.jpg",
              choices: [
                  { text: "weiter…", next: "flucht" },
            ]
          },
          trösten: {
              text: "Chris hält den Kopf des Hirsches und leistet ihm Gesellschaft, bis dieser stirbt.",
              image: "images/hirsch.jpg",
              choices: [
                  { text: "weiter…", next: "flucht" },
            ]
          },
          flucht: {
              text: "Plötzlich wird der Körper des Hirsches wie von Geisterhand weggezogen. Chris und Jessica sprinten mit voller Angst in Richtung der nicht mehr weitentfernten Hütte.",
              image: "images/flucht.gif",
              choices: [
                  { text: "weiter…", next: "flucht1" },
            ]
          },
          flucht1: {
              text: "Ein lautes, fast schon brüllendes Geräusch verfolgt die zwei. Kurz bevor sie an der Hütte ankommen, stolpert Jessica über einen Stein.",
              image: "images/flucht.gif",
              choices: [
                  { text: "Jessica helfen", next: "helfen" },
                  { text: "Tür aufschließen", next: "aufschließen" },
            ]
          },
          helfen: {
              text: "Chris hilft ihr hoch und zu zweit rennen sie zur schweren Holztür, um diese mit einem Schlüssel zu öffnen. Das laute Geräusch kommt immer näher, doch es ist dunkel und so können sie nichts erkennen.",
              image: "images/flucht.gif",
              choices: [
                  { text: "weiter…", next: "helfen1" },
            ]
          },
          helfen1: {
              text: "Sie schaffen es, die Tür aufzusperren und im selben Moment schnell wieder abzusperren. Jessica bedankt sich bei Chris. So ängstlich hat er sie noch nie erlebt.",
              image: "images/flucht.gif",
              choices: [
                  { text: "weiter…", next: "sicher" },
            ]
          },
          aufschließen: {
              text: "Chris entscheidet sich erst die Tür zu öffnen und dann Jessica zu helfen. Vor lauter Aufregung dauert es länger als erwartet. Bis dahin hat sich Jessica auch wieder gefangen und rennt zur Tür, bei welcher sich Chris befindet. Er öffnet im selben Moment die Tür.",
              image: "images/flucht.gif",
              choices: [
                  { text: "weiter…", next: "aufschließen1" },
            ]
          },
          aufschließen1: {
              text: "Chris hat sie noch nie so wütend und ängstlich erlebt. Sie beschuldigt ihn, dass er sie hätte draußen liegen lassen wollen, nur um sich selbst zu retten.",
              image: "images/flucht.gif",
              choices: [
                  { text: "weiter…", next: "sicher" },
            ]
          },
          sicher: {
              text: "Nach einer kurzen Verschnaufpause schlussfolgern sie beide, dass es nur ein Bär gewesen sein kann. Nun sind sie endlich sicher.",
              image: "images/flucht.gif",
              choices: [
                  { text: "weiter…", next: "sicher1" },
            ]
          },
          sicher1: {
              text: "Der Grund, warum Jessica zur Hütte laufen wollte, war ganz klar: Das Ziel ist nicht nur rumzumachen….",
              image: "images/hütte.png",
              choices: [
                  { text: "weiter…", next: "sicher2" },
            ]
          },
          sicher2: {
              text: "Das Geräusch eines zerbrechenden Fensters und das klirren der Scherben, unterbricht sie.",
              image: "images/hütte.png",
              choices: [
                  { text: "weiter…", next: "sicher3" },
            ]
          },
          sicher3: {
              text: "Chris bemerkt, dass Jessica wütend ist, denn sie glaubt, dass dies ein Streich von Sam oder Josh ist. Beide sind sich sicher gewesen, dass es keiner mitbekommen hat.",
              image: "images/jessica_hütte.gif",
              choices: [
                  { text: "weiter…", next: "sicher4" },
            ]
          },
          sicher4: {
              text: "Sie stürmt wutentbrannt nach draußen, um die schuldige Person zu ertappen. Doch es ist so dunkel, dass sie niemanden sehen kann.",
              image: "images/jessica_hütte.gif",
              choices: [
                  { text: "weiter…", next: "sicher5" },
            ]
          },
          sicher5: {
              text: "Sie betritt erneut die Hütte und schließt die Türe. Doch plötzlich greift sie etwas am Hinterkopf und zerrt sie durch das Fenster der Tür nach draußen.",
              image: "images/jessica_8.gif",
              choices: [
                  { text: "weiter…", next: "sicher6" },
            ]
          },
          sicher6: {
              text: "All das passiert binnen Sekunden, sodass Chris keine Zeit hat zum Reagieren. Das einzige was er hört sind Jessicas's entfernte Schreie. Er muss sofort handeln.",
              image: "images/jessica_8.gif",
              choices: [
                  { text: "Abkürzung nehmen", next: "abkürzung" },
                  { text: "Weg folgen", next: "folgen" },
            ]
          },
          abkürzung: {
              text: "Chris sprintet los, er springt über Baumstämme und Felsen. Doch das hastige Benehmen bringt ihn in lebensgefährliche Situationen.",
              image: "images/chris_suche.gif",
              choices: [
                  { text: "weiter…", next: "abkürzung1" },
            ]
          },
          abkürzung1: {
              text: "Er stolpert und rutscht aus, dadurch verliert er wertvolle Zeit, die für Jessica überlebenswichtig sein wird.",
              image: "images/chris_suche.gif",
              choices: [
                  { text: "weiter…", next: "überblick" },
            ]
          },
          folgen: {
              text: "Chris läuft mit schnellen Schritten aber vorsichtig einen langen Pfad rechts vom Fluss entlang.",
              image: "images/chris_suche.gif",
              choices: [
                  { text: "weiter…", next: "überblick" },
            ]
          },
          überblick: {
              text: "Er erreicht eine Klippe, um sich einen guten Überblick zu verschaffen. Er sieht, wie Jessica von der Kreatur weggeschleppt wird, die er schon beim Hinweg entdeckt hatte.",
              image: "images/chris_suche.gif",
              choices: [
                  { text: "Von der Klippe springen", next: "springen" },
                  { text: "Klippe umgehen", next: "umgehen" },
            ]
          },
          springen: {
              text: "Chris rutscht die Klippe hinunter und muss einen Zweig greifen, um seinen Fall zu stoppen. Trotz Allem verletzt er sich an seinem Arm, was ihn aufschreien lässt. Es kostet ihn Kraft und Zeit.",
              image: "images/chris_suche.gif",
              choices: [
                  { text: "weiter…", next: "springen1" },
            ]
          },
          springen1: {
              text: "Er läuft in die Richtung, in die Jessica verschleppt wurde.",
              image: "images/chris_suche.gif",
              choices: [
                  { text: "weiter…", next: "minen" },
            ]
          },
          umgehen: {
              text: "Chris umgeht den Vorsprung. Er verliert etwas Zeit, verletzt sich dafür nicht.",
              image: "images/chris_suche.gif",
              choices: [
                  { text: "weiter…", next: "minen" },
            ]
          },
          minen: {
              text: "Chris erreicht einen Platz mit Sicht auf den Eingang zu einer Mine.",
              image: "images/mine.jpg",
              choices: [
                  { text: "Treppe nehmen", next: "treppe" },
                  { text: "Riskieren nach unten zu rutschen", next: "rutschen" },
            ]
          },
          treppe: {
              text: "Chris findet eine Treppe, die ihn sicher hinunter zu den Minen führt.",
              image: "images/mine.jpg",
              choices: [
                  { text: "weiter…", next: "treppe1" },
            ]
          },
          treppe1: {
              text: "Chris schafft es sicher in die Minen und findet Jessica lebendig, aber verletzt auf einem kaputten Aufzug. Sie ist verstört und panisch.",
              image: "images/jessica_verletzt_2.jpg",
              choices: [
                  { text: "weiter…", next: "treppe2" },
            ]
          },
          treppe2: {
              text: "Er hebt Jessica auf seine Arme und hilft ihr vom einsturzgefährdeten Aufzug herunter. Die ruckartige Bewegung und die plötzliche Last, bringt den Aufzug kurz darauf zum Einstürzen.",
              image: "images/jessica_verletzt_2.jpg",
              choices: [
                  { text: "weiter…", next: "treppe3" },
            ]
          },
          treppe3: {
              text: "In Chris Kopf rasen die Gedanken… Welches Tier könnte so etwas Derartiges tun oder war das überhaupt kein Tier mehr?",
              image: "images/jessica_verletzt_2.jpg",
              choices: [
                  { text: "weiter…", next: "zurück_hütte" },
            ]
          },
          rutschen: {
              text: "Chris gleitet in die Minen, schafft es nur schwer nach unten, denn der Weg ist gefährlich und steil. Durch seine ganzen Verzögerungen, findet er Jessica schwer verletzt auf einem alten Aufzugsschacht liegen.",
              image: "images/jessica_verletzt_2.jpg",
              choices: [
                  { text: "weiter…", next: "rutschen1" },
            ]
          },
          rutschen1: {
              text: "Welches Tier könnte so etwas Derartiges tun oder war das überhaupt kein Tier mehr?",
              image: "images/jessica_verletzt_2.jpg",
              choices: [
                  { text: "weiter…", next: "zurück_hütte" },
            ]
          },
          zurück_hütte: {
              text: "Chris trägt Jessica zurück zur Hütte. Bevor sie die erschreckenden Neuigkeiten mit den Anderen teilen können, ruhen sie sich erstmal aus und versorgen ihre Wunden.",
              image: "images/hütte.png",
              choices: [
                  { text: "weiter…", next: "zurück_hütte1" },
            ]
          },
          zurück_hütte1: {
              text: "Jessica hat seit dem Vorfall noch kein einziges Wort gesprochen.",
              image: "images/jessica_verletzt_1.jpg",
              choices: [
                  { text: "weiter…", next: "zurück_hütte2" },
            ]
          },
          zurück_hütte2: {
              text: "Chris wacht im Bett auf, doch von Jessica ist weit und breit keine Spur. Er wird panisch und beginnt nach Jessica zu suchen.",
              image: "images/jessica_verletzt_1.jpg",
              choices: [
                  { text: "weiter…", next: "zurück_hütte3" },
            ]
          },
          zurück_hütte3: {
              text: "Er läuft durch die Hütte, doch ein Blutfleck an der Wand lässt ihn abrupt stoppen.",
              image: "images/blut.gif",
              choices: [
                  { text: "weiter…", next: "zurück_hütte4" },
            ]
          },
          zurück_hütte4: {
              text: "Chris verlässt die Hütte und rennt zum Schuppen, welcher direkt neben der Hütte steht. Als er hereinkommt, hört er Jessica leise wimmern und weinen.",
              image: "images/blut.gif",
              choices: [
                  { text: "weiter…", next: "zurück_hütte5" },
            ]
          },
          zurück_hütte5: {
              text: "Er folgt ihrer Stimme, bis er sie und Josh an einer Wand aufgehängt sieht. Vor ihnen ist ein altes, aber scharfes Sägeblatt auf einer Maschine montiert.",
              image: "images/josh_jessica.jpg",
              choices: [
                  { text: "weiter…", next: "zurück_hütte6" },
            ]
          },
          zurück_hütte6: {
              text: "Chris hört eine verzerrte, männliche Stimme aus einem Lautsprecher sprechen. Diese sagt ihm, dass er auswählen muss, wer von den beiden sterben soll. Die Säge wird aktiviert. Josh und Jessica betteln um ihr Leben.",
              image: "images/josh_jessica.jpg",
              choices: [
                  { text: "Chris wählt Jessica", next: "jessica_gewählt" },
                  { text: "Chris wählt Josh", next: "josh_gewählt" },
            ]
          },
          jessica_gewählt: {
              text: "„Es tut mir so leid Jessica, aber Josh hat so viel durchgemacht“. Chris betätigt den Hebel.",
              image: "images/josh_fake.gif",
              choices: [
                  { text: "weiter…", next: "jessica_gewählt1" },
            ]
          },
          jessica_gewählt1: {
              text: "Anstatt Jessica zu halbieren, wechselt die Maschine von allein zu Josh. Chris muss mit ansehen, wie sein bester Freund grausam stirbt und Jessica überlebt. Josh schreit qualvoll.",
              image: "images/josh_fake.gif",
              choices: [
                  { text: "weiter…", next: "jessica_gewählt2" },
            ]
          },
          jessica_gewählt2: {
              text: "Josh ist tot.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "weiter…", next: "jessica_gewählt3" },
            ]
          },
          jessica_gewählt3: {
              text: "Eine Weile später möchte sich Chris bei Jessica entschuldigen, doch Jessica steht unter Schock und gibt keinen Ton von sich.",
              image: "images/puppenhaus_2.gif",
              choices: [
                  { text: "weiter…", next: "sam_suchen" },
            ]
          },
          josh_gewählt: {
              text: "„Tut mir leid Josh. Ich weiß wir sind beste Freunde, aber… ich liebe Jessica“. Chris betätigt den Hebel",
              image: "images/josh_fake.gif",
              choices: [
                  { text: "weiter…", next: "josh_gewählt1" },
            ]
          },
          josh_gewählt1: {
              text: "Die Maschine setzt sich in Bewegung.",
              image: "images/josh_fake.gif",
              choices: [
                  { text: "weiter…", next: "josh_gewählt2" },
            ]
          },
          josh_gewählt2: {
              text: "Josh wird qualvoll getötet, seine Schreie hallen durch den Schuppen.",
              image: "images/josh_fake.gif",
              choices: [
                  { text: "weiter…", next: "josh_gewählt3" },
            ]
          },
          josh_gewählt3: {
              text: "Josh ist tot.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "weiter…", next: "josh_gewählt4" },
            ]
          },
          josh_gewählt4: {
              text: "Chris befreit Jessica. Beide stehen unter massivem Schock.",
              image: "images/puppenhaus_2.gif",
              choices: [
                  { text: "weiter…", next: "sam_suchen" },
            ]
          },
          sam_suchen: {
              text: "Als Jessica und Chris gehen, suchen sie sofort nach Sam. Im Kino-Raum kann Jessica Sam's Armband finden und sagt zu Chris, dass sie Sam schnell finden müssen.",
              image: "images/puppenhaus_2.gif",
              choices: [
                  { text: "weiter…", next: "sam_suchen1" },
            ]
          },
          sam_suchen1: {
              text: "Sie suchen im ganzen Haus. Zum Schluss ist nur noch der Keller übrig, dort finden sie ein verschlossenes Puppenhaus.",
              image: "images/puppenhaus_2.gif",
              choices: [
                  { text: "weiter…", next: "sam_suchen2" },
            ]
          },
          sam_suchen2: {
              text: "Im Inneren des Raumes findet Jessica heraus, dass jemand den letztjährigen Streich neu erschaffen hat. Die Figuren stehen an der selben Position, wie die Gruppe damals, als sie Hannah und Beth den Streich spielten.",
              image: "images/puppen.gif",
              choices: [
                  { text: "weiter…", next: "sam_suchen3" },
            ]
          },
          sam_suchen3: {
              text: "Kurz darauf findet Jessica eine Schere. Diese nimmt sie mit.",
              image: "images/puppen.gif",
              choices: [
                  { text: "weiter…", next: "sam_suchen4" },
            ]
          },
          sam_suchen4: {
              text: "Plötzlich dreht sich der Kopf von Hannah's Puppe zur Seite.",
              image: "images/puppen.gif",
              choices: [
                  { text: "weiter…", next: "sam_suchen5" },
            ]
          },
          sam_suchen5: {
              text: "Das Dach des Puppenhauses öffnet sich und Chris findet darin Hannah's Tagebuch. Er hat ein komisches Gefühl hineinzuschauen, da er weiß, welche Gefühle Hannah zu ihm hatte und er diese gnadenlos ausgenutzt hat.",
              image: "images/puppen.gif",
              choices: [
                  { text: "weiter…", next: "sam_suchen6" },
            ]
          },
          sam_suchen6: {
              text: "Sie erkunden weiter den Keller und sehen Bilder von sich selbst an einer Wand. Beide denken sich nicht viel dabei.",
              image: "images/bilder.jpg",
              choices: [
                  { text: "weiter…", next: "sam_suchen7" },
            ]
          },
          sam_suchen7: {
              text: "Chris beschließt, eine weitere Tür zu öffnen. In dem Raum steht ein Fernseher, welcher anfängt zu rauschen.",
              image: "images/rauschen.gif",
              choices: [
                  { text: "weiter…", next: "sam_suchen8" },
            ]
          },
          sam_suchen8: {
              text: "Das Video, welches sie vom Streich auf Hannah gemacht haben, wird abgespielt. Chris weiß nicht, wie er darauf reagieren soll.",
              image: "images/hannah.gif",
              choices: [
                  { text: "Bedauernd", next: "bedauern" },
                  { text: "Reuelos", next: "reuelos" },
            ]
          },
          bedauern: {
              text: "„Es sollte nur ein Witz sein“. Chris fühlt sich schuldig.",
              image: "images/hannah.gif",
              choices: [
                  { text: "weiter…", next: "blut" },
            ]
          },
          reuelos: {
              text: "„Das war alles nicht so geplant. Ich hatte damit nichts zu tun“. Chris fühlt sich unschuldig.",
              image: "images/hannah.gif",
              choices: [
                  { text: "weiter…", next: "blut" },
            ]
          },
          blut: {
              text: "Währenddessen, tiefer im Keller findet Jessica Blut auf dem Boden. Ist das Sam's?",
              image: "images/raum.jpeg",
              choices: [
                  { text: "weiter…", next: "blut1" },
            ]
          },
          blut1: {
              text: "Als Jessica die Tür öffnet, sieht Chris eine Bewegung auf der anderen Seite des Raumes.",
              image: "images/sam_dummy.jpg",
              choices: [
                  { text: "Jessica folgen", next: "jessica_folgen" },
                  { text: "Bewegung untersuchen", next: "untersuchen" },
            ]
          },
          jessica_folgen: {
              text: "In dem Raum hängt jemand mit Sams Kleidung an einem Haken. Der Gestank von den verwesten Schweinen ringsum, füllt den Raum… erleichtert stellen sie fest, dass die Person nur ein Dummy ist.",
              image: "images/sam_dummy.jpg",
              choices: [
                  { text: "weiter…", next: "jessica_folgen1" },
            ]
          },
          jessica_folgen1: {
              text: "Chris und Jessica finden Sam's Körper auf einem Stuhl. Jessica denkt, dass sie tot ist. Chris beruhigt sie. Sam ist nicht tot, aber sie ist dennoch bewusstlos.",
              image: "images/keller.jpg",
              choices: [
                  { text: "weiter…", next: "jessica_folgen2" },
            ]
          },
          jessica_folgen2: {
              text: "Sekunden später als sie Sam helfen wollen, wird Chris von einem Mann in Maske und Schürze ausgeknockt.",
              image: "images/psycho_1.gif",
              choices: [
                  { text: "weiter…", next: "jessica_folgen3" },
            ]
          },
          jessica_folgen3: {
              text: "Jessica droht dem Mann, dass er sich von ihr fernhalten soll.",
              image: "images/psycho_1.gif",
              choices: [
                  { text: "weiter…", next: "jessica_folgen4" },
            ]
          },
          jessica_folgen4: {
              text: "Der Mann geht auf sie zu und mit einem Ruck steckt die Schere nicht mehr in Jessicas Hosentasche, sondern in dem Bauch des Unbekannten. Der Mann reagiert nicht und knockt Jessica mit seiner Faust aus.",
              image: "images/psycho_2.gif",
              choices: [
                  { text: "weiter…", next: "aufwachen" },
            ]
          },
          untersuchen: {
              text: "Chris untersucht die Bewegung, doch währenddessen schlägt die Tür mit Jessica auf der anderen Seite zu.",
              image: "images/raum.jpeg",
              choices: [
                  { text: "weiter…", next: "untersuchen1" },
            ]
          },
          untersuchen1: {
              text: "Chris will zur Tür rennen, doch das Geräusch von Schritten lässt ihn stoppen. Er entdeckt den Unbekannten und duckt sich, um zu vermeiden, dass er entdeckt wird.",
              image: "images/psycho.gif",
              choices: [
                  { text: "weiter…", next: "untersuchen2" },
            ]
          },
          untersuchen2: {
              text: "Nachdem die Luft rein ist, rennt er aus dem Raum, um Jessica zu finden.",
              image: "images/psycho.gif",
              choices: [
                  { text: "weiter…", next: "untersuchen3" },
            ]
          },
          untersuchen3: {
              text: "Chris findet Jessica bewusstlos in einem Raum. Er nähert sich ihr, doch ein plötzlicher Schlag ins Gesicht, knockt ihn aus.",
              image: "images/psycho.gif",
              choices: [
                  { text: "weiter…", next: "aufwachen" },
            ]
          },
          aufwachen: {
              text: "Jessica und Chris gewinnen das Bewusstsein wieder und befinden sich nun an Stühlen gefesselt. Vor ihnen steht ein kleiner staubiger Tisch mit einer einzigen Pistole darauf und über ihnen eine laufende Kreissäge.",
              image: "images/schwer_2.jpg",
              choices: [
                  { text: "weiter…", next: "aufwachen1" },
            ]
          },
        aufwachen1: {
            text: "Jessica und Chris geraten in Panik. Jessica fängt an zu weinen und gesteht Chris, dass sie ihn liebt. Chris möchte diese Gefühle erwiedern.",
            image: "images/waffe.gif",
            choices: [
                { text: "weiter…", next: "aufwachen2" },
          ]
        },
        aufwachen2: {
            text: "Als Chris seine Gefühle erwiedern möchte, wird er von der Stimme, die er zuvor gehört hatte, unterbrochen.",
            image: "images/waffe.gif",
            choices: [
                { text: "weiter…", next: "aufwachen3" },
          ]
        },
        aufwachen3: {
            text: "Die Stimme erklärt Chris, dass er sich entscheiden muss. Entweder tötet er sich selbst oder Jessica, mit der Waffe vor ihm.",
            image: "images/waffe.gif",
            choices: [
                { text: "Die Waffe auf Jessica richten", next: "auf_jessica" },
                { text: "Die Waffe auf sich selbst richten", next: "selbst" },
          ]
        },
        auf_jessica: {
            text: "Mit zittrigen Händen richtet Chris die Waffe auf Jessica, dadurch fängt sie an um ihr Leben zu betteln. Chris fängt an zu weinen und kann nicht aufhören.",
            image: "images/schwer_2.jpg",
            choices: [
                { text: "weiter…", next: "stimme" },
          ]
        },
        selbst: {
            text: "Chris richtet die Pistole auf sich. Jessica bittet ihn das nicht zu tun. Sie will sein Leben retten und für ihn deswegen sterben.",
            image: "images/schwer_4.jpg",
            choices: [
                { text: "weiter…", next: "stimme" },
          ]
        },
        stimme: {
            text: "„Letzte Chance Chris“. Die Stimme wird ungeduldig und die Kreissäge sinkt gefährlich tief.",
            image: "images/schwer_6.jpg",
            choices: [
                { text: "Jessica erschießen", next: "jessica_erschießen" },
                { text: "Sich selbst erschießen", next: "selbst_erschießen" },
                { text: "Nichts tun", next: "nichts" },
          ]
        },
        jessica_erschießen: {
            text: "„Es tut mir leid, aber ich muss weiterleben“. Chris richtet schließlich die Waffe an Jessicas Kopf und feuert ab.",
            image: "images/schwer_4.gif",
            choices: [
                { text: "weiter…", next: "jessica_erschießen1" },
          ]
        },
        jessica_erschießen1: {
            text: "Plötzlich gehen die Lichter aus und es wird dunkel im Raum. Alles was Chris hört, ist nur ein lauter Knall und das Schluchzen von Jessica.",
            image: "images/schwer_4.gif",
            choices: [
                { text: "weiter…", next: "jessica_erschießen2" },
          ]
        },
        jessica_erschießen2: {
            text: "Warum ist sie nicht tot? Er hat doch ganz klar abgedrückt.",
            image: "images/schwer_5.jpg",
            choices: [
                { text: "weiter…", next: "jessica_erschießen3" },
          ]
        },
        jessica_erschießen3: {
            text: "Die Stimme reißt Chris aus seinen Gedanken. „Jetzt, lieber Chris, hat man dein wahres Ich kennengelernt. Was für ein abscheulicher Mensch du doch geworden bist“.",
            image: "images/schwer_5.jpg",
            choices: [
                { text: "weiter…", next: "befreiung_jessica" },
          ]
        },
        befreiung_jessica: {
            text: "Beide befreien sich aus den Seilen, mit denen sie an die Stühle gebunden wurden. Chris sieht Sam und rennt zu ihr. Sam sitzt festgebunden auf einem Stuhl.",
            image: "images/schwer_5.jpg",
            choices: [
                { text: "weiter…", next: "befreiung_jessica1" },
          ]
        },
        befreiung_jessica1: {
            text: "Während Chris Sam entfesselt, nähert sich der Unbekannte von hinten. Doch Sam sieht ihn kommen. Sie warnt Jessica und Chris.",
            image: "images/psycho.gif",
            choices: [
                { text: "weiter…", next: "befreiung_jessica2" },
          ]
        },
        befreiung_jessica2: {
            text: "Alle drei drehen sich zu dem Mann um.",
            image: "images/psycho.gif",
            choices: [
                { text: "weiter…", next: "befreiung_jessica3" },
          ]
        },
        befreiung_jessica3: {
            text: "Der Mann kommt langsam auf sie zu. „Erkennt ihr mich wieder?“. Der Mann stoppt und zieht seine Maske ab…",
            image: "images/reveal.gif",
            choices: [
                { text: "weiter…", next: "befreiung_jessica4" },
          ]
        },
        befreiung_jessica4: {
            text: "Chris, Jessica und Sam trauen ihren Augen nicht. Das ist unmöglich.",
            image: "images/reveal.gif",
            choices: [
                { text: "weiter…", next: "befreiung_jessica5" },
          ]
        },
        befreiung_jessica5: {
            text: "Der Mann offenbart sich als den eigentlich toten Josh. Er war es, der die ganze Zeit dahintersteckte.",
            image: "images/reveal.gif",
            choices: [
                { text: "weiter…", next: "befreiung_jessica6" },
          ]
        },
        befreiung_jessica6: {
            text: "Nachdem er sich zu erkennen gegeben hat, lacht Josh laut vor sich hin.",
            image: "images/reveal_2.gif",
            choices: [
                { text: "weiter…", next: "befreiung_jessica7" },
          ]
        },
        befreiung_jessica7: {
            text: "Er sagt ihnen, dass sie sich genauso fühlen sollen, wie sich Hannah ein Jahr zuvor gefühlt hat. Er hat seinen Tod gefälscht und die „übernatürlichen“ Ereignisse kontrolliert, die geschehen sind.",
            image: "images/reveal_2.gif",
            choices: [
                { text: "weiter…", next: "befreiung_jessica8" },
          ]
        },
        befreiung_jessica8: {
            text: "„Ihr werdet alle Internet-Sensationen sein. Ich habe all die peinlichen Szenen von euch veröffentlicht“. Josh lacht und zeigt absolut keine Reue.",
            image: "images/reveal_2.gif",
            choices: [
                { text: "weiter…", next: "befreiung_jessica9" },
          ]
        },
        befreiung_jessica9: {
            text: "Chris ist sauer. Es verlangt ihm alles ab, nicht handgreiflich zu werden.",
            image: "images/reveal_2.gif",
            choices: [
                { text: "Handgreiflich werden", next: "gewalt_jessica" },
                { text: "Runter kommen", next: "ruhe_jessica" },
          ]
        },
        gewalt_jessica: {
            text: "Seine Wut war am Ausfachen, sodass er Josh kurze Zeit später bewusstlos schlägt. Chris muss von den beiden Mädchen gestoppt werden.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "gewalt_jessica1" },
          ]
        },
        gewalt_jessica1: {
            text: "Zusammen ziehen sie den bewusstlosen Josh in den Schuppen und binden ihn an einen klapprigen Stuhl.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "fremde_jessica" },
          ]
        },
        ruhe_jessica: {
            text: "Chris möchte nicht genauso sein wie Josh. Er beschließt Josh, Mithilfe von Sam und Jessica zu fesseln.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "ruhe_jessica1" },
          ]
        },
        ruhe_jessica1: {
            text: "Zusammen ziehen sie den gefesselten Josh in den Schuppen und binden ihn an einen klapprigen Stuhl, damit er nichts mehr anstellen kann.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "fremde_jessica" },
          ]
        },
        fremde_jessica: {
            text: "Das Hämmern an die Tür des Schuppens lässt alle drei aufschrecken. Chris, die zwei Mädchen und Josh bleiben erstmal still.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "fremde_jessica1" },
          ]
        },
        fremde_jessica1: {
            text: "Josh, der noch reden kann, zeigt Chris das Geheimversteck für seine echte Pistole, die er hier im Schuppen versteckt hält. Chris sucht diese schnell, findet sie und lädt sie.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "fremde_jessica2" },
          ]
        },
        fremde_jessica2: {
            text: "Bevor er die Tür zum Schuppen öffnen kann, hat der Fremde schon die Tür aufgetreten und entwaffnet sofort den überraschten Chris. Selbst die Mädchen kommen aus ihrem Versteck, um Chris zu schützen.",
            image: "images/fremder_3.gif",
            choices: [
                { text: "weiter…", next: "fremde_jessica3" },
          ]
        },
        fremde_jessica3: {
            text: "Der Fremde hebt seine Hände. „Das wollt ihr nicht tun. Lasst mich erst erklären.“ Chris nickt und lässt den Fremden erklären.",
            image: "images/fremder_4.gif",
            choices: [
                { text: "weiter…", next: "fremde_jessica4" },
          ]
        },
        fremde_jessica4: {
            text: "„Da ist etwas… da draußen. Es ist nicht menschlich und auch nicht animalisch. Es ist tödlich und extrem gefährlich. Also… rate ich euch, mir zu vertrauen, denn ich weiß was diese Dinger sind“.",
            image: "images/fremder_4.gif",
            choices: [
                { text: "weiter…", next: "fremde_jessica5" },
          ]
        },
        fremde_jessica5: {
            text: "Er erklärt ihnen, dass ein sogenannter 'Wendigo' ein Mensch ist, der durch Kannibalismus auf dem Blackwood Mountain vom Wendigo Geist eingenommen wurde. „Fragt nicht, woher ich das alles weiß. Ich habe schon zu viel erlebt und gesehen, auch eine Verwandlung habe ich beobachtet“.",
            image: "images/fremder_4.gif",
            choices: [
                { text: "weiter…", next: "fremde_jessica6" },
          ]
        },
        fremde_jessica6: {
            text: "Der Wendigo.",
            image: "images/wendigo.gif",
            choices: [
                { text: "weiter…", next: "fremde_jessica7" },
          ]
        },
        fremde_jessica7: {
            text: "Bei der Verwandlung verändern sich zuerst die Augen und werden milchig weiß, ebenso wie die Haut, welche sich kreidebleich färbt, dick und widerstandsfähig wird. Dann werden die Zähne lang und scharf. Die Kreatur wächst und die Haut spannt sich über die Knochen, dadurch haben sie ein skelettartiges Äußeres.",
            image: "images/wendigo.gif",
            choices: [
                { text: "weiter…", next: "fremde_jessica8" },
          ]
        },
        fremde_jessica8: {
            text: "Es kann jede kleinste Bewegung wahrnehmen und sehr gut riechen, bewegt sich sehr schnell und ruckartig auf allen Vieren. Außerdem kann es ausgezeichnet an Wänden und Decken klettern.",
            image: "images/wendigo.gif",
            choices: [
                { text: "weiter…", next: "fremde_jessica9" },
          ]
        },
        fremde_jessica9: {
            text: "Haut und Fleisch eines Wendigo sind wie ein Panzer. Ein Flammenwerfer ist die geeigneteste Waffe gegen einen Wendigo, denn es fürchtet das Feuer. Schrotflinten verlangsamt es nur. Das Monster jagt nur nachts. Dinge, die sich nicht bewegen, kann es nicht sehen.",
            image: "images/wendigo.gif",
            choices: [
                { text: "weiter…", next: "fremde_jessica10" },
          ]
        },
        fremde_jessica10: {
            text: "Chris beschließt, mit dem Fremden Richtung Hütte zu gehen, um weitere Informationen zu erlangen.",
            image: "images/fremder_2.gif",
            choices: [
                { text: "weiter…", next: "fremde_jessica11" },
          ]
        },
        fremde_jessica11: {
            text: "Jessica und Sam rennen vorraus.",
            image: "images/fremder_2.gif",
            choices: [
                { text: "weiter…", next: "fremde_jessica12" },
          ]
        },
        fremde_jessica12: {
            text: "Plötzlich hören Chris und der Fremde einen Schrei aus dem Schuppen, in dem Josh gefesselt ist. Sie rennen zurück, nur um einen zerbrochenen Hocker, ohne Josh zu finden.",
            image: "images/fremder_2.gif",
            choices: [
                { text: "weiter…", next: "fremde_jessica13" },
          ]
        },
        fremde_jessica13: {
            text: "Chris will gleich nach Josh suchen, doch der Fremde empfiehlt ihm, zurück zu Lodge zu gehen, da Wendigos in der Nähe sind.",
            image: "images/fremder_2.gif",
            choices: [
                { text: "weiter…", next: "fremde_jessica14" },
          ]
        },
        fremde_jessica14: {
            text: "Während des Rückwegs, bleibt der Fremde plötzlich stehen. „Nicht bewegen“.",
            image: "images/fremder_2.gif",
            choices: [
                { text: "Bewegen", next: "bewegen_jessica" },
                { text: "Stehen bleiben", next: "bleiben_jessica" },
          ]
        },
        bewegen_jessica: {
            text: "Chris hört nicht auf den Fremden und läuft weiter. Der schrille, laute Schrei eines Wendigos und das Geräusch von Fleisch und Knochen, lässt Chris erstarren. Der Wendigo hat den Fremden enthauptet. Das Blut färbt den Schnee um dessen Leiche rot.",
            image: "images/fremder_tod.gif",
            choices: [
                { text: "weiter…", next: "bewegen_jessica1" },
          ]
        },
        bewegen_jessica1: {
            text: "Der Fremde ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "angst_jessica" },
          ]
        },
        bleiben_jessica: {
            text: "Chris hört auf den Fremden und stoppt sofort, doch der schrille, laute Schrei eines Wendigos und das Geräusch von Fleisch und Knochen, lässt Chriss erstarren. Der Wendigo hat den Fremden enthauptet. Das Blut färbt den Schnee um dessen Leiche rot.",
            image: "images/fremder_tod.gif",
            choices: [
                { text: "weiter…", next: "bleiben_jessica1" },
          ]
        },
        bleiben_jessica1: {
            text: "Der Fremde ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "angst_jessica" },
          ]
        },
        angst_jessica: {
            text: "Chris wird panisch, schnappt sich die Waffe des Fremden und rennt.",
            image: "images/wendigo_verfolgung.gif",
            choices: [
                { text: "Pistole benutzen", next: "benutzen_jessica" },
                { text: "Weiterrennen", next: "weiter_jessica" },
          ]
        },
        benutzen_jessica: {
            text: "Nach ein paar Sekunden dreht er sich um und sieht den Wendigo auf sich zu sprinten. In dem Moment stürzt Chris zu Boden. Die Waffe, welche er dem Fremden abgenommen hatte, hält er fest in den Händen.",
            image: "images/chris_schießen.gif",
            choices: [
                { text: "weiter…", next: "benutzen_jessica1" },
          ]
        },
        benutzen_jessica1: {
            text: "Er schießt auf den Wendigo. Die Kugeln prallen zwar ab, dennoch verscheucht es das Monster für einen Moment und er kann weiter zum Hütteneingang sprinten.",
            image: "images/chris_schießen_2.gif",
            choices: [
                { text: "weiter…", next: "benutzen_jessica2" },
          ]
        },
        benutzen_jessica2: {
            text: "Jessica wartet bereits auf ihn.",
            image: "images/chris_tod.gif",
            choices: [
                { text: "weiter…", next: "benutzen_jessica3" },
          ]
        },
        benutzen_jessica3: {
            text: "Jessica lässt die Tür abgeriegelt. Ihre Wut gegenüber Chris ist so groß, dass sie sich hiermit rächen will. Er wollte sie töten, jetzt wird sie es tun.",
            image: "images/chris_tod.gif",
            choices: [
                { text: "weiter…", next: "benutzen_jessica4" },
          ]
        },
        benutzen_jessica4: {
            text: "Chris hämmert gegen die Türe und fleht Jessica an, aufzuschließen. Chris versucht einen anderen Weg zu finden.",
            image: "images/chris_tod.gif",
            choices: [
                { text: "weiter…", next: "benutzen_jessica5" },
          ]
        },
        benutzen_jessica5: {
            text: "Der Wendigo ist schneller als Chris und greift ihn. Chris wird zu Boden geworfen und der Wendigo reißt ihm den Kopf ab.",
            image: "images/chris_tod_4.gif",
            choices: [
                { text: "weiter…", next: "benutzen_jessica6" },
          ]
        },
        benutzen_jessica6: {
            text: "Jessica schaut zu und empfindet keine Reue. Sam kommt auf sie zu, dann fängt Jessica an zu weinen.",
            image: "images/chris_tod_4.gif",
            choices: [
                { text: "weiter…", next: "benutzen_jessica7" },
          ]
        },
        benutzen_jessica7: {
            text: "Chris ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "Geschichte neu beginnen", next: "start" },
          ]
        },
        weiter_jessica: {
            text: "Er rennt weiter, seine Hoffnung ist die Tür zu erreichen, ohne die Pistole verwenden zu müssen. Diese hat ja sowieso keine Wirkung auf den Wendigo.",
            image: "images/wendigo_verfolgung.gif",
            choices: [
                { text: "weiter…", next: "weiter_jessica1" },
          ]
        },
        weiter_jessica1: {
            text: "Er rennt weiter, schaut mehrmals nach hinten, bis er das Monster nicht sehen kann. Das ist auch das letzte, was er mitbekommt.",
            image: "images/wendigo_verfolgung.gif",
            choices: [
                { text: "weiter…", next: "weiter_jessica2" },
          ]
        },
        weiter_jessica2: {
            text: "Denn der Wendigo hat zum Sprung angesetzt und in der Luft reißt dieser, Chris den Kopf ab. Danach macht der Wendigo sich an das frische Fleisch zu schaffen.",
            image: "images/chris_tod_2.gif",
            choices: [
                { text: "weiter…", next: "weiter_jessica3" },
          ]
        },
        weiter_jessica3: {
            text: "Jessica die auf ihn wartet, sieht alles mit an. Sie lächelt",
            image: "images/chris_tod_2.gif",
            choices: [
                { text: "weiter…", next: "weiter_jessica4" },
          ]
        },
        weiter_jessica4: {
            text: "Chris ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "Geschichte neu beginnen", next: "start" },
          ]
        },





        selbst_erschießen: {
            text: "„Ich liebe dich mehr als alles andere, Jessica“. Chris richtet die Pistole an seinen Kopf und feuert sie ab.",
            image: "images/schwer_4.jpg",
            choices: [
                { text: "weiter…", next: "selbst_erschießen1" },
          ]
        },
        selbst_erschießen1: {
            text: "Plötzlich gehen die Lichter aus und es wird im Raum. Alles was Chris hört, ist nur ein lauter Knall und das Schluchzen von Jessica.",
            image: "images/schwer_4.jpg",
            choices: [
                { text: "weiter…", next: "selbst_erschießen2" },
          ]
        },
        selbst_erschießen2: {
            text: "Chris hebt die Waffe. Warum ist er nicht tot? Er hat doch ganz klar abgedrückt.",
            image: "images/schwer_5.jpg",
            choices: [
                { text: "weiter…", next: "selbst_erschießen3" },
          ]
        },
        selbst_erschießen3: {
            text: "Die Stimme reißt Chris aus seinen Gedanken. „Lieber Chris, du hast eine gute Wahl getroffen“. Chris ist verwirrt.",
            image: "images/schwer_5.jpg",
            choices: [
                { text: "weiter…", next: "befreiung_selbst" },
          ]
        },
        befreiung_selbst: {
            text: "Beide befreien sich aus den Seilen, mit denen sie an die Stühle gebunden wurden. Chris sieht Sam und rennt zu ihr. Sam sitzt festgebunden auf einem Stuhl.",
            image: "images/schwer_5.jpg",
            choices: [
                { text: "weiter…", next: "befreiung_selbst1" },
          ]
        },
        befreiung_selbst1: {
            text: "Während Chris Sam entfesselt, nähert sich der Unbekannte von hinten. Doch Sam sieht ihn kommen. Sie warnt Jessica und Chris.",
            image: "images/psycho.gif",
            choices: [
                { text: "weiter…", next: "befreiung_selbst2" },
          ]
        },
        befreiung_selbst2: {
            text: "Alle drei drehen sich zu dem Mann um.",
            image: "images/psycho.gif",
            choices: [
                { text: "weiter…", next: "befreiung_selbst3" },
          ]
        },
        befreiung_selbst3: {
            text: "Der Mann kommt langsam auf sie zu. „Erkennt ihr mich wieder?“. Der Mann stoppt und zieht seine Maske ab…",
            image: "images/reveal.gif",
            choices: [
                { text: "weiter…", next: "befreiung_selbst4" },
          ]
        },
        befreiung_selbst4: {
            text: "Chris, jessica und Sam trauen ihren Augen nicht. Das ist unmöglich.",
            image: "images/reveal.gif",
            choices: [
                { text: "weiter…", next: "befreiung_selbst5" },
          ]
        },
        befreiung_selbst5: {
            text: "Der Mann offenbart sich als den eigentlich toten Josh. Er war es, der die ganze Zeit dahintersteckte.",
            image: "images/reveal.gif",
            choices: [
                { text: "weiter…", next: "befreiung_selbst6" },
          ]
        },
        befreiung_selbst6: {
            text: "Nachdem er sich zu erkennen gegeben hat, lacht Josh laut vor sich hin.",
            image: "images/reveal_2.gif",
            choices: [
                { text: "weiter…", next: "befreiung_selbst7" },
          ]
        },
        befreiung_selbst7: {
            text: "Er sagt ihnen, dass sie sich genauso fühlen sollen, wie sich Hannah ein Jahr vorher gefühlt hat. Er hat seinen Tod gefälscht und die „übernatürlichen“ Ereignisse kontrolliert, die geschehen sind.",
            image: "images/reveal_2.gif",
            choices: [
                { text: "weiter…", next: "befreiung_selbst8" },
          ]
        },
        befreiung_selbst8: {
            text: "„Ihr werdet alle Internet-Sensationen sein, ich habe all die peinlichen Szenen von euch veröffentlicht“. Josh lacht und zeigt absolut keine Reue.",
            image: "images/reveal_2.gif",
            choices: [
                { text: "weiter…", next: "befreiung_selbst9" },
          ]
        },
        befreiung_selbst9: {
            text: "Chris ist sauer. Es verlangt ihm alles ab, nicht handgreiflich zu werden.",
            image: "images/reveal_2.gif",
            choices: [
                { text: "Handgreiflich werden", next: "gewalt_selbst" },
                { text: "Runter kommen", next: "ruhe_selbst" },
          ]
        },
        gewalt_selbst: {
            text: "Seine Wut war am Ausfachen, sodass er Josh kurze Zeit später bewusstlos schlägt. Chris muss von den beiden Mädchen gestoppt werden.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "gewalt_selbst1" },
          ]
        },
        gewalt_selbst1: {
            text: "Zusammen ziehen sie den bewusstlosen Josh in den Schuppen und binden ihn an einen klapprigen Stuhl.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "fremde_selbst" },
          ]
        },
        ruhe_selbst: {
            text: "Chris möchte nicht genauso sein wie Josh. Er beschließt Josh, Mithilfe von Sam und Jessica zu fesseln.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "ruhe_selbst1" },
          ]
        },
        ruhe_selbst1: {
            text: "Zusammen ziehen sie den gefesselten Josh in den Schuppen und binden ihn an einen klapprigen Stuhl, damit er nichts mehr anstellen kann.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "fremde_selbst" },
          ]
        },
        fremde_selbst: {
            text: "Das Hämmern an die Tür des Schuppens lässt alle vier aufschrecken. Chris, die zwei Mädchen und Josh bleiben erstmal still.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "fremde_selbst1" },
          ]
        },
        fremde_selbst1: {
            text: "Josh, der noch reden kann, zeigt Chris das Geheimversteck für seine echte Pistole, die er hier im Schuppen versteckt hält. Chris sucht diese schnell, findet sie und lädt sie.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "fremde_selbst2" },
          ]
        },
        fremde_selbst2: {
            text: "Bevor er die Tür zum Schuppen öffnen kann, hat der Fremde schon die Tür aufgetreten und entwaffnet sofort den überraschten Chris. Selbst die Mädchen kommen aus ihrem Versteck, um Chris zu schützen.",
            image: "images/fremder_3.gif",
            choices: [
                { text: "weiter…", next: "fremde_selbst3" },
          ]
        },
        fremde_selbst3: {
            text: "Der Fremde hebt seine Hände. „Das wollt ihr nicht tun. Lasst mich erst erklären.“ Chris nickt und lässt den Fremden erklären.",
            image: "images/fremder_4.gif",
            choices: [
                { text: "weiter…", next: "fremde_selbst4" },
          ]
        },
        fremde_selbst4: {
            text: "„Da ist etwas… da draußen. Es ist nicht menschlich und auch nicht animalisch. Es ist tötlich und extrem gefährlich. Also… rate ich euch, mir zu vertrauen, denn ich weiß was diese Dinger sind“.",
            image: "images/fremder_4.gif",
            choices: [
                { text: "weiter…", next: "fremde_selbst5" },
          ]
        },
        fremde_selbst5: {
            text: "Er erklärt ihnen, dass ein sogenannter 'Wendigo' ein Mensch ist, der durch Kannibalismus auf dem Blackwood Mountain vom Wendigo Geist eingenommen wurde. „Fragt nicht, woher ich das alles weiß. Ich habe schon zu viel erlebt und gesehen, auch eine Verwandlung habe ich beobachtet“.",
            image: "images/fremder_4.gif",
            choices: [
                { text: "weiter…", next: "fremde_selbst6" },
          ]
        },
        fremde_selbst6: {
            text: "Der Wendigo.",
            image: "images/wendigo.gif",
            choices: [
                { text: "weiter…", next: "fremde_selbst7" },
          ]
        },
        fremde_selbst7: {
            text: "Bei der Verwandlung verändern sich zuerst die Augen und werden milchig weiß, ebenso wie die Haut, welche sich kreidebleich färbt, dick und widerstandsfähig wird. Dann werden die Zähne lang und scharf. Die Kreatur wächst und die Haut spannt sich über die Knochen, dadurch haben sie ein skelettartiges Äußeres.",
            image: "images/wendigo.gif",
            choices: [
                { text: "weiter…", next: "fremde_selbst8" },
          ]
        },
        fremde_selbst8: {
            text: "Es kann jede kleinste Bewegung wahrnehmen und sehr gut riechen, bewegt sich sehr schnell und ruckartig auf allen Vieren. Außerdem kann es ausgezeichnet an Wänden und Decken klettern.",
            image: "images/wendigo.gif",
            choices: [
                { text: "weiter…", next: "fremde_selbst9" },
          ]
        },
        fremde_selbst9: {
            text: "Haut und Fleisch eines Wendigo sind wie ein Panzer. Ein Flammenwerfer ist die geeigneteste Waffe gegen einen Wendigo, denn es fürchtet das Feuer. Schrotflinten verlangsamt es nur. Das Monster jagt nur nachts. Dinge, die sich nicht bewegen, kann es nicht sehen.",
            image: "images/wendigo.gif",
            choices: [
                { text: "weiter…", next: "fremde_selbst10" },
          ]
        },
        fremde_selbst10: {
            text: "Chris beschließt, mit dem Fremden Richtung Hütte zu gehen, um weitere Informationen zu erlangen.",
            image: "images/fremder_2.gif",
            choices: [
                { text: "weiter…", next: "fremde_selbst11" },
          ]
        },
        fremde_selbst11: {
            text: "Jessica und Sam rennen vorraus.",
            image: "images/fremder_2.gif",
            choices: [
                { text: "weiter…", next: "fremde_selbst12" },
          ]
        },
        fremde_selbst12: {
            text: "Plötzlich hören Chris und der Fremde einen Schrei aus dem Schuppen, in dem Josh gefesselt ist. Sie rennen zurück, nur um einen zerbrochenen Hocker, ohne Josh zu finden.",
            image: "images/fremder_2.gif",
            choices: [
                { text: "weiter…", next: "fremde_selbst13" },
          ]
        },
        fremde_selbst13: {
            text: "Chris will gleich nach Josh suchen, doch der Fremde empfiehlt ihm, zurück zu Loge zu gehen, da Wendigos in der Nähe sind.",
            image: "images/fremder_2.gif",
            choices: [
                { text: "weiter…", next: "fremde_selbst14" },
          ]
        },
        fremde_selbst14: {
            text: "Während des Rückwegs, bleibt der Fremde plötzlich stehen. „Nicht bewegen“.",
            image: "images/fremder_2.gif",
            choices: [
                { text: "Bewegen", next: "bewegen_selbst" },
                { text: "Stehen bleiben", next: "bleiben_selbst" },
          ]
        },
        bewegen_selbst: {
            text: "Chris hört nicht auf den Fremden und läuft weiter. Der schrille, laute Schrei eines Wendigos und das Geräusch von Fleisch und Knochen, lässt Chris erstarren. Der Wendigo hat den Fremden enthauptet. Das Blut färbt den Schnee um dessen Leiche rot.",
            image: "images/fremder_tod.gif",
            choices: [
                { text: "weiter…", next: "bewegen_selbst1" },
          ]
        },
        bewegen_selbst1: {
            text: "Der Fremde ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "angst_selbst" },
          ]
        },
        bleiben_selbst: {
            text: "Chris hört auf den Fremden und stoppt sofort, doch der schrille, laute Schrei eines Wendigos und das Geräusch von Fleisch und Knochen, lässt Chriss erstarren. Der Wendigo hat den Fremden enthauptet. Das Blut färbt den Schnee um dessen Leiche rot.",
            image: "images/fremder_tod.gif",
            choices: [
                { text: "weiter…", next: "bleiben_selbst1" },
          ]
        },
        bleiben_selbst1: {
            text: "Der Fremde ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "angst_selbst" },
          ]
        },
        angst_selbst: {
            text: "Chris wird panisch, schnappt sich die Waffe des Fremden und rennt.",
            image: "images/wendigo_verfolgung.gif",
            choices: [
                { text: "Pistole benutzen", next: "benutzen_selbst" },
                { text: "Weiterrennen", next: "weiter_selbst" },
          ]
        },
        benutzen_selbst: {
            text: "Nach ein paar Sekunden dreht er sich um und sieht den Wendigo auf sich zu sprinten. In dem Moment stürzt Chris zu Boden. Die Waffe, welche er dem Fremden abgenommen hatte, hält er fest in den Händen.",
            image: "images/chris_schießen.gif",
            choices: [
                { text: "weiter…", next: "benutzen_selbst1" },
          ]
        },
        benutzen_selbst1: {
            text: "Er schießt auf den Wendigo. Die Kugeln prallen zwar ab, dennoch verscheuchte es das Monster für einen Moment und er konnte weiter zum Hütteneingang sprinten.",
            image: "images/chris_schießen_2.gif",
            choices: [
                { text: "weiter…", next: "benutzen_selbst2" },
          ]
        },
        benutzen_selbst2: {
            text: "Jessica wartet bereits auf ihn.",
            image: "images/chris_tod.gif",
            choices: [
                { text: "weiter…", next: "benutzen_selbst3" },
          ]
        },
        benutzen_selbst3: {
            text: "Sie öffnet schnell die Tür, als Chris bei ihr ankam. Sie rettet ihm sein Leben. Jessica küsst ihn.",
            image: "images/kuss.jpg",
            choices: [
                { text: "weiter…", next: "leben_selbst" },
          ]
        },
        weiter_selbst: {
            text: "Er rennt weiter, seine Hoffnung ist die Tür zu erreichen, ohne die Pistole verwenden zu müssen. Diese hat ja sowieso keine Wirkung auf den Wendigo.",
            image: "images/wendigo_verfolgung.gif",
            choices: [
                { text: "weiter…", next: "weiter_selbst1" },
          ]
        },
        weiter_selbst1: {
            text: "Er rennt weiter, schaut mehrmals nach hinten, bis er das Monster nicht sehen kann. Das ist auch das letzte, was er mitbekommt.",
            image: "images/wendigo_verfolgung.gif",
            choices: [
                { text: "weiter…", next: "weiter_selbst2" },
          ]
        },
        weiter_selbst2: {
            text: "Denn der Wendigo hat zum Sprung angesetzt und in der Luft reißt dieser, Chris den Kopf ab. Danach macht der Wendigo sich an das frische Fleisch zu schaffen.",
            image: "images/chris_tod_2.gif",
            choices: [
                { text: "weiter…", next: "weiter_selbst3" },
          ]
        },
        weiter_selbst3: {
            text: "Jessica die auf ihn wartet, sieht alles mit an.",
            image: "images/chris_tod_2.gif",
            choices: [
                { text: "weiter…", next: "weiter_selbst4" },
          ]
        },
        weiter_selbst4: {
            text: "Vor lauter Trauer und Verzweiflung fängt sie an zu weinen. Sie ist durch seinen Tod am Boden zerstört.",
            image: "images/chris_tod_2.gif",
            choices: [
                { text: "weiter…", next: "weiter_selbst5" },
          ]
        },
        weiter_selbst5: {
            text: "Chris ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "Geschichte neu beginnen", next: "start" },
          ]
        },
        leben_selbst: {
            text: "Chris, Sam und Jessica betreten den Keller und Sam fragt, wo der Fremde ist. Chris erzählt ihr von dem Tod des Fremden.",
            image: "images/keller_1.jpg",
            choices: [
                { text: "weiter…", next: "leben_selbst1" },
          ]
        },
        leben_selbst1: {
            text: "Im Keller beschließt Chris, nach Josh und einem Ausgang zu suchen, falls ein Wendigo einbricht. Sam versucht ihn zu überzeugen, dass sie alle bis zum Morgengrauen im Keller bleiben sollen.",
            image: "images/keller_1.jpg",
            choices: [
                { text: "Im Keller bleiben", next: "keller_selbst" },
                { text: "Nach Josh suchen", next: "josh_suche_selbst" },
          ]
        },
        keller_selbst: {
            text: "Sie bleiben bis auf weiteres im Keller, bis Chris bemerkte, dass Josh den Schlüssel zur Seilbahn hat. Diesen brauchen sie, um fliehen zu können.",
            image: "images/keller_1.jpg",
            choices: [
                { text: "weiter…", next: "keller_selbst1" },
          ]
        },
        keller_selbst1: {
            text: "Nach einem langen hin und her entschloss sich Chris doch nach Josh zu suchen, um auch den Schlüssel zu finden.",
            image: "images/keller_1.jpg",
            choices: [
                { text: "weiter…", next: "pause_selbst" },
          ]
        },
        josh_suche_selbst: {
            text: "Sam kommt die Vermutung, dass der Wendigo Josh wahrscheinlich in die Minen gebracht hat.",
            image: "images/keller_1.jpg",
            choices: [
                { text: "weiter…", next: "josh_suche_selbst1" },
          ]
        },
        josh_suche_selbst1: {
            text: "Als sie sich wieder hinaus trauen, finden sie eine Karte und die Habseligkeiten des Fremden. Chris entschließt sich nach Josh zu suchen, um auch den Schlüssel zu finden.",
            image: "images/wald_2.gif",
            choices: [
                { text: "weiter…", next: "pause_selbst" },
          ]
        },
        pause_selbst: {
            text: "Sie gehen los und sind fest davon überzeugt Josh zu finden.",
            image: "images/wald_2.gif",
            choices: [
                { text: "weiter…", next: "pause_selbst1" },
          ]
        },
        pause_selbst1: {
            text: "Nach langem laufen braucht Chris eine Pause. Er hält an, wobei die anderen Zwei noch ein Stückchen weiterlaufen, da sie tief im Gespräch verwickelt sind.",
            image: "images/wald_2.gif",
            choices: [
                { text: "weiter…", next: "pause_selbst2" },
          ]
        },
        pause_selbst2: {
            text: "Als er weiterlaufen will, sieht er Kanalrohre und läuft hinunter. Plötzlich hört er, dass jemand nach Hilfe ruft. Es hört sich nach Josh's Stimme an, es muss er sein.",
            image: "images/kanalrohr.jpg",
            choices: [
                { text: "Stimme folgen", next: "stimme_selbst" },
                { text: "Zurück zur Gruppe laufen", next: "gruppe_selbst" },
          ]
        },
        stimme_selbst: {
            text: "Chris folgt Josh's Stimme und geht in eines der Kanalrohre hinein. Auf seinem Weg entdeckt er eine große Blutpfütze, woraufhin er direkt kehrt macht. Es kommt ihm doch etwas ungeheuer vor.",
            image: "images/kanalrohr.jpg",
            choices: [
                { text: "weiter…", next: "stimme_selbst1" },
          ]
        },
        stimme_selbst1: {
            text: "Plötzlich steht ein ausgewachsener Wendigo vor ihm, welcher ihn sofort den Brustkorb aufreißt.",
            image: "images/chris_tod_3.gif",
            choices: [
                { text: "weiter…", next: "stimme_selbst2" },
          ]
        },
        stimme_selbst2: {
            text: "Jessica und Sam laufen zurück, wo sie Chris das letzte Mal gesehen haben. Doch von ihm keine Spur.",
            image: "images/chris_tod_3.gif",
            choices: [
                { text: "weiter…", next: "stimme_selbst3" },
          ]
        },
        stimme_selbst3: {
            text: "In weiter Entfernung ist nur ein schriller Schrei eines Wendigo zu hören.",
            image: "images/chris_tod_3.gif",
            choices: [
                { text: "weiter…", next: "stimme_selbst4" },
          ]
        },
        stimme_selbst4: {
            text: "Vor lauter Trauer und Verzweiflung fangen sie an zu weinen. Sie sind durch seinen Tod am Boden zerstört.",
            image: "images/chris_tod_3.gif",
            choices: [
                { text: "weiter…", next: "stimme_selbst5" },
          ]
        },
        stimme_selbst5: {
            text: "Chris ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "Geschichte neu beginnen", next: "start" },
          ]
        },
        gruppe_selbst: {
            text: "Ein komisches Gefühl in der Magengrube macht sich breit und er beginnt schnell weiterzulaufen. Nach ein paar Minuten holt er Jessica und Sam wieder ein und kehrt unversehrt zur Gruppe zurück.",
            image: "images/wald_2.gif",
            choices: [
                { text: "weiter…", next: "minen_selbst" },
          ]
        },
        minen_selbst: {
            text: "Sie erreichen die Minen und gehen hinein.",
            image: "images/mine.gif",
            choices: [
                { text: "weiter…", next: "minen_selbst1" },
          ]
        },
        minen_selbst1: {
            text: "In der Mine angekommen waten durch eiskaltes Wasser zur anderen Seite. Sobald sie es auf die andere Seite geschafft haben, öffnet Chris eine Metalltür.",
            image: "images/mine.gif",
            choices: [
                { text: "weiter…", next: "minen_selbst2" },
          ]
        },
        minen_selbst2: {
            text: "Sie finden einen unruhigen Josh mit einem mentalen Zusammenbruch.",
            image: "images/josh_verwirrt.gif",
            choices: [
                { text: "weiter…", next: "minen_selbst3" },
          ]
        },
        minen_selbst3: {
            text: "Nachdem sie den Schlüssel für die Seilbahn von Josh bekommen haben, machen sie sich auf den Weg raus aus der Mine. Chris hilft Josh durch das Wasser zu laufen. Dieser scheint ziemlich geschwächt zu sein.",
            image: "images/josh_verwirrt.gif",
            choices: [
                { text: "weiter…", next: "minen_selbst4" },
          ]
        },
        minen_selbst4: {
            text: "Etwa auf halbem Weg, wird Chris plötzlich unter Wasser gezogen.",
            image: "images/josh_tod.gif",
            choices: [
                { text: "weiter…", next: "minen_selbst5" },
          ]
        },
        minen_selbst5: {
            text: "Jessica und Sam verstecken sich hinter einem Felsen. Josh ist dem Wendigo nun schutzlos ausgeliefert.",
            image: "images/josh_tod.gif",
            choices: [
                { text: "weiter…", next: "minen_selbst6" },
          ]
        },
        minen_selbst6: {
            text: "Der Schrei des Wendigo hallt durch die Mine. Er nähert sich Josh und er sieht ein Tattoo am rechten Oberarm des Wendigos. Er erkennt es.",
            image: "images/josh_tod_2.gif",
            choices: [
                { text: "weiter…", next: "minen_selbst7" },
          ]
        },
        minen_selbst7: {
            text: "„ES IST HANNAH“ sind die letzten Worte die Josh brüllen kann, bevor der Wendigo ihm seinen Kopf abreißt.",
            image: "images/josh_tod_2.gif",
            choices: [
                { text: "weiter…", next: "minen_selbst8" },
          ]
        },
        minen_selbst8: {
            text: "Josh ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "minen_selbst9" },
          ]
        },
        minen_selbst9: {
            text: "Chris, der sich von dem Griff des Wendigos befreien konnte, zieht sich mit aller Kraft ein paar Meter aus dem Wasser. Er rennt vor dem Wendigo weg, nur noch den letzten Satz von Josh hört er.",
            image: "images/lodge.gif",
            choices: [
                { text: "weiter…", next: "minen_selbst10" },
          ]
        },
        minen_selbst10: {
            text: "Er rennt, bis er die Lodge sieht. Er geht zur Hintertür der Lodge und versucht zu klopfen mit der Hoffnung, dass Sam und Jessica schon in der Hütte sind. Aber es macht niemand auf.",
            image: "images/lodge.gif",
            choices: [
                { text: "weiter…", next: "minen_selbst11" },
          ]
        },
        minen_selbst11: {
            text: "Jessica und Sam erschrecken Chris, als sie hinter ihm erscheinen. Chris erzählt ihnen, dass Josh tot sei und der Wendigo Hannah ist. Eine der Zwillingsschwestern von Josh.",
            image: "images/lodge.gif",
            choices: [
                { text: "weiter…", next: "minen_selbst12" },
          ]
        },
        minen_selbst12: {
            text: "Jessica und Sam sind geschockt. Das ist das Letzte mit dem sie gerechnet haben.",
            image: "images/lodge.gif",
            choices: [
                { text: "weiter…", next: "minen_selbst13" },
          ]
        },
        minen_selbst13: {
            text: "Nachdem sie sich beruhigt haben, betreten sie die Lodge erneut und Sam versucht das Licht anzuschalten. Chris ist nicht wohl dabei.",
            image: "images/lodge.gif",
            choices: [
                { text: "Sam Licht anschalten lassen", next: "licht_selbst" },
                { text: "Sam daran hindern", next: "hindern_selbst" },
          ]
        },
        licht_selbst: {
            text: "Chris hat die Angst, dass sich der Wendigo schon im Haus befindet. Sie haben vom Fremden gelernt, dass die Viecher ziemlich schnell sind.",
            image: "images/sam_still.gif",
            choices: [
                { text: "weiter…", next: "licht_selbst1" },
          ]
        },
        licht_selbst1: {
            text: "Er stoppt Sam und macht ihr klar, dass sie still bleiben und sich nicht bewegen soll.",
            image: "images/sam_still.gif",
            choices: [
                { text: "weiter…", next: "hindern_selbst" },
          ]
        },
        hindern_selbst: {
            text: "Chris ist einfach froh wieder in der Logde angekommen zu sein. Hier drin kann ihnen nichts passieren. Er lässt es zu, dass Sam sich zum Licht bewegt.",
            image: "images/lodge.gif",
            choices: [
                { text: "weiter…", next: "hindern_selbst1" },
          ]
        },
        hindern_selbst1: {
            text: "Als sie es anschaltet, erkennt Chris, dass Hannah's Wendigo an einem der großen Kronleuchter hängt und brüllt.",
            image: "images/lodge.gif",
            choices: [
                { text: "weiter…", next: "hindern_selbst2" },
          ]
        },
        hindern_selbst2: {
            text: "Sam's Bewegungen machten den Wendigo auf sie aufmerksam.",
            image: "images/sam_flucht.gif",
            choices: [
                { text: "Sam retten", next: "retten_selbst" },
                { text: "Sam nicht retten", next: "nicht_retten_selbst" },
          ]
        },
        retten_selbst: {
            text: "Vor lauter Schreck macht Sam das Licht wieder aus.",
            image: "images/sam_flucht.gif",
            choices: [
                { text: "weiter…", next: "retten_selbst1" },
          ]
        },
        retten_selbst1: {
            text: "Als der Wendigo Sam töten will, rennt Chris dazwischen. Dieser wird zur Seite geworfen und der Wendigo war nicht mehr auf Sam fokussiert, sondern auf etwas ganz anderes.",
            image: "images/sam_flucht.gif",
            choices: [
                { text: "weiter…", next: "lärm_selbst" },
          ]
        },
        nicht_retten_selbst: {
            text: "Chris rührt sich nicht von der Stelle und so bekommt der Wendigo nur etwas von Sam mit.",
            image: "images/sam_tod.gif",
            choices: [
                { text: "weiter…", next: "nicht_retten_selbst1" },
          ]
        },
        nicht_retten_selbst1: {
            text: "Der Wendigo rennt auf Sam zu und reißt mit einer Klaue Sam den Unterleib auf. Sie stirbt sofort.",
            image: "images/sam_tod.gif",
            choices: [
                { text: "weiter…", next: "nicht_retten_selbst2" },
          ]
        },
        nicht_retten_selbst2: {
            text: "Sam ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "lärm_selbst" },
          ]
        },
        lärm_selbst: {
            text: "Der Lärm, zieht weitere Wendigos an, wobei Hannah von allen am Stärksten ausschaut. Vor den Augen der Freunde beginnt sie die anderen Wendigos zu bekämpfen.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "lärm_selbst1" },
          ]
        },
        lärm_selbst1: {
            text: "Sie überwältigt einen und wirft den Toten mit abgerissenem Kopf gegen ein Rohr. Das Rohr bricht auf und Gas wird in der Lodge freisetzt.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "lärm_selbst2" },
          ]
        },
        lärm_selbst2: {
            text: "Chris bemerkt das und geht langsam zu einer Glühbirne, ohne von Hannah gesehen zu werden. Denn diese wird von den anderen Wendigos abgelenkt.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "lärm_selbst3" },
          ]
        },
        lärm_selbst3: {
            text: "Jetzt muss nur noch einer das Gas durch ein Feuerzeug oder, durch den Lichtschalter entfachen. Chris schaut zu Jessica.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "Teamwork", next: "teamwork_selbst" },
                { text: "Allein", next: "allein_selbst" },
          ]
        },
        teamwork_selbst: {
            text: "Hannah und die anderen Wendigos sind stark mit sich selbst beschäftigt. So können sie die Zeit nutzen, um einen kurzen Plan zu feilschen.",
            image: "images/sam_schalter.gif",
            choices: [
                { text: "weiter…", next: "teamwork_selbst1" },
          ]
        },
        teamwork_selbst1: {
            text: "Jessica soll zum Schalter rennen und wenn sie diesen umgelegt hat rennen sie sofort aus der Lodge.",
            image: "images/sam_schalter.gif",
            choices: [
                { text: "weiter…", next: "teamwork_selbst2" },
          ]
        },
        teamwork_selbst2: {
            text: "Sie einigen sich darauf und positionieren sich.",
            image: "images/sam_schalter.gif",
            choices: [
                { text: "weiter…", next: "rettung_selbst" },
          ]
        },
        allein_selbst: {
            text: "Ohne sich mit den Anderen abzusprechen, schreit er „RENN SOFORT RAUS“.",
            image: "images/sam_schalter.gif",
            choices: [
                { text: "weiter…", next: "allein_selbst1" },
          ]
        },
        allein_selbst1: {
            text: "Der Wendigo ist sofort wieder bei ihm und wirft ihn ein zweites Mal gegen eine Säule. Er schreit noch einmal „JETZT RENN“.",
            image: "images/sam_schalter.gif",
            choices: [
                { text: "weiter…", next: "allein_selbst2" },
          ]
        },
        allein_selbst2: {
            text: "Sie rennt los, die Wendigos hinterher. Doch sie erreichen Jessica nicht im Geringsten, denn als Jessica den Ausgang so gut wie erreicht hat, zieht Chris aus seiner Hosentasche ein Feuerzeug und sprengt die Lodge Mithilfe des Gases in die Luft.",
            image: "images/jumpscare.gif",
            choices: [
                { text: "weiter…", next: "allein_selbst3" },
          ]
        },
        allein_selbst3: {
            text: "Die Wucht der Explosion schleudert Jessica nach draußen. Die Lodge steht in Flammen und das Einzige was Jessica hören kann, sind die schrillen Schreie der brennenden Wendigos.",
            image: "images/explosion.gif",
            choices: [
                { text: "weiter…", next: "allein_selbst4" },
          ]
        },
        allein_selbst4: {
            text: "Chris hat sich für Jessica geopfert.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "rettung_selbst" },
          ]
        },
        rettung_selbst: {
            text: "Jessica steht benommen vor der brennenden Lodge. Das Geräusch eines Helikopters ist in der Ferne zu hören.",
            image: "images/ende.jpg",
            choices: [
                { text: "weiter…", next: "rettung_selbst1" },
          ]
        },
        rettung_selbst1: {
            text: "Der Rauch des Feuers steigt in den Himmel. Jessica wird gerettet.",
            image: "images/ende.jpg",
            choices: [
                { text: "weiter…", next: "rettung_selbst2" },
          ]
        },
        rettung_selbst2: {
            text: "Die Sonne geht auf und die Nacht verblasst.",
            image: "images/ende.jpg",
            choices: [
                { text: "Geschichte neu beginnen", next: "" },
          ]
        },




        nichts: {
            text: "Die Säge nähert sich Chris und Jessica's Köpfen. Jessica fängt vor Panik an zu schreien, doch dann wird der Raum schlagartig dunkel.",
            image: "images/schwer_5.jpg",
            choices: [
                { text: "weiter…", next: "nichts1" },
          ]
        },
        nichts1: {
            text: "Beide stehen unter Schock. Eine Weile passiert nichts, obwohl die beiden sich drauf ein gestellt haben, hier zusammen zu sterben.",
            image: "images/schwer_5.jpg",
            choices: [
                { text: "weiter…", next: "nichts2" },
          ]
        },
        nichts2: {
            text: "Die Stimme reißt Chris aus seinen Gedanken. „Lieber Chris, du hast eine gute Wahl getroffen“. Chris und Jessica sind verwirrt.",
            image: "images/schwer_5.jpg",
            choices: [
                { text: "weiter…", next: "befreiung_nichts" },
          ]
        },
        befreiung_nichts: {
            text: "Beide befreien sich aus den Seilen, mit denen sie an die Stühle gebunden wurden. Chris sieht Sam und rennt zu ihr. Sam sitzt festgebunden auf einem Stuhl.",
            image: "images/schwer_5.jpg",
            choices: [
                { text: "weiter…", next: "befreiung_nichts1" },
          ]
        },
        befreiung_nichts1: {
            text: "Während Chris Sam entfesselt, nähert sich der Unbekannte von hinten. Doch Sam sieht ihn kommen. Sie warnt Jessica und Chris.",
            image: "images/psycho.gif",
            choices: [
                { text: "weiter…", next: "befreiung_nichts2" },
          ]
        },
        befreiung_nichts2: {
            text: "Alle drei drehen sich zu dem Mann um.",
            image: "images/psycho.gif",
            choices: [
                { text: "weiter…", next: "befreiung_nichts3" },
          ]
        },
        befreiung_nichts3: {
            text: "Der Mann kommt langsam auf sie zu. „Erkennt ihr mich wieder?“. Der Mann stoppt und zieht seine Maske ab…",
            image: "images/reveal.gif",
            choices: [
                { text: "weiter…", next: "befreiung_nichts4" },
          ]
        },
        befreiung_nichts4: {
            text: "Chris, jessica und Sam trauen ihren Augen nicht. Das ist unmöglich.",
            image: "images/reveal.gif",
            choices: [
                { text: "weiter…", next: "befreiung_nichts5" },
          ]
        },
        befreiung_nichts5: {
            text: "Der Mann offenbart sich als den eigentlich toten Josh. Er war es, der die ganze Zeit dahintersteckte.",
            image: "images/reveal.gif",
            choices: [
                { text: "weiter…", next: "befreiung_nichts6" },
          ]
        },
        befreiung_nichts6: {
            text: "Nachdem er sich zu erkennen gegeben hat, lacht Josh laut vor sich hin.",
            image: "images/reveal_2.gif",
            choices: [
                { text: "weiter…", next: "befreiung_nichts7" },
          ]
        },
        befreiung_nichts7: {
            text: "Er sagt ihnen, dass sie sich genauso fühlen sollen, wie sich Hannah ein Jahr vorher gefühlt hat. Er hat seinen Tod gefälscht und die „übernatürlichen“ Ereignisse kontrolliert, die geschehen sind.",
            image: "images/reveal_2.gif",
            choices: [
                { text: "weiter…", next: "befreiung_nichts8" },
          ]
        },
        befreiung_nichts8: {
            text: "„Ihr werdet alle Internet-Sensationen sein, ich habe all die peinlichen Szenen von euch veröffentlicht“. Josh lacht und zeigt absolut keine Reue.",
            image: "images/reveal_2.gif",
            choices: [
                { text: "weiter…", next: "befreiung_nichts9" },
          ]
        },
        befreiung_nichts9: {
            text: "Chris ist sauer. Es verlangt ihm alles ab, nicht handgreiflich zu werden.",
            image: "images/reveal_2.gif",
            choices: [
                { text: "Handgreiflich werden", next: "gewalt_nichts" },
                { text: "Runter kommen", next: "ruhe_nichts" },
          ]
        },
        gewalt_nichts: {
            text: "Seine Wut war am Ausfachen, sodass er Josh kurze Zeit später bewusstlos schlägt. Chris muss von den beiden Mädchen gestoppt werden.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "gewalt_nichts1" },
          ]
        },
        gewalt_nichts1: {
            text: "Zusammen ziehen sie den bewusstlosen Josh in den Schuppen und binden ihn an einen klapprigen Stuhl.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "fremde_nichts" },
          ]
        },
        ruhe_nichts: {
            text: "Chris möchte nicht genauso sein wie Josh. Er beschließt Josh, Mithilfe von Sam und Jessica zu fesseln.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "ruhe_nichts1" },
          ]
        },
        ruhe_nichts1: {
            text: "Zusammen ziehen sie den gefesselten Josh in den Schuppen und binden ihn an einen klapprigen Stuhl, damit er nichts mehr anstellen kann.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "fremde_nichts" },
          ]
        },
        fremde_nichts: {
            text: "Das Hämmern an die Tür des Schuppens lässt alle vier aufschrecken. Chris, die zwei Mädchen und Josh bleiben erstmal still.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "fremde_nichts1" },
          ]
        },
        fremde_nichts1: {
            text: "Josh, der noch reden kann, zeigt Chris das Geheimversteck für seine echte Pistole, die er hier im Schuppen versteckt hält. Chris sucht diese schnell, findet sie und lädt sie.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "fremde_nichts2" },
          ]
        },
        fremde_nichts2: {
            text: "Bevor er die Tür zum Schuppen öffnen kann, hat der Fremde schon die Tür aufgetreten und entwaffnet sofort den überraschten Chris. Selbst die Mädchen kommen aus ihrem Versteck, um Chris zu schützen.",
            image: "images/fremder_3.gif",
            choices: [
                { text: "weiter…", next: "fremde_nichts3" },
          ]
        },
        fremde_nichts3: {
            text: "Der Fremde hebt seine Hände. „Das wollt ihr nicht tun. Lasst mich erst erklären.“ Chris nickt und lässt den Fremden erklären.",
            image: "images/fremder_4.gif",
            choices: [
                { text: "weiter…", next: "fremde_nichts4" },
          ]
        },
        fremde_nichts4: {
            text: "„Da ist etwas… da draußen. Es ist nicht menschlich und auch nicht animalisch. Es ist tötlich und extrem gefährlich. Also… rate ich euch, mir zu vertrauen, denn ich weiß was diese Dinger sind“.",
            image: "images/fremder_4.gif",
            choices: [
                { text: "weiter…", next: "fremde_nichts5" },
          ]
        },
        fremde_nichts5: {
            text: "Er erklärt ihnen, dass ein sogenannter 'Wendigo' ein Mensch ist, der durch Kannibalismus auf dem Blackwood Mountain vom Wendigo Geist eingenommen wurde. „Fragt nicht, woher ich das alles weiß. Ich habe schon zu viel erlebt und gesehen, auch eine Verwandlung habe ich beobachtet“.",
            image: "images/fremder_4.gif",
            choices: [
                { text: "weiter…", next: "fremde_nichts6" },
          ]
        },
        fremde_nichts6: {
            text: "Der Wendigo.",
            image: "images/wendigo.gif",
            choices: [
                { text: "weiter…", next: "fremde_nichts7" },
          ]
        },
        fremde_nichts7: {
            text: "Bei der Verwandlung verändern sich zuerst die Augen und werden milchig weiß, ebenso wie die Haut, welche sich kreidebleich färbt, dick und widerstandsfähig wird. Dann werden die Zähne lang und scharf. Die Kreatur wächst und die Haut spannt sich über die Knochen, dadurch haben sie ein skelettartiges Äußeres.",
            image: "images/wendigo.gif",
            choices: [
                { text: "weiter…", next: "fremde_nichts8" },
          ]
        },
        fremde_nichts8: {
            text: "Es kann jede kleinste Bewegung wahrnehmen und sehr gut riechen, bewegt sich sehr schnell und ruckartig auf allen Vieren. Außerdem kann es ausgezeichnet an Wänden und Decken klettern.",
            image: "images/wendigo.gif",
            choices: [
                { text: "weiter…", next: "fremde_nichts9" },
          ]
        },
        fremde_nichts9: {
            text: "Haut und Fleisch eines Wendigo sind wie ein Panzer. Ein Flammenwerfer ist die geeigneteste Waffe gegen einen Wendigo, denn es fürchtet das Feuer. Schrotflinten verlangsamt es nur. Das Monster jagt nur nachts. Dinge, die sich nicht bewegen, kann es nicht sehen.",
            image: "images/wendigo.gif",
            choices: [
                { text: "weiter…", next: "fremde_nichts10" },
          ]
        },
        fremde_nichts10: {
            text: "Chris beschließt, mit dem Fremden Richtung Hütte zu gehen, um weitere Informationen zu erlangen.",
            image: "images/fremder_2.gif",
            choices: [
                { text: "weiter…", next: "fremde_nichts11" },
          ]
        },
        fremde_nichts11: {
            text: "Jessica und Sam rennen vorraus.",
            image: "images/fremder_2.gif",
            choices: [
                { text: "weiter…", next: "fremde_nichts12" },
          ]
        },
        fremde_nichts12: {
            text: "Plötzlich hören Chris und der Fremde einen Schrei aus dem Schuppen, in dem Josh gefesselt ist. Sie rennen zurück, nur um einen zerbrochenen Hocker, ohne Josh zu finden.",
            image: "images/fremder_2.gif",
            choices: [
                { text: "weiter…", next: "fremde_nichts13" },
          ]
        },
        fremde_nichts13: {
            text: "Chris will gleich nach Josh suchen, doch der Fremde empfiehlt ihm, zurück zu Loge zu gehen, da Wendigos in der Nähe sind.",
            image: "images/fremder_2.gif",
            choices: [
                { text: "weiter…", next: "fremde_nichts14" },
          ]
        },
        fremde_nichts14: {
            text: "Während des Rückwegs, bleibt der Fremde plötzlich stehen. „Nicht bewegen“.",
            image: "images/fremder_2.gif",
            choices: [
                { text: "Bewegen", next: "bewegen_nichts" },
                { text: "Stehen bleiben", next: "bleiben_nichts" },
          ]
        },
        bewegen_nichts: {
            text: "Chris hört nicht auf den Fremden und läuft weiter. Der schrille, laute Schrei eines Wendigos und das Geräusch von Fleisch und Knochen, lässt Chris erstarren. Der Wendigo hat den Fremden enthauptet. Das Blut färbt den Schnee um dessen Leiche rot.",
            image: "images/fremder_tod.gif",
            choices: [
                { text: "weiter…", next: "bewegen_nichts1" },
          ]
        },
        bewegen_nichts1: {
            text: "Der Fremde ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "angst_nichts" },
          ]
        },
        bleiben_nichts: {
            text: "Chris hört auf den Fremden und stoppt sofort, doch der schrille, laute Schrei eines Wendigos und das Geräusch von Fleisch und Knochen, lässt Chriss erstarren. Der Wendigo hat den Fremden enthauptet. Das Blut färbt den Schnee um dessen Leiche rot.",
            image: "images/fremder_tod.gif",
            choices: [
                { text: "weiter…", next: "bleiben_nichts1" },
          ]
        },
        bleiben_nichts1: {
            text: "Der Fremde ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "angst_nichts" },
          ]
        },
        angst_nichts: {
            text: "Chris wird panisch, schnappt sich die Waffe des Fremden und rennt.",
            image: "images/wendigo_verfolgung.gif",
            choices: [
                { text: "Pistole benutzen", next: "benutzen_nichts" },
                { text: "Weiterrennen", next: "weiter_nichts" },
          ]
        },
        benutzen_nichts: {
            text: "Nach ein paar Sekunden dreht er sich um und sieht den Wendigo auf sich zu sprinten. In dem Moment stürzt Chris zu Boden. Die Waffe, welche er dem Fremden abgenommen hatte, hält er fest in den Händen.",
            image: "images/chris_schießen.gif",
            choices: [
                { text: "weiter…", next: "benutzen_nichts1" },
          ]
        },
        benutzen_nichts1: {
            text: "Er schießt auf den Wendigo. Die Kugeln prallen zwar ab, dennoch verscheuchte es das Monster für einen Moment und er konnte weiter zum Hütteneingang sprinten.",
            image: "images/chris_schießen_2.gif",
            choices: [
                { text: "weiter…", next: "benutzen_nichts2" },
          ]
        },
        benutzen_nichts2: {
            text: "Jessica wartet bereits auf ihn.",
            image: "images/chris_tod.gif",
            choices: [
                { text: "weiter…", next: "benutzen_nichts3" },
          ]
        },
        benutzen_nichts3: {
            text: "Sie öffnet schnell die Tür, als Chris bei ihr ankam. Sie rettet ihm sein Leben. Jessica küsst ihn.",
            image: "images/kuss.jpg",
            choices: [
                { text: "weiter…", next: "leben_nichts" },
          ]
        },
        weiter_nichts: {
            text: "Er rennt weiter, seine Hoffnung ist die Tür zu erreichen, ohne die Pistole verwenden zu müssen. Diese hat ja sowieso keine Wirkung auf den Wendigo.",
            image: "images/wendigo_verfolgung.gif",
            choices: [
                { text: "weiter…", next: "weiter_nichts1" },
          ]
        },
        weiter_nichts1: {
            text: "Er rennt weiter, schaut mehrmals nach hinten, bis er das Monster nicht sehen kann. Das ist auch das letzte, was er mitbekommt.",
            image: "images/wendigo_verfolgung.gif",
            choices: [
                { text: "weiter…", next: "weiter_nichts2" },
          ]
        },
        weiter_nichts2: {
            text: "Denn der Wendigo hat zum Sprung angesetzt und in der Luft reißt dieser, Chris den Kopf ab. Danach macht der Wendigo sich an das frische Fleisch zu schaffen.",
            image: "images/chris_tod_2.gif",
            choices: [
                { text: "weiter…", next: "weiter_nichts3" },
          ]
        },
        weiter_nichts3: {
            text: "Jessica die auf ihn wartet, sieht alles mit an.",
            image: "images/chris_tod_2.gif",
            choices: [
                { text: "weiter…", next: "weiter_nichts4" },
          ]
        },
        weiter_nichts4: {
            text: "Vor lauter Trauer und Verzweiflung fängt sie an zu weinen. Sie ist durch seinen Tod am Boden zerstört.",
            image: "images/chris_tod_2.gif",
            choices: [
                { text: "weiter…", next: "weiter_nichts5" },
          ]
        },
        weiter_nichts5: {
            text: "Chris ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "Geschichte neu beginnen", next: "start" },
          ]
        },
        leben_nichts: {
            text: "Chris, Sam und Jessica betreten den Keller und Sam fragt, wo der Fremde ist. Chris erzählt ihr von dem Tod des Fremden.",
            image: "images/keller_1.jpg",
            choices: [
                { text: "weiter…", next: "leben_nichts1" },
          ]
        },
        leben_nichts1: {
            text: "Im Keller beschließt Chris, nach Josh und einem Ausgang zu suchen, falls ein Wendigo einbricht. Sam versucht ihn zu überzeugen, dass sie alle bis zum Morgengrauen im Keller bleiben sollen.",
            image: "images/keller_1.jpg",
            choices: [
                { text: "Im Keller bleiben", next: "keller_nichts" },
                { text: "Nach Josh suchen", next: "josh_suche_nichts" },
          ]
        },
        keller_nichts: {
            text: "Sie bleiben bis auf weiteres im Keller, bis Chris bemerkte, dass Josh den Schlüssel zur Seilbahn hat. Diesen brauchen sie, um fliehen zu können.",
            image: "images/keller_1.jpg",
            choices: [
                { text: "weiter…", next: "keller_nichts1" },
          ]
        },
        keller_nichts1: {
            text: "Nach einem langen hin und her entschloss sich Chris doch nach Josh zu suchen, um auch den Schlüssel zu finden.",
            image: "images/keller_1.jpg",
            choices: [
                { text: "weiter…", next: "pause_nichts" },
          ]
        },
        josh_suche_nichts: {
            text: "Sam kommt die Vermutung, dass der Wendigo Josh wahrscheinlich in die Minen gebracht hat.",
            image: "images/keller_1.jpg",
            choices: [
                { text: "weiter…", next: "josh_suche_nichts1" },
          ]
        },
        josh_suche_nichts1: {
            text: "Als sie sich wieder hinaus trauen, finden sie eine Karte und die Habseligkeiten des Fremden. Chris entschließt sich nach Josh zu suchen, um auch den Schlüssel zu finden.",
            image: "images/wald_2.gif",
            choices: [
                { text: "weiter…", next: "pause_nichts" },
          ]
        },
        pause_nichts: {
            text: "Sie gehen los und sind fest davon überzeugt Josh zu finden.",
            image: "images/wald_2.gif",
            choices: [
                { text: "weiter…", next: "pause_nichts1" },
          ]
        },
        pause_nichts1: {
            text: "Nach langem laufen braucht Chris eine Pause. Er hält an wobei die anderen Zwei noch ein Stückchen weiterlaufen, da sie tief im Gespräch verwickelt sind.",
            image: "images/wald_2.gif",
            choices: [
                { text: "weiter…", next: "pause_nichts2" },
          ]
        },
        pause_nichts2: {
            text: "Als er weiterlaufen will, sieht er Kanalrohre und läuft hinunter. Plötzlich hört er, dass jemand nach Hilfe ruft. Es hört sich nach Josh's Stimme an, es muss er sein.",
            image: "images/kanalrohr.jpg",
            choices: [
                { text: "Stimme folgen", next: "stimme_nichts" },
                { text: "Zurück zur Gruppe laufen", next: "gruppe_nichts" },
          ]
        },
        stimme_nichts: {
            text: "Chris folgt Josh's Stimme und geht in eines der Kanalrohre hinein. Auf seinem Weg entdeckt er eine große Blutpfütze, woraufhin er direkt kehrt macht. Es kommt ihm doch etwas ungeheuer vor.",
            image: "images/kanalrohr.jpg",
            choices: [
                { text: "weiter…", next: "stimme_nichts1" },
          ]
        },
        stimme_nichts1: {
            text: "Plötzlich steht ein ausgewachsener Wendigo vor ihm, welcher ihn sofort den Brustkorb aufreißt.",
            image: "images/chris_tod_3.gif",
            choices: [
                { text: "weiter…", next: "stimme_selbst2" },
          ]
        },
        stimme_nichts2: {
            text: "Jessica und Sam laufen zurück, wo sie Chris das letzte Mal gesehen haben. Doch von ihm keine Spur.",
            image: "images/chris_tod_3.gif",
            choices: [
                { text: "weiter…", next: "stimme_selbst3" },
          ]
        },
        stimme_nichts3: {
            text: "In weiter Entfernung ist nur ein schriller Schrei eines Wendigo zu hören.",
            image: "images/chris_tod_3.gif",
            choices: [
                { text: "weiter…", next: "stimme_selbst4" },
          ]
        },
        stimme_nichts4: {
            text: "Vor lauter Trauer und Verzweiflung fangen sie an zu weinen. Sie sind durch seinen Tod am Boden zerstört.",
            image: "images/chris_tod_3.gif",
            choices: [
                { text: "weiter…", next: "stimme_nichts5" },
          ]
        },
        stimme_nichts5: {
            text: "Chris ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "Geschichte neu beginnen", next: "start" },
          ]
        },
        gruppe_nichts: {
            text: "Ein komisches Gefühl in der Magengrube macht sich breit und er beginnt schnell weiterzulaufen. Nach ein paar Minuten holt er Jessica und Sam wieder ein und kehrt unversehrt zur Gruppe zurück.",
            image: "images/wald_2.gif",
            choices: [
                { text: "weiter…", next: "minen_nichts" },
          ]
        },
        minen_nichts: {
            text: "Sie erreichen die Minen und gehen hinein.",
            image: "images/mine.gif",
            choices: [
                { text: "weiter…", next: "minen_nichts1" },
          ]
        },
        minen_nichts1: {
            text: "In der Mine angekommen waten durch eiskaltes Wasser zur anderen Seite. Sobald sie es auf die andere Seite geschafft haben, öffnet Chris eine Metalltür.",
            image: "images/mine.gif",
            choices: [
                { text: "weiter…", next: "minen_nichts2" },
          ]
        },
        minen_nichts2: {
            text: "Sie finden einen unruhigen Josh mit einem mentalen Zusammenbruch.",
            image: "images/josh_verwirrt.gif",
            choices: [
                { text: "weiter…", next: "minen_nichts3" },
          ]
        },
        minen_nichts3: {
            text: "Nachdem sie den Schlüssel für die Seilbahn von Josh bekommen haben, machen sie sich auf den Weg raus aus der Mine. Chris hilft Josh durch das Wasser zu laufen. Dieser scheint ziemlich geschwächt zu sein.",
            image: "images/josh_verwirrt.gif",
            choices: [
                { text: "weiter…", next: "minen_nichts4" },
          ]
        },
        minen_nichts4: {
            text: "Etwa auf halbem Weg, wird Chris plötzlich unter Wasser gezogen.",
            image: "images/josh_tod.gif",
            choices: [
                { text: "weiter…", next: "minen_nichts5" },
          ]
        },
        minen_nichts5: {
            text: "Jessica und Sam verstecken sich hinter einem Felsen. Josh ist dem Wendigo nun schutzlos ausgeliefert.",
            image: "images/josh_tod.gif",
            choices: [
                { text: "weiter…", next: "minen_nichts6" },
          ]
        },
        minen_nichts6: {
            text: "Der Schrei des Wendigo hallt durch die Mine. Er nähert sich Josh. Josh sieht ein Tattoo am rechten Oberarm des Wendigos. er erkennt es.",
            image: "images/josh_tod_2.gif",
            choices: [
                { text: "weiter…", next: "minen_nichts7" },
          ]
        },
        minen_nichts7: {
            text: "„ES IST HANNAH“ sind die letzten Worte die Josh brüllen kann, bevor der Wendigo ihm seinen Kopf abreißt.",
            image: "images/josh_tod_2.gif",
            choices: [
                { text: "weiter…", next: "minen_nichts8" },
          ]
        },
        minen_nichts8: {
            text: "Josh ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "minen_nichts9" },
          ]
        },
        minen_nichts9: {
            text: "Chris, der sich von dem Griff des Wendigos befreien konnte, zieht sich mit aller Kraft ein paar Meter aus dem Wasser. Er rennt vor dem Wendigo weg, nur noch den letzten Satz von Josh hört er.",
            image: "images/lodge.gif",
            choices: [
                { text: "weiter…", next: "minen_nichts10" },
          ]
        },
        minen_nichts10: {
            text: "Er rennt, bis er die Loge sieht. Er geht zur Hintertür der Lodge und versucht zu klopfen mit der Hoffnung, dass Sam und Jess schon in der Hütte sind. Aber es macht niemand auf.",
            image: "images/lodge.gif",
            choices: [
                { text: "weiter…", next: "minen_nichts11" },
          ]
        },
        minen_nichts11: {
            text: "Jessica und Sam erschrecken Chris, als sie hinter ihm erscheinen. Chris erzählt ihnen, dass Josh tot sei und der Wendigo Hannah ist. Eine der Zwillingsschwestern von Josh.",
            image: "images/lodge.gif",
            choices: [
                { text: "weiter…", next: "minen_nichts12" },
          ]
        },
        minen_nichts12: {
            text: "Jessica und Sam sind geschockt. Das ist das Letzte mit dem sie gerechnet haben.",
            image: "images/lodge.gif",
            choices: [
                { text: "weiter…", next: "minen_nichts13" },
          ]
        },
        minen_nichts13: {
            text: "Nachdem sie sich beruhigt haben, betreten sie die Lodge erneut und Sam versucht das Licht anzuschalten. Chris ist nicht wohl dabei.",
            image: "images/lodge.gif",
            choices: [
                { text: "Sam Licht anschalten lassen", next: "licht_nichts" },
                { text: "Sam daran hindern", next: "hindern_nichts" },
          ]
        },
        licht_nichts: {
            text: "Chris hat die Angst, dass sich der Wendigo schon im Haus befindet. Sie haben vom Fremden gelernt, dass die Viecher ziemlich schnell sind.",
            image: "images/sam_still.gif",
            choices: [
                { text: "weiter…", next: "licht_nichts1" },
          ]
        },
        licht_nichts1: {
            text: "Er stoppt Sam und macht ihr klar, dass sie still bleiben und sich nicht bewegen soll.",
            image: "images/sam_still.gif",
            choices: [
                { text: "weiter…", next: "lärm_nichts" },
          ]
        },
        hindern_nichts: {
            text: "Chris ist einfach froh wieder in der Logde angekommen zu sein. Hier drin kann ihnen nichts passieren. Er lässt es zu, dass Sam sich zum Licht bewegt.",
            image: "images/lodge.gif",
            choices: [
                { text: "weiter…", next: "hindern_nichts1" },
          ]
        },
        hindern_nichts1: {
            text: "Als sie es anschaltet, erkennt Chris, dass Hannah's Wendigo an einem der großen Kronleuchter hängt und brüllt.",
            image: "images/lodge.gif",
            choices: [
                { text: "weiter…", next: "hindern_nichts2" },
          ]
        },
        hindern_nichts2: {
            text: "Sam's Bewegungen machten den Wendigo auf sie aufmerksam.",
            image: "images/sam_flucht.gif",
            choices: [
                { text: "Sam retten", next: "retten_nichts" },
                { text: "Sam nicht retten", next: "nicht_retten_nichts" },
          ]
        },
        retten_nichts: {
            text: "Vor lauter Schreck macht Sam das Licht wieder aus.",
            image: "images/sam_flucht.gif",
            choices: [
                { text: "weiter…", next: "retten_nichts1" },
          ]
        },
        retten_nichts1: {
            text: "Als der Wendigo Sam töten will, rennt Chris dazwischen. Dieser wird zur Seite geworfen und der Wendigo war nicht mehr auf Sam fokussiert, sondern auf etwas ganz anderes.",
            image: "images/sam_flucht.gif",
            choices: [
                { text: "weiter…", next: "lärm_nichts" },
          ]
        },
        nicht_retten_nichts: {
            text: "Chris rührt sich nicht von der Stelle und so bekommt der Wendigo nur etwas von Sam mit.",
            image: "images/sam_tod.gif",
            choices: [
                { text: "weiter…", next: "nicht_retten_nichts1" },
          ]
        },
        nicht_retten_nichts1: {
            text: "Der Wendigo rennt auf Sam zu und reißt mit einer Klaue Sam den Unterleib auf. Sie stirbt sofort.",
            image: "images/sam_tod.gif",
            choices: [
                { text: "weiter…", next: "nicht_retten_nichts2" },
          ]
        },
        nicht_retten_nichts2: {
            text: "Sam ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "lärm_nichts" },
          ]
        },
        lärm_nichts: {
            text: "Der Lärm, zieht weitere Wendigos an, wobei Hannah von allen am Stärksten ausschaut. Vor den Augen der Freunde beginnt sie die anderen Wendigos zu bekämpfen.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "lärm_nichts1" },
          ]
        },
        lärm_nichts1: {
            text: "Sie überwältigt einen und wirft den Toten mit abgerissenem Kopf gegen ein Rohr. Das Rohr bricht auf und Gas wird in der Lodge freisetzt.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "lärm_nichts2" },
          ]
        },
        lärm_nichts2: {
            text: "Chris bemerkt das und geht langsam zu einer Glühbirne, ohne von Hannah gesehen zu werden. Denn diese wird von den anderen Wendigos abgelenkt.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "lärm_nichts3" },
          ]
        },
        lärm_nichts3: {
            text: "Jetzt muss nur noch einer das Gas durch ein Feuerzeug oder, durch den Lichtschalter entfachen. Chris schaut zu Jessica.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "Teamwork", next: "teamwork_nichts" },
                { text: "Allein", next: "allein_nichts" },
          ]
        },
        teamwork_nichts: {
            text: "Hannah und die anderen Wendigos sind stark mit sich selbst beschäftigt. So können sie die Zeit nutzen, um einen kurzen Plan zu feilschen.",
            image: "images/sam_schalter.gif",
            choices: [
                { text: "weiter…", next: "teamwork_nichts1" },
          ]
        },
        teamwork_nichts1: {
            text: "Jessica soll zum Schalter rennen und wenn sie diesen umgelegt hat rennen sie sofort aus der Lodge.",
            image: "images/sam_schalter.gif",
            choices: [
                { text: "weiter…", next: "teamwork_nichts2" },
          ]
        },
        teamwork_nichts2: {
            text: "Sie einigen sich darauf und positionieren sich.",
            image: "images/sam_schalter.gif",
            choices: [
                { text: "weiter…", next: "rettung_nichts" },
          ]
        },
        allein_nichts: {
            text: "Ohne sich mit den abzusprechen, schreit er „RENN SOFORT RAUS“.",
            image: "images/sam_schalter.gif",
            choices: [
                { text: "weiter…", next: "allein_nichts1" },
          ]
        },
        allein_nichts1: {
            text: "Der Wendigo ist sofort wieder bei ihm und wirft ihn ein zweites Mal gegen eine Säule. Er schreit noch einmal „JETZT RENN“.",
            image: "images/sam_schalter.gif",
            choices: [
                { text: "weiter…", next: "allein_nichts2" },
          ]
        },
        allein_nichts2: {
            text: "Sie rennt los, die Wendigos hinterher. Doch sie erreichen Jessica nicht im Geringsten, denn als Jessica den Ausgang so gut wie erreicht hat, zieht Chris aus seiner Hosentasche ein Feuerzeug und sprengt die Lodge Mithilfe des Gases in die Luft.",
            image: "images/jumpscare.gif",
            choices: [
                { text: "weiter…", next: "allein_nichts3" },
          ]
        },
        allein_nichts3: {
            text: "Die Wucht der Explosion schleudert Jessica nach draußen. Die Lodge steht in Flammen und das Einzige was Jessica hören kann, sind die schrillen Schreie der brennenden Wendigos.",
            image: "images/explosion.gif",
            choices: [
                { text: "weiter…", next: "allein_nichts4" },
          ]
        },
        allein_nichts4: {
            text: "Chris hat sich für Jessica geopfert.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "rettung_nichts" },
          ]
        },
        rettung_nichts: {
            text: "Jessica steht benommen vor der brennenden Lodge. Das Geräusch eines Helikopters ist in der Ferne zu hören.",
            image: "images/ende.jpg",
            choices: [
                { text: "weiter…", next: "rettung_nichts1" },
          ]
        },
        rettung_nichts1: {
            text: "Der Rauch des Feuers steigt in den Himmel. Jessica wird gerettet.",
            image: "images/ende.jpg",
            choices: [
                { text: "weiter…", next: "rettung_nichts2" },
          ]
        },
        rettung_nichts2: {
            text: "Die Sonne geht auf und die Nacht verblasst.",
            image: "images/ende.jpg",
            choices: [
                { text: "Geschichte neu beginnen", next: "" },
          ]
        },
      }
    },



      Sam: {
        name: "Sam",
        description: "gewissenhaft, unsichtig, empathisch",
        image: "images/sam_ch.jpg",
        storyline: {
            start: {
              text: "Der Flügelschlag eines einzigen Schmetterlings heute, kann in einigen Wochen zu einem verheerenden Hurricane führen.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Folge mir", next: "first" },
              ]
          },
          first: {
              text: "Die kleinste Entscheidung kann die Zukunft dramatisch verändern.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Folge mir", next: "second" },
              ]
          },
          second: {
              text: "Deine Handlungen formen den Verlauf deiner Geschichte.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Folge mir", next: "third" },
              ]
          },
          third: {
              text: "Deine Geschichte ist eine von vielen Möglichkeiten",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Folge mir", next: "fourth" },
              ]
          },
          fourth: {
              text: "Wähle deine Handlungen mit Bedacht",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Folge mir", next: "fifth" },
              ]
          },
          fifth: {
              text: "Die kleinste Entscheidung kann die Zukunft dramatisch verändern.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Folge mir", next: "sixth" },
              ]
          },
          sixth: {
              text: "Im Laufe des Spiels wirst du mit schwierigen Entscheidungen konfrontiert, die über Leben und Tod deiner Freunde und sogar dein Eigenes Einfluss haben werden. Denke gut über deine Entscheidungen nach, denn… der Tod ist endgültig.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Folge mir", next: "Charakter2" },
              ]
          },
          Charakter2: {
              text: "Du spielst nun als Sam.",
              image: "images/sam.gif",
              choices: [
                  { text: "Beginne deine Geschichte", next: "prologue1" },
              ]
          },
          prologue1: {
              text: "2. Februar 2014",
              image: "images/snow.gif",
              choices: [
                  { text: "weiter…", next: "prologue2" },
              ]
          },
          prologue2: {
              text: "Die Freunde Sam, Josh, seine Zwillingsschwestern Hannah und Beth, Jessica und Chris treffen sich in der Berghütte der Blackwood Pines auf Mount Washington zu ihrem alljährlichen Winterausflug.",
              image: "images/snow.gif",
              choices: [
                  { text: "weiter…", next: "prologue3" },
              ]
          },
          prologue3: {
              text: "Während des Aufenthalts spielt ein Teil der Gruppe, Hannah, die in Chris verliebt ist, einen Streich. Woraufhin sie gedemütigt in den verschneiten Wald rennt.",
              image: "images/hannah_beth.gif",
              choices: [
                  { text: "weiter…", next: "prologue4" },
              ]
          },
          prologue4: {
              text: "Sowohl Beth, die ihr nachläuft, als auch Hannah, kamen nicht mehr zurück und wurden auch nicht von der Polizei gefunden und gelten als vermisst.",
              image: "images/hannah_beth_fall.gif",
              choices: [
                  { text: "weiter…", next: "prologue5" },
              ]
        },
        prologue5: {
            text: "Zum ersten Jahrestag des Verschwindens von Hannah und Beth Washington, lädt ihr Bruder Josh die verbliebenen drei Freunde erneut in die Blackwood Pines ein. Alle machen sich auf den Weg dorthin.",
            image: "images/josh_einladung.gif",
            choices: [
                { text: "weiter…", next: "prologue6" },
            ]
        },
        prologue6: {
            text: "Im Verlauf der Nacht beginnt der idyllisch-wirkende Ausflug… unheilvoll zu werden.",
            image: "images/josh_einladung.gif",
            choices: [
                { text: "weiter…", next: "sam_ankunft" },
            ]
        },
        sam_ankunft: {
            text: "Sam ist gegenüber der Einladung von Josh etwas skeptisch. Nach dem Verschwinden der beiden Zwillingsschwestern hatte sie versucht, mit Josh Kontakt zu halten, um ihm bei solch einer schweren Zeit zur Seite stehen zu können.",
            image: "images/sam_bus.gif",
            choices: [
                { text: "weiter…", next: "sam_ankunft1" },
            ]
        },
        sam_ankunft1: {
            text: "Er weigerte sich, ihre Hilfe anzunehmen. Sie ließ Josh daraufhin in Ruhe und der Kontakt zwischen ihnen verblasste. Sie fühlt sich immer noch sehr schuldig, da sie ihrer Meinung nach am Verschwinden seiner beiden Schwestern mitbeteiligt war.",
            image: "images/sam_bus.gif",
            choices: [
                { text: "weiter…", next: "sam_ankunft2" },
            ]
        },
        sam_ankunft2: {
            text: "Ihr Psychologe riet ihr, sich der Angst und Trauer zu stellen und die Einladung von Josh anzunehmen. So entschloss sie sich doch hinzufahren.",
            image: "images/sam_bus.gif",
            choices: [
                { text: "weiter…", next: "sam_ankunft3" },
            ]
        },
        sam_ankunft3: {
            text: "Sie steigt aus dem Bus, der direkt vor den Blackwood Pines hält und geht richtung dessen Eingang. Sie hat vergessen, wie groß das Anwesen von ihrem Freund doch war.",
            image: "images/Sam_bus.gif",
            choices: [
                { text: "weiter…", next: "sam_ankunft4" },
            ]
        },
        sam_ankunft4: {
            text: "Schließlich erreicht sie die Seilbahnstation und erkennt ihren Freund Chris, der bereits auf sie wartet.",
            image: "images/sam_ankunft.gif",
            choices: [
                { text: "weiter…", next: "sam_ankunft5" },
            ]
        },
        sam_ankunft5: {
            text: "Gemeinsan fahren sie mit der Seilbahn hoch und treffen auf Jessica, die auf die beiden wartet.",
            image: "images/sam_seilbahn.gif",
            choices: [
                { text: "weiter…", next: "sam_ankunft6" },
            ]
        },
        sam_ankunft6: {
            text: "In der Lodge angekommen treffen sie auf Josh, der freudig auf sie wartet, aber schon etwas ungeduldig wirkt.",
            image: "images/josh_ankunft1.gif",
            choices: [
                { text: "weiter…", next: "sam_ankunft7" },
            ]
        },
        sam_ankunft7: {
            text: "Jetzt geht die Party richtig los. Josh hat sich reichlich um die Versorgung gekümmert, vor allem was Alkohol betrifft.",
            image: "images/josh_ankunft1.gif",
            choices: [
                { text: "weiter…", next: "sam_ankunft8" },
            ]
        },
        sam_ankunft8: {
            text: "Nach einer Weile nutzen Josh, Jessica, Chris und Sam ein ouja-board, welches Josh zufällig in einer der Schränke findet. Dieses nutzen sie, um mit seinen Schwestern im Jenseits Kontakt aufzunehmen.",
            image: "images/ouja.jpg",
            choices: [
                { text: "weiter…", next: "sam_ankunft9" },
            ]
        },
        sam_ankunft9: {
            text: "Durch Gruppenzwang spielt Sam mit, obwohl sie nicht an Geister glaubt. Sie will den Anderen nicht den Abend vermiesen.",
            image: "images/ouja.jpg",
            choices: [
                { text: "weiter…", next: "sam_ankunft10" },
            ]
        },
        sam_ankunft10: {
            text: "Als Chris das Spiel erklärt, wird sie ausgewählt die Séance zu führen.",
            image: "images/ouja.jpg",
            choices: [
                { text: "weiter…", next: "sam_ankunft11" },
            ]
        },
        sam_ankunft11: {
            text: "Sie stellt die erste Frage und schlagartig überkommt sie ein ungutes Gefühl.",
            image: "images/ouja.jpg",
            choices: [
                { text: "weiter…", next: "sam_ankunft12" },
            ]
        },
        sam_ankunft12: {
            text: "Eine ganze Weile passiert nichts, doch dann bewegt sich der Zeiger des ouja-boards nach und nach zu den Buchstaben.",
            image: "images/ouja.jpg",
            choices: [
                { text: "weiter…", next: "sam_ankunft13" },
            ]
        },
        sam_ankunft13: {
            text: "Die Buchstaben ergeben das Wort 'H E L P'.",
            image: "images/ouja_2.jpg",
            choices: [
                { text: "weiter…", next: "sam_ankunft14" },
            ]
        },
        sam_ankunft14: {
            text: "Keiner von ihnen sagt ein Wort, doch Sam stellt die nächste Frage…",
            image: "images/ouja_2.jpg",
            choices: [
                { text: "Brauchst du Hilfe?", next: "hilfe" },
                { text: "Wer bist du?", next: "wer" },
            ]
        },
        hilfe: {
            text: "Der Geist bewegt den Zeiger über die Buchstaben: 'W A R N I N G'",
            image: "images/ouja_2.jpg",
            choices: [
                { text: "weiter…", next: "geist" },
            ]
        },
        wer: {
            text: "Der Geist bewegt den Zeiger über die Buchstaben: 'S I S T E R'",
            image: "images/ouja_2.jpg",
            choices: [
                { text: "weiter…", next: "geist" },
            ]
        },
        geist: {
            text: "Josh will wissen, wie der Geist heißt.",
            image: "images/ouja_2.jpg",
            choices: [
                { text: "Beth?", next: "beth" },
                { text: "Hannah?", next: "hannah" },
            ]
        },
        beth: {
            text: "Der Geist bewegt den Zeiger über die Buchstaben: 'Y E S'",
            image: "images/ouja_2.jpg",
            choices: [
                { text: "weiter…", next: "zeiger" },
            ]
        },
        hannah: {
            text: "Der Geist bewegt den Zeiger über die Buchstaben: 'Y E S'",
            image: "images/ouja_2.jpg",
            choices: [
                { text: "weiter…", next: "zeiger" },
            ]
        },
        zeiger: {
            text: "Aufeinmal fällt der Zeiger des ouja-boards, mit einem lauten Schlag, selbstständig zu Boden. Sam bekommt Panik.",
            image: "images/ouja_2.jpg",
            choices: [
                { text: "weiter…", next: "zeiger1" },
            ]
        },
        zeiger1: {
            text: "Josh ist entsetzt und beschuldigt Sam, Jessica und Chris, ihm einen unangebrachten Streich gespielt zu haben. Josh verlässt daraufhin wütend den Raum.",
            image: "images/josh_1.gif",
            choices: [
                { text: "weiter…", next: "zeiger2" },
            ]
        },
        zeiger2: {
            text: "Sam, Jessica und Chris wagen sich nicht, ihm zu folgen.",
            image: "images/josh_1.gif",
            choices: [
                { text: "weiter…", next: "zeiger3" },
            ]
        },
        zeiger3: {
            text: "Nach einer Weile entscheidet sich Sam dazu, ein beruhigendes Bad zu nehmen.",
            image: "images/bad.jpg",
            choices: [
                { text: "weiter…", next: "zeiger4" },
            ]
        },
        zeiger4: {
            text: "Beim Baden hört sie klassische Musik durch ihre Kopfhörer ohne zu bemerken, dass sie beobachtetet wird.",
            image: "images/bad_1.gif",
            choices: [
                { text: "weiter…", next: "zeiger5" },
            ]
        },
        zeiger5: {
            text: "Erst als die Kerzen ausgehen, nachdem jemand die Tür des Badezimmers geschlossen hat, bemerkt sie, dass etwas nicht stimmt.",
            image: "images/bad_1.gif",
            choices: [
                { text: "weiter…", next: "zeiger6" },
            ]
        },
        zeiger6: {
            text: "Sam vermutet, dass ihre Freunde einen Streich spielen. Ihr Verdacht verstärkt sich als sie merkt, dass ihre Sachen weg sind.",
            image: "images/sam_kopfhörer.gif",
            choices: [
                { text: "weiter…", next: "zeiger7" },
            ]
        },
        zeiger7: {
            text: "Nur in einem Handtuch und einer Taschenlampe geht sie nach unten und sucht die Anderen.",
            image: "images/sam_kopfhörer.gif",
            choices: [
                { text: "weiter…", next: "zeiger8" },
            ]
        },
        zeiger8: {
            text: "Kurze Zeit später erreicht sie einen Raum in welchem sich ein kleines Kino befindet. Ein Video von ihr aus dem Bad wird auf der Leinwand abgespielt.",
            image: "images/sam_kino.gif",
            choices: [
                { text: "weiter…", next: "zeiger9" },
            ]
        },
        zeiger9: {
            text: "Ein Mann in Maske und Schürze betritt den Raum und schließt die Türe.",
            image: "images/sam_kino.gif",
            choices: [
                { text: "weiter…", next: "zeiger10" },
            ]
        },
        zeiger10: {
            text: "Er erklärt ihr, dass diese schönen Momente ihre Letzten sein könnten.",
            image: "images/sam_kino.gif",
            choices: [
                { text: "weiter…", next: "zeiger11" },
            ]
        },
        zeiger11: {
            text: "Er gibt ihr zehn Sekunden Vorsprung, um wegzurennen. Sam gerät in Panik.",
            image: "images/sam_kino.gif",
            choices: [
                { text: "Vase werfen", next: "vase" },
                { text: "Wegrennen", next: "wegrennen" },
            ]
        },
        vase: {
            text: "Sam greift die Vase zu ihrer Rechten und wirft diese. Sie trifft ihn, was ihn hindert sie zu erwischen.",
            image: "images/sam_vase.gif",
            choices: [
                { text: "weiter…", next: "vase1" },
            ]
        },
        vase1: {
            text: "Sie rennt aus dem Kino heraus und weiter in den nächsten Raum hinein.",
            image: "images/sam_vase.gif",
            choices: [
                { text: "weiter…", next: "psycho_flucht" },
            ]
        },
        wegrennen: {
            text: "Sie rennt aus dem Kino heraus und weiter in den nächsten Raum hinein.",
            image: "images/sam_rennt.gif",
            choices: [
                { text: "weiter…", next: "psycho_flucht" },
            ]
        },
        psycho_flucht: {
            text: "Der Unbekannte ist dicht hinter ihr. Sie kann noch rechtzeitig die Tür hinter sich versperren.",
            image: "images/sam_raum.gif",
            choices: [
                { text: "Unter dem Bett verstecken", next: "verstecken" },
                { text: "Nach unten laufen", next: "unten" },
            ]
        },
        verstecken: {
            text: "Schnell schaltet Sam ihre Taschenlampe aus und versteckt sich unter einem Bett.",
            image: "images/sam_bett.gif",
            choices: [
                { text: "weiter…", next: "verstecken1" },
            ]
        },
        verstecken1: {
            text: "Der Unbekannte bricht die Tür auf, seine schweren Schritte laufen langsam durch den Raum.",
            image: "images/sam_bett.gif",
            choices: [
                { text: "weiter…", next: "verstecken2" },
            ]
        },
        verstecken2: {
            text: "„Ich weiß, dass du hier bist Sam. Ich kann deine Angst förmlich riechen“. Seine Schritte stoppen vor dem Bett, unter dem sich Sam versteckt.",
            image: "images/sam_bett.gif",
            choices: [
                { text: "weiter…", next: "verstecken3" },
            ]
        },
        verstecken3: {
            text: "Plötzlich zieht er Sam unter dem Bett hervor und betäubt sie mit einem Betäubungsmittel.",
            image: "images/sam_betäubt.gif",
            choices: [
                { text: "weiter…", next: "gefangen" },
            ]
        },
        unten: {
            text: "Sie läuft in den nächsten Raum und sieht, dass der Türgriff oben auf einem Schrank liegt.",
            image: "images/sam_rennt.gif",
            choices: [
                { text: "weiter…", next: "entscheidungen" },
            ]
        },
        entscheidungen: {
            text: "Sam hört den Unbekannten näher kommen. Sie muss sich entscheiden.",
            image: "images/sam_rennt.gif",
            choices: [
                { text: "Schrank umwerfen", next: "umwerfen" },
                { text: "Nächste Tür aufstoßen", next: "aufstoßen" },
                { text: "Verstecken", next: "verstecken_sam" },
                { text: "Rennen", next: "rennen" },
            ]
        },
        umwerfen: {
            text: "Sie zieht das Regal herunter, welcher mit einem lauten Knall auf den Boden schlägt. Dadurch fällt der Türgriff herunter, den Sam schnell mitnimmt.",
            image: "images/sam_schrank.gif",
            choices: [
                { text: "weiter…", next: "umwerfen1" },
            ]
        },
        umwerfen1: {
            text: "Sam rammt den Türgriff in die Türe zum nächsten Raum und flieht hindurch. Sie schaut sich um und sieht, dass sie in der Waschküche der Lodge steht.",
            image: "images/sam_schrank.gif",
            choices: [
                { text: "weiter…", next: "entkommen" },
            ]
        },
        aufstoßen: {
            text: "Sam schlägt ihre Schulter ein paar Mal gegen die Tür, sodass diese sich gerade genug öffnet. Sie quetscht sich durch den Spalt und schließt die Türe hinter sich.",
            image: "images/",
            choices: [
                { text: "weiter…", next: "entkommen" },
            ]
        },
        verstecken_sam: {
            text: "Sam springt einen Luftschacht hinunter und schaltet ihre Taschenlampe aus.",
            image: "images/sam_schacht.gif",
            choices: [
                { text: "weiter…", next: "verstecken_sam1" },
            ]
        },
        verstecken_sam1: {
            text: "Der Unbekannte tritt auf den Vorsprung, von welchem Sam gesprungen ist und überblickt den Raum.",
            image: "images/sam_schacht.gif",
            choices: [
                { text: "weiter…", next: "verstecken_sam2" },
            ]
        },
        verstecken_sam2: {
            text: "Nach einer Weile geht er weiter. Der Unbekannte hat Sam nicht entdeckt.",
            image: "images/sam_schacht.gif",
            choices: [
                { text: "weiter…", next: "entkommen" },
            ]
        },
        rennen: {
            text: "Sam rennt im Glauben, dem Unbekannten entkommen zu können, doch dieser überrascht sie von der Seite, greift sie und zieht sie heran.",
            image: "images/sam_rennt.gif",
            choices: [
                { text: "weiter…", next: "rennen1" },
            ]
        },
        rennen1: {
            text: "„Es tut mir leid, Sam“. Er betäubt Sam und sie wird ohnmächtig.",
            image: "images/sam_betäubt.gif",
            choices: [
                { text: "weiter…", next: "gefangen" },
            ]
        },
        entkommen: {
            text: "Sam ist entkommen und bahnt sich ihren Weg zu einer Werkstatt. Sie betritt diese.",
            image: "images/werkstatt.jpg",
            choices: [
                { text: "weiter…", next: "entkommen1" },
            ]
        },
        entkommen1: {
            text: "Sie erkundet den Raum und findet verschiedene Hinweise zu dem Unbekannten und seiner Identität.",
            image: "images/werkstatt.jpg",
            choices: [
                { text: "weiter…", next: "entkommen2" },
            ]
        },
        entkommen2: {
            text: "Sie verbrachte ihre die Zeit damit sich die Hinweise durchzulesen, bis Chris und Jessica zu ihr stoßen.",
            image: "images/werkstatt.jpg",
            choices: [
                { text: "weiter…", next: "freude" },
            ]
        },
        gefangen: {
            text: "Eine ganze Zeit später wacht Sam auf, ihr brummt der Schädel. Sie schaut sich um und sieht, dass sie an einen Webstuhl gefesselt ist.",
            image: "images/sam_gefesselt.png",
            choices: [
                { text: "weiter…", next: "gefangen1" },
            ]
        },
        gefangen1: {
            text: "Sam ist panisch und schreit um Hilfe. Kurz darauf stürmt Chris in den Raum. Dieser befreit sie aus ihren Fesseln.",
            image: "images/sam_gefesselt.png",
            choices: [
                { text: "weiter…", next: "freude" },
            ]
        },
        freude: {
            text: "Sam ist überglücklich Chris zu sehen und nur wenige Momente später stößt Jessica hinzu. Sam schlüpft in frische Klamotten.",
            image: "images/sam_gefesselt.png",
            choices: [
                { text: "weiter…", next: "freude1" },
            ]
        },
        freude1: {
            text: "Doch allzu lange soll die Ruhe nicht anhalten, denn wenige Augenblicke später taucht der Unbekannte erneut auf.",
            image: "images/psycho.gif",
            choices: [
                { text: "weiter…", next: "freude2" },
            ]
        },
        freude2: {
            text: "Sam sieht ihn reichtzeitig und warnt Jessica und Chris.",
            image: "images/psycho.gif",
            choices: [
                { text: "weiter…", next: "freude3" },
            ]
        },
        freude3: {
            text: "Alle drei drehen sich zu dem Mann um.",
            image: "images/psycho.gif",
            choices: [
                { text: "weiter…", next: "freude4" },
          ]
        },
        freude4: {
            text: "Der Mann kommt langsam auf sie zu. „Erkennt ihr mich wieder?“. Der Mann stoppt und zieht seine Maske ab…",
            image: "images/reveal.gif",
            choices: [
                { text: "weiter…", next: "freude5" },
          ]
        },
        freude5: {
            text: "Chris, jessica und Sam trauen ihren Augen nicht. Das ist unmöglich.",
            image: "images/reveal.gif",
            choices: [
                { text: "weiter…", next: "freude6" },
          ]
        },
        freude6: {
            text: "Der Mann offenbart sich als den eigentlich toten Josh. Er war es, der die ganze Zeit dahintersteckte.",
            image: "images/reveal.gif",
            choices: [
                { text: "weiter…", next: "freude7" },
          ]
        },
        freude7: {
            text: "Nachdem er sich zu erkennen gegeben hat, lacht Josh laut vor sich hin.",
            image: "images/reveal_2.gif",
            choices: [
                { text: "weiter…", next: "freude8" },
          ]
        },
        freude8: {
            text: "Er sagt ihnen, dass sie sich genauso fühlen sollen, wie sich Hannah ein Jahr vorher gefühlt hat. Er hat seinen Tod gefälscht und die „übernatürlichen“ Ereignisse kontrolliert, die geschehen sind.",
            image: "images/reveal_2.gif",
            choices: [
                { text: "weiter…", next: "freude9" },
          ]
        },
        freude9: {
            text: "„Ihr werdet alle Internet-Sensationen sein, ich habe all die peinlichen Szenen von euch veröffentlicht“. Josh lacht und zeigt absolut keine Reue.",
            image: "images/reveal_2.gif",
            choices: [
                { text: "weiter…", next: "freude10" },
          ]
        },
        freude10: {
            text: "Sam und die Anderen tauschen Blicke aus. Josh muss gestoppt werden. Chris überwältigt Josh und Mithilfe von Sam und Jessica, schafft er es Josh zu fesseln.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "freude11" },
          ]
        },
        freude11: {
            text: "Zusammen ziehen sie den gefesselten Josh in den Schuppen und binden ihn an einen klapprigen Stuhl, damit er nichts mehr anstellen kann.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "freude12" },
          ]
        },
        freude12: {
            text: "Das Hämmern an die Tür des Schuppens lässt alle vier aufschrecken. Chris, die zwei Mädchen und Josh bleiben erstmal still.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "freude13" },
          ]
        },
        freude13: {
            text: "Josh, der noch reden kann, zeigt Chris das Geheimversteck für seine echte Pistole, die er hier im Schuppen versteckt hält. Chris sucht diese schnell, findet sie und lädt sie.",
            image: "images/gefesselt.gif",
            choices: [
                { text: "weiter…", next: "freude14" },
          ]
        },
        freude14: {
            text: "Bevor er die Tür zum Schuppen öffnen kann, hat der Fremde schon die Tür aufgetreten und entwaffnet sofort den überraschten Chris.",
            image: "images/fremder_3.gif",
            choices: [
                { text: "Chris unterstützen", next: "unterstützen" },
                { text: "Ruhig verhalten", next: "ruhig" },
          ]
        },
        unterstützen: {
            text: "Sam kann nicht mit ansehen, wie ein Fremder auf Chris losgeht. Sie krallt sich einen in der Nähe liegenden Hammer und mit rennt auf den Mann zu.",
            image: "images/fremder_3.gif",
            choices: [
                { text: "weiter…", next: "unterstützen1" },
          ]
        },
        unterstützen1: {
            text: "Doch der Mann ist schneller und mit einem gezieltem Handgriff entwaffnet er Sam.",
            image: "images/fremder_3.gif",
            choices: [
                { text: "weiter…", next: "erklärung" },
          ]
        },
        ruhig: {
            text: "Sam will keine Entscheidung treffen, die sie im Nachhinein bereuen wird, also kommt sie aus ihrem Versteck und erklärt dem Fremden, wer sie sind und warum sie sich grade jetzt hier aufhalten.",
            image: "images/fremder_3.gif",
            choices: [
                { text: "weiter…", next: "erklärung" },
          ]
        },
        erklärung: {
            text: "Der Fremde hebt seine Hände. „Lasst mich erst erklären warum ich überhaupt hier bin.“ Sam nickt und lässt den Fremden erklären.",
            image: "images/fremder_4.gif",
            choices: [
                { text: "weiter…", next: "erklärung1" },
          ]
        },
        erklärung1: {
            text: "„Da ist etwas… da draußen. Es ist nicht menschlich und auch nicht animalisch. Es ist tötlich und extrem gefährlich. Also… rate ich euch, mir zu vertrauen, denn ich weiß was diese Dinger sind“.",
            image: "images/fremder_4.gif",
            choices: [
                { text: "weiter…", next: "erklärung2" },
          ]
        },
        erklärung2: {
            text: "Er erklärt ihnen, dass ein sogenannter 'Wendigo' ein Mensch ist, der durch Kannibalismus auf dem Blackwood Mountain vom Wendigo Geist eingenommen wurde. „Fragt nicht, woher ich das alles weiß. Ich habe schon zu viel erlebt und gesehen, auch eine Verwandlung habe ich beobachtet“.",
            image: "images/fremder_4.gif",
            choices: [
                { text: "weiter…", next: "erklärung3" },
          ]
        },
        erklärung3: {
            text: "Der Wendigo.",
            image: "images/wendigo.gif",
            choices: [
                { text: "weiter…", next: "erklärung4" },
          ]
        },
        erklärung4: {
            text: "Bei der Verwandlung verändern sich zuerst die Augen und werden milchig weiß, ebenso wie die Haut, welche sich kreidebleich färbt, dick und widerstandsfähig wird. Dann werden die Zähne lang und scharf. Die Kreatur wächst und die Haut spannt sich über die Knochen, dadurch haben sie ein skelettartiges Äußeres.",
            image: "images/wendigo.gif",
            choices: [
                { text: "weiter…", next: "erklärung5" },
          ]
        },
        erklärung5: {
            text: "Es kann jede kleinste Bewegung wahrnehmen und sehr gut riechen, bewegt sich sehr schnell und ruckartig auf allen Vieren. Außerdem kann es ausgezeichnet an Wänden und Decken klettern.",
            image: "images/wendigo.gif",
            choices: [
                { text: "weiter…", next: "erklärung6" },
          ]
        },
        erklärung6: {
            text: "Haut und Fleisch eines Wendigo sind wie ein Panzer. Ein Flammenwerfer ist die geeigneteste Waffe gegen einen Wendigo, denn es fürchtet das Feuer. Schrotflinten verlangsamt es nur. Das Monster jagt nur nachts. Dinge, die sich nicht bewegen, kann es nicht sehen.",
            image: "images/wendigo.gif",
            choices: [
                { text: "weiter…", next: "erklärung7" },
          ]
        },
        erklärung7: {
            text: "Chris beschließt, mit dem Fremden Richtung Hütte zu gehen, um weitere Informationen zu erlangen.",
            image: "images/sam_ankunft_5.gif",
            choices: [
                { text: "weiter…", next: "erklärung8" },
          ]
        },
        erklärung8: {
            text: "Jessica und Sam sollen vorrausgehen.",
            image: "images/sam_ankunft_5.gif",
            choices: [
                { text: "weiter…", next: "erklärung9" },
          ]
        },
        erklärung9: {
            text: "Jessica hat Angst, das merkt Sam. Sie nimmt ihre Hand und zu zweit gehen sie zum Keller, da dieser bisher der sicherste Ort im ganzen Haus ist.",
            image: "images/keller_3.jpg",
            choices: [
                { text: "weiter…", next: "erklärung10" },
          ]
        },
        erklärung10: {
            text: "Plötzlich hören sie Schüsse.",
            image: "images/keller_3.jpg",
            choices: [
                { text: "Nachschauen", next: "nachschauen" },
                { text: "Geräusche ignorieren", next: "ignorieren" },
          ]
        },
        nachschauen: {
            text: "Sam kann nicht einfach im Keller auf Chris warten. Was ist, wenn er verletzt wird oder gar stirbt?",
            image: "images/chris_tod.gif",
            choices: [
                { text: "weiter…", next: "nachschauen1" },
          ]
        },
        nachschauen1: {
            text: "Sie geht allein hoch zum Eingang der Lodge und sieht, wie Chris vor einem dieser Monster wegrennt. Sam erstarrt, dieser Anblick ist einfach nur verstörend.",
            image: "images/chris_tod.gif",
            choices: [
                { text: "weiter…", next: "entscheidungen_1" },
          ]
        },
        entscheidungen_1: {
            text: "Sam ist sich unsicher, ob sie Chris helfen soll oder nicht. Sie hat Angst.",
            image: "images/chris_tod.gif",
            choices: [
                { text: "Tür öffnen", next: "öffnen" },
                { text: "Tür verschließen", next: "verschließen" },
          ]
        },
        öffnen: {
            text: "Sam kann Chris nicht im Stich lassen, sonst wird er sterben. Sam macht auf sich aufmerksam und Chris bekommt dies mit.",
            image: "images/chris_lebt.gif",
            choices: [
                { text: "weiter…", next: "öffnen1" },
          ]
        },
        öffnen1: {
            text: "Mit einem hoffnungsvollen Blick rennt Chris zu Sam, die ihm die Tür weit öffnet. Nachdem er hineingestürmt ist, verschließt sie die Tür hinter sich.",
            image: "images/chris_lebt.gif",
            choices: [
                { text: "weiter…", next: "chris_lebt" },
          ]
        },
        verschließen: {
            text: "Sam sieht Chris vor einem Wendigo wegrennen, doch vor lauter Angst ist sie so erstarrt, sodass sie sich nicht traut die Tür für ihn zu öffnen.",
            image: "images/chris_tod_4.gif",
            choices: [
                { text: "weiter…", next: "verschließen1" },
          ]
        },
        verschließen1: {
            text: "Sam ist wie versteinert und muss zusehen, wie ihr Freund bei lebendigem Leibe aufgerissen wird.",
            image: "images/chris_tod_4.gif",
            choices: [
                { text: "weiter…", next: "verschließen2" },
          ]
        },
        verschließen2: {
            text: "Chris qualvolle Schreie holen sie wieder in die Realität zurück.",
            image: "images/chris_tod_4.gif",
            choices: [
                { text: "weiter…", next: "verschließen3" },
          ]
        },
        verschließen3: {
            text: "Sie schaut hinaus und sieht seinen körperlosen Kopf richtung Tür rollen. Sie will schreien, doch sie bringt keinen Ton heraus.",
            image: "images/chris_tod_4.gif",
            choices: [
                { text: "weiter…", next: "verschließen4" },
          ]
        },
        verschließen4: {
            text: "Chris ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "chris_tod" },
          ]
        },
        chris_tod: {
            text: "Sam gibt gegenüber ihrer besten Freundin nicht zu, dass Chris tot ist.",
            image: "images/keller_3.jpg",
            choices: [
                { text: "weiter…", next: "chris_tod1" },
          ]
        },
        chris_tod1: {
            text: "Stattdessen meint sie, dass sie noch die Hoffnung hat, dass er lebt.",
            image: "images/keller_3.jpg",
            choices: [
                { text: "weiter…", next: "chris_tod2" },
          ]
        },
        chris_tod2: {
            text: "Sie beschließen nicht länger im Keller zu verweilen, sondern Josh und Chris zu finden.",
            image: "images/keller_3.jpg",
            choices: [
                { text: "weiter…", next: "chris_tod3" },
          ]
        },
        chris_tod3: {
            text: "Sam kommt die böse Vorahnung, dass Josh wahrscheinlich in die Minen verschleppt wurde.",
            image: "images/keller_3.jpg",
            choices: [
                { text: "weiter…", next: "chris_tod4" },
          ]
        },
        chris_tod4: {
            text: "Als sie sich wieder hinaus trauen, finden sie die Leiche des Fremden. Der Kopf des Fremden liegt ein paar Meter weiter entfernt im Schnee. Sam und Jessica sind von diesem Anblick vollkommen verstört.",
            image: "images/fremder_kopf.jpeg",
            choices: [
                { text: "weiter…", next: "chris_tod5" },
          ]
        },
        chris_tod5: {
            text: "Von Chris ist weit und breit keine Spur.",
            image: "images/fremder_kopf.jpeg",
            choices: [
                { text: "weiter…", next: "chris_tod6" },
          ]
        },
        chris_tod6: {
            text: "Sam untersucht dessen Leiche und findet eine Karte, sowie ein paar Habseligkeiten. Diese nehmen sie mit.",
            image: "images/fremder_kopf.jpeg",
            choices: [
                { text: "weiter…", next: "chris_tod7" },
          ]
        },
        chris_tod7: {
            text: "Sam und Jessica machen sich auf den Weg, Josh zu finden. Während der Suche liest Sam aus dem Tagebuch des Fremden vor. Das was sie darin liest, macht sie sprachlos.",
            image: "images/sam_ankunft_5.gif",
            choices: [
                { text: "weiter…", next: "chris_tod8" },
          ]
        },
        chris_tod8: {
            text: "In dem Tagebuch des Fremden stehen neue Informationen über die Wendigos und deren Geschichte. Diese Entdeckungen beinhalten die Erkenntnis, dass ein Wendigo-Biss nicht ansteckend ist.",
            image: "images/sam_ankunft_5.gif",
            choices: [
                { text: "weiter…", next: "chris_tod9" },
          ]
        },
        chris_tod9: {
            text: "Die Herkunft des Wendigos.",
            image: "images/cree.jpg",
            choices: [
                { text: "weiter…", next: "chris_tod10" },
          ]
        },
        chris_tod10: {
            text: "Auf dem Blackwood Mountain lebte einst ein indigener Eingeborenenstamm, die 'Cree'. Die Schamanen des Stammes erzählten Geschichten von großen Kreaturen geboren im Eis. Der Stamm respektierte den Berg und alle auf ihm lebenden Tiere.",
            image: "images/fremder_tagebuch.jpg",
            choices: [
                { text: "weiter…", next: "chris_tod11" },
          ]
        },
        chris_tod11: {
            text: "Der Berg wurde den Cree heilig und somit auch jedes Tier. Sie glaubten es würde Unglück bringen, ein auf dem Berg lebendes Tier zu töten, weshalb sie ihre Jagdgründe anderorts suchten.",
            image: "images/fremder_tagebuch.jpg",
            choices: [
                { text: "weiter…", next: "chris_tod12" },
          ]
        },
        chris_tod12: {
            text: "Doch 1893 kamen die weißen Einsiedler, die Bergleute. Sie fanden Zinn im Berg, und später auch Spuren von Radium. Sie gruben deshalb tief in den heiligen Berg. Die Cree sagten, dass der Berg aufschrie und so der Wendigogeist freigesetzt wurde.",
            image: "images/fremder_tagebuch_2.jpg",
            choices: [
                { text: "weiter…", next: "chris_tod13" },
          ]
        },
        chris_tod13: {
            text: "Der Eintrag in dem Tagebuch des Fremden, bezüglich der Geschichte der Wendigos ist unvollständig.",
            image: "images/fremder_tagebuch_1.jpg",
            choices: [
                { text: "weiter…", next: "chris_tod14" },
          ]
        },
        chris_tod14: {
            text: "Sam und Jessica laufen tiefer in den Wald und nach einer Weile finden sie ein Sanatorium. Sie hoffen dort, Josh finden zu können.",
            image: "images/sanatorium.jpg",
            choices: [
                { text: "weiter…", next: "chris_tod15" },
          ]
        },
        chris_tod15: {
            text: "Sam versucht die Eingangstür zu öffnen doch die Tür bewegt sich keinen Zentimeter. Sie ist abgesperrt.",
            image: "images/sanatorium.jpg",
            choices: [
                { text: "weiter…", next: "chris_tod16" },
          ]
        },
        chris_tod16: {
            text: "Jessica weist auf einen Schacht hin, der in das Innere des Sanatoriums führt. Sie geht als Erste hinein, Sam folgt ihr und schließt den Deckel.",
            image: "images/schacht.jpg",
            choices: [
                { text: "weiter…", next: "chris_tod17" },
          ]
        },
        chris_tod17: {
            text: "Als Sam durch die Abwasserkanäle kriecht, hört sie wie Jessica um Hilfe ruft.",
            image: "images/schacht.jpg",
            choices: [
                { text: "Stimme folgen", next: "folgen_sam" },
                { text: "Weiterkriechen", next: "weiterkriechen_sam" },
          ]
        },
        folgen_sam: {
            text: "Sam beschließt, der Stimme zu folgen und stürzt durch den Schacht in eine kleine Höhle.",
            image: "images/metalltür.jpg",
            choices: [
                { text: "weiter…", next: "entscheidungen_5" },
          ]
        },
        entscheidungen_5: {
            text: "Die Stimme hört sich für Sam nicht mehr nach Jessica an, sondern nach etwas, dass heftig gegen eine Tür knallt.",
            image: "images/metalltür.jpg",
            choices: [
                { text: "Verriegelung öffnen", next: "verriegelung_sam" },
                { text: "Vorbeigehen", next: "vorbeigehen_sam" },
          ]
        },
        verriegelung_sam: {
            text: "Sam denkt, dass Jessica eventuell falsch abgebogen ist und jetzt eingesperrt sein könnte.",
            image: "images/metalltür.jpg",
            choices: [
                { text: "weiter…", next: "verriegelung_sam1" },
          ]
        },
        verriegelung_sam1: {
            text: "Sam öffnet langsam die Verriegelung.",
            image: "images/metalltür.jpg",
            choices: [
                { text: "weiter…", next: "verriegelung_sam2" },
          ]
        },
        verriegelung_sam2: {
            text: "Der dahinterliegende Raum ist dunkel, aber Sam kann trotzdem noch etwas erkennen. Das, was sie im Schatten sieht, lässt ihr einen kalten Schauer den Rücken herunter laufen.",
            image: "images/wendigo_1.gif",
            choices: [
                { text: "weiter…", next: "verriegelung_sam3" },
          ]
        },
        verriegelung_sam3: {
            text: "Mit dem Rücken zu ihr gekehrt, kniet ein Wendigo auf dem Boden. Dieser scheint gerade an etwas Totem zu fressen, denn der Gestank ist unaushaltbar.",
            image: "images/wendigo_1.gif",
            choices: [
                { text: "weiter…", next: "verriegelung_sam4" },
          ]
        },
        verriegelung_sam4: {
            text: "Der Wendigo bemerkt sie und innerhalb einer Sekunde springt er auf sie und bricht ihr den Nacken.",
            image: "images/sam_tod_2.gif",
            choices: [
                { text: "weiter…", next: "verriegelung_sam5" },
          ]
        },
        verriegelung_sam5: {
            text: "Jessica läuft zurück, um Sam wiederzufinden, doch vergebens. Sam ist tot und verschwunden.",
            image: "images/sam_tod_2.gif",
            choices: [
                { text: "weiter…", next: "verriegelung_sam6" },
          ]
        },
        verriegelung_sam6: {
            text: "Sam ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "Geschichte neu beginnen", next: "character-selection" },
          ]
        },
        vorbeigehen_sam: {
            text: "Nein, das kann unmöglich Jessica sein. Sam geht schnell  an der Tür vorbei.",
            image: "images/metalltür.jpg",
            choices: [
                { text: "weiter…", next: "vorbeigehen_sam1" },
          ]
        },
        vorbeigehen_sam1: {
            text: "Nach einem langen Tunnel findet sie wieder ihren Weg zurück zu Jessica. An einer Sackgasse werden sie gezwungen anzuhalten.",
            image: "images/jessica_sam.jpg",
            choices: [
                { text: "weiter…", next: "vorbeigehen_sam2" },
          ]
        },
        vorbeigehen_sam2: {
            text: "Sam klettert eine Felswand hinauf. Oben angekommen sagt sie zu Jessica, dass sie an einer anderen Stelle suchen oder zur Lodge zurückkehren soll.",
            image: "images/sam_klettern.jpg",
            choices: [
                { text: "weiter…", next: "vorbeigehen_sam3" },
          ]
        },
        vorbeigehen_sam3: {
            text: "Sam sucht Josh nun alleine.",
            image: "images/sam_klettern.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam" },
          ]
        },
        weiterkriechen_sam: {
            text: "Sam macht kehrt und nach einer Weile findet sie ihren Weg zurück zu Jessica. An einer Sackgasse werden sie gezwungen anzuhalten.",
            image: "images/jessica_sam.jpg",
            choices: [
                { text: "weiter…", next: "weiterkriechen_sam1" },
          ]
        },
        weiterkriechen_sam1: {
            text: "Sam klettert eine Felswand hinauf. Oben angekommen sagt sie zu Jessica, dass sie an einer anderen Stelle suchen oder zur Lodge zurückkehren soll.",
            image: "images/sam_klettern.jpg",
            choices: [
                { text: "weiter…", next: "weiterkriechen_sam2" },
          ]
        },
        weiterkriechen_sam2: {
            text: "Sam sucht Josh nun alleine.",
            image: "images/sam_klettern.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam" },
          ]
        },
        tagebuch_sam: {
            text: "Oben angekommen, befindet sich Sam in einer alten Mine. Nur ein paar Lampen erleuchten den langen Gang vor ihr.",
            image: "images/mine.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam1" },
          ]
        },
        tagebuch_sam1: {
            text: "Vorsichtig tastet sie sich vor. Am Ende des Ganges findet sie etwas, was sie komplett erstarren lässt.",
            image: "images/mine.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam2" },
          ]
        },
        tagebuch_sam2: {
            text: "Auf dem Boden befindet sich Beth's abgetrennter Kopf.",
            image: "images/beth_kopf.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam3" },
          ]
        },
        tagebuch_sam3: {
            text: "Sam wird von diesem Anblick schlagartig übel.",
            image: "images/beth_kopf.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam4" },
          ]
        },
        tagebuch_sam4: {
            text: "Sie braucht einige Zeit, um sich zu sammeln. Doch sie schafft es und tritt näher and den Kopf heran.",
            image: "images/beth_kopf.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam5" },
          ]
        },
        tagebuch_sam5: {
            text: "Sie sieht ein Tagebuch neben dem Kopf liegen. Sam erkennt es als Hannah's.",
            image: "images/beth_kopf.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam6" },
          ]
        },
        tagebuch_sam6: {
            text: "Sie öffnet es.",
            image: "images/journal_1.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam7" },
          ]
        },
        tagebuch_sam7: {
            text: "Hannah's Tagebuch.",
            image: "images/journal_1.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam8" },
          ]
        },
        tagebuch_sam8: {
            text: "Tag 1.",
            image: "images/journal_1.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam9" },
          ]
        },
        tagebuch_sam9: {
            text: "Meine kleine Schwester ist tot. Sie hat den Sturz nicht überlebt...Ich habe gesehen, wie die Farbe aus ihrem Gesicht wich. Mein Bein ist gebrochen. Ich bin ganz allein, gefangen mit Beths Leiche. Bald wird jemand kommen.",
            image: "images/journal_1.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam10" },
          ]
        },
        tagebuch_sam10: {
            text: "Tag 5.",
            image: "images/journal_2.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam11" },
          ]
        },
        tagebuch_sam11: {
            text: "Ich war noch nie so HUNGRIG. Es fühlt sich so an, als würde sich mein Magen verdrehen. Ich habe mir Beth's Pulli genommen Jetzt ist es viel wärmer. Sie passt immer noch auf mich auf.",
            image: "images/journal_2.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam12" },
          ]
        },
        tagebuch_sam12: {
            text: "Tag 30.",
            image: "images/journal_2.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam13" },
          ]
        },
        tagebuch_sam13: {
            text: "Es tut mir leid Beth, ich habe keine Wahl. Ich STERBE. Nur so kann ich hier unten noch überleben. Wenn das hier jemand findet - ES TUT MIR LEID. Ich musste es tun. Es ging nicht anders. Verzeih mir, Beth. Es tut mir leid.",
            image: "images/journal_2.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam14" },
          ]
        },
        tagebuch_sam14: {
            text: "Tag 33.",
            image: "images/journal.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam15" },
          ]
        },
        tagebuch_sam15: {
            text: "Meine Hände fühlen sich schmutzig an. Meine Nägel sind ausgefallen, HERAUSGEDRÜCKT. Ich habe Schmerzen, aber mir ist nicht mehr KALT. KEIN SCHMERZ. Ich werde STÄRKER. Es fühlt sich so an, als würde ich mich VERÄNDERN.",
            image: "images/journal.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch_sam16" },
          ]
        },
        tagebuch_sam16: {
            text: "Sam starrt auf die von Hannah verfassten Zeilen. Sie ist sprachlos und geschockt.",
            image: "images/journal.jpg",
            choices: [
                { text: "Fund berichten", next: "berichten_sam" },
                { text: "Fund verbergen", next: "verbergen_sam" },
          ]
        },
        berichten_sam: {
            text: "Sam muss unbedingt Josh und den Anderen berichten, was sie gefunden hat.",
            image: "images/kanalrohr.jpg",
            choices: [
                { text: "weiter…", next: "berichten_sam1" },
          ]
        },
        berichten_sam1: {
            text: "Sie schließt das Tagebuch und geht weiter den Gang entlang. Am Ende des Ganges sieht sie eine Metalltür, welche sie mühsam öffnet.",
            image: "images/kanalrohr.jpg",
            choices: [
                { text: "weiter…", next: "berichten_sam2" },
          ]
        },
        berichten_sam2: {
            text: "Sie schaut in den Raum hinein und traut ihren Augen nicht. Josh sitzt unruhig in einer Ecke des Raumes.",
            image: "images/sam_josh.gif",
            choices: [
                { text: "weiter…", next: "berichten_sam3" },
          ]
        },
        berichten_sam3: {
            text: "Sam versucht, ihn zu beruhigen. Nach einer Weile beruhigt sich dieser.",
            image: "images/sam_josh.gif",
            choices: [
                { text: "weiter…", next: "berichten_sam4" },
          ]
        },
        berichten_sam4: {
            text: "Sie erzählt Josh, was sie soeben herausgefunden hat. Josh ist sichtlich geschockt und er kann es nur schwer verarbeiten.",
            image: "images/sam_josh.gif",
            choices: [
                { text: "weiter…", next: "berichten_sam5" },
          ]
        },
        berichten_sam5: {
            text: "Eine Weile später gehen sie los, um so schnell wie möglich die Mine zu verlassen.",
            image: "images/mine_0.jpg",
            choices: [
                { text: "weiter…", next: "berichten_sam6" },
          ]
        },
        berichten_sam6: {
            text: "Jessica, welche auf der anderen Seite wartet, hilft Sam Josh durch das eiskalte Wasser zu tragen. Jessica schaut sich nervös um.",
            image: "images/mine_0.jpg",
            choices: [
                { text: "weiter…", next: "berichten_sam7" },
          ]
        },
        berichten_sam7: {
            text: "Etwa auf halbem Weg, wird Josh plötzlich unter Wasser gezogen.",
            image: "images/mine_0.jpg",
            choices: [
                { text: "weiter…", next: "berichten_sam8" },
          ]
        },
        berichten_sam8: {
            text: "Jessica und Sam verstecken sich hinter einem Felsen. Josh ist dem Wendigo nun schutzlos ausgeliefert.",
            image: "images/mine_0.jpg",
            choices: [
                { text: "weiter…", next: "berichten_sam9" },
          ]
        },
        berichten_sam9: {
            text: "Doch Josh hat keine Angst. Er sieht ein Schmetterlings-Tattoo auf dem Oberarm des Wendigos und erkennt es.",
            image: "images/tattoo.jpg",
            choices: [
                { text: "weiter…", next: "berichten_sam10" },
          ]
        },
        berichten_sam10: {
            text: "Es ist Hannah's.",
            image: "images/tattoo.jpg",
            choices: [
                { text: "weiter…", next: "berichten_sam11" },
          ]
        },
        berichten_sam11: {
            text: "Unter Tränen sagt er zu Hannah, dass er sie liebt und dass ihm alles leid tut, was Hannah durchmachen musste.",
            image: "images/josh_tod.gif",
            choices: [
                { text: "weiter…", next: "berichten_sam12" },
          ]
        },
        berichten_sam12: {
            text: "Der Wendigo lässt einen ohrenbetäubenden Schrei heraus und greift Josh am Hals. Er hebt ihm aus dem Wasser.",
            image: "images/josh_tod.gif",
            choices: [
                { text: "weiter…", next: "berichten_sam13" },
          ]
        },
        berichten_sam13: {
            text: "Der Wendigo verschleppt Josh.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "zurück" },
          ]
        },
        verbergen_sam: {
            text: "Josh verdient es nicht, die Wahrheit zu erfahren. Er hat sie grausam behandelt und das als ihr bester Freund.",
            image: "images/sam_klettern.jpg",
            choices: [
                { text: "weiter…", next: "verbergen_sam1" },
          ]
        },
        verbergen_sam1: {
            text: "Sie ist der Meinung, dass Josh es schon alleine zurückschaffen wird.",
            image: "images/sam_klettern.jpg",
            choices: [
                { text: "weiter…", next: "verbergen_sam2" },
          ]
        },
        verbergen_sam2: {
            text: "Sam klettert bis an die Spitze einer Felswand und rennt zurück zur Lodge, bei der sie auf Jessica trifft.",
            image: "images/sam_klettern.jpg",
            choices: [
                { text: "weiter…", next: "verbergen_sam3" },
          ]
        },
        verbergen_sam3: {
            text: "Sam hat Josh zurückgelassen.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "zurück_sam" },
          ]
        },
        zurück_sam: {
            text: "Sam und Jessica finden ihren Weg zurück zur Hintertür der Lodge. Sie haben ein ungutes Gefühl und langsam betreten sie die Lodge durch die Hintertür.",
            image: "images/lodge.gif",
            choices: [
                { text: "weiter…", next: "zurück_sam1" },
          ]
        },
        zurück_sam1: {
            text: "Sam Stoppt abrupt als sie Hannah's Wendigo an einem Kronleuchter hängen sieht. Jessica flüstert, dass sich Sam nicht bewegen soll.",
            image: "images/lodge.gif",
            choices: [
                { text: "Auf Jessica hören", next: "hören_sam" },
                { text: "Sich bewegen", next: "bewegen_sam" },
          ]
        },
        hören_sam: {
            text: "Sam bleibt ruckartig stehen, als Jessica sie warnt.",
            image: "images/sam_still.gif",
            choices: [
                { text: "weiter…", next: "hören_sam1" },
          ]
        },
        hören_sam1: {
            text: "Der Wendigo schaut in ihre Richtung. Doch dadurch, dass Sam sich nicht bewegt, kann der Wendigo sie nicht erkennen.",
            image: "images/sam_still.gif",
            choices: [
                { text: "weiter…", next: "sam_lebt_sam" },
          ]
        },
        bewegen_sam: {
            text: "Sam hört nicht auf Jessica, sondern läuft auf ihre Freunde zu. Ihre Bewegungen machen den Wendigo auf sie aufmerksam.",
            image: "images/sam_flucht.gif",
            choices: [
                { text: "weiter…", next: "bewegen_sam1" },
          ]
        },
        bewegen_sam1: {
            text: "Jessica rührt sich nicht von der Stelle und so bekommt der Wendigo nur etwas von Sam mit.",
            image: "images/sam_flucht.gif",
            choices: [
                { text: "weiter…", next: "bewegen_sam2" },
          ]
        },
        bewegen_sam2: {
            text: "Der Wendigo rennt auf Sam zu und reißt mit einer Klaue Sam den Unterleib auf. Sie stirbt sofort.",
            image: "images/sam_tod.gif",
            choices: [
                { text: "weiter…", next: "bewegen_sam3" },
          ]
        },
        bewegen_sam3: {
            text: "Sam ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "Geschichte neu beginnen", next: "start" },
          ]
        },
        sam_lebt_sam: {
            text: "Der laute und schrille Schrei des Wendigo, zieht weitere Wendigos an, wobei Hannah von allen am Stärksten ausschaut.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "sam_lebt_sam1" },
          ]
        },
        sam_lebt_sam1: {
            text: "Vor den Augen der Freunde beginnt sie die anderen Wendigos zu bekämpfen.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "sam_lebt_sam2" },
          ]
        },
        sam_lebt_sam2: {
            text: "Sie überwältigt einen und wirft den Toten mit abgerissenem Kopf gegen ein Rohr. Das Rohr bricht auf und Gas wird in der Lodge freisetzt.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "sam_lebt_sam3" },
          ]
        },
        sam_lebt_sam3: {
            text: "Sam bemerkt das und geht langsam zu einem der Schränke, ohne von Hannah gesehen zu werden.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "sam_lebt_sam4" },
          ]
        },
        sam_lebt_sam4: {
            text: "Sam krallt sich ein Feuerzeug von einem der Schränke.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "sam_lebt_sam5" },
          ]
        },
        sam_lebt_sam5: {
            text: "Jetzt muss sie nur noch das Gas durch das Feuerzeug entfachen. Sam schaut zu Jessica.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "Teamwork", next: "teamwork_sam" },
                { text: "Selbstständig", next: "selbstständig_sam" },
          ]
        },
        teamwork_sam: {
            text: "Die Wendigos sind abgelenkt und so nutzen Sam und Jessica die Chance einen Plan zu feilschen.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "teamwork_sam1" },
          ]
        },
        teamwork_sam1: {
            text: "Sam gestikuliert und macht Jessica klar, dass sie sich leise nach draußen begeben sollen.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "teamwork_sam2" },
          ]
        },
        teamwork_sam2: {
            text: "Sollten sie es sicher nach draußen geschafft haben, wird Sam das Feuerzeug in die Lodge werfen.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "teamwork_sam3" },
          ]
        },
        teamwork_sam3: {
            text: "Die Wendios sind immernoch abgelenkt und so schleichen Sam und Jessica sicher nach draußen.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "teamwork_sam4" },
          ]
        },
        teamwork_sam4: {
            text: "„Leb wohl, Hannah.“ sind Sam's Worte, als sie das Feuerzeug in die Lodge wirft.",
            image: "images/explosion.gif",
            choices: [
                { text: "weiter…", next: "teamwork_sam5" },
          ]
        },
        teamwork_sam5: {
            text: "Mit einem lauten Knall explodiert die Lodge und geht in Flammen auf.",
            image: "images/explosion.gif",
            choices: [
                { text: "weiter…", next: "teamwork_sam6" },
          ]
        },
        teamwork_sam6: {
            text: "Das Einzige was Sam und Jessica hören können, sind die schrillen Schreie der brennenden Wendigos.",
            image: "images/explosion.gif",
            choices: [
                { text: "weiter…", next: "rettung_sam" },
          ]
        },
        rettung_sam: {
            text: "Die zwei Freunde stehen benommen vor der brennenden Lodge. Das Geräusch eines Helikopters ist in der Ferne zu hören.",
            image: "images/ende.jpg",
            choices: [
                { text: "weiter…", next: "rettung_sam1" },
          ]
        },
        rettung_sam1: {
            text: "Der Rauch des Feuers steigt in den Himmel. Sie werden gerettet.",
            image: "images/ende.jpg",
            choices: [
                { text: "weiter…", next: "rettung_sam2" },
          ]
        },
        rettung_sam2: {
            text: "Die Sonne geht auf und die Nacht verblasst.",
            image: "images/ende.jpg",
            choices: [
                { text: "Geschichte neu beginnen", next: "" },
          ]
        },
        selbstständig_sam: {
            text: "Ohne sich mit Jessica abzusprechen, schreit sie „RENN SOFORT RAUS!“",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "selbstständig_sam1" },
          ]
        },
        selbstständig_sam1: {
            text: "Jessica schaut sie entsetzt an.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "selbstständig_sam2" },
          ]
        },
        selbstständig_sam2: {
            text: "Sam's Schrei macht die Wendigos erneut auf sie aufmerksam. Einer von ihnen schnappt sie und wirft sie gegen eine Säule.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "selbstständig_sam3" },
          ]
        },
        selbstständig_sam3: {
            text: "Jessica will Sam helfen, doch sie zögert. Schließlich rennt sie zum Ausgang der Lodge.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "selbstständig_sam4" },
          ]
        },
        selbstständig_sam4: {
            text: "Ein Wendigo ist ihr dicht auf den Fersen.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "selbstständig_sam5" },
          ]
        },
        selbstständig_sam5: {
            text: "Sam zündet das Feuerzeug.",
            image: "images/explosion.gif",
            choices: [
                { text: "weiter…", next: "selbstständig_sam6" },
          ]
        },
        selbstständig_sam6: {
            text: "Das Gas entzündet sich. Die Wucht der Explosion schleudert Jessica nach draußen.",
            image: "images/explosion.gif",
            choices: [
                { text: "weiter…", next: "selbstständig_sam7" },
          ]
        },
        selbstständig_sam7: {
            text: "Das Einzige was Jessica hören kann, sind die schrillen Schreie von Sam und der brennenden Wendigos.",
            image: "images/explosion.gif",
            choices: [
                { text: "weiter…", next: "selbstständig_sam8" },
          ]
        },
        selbstständig_sam8: {
            text: "Sam hat sich für Jessica geopfert.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "js_entkommen" },
          ]
        },
        js_entkommen: {
            text: "Jessica steht benommen vor der brennenden Lodge. Das Geräusch eines Helikopters ist in der Ferne zu hören.",
            image: "images/ende.jpg",
            choices: [
                { text: "weiter…", next: "js_entkommen1" },
          ]
        },
        js_entkommen1: {
            text: "Der Rauch des Feuers steigt in den Himmel. Sie werden gerettet.",
            image: "images/ende.jpg",
            choices: [
                { text: "weiter…", next: "js_entkommen2" },
          ]
        },
        js_entkommen2: {
            text: "Die Sonne geht auf und die Nacht verblasst.",
            image: "images/ende.jpg",
            choices: [
                { text: "Geschichte neu beginnen", next: "" },
          ]
        },
        ignorieren: {
            text: "Sam hört die Anzahl der Schüsse, es waren genau zwei. Zu Jessica meint sie, dass sie sich womöglich verhört hat.",
            image: "images/keller_3.jpg",
            choices: [
                { text: "weiter…", next: "ignorieren1" },
          ]
        },
        ignorieren1: {
            text: "Sam hat Angst und das nicht ohne Grund.",
            image: "images/keller_3.jpg",
            choices: [
                { text: "weiter…", next: "ignorieren2" },
          ]
        },
        ignorieren2: {
            text: "Erst Josh, der verrückt spielt. Dann dieser komische Fremde, der plötzlich aufgetaucht ist und jetzt diese Wendigos. Es ist womöglich besser, doch erst einmal hier hier bleiben.",
            image: "images/keller_3.jpg",
            choices: [
                { text: "weiter…", next: "ignorieren3" },
          ]
        },
        ignorieren3: {
            text: "Sam wird aus ihren Gedanken gerissen als plötzlich Schreie aus der Ferne zu hören sind.",
            image: "images/keller_3.jpg",
            choices: [
                { text: "weiter…", next: "ignorieren4" },
          ]
        },
        ignorieren4: {
            text: "Sie hofft, dass Chris noch am Leben ist.",
            image: "images/keller_3.jpg",
            choices: [
                { text: "weiter…", next: "chris_lebt" },
          ]
        },
        chris_lebt: {
            text: "Chris ist verwundet, doch es geht ihm gut.",
            image: "images/chris_lebt.gif",
            choices: [
                { text: "weiter…", next: "chris_lebt1" },
          ]
        },
        chris_lebt1: {
            text: "Chris und Sam betreten den Keller und Jessica fragt, wo der Fremde ist. Chris erzählt ihr von dem Tod des Fremden und dem Verschwinden von Josh.",
            image: "images/chris_lebt.gif",
            choices: [
                { text: "Sich um Chris sorgen", next: "sorgen" },
                { text: "Chris fragen, wie es weitergeht", next: "fragen" },
          ]
        },
        sorgen: {
            text: "Sam macht sich große Sorgen um Chris. Er hat den Fremden sterben sehen und wäre selbst fast gestorben.",
            image: "images/chris_lebt.gif",
            choices: [
                { text: "weiter…", next: "sorgen1" },
          ]
        },
        sorgen1: {
            text: "Doch er winkt Sam ab. „Mir ist es wichtiger, dass wir alle zusammen entkommen werden“.",
            image: "images/chris_lebt.gif",
            choices: [
                { text: "weiter…", next: "sorgen2" },
          ]
        },
        sorgen2: {
            text: "Sam glaubt dieser Aussage nicht, denn Chris sieht erschöpft und geschwächt aus. Seine Wunden sehen ebenso nicht sonderlich gut aus.",
            image: "images/chris_lebt.gif",
            choices: [
                { text: "weiter…", next: "sorgen3" },
          ]
        },
        sorgen3: {
            text: "Im Keller beschließt Chris, nach einem anderen Ausgang zu suchen, sollte ein Wendigo einbrechen. Jessica und Sam sind einverstanden.",
            image: "images/chris_lebt.gif",
            choices: [
                { text: "weiter…", next: "sorgen4" },
          ]
        },
        sorgen4: {
            text: "Auch Josh müssen sie finden.",
            image: "images/chris_lebt.gif",
            choices: [
                { text: "weiter…", next: "josh_suche" },
          ]
        },
        fragen: {
            text: "„Wir müssen bis zum Morgengrauen überleben, das steht fest. Es steht auch fest, dass wir hier nicht bleiben können“.",
            image: "images/chris_lebt.gif",
            choices: [
                { text: "weiter…", next: "fragen1" },
          ]
        },
        fragen1: {
            text: "Chris beschließt nach einem anderen Ausgang zu suchen, sollte ein Wendigo einbrechen. Jessica und Sam sind einverstanden.",
            image: "images/wald_1.gif",
            choices: [
                { text: "weiter…", next: "fragen2" },
          ]
        },
        fragen2: {
            text: "Auch Josh müssen sie finden.",
            image: "images/wald_1.gif.gif",
            choices: [
                { text: "weiter…", next: "josh_suche" },
          ]
        },
        josh_suche: {
            text: "Sam kommt die böse Vorahnung, dass Josh wahrscheinlich in die Minen verschleppt wurde.",
            image: "images/wald_1.gif",
            choices: [
                { text: "weiter…", next: "josh_suche1" },
          ]
        },
        josh_suche1: {
            text: "Als sie sich wieder hinaus trauen, finden sie die Leiche des Fremden. Der Kopf des Fremden liegt ein paar Meter weiter entfernt im Schnee. Sam und Jessica sind von diesem Anblick vollkommen verstört.",
            image: "images/fremder_kopf.jpeg",
            choices: [
                { text: "weiter…", next: "josh_suche2" },
          ]
        },
        josh_suche2: {
            text: "Chris untersucht dessen Leiche und findet eine Karte, sowie ein paar Habseligkeiten. Diese nehmen sie mit.",
            image: "images/fremder_kopf.jpeg",
            choices: [
                { text: "weiter…", next: "josh_suche3" },
          ]
        },
        josh_suche3: {
            text: "Sam, Jessica und Chris machen sich auf den Weg, Josh zu finden. Während der Suche liest Sam aus dem Tagebuch des Fremden vor. Das was sie darin liest, macht alle sprachlos.",
            image: "images/wald_1.gif",
            choices: [
                { text: "weiter…", next: "josh_suche4" },
          ]
        },
        josh_suche4: {
            text: "In dem Tagebuch des Fremden stehen neue Informationen über die Wendigos und deren Geschichte. Diese Entdeckungen beinhalten die Erkenntnis, dass ein Wendigo-Biss nicht ansteckend ist.",
            image: "images/wald_1.gif",
            choices: [
                { text: "weiter…", next: "josh_suche5" },
          ]
        },
        josh_suche5: {
            text: "Die Herkunft des Wendigos.",
            image: "images/cree.jpg",
            choices: [
                { text: "weiter…", next: "josh_suche6" },
          ]
        },
        josh_suche6: {
            text: "Auf dem Blackwood Mountain lebte einst ein indigener Eingeborenenstamm, die 'Cree'. Die Schamanen des Stammes erzählten Geschichten von großen Kreaturen geboren im Eis. Der Stamm respektierte den Berg und alle auf ihm lebenden Tiere.",
            image: "images/fremder_tagebuch.jpg",
            choices: [
                { text: "weiter…", next: "josh_suche7" },
          ]
        },
        josh_suche7: {
            text: "Der Berg wurde den Cree heilig und somit auch jedes Tier. Sie glaubten es würde Unglück bringen, ein auf dem Berg lebendes Tier zu töten, weshalb sie ihre Jagdgründe anderorts suchten.",
            image: "images/fremder_tagebuch.jpg",
            choices: [
                { text: "weiter…", next: "josh_suche8" },
          ]
        },
        josh_suche8: {
            text: "Doch 1893 kamen die weißen Einsiedler, die Bergleute. Sie fanden Zinn im Berg, und später auch Spuren von Radium. Sie gruben deshalb tief in den heiligen Berg. Die Cree sagten, dass der Berg aufschrie und so der Wendigogeist freigesetzt wurde.",
            image: "images/fremder_tagebuch_2.jpg",
            choices: [
                { text: "weiter…", next: "josh_suche9" },
          ]
        },
        josh_suche9: {
            text: "Der Eintrag in dem Tagebuch des Fremden, bezüglich der Geschichte der Wendigos ist unvollständig.",
            image: "images/fremder_tagebuch_1.jpg",
            choices: [
                { text: "weiter…", next: "josh_suche10" },
          ]
        },
        josh_suche10: {
            text: "Sam, Chris und Jessica laufen tiefer in den Wald und nach einer Weile finden sie ein Sanatorium. Sie hoffen dort, Josh finden zu können.",
            image: "images/sanatorium.jpg",
            choices: [
                { text: "weiter…", next: "josh_suche11" },
          ]
        },
        josh_suche11: {
            text: "Sam versucht die Eingangstür zu öffnen doch die Tür bewegt sich keinen Zentimeter. Sie ist abgesperrt.",
            image: "images/sanatorium.jpg",
            choices: [
                { text: "weiter…", next: "josh_suche12" },
          ]
        },
        josh_suche12: {
            text: "Jessica weist auf einen Schacht hin, der in das Innere des Sanatoriums führt. Chris geht als Erster hinein, von Jessica gefolgt und zum Schluss Sam, die noch den Deckel schließt.",
            image: "images/schacht.jpg",
            choices: [
                { text: "weiter…", next: "josh_suche13" },
          ]
        },
        josh_suche13: {
            text: "Als Sam durch die Abwasserkanäle kriecht, hört sie wie Jessica um Hilfe ruft.",
            image: "images/schacht.jpg",
            choices: [
                { text: "Stimme folgen", next: "stimme_folgen" },
                { text: "Weiterkriechen", next: "weiterkriechen" },
          ]
        },
        stimme_folgen: {
            text: "Sam beschließt, der Stimme zu folgen und stürzt durch den Schacht in eine kleine Höhle.",
            image: "images/metalltür.jpg",
            choices: [
                { text: "weiter…", next: "entscheidungen_2" },
          ]
        },
        entscheidungen_2: {
            text: "Die Stimme hört sich für Sam nicht mehr nach Jessica an, sondern nach etwas, dass heftig gegen eine Tür knallt.",
            image: "images/metalltür.jpg",
            choices: [
                { text: "Verriegelung öffnen", next: "verriegelung" },
                { text: "Vorbeigehen", next: "vorbeigehen" },
          ]
        },
        verriegelung: {
            text: "Sam denkt, dass Jessica eventuell falsch abgebogen ist und jetzt eingesperrt sein könnte.",
            image: "images/metalltür.jpg",
            choices: [
                { text: "weiter…", next: "verriegelung1" },
          ]
        },
        verriegelung1: {
            text: "Sam öffnet langsam die Verriegelung.",
            image: "images/metalltür.jpg",
            choices: [
                { text: "weiter…", next: "verriegelung2" },
          ]
        },
        verriegelung2: {
            text: "Der dahinterliegende Raum ist dunkel, aber Sam kann trotzdem noch etwas erkennen. Das, was sie im Schatten sieht, lässt ihr einen kalten Schauer den Rücken herunter laufen.",
            image: "images/wendigo_1.gif",
            choices: [
                { text: "weiter…", next: "verriegelung3" },
          ]
        },
        verriegelung3: {
            text: "Mit dem Rücken zu ihr gekehrt, kniet ein Wendigo auf dem Boden. Dieser scheint gerade an etwas Totem zu fressen, denn der Gestank ist unaushaltbar.",
            image: "images/wendigo_1.gif",
            choices: [
                { text: "weiter…", next: "verriegelung4" },
          ]
        },
        verriegelung4: {
            text: "Der Wendigo bemerkt sie und innerhalb einer Sekunde springt er auf sie und bricht ihr den Nacken.",
            image: "images/sam_tod_2.gif",
            choices: [
                { text: "weiter…", next: "verriegelung5" },
          ]
        },
        verriegelung5: {
            text: "Die Anderen laufen zurück, um Sam wiederzufinden doch vergebens. Sam ist tot und verschwunden.",
            image: "images/sam_tod_2.gif",
            choices: [
                { text: "weiter…", next: "verriegelung6" },
          ]
        },
        verriegelung6: {
            text: "Sam ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "Geschichte neu beginnen", next: "start" },
          ]
        },
        vorbeigehen: {
            text: "Nein, das kann unmöglich Jessica sein. Sam geht schnell  an der Tür vorbei.",
            image: "images/metalltür.jpg",
            choices: [
                { text: "weiter…", next: "vorbeigehen1" },
          ]
        },
        vorbeigehen1: {
            text: "Nach einem langen Tunnel findet sie wieder ihren Weg zurück zur Gruppe. An einer Sackgasse werden sie gezwungen anzuhalten.",
            image: "images/jessica_sam.jpg",
            choices: [
                { text: "weiter…", next: "vorbeigehen2" },
          ]
        },
        vorbeigehen2: {
            text: "Sam klettert eine Felswand hinauf. Oben angekommen sagt sie zu Jessica, dass sie mit Chris an einer anderen Stelle suchen oder zur Lodge zurückkehren sollen.",
            image: "images/sam_klettern.jpg",
            choices: [
                { text: "weiter…", next: "vorbeigehen3" },
          ]
        },
        vorbeigehen3: {
            text: "Sam sucht Josh nun alleine.",
            image: "images/sam_klettern.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch" },
          ]
        },
        weiterkriechen: {
            text: "Sam macht kehrt und nach einer Weile findet sie ihren Weg zurück zu Jessica und Chris. An einer Sackgasse werden sie gezwungen anzuhalten.",
            image: "images/jessica_sam.jpg",
            choices: [
                { text: "weiter…", next: "weiterkriechen1" },
          ]
        },
        weiterkriechen1: {
            text: "Sam klettert eine Felswand hinauf. Oben angekommen sagt sie zu Jessica, dass sie mit Chris an einer anderen Stelle suchen oder zur Lodge zurückkehren sollen.",
            image: "images/sam_klettern.jpg",
            choices: [
                { text: "weiter…", next: "weiterkriechen2" },
          ]
        },
        weiterkriechen2: {
            text: "Sam sucht Josh nun alleine.",
            image: "images/sam_klettern.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch" },
          ]
        },
        tagebuch: {
            text: "Oben angekommen, befindet sich Sam in einer alten Mine. Nur ein paar Lampen erleuchten den langen Gang vor ihr.",
            image: "images/mine.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch1" },
          ]
        },
        tagebuch1: {
            text: "Vorsichtig tastet sie sich vor. Am Ende des Ganges findet sie etwas, was sie komplett erstarren lässt.",
            image: "images/mine.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch2" },
          ]
        },
        tagebuch2: {
            text: "Auf dem Boden befindet sich Beth's abgetrennter Kopf.",
            image: "images/beth_kopf.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch3" },
          ]
        },
        tagebuch3: {
            text: "Sam wird von diesem Anblick schlagartig übel.",
            image: "images/beth_kopf.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch4" },
          ]
        },
        tagebuch4: {
            text: "Sie braucht einige Zeit, um sich zu sammeln. Doch sie schafft es und tritt näher and den Kopf heran.",
            image: "images/beth_kopf.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch5" },
          ]
        },
        tagebuch5: {
            text: "Sie sieht ein Tagebuch neben dem Skelett liegen. Sam erkennt es als Hannah's.",
            image: "images/beth_kopf.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch6" },
          ]
        },
        tagebuch6: {
            text: "Sie öffnet es.",
            image: "images/journal_1.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch7" },
          ]
        },
        tagebuch7: {
            text: "Hannah's Tagebuch.",
            image: "images/journal_1.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch8" },
          ]
        },
        tagebuch8: {
            text: "Tag 1.",
            image: "images/journal_1.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch9" },
          ]
        },
        tagebuch9: {
            text: "Meine kleine Schwester ist tot. Sie hat den Sturz nicht überlebt...Ich habe gesehen, wie die Farbe aus ihrem Gesicht wich. Mein Bein ist gebrochen. Ich bin ganz allein, gefangen mit Beths Leiche. Bald wird jemand kommen.",
            image: "images/journal_1.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch10" },
          ]
        },
        tagebuch10: {
            text: "Tag 5.",
            image: "images/journal_2.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch11" },
          ]
        },
        tagebuch11: {
            text: "Ich war noch nie so HUNGRIG. Es fühlt sich so an, als würde sich mein Magen verdrehen. Ich habe mir Beth's Pulli genommen Jetzt ist es viel wärmer. Sie passt immer noch auf mich auf.",
            image: "images/journal_2.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch12" },
          ]
        },
        tagebuch12: {
            text: "Tag 30.",
            image: "images/journal_2.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch13" },
          ]
        },
        tagebuch13: {
            text: "Es tut mir leid Beth, ich habe keine Wahl. Ich STERBE. Nur so kann ich hier unten noch überleben. Wenn das hier jemand findet - ES TUT MIR LEID. Ich musste es tun. Es ging nicht anders. Verzeih mir, Beth. Es tut mir leid.",
            image: "images/journal_2.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch14" },
          ]
        },
        tagebuch14: {
            text: "Tag 33.",
            image: "images/journal.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch15" },
          ]
        },
        tagebuch15: {
            text: "Meine Hände fühlen sich schmutzig an. Meine Nägel sind ausgefallen, HERAUSGEDRÜCKT. Ich habe Schmerzen, aber mir ist nicht mehr KALT. KEIN SCHMERZ. Ich werde STÄRKER. Es fühlt sich so an, als würde ich mich VERÄNDERN.",
            image: "images/journal.jpg",
            choices: [
                { text: "weiter…", next: "tagebuch16" },
          ]
        },
        tagebuch16: {
            text: "Sam starrt auf die von Hannah verfassten Zeilen. Sie ist sprachlos und geschockt.",
            image: "images/journal.jpg",
            choices: [
                { text: "Fund berichten", next: "berichten" },
                { text: "Fund verbergen", next: "verbergen" },
          ]
        },
        berichten: {
            text: "Sam muss unbedingt Josh und den Anderen berichten, was sie gefunden hat.",
            image: "images/kanalrohr.jpg",
            choices: [
                { text: "weiter…", next: "berichten1" },
          ]
        },
        berichten1: {
            text: "Sie schließt das Tagebuch und geht weiter den Gang entlang. Am Ende des Ganges sieht sie eine Metalltür, welche sie mühsam öffnet.",
            image: "images/kanalrohr.jpg",
            choices: [
                { text: "weiter…", next: "berichten2" },
          ]
        },
        berichten2: {
            text: "Sie schaut in den Raum hinein und traut ihren Augen nicht. Josh sitzt unruhig in einer Ecke des Raumes.",
            image: "images/sam_josh.gif",
            choices: [
                { text: "weiter…", next: "berichten3" },
          ]
        },
        berichten3: {
            text: "Sam versucht, ihn zu beruhigen. Nach einer Weile beruhigt sich dieser.",
            image: "images/sam_josh.gif",
            choices: [
                { text: "weiter…", next: "berichten4" },
          ]
        },
        berichten4: {
            text: "Sie erzählt Josh, was sie soeben herausgefunden hat. Josh ist sichtlich geschockt und er kann es nur schwer verarbeiten.",
            image: "images/sam_josh.gif",
            choices: [
                { text: "weiter…", next: "berichten5" },
          ]
        },
        berichten5: {
            text: "Eine Weile später gehen sie los, um so schnell wie möglich die Mine zu verlassen.",
            image: "images/mine_0.jpg",
            choices: [
                { text: "weiter…", next: "berichten6" },
          ]
        },
        berichten6: {
            text: "Chris, welcher auf der anderen Seite wartet, hilft Sam Josh durch das eiskalte Wasser zu tragen. Jessica schaut sich nervös um.",
            image: "images/mine_0.jpg",
            choices: [
                { text: "weiter…", next: "berichten7" },
          ]
        },
        berichten7: {
            text: "Etwa auf halbem Weg, wird Chris plötzlich unter Wasser gezogen.",
            image: "images/mine_0.jpg",
            choices: [
                { text: "weiter…", next: "berichten8" },
          ]
        },
        berichten8: {
            text: "Jessica und Sam verstecken sich hinter einem Felsen. Josh ist dem Wendigo nun schutzlos ausgeliefert.",
            image: "images/mine_0.jpg",
            choices: [
                { text: "weiter…", next: "berichten9" },
          ]
        },
        berichten9: {
            text: "Doch Josh hat keine Angst. Er sieht ein Schmetterlings-Tattoo auf dem Oberarm des Wendigos und erkennt es.",
            image: "images/tattoo.jpg",
            choices: [
                { text: "weiter…", next: "berichten10" },
          ]
        },
        berichten10: {
            text: "Es ist Hannah's.",
            image: "images/tattoo.jpg",
            choices: [
                { text: "weiter…", next: "berichten11" },
          ]
        },
        berichten11: {
            text: "Unter Tränen sagt er zu Hannah, dass er sie liebt und dass ihm alles leid tut, was Hannah durchmachen musste.",
            image: "images/josh_tod.gif",
            choices: [
                { text: "weiter…", next: "berichten12" },
          ]
        },
        berichten12: {
            text: "Der Wendigo lässt einen ohrenbetäubenden Schrei heraus und greift Josh am Hals. Er hebt ihm aus dem Wasser.",
            image: "images/josh_tod.gif",
            choices: [
                { text: "weiter…", next: "berichten13" },
          ]
        },
        berichten13: {
            text: "Der Wendigo verschleppt Josh.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "zurück" },
          ]
        },
        verbergen: {
            text: "Josh verdient es nicht, die Wahrheit zu erfahren. Er hat sie grausam behandelt und das als ihr bester Freund.",
            image: "images/sam_klettern.jpg",
            choices: [
                { text: "weiter…", next: "verbergen1" },
          ]
        },
        verbergen1: {
            text: "Sie ist der Meinung, dass Josh es schon alleine zurückschaffen wird.",
            image: "images/sam_klettern.jpg",
            choices: [
                { text: "weiter…", next: "verbergen2" },
          ]
        },
        verbergen2: {
            text: "Sam klettert bis an die Spitze einer Felswand und rennt zurück zur Lodge, bei der sie auf Jessica und Chris trifft.",
            image: "images/sam_klettern.jpg",
            choices: [
                { text: "weiter…", next: "verbergen3" },
          ]
        },
        verbergen3: {
            text: "Sam hat Josh zurückgelassen.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "zurück" },
          ]
        },
        zurück: {
            text: "Sam, Jessica und Chris finden ihren Weg zurück zur Hintertür der Lodge. Alle haben ein ungutes Gefühl und langsam betreten sie die Lodge durch die Hintertür.",
            image: "images/lodge.gif",
            choices: [
                { text: "weiter…", next: "zurück1" },
          ]
        },
        zurück1: {
            text: "Sam Stoppt abrupt als sie Hannah's Wendigo an einem Kronleuchter hängen sieht. Chris flüstert, dass sich Sam und Jessica nicht bewegen sollen.",
            image: "images/lodge.gif",
            choices: [
                { text: "Auf Chris hören", next: "hören" },
                { text: "Sich bewegen", next: "bewegen" },
          ]
        },
        hören: {
            text: "Sam bleibt ruckartig stehen, als Chris sie warnt.",
            image: "images/sam_still.gif",
            choices: [
                { text: "weiter…", next: "hören1" },
          ]
        },
        hören1: {
            text: "Der Wendigo schaut in ihre Richtung. Doch dadurch, dass Sam sich nicht bewegt, kann der Wendigo sie nicht erkennen.",
            image: "images/sam_still.gif",
            choices: [
                { text: "weiter…", next: "sam_lebt" },
          ]
        },
        bewegen: {
            text: "Sam hört nicht auf Chris, sondern läuft auf ihre Freunde zu. Ihre Bewegungen machen den Wendigo auf sie aufmerksam.",
            image: "images/sam_flucht.gif",
            choices: [
                { text: "weiter…", next: "bewegen1" },
          ]
        },
        bewegen1: {
            text: "Chris und Jessica rühren sich nicht von der Stelle und so bekommt der Wendigo nur etwas von Sam mit.",
            image: "images/sam_flucht.gif",
            choices: [
                { text: "weiter…", next: "bewegen2" },
          ]
        },
        bewegen2: {
            text: "Der Wendigo rennt auf Sam zu und reißt mit einer Klaue Sam den Unterleib auf. Sie stirbt sofort.",
            image: "images/sam_tod.gif",
            choices: [
                { text: "weiter…", next: "bewegen3" },
          ]
        },
        bewegen3: {
            text: "Sam ist tot.",
            image: "images/butterfly.gif",
            choices: [
                { text: "Geschichte neu beginnen", next: "start" },
          ]
        },
        sam_lebt: {
            text: "Der laute und schrille Schrei des Wendigo, zieht weitere Wendigos an, wobei Hannah von allen am Stärksten ausschaut.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "sam_lebt1" },
          ]
        },
        sam_lebt1: {
            text: "Vor den Augen der Freunde beginnt sie die anderen Wendigos zu bekämpfen.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "sam_lebt2" },
          ]
        },
        sam_lebt2: {
            text: "Sie überwältigt einen und wirft den Toten mit abgerissenem Kopf gegen ein Rohr. Das Rohr bricht auf und Gas wird in der Lodge freisetzt.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "sam_lebt3" },
          ]
        },
        sam_lebt3: {
            text: "Sam bemerkt das und geht langsam zu einem der Schränke, ohne von Hannah gesehen zu werden.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "sam_lebt4" },
          ]
        },
        sam_lebt4: {
            text: "Sam krallt sich ein Feuerzeug von einem der Schränke.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "sam_lebt5" },
          ]
        },
        sam_lebt5: {
            text: "Jetzt muss sie nur noch das Gas durch das Feuerzeug entfachen. Sam schaut zu Jessica und Chris.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "Teamwork", next: "teamwork" },
                { text: "Selbstständig", next: "selbstständig" },
          ]
        },
        teamwork: {
            text: "Die Wendigos sind abgelenkt und so nutzen sie, Chris und Jessica die Chance einen Plan zu feilschen.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "teamwork1" },
          ]
        },
        teamwork1: {
            text: "Sam gestikuliert und macht den anderen Beiden klar, dass sie sich alle leise nach draußen begeben sollen.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "teamwork2" },
          ]
        },
        teamwork2: {
            text: "Sollten es alle sicher nach draußen geschafft haben, wird Sam das Feuerzeug in die Lodge werfen.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "teamwork3" },
          ]
        },
        teamwork3: {
            text: "Die Wendios sind immernoch abgelenkt und so schleichen Sam, Jessica und Chris sicher nach draußen.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "teamwork4" },
          ]
        },
        teamwork4: {
            text: "„Leb wohl, Hannah.“ sind Sam's Worte, als sie das Feuerzeug in die Lodge wirft.",
            image: "images/explosion.gif",
            choices: [
                { text: "weiter…", next: "teamwork5" },
          ]
        },
        teamwork5: {
            text: "Mit einem lauten Knall explodiert die Lodge und geht in Flammen auf.",
            image: "images/explosion.gif",
            choices: [
                { text: "weiter…", next: "teamwork6" },
          ]
        },
        teamwork6: {
            text: "Das Einzige was Sam, Jessica und Chris hören können, sind die schrillen Schreie der brennenden Wendigos.",
            image: "images/explosion.gif",
            choices: [
                { text: "weiter…", next: "rettung" },
          ]
        },
        rettung: {
            text: "Die drei Freunde stehen benommen vor der brennenden Lodge. Das Geräusch eines Helikopters ist in der Ferne zu hören.",
            image: "images/ende.jpg",
            choices: [
                { text: "weiter…", next: "rettung1" },
          ]
        },
        rettung1: {
            text: "Der Rauch des Feuers steigt in den Himmel. Sie werden gerettet.",
            image: "images/ende.jpg",
            choices: [
                { text: "weiter…", next: "rettung2" },
          ]
        },
        rettung2: {
            text: "Die Sonne geht auf und die Nacht verblasst.",
            image: "images/ende.jpg",
            choices: [
                { text: "Geschichte neu beginnen", next: "" },
          ]
        },
        selbstständig: {
            text: "Ohne sich mit den Anderen abzusprechen, schreit sie den Anderen zu „RENNT SOFORT RAUS!“",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "selbstständig1" },
          ]
        },
        selbstständig1: {
            text: "Jessica und Chris schauen sie entsetzt an.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "selbstständig2" },
          ]
        },
        selbstständig2: {
            text: "Sam's Schrei macht die Wendigos erneut auf sie aufmerksam. Einer von ihnen schnappt sie und wirft sie gegen eine Säule.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "selbstständig3" },
          ]
        },
        selbstständig3: {
            text: "Jessica und Chris wollen Sam helfen, doch sie zögern. Schließlich rennen sie beide zum Ausgang der Lodge.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "selbstständig4" },
          ]
        },
        selbstständig4: {
            text: "Ein Wendigo ist ihnen dicht auf den Fersen.",
            image: "images/wendigo_abgelenkt.gif",
            choices: [
                { text: "weiter…", next: "selbstständig5" },
          ]
        },
        selbstständig5: {
            text: "Sam zündet das Feuerzeug.",
            image: "images/explosion.gif",
            choices: [
                { text: "weiter…", next: "selbstständig6" },
          ]
        },
        selbstständig6: {
            text: "Das Gas entzündet sich. Die Wucht der Explosion schleudert Jessica und Chris nach draußen.",
            image: "images/explosion.gif",
            choices: [
                { text: "weiter…", next: "selbstständig7" },
          ]
        },
        selbstständig7: {
            text: "Das Einzige was Jessica und Chris hören können, sind die schrillen Schreie von Sam und der brennenden Wendigos.",
            image: "images/explosion.gif",
            choices: [
                { text: "weiter…", next: "selbstständig8" },
          ]
        },
        selbstständig8: {
            text: "Sam hat sich für Chris und Jessica geopfert.",
            image: "images/butterfly.gif",
            choices: [
                { text: "weiter…", next: "jc_entkommen" },
          ]
        },
        jc_entkommen: {
            text: "Sie stehen benommen vor der brennenden Lodge. Das Geräusch eines Helikopters ist in der Ferne zu hören.",
            image: "images/ende.jpg",
            choices: [
                { text: "weiter…", next: "jc_entkommen1" },
          ]
        },
        jc_entkommen1: {
            text: "Der Rauch des Feuers steigt in den Himmel. Sie werden gerettet.",
            image: "images/ende.jpg",
            choices: [
                { text: "weiter…", next: "jc_entkommen2" },
          ]
        },
        jc_entkommen2: {
            text: "Die Sonne geht auf und die Nacht verblasst.",
            image: "images/ende.jpg",
            choices: [
                { text: "Geschichte neu beginnen", next: "" },
          ]
        },
      }
    },



    Jessica: {
        name: "Jessica",
        description: "furchtlos, unüberlegt, humorvoll",
        image: "images/jessica_ch.jpg",
        storyline: {
            start: {
              text: "Der Flügelschlag eines einzigen Schmetterlings heute, kann in einigen Wochen zu einem verheerenden Hurricane führen.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Folge mir", next: "first" },
              ]
          },
          first: {
              text: "Die kleinste Entscheidung kann die Zukunft dramatisch verändern.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Folge mir", next: "second" },
              ]
          },
          second: {
              text: "Deine Handlungen formen den Verlauf deiner Geschichte.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Folge mir", next: "third" },
              ]
          },
          third: {
              text: "Deine Geschichte ist eine von vielen Möglichkeiten",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Folge mir", next: "fourth" },
              ]
          },
          fourth: {
              text: "Wähle deine Handlungen mit Bedacht",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Folge mir", next: "fifth" },
              ]
          },
          fifth: {
              text: "Die kleinste Entscheidung kann die Zukunft dramatisch verändern.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Folge mir", next: "sixth" },
              ]
            },
            sixth: {
              text: "Im Laufe des Spiels wirst du mit schwierigen Entscheidungen konfrontiert, die über Leben und Tod deiner Freunde und sogar dein Eigenes Einfluss haben werden. Denke gut über deine Entscheidungen nach, denn… der Tod ist endgültig.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Folge mir", next: "Charakter3" },
              ]
            },

            Charakter3: {
                text: "Du spielst nun als Jessica.",
                image: "images/jessica.gif",
                choices: [
                    { text: "Beginne deine Geschichte", next: "prologue1" },
                ]
            },
            prologue1: {
                text: "2. Februar 2014",
                image: "images/snow.gif",
                choices: [
                    { text: "weiter…", next: "prologue2" },
                ]
            },
            prologue2: {
                text: "Die Freunde Sam, Josh, seine Zwillingsschwestern Hannah und Beth, Jessica und Chris treffen sich in der Berghütte der Blackwood Pines auf Mount Washington zu ihrem alljährlichen Winterausflug.",
                image: "images/snow.gif",
                choices: [
                    { text: "weiter…", next: "prologue3" },
                ]
            },
            prologue3: {
                text: "Während des Aufenthalts spielt ein Teil der Gruppe, Hannah, die in Chris verliebt ist, einen Streich. Woraufhin sie gedemütigt in den verschneiten Wald rennt.",
                image: "images/hannah_beth.gif",
                choices: [
                    { text: "weiter…", next: "prologue4" },
                ]
            },
            prologue4: {
                text: "Sowohl Beth, die ihr nachläuft, als auch Hannah, kamen nicht mehr zurück und wurden auch nicht von der Polizei gefunden und gelten als vermisst.",
                image: "images/hannah_beth_fall.gif",
                choices: [
                    { text: "weiter…", next: "prologue5" },
                ]
          },
          prologue5: {
              text: "Zum ersten Jahrestag des Verschwindens von Hannah und Beth Washington, lädt ihr Bruder Josh die verbliebenen drei Freunde erneut in die Blackwood Pines ein. Alle machen sich auf den Weg dorthin.",
              image: "images/josh_einladung.gif",
              choices: [
                  { text: "weiter…", next: "prologue6" },
              ]
          },
          prologue6: {
              text: "Im Verlauf der Nacht beginnt der idyllisch-wirkende Ausflug… unheilvoll zu werden.",
              image: "images/josh_einladung.gif",
              choices: [
                  { text: "weiter…", next: "jess_ankunft" },
              ]
          },
          jess_ankunft: {
              text: "Jessica denkt sich nichts dabei als sie die Einladung erhält.",
              image: "images/jessica_7.gif",
              choices: [
                  { text: "weiter…", next: "jess_ankunft1" },
              ]
          },
          jess_ankunft1: {
              text: "Ein Wochenende in der Berghütte in Blackwood Pines kann sicherlich nicht schaden. Sie liebt große Anwesen.",
              image: "images/jessica_7.gif",
              choices: [
                  { text: "weiter…", next: "jess_ankunft2" },
              ]
          },
          jess_ankunft2: {
              text: "Jessica ist recht früh da, also wartet sie bereits schon am Ausgang der Seilbahn auf Chris und Sam.",
              image: "images/jessica_ankunft.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft3" },
              ]
          },
          jess_ankunft3: {
              text: "In der Lodge angekommen treffen Jessica, Sam und Chris auf Josh, welcher bereits gespannt auf sie wartet.",
              image: "images/josh_ankunft1.gif",
              choices: [
                  { text: "weiter…", next: "jess_ankunft4" },
              ]
          },
          jess_ankunft4: {
              text: "Jessica bemerkt, dass sich Josh etwas unruhig verhält.",
              image: "images/josh_ankunft1.gif",
              choices: [
                  { text: "weiter…", next: "jess_ankunft5" },
              ]
          },
          jess_ankunft5: {
              text: "Gemeisam machen sie es sich in der Lodge bequem. Josh zündet das Feuer im Kamin.",
              image: "images/josh_ankunft1.gif",
              choices: [
                  { text: "weiter…", next: "jess_ankunft6" },
              ]
          },
          jess_ankunft6: {
              text: "Alles fühlt sich richtig an.",
              image: "images/josh_party.gif",
              choices: [
                  { text: "weiter…", next: "jess_ankunft7" },
              ]
          },
          jess_ankunft7: {
              text: "Jetzt geht die Party richtig los. Josh hat sich reichlich um die Versorgung gekümmert, vor allem was Alkohol betrifft.",
              image: "images/josh_party.gif",
              choices: [
                  { text: "weiter…", next: "jess_ankunft8" },
              ]
          },
          jess_ankunft8: {
              text: "Im Laufe des Abends kommt Josh eine Idee.",
              image: "images/josh_party.gif",
              choices: [
                  { text: "weiter…", next: "jess_ankunft9" },
              ]
          },
          jess_ankunft9: {
              text: "Er zeigt den Anderen ein ouja-board, welches er in einem der Schränke gefunden hat.",
              image: "images/ouja.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft10" },
              ]
          },
          jess_ankunft10: {
              text: "Josh möchte mit den Anderen Kontakt zu seinen verstorbenen Schwestern aufnehmen.",
              image: "images/ouja.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft11" },
              ]
          },
          jess_ankunft11: {
              text: "Jessica will eigentlich nur feiern. Sie versteht den Sinn hinter diesem Schwachsinn nicht.",
              image: "images/ouja.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft12" },
              ]
          },
          jess_ankunft12: {
              text: "Josh erklärt die Regeln und bestimmt Sam die Séance zu führen.",
              image: "images/ouja.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft13" },
              ]
          },
          jess_ankunft13: {
              text: "Sam stellt die Frage, ob jemand mit ihnen im Raum ist.",
              image: "images/ouja.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft14" },
              ]
          },
          jess_ankunft14: {
              text: "Plötzlich bewegt sich der Zeiger zu den Buchstaben 'HELP'.",
              image: "images/ouja_2.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft15" },
              ]
          },
          jess_ankunft15: {
              text: "Keiner von ihnen sagt ein Wort, nur Sam stellt die nächste Frage.",
              image: "images/ouja_2.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft16" },
              ]
          },
          jess_ankunft16: {
              text: "Die Fragen und die darauffolgenden Antworten des ouja-boards machen deutlich, dass sie tatsächlich mit Josh's Schwestern kommunizieren.",
              image: "images/ouja_2.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft17" },
              ]
          },
          jess_ankunft17: {
              text: "Josh möchte wissen wer der Geist ist und Sam stellt die Frage.",
              image: "images/ouja_2.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft18" },
              ]
          },
          jess_ankunft18: {
              text: "Doch anstatt einer Antwort, knallt der Zeiger des ouja-boards selbstständig zu Boden.",
              image: "images/ouja.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft19" },
              ]
          },
          jess_ankunft19: {
              text: "Alle springen erschrocken auf, doch Josh bleibt wo er ist. Er ist wütend.",
              image: "images/ouja.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft20" },
              ]
          },
          jess_ankunft20: {
              text: "Josh beschuldigt Jessica, Sam und Chris, ihm einen geschmacklosen Streich gespielt zu haben. Daraufhin verlässt er wütend den Raum.",
              image: "images/josh_1.gif",
              choices: [
                  { text: "weiter…", next: "jess_ankunft21" },
              ]
          },
          jess_ankunft21: {
              text: "Jessica, Sam und Chris sind sprachlos, doch keiner von ihnen folgt Josh. Sie haben Angst.",
              image: "images/josh_1.gif",
              choices: [
                  { text: "weiter…", next: "jess_ankunft22" },
              ]
          },
          jess_ankunft22: {
              text: "Eine lange Zeit vergeht und Josh kehrt nicht zurück.",
              image: "images/josh_1.gif",
              choices: [
                  { text: "weiter…", next: "jess_ankunft23" },
              ]
          },
          jess_ankunft23: {
              text: "Jessica versucht sich ihre Zeit zu vertreiben, doch als sie Chris mit Sam zusammen sieht, vergeht es ihr schlagartig.",
              image: "images/cs.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft24" },
              ]
          },
          jess_ankunft24: {
              text: "Jessica ist eifersüchtig. Sam und Josh wissen nichts davon, doch nach dem Verschwinden von Hannah und Beth haben sie und Chris eine Affäre.",
              image: "images/cs.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft25" },
              ]
          },
          jess_ankunft25: {
              text: "Sie versucht sich abzulenken und durchsucht ihre Tasche nach ihren Kopfhörern. Diese sind nicht in ihrer Tasche.",
              image: "images/cs.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft26" },
              ]
          },
          jess_ankunft26: {
              text: "Sie geht auf Chris zu und berichtet, dass sie ihre Kopfhörer in der Seilbahn liegen gelassen hat.",
              image: "images/cs.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft27" },
              ]
          },
          jess_ankunft27: {
              text: "Zusammen laufen sie zurück zur Seilbahn, um nach ihren Kopfhörern zu suchen.",
              image: "images/wald_1.gif",
              choices: [
                  { text: "weiter…", next: "jess_ankunft28" },
              ]
          },
          jess_ankunft28: {
              text: "Auf ihren Weg finden sie einen aufgespießten Schweinekopf mit der Aufschrift: WILLKOMMEN ZURÜCK. Aus dem Kopf tropft frisches Blut.",
              image: "images/schwein.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft29" },
              ]
          },
          jess_ankunft29: {
              text: "Jessica wird schlecht. Was zum Teufel?!",
              image: "images/schwein.jpg",
              choices: [
                  { text: "weiter…", next: "jess_ankunft30" },
              ]
          },
          jess_ankunft30: {
              text: "Jessica und Chris haben ein schlagartig-ungutes Gefühl.",
              image: "images/schwein.jpg",
              choices: [
                  { text: "Weitergehen", next: "weiter_jess" },
                  { text: "Zurücklaufen", next: "zurück_jess" },
              ]
          },
          weiter_jess: {
              text: "Jessica wird von dem Anblick übel. Selbst Chris sieht kreidebleich aus.",
              image: "images/schwein.jpg",
              choices: [
                  { text: "Weiter…", next: "weiter_jess1" },
              ]
          },
          weiter_jess1: {
              text: "Sie entscheidet sich weiterzulaufen und ermutigt auch Chris dazu.",
              image: "images/wald_2.gif",
              choices: [
                  { text: "Weiter…", next: "weiter_jess2" },
              ]
          },
          weiter_jess2: {
              text: "Er ist absolut sprachlos. Ist sie vollkommen irre?!",
              image: "images/wald_2.gif",
              choices: [
                  { text: "Weiter…", next: "axt" },
              ]
          },
          zurück_jess: {
              text: "Sie kann ihren Mut nicht zusammenhalten und fängt an zu weinen. Sie fleht Chris an, wieder zurückzugehen.",
              image: "images/wald_2.gif",
              choices: [
                  { text: "Weiter…", next: "zurück_jess1" },
              ]
          },
          zurück_jess1: {
              text: "Chris stattdessen meint nur, dass sie fast bei der Station sind und sie danach sofort gehen.",
              image: "images/wald_2.gif",
              choices: [
                  { text: "Weiter…", next: "zurück_jess2" },
              ]
          },
          zurück_jess2: {
              text: "Chris nimmt ihre Ängste nicht ernst und witzelt darüber, dass sie sich immer als selbstbewusst und mutig abstempelt obwohl sie das garnicht ist.",
              image: "images/wald_2.gif",
              choices: [
                  { text: "Weiter…", next: "zurück_jess3" },
              ]
          },
          zurück_jess3: {
              text: "Chris geht voraus und Jessica folgt ihm. Den Rest des Weges sagt sie kein einziges Wort mehr.",
              image: "images/wald_2.gif",
              choices: [
                  { text: "Weiter…", next: "zurück_jess4" },
              ]
          },
          zurück_jess3: {
              text: "Chris Worte haben Jessica verletzt.",
              image: "images/wald_2.gif",
              choices: [
                  { text: "Weiter…", next: "axt" },
              ]
          },
          axt: {
              text: "Auf dem restlichen Weg zur Seilbahnstation findet Chris eine Axt auf dem Boden, welche vorher nocht nicht da gewesen ist.",
              image: "images/axt.jpg",
              choices: [
                  { text: "Weiter…", next: "axt1" },
              ]
          },
          axt1: {
              text: "Chris nimmt die Axt mit.",
              image: "images/axt.jpg",
              choices: [
                  { text: "Weiter…", next: "axt2" },
              ]
          },
          axt2: {
              text: "Als sie die Station erreichen, sehen sie, dass diese abgesperrt ist.",
              image: "images/seilbahn_1.jpg",
              choices: [
                  { text: "Weiter…", next: "axt3" },
              ]
          },
          axt3: {
              text: "Jessica ist verwirrt. Sie hat die Tür doch offen gelassen.",
              image: "images/seilbahn_1.jpg",
              choices: [
                  { text: "Weiter…", next: "axt4" },
              ]
          },
          axt4: {
              text: "Jessica tritt näher an das kleine Fenster der Seilbahnstation heran.",
              image: "images/seilbahn_1.jpg",
              choices: [
                  { text: "Weiter…", next: "axt5" },
              ]
          },
          axt5: {
              text: "Sie kann etwas im Inneren erkennen. Sie muss wissen was das ist.",
              image: "images/seilbahn_1.jpg",
              choices: [
                  { text: "Chris die Tür aufbrechen lassen", next: "aufbrechen" },
                  { text: "Durch das Fenster klettern", next: "fenster" },
              ]
          },
          aufbrechen: {
              text: "„Auf keinen Fall kletter ich durch dieses kleine Fenster. Brich lieber die Tür mit der Axt auf.“ Chris ist genervt davon.",
              image: "images/seilbahn_1.jpg",
              choices: [
                  { text: "weiter…", next: "aufbrechen1" },
              ]
          },
          aufbrechen1: {
              text: "Chris schwingt die Axt ein paar Male auf das Schanier der Türe.",
              image: "images/seilbahn_1.jpg",
              choices: [
                  { text: "weiter…", next: "aufbrechen2" },
              ]
          },
          aufbrechen2: {
              text: "Nach ein paar Versuchen bricht das Schanier und die Tür schwingt auf.",
              image: "images/seilbahn_1.jpg",
              choices: [
                  { text: "weiter…", next: "aufbrechen3" },
              ]
          },
          aufbrechen3: {
              text: "Jessica betritt zuerst die Seilbahn. Was sie im Inneren entdeckt irritiert sie.",
              image: "images/seilbahn_1.jpg",
              choices: [
                  { text: "weiter…", next: "aufbrechen4" },
              ]
          },
          aufbrechen4: {
              text: "Auf der Wand gegenüber steht in roter Farbe das Wort 'HILFE' geschrieben.",
              image: "images/hilfe.png",
              choices: [
                  { text: "weiter…", next: "aufbrechen5" },
              ]
          },
          aufbrechen5: {
              text: "„Eww… Chris? Ist das Blut?“ Chris untersucht die Farbe. „Schaut danach aus.“",
              image: "images/hilfe.png",
              choices: [
                  { text: "weiter…", next: "aufbrechen6" },
              ]
          },
          aufbrechen6: {
              text: "Jessica sieht auf einem der Sitze eine Karte liegen, welche einen Feuerwachturm zeigt.",
              image: "images/map_seilbahn.jpg",
              choices: [
                  { text: "weiter…", next: "aufbrechen7" },
              ]
          },
          aufbrechen7: {
              text: "Chris möchte zu diesem Feuerwachturm gehen, doch Jessica hält das für keine gute Idee.",
              image: "images/map_seilbahn.jpg",
              choices: [
                  { text: "weiter…", next: "aufbrechen8" },
              ]
          },
          aufbrechen8: {
              text: "Was, wenn es eine Falle ist?",
              image: "images/map_seilbahn.jpg",
              choices: [
                  { text: "weiter…", next: "leuchtturm" },
              ]
          },
          fenster: {
              text: "Jessica quetscht sich durch das kleine Fenster der Seilbahn.",
              image: "images/seilbahn_1.jpg",
              choices: [
                  { text: "weiter…", next: "fenster1" },
              ]
          },
          fenster1: {
              text: "Im Inneren angekommen, tastet sie sich durch die Dunkelheit zur Tür der Seilbahn vor und entriegelt sie.",
              image: "images/seilbahn_1.jpg",
              choices: [
                  { text: "weiter…", next: "fenster2" },
              ]
          },
          fenster2: {
              text: "Chris betritt die Seilbahn und schaut sich um.",
              image: "images/seilbahn_1.jpg",
              choices: [
                  { text: "weiter…", next: "fenster3" },
              ]
          },
          fenster3: {
              text: "Was Jessica und Chris im Inneren entdecken irritiert sie.",
              image: "images/seilbahn_1.jpg",
              choices: [
                  { text: "weiter…", next: "fenster4" },
              ]
          },
          fenster4: {
              text: "Auf der Wand gegenüber steht in roter Farbe das Wort 'HILFE' geschrieben.",
              image: "images/hilfe.png",
              choices: [
                  { text: "weiter…", next: "fenster5" },
              ]
          },
          fenster5: {
              text: "„Eww… Chris? Ist das Blut?“ Chris untersucht die Farbe. „Schaut danach aus.“",
              image: "images/hilfe.png",
              choices: [
                  { text: "weiter…", next: "fenster6" },
              ]
          },
          fenster6: {
              text: "Jessica sieht auf einem der Sitze eine Karte liegen, welche einen Leuchtturm zeigt.",
              image: "images/map_seilbahn.jpg",
              choices: [
                  { text: "weiter…", next: "fenster7" },
              ]
          },
          fenster7: {
              text: "Chris möchte zu diesem Feuerwachturm gehen, doch Jessica hält das für keine gute Idee.",
              image: "images/map_seilbahn.jpg",
              choices: [
                  { text: "weiter…", next: "fenster8" },
              ]
          },
          fenster8: {
              text: "Was, wenn es eine Falle ist?",
              image: "images/map_seilbahn.jpg",
              choices: [
                  { text: "weiter…", next: "leuchtturm" },
              ]
          },
          leuchtturm: {
              text: "Chris verlässt die Seilbahn. Die Axt behält er bei sich.",
              image: "images/seilbahn_1.jpg",
              choices: [
                  { text: "weiter…", next: "leuchtturm1" },
              ]
          },
          leuchtturm1: {
              text: "Er dreht sich um „Kommst du mit?“",
              image: "images/seilbahn_1.jpg",
              choices: [
                  { text: "Einverstanden", next: "einverstanden" },
                  { text: "Nicht einverstanden", next: "nicht_einverstanden" },
              ]
          },
          einverstanden: {
              text: "Jessica ist misstrauisch, doch sie kann Chris unmöglich alleine gehen lassen.",
              image: "images/seilbahn_1.jpg",
              choices: [
                  { text: "weiter…", next: "einverstanden1" },
              ]
          },
          einverstanden1: {
              text: "Nach langem Überlegen gibt sie sich geschlagen und entscheidet sich mit Chris mitzugehen.",
              image: "images/wald_2.gif",
              choices: [
                  { text: "weiter…", next: "einverstanden2" },
              ]
          },
          einverstanden2: {
              text: "Jessica findet in der Station noch eine Taschenlampe und auch die Karte nehmen sie mit.",
              image: "images/wald_2.gif",
              choices: [
                  { text: "weiter…", next: "einverstanden3" },
              ]
          },
          einverstanden3: {
              text: "Jessica folgt Chris zum Leuchtturm.",
              image: "images/wald_2.gif",
              choices: [
                  { text: "weiter…", next: "klippe" },
              ]
          },
          nicht_einverstanden: {
              text: "Jessica traut dem Ganzen nicht. Das alles kann nur eine Falle sein.",
              image: "images/seilbahn_1.jpg",
              choices: [
                  { text: "weiter…", next: "nicht_einverstanden1" },
              ]
          },
          nicht_einverstanden1: {
              text: "Durch Chris überzeugende und beschützerhafte Art gibt sie sich nach langem Hin und Her doch geschlagen.",
              image: "images/wald_2.gif",
              choices: [
                  { text: "weiter…", next: "nicht_einverstanden2" },
              ]
          },
          nicht_einverstanden2: {
              text: "Zur Lodge will sie nämlich nicht alleine zurücklaufen müssen.",
              image: "images/wald_2.gif",
              choices: [
                  { text: "weiter…", next: "nicht_einverstanden3" },
              ]
          },
          nicht_einverstanden3: {
              text: "Jessica findet in der Station noch eine Taschenlampe und auch die Karte nehmen sie mit.",
              image: "images/wald_2.gif",
              choices: [
                  { text: "weiter…", next: "nicht_einverstanden4" },
              ]
          },
          nicht_einverstanden4: {
              text: "Jessica folgt Chris zum Leuchtturm.",
              image: "images/wald_2.gif",
              choices: [
                  { text: "weiter…", next: "klippe" },
              ]
          },
          klippe: {
              text: "Nach langem Gehen erreichen sie eine Klippe, welche tief in den Abgrund führt. Sie befinden sich in einer Sackgasse.",
              image: "images/klippe.jpg",
              choices: [
                  { text: "weiter…", next: "klippe1" },
              ]
          },
          klippe1: {
              text: "Als sie umkehren wollen, merken sie, dass sie von einer Elchherde am Rande der Klippe umzingelt werden.",
              image: "images/elch.jpg",
              choices: [
                  { text: "weiter…", next: "klippe2" },
              ]
          },
          klippe2: {
              text: "Chris beginnt in Panik zu geraten. Er weiß nicht, wie er Jessica und sich selbst retten soll.",
              image: "images/elch.jpg",
              choices: [
                  { text: "Chris beruhigen", next: "beruhigen" },
                  { text: "Chris maßregeln", next: "maßregeln" },
              ]
          },
          beruhigen: {
              text: "Jessica gibt sich Mühe ihn zu beruhigen und nimmt ihm dabei die Axt aus der Hand. Er zittert am ganzen Körper.",
              image: "images/elch.jpg",
              choices: [
                  { text: "weiter…", next: "beruhigen1" },
              ]
          },
          beruhigen1: {
              text: "„Wir schaffen das gemeinsam, wir sind ein Team.“ Sie versucht alles, ihn zu beruhigen.",
              image: "images/elch.jpg",
              choices: [
                  { text: "weiter…", next: "beruhigen2" },
              ]
          },
          beruhigen2: {
              text: "Schließlich schafft sie es. Chris lächelt.",
              image: "images/elch.jpg",
              choices: [
                  { text: "weiter…", next: "herde" },
              ]
          },
          maßregeln: {
              text: "Jessica will seine Situation nicht verstehen, eigentlich sollte er für sie da sein und sie beschützen.",
              image: "images/elch.jpg",
              choices: [
                  { text: "weiter…", next: "maßregeln1" },
              ]
          },
          maßregeln1: {
              text: "„Du bist so ein verdammtes Weichei, Chris!“ Sie reißt ihm die Axt aus der Hand. „Wenn wir hier krepieren ist es deine Schuld!“ ",
              image: "images/elch.jpg",
              choices: [
                  { text: "weiter…", next: "maßregeln2" },
              ]
          },
          maßregeln2: {
              text: "Chris versucht sich selbst zu beruhigen, doch er wird immer panischer.",
              image: "images/elch.jpg",
              choices: [
                  { text: "weiter…", next: "herde" },
              ]
          },
          herde: {
              text: "Jessica und Chris beginnen sich langsam, durch die Herde zu bewegen.",
              image: "images/elch_1.jpg",
              choices: [
                  { text: "weiter…", next: "herde1" },
              ]
          },
          herde1: {
              text: "Am Ende der Herde steht ein Elch, welcher bisher ziemlich ruhig zu sein scheint.",
              image: "images/elch_1.jpg",
              choices: [
                  { text: "weiter…", next: "herde2" },
              ]
          },
          herde2: {
              text: "Der Elch blockiert ihnen den Weg.",
              image: "images/elch_2.jpg",
              choices: [
                  { text: "Den Elch ignorieren", next: "ignorieren" },
                  { text: "Den Elch attackieren", next: "attackieren" },
              ]
          },
          ignorieren: {
              text: "Jessica ignoriert den Elch, sodass sie und Chris mit ruhigen Schritten durch die Herde gehen können.",
              image: "images/elch_1.jpg",
              choices: [
                  { text: "weiter…", next: "ignorieren1" },
              ]
          },
          ignorieren1: {
              text: "Sie entkommen der Herde, ohne verletzt zu werden.",
              image: "images/elch_1.jpg",
              choices: [
                  { text: "weiter…", next: "ignorieren2" },
              ]
          },
          ignorieren2: {
              text: "Sie setzen, etwas unter Schock, ihren Weg zum Feuerwachturm fort.",
              image: "images/wald_2.gif",
              choices: [
                  { text: "weiter…", next: "leuchtturm_1" },
              ]
          },
          attackieren: {
              text: "Jessica hebt die axt und rennt auf den Elch zu.",
              image: "images/elch_2.jpg",
              choices: [
                  { text: "weiter…", next: "attackieren1" },
              ]
          },
          attackieren1: {
              text: "Sie schwingt die Axt und trifft dessen Hals. Der Elch brüllt und fällt zu Boden.",
              image: "images/elch_tot.gif",
              choices: [
                  { text: "weiter…", next: "attackieren2" },
              ]
          },
          attackieren2: {
              text: "Der Elch blutet aus. Das Blut färbt den Schnee um dessen Körper rot. Er zuckt und strampelt qualvoll um sein Leben.",
              image: "images/elch_tot.gif",
              choices: [
                  { text: "weiter…", next: "attackieren3" },
              ]
          },
          attackieren3: {
              text: "Die Herde bekommt dies mit und rennt auf Chris los, da dieser ungeschützt daneben steht.",
              image: "images/elch.jpg",
              choices: [
                  { text: "weiter…", next: "attackieren4" },
              ]
          },
          attackieren4: {
              text: "Jessica meiden sie, da diese noch die blutige Axt fest in ihren Händen hält. Sie wirkt etwas psychopathisch.",
              image: "images/elch.jpg",
              choices: [
                  { text: "weiter…", next: "attackieren5" },
              ]
          },
          attackieren5: {
              text: "Chris hat Panik und rennt vor den Elchen davon. Dabei übersieht er die Klippe und stürzt in die Tiefe.",
              image: "images/chris_fällt.gif",
              choices: [
                  { text: "weiter…", next: "attackieren6" },
              ]
          },
          attackieren6: {
              text: "Chris schafft es aber noch, sich an einem etwas außenstehenden Absprung mit den Händen festzuklammern. er schaffte es sich langsam etwas hinaufzuarbeiten, um die Spitze zu erreichen.",
              image: "images/chris_fällt.gif",
              choices: [
                  { text: "weiter…", next: "attackieren7" },
              ]
          },
          attackieren7: {
              text: "Er schafft es, sich langsam hinaufzuarbeiten, bis er schließlich erschöpft die Spitze erreicht.",
              image: "images/chris_fällt.gif",
              choices: [
                  { text: "weiter…", next: "jagen" },
              ]
          },
          jagen: {
              text: "Zugleich jagt Jessica die Elche mit ihrer Axt weg. Diese rennen mit wütendem Grunzen davon.",
              image: "images/chris_fällt.gif",
              choices: [
                  { text: "Chris den Arm anbieten", next: "anbieten" },
                  { text: "Chris ermutigen hochzuklettern", next: "hochklettern" },
              ]
          },
          anbieten: {
              text: "Chris packt mit seiner letzten Kraft nach Jessica's Arm und sie zieht ihn mit ihrer ganzen Kraft langsam hinauf.",
              image: "images/chris_fällt.gif",
              choices: [
                  { text: "weiter…", next: "anbieten1" },
              ]
          },
          anbieten1: {
              text: "Beide liegen erschöpft am Hang der Klippe.",
              image: "images/chris_fällt.gif",
              choices: [
                  { text: "weiter…", next: "anbieten2" },
              ]
          },
          anbieten2: {
              text: "Nach einer Weile haben sie sich wieder gesammelt und gehen weiter ihren Weg zum Feuerwachturm.",
              image: "images/wald_2.gif",
              choices: [
                  { text: "weiter…", next: "leuchtturm_1" },
              ]
          },
          hochklettern: {
              text: "Jessica traut sich nicht ihren Arm anzubieten, da sie Angst hat, sie beide in Gefahr zu bringen.",
              image: "images/chris_fällt.gif",
              choices: [
                  { text: "weiter…", next: "hochklettern1" },
              ]
          },
          hochklettern1: {
              text: "Statt Chris zu helfen, ermutigt sie ihn weiterzuklettern. Doch Chris Kräfte lassen schnell nach.",
              image: "images/chris_fällt.gif",
              choices: [
                  { text: "weiter…", next: "hochklettern2" },
              ]
          },
          hochklettern2: {
              text: "Bevor Chris die Spitze erreichen kann, rutscht seine Hand and einem nassen Stein ab.",
              image: "images/chris_fällt.gif",
              choices: [
                  { text: "weiter…", next: "hochklettern3" },
              ]
          },
          hochklettern3: {
              text: "Doch bevor Chris zu weit fallen kann, greift Jessica seinen Arm und zieht ihn mit aller Kraft nach oben.",
              image: "images/chris_fällt.gif",
              choices: [
                  { text: "weiter…", next: "hochklettern4" },
              ]
          },
          hochklettern4: {
              text: "Beide liegen erschöpft am Hang der Klippe.",
              image: "images/chris_fällt.gif",
              choices: [
                  { text: "weiter…", next: "hochklettern5" },
              ]
          },
          hochklettern5: {
              text: "Nach einer Weile haben sie sich wieder gesammelt und gehen weiter ihren Weg zum Feuerwachturm.",
              image: "images/wald_2.gif",
              choices: [
                  { text: "weiter…", next: "leuchtturm_1" },
              ]
          },
          leuchtturm_1: {
              text: "Eine Weile später erreichen Jessica und Chris den Feuerwachturm. Sie durchqueren den kaputten Turm anhand einer Reihe von Leitern, bis sie die Spitze erreichen.",
              image: "images/feuerwachturm_4.jpg",
              choices: [
                  { text: "weiter…", next: "leuchtturm_1_1" },
              ]
          },
          leuchtturm_1_1: {
              text: "Plötzlich versucht jemand die Luke zum Feuerwachturm zu durchbrechen, um den Turm zu betreten. Dieser scheitert jedoch.",
              image: "images/feuerwachturm.gif",
              choices: [
                  { text: "weiter…", next: "leuchtturm_1_2" },
              ]
          },
          leuchtturm_1_2: {
              text: "Da der Turm nur mit Seilen an desse Stützen befestigt wurde, hat der Angreifer ein leichtes Spiel diese durchzuschneiden.",
              image: "images/feuerwachturm.gif",
              choices: [
                  { text: "weiter…", next: "leuchtturm_1_3" },
              ]
          },
          leuchtturm_1_3: {
              text: "Der Turm stürzt.",
              image: "images/feuerwachturm_stürzt.gif",
              choices: [
                  { text: "weiter…", next: "leuchtturm_1_4" },
              ]
          },
          leuchtturm_1_4: {
              text: "Von dem Angriff bekommen Jessica und Chris nichts mit, doch das plötzliche Wackeln des Turms versetzt sie in Panik.",
              image: "images/feuerwachturm_stürzt.gif",
              choices: [
                  { text: "weiter…", next: "leuchtturm_1_5" },
              ]
          },
          leuchtturm_1_5: {
              text: "Als der Turm zu fallen beginnt, muss Jessica dem ganzen Schutt ausweichen, der aufgewühlt wird. Sie stolpert und fällt durch ein Fenster des Turms.",
              image: "images/feuerwachturm_stürzt.gif",
              choices: [
                  { text: "weiter…", next: "leuchtturm_1_6" },
              ]
          },
          leuchtturm_1_6: {
              text: "Sie kracht auf ein Geländer.",
              image: "images/feuerwachturm_stürzt.gif",
              choices: [
                  { text: "weiter…", next: "leuchtturm_1_7" },
              ]
          },
          leuchtturm_1_7: {
              text: "Der Turm fängt an, in die darunterliegenden Minen zu rutschen.",
              image: "images/feuerwachturm_stürzt_1.gif",
              choices: [
                  { text: "weiter…", next: "leuchtturm_1_8" },
              ]
          },
          leuchtturm_1_8: {
              text: "Chris fällt vom Turm, kann sich aber noch mit dem Griff an einem Stützbalken retten.",
              image: "images/feuerwachturm_stürzt_1.gif",
              choices: [
                  { text: "weiter…", next: "leuchtturm_1_9" },
              ]
          },
          leuchtturm_1_9: {
              text: "Jessica hört Chris Schreie.",
              image: "images/feuerwachturm_stürzt_1.gif",
              choices: [
                  { text: "weiter…", next: "leuchtturm_1_10" },
              ]
          },
          leuchtturm_1_10: {
              text: "Sie müssen extrem darauf aufpassen, dass der Turm nicht weiter zusammenfällt und die beiden darunter begräbt.",
              image: "images/feuerwachturm_stürzt_1.gif",
              choices: [
                  { text: "Chris retten", next: "retten_jess" },
                  { text: "In Sicherheit springen", next: "springen" },
              ]
          },
          retten_jess: {
              text: "Sie nimmt ihren Mut zusammen und rutscht langsam zu Chris.",
              image: "images/feuerwachturm.jpg",
              choices: [
                  { text: "weiter…", next: "retten_jess1" },
              ]
          },
          retten_jess1: {
              text: "Doch das plötzliche Extragewicht bringt die Plattform zum Einstürzen.",
              image: "images/feuerwachturm.jpg",
              choices: [
                  { text: "weiter…", next: "retten_jess2" },
              ]
          },
          retten_jess2: {
              text: "Jessica springt in letzter Sekunde noch auf die andere Seite der Plattform.",
              image: "images/feuerwachturm.jpg",
              choices: [
                  { text: "weiter…", next: "retten_jess3" },
              ]
          },
          retten_jess3: {
              text: "Chris wird von der Wucht nach unten geschleudert. Die entstehende Staubwolke hindert Jessica daran, Chris zu sehen.",
              image: "images/chris_feuerwachturm.jpg",
              choices: [
                  { text: "weiter…", next: "retten_jess4" },
              ]
          },
          retten_jess4: {
              text: "Zu ihrem Erleichtern hört sie Chris Stimme von unten rufen. Er ist in Ordnung und er wird einen anderen Ausweg zurück zur Lodge finden.",
              image: "images/chris_feuerwachturm.jpg",
              choices: [
                  { text: "weiter…", next: "retten_jess5" },
              ]
          },
          retten_jess5: {
              text: "Jessica ist nun auf sich allein gestellt.",
              image: "images/chris_feuerwachturm.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt" },
              ]
          },
          springen: {
              text: "Jessica springt auf die andere Seite der Plattform. Die plötzliche Last, bringt den Turm unter Chris Füßen zum einstürzen.",
              image: "images/feuerwachturm.jpg",
              choices: [
                  { text: "weiter…", next: "springen1" },
              ]
          },
          springen1: {
              text: "Chris wird von der Wucht nach unten geschleudert. Die entstehende Staubwolke hindert Jessica daran, Chris zu sehen.",
              image: "images/chris_feuerwachturm.jpg",
              choices: [
                  { text: "weiter…", next: "springen2" },
              ]
          },
          springen2: {
              text: "Zu ihrem Erleichtern hört sie Chris Stimme von unten rufen. Er ist in Ordnung und er wird einen anderen Ausweg zurück zur Lodge finden.",
              image: "images/chris_feuerwachturm.jpg",
              choices: [
                  { text: "weiter…", next: "springen3" },
              ]
          },
          springen3: {
              text: "Jessica ist nun auf sich allein gestellt.",
              image: "images/chris_feuerwachturm.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt" },
              ]
          },
          überlebt: {
              text: "Jessica schwingt sich auf eine Leiter, nachdem sie ihren Fall Mithilfe eines Seils überlebt hat.",
              image: "images/jessica_verletzt_3.gif",
              choices: [
                  { text: "weiter…", next: "überlebt1" },
              ]
          },
          überlebt1: {
              text: "Als sie auf dem Boden landet, beginnt der Rest des Turms einzubrechen.",
              image: "images/jessica_verletzt_3.gif",
              choices: [
                  { text: "weiter…", next: "überlebt2" },
              ]
          },
          überlebt2: {
              text: "Jessica schaut sich um und erkennt, dass sie sich in einem verlassenen Minenteil befindet.",
              image: "images/jessica_verletzt_3.gif",
              choices: [
                  { text: "weiter…", next: "überlebt3" },
              ]
          },
          überlebt3: {
              text: "Auf dem Boden findet sie ein trockenes Holz. Sie reißt ein Stück von ihrem Hemd ab und wickelt dieses um das Holz.",
              image: "images/jessica_mine_6.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt4" },
              ]
          },
          überlebt4: {
              text: "Die improvisorische Fackel entzündet sie mit ihrem Feuerzeug.",
              image: "images/jessica_mine_6.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt5" },
              ]
          },
          überlebt5: {
              text: "Jessica läuft den dunklen Gang der Mine entlang und entdeckt eine Art Lager.",
              image: "images/fremder_lager.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt6" },
              ]
          },
          überlebt6: {
              text: "Auf einem abgeranzten Tisch findet sie eine Art wissenschaftliches Tagebuch.",
              image: "images/fremder_lager.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt7" },
              ]
          },
          überlebt7: {
              text: "Sie öffnet es.",
              image: "images/fremder_lager.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt8" },
              ]
          },
          überlebt8: {
              text: "Der Wendigo.",
              image: "images/wendigo.gif",
              choices: [
                  { text: "weiter…", next: "überlebt9" },
              ]
          },
          überlebt9: {
              text: "Ein Wendigo ist ein Mensch, der durch Kannibalismus auf dem Blackwood Mountain vom Wendigo Geist eingenommen wurde.",
              image: "images/wendigo_entwicklung.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt10" },
              ]
          },
          überlebt10: {
              text: "Bei der Verwandlung verändern sich zuerst die Augen, diese werden milchig weiß. Die Haut färbt sich kreidebleich und wird dick und widerstandsfähig. Dann werden die Zähne lang und spitz.",
              image: "images/wendigo_entwicklung.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt11" },
              ]
          },
          überlebt11: {
              text: "Die Kreatur wächst und die Haut spannt sich über die Knochen, dadurch haben sie ein skelettartiges Äußeres.",
              image: "images/wendigo_entwicklung_1.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt12" },
              ]
          },
          überlebt12: {
              text: "Es kann jede kleinste Bewegung wahrnehmen und sehr gut riechen. Es bewegt sich sehr schnell und ruckartig auf allen Vieren, außerdem kann es ausgezeichnet an Wänden und Decken klettern.",
              image: "images/wendigo_entwicklung_1.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt13" },
              ]
          },
          überlebt13: {
              text: "Haut und Fleisch eines Wendigo sind wie ein Panzer. Ein Flammenwerfer ist die geeigneteste Waffe gegen einen Wendigo, denn es fürchtet das Feuer. Schrotflinten verlangsamt es nur.",
              image: "images/wendigo_entwicklung_2.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt14" },
              ]
          },
          überlebt14: {
              text: "Das Monster jagt nur nachts. Dinge, die sich nicht bewegen, kann es nicht sehen.",
              image: "images/wendigo_entwicklung_2.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt15" },
              ]
          },
          überlebt15: {
              text: "Jessica läuft es kalt den Rücken herunter, als sie das liest.",
              image: "images/jessica_mine_2.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt16" },
              ]
          },
          überlebt16: {
              text: "Jessica wird aus ihren Gedanken gerissen, als mehrere Schreie durch die Gänge der Mine hallen.",
              image: "images/jessica_mine_2.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt17" },
              ]
          },
          überlebt17: {
              text: "Jessica steckt schnell das Buch ein. In der Ferne hört sie schrille Schreie und das Geräusch von… Flammen?.",
              image: "images/jessica_mine_2.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt18" },
              ]
          },
          überlebt18: {
              text: "Sie hat Angst, doch sie geht weiter durch die Minen. In der Ferne sieht sie ein orange-gelbes Licht und den Schatten einer Kreatur.",
              image: "images/mine_gang_1.jpg",
              choices: [
                  { text: "weiter…", next: "überlebt19" },
              ]
          },
          überlebt19: {
              text: "Als sie näher an das Geräusch kommt, sieht sie jemanden mit einem Flammenwerfer handtieren. Der Geruch von verbranntem Fleisch beißt sich in ihre Nase.",
              image: "images/fremder_mine.gif",
              choices: [
                  { text: "weiter…", next: "überlebt20" },
              ]
          },
          überlebt20: {
              text: "Es ist klar, dass sie hier unten nicht alleine ist.",
              image: "images/fremder_mine.gif",
              choices: [
                  { text: "Umkehren", next: "umkehren" },
                  { text: "Verstecken", next: "verstecken_jess" },
              ]
          },
          umkehren: {
              text: "Jessica dreht sich sofort um und rennt los. Der Fremde greift noch nach ihren Arm, doch sie ist schneller.",
              image: "images/jessica_fremder_2.jpg",
              choices: [
                  { text: "weiter…", next: "umkehren1" },
              ]
          },
          umkehren1: {
              text: "Während sie rennt, schaut sie noch hinter sich. Der Fremde folgt ihr nicht.",
              image: "images/jessica_fremder_2.jpg",
              choices: [
                  { text: "weiter…", next: "umkehren2" },
              ]
          },
          umkehren2: {
              text: "Durch ihre Unvorsichtigkeit stolpert sie und fällt einen Hang herunter. Der Sturz verletzt sie.",
              image: "images/jessica_fällt.gif",
              choices: [
                  { text: "weiter…", next: "umkehren3" },
              ]
          },
          umkehren3: {
              text: "Jessica hat Schmerzen, doch ihre Angst überwiegt. Somit richtet sie sich trotz Schmerzen schnell auf und versucht einen Ausgang zu finden.",
              image: "images/jessica_fällt.gif",
              choices: [
                  { text: "weiter…", next: "felsen" },
              ]
          },
          verstecken_jess: {
              text: "Sie versteckt sich hinter einer Holzwand. Der Fremde sucht nach ihr, aber ohne Erfolg.",
              image: "images/jessica_fremder.jpg",
              choices: [
                  { text: "weiter…", next: "verstecken_jess1" },
              ]
          },
          verstecken_jess1: {
              text: "Dieser wird plötzlich abgelenkt. Jessica nutzt die Chance und schleicht sich vorsichtig davon.",
              image: "images/jessica_fremder.jpg",
              choices: [
                  { text: "weiter…", next: "verstecken_jess2" },
              ]
          },
          verstecken_jess2: {
              text: "Als sie in sicherer Entfernung ist, fängt sie an zu rennen. Dabei schaut sie hinter sich.",
              image: "images/jessica_fremder.jpg",
              choices: [
                  { text: "weiter…", next: "verstecken_jess3" },
              ]
          },
          verstecken_jess3: {
              text: "Durch ihre Unvorsichtigkeit stolpert sie und fällt einen Hang herunter. Der Sturz verletzt sie.",
              image: "images/jessica_fällt.gif",
              choices: [
                  { text: "weiter…", next: "verstecken_jess4" },
              ]
          },
          verstecken_jess4: {
              text: "Jessica hat Schmerzen, doch ihre Angst überwiegt. Somit richtet sie sich trotz Schmerzen schnell auf und versucht einen Ausgang zu finden.",
              image: "images/jessica_fällt.gif",
              choices: [
                  { text: "weiter…", next: "felsen" },
              ]
          },
          felsen: {
              text: "Seltsame kreischende und kratzende Geräusche beginnen lauter und lauter zu werden, als Jessica anfängt sich durch einen Felsvorsprung am Ende des Weges zu drücken.",
              image: "images/mine_gang_3.jpg",
              choices: [
                  { text: "weiter…", next: "felsen1" },
              ]
          },
          felsen1: {
              text: "Plötzlich versucht ein Wendigo, sie zu greifen.",
              image: "images/wendigo_gitter.jpg",
              choices: [
                  { text: "weiter…", next: "felsen2" },
              ]
          },
          felsen2: {
              text: "Jessica reagiert sofort und weicht dem Griff aus. Sie rennt und ist dazu gezwungen, über mehrere Lücken in einer kaputten Metallbrücke zu springen.",
              image: "images/wendigo_gitter.jpg",
              choices: [
                  { text: "weiter…", next: "felsen3" },
              ]
          },
          felsen3: {
              text: "Sie rennt auf einen Lift zu und springt hinein. Jessica betätigt den Hebel und der Lift fährt mit lautem Schleifen nach oben.",
              image: "images/mine_lift.jpg",
              choices: [
                  { text: "weiter…", next: "felsen4" },
              ]
          },
          felsen4: {
              text: "Doch der Lift bleibt plötzlich stecken.",
              image: "images/mine_lift.jpg",
              choices: [
                  { text: "weiter…", next: "felsen5" },
              ]
          },
          felsen5: {
              text: "Sie hört, wie sich etwas über ihr auf dem Lift bewegt.",
              image: "images/mine_lift.jpg",
              choices: [
                  { text: "weiter…", next: "felsen6" },
              ]
          },
          felsen6: {
              text: "Sie bleibt still. Sie hat zu viel Angst, sich zu bewegen.",
              image: "images/mine_lift.jpg",
              choices: [
                  { text: "weiter…", next: "felsen7" },
              ]
          },
          felsen7: {
              text: "Als sie nichts mehr hört, rennt sie aus dem Lift heraus, bis sie schließlich eine Art Förderband erreicht.",
              image: "images/jessica_förderband.gif",
              choices: [
                  { text: "weiter…", next: "felsen8" },
              ]
          },
          felsen8: {
              text: "Jessica klettert auf das Förderband, welches sich aufeinmal von selbst anschaltet.",
              image: "images/jessica_förderband.gif",
              choices: [
                  { text: "weiter…", next: "felsen9" },
              ]
          },
          felsen9: {
              text: "Das Förderband bewegt sich mit lauten Geräuschen vorwärts. Der Lärm zieht den Wendigo an.",
              image: "images/jessica_förderband.gif",
              choices: [
                  { text: "weiter…", next: "felsen10" },
              ]
          },
          felsen10: {
              text: "Der Wendigo springt auf das Förderband und lässt einen ohrenbetäubenden Schrei heraus. Er nähert sich.",
              image: "images/jessica_förderband.gif",
              choices: [
                  { text: "weiter…", next: "felsen11" },
              ]
          },
          felsen11: {
              text: "Am Ende des Förderbands befindet sich ein Erzschleifer. Jessica gerät in Panik.",
              image: "images/jessica_förderband.gif",
              choices: [
                  { text: "Auf dem Förderband bleiben", next: "förderband" },
                  { text: "Rechtzeitig abspringen", next: "abspringen" },
              ]
          },
          förderband: {
              text: "Jessica entscheidet sich auf dem Förderband zu bleiben, da der Wendigo so ihre Bewegungen nicht ausmachen kann.",
              image: "images/jessica_förderband.gif",
              choices: [
                  { text: "weiter…", next: "förderband1" },
              ]
          },
          förderband1: {
              text: "In diesem Moment merkt sie, dass irgendetwas nicht stimmt. Das Wesen hört auf sie zu verfolgen und beobachtet von der Ferne aus.",
              image: "images/wendigo_3.jpg",
              choices: [
                  { text: "weiter…", next: "förderband2" },
              ]
          },
          förderband2: {
              text: "Jessica ist so auf den Wendigo konzentriert, sodass sie nicht merkt, dass sie dem laufenden Erzschleifer viel zu nah kommt.",
              image: "images/wendigo_3.jpg",
              choices: [
                  { text: "weiter…", next: "förderband3" },
              ]
          },
          förderband3: {
              text: "Als sie es bemerkt, versucht sie von der Maschine wegzukommen, doch sie rutscht aus und ihr Fuß landet in der Maschine.",
              image: "images/jessica_tot_2.gif",
              choices: [
                  { text: "weiter…", next: "förderband4" },
              ]
          },
          förderband4: {
              text: "Durch die qualvollen Schmerzen, schreit sie auf. Ihre Schreie hallen durch die Mine.",
              image: "images/jessica_tot_2.gif",
              choices: [
                  { text: "weiter…", next: "förderband5" },
              ]
          },
          förderband5: {
              text: "Die Maschine zerrt ihren Körper mit und zerreißt diesen im Prozess.",
              image: "images/jessica_tot_2.gif",
              choices: [
                  { text: "weiter…", next: "förderband6" },
              ]
          },
          förderband6: {
              text: "Jessica ist tot.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Geschichte neu beginnen", next: "start" },
              ]
          },
          abspringen: {
              text: "Jessica springt vom Förderband und rennt hinter einen Felsen. Der Wendigo hat sie nicht bemerkt, doch dieser versucht sie dennoch zu finden.",
              image: "images/jessica_verstecken.gif",
              choices: [
                  { text: "weiter…", next: "abspringen1" },
              ]
          },
          abspringen1: {
              text: "Nach einer Weile gibt der Wendigo auf und mit einem letzten, schrillen Schrei verschwindet er.",
              image: "images/jessica_verstecken.gif",
              choices: [
                  { text: "weiter…", next: "abspringen2" },
              ]
          },
          abspringen2: {
              text: "Jessica ist dem Wendigo entkommen.",
              image: "images/jessica_verstecken.gif",
              choices: [
                  { text: "weiter…", next: "abspringen3" },
              ]
          },
          abspringen3: {
              text: "Jessica braucht eine Weile, um sich wieder zu beruhigen. Nach ein paar Minuten hat sie sich wieder gesammelt.",
              image: "images/jessica_verstecken.gif",
              choices: [
                  { text: "weiter…", next: "abspringen4" },
              ]
          },
          abspringen4: {
              text: "Sie sieht Licht am Ende eines Ganges und läuft darauf zu.",
              image: "images/jessica_mine.jpg",
              choices: [
                  { text: "weiter…", next: "abspringen5" },
              ]
          },
          abspringen5: {
              text: "Sie schlüpft durch ein Loch in der Wand und befindet sich nun draußen. Vor ihr befindet sich ein heruntergekommenes Gebäude.",
              image: "images/sanatorium_draußen.jpg",
              choices: [
                  { text: "weiter…", next: "sanatorium" },
              ]
          },
          sanatorium: {
              text: "Jessica läuft auf ein Schild zu. Es ist mit Dreck und Schnee bedeckt. Sie wischt es weg.",
              image: "images/sanatorium_draußen.jpg",
              choices: [
                  { text: "weiter…", next: "sanatorium1" },
              ]
          },
          sanatorium1: {
              text: "Auf dem Schild steht 'Blackwood Pines SANATORIUM'.",
              image: "images/sanatorium_draußen.jpg",
              choices: [
                  { text: "weiter…", next: "sanatorium2" },
              ]
          },
          sanatorium2: {
              text: "Sie geht in das Gebäude hinein und verschließt die Tür hinter sich. Sie geht die Treppe hinauf, um sich einen besseren Überblick zu verschaffen.",
              image: "images/sanatorium.jpg",
              choices: [
                  { text: "weiter…", next: "sanatorium3" },
              ]
          },
          sanatorium3: {
              text: "Durch das Herumschnüffeln in dem dunklen Raum, bemerkt sie ein Loch unter sich nicht und kracht hindurch.",
              image: "images/sanatorium_1.jpg",
              choices: [
                  { text: "weiter…", next: "sanatorium4" },
              ]
          },
          sanatorium4: {
              text: "Sie schlägt ein paar Meter tiefer auf dem Boden auf. Durch den Schock und die Schmerzen bleibt sie erst einmal liegen.",
              image: "images/sanatorium_1.jpg",
              choices: [
                  { text: "weiter…", next: "sanatorium5" },
              ]
          },
          sanatorium5: {
              text: "Als sie sich wieder aufrafft, sieht sie auf der anderen Seite des Raumes einen verletzten Wolf.",
              image: "images/wolf_1.jpg",
              choices: [
                  { text: "weiter…", next: "sanatorium6" },
              ]
          },
          sanatorium6: {
              text: "Sein Schwanz ist angezogen und er zittert. Er knurrt sie vor Angst an.",
              image: "images/wolf_1.jpg",
              choices: [
                  { text: "Den Wolf nähern", next: "nähern" },
                  { text: "Den Wolf treten", next: "treten" },
              ]
          },
          nähern: {
              text: "Jessica nähert sich dem Wolf vorsichtig. Sie sieht, dass er seine Pfote hebt. Seine Vorderpfote blutet.",
              image: "images/wolf.gif",
              choices: [
                  { text: "weiter…", next: "nähern1" },
              ]
          },
          nähern1: {
              text: "Sie reißt sich einen Stofffetzen von ihrer Jacke und vorsichtig bindet sie diesen um die verwundete Pfote des Wolfs.",
              image: "images/wolf.gif",
              choices: [
                  { text: "weiter…", next: "nähern2" },
              ]
          },
          nähern2: {
              text: "Der Wolf hat sich in der Zwischenzeit beruhigt, sodass sie ihn sogar streicheln kann.",
              image: "images/wolf.gif",
              choices: [
                  { text: "weiter…", next: "freund" },
              ]
          },
          treten: {
              text: "Jessica sieht den Wolf als eine Bedrohung. Sie verteidigt sich und tritt nach ihm.",
              image: "images/wolf_1.jpg",
              choices: [
                  { text: "weiter…", next: "treten1" },
              ]
          },
          treten1: {
              text: "Der Wolf jault als er getreten wird, doch er hat sich schnell wieder gesammelt.",
              image: "images/wolf_1.jpg",
              choices: [
                  { text: "weiter…", next: "treten2" },
              ]
          },
          treten2: {
              text: "Er bellt und rennt auf Jessica zu. Sie kann nicht rechzeitig reagieren.",
              image: "images/wolf_1.jpg",
              choices: [
                  { text: "weiter…", next: "treten3" },
              ]
          },
          treten3: {
              text: "Der Wolf wirft sich auf sie und sie knallt zu Boden. Binnen Sekunden reißt er ihr mit seinen Zähnen die Haut vom Gesicht.",
              image: "images/jessica_wolf_tot.jpg",
              choices: [
                  { text: "weiter…", next: "treten4" },
              ]
          },
          treten4: {
              text: "Durch die extremen Schmerzen wird sie ohnmächtig. Der ausgemärgelte Wolf fängt an sie zu fressen.",
              image: "images/jessica_wolf_tot.jpg",
              choices: [
                  { text: "weiter…", next: "treten5" },
              ]
          },
          treten5: {
              text: "Jessica ist tot.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Geschichte neu beginnen", next: "start" },
              ]
          },
          freund: {
              text: "Nach einer Weile entscheidet sich Jessica dazu, das Sanatorium zu verlassen.",
              image: "images/jessica_wolf.jpg",
              choices: [
                  { text: "weiter…", next: "freund1" },
              ]
          },
          freund1: {
              text: "Der Wolf folgt ihr gehorsam. Sie fühlt sich sicher mit ihm.",
              image: "images/jessica_wolf.jpg",
              choices: [
                  { text: "weiter…", next: "freund2" },
              ]
          },
          freund2: {
              text: "Jessica und der Wolf verlassen das Sanatorium und laufen zu einem der nahegelegenen Gebäude. Sie betreten es.",
              image: "images/gebäude.jpg",
              choices: [
                  { text: "weiter…", next: "freund3" },
              ]
          },
          freund3: {
              text: "Der Raum ist voll mit seltsamen Inschriften, die in die Wand geritzt wurden. Außerdem sieht Jessica eine schwere Stahltüre.",
              image: "images/jessica_metalltür.gif",
              choices: [
                  { text: "weiter…", next: "freund4" },
              ]
          },
          freund4: {
              text: "Diese ist massivst eingedellt, als wäre etwas Schweres dagegen geschlagen.",
              image: "images/jessica_metalltür.gif",
              choices: [
                  { text: "weiter…", next: "freund5" },
              ]
          },
          freund5: {
              text: "Als sie weitere Räume durchqueren, hören sie plötzlich Geräusche. Der Wolf knurrt und fletscht die Zähne.",
              image: "images/wolf_2.jpg",
              choices: [
                  { text: "weiter…", next: "freund6" },
              ]
          },
          freund6: {
              text: "In der Nähe fällt eine Schachtel von einem Schrank herunter. Ein Krabbeln auf dem Boden, ist zu hören.",
              image: "images/wolf_2.jpg",
              choices: [
                  { text: "Still bleiben", next: "still" },
                  { text: "Wegrennen", next: "wegrennen_jess" },
              ]
          },
          still: {
              text: "Jessica und der Wolf erstarren und bewegen sich nicht.",
              image: "images/wolf_2.jpg",
              choices: [
                  { text: "weiter…", next: "still1" },
              ]
          },
          still1: {
              text: "Ein leises Piepsen zeigt, dass die Ursache des Krabbelns nur eine Ratte gewesen ist.",
              image: "images/wolf_2.jpg",
              choices: [
                  { text: "weiter…", next: "still2" },
              ]
          },
          still2: {
              text: "Jessica atmet aus. Sie ist erleichtert, doch irgendetwas stimmt nicht. 'Wolfie', wie sie den Wolf getauft hat, starrt ans Ende des Raumes.",
              image: "images/wolf_2.jpg",
              choices: [
                  { text: "weiter…", next: "still3" },
              ]
          },
          still3: {
              text: "'Wolfie', wie sie den Wolf getauft hat, starrt ans Ende des Raumes. Er zittert.",
              image: "images/wolf_2.jpg",
              choices: [
                  { text: "weiter…", next: "still4" },
              ]
          },
          still4: {
              text: "Das Mondlicht, welches durch eines der Fenster dringt, strahlt auf eine Kreatur, die sich auf allen Vieren auf dem Boden befindet.",
              image: "images/wendigo_gang.jpg",
              choices: [
                  { text: "weiter…", next: "still5" },
              ]
          },
          still5: {
              text: "Jessica erstarrt. Vor ihnen steht ein Wendigo, welcher ihnen langsam entgegen gekrabbelt kommt.",
              image: "images/wendigo_gang.jpg",
              choices: [
                  { text: "weiter…", next: "jagt" },
              ]
          },
          wegrennen_jess: {
              text: "Sie rennt los, egal was sich in diesem Raum befindet, sie will es nicht wissen.",
              image: "images/wolf_2.jpg",
              choices: [
                  { text: "weiter…", next: "wegrennen_jess1" },
              ]
          },
          wegrennen_jess1: {
              text: "Doch irgendetwas stimmt nicht. 'Wolfie', wie sie den Wolf getauft hat, starrt ans Ende des Raumes. Jessica dreht sich um.",
              image: "images/wolf_2.jpg",
              choices: [
                  { text: "weiter…", next: "wegrennen_jess2" },
              ]
          },
          wegrennen_jess2: {
              text: "'Wolfie', wie sie den Wolf getauft hat, starrt ans Ende des Raumes. Er zittert.",
              image: "images/wolf_2.jpg",
              choices: [
                  { text: "weiter…", next: "wegrennen_jess3" },
              ]
          },
          wegrennen_jess3: {
              text: "Das Mondlicht, welches durch eines der Fenster dringt, strahlt auf eine Kreatur, die sich auf allen Vieren auf dem Boden befindet.",
              image: "images/wendigo_gang.jpg",
              choices: [
                  { text: "weiter…", next: "wegrennen_jess4" },
              ]
          },
          wegrennen_jess4: {
              text: "Jessica erstarrt. Vor ihnen steht ein Wendigo, welcher ihnen langsam entgegen gekrabbelt kommt.",
              image: "images/wendigo_gang.jpg",
              choices: [
                  { text: "weiter…", next: "jagt" },
              ]
          },
          jagt: {
              text: "Wolfie hält es nicht länger aus und rennt. Jessica folgt ihm. Der Wendigo lässt einen schrillen Schrei heraus und beginnt auch loszurennen.",
              image: "images/wolf_flucht.gif",
              choices: [
                  { text: "weiter…", next: "jagt1" },
              ]
          },
          jagt1: {
              text: "Diese Verfolgung entwickelt sich zu einer reinsten Jagd.",
              image: "images/wolf_flucht.gif",
              choices: [
                  { text: "Fliehen", next: "fliehen" },
                  { text: "Schrank verschieben", next: "verschieben" },
              ]
          },
          fliehen: {
              text: "Jessica rennt so schnell sie kann, doch trotz aller Mühen holt der kreischende Wendigo sie immer weiter ein.",
              image: "images/wendigo_8.jpg",
              choices: [
                  { text: "weiter…", next: "fliehen1" },
              ]
          },
          fliehen1: {
              text: "Wolfie ist um einiges schneller als Jessica und rennt ihr vorraus.",
              image: "images/wendigo_8.jpg",
              choices: [
                  { text: "weiter…", next: "fliehen2" },
              ]
          },
          fliehen2: {
              text: "Durch ihre hastigen Bewegungen stolpert sie über eine Unebenheit im Boden und fällt.",
              image: "images/jessica_tot_4.gif",
              choices: [
                  { text: "weiter…", next: "fliehen3" },
              ]
          },
          fliehen3: {
              text: "Bevor sie aufstehen kann, springt der Wendigo auf sie und reißt ihr den Kiefer raus.",
              image: "images/jessica_tot_4.gif",
              choices: [
                  { text: "weiter…", next: "fliehen4" },
              ]
          },
          fliehen4: {
              text: "Jessica ist tot.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Geschichte neu beginnen", next: "start" },
              ]
          },
          verschieben: {
              text: "Durch ihren leichten Vorsprung hat Jessica etwas Zeit in ein Zimmer zu ihrer Linken abzubiegen. Wolfie rennt ihr nach.",
              image: "images/wolf_flucht.gif",
              choices: [
                  { text: "weiter…", next: "verschieben1" },
              ]
          },
          verschieben1: {
              text: "Nachdem Wolfie in den Raum rennt, schließt sie sofort die Türe und schmeißt einen Schrank, der sich neben der Tür befindet, um.",
              image: "images/wolf_flucht.gif",
              choices: [
                  { text: "weiter…", next: "verschieben2" },
              ]
          },
          verschieben2: {
              text: "Mit einem lauten Schlag fällt der Schrank vor die Türe und blockiert diese.",
              image: "images/wolf_flucht.gif",
              choices: [
                  { text: "weiter…", next: "verschieben3" },
              ]
          },
          verschieben3: {
              text: "Nur eine Sekunde später springt der Wendigo gegen die Tür. Mit einer enormen Kraft hämmert es gegen die Türe, welche langsam nachgibt.",
              image: "images/wendigo_suchen.gif",
              choices: [
                  { text: "weiter…", next: "verschieben4" },
              ]
          },
          verschieben4: {
              text: "Jessica schaut sich panisch um und rennt dann in eine dunkle Ecke des Raumes. Sie und Wolfie verstecken sich dort.",
              image: "images/wendigo_suchen.gif",
              choices: [
                  { text: "weiter…", next: "verschieben5" },
              ]
          },
          verschieben5: {
              text: "Mit einem lauten Schlag kracht die Türe ein und der Wendigo springt in den Raum.",
              image: "images/wendigo_suchen.gif",
              choices: [
                  { text: "Nicht bewegen", next: "nicht_bewegen_jess" },
                  { text: "Wegschleichen", next: "wegschleichen" },
              ]
          },
          nicht_bewegen_jess: {
              text: "Jessica und Wolfie bewegen sich keinen Zentimeter. Jessica hält Wolfie das Maul zu.",
              image: "images/wendigo_sicht.gif",
              choices: [
                  { text: "weiter…", next: "nicht_bewegen_jess1" },
              ]
          },
          nicht_bewegen_jess1: {
              text: "Der Wendigo durchblickt den Raum, doch es konnte nichts erkennen und auch nicht riechen.",
              image: "images/wendigo_sicht.gif",
              choices: [
                  { text: "weiter…", next: "nicht_bewegen_jess2" },
              ]
          },
          nicht_bewegen_jess2: {
              text: "Mit einem lauten Schrei stürmt der Wendigo aus dem Raum. Seine schnellen Bewegungen hallen durch den Korridor.",
              image: "images/wendigo_sicht.gif",
              choices: [
                  { text: "weiter…", next: "nicht_bewegen_jess3" },
              ]
          },
          nicht_bewegen_jess3: {
              text: "Jessica und Wolfie sind vorerst in Sicherheit.",
              image: "images/wendigo_sicht.gif",
              choices: [
                  { text: "weiter…", next: "gefängnis" },
              ]
          },
          wegschleichen: {
              text: "Der Wendigo durchblickt den Raum. Es bewegt sich langsam.",
              image: "images/wendigo_sicht.gif",
              choices: [
                  { text: "weiter…", next: "wegschleichen1" },
              ]
          },
          wegschleichen1: {
              text: "Als der Wendigo sich für einen Moment abwendet, schleicht Jessica mit Wolfie aus ihrem Versteck. Doch vergebens.",
              image: "images/wendigo_suche_1.gif",
              choices: [
                  { text: "weiter…", next: "wegschleichen2" },
              ]
          },
          wegschleichen2: {
              text: "Der Wendigo hört sie und dreht sich sofort zu ihnen um. Mit einem schrillen Schrei rast es auf sie zu.",
              image: "images/wendigo_suche_1.gif",
              choices: [
                  { text: "weiter…", next: "wegschleichen3" },
              ]
          },
          wegschleichen3: {
              text: "Bevor Jessica reagieren kann, wirft es den Wolf zur Seite. Dieser knallt gegen die Wand, regungslos.",
              image: "images/wendigo_suche_1.gif",
              choices: [
                  { text: "weiter…", next: "wegschleichen4" },
              ]
          },
          wegschleichen4: {
              text: "Dann greift es Jessica am Fuß und zerrt sie zu sich. Innerhalb einer Sekunde reißt es sie auseinander. Jessica's Kopf fällt zu Boden.",
              image: "images/sam_tod_2.gif",
              choices: [
                  { text: "weiter…", next: "wegschleichen5" },
              ]
          },
          wegschleichen5: {
              text: "Jessica ist tot.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Geschichte neu beginnen", next: "start" },
              ]
          },
          gefängnis: {
              text: "Als Jessica sich endlich wieder aus ihrem Versteck heraus traut, geht sie vorsichtig weiter. Wolfie, der achtsam auf sie aufpasst, folgt ihr.",
              image: "images/gefängnis_1.jpg",
              choices: [
                  { text: "weiter…", next: "gefängnis1" },
              ]
          },
          gefängnis1: {
              text: "Sie gehen durch einen Flur, welcher einem Gefängnis ziemlich ähnlich sieht.",
              image: "images/gefängnis_1.jpg",
              choices: [
                  { text: "weiter…", next: "gefängnis2" },
              ]
          },
          gefängnis2: {
              text: "Lautes Ratteln von Metall lässt Jessica und Wolfie nach oben schauen.",
              image: "images/gefängnis.jpg",
              choices: [
                  { text: "weiter…", next: "gefängnis3" },
              ]
          },
          gefängnis3: {
              text: "Über ihnen befinden sich zahlreiche, metallische Käfige. Was sich darin befindet, lässt Jessica erschaudern.",
              image: "images/gefängnis.jpg",
              choices: [
                  { text: "weiter…", next: "gefängnis4" },
              ]
          },
          gefängnis4: {
              text: "In den Käfigen befinden sich haufenweise Wendigos, welche versuchen aus den Käfigen auszubrechen.",
              image: "images/gefängnis.jpg",
              choices: [
                  { text: "weiter…", next: "gefängnis5" },
              ]
          },
          gefängnis5: {
              text: "Langsam schleichen Jessica und Wolfie an den Käfigen vorbei, doch ihr Weg führt sie wieder zurück in die Minen.",
              image: "images/mine.gif",
              choices: [
                  { text: "weiter…", next: "gefängnis6" },
              ]
          },
          gefängnis6: {
              text: "Jessica ist verzweifelt. Hier muss sich doch irgendwo ein Ausgang befinden…",
              image: "images/mine.gif",
              choices: [
                  { text: "weiter…", next: "gefängnis7" },
              ]
          },
          gefängnis7: {
              text: "Sie gehen weiter den Gang der Mine entlang, als sie ein lautes Kreischen hören. Wolfie knurrt in dessen Richtung.",
              image: "images/wendigo_jagd.gif",
              choices: [
                  { text: "weiter…", next: "gefängnis8" },
              ]
          },
          gefängnis8: {
              text: "Lautes Krabbeln mit wahnsinniger Geschwindigkeit kommen immer näher auf sie zu.",
              image: "images/wendigo_jagd.gif",
              choices: [
                  { text: "Hinter einer Holzwand verstecken", next: "holzwand" },
                  { text: "Weiter geradeaus laufen", next: "geradeaus" },
              ]
          },
          holzwand: {
              text: "Jessica und Wolfie verstecken sich hinter einer naheliegenden Holzwand.",
              image: "images/jessica_minen_9.jpg",
              choices: [
                  { text: "weiter…", next: "holzwand1" },
              ]
          },
          holzwand1: {
              text: "Der Wendigo rast an ihnen vorbei.",
              image: "images/jessica_minen_9.jpg",
              choices: [
                  { text: "weiter…", next: "öffnung" },
              ]
          },
          geradeaus: {
              text: "Jessica fängt an zu rennen, doch sie unterschätzt die wahnsinnige Geschwindigkeit des Wendigos.",
              image: "images/wendigo_jagd.gif",
              choices: [
                  { text: "weiter…", next: "geradeaus1" },
              ]
          },
          geradeaus1: {
              text: "Der Wendigo rast auf sie zu und reißt ihr während des Rennens die Kehle auf. Jessica fällt zu Boden und blutet aus.",
              image: "images/jessica_tot_3.gif",
              choices: [
                  { text: "weiter…", next: "geradeaus2" },
              ]
          },
          geradeaus2: {
              text: "Jessica ist tot.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Geschichte neu beginnen", next: "start" },
              ]
          },
          öffnung: {
              text: "Vorsichtig gehen sie weiter.",
              image: "images/mine_jessica.jpg",
              choices: [
                  { text: "weiter…", next: "öffnung1" },
              ]
          },
          öffnung1: {
              text: "Jessica tritt plötzlich auf eine Öffnung, die von ein paar Holzbrettern bedeckt ist.",
              image: "images/mine_jessica.jpg",
              choices: [
                  { text: "weiter…", next: "öffnung2" },
              ]
          },
          öffnung2: {
              text: "Wolfie starrt in die Richtung, in die der Wendigo verschwunden ist. Er knurrt.",
              image: "images/mine_jessica.jpg",
              choices: [
                  { text: "weiter…", next: "öffnung3" },
              ]
          },
          öffnung3: {
              text: "Der Wendigo kommt zurück.",
              image: "images/wendigo_4.jpg",
              choices: [
                  { text: "Verstecken", next: "verstecken_jess_1" },
                  { text: "Holzbretter durchbrechen", next: "durchbrechen" },
              ]
          },
          verstecken_jess_1: {
              text: "Jessica beschließt sich mit Wolfie erneut, leise hinter der Holzwand zu verstecken.",
              image: "images/jessica_verstecken.gif",
              choices: [
                  { text: "weiter…", next: "verstecken_jess_1_1" },
              ]
          },
          verstecken_jess_1_1: {
              text: "Durch ihre leisen Bewegungen bekommt der Wendigo nichts von ihnen mit und rennt weiter.",
              image: "images/jessica_verstecken.gif",
              choices: [
                  { text: "weiter…", next: "verstecken_jess_1_2" },
              ]
          },
          verstecken_jess_1_2: {
              text: "ALs die Luft wieder rein ist, laufen Jessica und Wolfie den Gang der Mine entland und entdecken schließlich eine Metalltür.",
              image: "images/mine_gang.jpg",
              choices: [
                  { text: "weiter…", next: "verstecken_jess_1_3" },
              ]
          },
          verstecken_jess_1_3: {
              text: "Sie schaffen es durch die Tür nach draußen zu gelangen. In der Ferne kann Jessica die Lodge erkennen.",
              image: "images/lodge.gif",
              choices: [
                  { text: "weiter…", next: "verstecken_jess_1_4" },
              ]
          },
          verstecken_jess_1_4: {
              text: "Jessica ist erleichtert.",
              image: "images/lodge.gif",
              choices: [
                  { text: "weiter…", next: "weg_zurück" },
              ]
          },
          durchbrechen: {
              text: "Jessica hebt langsam die Bretter von der Öffnung. Wolfie knurrt und fletscht seine Zähne immer mehr.",
              image: "images/wendigo_mine_2.jpg",
              choices: [
                  { text: "weiter…", next: "durchbrechen1" },
              ]
          },
          durchbrechen1: {
              text: "Das Entfernen der Bretter ist zu laut, der Wendigo hat sie entdeckt. Dieser rennt mit voller Geschwindigkeit auf sie zu. Wolfie bellt laut.",
              image: "images/jessica_tot_1.gif",
              choices: [
                  { text: "weiter…", next: "durchbrechen2" },
              ]
          },
          durchbrechen2: {
              text: "Der Wendigo wirft Wolfie zur Seite und springt kurz danach sofort auf Jessica, die keine Zeit hat zum Reagieren.",
              image: "images/jessica_tot_1.gif",
              choices: [
                  { text: "weiter…", next: "durchbrechen3" },
              ]
          },
          durchbrechen3: {
              text: "Jessica und der Wendigo krachen durch die Holzbretter und fallen in die Öffnung. Jessica schlägt hart auf dem Boden auf.",
              image: "images/jessica_tot_1.gif",
              choices: [
                  { text: "weiter…", next: "durchbrechen4" },
              ]
          },
          durchbrechen4: {
              text: "Doch dem Wendigo ist dies egal. Es springt auf sie und erblindet sie mit seinen Nägeln.",
              image: "images/jessica_tot_1.gif",
              choices: [
                  { text: "weiter…", next: "durchbrechen5" },
              ]
          },
          durchbrechen5: {
              text: "Jessica ist tot.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "Geschichte neu beginnen", next: "start" },
              ]
          },
          weg_zurück: {
              text: "Jessica und Wolfie machen sich auf den Weg zurück zur Lodge.",
              image: "images/lodge.gif",
              choices: [
                  { text: "weiter…", next: "weg_zurück1" },
              ]
          },
          weg_zurück1: {
              text: "Als sie näher kommen, bemerkt Jessica, dass es unangenehm still ist.",
              image: "images/lodge.gif",
              choices: [
                  { text: "weiter…", next: "weg_zurück2" },
              ]
          },
          weg_zurück2: {
              text: "Jessica klopft an das Fenster der Vordertüre, doch niemand öffnet ihr.",
              image: "images/lodge.gif",
              choices: [
                  { text: "weiter…", next: "weg_zurück3" },
              ]
          },
          weg_zurück3: {
              text: "Sie entscheidet sich mit Wolfie zur Hintertür zu gehen, doch je näher sie kommen, desto angespannter verhält sich der Wolf.",
              image: "images/lodge.gif",
              choices: [
                  { text: "weiter…", next: "weg_zurück4" },
              ]
          },
          weg_zurück4: {
              text: "Wolfie's Reaktion macht Jessica unsicher, doch sie versucht trotzdem die Tür zu öffnen.",
              image: "images/lodge.gif",
              choices: [
                  { text: "weiter…", next: "weg_zurück5" },
              ]
          },
          weg_zurück5: {
              text: "Die Hintertür ist nicht verschlossen. Wolfie und Jessica betreten vorsichtig die Lodge.",
              image: "images/lodge.gif",
              choices: [
                  { text: "weiter…", next: "weg_zurück6" },
              ]
          },
          weg_zurück6: {
              text: "Sie laufen tiefer in den Raum hinein. Jessica sieht Sam und Chris am anderen Ende des Raumes stehen.",
              image: "images/lodge_gruppe.jpg",
              choices: [
                  { text: "weiter…", next: "weg_zurück7" },
              ]
          },
          weg_zurück7: {
              text: "Jessica ist kurz davor auf sie zuzugehen, doch Sam setzt den Zeigefinger an ihre Lippen. Mit der anderen Hand zeigt sie nach oben.",
              image: "images/lodge_gruppe.jpg",
              choices: [
                  { text: "weiter…", next: "weg_zurück8" },
              ]
          },
          weg_zurück8: {
              text: "Jessica erstarrt und blickt langsam nach oben.",
              image: "images/lodge_gruppe.jpg",
              choices: [
                  { text: "weiter…", next: "weg_zurück9" },
              ]
          },
          weg_zurück9: {
              text: "Auf dem Kronleuchter in der Mitte des Raumes hängt ein Wendigo, welcher langsam den Raum durchschaut.",
              image: "images/wendigo_leuchter.jpg",
              choices: [
                  { text: "weiter…", next: "weg_zurück10" },
              ]
          },
          weg_zurück10: {
              text: "Plötzlich fängt der Wolf hinter Jessica an zu bellen. Das zieht die Aufmerksamkeit des Wendigos auf sich.",
              image: "images/wendigo_leuchter.jpg",
              choices: [
                  { text: "weiter…", next: "weg_zurück11" },
              ]
          },
          weg_zurück11: {
              text: "Der Wendigo springt von dem Kronleuchter und schreit. Der Lärm zieht sofort weitere Wendigos an.",
              image: "images/wendigo_abgelenkt.gif",
              choices: [
                  { text: "weiter…", next: "weg_zurück12" },
              ]
          },
          weg_zurück12: {
              text: "Vor den Augen der Freunde, beginnt der Wendigo die anderen Wendigos zu bekämpfen.",
              image: "images/wendigo_abgelenkt.gif",
              choices: [
                  { text: "weiter…", next: "weg_zurück13" },
            ]
          },
          weg_zurück13: {
              text: "Es überwältigt einen und wirft den Toten mit abgerissenem Kopf gegen ein Rohr. Das Rohr bricht auf und Gas wird in der Lodge freisetzt.",
              image: "images/wendigo_abgelenkt.gif",
              choices: [
                  { text: "weiter…", next: "weg_zurück14" },
            ]
          },
          weg_zurück13: {
              text: "Jessica bemerkt dies und bewegt sich langsam auf eine nahegelegene Glühbirne zu.",
              image: "images/wendigo_abgelenkt.gif",
              choices: [
                  { text: "weiter…", next: "weg_zurück14" },
            ]
          },
          weg_zurück14: {
              text: "Die Wendigos sind abgelenkt, sodass sie von Jessica's Bewegungen nichts mitbekommen.",
              image: "images/wendigo_abgelenkt.gif",
              choices: [
                  { text: "weiter…", next: "weg_zurück15" },
            ]
          },
          weg_zurück15: {
              text: "Sie erreicht die Glühbirne und sieht, dass diese an einem Kabel mit einem Lichtschalter verbunden ist.",
              image: "images/wendigo_abgelenkt.gif",
              choices: [
                  { text: "weiter…", next: "weg_zurück16" },
            ]
          },
          weg_zurück16: {
              text: "Der Lichtschalter und die Wendigos sind das Einzige, was Jessica, Sam und Chris am Flüchten hindert. Jessica schaut zu Sam und Chris.",
              image: "images/wendigo_abgelenkt.gif",
              choices: [
                  { text: "Teamwork", next: "teamwork_jess" },
                  { text: "Allein", next: "allein_jess" },
            ]
          },
          teamwork_jess: {
              text: "Durch die abgelenkten Wendigos, können Jessica, Sam und Chris kurz einen Plan feilschen.",
              image: "images/wendigo_abgelenkt.gif",
              choices: [
                  { text: "weiter…", next: "teamwork_jess1" },
            ]
          },
          teamwork_jess1: {
              text: "Jessica's Plan ist es den Schalter umzulegen und dann so schnell wie möglich aus der Lodge zu fliehen.",
              image: "images/wendigo_abgelenkt.gif",
              choices: [
                  { text: "weiter…", next: "teamwork_jess2" },
            ]
          },
          teamwork_jess2: {
              text: "Sam und Chris sind damit einverstanden. Chris hebt Wolfie auf seine Arme und die Anderen positionieren sich.",
              image: "images/wendigo_abgelenkt.gif",
              choices: [
                  { text: "weiter…", next: "teamwork_jess3" },
            ]
          },
          teamwork_jess3: {
              text: "Nach einem kurzen Zeichen rennt Jessica auf den Schalter zu. „Jetzt seid ihr fällig.“",
              image: "images/jessica_ende.jpg",
              choices: [
                  { text: "weiter…", next: "teamwork_jess4" },
            ]
          },
          teamwork_jess4: {
              text: "Sam und Chris rennen ebenfalls sofort los. Die hektischen Bewegungen ziehen die Aufmerksamkeit der Wendigos auf sich.",
              image: "images/jessica_ende.jpg",
              choices: [
                  { text: "weiter…", next: "teamwork_jess5" },
            ]
          },
          teamwork_jess5: {
              text: "Diese rennen ihnen mit unmenschlicher Geschwindigkeit hinterher. Doch dieses Mal sind sie zu langsam.",
              image: "images/jessica_ende.jpg",
              choices: [
                  { text: "weiter…", next: "teamwork_jess6" },
            ]
          },
          teamwork_jess6: {
              text: "Die Hitze der Glühbirne entzündet das Gas in der Lodge. Die massive Wucht der Explosion schleudert Jessica und ihre drei Freunde nach draußen.",
              image: "images/explosion.gif",
              choices: [
                  { text: "weiter…", next: "teamwork_jess7" },
            ]
          },
          teamwork_jess7: {
              text: "Das Einzige, was sie noch hören sind die Flammen des Feuers und die schrillen Schreie der brennenden Wendigos.",
              image: "images/explosion.gif",
              choices: [
                  { text: "weiter…", next: "teamwork_jess8" },
            ]
          },
          teamwork_jess8: {
              text: "Alle sind entkommen.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "weiter…", next: "alle_entkommen" },
            ]
          },
          alle_entkommen: {
              text: "Sie stehen benommen vor der brennenden Lodge. Das Geräusch eines Helikopters ist in der Ferne zu hören.",
              image: "images/ende.jpg",
              choices: [
                  { text: "weiter…", next: "alle_entkommen1" },
            ]
          },
          alle_entkommen1: {
              text: "Der Rauch des Feuers steigt in den Himmel. Sie werden gerettet.",
              image: "images/ende.jpg",
              choices: [
                  { text: "weiter…", next: "alle_entkommen2" },
            ]
          },
          alle_entkommen2: {
              text: "Die Sonne geht auf und die Nacht verblasst.",
              image: "images/ende.jpg",
              choices: [
                  { text: "Geschichte neu beginnen", next: "" },
            ]
          },
          allein_jess: {
              text: "Jessica ist panisch und ohne nachzudenken rennt sie auf den Lichtschalter zu.",
              image: "images/jessica_ende.jpg",
              choices: [
                  { text: "weiter…", next: "allein_jess1" },
            ]
          },
          allein_jess1: {
              text: "Ihre schnellen und lauten Bewegungen ziehen die Aufmerksamkeit der Wendigos auf sich, welche sich sofort auf sie stürzen.",
              image: "images/jessica_ende.jpg",
              choices: [
                  { text: "weiter…", next: "allein_jess2" },
            ]
          },
          allein_jess2: {
              text: "Doch der Wolf reagiert sofort. Er rennt auf die angreifenden Wendigos zu und springt auf sie.",
              image: "images/jessica_ende.jpg",
              choices: [
                  { text: "weiter…", next: "allein_jess3" },
            ]
          },
          allein_jess3: {
              text: "Wolfie und der Wendigo knallen gegen die Wand. Die Wendigos sind jedoch nur für einen kurzen Augenblick abgelenkt.",
              image: "images/jessica_ende.jpg",
              choices: [
                  { text: "weiter…", next: "allein_jess4" },
            ]
          },
          allein_jess4: {
              text: "Einer der Wendigos greift sich den Wolf und bricht ihm das Genick, die Anderen rasen auf Jessica zu.",
              image: "images/jessica_ende.jpg",
              choices: [
                  { text: "weiter…", next: "allein_jess5" },
            ]
          },
          allein_jess5: {
              text: "Jessica rennt schneller. Im Hintergrund hört sie Sam und Chris rufen „JESSICA. NEIN!“",
              image: "images/jessica_ende.jpg",
              choices: [
                  { text: "weiter…", next: "allein_jess6" },
            ]
          },
          allein_jess6: {
              text: "Jessica ignoriert ihre Rufe und schlägt den Schalter um.",
              image: "images/explosion.gif",
              choices: [
                  { text: "weiter…", next: "allein_jess7" },
            ]
          },
          allein_jess7: {
              text: "Die Hitze der Glühbirne entzündet das Gas in der Lodge. Die massive Wucht der Explosion schleudert Jessica nach draußen.",
              image: "images/explosion.gif",
              choices: [
                  { text: "weiter…", next: "allein_jess8" },
            ]
          },
          allein_jess8: {
              text: "Das Einzige, was sie noch hört sind die Schreie ihrer sterbenden Freunde und der brennenden Wendigos.",
              image: "images/explosion.gif",
              choices: [
                  { text: "weiter…", next: "allein_jess9" },
            ]
          },
          allein_jess9: {
              text: "Sam ist tot.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "weiter…", next: "allein_jess10" },
            ]
          },
          allein_jess10: {
              text: "Chris ist tot.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "weiter…", next: "allein_jess11" },
            ]
          },
          allein_jess11: {
              text: "Der Wolf ist tot.",
              image: "images/butterfly.gif",
              choices: [
                  { text: "weiter…", next: "j_entkommt" },
            ]
          },
          j_entkommt: {
              text: "Sie steht benommen vor der brennenden Lodge. Das Geräusch eines Helikopters ist in der Ferne zu hören.",
              image: "images/ende.jpg",
              choices: [
                  { text: "weiter…", next: "j_entkommt1" },
            ]
          },
          j_entkommt1: {
              text: "Der Rauch des Feuers steigt in den Himmel. Sie wird gerettet.",
              image: "images/ende.jpg",
              choices: [
                  { text: "weiter…", next: "j_entkommt2" },
            ]
          },
          j_entkommt2: {
              text: "Die Sonne geht auf und die Nacht verblasst.",
              image: "images/ende.jpg",
              choices: [
                  { text: "Geschichte neu beginnen", next: "" },
            ]
          },
        }
    }
};


function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

function displayStory(storyNode) {
    storyElement.textContent = characters[selectedCharacter].storyline[storyNode].text;
    storyImage.src = characters[selectedCharacter].storyline[storyNode].image;
    storyImage.style.opacity = 0;
    choicesElement.innerHTML = '';
    characters[selectedCharacter].storyline[storyNode].choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('choice-button');
        button.onclick = () => {
            playClickSound();
            displayStory(choice.next);
        };
        choicesElement.appendChild(button);
    });
}

function selectCharacter(character) {
    selectedCharacter = character;
    playClickSound();
    characterSelection.classList.add('hidden');
    gameContainer.classList.remove('hidden');
    displayStory('start');
}

startButton.onclick = () => {
    playClickSound();
    titleScreen.classList.add('hidden');
    characterSelection.classList.remove('hidden');
    backgroundMusic.play();
};
