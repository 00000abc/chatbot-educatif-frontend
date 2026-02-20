// Base de données des leçons selon le programme du Burkina Faso

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  objectives: string[];
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
    }[];
    examples?: string[];
    exercises?: string[];
  };
}

export interface SubjectLessons {
  [key: string]: Lesson[];
}

export interface ClassLessons {
  [key: string]: SubjectLessons;
}

export const BURKINA_LESSONS: ClassLessons = {
  "cp1": {
    "francais": [
      {
        "id": "1",
        "title": "Les voyelles",
        "description": "Découvrir et reconnaître les 6 voyelles de l'alphabet",
        "duration": "20 min",
        "objectives": [
          "Identifier les 6 voyelles : a, e, i, o, u, y",
          "Prononcer correctement chaque voyelle",
          "Reconnaître les voyelles dans des mots simples"
        ],
        "content": {
          "introduction": "Les voyelles sont les premières lettres que nous allons apprendre. Il y en a 6 en français.",
          "sections": [
            {
              "title": "Les 6 voyelles",
              "content": "En français, nous avons 6 voyelles : A, E, I, O, U, Y. Ces lettres se prononcent toutes seules et sont très importantes pour former des mots."
            },
            {
              "title": "Prononciation",
              "content": "A se dit 'a' comme dans papa. E se dit 'e' comme dans bébé. I se dit 'i' comme dans ami. O se dit 'o' comme dans moto. U se dit 'u' comme dans lune. Y se dit 'i' comme dans stylo."
            }
          ],
          "examples": [
            "papa",
            "bébé",
            "ami",
            "moto",
            "lune"
          ],
          "exercises": [
            "Entoure les voyelles dans ces mots : arbre, école, igname",
            "Écris les voyelles de a à y"
          ]
        }
      },
      {
        "id": "2",
        "title": "Les consonnes (1ère partie)",
        "description": "Apprendre les premières consonnes : b, d, f, l, m, n",
        "duration": "25 min",
        "objectives": [
          "Reconnaître les consonnes b, d, f, l, m, n",
          "Former des syllabes simples",
          "Lire des mots simples"
        ],
        "content": {
          "introduction": "Les consonnes sont des lettres qui s'associent aux voyelles pour former des syllabes et des mots.",
          "sections": [
            {
              "title": "Les premières consonnes",
              "content": "Nous allons apprendre 6 consonnes : B, D, F, L, M, N. Ces lettres ne se prononcent pas seules, elles ont besoin des voyelles."
            },
            {
              "title": "Former des syllabes",
              "content": "Quand on met une consonne avec une voyelle, on forme une syllabe. Exemples : ba, be, bi, bo, bu - ma, me, mi, mo, mu"
            }
          ],
          "examples": [
            "ba-ba",
            "ma-man",
            "fa-mi",
            "do-do"
          ],
          "exercises": [
            "Lis les syllabes : ba - be - bi - bo - bu",
            "Forme des mots avec ma, me, mi, mo, mu"
          ]
        }
      },
      {
        "id": "3",
        "title": "Les syllabes simples",
        "description": "Assembler les consonnes et voyelles pour former des syllabes",
        "duration": "20 min",
        "objectives": [
          "Combiner consonnes et voyelles",
          "Lire des syllabes simples",
          "Former des mots simples"
        ],
        "content": {
          "introduction": "Une syllabe est formée d'une consonne et d'une voyelle. C'est la base pour lire et écrire.",
          "sections": [
            {
              "title": "Comment former une syllabe",
              "content": "Pour former une syllabe, on met une consonne devant une voyelle. Par exemple : m + a = ma, b + o = bo"
            }
          ],
          "examples": [
            "ma-ma",
            "pa-pa",
            "to-to",
            "bi-bi"
          ],
          "exercises": [
            "Découpe ces mots en syllabes : papa, maman, vélo",
            "Colorie les syllabes de 'bateau'"
          ]
        }
      },
      {
        "id": "4",
        "title": "Les mots simples",
        "description": "Lire des mots de 2 syllabes",
        "duration": "20 min",
        "objectives": [
          "Lire des mots simples",
          "Associer un mot à une image",
          "Écrire des mots simples"
        ],
        "content": {
          "introduction": "Maintenant que nous savons former des syllabes, nous allons lire des mots entiers !",
          "sections": [
            {
              "title": "Des mots de 2 syllabes",
              "content": "Des mots comme 'lama' (la + ma), 'papa' (pa + pa), 'moto' (mo + to) sont faciles à lire."
            }
          ],
          "examples": [
            "lama",
            "papa",
            "moto",
            "vélo",
            "bébé"
          ],
          "exercises": [
            "Lis ces mots : lama - vélo - moto - bébé",
            "Dessine le mot 'papa'"
          ]
        }
      }
    ],
    "mathematiques": [
      {
        "id": "1",
        "title": "Les nombres de 1 à 5",
        "description": "Compter et reconnaître les chiffres de 1 à 5",
        "duration": "20 min",
        "objectives": [
          "Compter de 1 à 5",
          "Reconnaître l'écriture des chiffres 1,2,3,4,5",
          "Associer un nombre à une quantité"
        ],
        "content": {
          "introduction": "Commençons par apprendre les 5 premiers nombres.",
          "sections": [
            {
              "title": "Compter de 1 à 5",
              "content": "1 (un) = un objet • / 2 (deux) = deux objets •• / 3 (trois) = trois objets ••• / 4 (quatre) = quatre objets •••• / 5 (cinq) = cinq objets •••••"
            }
          ],
          "examples": [
            "1 crayon",
            "2 yeux",
            "3 repas",
            "4 pattes",
            "5 doigts"
          ],
          "exercises": [
            "Compte les objets : 🍎 = 1, 🍎🍎 = 2, 🍎🍎🍎 = 3",
            "Colorie 3 ballons"
          ]
        }
      },
      {
        "id": "2",
        "title": "Les nombres de 6 à 10",
        "description": "Compter et reconnaître les chiffres de 6 à 10",
        "duration": "20 min",
        "objectives": [
          "Compter de 6 à 10",
          "Reconnaître l'écriture des chiffres 6,7,8,9,10",
          "Associer un nombre à une quantité"
        ],
        "content": {
          "introduction": "Continuons avec les nombres jusqu'à 10.",
          "sections": [
            {
              "title": "Compter de 6 à 10",
              "content": "6 (six) = six objets •••••• / 7 (sept) = sept objets ••••••• / 8 (huit) = huit objets •••••••• / 9 (neuf) = neuf objets ••••••••• / 10 (dix) = dix objets ••••••••••"
            }
          ],
          "examples": [
            "6 œufs",
            "7 jours",
            "8 pattes",
            "9 mois",
            "10 doigts"
          ],
          "exercises": [
            "Compte les objets : 🐶🐶🐶🐶🐶🐶 = 6",
            "Écris le chiffre qui manque : 6,7,8,_,10"
          ]
        }
      },
      {
        "id": "3",
        "title": "Addition simple (1 à 3)",
        "description": "Ajouter de petits nombres",
        "duration": "15 min",
        "objectives": [
          "Comprendre le concept d'addition",
          "Additionner des nombres de 1 à 3",
          "Utiliser le signe +"
        ],
        "content": {
          "introduction": "Additionner, c'est ajouter des objets ensemble.",
          "sections": [
            {
              "title": "L'addition",
              "content": "Si j'ai 1 bonbon et qu'on me donne 1 bonbon, j'ai 2 bonbons. On écrit : 1 + 1 = 2"
            }
          ],
          "examples": [
            "1 + 1 = 2",
            "2 + 1 = 3",
            "1 + 2 = 3",
            "2 + 2 = 4"
          ],
          "exercises": [
            "Calcule : 1 + 1 = ___, 2 + 1 = ___, 1 + 2 = ___",
            "Dessine 2 pommes + 1 pomme"
          ]
        }
      },
      {
        "id": "4",
        "title": "Les formes géométriques",
        "description": "Reconnaître le cercle, le carré et le triangle",
        "duration": "20 min",
        "objectives": [
          "Identifier les formes de base",
          "Nommer les formes",
          "Trouver des formes dans son environnement"
        ],
        "content": {
          "introduction": "Les formes géométriques sont partout autour de nous.",
          "sections": [
            {
              "title": "Les trois formes de base",
              "content": "Le cercle est rond comme une orange. Le carré a 4 côtés égaux comme un mouchoir. Le triangle a 3 côtés comme le toit d'une maison."
            }
          ],
          "examples": [
            "Cercle : orange, assiette",
            "Carré : fenêtre, cahier",
            "Triangle : toit"
          ],
          "exercises": [
            "Colorie les cercles en rouge, les carrés en bleu, les triangles en jaune",
            "Trouve 3 objets ronds dans la classe"
          ]
        }
      }
    ],
    "sciences": [
      {
        "id": "1",
        "title": "Les parties du corps",
        "description": "Connaître les principales parties du corps humain",
        "duration": "20 min",
        "objectives": [
          "Nommer les parties du corps",
          "Montrer les parties sur soi-même",
          "Comprendre l'utilité de chaque partie"
        ],
        "content": {
          "introduction": "Notre corps est composé de plusieurs parties qui ont chacune une fonction.",
          "sections": [
            {
              "title": "La tête",
              "content": "Sur la tête, nous avons : les yeux (pour voir), les oreilles (pour entendre), le nez (pour sentir), la bouche (pour manger et parler)"
            },
            {
              "title": "Le corps",
              "content": "Notre corps comprend : les bras (pour attraper), les mains (pour toucher), les jambes (pour marcher), les pieds (pour se tenir debout)"
            }
          ],
          "examples": [
            "Yeux",
            "Oreilles",
            "Nez",
            "Bouche",
            "Mains",
            "Pieds"
          ],
          "exercises": [
            "Montre ta tête, tes bras, tes jambes",
            "Dessine un bonhomme avec toutes les parties du corps"
          ]
        }
      },
      {
        "id": "2",
        "title": "Les animaux domestiques",
        "description": "Connaître les animaux que nous élevons",
        "duration": "20 min",
        "objectives": [
          "Identifier les animaux domestiques",
          "Connaître leur utilité",
          "Savoir comment en prendre soin"
        ],
        "content": {
          "introduction": "Au Burkina Faso, nous élevons plusieurs animaux qui nous aident dans la vie quotidienne.",
          "sections": [
            {
              "title": "Les animaux de la ferme",
              "content": "La poule donne des œufs. La chèvre donne du lait. Le mouton donne de la viande. L'âne aide à transporter les charges."
            }
          ],
          "examples": [
            "Poules",
            "Chèvres",
            "Moutons",
            "Ânes",
            "Bœufs"
          ],
          "exercises": [
            "Nomme 3 animaux de la ferme",
            "Que donne la poule ?"
          ]
        }
      }
    ]
  },
  "cp2": {
    "francais": [
      {
        "id": "1",
        "title": "Les consonnes (2ème partie)",
        "description": "Apprendre les autres consonnes : c, p, r, s, t, v",
        "duration": "25 min",
        "objectives": [
          "Reconnaître les consonnes c, p, r, s, t, v",
          "Former des syllabes avec ces consonnes",
          "Lire des mots plus variés"
        ],
        "content": {
          "introduction": "Nous connaissons déjà 6 consonnes. Apprenons les 6 suivantes !",
          "sections": [
            {
              "title": "Les nouvelles consonnes",
              "content": "Nous allons apprendre : C, P, R, S, T, V. Avec elles, nous pourrons lire beaucoup plus de mots."
            },
            {
              "title": "Former des syllabes",
              "content": "ca, ce, ci, co, cu - pa, pe, pi, po, pu - ra, re, ri, ro, ru - sa, se, si, so, su - ta, te, ti, to, tu - va, ve, vi, vo, vu"
            }
          ],
          "examples": [
            "ca-hier",
            "pa-pa",
            "ra-ton",
            "sa-von",
            "ta-ble",
            "vé-lo"
          ],
          "exercises": [
            "Lis les syllabes : ca - ce - ci - co - cu",
            "Forme des mots avec ra, re, ri, ro, ru"
          ]
        }
      },
      {
        "id": "2",
        "title": "Les syllabes complexes",
        "description": "Syllabes avec deux consonnes (bra, cro, etc.)",
        "duration": "25 min",
        "objectives": [
          "Lire des syllabes de type consonne+consonne+voyelle",
          "Former des mots avec ces syllabes",
          "Améliorer la fluidité de lecture"
        ],
        "content": {
          "introduction": "Maintenant, nous allons apprendre à lire des syllabes avec deux consonnes ensemble.",
          "sections": [
            {
              "title": "Les syllabes complexes",
              "content": "Quand on met deux consonnes avant une voyelle, on forme des syllabes comme : bra, bre, bri, bro, bru - cra, cre, cri, cro, cru - dra, dre, dri, dro, dru"
            }
          ],
          "examples": [
            "bra-vo",
            "crai-on",
            "drapeau",
            "fri-tes",
            "grand"
          ],
          "exercises": [
            "Lis ces syllabes : bra - bre - bri - bro - bru",
            "Trouve un mot qui commence par 'cra'"
          ]
        }
      },
      {
        "id": "3",
        "title": "La phrase simple",
        "description": "Construire une phrase de 3-4 mots",
        "duration": "20 min",
        "objectives": [
          "Comprendre ce qu'est une phrase",
          "Mettre une majuscule et un point",
          "Construire des phrases simples"
        ],
        "content": {
          "introduction": "Une phrase raconte quelque chose. Elle commence par une majuscule et finit par un point.",
          "sections": [
            {
              "title": "Comment faire une phrase",
              "content": "Pour faire une phrase, on met des mots dans l'ordre. Exemple : 'Le chat dort.' C'est une phrase."
            }
          ],
          "examples": [
            "Le chien court.",
            "Maman prépare le repas.",
            "Les enfants jouent."
          ],
          "exercises": [
            "Remets les mots en ordre : est - grand - Le - lion",
            "Ajoute la majuscule et le point : le chat dort"
          ]
        }
      },
      {
        "id": "4",
        "title": "Lecture de mots courants",
        "description": "Lire des mots du quotidien",
        "duration": "20 min",
        "objectives": [
          "Lire des mots usuels sans les épeler",
          "Associer des mots à des images",
          "Enrichir son vocabulaire"
        ],
        "content": {
          "introduction": "Certains mots reviennent souvent dans notre vie. Apprenons à les lire rapidement.",
          "sections": [
            {
              "title": "Les mots du quotidien",
              "content": "Des mots comme 'école', 'maison', 'maman', 'papa', 'chat', 'chien' sont faciles à reconnaître."
            }
          ],
          "examples": [
            "école",
            "maison",
            "maman",
            "papa",
            "chat",
            "chien",
            "voiture"
          ],
          "exercises": [
            "Lis ces mots : école - maison - maman - chat",
            "Dessine et écris le mot 'soleil'"
          ]
        }
      }
    ],
    "mathematiques": [
      {
        "id": "1",
        "title": "Les nombres de 11 à 20",
        "description": "Compter et écrire jusqu'à 20",
        "duration": "25 min",
        "objectives": [
          "Compter de 11 à 20",
          "Écrire les nombres jusqu'à 20",
          "Comprendre la dizaine et les unités"
        ],
        "content": {
          "introduction": "Après 10, les nombres continuent jusqu'à 20.",
          "sections": [
            {
              "title": "Compter de 11 à 20",
              "content": "11 (onze), 12 (douze), 13 (treize), 14 (quatorze), 15 (quinze), 16 (seize), 17 (dix-sept), 18 (dix-huit), 19 (dix-neuf), 20 (vingt)"
            },
            {
              "title": "Dizaines et unités",
              "content": "Dans 15, il y a 1 dizaine et 5 unités. Dans 20, il y a 2 dizaines et 0 unité."
            }
          ],
          "examples": [
            "11 œufs",
            "12 mois",
            "15 jours",
            "20 doigts"
          ],
          "exercises": [
            "Écris en chiffres : onze, quinze, vingt",
            "Combien de dizaines dans 17 ?"
          ]
        }
      },
      {
        "id": "2",
        "title": "Addition (1 à 10)",
        "description": "Additionner des nombres jusqu'à 10",
        "duration": "20 min",
        "objectives": [
          "Additionner deux nombres dont le total ne dépasse pas 10",
          "Utiliser ses doigts pour calculer",
          "Mémoriser les petites additions"
        ],
        "content": {
          "introduction": "Nous allons maintenant additionner des nombres jusqu'à 10.",
          "sections": [
            {
              "title": "Additions jusqu'à 10",
              "content": "2 + 3 = 5, 4 + 4 = 8, 5 + 3 = 8, 6 + 2 = 8, 7 + 2 = 9, 8 + 1 = 9, 9 + 1 = 10"
            }
          ],
          "examples": [
            "4 + 3 = 7",
            "5 + 5 = 10",
            "2 + 6 = 8",
            "3 + 4 = 7"
          ],
          "exercises": [
            "Calcule : 3 + 4 = ___, 5 + 2 = ___, 6 + 3 = ___",
            "Problème : J'ai 4 billes, on m'en donne 3. Combien en ai-je ?"
          ]
        }
      },
      {
        "id": "3",
        "title": "Soustraction simple",
        "description": "Enlever de petites quantités",
        "duration": "20 min",
        "objectives": [
          "Comprendre le sens de la soustraction",
          "Soustraire des nombres jusqu'à 5",
          "Utiliser le signe -"
        ],
        "content": {
          "introduction": "La soustraction, c'est enlever des objets.",
          "sections": [
            {
              "title": "Comment soustraire",
              "content": "Si j'ai 5 bonbons et que j'en mange 2, il m'en reste 3. On écrit : 5 - 2 = 3"
            }
          ],
          "examples": [
            "3 - 1 = 2",
            "4 - 2 = 2",
            "5 - 3 = 2",
            "5 - 1 = 4"
          ],
          "exercises": [
            "Calcule : 4 - 1 = ___, 5 - 2 = ___, 3 - 2 = ___",
            "Dessine 4 étoiles et barres-en 2"
          ]
        }
      },
      {
        "id": "4",
        "title": "Comparer les nombres",
        "description": "Plus grand, plus petit, égal",
        "duration": "?",
        "objectives": [],
        "content": {
          "introduction": "",
          "sections": [],
          "examples": [],
          "exercises": []
        }
      }
    ]
  },
  "ce1": {
    "francais": [
      {
        "id": "1",
        "title": "Le groupe nominal",
        "description": "Découvrir le nom et son article",
        "duration": "25 min",
        "objectives": [
          "Reconnaître un nom (personne, animal, chose)",
          "Utiliser les déterminants (le, la, un, une)",
          "Construire un groupe nominal simple"
        ],
        "content": {
          "introduction": "Le groupe nominal, c'est un petit groupe de mots qui désigne une personne, un animal ou une chose.",
          "sections": [
            {
              "title": "Le nom",
              "content": "Le nom est un mot qui désigne une personne (papa, maman, maîtresse), un animal (chien, chat, lion) ou une chose (table, cahier, maison)."
            },
            {
              "title": "Le déterminant",
              "content": "Le déterminant est un petit mot devant le nom. Il y a 'le, la, les' (déterminants définis) et 'un, une, des' (déterminants indéfinis)."
            },
            {
              "title": "Féminin et masculin",
              "content": "Masculin : le garçon, un cahier. Féminin : la fille, une table."
            }
          ],
          "examples": [
            "le chien",
            "une fleur",
            "les enfants",
            "des amis"
          ],
          "exercises": [
            "Souligne le nom et entoure le déterminant : le tableau, une pomme, la maîtresse",
            "Mets le bon déterminant : ___ école, ___ livre, ___ arbre",
            "Transforme au pluriel : le chat → ___, une fleur → ___"
          ]
        }
      },
      {
        "id": "2",
        "title": "Le présent des verbes en -er",
        "description": "Apprendre à conjuguer les verbes du 1er groupe au présent",
        "duration": "30 min",
        "objectives": [
          "Identifier un verbe",
          "Connaître les terminaisons du présent pour les verbes en -er",
          "Conjuguer les verbes fréquents (chanter, jouer, manger)"
        ],
        "content": {
          "introduction": "Les verbes en -er, comme 'chanter' ou 'jouer', sont les plus nombreux en français.",
          "sections": [
            {
              "title": "Les terminaisons du présent",
              "content": "Je + e (je chante), Tu + es (tu chantes), Il/Elle/On + e (il chante), Nous + ons (nous chantons), Vous + ez (vous chantez), Ils/Elles + ent (ils chantent)."
            }
          ],
          "examples": [
            "Je chante",
            "Tu joues",
            "Il mange",
            "Nous dansons",
            "Vous sautez",
            "Elles aiment"
          ],
          "exercises": [
            "Relie le pronom à la bonne terminaison : Je - e, Tu - es, Nous - ons, Vous - ez, Ils - ent",
            "Complète : Je (jouer) ___ dans la cour, Nous (manger) ___ à la cantine",
            "Réécris : Je danse → Nous ___"
          ]
        }
      },
      {
        "id": "3",
        "title": "L'adjectif qualificatif",
        "description": "Reconnaître et utiliser l'adjectif pour décrire",
        "duration": "25 min",
        "objectives": [
          "Identifier un adjectif qualificatif",
          "Comprendre son rôle (donner des précisions)",
          "Accorder l'adjectif avec le nom"
        ],
        "content": {
          "introduction": "L'adjectif qualificatif est un mot qui donne des informations sur le nom.",
          "sections": [
            {
              "title": "À quoi sert l'adjectif ?",
              "content": "Il décrit (grand, petit), donne une couleur (rouge, bleu), une qualité (gentil) ou un défaut (méchant)."
            },
            {
              "title": "L'accord de l'adjectif",
              "content": "L'adjectif s'accorde avec le nom. Un chat noir → une chatte noire."
            }
          ],
          "examples": [
            "un gros chien",
            "une petite souris",
            "des fleurs rouges"
          ],
          "exercises": [
            "Souligne les adjectifs : Le gros chien noir dort dans sa niche",
            "Accorde l'adjectif : une (joli) ___ fleur, des (grand) ___ arbres"
          ]
        }
      },
      {
        "id": "4",
        "title": "La phrase négative",
        "description": "Former des phrases pour dire le contraire",
        "duration": "20 min",
        "objectives": [
          "Comprendre la négation",
          "Utiliser 'ne...pas'",
          "Transformer une phrase affirmative en négative"
        ],
        "content": {
          "introduction": "Pour dire le contraire, on utilise la négation.",
          "sections": [
            {
              "title": "La négation",
              "content": "En français, on met 'ne' devant le verbe et 'pas' après le verbe. Exemple : 'Je mange' devient 'Je ne mange pas'."
            }
          ],
          "examples": [
            "Je ne joue pas",
            "Tu ne chantes pas",
            "Il ne dort pas"
          ],
          "exercises": [
            "Transforme à la forme négative : Je mange → ___, Tu joues → ___",
            "Remets en ordre : ne - pas - chante - Il"
          ]
        }
      }
    ],
    "mathematiques": [
      {
        "id": "1",
        "title": "Les nombres de 0 à 100",
        "description": "Lire, écrire et décomposer les nombres jusqu'à 100",
        "duration": "30 min",
        "objectives": [
          "Compter jusqu'à 100",
          "Comprendre la valeur des chiffres (dizaines et unités)",
          "Décomposer un nombre"
        ],
        "content": {
          "introduction": "Quand on compte au-delà de 10, on utilise les dizaines.",
          "sections": [
            {
              "title": "Les dizaines",
              "content": "10 (dix), 20 (vingt), 30 (trente), 40 (quarante), 50 (cinquante), 60 (soixante), 70 (soixante-dix), 80 (quatre-vingts), 90 (quatre-vingt-dix), 100 (cent)."
            },
            {
              "title": "Décomposer un nombre",
              "content": "47 = 4 dizaines + 7 unités = 40 + 7, 53 = 5 dizaines + 3 unités = 50 + 3."
            }
          ],
          "examples": [
            "35 = 30 + 5",
            "72 = 70 + 2",
            "48 = 40 + 8"
          ],
          "exercises": [
            "Écris en chiffres : trente-cinq, soixante-douze, quatre-vingt-neuf",
            "Décompose : 53 = ___ + ___, 68 = ___ + ___",
            "Combien de dizaines dans 37 ?"
          ]
        }
      },
      {
        "id": "2",
        "title": "L'addition posée sans retenue",
        "description": "Apprendre à poser et calculer des additions sans retenue",
        "duration": "25 min",
        "objectives": [
          "Poser correctement une addition",
          "Additionner les unités puis les dizaines",
          "Vérifier son résultat"
        ],
        "content": {
          "introduction": "Quand les nombres sont grands, on peut les additionner en les posant en colonnes.",
          "sections": [
            {
              "title": "Comment poser une addition",
              "content": "On aligne les unités sous les unités, les dizaines sous les dizaines. Puis on additionne d'abord les unités, ensuite les dizaines."
            }
          ],
          "examples": [
            "34 + 23 = 57",
            "42 + 35 = 77",
            "51 + 28 = 79"
          ],
          "exercises": [
            "Pose et calcule : 24 + 32, 43 + 26, 51 + 34",
            "Problème : 24 garçons et 32 filles, combien d'élèves ?"
          ]
        }
      },
      {
        "id": "3",
        "title": "La soustraction posée sans retenue",
        "description": "Apprendre à poser et calculer des soustractions simples",
        "duration": "25 min",
        "objectives": [
          "Comprendre le sens de la soustraction",
          "Poser correctement une soustraction",
          "Calculer des soustractions sans retenue"
        ],
        "content": {
          "introduction": "La soustraction sert à enlever une quantité à une autre.",
          "sections": [
            {
              "title": "Comment poser une soustraction",
              "content": "On aligne les unités sous les unités, les dizaines sous les dizaines. On soustrait d'abord les unités, ensuite les dizaines."
            }
          ],
          "examples": [
            "58 - 23 = 35",
            "47 - 25 = 22",
            "69 - 34 = 35"
          ],
          "exercises": [
            "Pose et calcule : 48 - 26, 57 - 32, 75 - 43",
            "Problème : 68 billes - 25 billes = ?"
          ]
        }
      },
      {
        "id": "4",
        "title": "La multiplication (sens et tables)",
        "description": "Comprendre le sens de la multiplication et apprendre les tables",
        "duration": "30 min",
        "objectives": [
          "Comprendre que multiplier, c'est additionner plusieurs fois le même nombre",
          "Connaître les tables de 2, 3, 4 et 5",
          "Utiliser le signe ×"
        ],
        "content": {
          "introduction": "La multiplication est une addition répétée.",
          "sections": [
            {
              "title": "Du concret à l'abstrait",
              "content": "3 paquets de 2 bonbons = 2+2+2 = 6 ou 3 × 2 = 6."
            },
            {
              "title": "Les tables",
              "content": "Table de 2 : 1×2=2, 2×2=4, 3×2=6, 4×2=8, 5×2=10. Table de 3 : 1×3=3, 2×3=6, 3×3=9, 4×3=12, 5×3=15."
            }
          ],
          "examples": [
            "4 × 2 = 8",
            "3 × 5 = 15",
            "6 × 3 = 18"
          ],
          "exercises": [
            "Transforme l'addition en multiplication : 2+2+2+2 = ___ × ___",
            "Calcule : 4×2, 3×5, 6×3",
            "Problème : 5 rangées de 4 tables = ?"
          ]
        }
      }
    ],
    "sciences": [
      {
        "id": "1",
        "title": "Les jours et les mois",
        "description": "Connaître les jours de la semaine et les mois de l'année",
        "duration": "20 min",
        "objectives": [
          "Nommer les jours de la semaine dans l'ordre",
          "Nommer les mois de l'année",
          "Se repérer dans le temps"
        ],
        "content": {
          "introduction": "Pour se repérer dans le temps, on utilise les jours et les mois.",
          "sections": [
            {
              "title": "Les jours de la semaine",
              "content": "Lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche. Il y a 7 jours dans une semaine."
            },
            {
              "title": "Les mois de l'année",
              "content": "Janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre. Il y a 12 mois dans une année."
            }
          ],
          "examples": [
            "Aujourd'hui",
            "Hier",
            "Demain"
          ],
          "exercises": [
            "Quel jour vient après mardi ?",
            "Cite les mois d'été",
            "Combien de jours dans une semaine ?"
          ]
        }
      },
      {
        "id": "2",
        "title": "Les saisons",
        "description": "Reconnaître les 4 saisons et leurs caractéristiques",
        "duration": "20 min",
        "objectives": [
          "Nommer les 4 saisons",
          "Associer chaque saison à ses caractéristiques",
          "Comprendre le cycle des saisons"
        ],
        "content": {
          "introduction": "L'année est découpée en 4 saisons.",
          "sections": [
            {
              "title": "Les 4 saisons",
              "content": "Printemps : les fleurs poussent, il fait plus doux. Été : il fait chaud, c'est les grandes vacances. Automne : les feuilles tombent, il fait plus frais. Hiver : il fait froid, parfois il neige."
            }
          ],
          "examples": [
            "Printemps : mars, avril, mai",
            "Été : juin, juillet, août",
            "Automne : septembre, octobre, novembre",
            "Hiver : décembre, janvier, février"
          ],
          "exercises": [
            "Quelle saison vient après l'hiver ?",
            "Associe : neige - été, chaud - hiver",
            "Dessine un arbre en été et en hiver"
          ]
        }
      }
    ]
  },
  "ce2": {
    "francais": [
      {
        "id": "1",
        "title": "Les types de phrases",
        "description": "Différencier phrase déclarative, interrogative et impérative",
        "duration": "30 min",
        "objectives": [
          "Reconnaître une phrase déclarative",
          "Identifier une phrase interrogative",
          "Comprendre la phrase impérative"
        ],
        "content": {
          "introduction": "Il y a différentes façons de s'exprimer : on peut raconter, demander ou donner un ordre.",
          "sections": [
            {
              "title": "La phrase déclarative",
              "content": "Elle raconte, donne une information. Elle se termine par un point. Exemple : 'Le chat dort.'"
            },
            {
              "title": "La phrase interrogative",
              "content": "Elle pose une question. Elle se termine par un point d'interrogation. Exemple : 'Où vas-tu ?'"
            },
            {
              "title": "La phrase impérative",
              "content": "Elle donne un ordre ou un conseil. Exemple : 'Range ta chambre.'"
            }
          ],
          "examples": [
            "Il fait beau.",
            "Veux-tu jouer ?",
            "Ferme la porte."
          ],
          "exercises": [
            "Identifie le type de phrase : 'Quelle heure est-il ?'",
            "Ajoute la bonne ponctuation : 'Comment t'appelles-tu_'",
            "Transforme en phrase interrogative : 'Tu aimes le chocolat'"
          ]
        }
      },
      {
        "id": "2",
        "title": "Les accords dans le groupe nominal",
        "description": "Accorder le déterminant, le nom et l'adjectif",
        "duration": "30 min",
        "objectives": [
          "Comprendre la règle d'accord",
          "Accorder l'adjectif avec le nom",
          "Former le féminin et le pluriel"
        ],
        "content": {
          "introduction": "Dans un groupe nominal, tous les mots doivent s'accorder.",
          "sections": [
            {
              "title": "L'accord en genre",
              "content": "Masculin : un chat noir. Féminin : une chatte noire (on ajoute -e)."
            },
            {
              "title": "L'accord en nombre",
              "content": "Singulier : le chat noir. Pluriel : les chats noirs (on ajoute -s)."
            },
            {
              "title": "Les exceptions",
              "content": "nouveau → nouvelle, vieux → vieille, beau → belle"
            }
          ],
          "examples": [
            "un grand chien noir",
            "une grande chienne noire",
            "des grands chiens noirs"
          ],
          "exercises": [
            "Accorde l'adjectif : une (grand) ___ maison, des (petit) ___ chiens",
            "Mets au féminin : un chat noir → ___",
            "Mets au pluriel : la belle fleur → ___"
          ]
        }
      },
      {
        "id": "3",
        "title": "Le verbe et son sujet",
        "description": "Identifier le verbe et son sujet dans une phrase",
        "duration": "25 min",
        "objectives": [
          "Reconnaître le verbe dans une phrase",
          "Trouver le sujet du verbe",
          "Accorder le verbe avec son sujet"
        ],
        "content": {
          "introduction": "Le verbe est le mot qui indique l'action. Le sujet est celui qui fait l'action.",
          "sections": [
            {
              "title": "Comment trouver le verbe",
              "content": "Le verbe change si on change le temps. Exemple : 'Il mange' / 'Il mangeait'."
            },
            {
              "title": "Comment trouver le sujet",
              "content": "On pose la question 'Qui est-ce qui ?' avant le verbe. 'Les enfants jouent' → Qui jouent ? Les enfants."
            }
          ],
          "examples": [
            "Le chat dort.",
            "Les oiseaux chantent.",
            "Maman prépare le repas."
          ],
          "exercises": [
            "Souligne le verbe : Le chien aboie",
            "Entoure le sujet : Les enfants jouent dans la cour",
            "Accorde le verbe : Les oiseaux (chanter) ___"
          ]
        }
      },
      {
        "id": "4",
        "title": "Le futur proche",
        "description": "Exprimer une action qui va se passer bientôt",
        "duration": "20 min",
        "objectives": [
          "Comprendre l'utilisation du futur proche",
          "Conjuguer le verbe 'aller' au présent",
          "Former des phrases au futur proche"
        ],
        "content": {
          "introduction": "Le futur proche sert à parler de ce qui va se passer bientôt.",
          "sections": [
            {
              "title": "Formation du futur proche",
              "content": "On utilise le verbe 'aller' au présent + l'infinitif du verbe. Je vais + manger → Je vais manger."
            },
            {
              "title": "Le verbe aller au présent",
              "content": "Je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont."
            }
          ],
          "examples": [
            "Je vais jouer",
            "Tu vas manger",
            "Nous allons partir"
          ],
          "exercises": [
            "Conjugue au futur proche : Je (manger) ___",
            "Transforme : Je joue → Je ___ jouer",
            "Complète : Demain, nous ___ (aller) à l'école"
          ]
        }
      }
    ],
    "mathematiques": [
      {
        "id": "1",
        "title": "Les nombres de 0 à 1000",
        "description": "Lire, écrire et décomposer les nombres jusqu'à 1000",
        "duration": "35 min",
        "objectives": [
          "Compter jusqu'à 1000",
          "Comprendre la valeur des chiffres (centaines, dizaines, unités)",
          "Décomposer un nombre à 3 chiffres"
        ],
        "content": {
          "introduction": "Après 100, on continue avec les centaines.",
          "sections": [
            {
              "title": "Les centaines",
              "content": "100 = cent, 200 = deux cents, 300 = trois cents, 400 = quatre cents, 500 = cinq cents, 600 = six cents, 700 = sept cents, 800 = huit cents, 900 = neuf cents, 1000 = mille."
            },
            {
              "title": "Décomposer un nombre",
              "content": "536 = 5 centaines + 3 dizaines + 6 unités = 500 + 30 + 6."
            }
          ],
          "examples": [
            "127 = 100 + 20 + 7",
            "284 = 200 + 80 + 4",
            "305 = 300 + 5"
          ],
          "exercises": [
            "Écris en chiffres : trois cent vingt-cinq",
            "Décompose : 472 = ___ + ___ + ___",
            "Combien de centaines dans 384 ?"
          ]
        }
      },
      {
        "id": "2",
        "title": "La multiplication posée (à 1 chiffre)",
        "description": "Apprendre à poser et calculer des multiplications par un nombre à 1 chiffre",
        "duration": "30 min",
        "objectives": [
          "Poser correctement une multiplication",
          "Multiplier par un nombre à 1 chiffre avec retenue",
          "Vérifier son résultat"
        ],
        "content": {
          "introduction": "Quand on multiplie un grand nombre par un petit nombre, on peut poser l'opération en colonnes.",
          "sections": [
            {
              "title": "Comment poser une multiplication",
              "content": "On multiplie d'abord les unités, puis les dizaines, puis les centaines, en n'oubliant pas les retenues."
            }
          ],
          "examples": [
            "234 × 3 = 702",
            "156 × 4 = 624",
            "432 × 5 = 2160"
          ],
          "exercises": [
            "Pose et calcule : 123 × 4, 245 × 3, 362 × 5",
            "Problème : 24 bouteilles par caisse × 8 caisses"
          ]
        }
      },
      {
        "id": "3",
        "title": "La division (sens et partage)",
        "description": "Comprendre le sens de la division (partage)",
        "duration": "30 min",
        "objectives": [
          "Comprendre que diviser, c'est partager en parts égales",
          "Distinguer quotient et reste",
          "Résoudre des problèmes de partage"
        ],
        "content": {
          "introduction": "La division sert à partager une quantité en plusieurs parts égales.",
          "sections": [
            {
              "title": "Le partage équitable",
              "content": "15 bonbons pour 3 enfants → 15 ÷ 3 = 5 (chaque enfant reçoit 5 bonbons)."
            },
            {
              "title": "Avec ou sans reste",
              "content": "12 ÷ 3 = 4 reste 0. 14 ÷ 3 = 4 reste 2 (car 3×4=12, reste 2)."
            }
          ],
          "examples": [
            "20 ÷ 4 = 5",
            "17 ÷ 3 = 5 reste 2",
            "25 ÷ 5 = 5"
          ],
          "exercises": [
            "Partage 20 bonbons entre 4 enfants",
            "Partage 17 billes entre 3 amis",
            "Problème : 28 cahiers pour 25 élèves"
          ]
        }
      },
      {
        "id": "4",
        "title": "Les fractions simples",
        "description": "Découvrir les fractions 1/2, 1/3, 1/4",
        "duration": "25 min",
        "objectives": [
          "Comprendre le sens d'une fraction",
          "Lire et écrire une fraction simple",
          "Représenter une fraction"
        ],
        "content": {
          "introduction": "Une fraction permet de représenter une partie d'un tout.",
          "sections": [
            {
              "title": "Les fractions",
              "content": "1/2 (un demi) : un gâteau coupé en 2 parts égales, j'en prends 1. 1/4 (un quart) : un gâteau coupé en 4 parts, j'en prends 1. 3/4 (trois quarts) : 3 parts sur 4."
            }
          ],
          "examples": [
            "1/2 de la pizza",
            "1/4 du gâteau",
            "3/4 de la tablette"
          ],
          "exercises": [
            "Colorie 1/2 d'un rectangle",
            "Colorie 3/4 d'un rectangle",
            "Quelle fraction représente 2 parts sur 4 ?"
          ]
        }
      }
    ],
    "sciences": [
      {
        "id": "1",
        "title": "Le cycle de l'eau",
        "description": "Comprendre le cycle de l'eau dans la nature",
        "duration": "30 min",
        "objectives": [
          "Connaître les différents états de l'eau",
          "Comprendre le trajet de l'eau dans la nature",
          "Identifier l'évaporation, condensation, précipitations"
        ],
        "content": {
          "introduction": "L'eau voyage tout le temps dans la nature. C'est le cycle de l'eau.",
          "sections": [
            {
              "title": "Les 3 états de l'eau",
              "content": "Liquide (eau, pluie), solide (glace, neige), gaz (vapeur d'eau invisible)."
            },
            {
              "title": "Les étapes du cycle",
              "content": "1. Évaporation : le soleil chauffe l'eau. 2. Condensation : la vapeur forme les nuages. 3. Précipitations : l'eau tombe (pluie, neige). 4. Retour à la terre."
            }
          ],
          "examples": [
            "La pluie",
            "La neige",
            "La buée sur les vitres"
          ],
          "exercises": [
            "Replace les mots : évaporation, condensation, précipitations",
            "Vrai ou faux ? La vapeur d'eau est visible."
          ]
        }
      },
      {
        "id": "2",
        "title": "Les états de la matière",
        "description": "Distinguer solide, liquide et gaz",
        "duration": "25 min",
        "objectives": [
          "Identifier les 3 états de la matière",
          "Connaître les propriétés de chaque état",
          "Observer des changements d'état"
        ],
        "content": {
          "introduction": "Tout ce qui nous entoure peut se présenter sous 3 formes.",
          "sections": [
            {
              "title": "Les 3 états",
              "content": "Solide : forme propre, ne coule pas (pierre, bois). Liquide : prend la forme du récipient, coule (eau, lait). Gaz : invisible, se répand partout (air)."
            },
            {
              "title": "Les changements d'état",
              "content": "Fusion : solide → liquide (glace qui fond). Solidification : liquide → solide (eau qui gèle). Évaporation : liquide → gaz. Condensation : gaz → liquide."
            }
          ],
          "examples": [
            "Glace qui fond",
            "Eau qui bout",
            "Buée sur un miroir"
          ],
          "exercises": [
            "Classe ces objets : solide, liquide, gaz",
            "Comment s'appelle le passage de liquide à solide ?"
          ]
        }
      }
    ]
  },
  "cm1": {
    "francais": [
      {
        "id": "1",
        "title": "Les déterminants",
        "description": "Reconnaître et utiliser les différents déterminants",
        "duration": "30 min",
        "objectives": [
          "Identifier les déterminants dans une phrase",
          "Distinguer les différentes catégories (articles, possessifs, démonstratifs)",
          "Accorder le déterminant avec le nom"
        ],
        "content": {
          "introduction": "Le déterminant est un petit mot placé devant le nom.",
          "sections": [
            {
              "title": "Les articles définis",
              "content": "le, la, les, l' (on sait de quoi on parle précisément)."
            },
            {
              "title": "Les articles indéfinis",
              "content": "un, une, des (on ne sait pas précisément)."
            },
            {
              "title": "Les déterminants possessifs",
              "content": "mon, ton, son, ma, ta, sa, mes, tes, ses, notre, votre, leur."
            },
            {
              "title": "Les déterminants démonstratifs",
              "content": "ce, cet, cette, ces."
            }
          ],
          "examples": [
            "le chien",
            "une maison",
            "mon cahier",
            "cette fleur"
          ],
          "exercises": [
            "Souligne les déterminants : Le chat de ma voisine a attrapé une souris",
            "Complète avec le bon déterminant : ___ cahier est neuf",
            "Remplace par 'un' ou 'une' : les livres → ___ livre"
          ]
        }
      },
      {
        "id": "2",
        "title": "Le passé, présent, futur",
        "description": "Situer dans le temps et conjuguer",
        "duration": "25 min",
        "objectives": [
          "Distinguer passé, présent et futur",
          "Repérer les indicateurs de temps",
          "Comprendre que le verbe change selon le temps"
        ],
        "content": {
          "introduction": "Quand on parle, on peut parler du passé, du présent ou du futur.",
          "sections": [
            {
              "title": "Le passé",
              "content": "Ce qui est déjà fini. Indicateurs : hier, avant, autrefois. Exemple : 'Hier, j'ai joué.'"
            },
            {
              "title": "Le présent",
              "content": "Ce qui se passe maintenant. Indicateurs : maintenant, aujourd'hui. Exemple : 'Maintenant, je joue.'"
            },
            {
              "title": "Le futur",
              "content": "Ce qui va se passer. Indicateurs : demain, plus tard. Exemple : 'Demain, je jouerai.'"
            }
          ],
          "examples": [
            "Hier, nous avons visité le musée",
            "Bientôt, tu partiras",
            "En ce moment, je lis"
          ],
          "exercises": [
            "Indique le temps : 'Nous allons à la piscine demain'",
            "Souligne l'indicateur de temps : Hier, nous avons visité",
            "Réécris au passé : 'Je mange une pomme' (hier)"
          ]
        }
      },
      {
        "id": "3",
        "title": "L'adjectif qualificatif (approfondissement)",
        "description": "Reconnaître et utiliser l'adjectif pour décrire",
        "duration": "30 min",
        "objectives": [
          "Identifier un adjectif qualificatif",
          "Comprendre son rôle",
          "Accorder l'adjectif avec le nom"
        ],
        "content": {
          "introduction": "L'adjectif qualificatif donne des informations sur le nom.",
          "sections": [
            {
              "title": "Place de l'adjectif",
              "content": "Devant le nom : un petit chat, une jolie fleur. Derrière le nom : un chat noir, une fleur rouge."
            }
          ],
          "examples": [
            "un gros chien noir",
            "une petite souris grise",
            "des fleurs rouges et jaunes"
          ],
          "exercises": [
            "Souligne les adjectifs : Le gros chien noir dort dans sa petite niche",
            "Accorde l'adjectif : une (joli) ___ fleur, des (grand) ___ arbres",
            "Complète avec un adjectif : un ___ garçon"
          ]
        }
      },
      {
        "id": "4",
        "title": "Les synonymes et antonymes",
        "description": "Enrichir son vocabulaire",
        "duration": "20 min",
        "objectives": [
          "Trouver des mots de sens proche (synonymes)",
          "Trouver des mots de sens contraire (antonymes)",
          "Utiliser ces mots dans des phrases"
        ],
        "content": {
          "introduction": "Pour éviter les répétitions, on peut utiliser des synonymes.",
          "sections": [
            {
              "title": "Les synonymes",
              "content": "Mots qui veulent dire la même chose. Exemple : content = joyeux, heureux."
            },
            {
              "title": "Les antonymes",
              "content": "Mots qui veulent dire le contraire. Exemple : grand ≠ petit, chaud ≠ froid."
            }
          ],
          "examples": [
            "beau / joli",
            "rapide / vite",
            "jour / nuit",
            "heureux / triste"
          ],
          "exercises": [
            "Trouve un synonyme de : content, rapide, beau",
            "Trouve un antonyme de : grand, chaud, jour",
            "Remplace 'content' par un synonyme dans la phrase"
          ]
        }
      }
    ],
    "mathematiques": [
      {
        "id": "1",
        "title": "Les nombres jusqu'à 999 999",
        "description": "Lire, écrire et décomposer les nombres jusqu'à 6 chiffres",
        "duration": "35 min",
        "objectives": [
          "Lire et écrire les nombres jusqu'à 6 chiffres",
          "Comprendre la valeur des chiffres",
          "Décomposer un grand nombre"
        ],
        "content": {
          "introduction": "Quand on arrive à 1000, on entre dans la classe des mille.",
          "sections": [
            {
              "title": "La classe des mille",
              "content": "345 678 = 345 mille + 678. On lit : quatre cent quarante-cinq mille six cent soixante-dix-huit."
            },
            {
              "title": "Décomposition",
              "content": "345 678 = 300 000 + 40 000 + 5 000 + 600 + 70 + 8"
            }
          ],
          "examples": [
            "123 456 = 123 000 + 456",
            "804 201 = 804 000 + 201"
          ],
          "exercises": [
            "Écris en chiffres : trois cent vingt-cinq mille six cent quarante-deux",
            "Décompose : 123 456 = ___ + ___ + ___ + ___ + ___ + ___",
            "Place dans le tableau : 237 845"
          ]
        }
      }
    ]
  },
  "cm2": {
  "francais": [
    {
      "id": "1",
      "title": "Le passé composé",
      "description": "Apprendre à conjuguer au passé composé",
      "duration": "35 min",
      "objectives": [
        "Comprendre la formation du passé composé",
        "Connaître les auxiliaires être et avoir",
        "Accorder le participe passé avec être"
      ],
      "content": {
        "introduction": "Le passé composé est un temps du passé. Il est composé de deux mots.",
        "sections": [
          {
            "title": "Formation",
            "content": "auxiliaire (avoir ou être au présent) + participe passé du verbe."
          },
          {
            "title": "Les auxiliaires",
            "content": "Avoir : j'ai, tu as, il a, nous avons, vous avez, ils ont. Être : je suis, tu es, il est, nous sommes, vous êtes, ils sont."
          },
          {
            "title": "Le participe passé",
            "content": "Verbes en -er → -é (mangé). Verbes en -ir → -i (fini). Verbes en -re → -u (vendu)."
          },
          {
            "title": "L'accord avec être",
            "content": "Il est allé, elle est allée, ils sont allés, elles sont allées."
          }
        ],
        "examples": [
          "J'ai mangé",
          "Elle est partie",
          "Nous avons fini"
        ],
        "exercises": [
          "Conjugue : Je (manger) ___ une glace",
          "Accorde : Marie est (partir) ___",
          "Transforme : Je mange → ___"
        ]
      }
    },
    {
      "id": "2",
      "title": "Les propositions (indépendante, principale, subordonnée)",
      "description": "Identifier les différentes propositions",
      "duration": "35 min",
      "objectives": [
        "Distinguer phrase simple et phrase complexe",
        "Identifier une proposition indépendante",
        "Repérer la proposition principale et la subordonnée"
      ],
      "content": {
        "introduction": "Une proposition est un groupe de mots organisé autour d'un verbe.",
        "sections": [
          {
            "title": "La phrase simple",
            "content": "1 proposition, 1 verbe. Exemple : 'Le chat dort.'"
          },
          {
            "title": "La phrase complexe",
            "content": "Plusieurs propositions, plusieurs verbes. Exemple : 'Le chat dort et le chien joue.'"
          },
          {
            "title": "Proposition indépendante",
            "content": "Elle ne dépend de rien. Exemple : 'Il fait beau.'"
          },
          {
            "title": "Principale + subordonnée",
            "content": "La subordonnée dépend de la principale. Exemple : 'Je pense que tu as raison.'"
          }
        ],
        "examples": [
          "Il pleut donc je prends mon parapluie",
          "Quand tu arriveras, nous partirons"
        ],
        "exercises": [
          "Combien de propositions ? 'Le chien aboie et le chat miaule'",
          "Souligne la principale : 'Je crois que tu as raison'",
          "Relie avec le mot : 'Il pleut. Je prends mon parapluie' (donc)"
        ]
      }
    },
    {
      "id": "4",
      "title": "Les accords sujet-verbe",
      "description": "Accorder correctement le verbe avec son sujet",
      "duration": "30 min",
      "objectives": [
        "Identifier le sujet dans une phrase",
        "Accorder le verbe avec son sujet",
        "Repérer les sujets inversés ou éloignés"
      ],
      "content": {
        "introduction": "Le verbe s'accorde toujours avec son sujet.",
        "sections": [
          {
            "title": "La règle",
            "content": "Sujet singulier → verbe singulier. Sujet pluriel → verbe pluriel."
          },
          {
            "title": "Sujet éloigné",
            "content": "Les oiseaux, dans le jardin, chantent gaiement."
          },
          {
            "title": "Plusieurs sujets",
            "content": "Le chien et le chat dorment (2 sujets → pluriel)."
          },
          {
            "title": "Sujet inversé",
            "content": "Dans le jardin chantent les oiseaux."
          }
        ],
        "examples": [
          "Le chat dort / Les chats dorment"
        ],
        "exercises": [
          "Accorde : Les enfants (jouer) ___",
          "Réécris : Le chat dort → Les chats ___",
          "Accorde : Les oiseaux (chanter) ___"
        ]
      }
    }
  ],
  "mathematiques": [
    {
      "id": "1",
      "title": "Les nombres jusqu'au million",
      "description": "Lire, écrire et décomposer les nombres jusqu'à 999 999 999",
      "duration": "35 min",
      "objectives": [
        "Lire et écrire les nombres jusqu'à 9 chiffres",
        "Comprendre la classe des millions",
        "Décomposer un grand nombre"
      ],
      "content": {
        "introduction": "Après 999 999, on arrive au million.",
        "sections": [
          {
            "title": "La classe des millions",
            "content": "3 456 789 = 3 millions + 456 mille + 789. On lit : trois millions quatre cent cinquante-six mille sept cent quatre-vingt-neuf."
          },
          {
            "title": "Décomposition",
            "content": "3 456 789 = 3 000 000 + 400 000 + 50 000 + 6 000 + 700 + 80 + 9"
          }
        ],
        "examples": [
          "12 450 803 = 12 millions 450 mille 803"
        ],
        "exercises": [
          "Écris en chiffres : trois millions deux cent mille",
          "Décompose : 4 567 890",
          "Place dans le tableau : 8 234 567"
        ]
      }
    },
    {
      "id": "2",
      "title": "Les nombres décimaux",
      "description": "Comprendre et utiliser les nombres à virgule",
      "duration": "40 min",
      "objectives": [
        "Comprendre le lien entre fractions et nombres décimaux",
        "Lire et écrire un nombre décimal",
        "Placer un nombre décimal sur une droite graduée"
      ],
      "content": {
        "introduction": "Les nombres décimaux sont des nombres avec une virgule.",
        "sections": [
          {
            "title": "Lien avec les fractions",
            "content": "1/10 = 0,1 (un dixième), 3/10 = 0,3, 1/100 = 0,01 (un centième), 25/100 = 0,25."
          },
          {
            "title": "Partie entière et partie décimale",
            "content": "3,42 = 3 (partie entière) + 4/10 + 2/100 = 3 + 0,4 + 0,02"
          }
        ],
        "examples": [
          "3,42 = trois virgule quarante-deux",
          "15,08 = quinze virgule zéro huit"
        ],
        "exercises": [
          "Écris en décimal : 3/10, 25/100, 4 + 5/10 + 3/100",
          "Décompose : 5,67 = ___ + ___ + ___",
          "Place sur la droite : 0,3 - 0,7 - 0,25"
        ]
      }
    },
    {
      "id": "3",
      "title": "Les fractions (addition et comparaison)",
      "description": "Additionner et comparer des fractions",
      "duration": "35 min",
      "objectives": [
        "Comparer des fractions",
        "Additionner des fractions avec le même dénominateur",
        "Résoudre des problèmes avec des fractions"
      ],
      "content": {
        "introduction": "On peut additionner des fractions quand elles ont le même dénominateur.",
        "sections": [
          {
            "title": "Comparer des fractions",
            "content": "Plus le dénominateur est grand, plus les parts sont petites. 1/4 est plus petit que 1/2."
          },
          {
            "title": "Additionner des fractions",
            "content": "On additionne les numérateurs, on garde le même dénominateur. 2/5 + 1/5 = 3/5"
          }
        ],
        "examples": [
          "1/3 + 1/3 = 2/3",
          "3/8 + 2/8 = 5/8"
        ],
        "exercises": [
          "Compare : 1/4 et 1/2",
          "Calcule : 2/7 + 3/7 = ___",
          "Problème : 1/4 + 2/4 de pizza = ?"
        ]
      }
    },
    {
      "id": "4",
      "title": "La proportionnalité",
      "description": "Reconnaître et utiliser des situations de proportionnalité",
      "duration": "30 min",
      "objectives": [
        "Reconnaître une situation de proportionnalité",
        "Utiliser le tableau de proportionnalité",
        "Résoudre des problèmes de proportionnalité"
      ],
      "content": {
        "introduction": "Il y a proportionnalité quand deux quantités varient dans le même rapport.",
        "sections": [
          {
            "title": "Tableau de proportionnalité",
            "content": "Exemple : 3 baguettes coûtent 6€, 6 baguettes coûtent 12€ (coefficient ×2)."
          }
        ],
        "examples": [
          "2 kg de pommes = 4€, 4 kg = 8€"
        ],
        "exercises": [
          "Complète le tableau : 3 cahiers = 6€, 6 cahiers = ?, 9 cahiers = ?",
          "Problème : 5 bouteilles = 10€, combien pour 8 bouteilles ?"
        ]
      }
    }
  ],
  "sciences": [
    {
      "id": "1",
      "title": "Les chaînes alimentaires",
      "description": "Comprendre les relations alimentaires dans la nature",
      "duration": "30 min",
      "objectives": [
        "Comprendre le concept de chaîne alimentaire",
        "Identifier les différents maillons",
        "Distinguer producteurs et consommateurs"
      ],
      "content": {
        "introduction": "Dans la nature, les êtres vivants mangent d'autres êtres vivants pour survivre.",
        "sections": [
          {
            "title": "Les producteurs",
            "content": "Ce sont les végétaux. Ils fabriquent leur nourriture grâce au soleil."
          },
          {
            "title": "Les consommateurs",
            "content": "Primaires (herbivores), secondaires (carnivores), tertiaires (super-prédateurs)."
          },
          {
            "title": "Les décomposeurs",
            "content": "Ils transforment les déchets en terreau (champignons, vers de terre)."
          }
        ],
        "examples": [
          "Herbe → Sauterelle → Grenouille → Héron"
        ],
        "exercises": [
          "Complète la chaîne : ___ → Souris → ___",
          "Indique : producteur (P), consommateur (C), décomposeur (D)",
          "Vrai ou faux : Les végétaux sont des producteurs ?"
        ]
      }
    },
    {
      "id": "2",
      "title": "L'électricité (circuit simple)",
      "description": "Comprendre le fonctionnement d'un circuit électrique simple",
      "duration": "35 min",
      "objectives": [
        "Connaître les éléments d'un circuit simple",
        "Distinguer circuit ouvert et circuit fermé",
        "Comprendre le rôle de l'interrupteur"
      ],
      "content": {
        "introduction": "L'électricité permet de faire fonctionner beaucoup d'appareils.",
        "sections": [
          {
            "title": "Les éléments",
            "content": "Pile (générateur), fils (conducteurs), lampe (récepteur), interrupteur."
          },
          {
            "title": "Circuit fermé / ouvert",
            "content": "Fermé : le courant passe, la lampe brille. Ouvert : le courant ne passe pas, la lampe est éteinte."
          },
          {
            "title": "Conducteurs et isolants",
            "content": "Conducteurs : métaux, eau, corps humain. Isolants : plastique, bois sec, caoutchouc."
          }
        ],
        "examples": [
          "Métal = conducteur",
          "Plastique = isolant"
        ],
        "exercises": [
          "Complète : Pour qu'une lampe s'allume, le circuit doit être ___",
          "Entoure les conducteurs : fer, plastique, cuivre, bois",
          "Dessine un circuit avec interrupteur fermé"
        ]
      }
    },
    {
      "id": "3",
      "title": "Le corps humain (squelette et muscles)",
      "description": "Découvrir l'anatomie et le mouvement",
      "duration": "30 min",
      "objectives": [
        "Connaître les principaux os du corps",
        "Comprendre le rôle des muscles",
        "Expliquer comment se produisent les mouvements"
      ],
      "content": {
        "introduction": "Notre corps tient debout grâce au squelette. Les muscles permettent de bouger.",
        "sections": [
          {
            "title": "Le squelette",
            "content": "206 os : crâne (protège le cerveau), colonne vertébrale, côtes (protègent cœur/poumons), bassin, fémur, tibia, etc."
          },
          {
            "title": "Les muscles",
            "content": "600 muscles, attachés aux os par des tendons. Ils travaillent en paires (biceps/triceps)."
          },
          {
            "title": "Les articulations",
            "content": "Endroits où deux os se rencontrent : charnière (genou), rotule (épaule), pivot (cou)."
          }
        ],
        "examples": [
          "Pour plier le bras : biceps se contracte"
        ],
        "exercises": [
          "Nomme l'os qui protège le cerveau",
          "Complète : Pour plier le bras, le ___ se contracte",
          "Vrai ou faux : Le fémur est l'os de la cuisse ?"
        ]
      }
    }
  ],
  "histoire_geo": [
    {
      "id": "1",
      "title": "Les grandes périodes historiques",
      "description": "Découvrir les 5 grandes périodes de l'Histoire",
      "duration": "30 min",
      "objectives": [
        "Connaître les 5 grandes périodes historiques",
        "Situer quelques événements sur la frise",
        "Comprendre le découpage du temps"
      ],
      "content": {
        "introduction": "Pour mieux comprendre l'Histoire, les historiens ont découpé le passé en 5 grandes périodes.",
        "sections": [
          {
            "title": "Préhistoire",
            "content": "-3 millions à -3000 : apparition de l'homme, maîtrise du feu."
          },
          {
            "title": "Antiquité",
            "content": "-3000 à 476 : invention de l'écriture, Égyptiens, Grecs, Romains."
          },
          {
            "title": "Moyen Âge",
            "content": "476 à 1492 : châteaux forts, chevaliers, rois."
          },
          {
            "title": "Temps modernes",
            "content": "1492 à 1789 : Renaissance, grandes découvertes, Louis XIV."
          },
          {
            "title": "Époque contemporaine",
            "content": "1789 à aujourd'hui : Révolution française, guerres mondiales."
          }
        ],
        "examples": [
          "-3000 : écriture",
          "476 : chute de Rome",
          "1492 : découverte de l'Amérique"
        ],
        "exercises": [
          "Relie période et date",
          "Dans quelle période sont les châteaux forts ?",
          "Remets dans l'ordre : Révolution, Pyramides, Homme sur la Lune"
        ]
      }
    },
    {
      "id": "2",
      "title": "Les continents et océans",
      "description": "Connaître les continents et les océans",
      "duration": "30 min",
      "objectives": [
        "Nommer et situer les 5 océans",
        "Nommer et situer les 6 continents",
        "Comprendre la répartition terres/eaux"
      ],
      "content": {
        "introduction": "La Terre est recouverte à 71% d'eau. Les terres forment les continents.",
        "sections": [
          {
            "title": "Les 6 continents",
            "content": "Asie, Afrique, Amérique, Antarctique, Europe, Océanie."
          },
          {
            "title": "Les 5 océans",
            "content": "Pacifique, Atlantique, Indien, Austral, Arctique."
          },
          {
            "title": "Le Burkina Faso",
            "content": "Continent : Afrique, région : Afrique de l'Ouest."
          }
        ],
        "examples": [
          "Pacifique : le plus grand",
          "Asie : le plus grand continent"
        ],
        "exercises": [
          "Cite les 6 continents",
          "Cite les 5 océans",
          "Sur quel continent se trouve le Burkina ?"
        ]
      }
    }
  ]
},
  "6eme": {
    "mathematiques": [
      {
        "id": "1",
        "title": "Les nombres entiers et décimaux",
        "description": "Comparer, ranger et repérer les nombres entiers et décimaux sur une droite graduée",
        "duration": "45 min",
        "objectives": [
          "Lire et écrire les grands nombres entiers",
          "Comparer et ranger des nombres décimaux",
          "Placer un nombre décimal sur une droite graduée"
        ],
        "content": {
          "introduction": "Les nombres nous permettent de mesurer, comparer et ordonner le monde qui nous entoure.",
          "sections": [
            {
              "title": "Les nombres entiers",
              "content": "Un nombre entier est un nombre sans virgule. Pour les grands nombres, on regroupe par classes (unités, milliers, millions). Exemple : 3 456 789 se lit 'trois millions quatre cent cinquante-six mille sept cent quatre-vingt-neuf'."
            },
            {
              "title": "Les nombres décimaux",
              "content": "Un nombre décimal est composé d'une partie entière et d'une partie décimale séparées par une virgule. Exemple : 12,45 = 12 + 4/10 + 5/100."
            },
            {
              "title": "Comparaison de décimaux",
              "content": "Pour comparer deux décimaux, on compare d'abord la partie entière. Si elle est égale, on compare les dixièmes, puis les centièmes, etc. Exemple : 3,45 < 3,5 car 45 < 50."
            }
          ],
          "examples": [
            "12 < 15",
            "3,14 < 3,2",
            "5,05 > 5,005"
          ],
          "exercises": [
            "Compare : 4,56 et 4,6",
            "Range dans l'ordre croissant : 3,2 - 3,15 - 3,25 - 3,1",
            "Place 2,5 et 2,05 sur une droite graduée"
          ]
        }
      },
      {
        "id": "2",
        "title": "Les opérations fondamentales",
        "description": "Maîtriser l'addition, la soustraction et la multiplication des décimaux",
        "duration": "50 min",
        "objectives": [
          "Poser et effectuer des additions et soustractions de décimaux",
          "Maîtriser la multiplication de deux décimaux",
          "Résoudre des problèmes concrets"
        ],
        "content": {
          "introduction": "Les opérations sont les outils de base pour résoudre des problèmes de la vie quotidienne.",
          "sections": [
            {
              "title": "Addition et soustraction de décimaux",
              "content": "On aligne les virgules pour additionner ou soustraire des nombres décimaux. Exemple : 12,45 + 3,7 = 16,15."
            },
            {
              "title": "Multiplication de décimaux",
              "content": "On multiplie sans tenir compte des virgules, puis on place la virgule au résultat en comptant le nombre total de chiffres après la virgule dans les deux facteurs. Exemple : 3,2 × 1,5 = 4,80 (car 32×15=480, puis 2 chiffres après la virgule)."
            }
          ],
          "examples": [
            "15,20 + 3,45 = 18,65",
            "8,5 - 2,3 = 6,2",
            "2,5 × 3,2 = 8"
          ],
          "exercises": [
            "Calcule : 12,35 + 4,7",
            "Calcule : 8,4 - 3,65",
            "Calcule : 3,6 × 2,5",
            "Problème : Un cahier coûte 1,25€. Combien pour 8 cahiers ?"
          ]
        }
      },
      {
        "id": "3",
        "title": "La division euclidienne",
        "description": "Comprendre le sens de la division et maîtriser la division euclidienne",
        "duration": "40 min",
        "objectives": [
          "Différencier quotient et reste",
          "Effectuer une division euclidienne",
          "Résoudre des problèmes de partage"
        ],
        "content": {
          "introduction": "La division permet de partager une quantité en parts égales ou de trouver combien de fois un nombre est contenu dans un autre.",
          "sections": [
            {
              "title": "Vocabulaire",
              "content": "Dividende ÷ diviseur = quotient reste. Exemple : 27 ÷ 6 = 4 reste 3, car 6 × 4 = 24 et 27 - 24 = 3."
            },
            {
              "title": "Critères de divisibilité",
              "content": "Un nombre est divisible par 2 s'il se termine par 0,2,4,6,8. Par 3 si la somme de ses chiffres est divisible par 3. Par 5 s'il se termine par 0 ou 5."
            }
          ],
          "examples": [
            "15 ÷ 3 = 5 reste 0",
            "23 ÷ 4 = 5 reste 3",
            "48 ÷ 6 = 8 reste 0"
          ],
          "exercises": [
            "Effectue : 47 ÷ 5",
            "Effectue : 63 ÷ 7",
            "Problème : 85 bonbons pour 8 enfants. Combien chacun ? Reste-t-il des bonbons ?"
          ]
        }
      },
      {
        "id": "4",
        "title": "Les fractions",
        "description": "Utiliser et simplifier des fractions",
        "duration": "45 min",
        "objectives": [
          "Lire et écrire une fraction",
          "Simplifier une fraction",
          "Comparer des fractions"
        ],
        "content": {
          "introduction": "Une fraction représente une partie d'un tout ou un quotient.",
          "sections": [
            {
              "title": "Définition",
              "content": "Une fraction s'écrit a/b. a est le numérateur, b est le dénominateur (non nul). Exemple : 3/4 signifie 3 ÷ 4."
            },
            {
              "title": "Simplification",
              "content": "Pour simplifier une fraction, on divise numérateur et dénominateur par un même nombre. Exemple : 6/8 = 3/4 (division par 2)."
            },
            {
              "title": "Comparaison",
              "content": "Pour comparer des fractions, on peut les mettre au même dénominateur. Exemple : 2/3 et 3/4 → 8/12 et 9/12, donc 2/3 < 3/4."
            }
          ],
          "examples": [
            "1/2 = 0,5",
            "3/4 = 0,75",
            "2/5 = 0,4"
          ],
          "exercises": [
            "Simplifie : 8/12, 15/25, 18/24",
            "Compare : 3/5 et 2/3",
            "Calcule : 1/4 + 2/4"
          ]
        }
      }
    ],
    "francais": [
      {
        "id": "1",
        "title": "Les classes grammaticales",
        "description": "Identifier la nature des mots",
        "duration": "40 min",
        "objectives": [
          "Distinguer les différentes classes de mots",
          "Identifier la nature d'un mot dans une phrase",
          "Maîtriser le vocabulaire grammatical de base"
        ],
        "content": {
          "introduction": "Chaque mot appartient à une classe grammaticale (nature) qui détermine son comportement dans la phrase.",
          "sections": [
            {
              "title": "Les mots variables",
              "content": "Noms, déterminants, adjectifs qualificatifs, pronoms, verbes (ils changent de forme)."
            },
            {
              "title": "Les mots invariables",
              "content": "Adverbes, prépositions, conjonctions, interjections (ils ne changent jamais)."
            }
          ],
          "examples": [
            "Le (déterminant) chat (nom) noir (adjectif) dort (verbe) tranquillement (adverbe)."
          ],
          "exercises": [
            "Donne la nature des mots : 'La petite fille chante joliment'",
            "Trouve un adverbe dans cette phrase"
          ]
        }
      },
      {
        "id": "2",
        "title": "Le sujet et le prédicat",
        "description": "Analyser la structure de la phrase simple",
        "duration": "35 min",
        "objectives": [
          "Identifier le sujet de la phrase",
          "Reconnaître le prédicat (groupe verbal)",
          "Distinguer le complément de phrase"
        ],
        "content": {
          "introduction": "Une phrase simple est généralement composée d'un sujet, d'un prédicat et parfois d'un complément de phrase.",
          "sections": [
            {
              "title": "Le sujet",
              "content": "Il indique qui fait l'action. On peut le trouver en posant la question 'Qui est-ce qui ?' avant le verbe."
            },
            {
              "title": "Le prédicat",
              "content": "C'est le groupe verbal qui donne l'information principale sur le sujet."
            }
          ],
          "examples": [
            "Les enfants | jouent dans la cour | depuis ce matin. (sujet | prédicat | complément de phrase)"
          ],
          "exercises": [
            "Découpe la phrase : 'Le chien aboie bruyamment dans le jardin'",
            "Trouve le sujet : 'Dans la forêt vivent des animaux sauvages'"
          ]
        }
      },
      {
        "id": "3",
        "title": "Le présent de l'indicatif",
        "description": "Conjuguer correctement les verbes au présent",
        "duration": "40 min",
        "objectives": [
          "Maîtriser les terminaisons du présent",
          "Conjuguer les verbes des trois groupes",
          "Connaître les verbes irréguliers fréquents"
        ],
        "content": {
          "introduction": "Le présent exprime un fait qui se déroule au moment où on parle.",
          "sections": [
            {
              "title": "1er groupe (-er)",
              "content": "Terminaisons : -e, -es, -e, -ons, -ez, -ent. Exemple : chanter → je chante, nous chantons."
            },
            {
              "title": "2e groupe (-ir avec -issons)",
              "content": "Terminaisons : -is, -is, -it, -issons, -issez, -issent. Exemple : finir → je finis, nous finissons."
            },
            {
              "title": "3e groupe (verbes irréguliers)",
              "content": "Être : je suis, tu es, il est, nous sommes, vous êtes, ils sont. Avoir : j'ai, tu as, il a, nous avons, vous avez, ils ont. Aller : je vais, tu vas, il va, nous allons, vous allez, ils vont."
            }
          ],
          "examples": [
            "Je mange",
            "Tu finis",
            "Il va",
            "Nous avons"
          ],
          "exercises": [
            "Conjugue au présent : parler (je), grandir (nous), prendre (ils)",
            "Complète : Ils (aller) ___ à l'école"
          ]
        }
      },
      {
        "id": "4",
        "title": "Le récit",
        "description": "Comprendre la structure d'un récit",
        "duration": "35 min",
        "objectives": [
          "Identifier les éléments du schéma narratif",
          "Reconnaître les temps du récit",
          "Repérer les personnages et leurs actions"
        ],
        "content": {
          "introduction": "Un récit raconte une histoire en suivant généralement une structure précise.",
          "sections": [
            {
              "title": "Le schéma narratif",
              "content": "Situation initiale → élément perturbateur → péripéties → résolution → situation finale."
            },
            {
              "title": "Les temps du récit",
              "content": "Le passé simple pour les actions de premier plan, l'imparfait pour les descriptions et actions de second plan."
            }
          ],
          "examples": [
            "Il était une fois... (situation initiale) - Soudain... (perturbateur)"
          ],
          "exercises": [
            "Lis un court récit et identifie les 5 étapes",
            "Réécris un texte en remplaçant le passé simple par l'imparfait"
          ]
        }
      }
    ],
    "physique_chimie": [
      {
        "id": "1",
        "title": "Les états de la matière",
        "description": "Distinguer les trois états physiques et leurs propriétés",
        "duration": "40 min",
        "objectives": [
          "Identifier les trois états de la matière",
          "Connaître les propriétés de chaque état",
          "Décrire les changements d'état"
        ],
        "content": {
          "introduction": "Toute matière peut se présenter sous trois formes : solide, liquide ou gazeuse.",
          "sections": [
            {
              "title": "Propriétés des états",
              "content": "Solide : forme propre et volume propre. Liquide : prend la forme du récipient, surface libre horizontale. Gaz : n'a ni forme ni volume propre, occupe tout l'espace disponible."
            },
            {
              "title": "Changements d'état",
              "content": "Fusion (solide→liquide), solidification (liquide→solide), vaporisation (liquide→gaz), liquéfaction (gaz→liquide)."
            }
          ],
          "examples": [
            "Glace → eau (fusion)",
            "Eau → vapeur (vaporisation)"
          ],
          "exercises": [
            "Quel est le changement d'état quand la glace fond ?",
            "Cite trois propriétés d'un liquide",
            "Dessine les molécules dans les trois états"
          ]
        }
      },
      {
        "id": "2",
        "title": "L'eau dans tous ses états",
        "description": "Étudier le cycle de l'eau et ses propriétés",
        "duration": "35 min",
        "objectives": [
          "Connaître les propriétés de l'eau",
          "Décrire le cycle de l'eau dans la nature",
          "Comprendre l'importance de l'eau pour la vie"
        ],
        "content": {
          "introduction": "L'eau est une substance essentielle à la vie, présente partout sur Terre.",
          "sections": [
            {
              "title": "Propriétés de l'eau",
              "content": "L'eau pure gèle à 0°C et bout à 100°C (à pression normale). Elle est inodore, incolore et sans saveur."
            },
            {
              "title": "Le cycle de l'eau",
              "content": "Évaporation (océans, lacs) → condensation (formation des nuages) → précipitations (pluie, neige) → ruissellement et infiltration → retour aux océans."
            }
          ],
          "examples": [
            "Rosée du matin = condensation",
            "Pluie = précipitation"
          ],
          "exercises": [
            "À quelle température l'eau bout-elle ?",
            "Décris le cycle de l'eau en 4 étapes",
            "Pourquoi y a-t-il de la buée sur les vitres froides ?"
          ]
        }
      }
    ],
    "svt": [
      {
        "id": "1",
        "title": "La cellule, unité du vivant",
        "description": "Découvrir la structure de base des êtres vivants",
        "duration": "40 min",
        "objectives": [
          "Comprendre que tout être vivant est constitué de cellules",
          "Identifier les parties d'une cellule",
          "Distinguer cellule animale et végétale"
        ],
        "content": {
          "introduction": "La cellule est l'unité de base de tout être vivant. Certains organismes sont unicellulaires, d'autres pluricellulaires.",
          "sections": [
            {
              "title": "Structure commune",
              "content": "Toute cellule possède : une membrane (enveloppe), un cytoplasme (liquide intérieur), un noyau (centre de contrôle)."
            },
            {
              "title": "Spécificités",
              "content": "La cellule végétale a en plus : une paroi (rigide) et des chloroplastes (pour la photosynthèse)."
            }
          ],
          "examples": [
            "Globule rouge (cellule animale)",
            "Cellule de feuille (cellule végétale)"
          ],
          "exercises": [
            "Dessine et légende une cellule animale",
            "Cite deux différences entre cellule animale et végétale",
            "Quel organite permet la photosynthèse ?"
          ]
        }
      },
      {
        "id": "2",
        "title": "La classification du vivant",
        "description": "Comprendre comment on classe les êtres vivants",
        "duration": "35 min",
        "objectives": [
          "Distinguer les grands groupes du vivant",
          "Utiliser des critères de classification",
          "Construire une classification simple"
        ],
        "content": {
          "introduction": "Pour s'y retrouver dans la diversité des êtres vivants, les scientifiques les classent selon des critères précis.",
          "sections": [
            {
              "title": "Les grands groupes",
              "content": "Vertébrés (mammifères, oiseaux, reptiles, amphibiens, poissons) et invertébrés (insectes, mollusques, etc.)."
            },
            {
              "title": "Critères de classification",
              "content": "On classe selon des attributs : présence de poils, plumes, écailles, nombre de membres, mode de reproduction, etc."
            }
          ],
          "examples": [
            "L'homme : mammifère (poils, allaitement)",
            "Le crocodile : reptile (écailles)"
          ],
          "exercises": [
            "Classe ces animaux : chien, serpent, aigle, grenouille",
            "Quels sont les caractères communs à tous les mammifères ?"
          ]
        }
      }
    ]
  },
"5eme": {
  "mathematiques": [
    {
      "id": "1",
      "title": "Les nombres relatifs",
      "description": "Découvrir et manipuler les nombres positifs et négatifs",
      "duration": "45 min",
      "objectives": [
        "Comprendre la notion de nombre relatif",
        "Repérer un nombre relatif sur une droite graduée",
        "Comparer des nombres relatifs"
      ],
      "content": {
        "introduction": "Les nombres relatifs permettent de mesurer des températures, des altitudes ou des dettes.",
        "sections": [
          {
            "title": "Définition",
            "content": "Un nombre relatif est composé d'un signe (+ ou -) et d'une distance à zéro. Exemples : +5 (positif), -3 (négatif)."
          },
          {
            "title": "Comparaison",
            "content": "Un nombre négatif est toujours inférieur à un nombre positif. Entre deux négatifs, le plus grand est celui qui a la plus petite distance à zéro. Exemple : -3 > -5."
          }
        ],
        "examples": [
          "+25°C",
          "-5°C",
          "-150m (sous le niveau de la mer)"
        ],
        "exercises": [
          "Compare : -7 et -4, +3 et -2, -1 et 0",
          "Range dans l'ordre croissant : -5, +3, -2, 0, +1"
        ]
      }
    },
    {
      "id": "2",
      "title": "Les opérations sur les relatifs",
      "description": "Additionner et soustraire des nombres relatifs",
      "duration": "50 min",
      "objectives": [
        "Maîtriser l'addition de deux relatifs",
        "Maîtriser la soustraction de deux relatifs",
        "Résoudre des problèmes avec des relatifs"
      ],
      "content": {
        "introduction": "Les règles d'addition et soustraction des relatifs sont essentielles pour la suite du programme.",
        "sections": [
          {
            "title": "Addition",
            "content": "Si les deux nombres ont le même signe, on additionne leurs distances et on garde le signe. Si les signes sont différents, on soustrait et on prend le signe du plus grand. Exemple : (+5)+(+3)=+8, (+5)+(-3)=+2."
          },
          {
            "title": "Soustraction",
            "content": "Soustraire un nombre revient à additionner son opposé. Exemple : (+5)-(-3) = (+5)+(+3)=+8."
          }
        ],
        "examples": [
          "(+4)+(+6)=+10",
          "(-4)+(-3)=-7",
          "(+7)+(-5)=+2"
        ],
        "exercises": [
          "Calcule : (+8)+(-3), (-5)+(-2), (+4)+(-7)",
          "Calcule : (+6)-(-2), (-5)-(+3), (-4)-(-1)"
        ]
      }
    },
    {
      "id": "3",
      "title": "La symétrie centrale",
      "description": "Construire l'image d'une figure par symétrie centrale",
      "duration": "40 min",
      "objectives": [
        "Comprendre la notion de symétrie centrale",
        "Construire le symétrique d'un point",
        "Construire le symétrique d'une figure"
      ],
      "content": {
        "introduction": "La symétrie centrale est une transformation qui fait tourner une figure d'un demi-tour autour d'un point.",
        "sections": [
          {
            "title": "Définition",
            "content": "Deux points M et M' sont symétriques par rapport à un point O si O est le milieu du segment [MM']."
          },
          {
            "title": "Propriétés",
            "content": "La symétrie centrale conserve les longueurs, les angles et le parallélisme. L'image d'une droite est une droite parallèle."
          }
        ],
        "examples": [
          "Symétrique d'un triangle → triangle identique mais retourné"
        ],
        "exercises": [
          "Construis le symétrique du point A par rapport à O",
          "Construis le symétrique du triangle ABC par rapport au point O"
        ]
      }
    },
    {
      "id": "4",
      "title": "Les angles",
      "description": "Mesurer et construire des angles",
      "duration": "35 min",
      "objectives": [
        "Utiliser le rapporteur pour mesurer un angle",
        "Construire un angle de mesure donnée",
        "Reconnaître les angles particuliers"
      ],
      "content": {
        "introduction": "Un angle est formé par deux demi-droites de même origine.",
        "sections": [
          {
            "title": "Types d'angles",
            "content": "Angle aigu (<90°), angle droit (90°), angle obtus (>90° et <180°), angle plat (180°)."
          },
          {
            "title": "Mesure",
            "content": "On mesure un angle avec un rapporteur, en degrés (°)."
          }
        ],
        "examples": [
          "Angle droit = 90°",
          "Angle plat = 180°"
        ],
        "exercises": [
          "Mesure les angles de cette figure",
          "Construis un angle de 75°",
          "Nomme chaque type d'angle : 45°, 120°, 90°, 180°"
        ]
      }
    }
  ],
  "francais": [
    {
      "id": "1",
      "title": "Les fonctions grammaticales",
      "description": "Identifier les fonctions dans la phrase",
      "duration": "45 min",
      "objectives": [
        "Distinguer sujet, verbe, compléments",
        "Identifier les compléments d'objet",
        "Reconnaître les compléments circonstanciels"
      ],
      "content": {
        "introduction": "Chaque mot ou groupe de mots a une fonction dans la phrase.",
        "sections": [
          {
            "title": "Compléments d'objet",
            "content": "COD (sans préposition, répond à 'quoi ?'), COI (avec préposition, répond à 'à qui ?')."
          },
          {
            "title": "Compléments circonstanciels",
            "content": "Ils indiquent les circonstances de l'action : lieu, temps, manière, cause, but. Ils sont supprimables et déplaçables."
          }
        ],
        "examples": [
          "Il mange une pomme (COD)",
          "Il parle à son ami (COI)",
          "Le matin, je me lève tôt (CC de temps)"
        ],
        "exercises": [
          "Identifie les compléments : 'Hier, j'ai rencontré mon frère dans la rue'",
          "Supprime les compléments circonstanciels et observe"
        ]
      }
    },
    {
      "id": "2",
      "title": "L'imparfait et le passé simple",
      "description": "Maîtriser les temps du récit",
      "duration": "40 min",
      "objectives": [
        "Conjuguer les verbes à l'imparfait",
        "Conjuguer les verbes au passé simple",
        "Utiliser correctement ces deux temps dans un récit"
      ],
      "content": {
        "introduction": "L'imparfait et le passé simple sont les deux temps principaux du récit au passé.",
        "sections": [
          {
            "title": "L'imparfait",
            "content": "Description, actions qui durent, habitudes. Terminaisons : -ais, -ais, -ait, -ions, -iez, -aient. Exemple : je chantais, nous finissions."
          },
          {
            "title": "Le passé simple",
            "content": "Actions de premier plan, soudaines, ponctuelles. Terminaisons variables selon les groupes. Exemple : il chanta, il finit, il prit."
          }
        ],
        "examples": [
          "Il faisait beau (imparfait) quand soudain l'orage éclata (passé simple)"
        ],
        "exercises": [
          "Conjugue à l'imparfait : chanter (je), finir (nous), prendre (ils)",
          "Conjugue au passé simple : arriver (il), partir (elle), faire (ils)"
        ]
      }
    },
    {
      "id": "3",
      "title": "Le récit d'aventures",
      "description": "Analyser un récit d'aventures",
      "duration": "35 min",
      "objectives": [
        "Identifier les caractéristiques du récit d'aventures",
        "Repérer le héros et ses opposants",
        "Analyser les péripéties"
      ],
      "content": {
        "introduction": "Le récit d'aventures met en scène un héros confronté à des épreuves dans un cadre souvent exotique.",
        "sections": [
          {
            "title": "Caractéristiques",
            "content": "Actions, rebondissements, dangers, quête, dépaysement. Le héros doit faire preuve de courage et de ruse."
          }
        ],
        "examples": [
          "Robinson Crusoé",
          "L'Île au trésor",
          "Le Tour du monde en 80 jours"
        ],
        "exercises": [
          "Lis un extrait et relève les éléments d'aventure",
          "Décris le héros et ses qualités"
        ]
      }
    },
    {
      "id": "4",
      "title": "La poésie",
      "description": "Découvrir les caractéristiques du texte poétique",
      "duration": "35 min",
      "objectives": [
        "Reconnaître un poème",
        "Identifier les vers, les strophes, les rimes",
        "Comprendre l'usage des images et des sonorités"
      ],
      "content": {
        "introduction": "La poésie joue avec les sons, les rythmes et les images pour exprimer des émotions.",
        "sections": [
          {
            "title": "Formes poétiques",
            "content": "Vers (ligne), strophe (groupe de vers), rimes (retour des mêmes sons). Types de rimes : plates (AABB), croisées (ABAB), embrassées (ABBA)."
          }
        ],
        "examples": [
          "'Demain, dès l'aube...' (Victor Hugo)",
          "'Heureux qui comme Ulysse...' (Du Bellay)"
        ],
        "exercises": [
          "Compte les syllabes dans un vers",
          "Identifie le type de rimes dans un poème"
        ]
      }
    }
  ]
},
"4eme": {
  "mathematiques": [
    {
      "id": "1",
      "title": "Le théorème de Pythagore",
      "description": "Appliquer le théorème de Pythagore dans un triangle rectangle",
      "duration": "50 min",
      "objectives": [
        "Identifier l'hypoténuse dans un triangle rectangle",
        "Énoncer et appliquer le théorème de Pythagore",
        "Calculer une longueur manquante"
      ],
      "content": {
        "introduction": "Le théorème de Pythagore établit une relation fondamentale entre les côtés d'un triangle rectangle.",
        "sections": [
          {
            "title": "Énoncé du théorème",
            "content": "Dans un triangle rectangle, le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés. Soit : BC² = AB² + AC²."
          },
          {
            "title": "Applications",
            "content": "Pour calculer l'hypoténuse : BC = √(AB² + AC²). Pour calculer un côté : AB = √(BC² - AC²)."
          }
        ],
        "examples": [
          "Si AB = 3 cm, AC = 4 cm, alors BC² = 9 + 16 = 25, donc BC = 5 cm."
        ],
        "exercises": [
          "Calcule l'hypoténuse d'un triangle rectangle de côtés 6 et 8",
          "Calcule le côté manquant si l'hypoténuse = 13 et un côté = 5",
          "Un triangle a des côtés 5, 12, 13. Est-il rectangle ?"
        ]
      }
    },
    {
      "id": "2",
      "title": "Les puissances",
      "description": "Maîtriser le calcul avec les puissances",
      "duration": "45 min",
      "objectives": [
        "Comprendre la notation puissance",
        "Appliquer les règles de calcul sur les puissances",
        "Utiliser les puissances de 10"
      ],
      "content": {
        "introduction": "La puissance est une écriture simplifiée pour les multiplications répétées.",
        "sections": [
          {
            "title": "Définition",
            "content": "aⁿ = a × a × ... × a (n facteurs). Exemple : 2⁵ = 2 × 2 × 2 × 2 × 2 = 32."
          },
          {
            "title": "Règles de calcul",
            "content": "aᵐ × aⁿ = aᵐ⁺ⁿ. aᵐ ÷ aⁿ = aᵐ⁻ⁿ. (aᵐ)ⁿ = aᵐˣⁿ. (a × b)ⁿ = aⁿ × bⁿ."
          },
          {
            "title": "Puissances de 10",
            "content": "10ⁿ = 1 suivi de n zéros. 10⁻ⁿ = 1/10ⁿ = 0,00...01 (n chiffres après la virgule)."
          }
        ],
        "examples": [
          "10³ = 1000",
          "10⁻³ = 0,001",
          "2³ × 2⁴ = 2⁷ = 128"
        ],
        "exercises": [
          "Calcule : 3⁴, 5³, 10⁶",
          "Simplifie : 2⁵ × 2³, (3²)⁴, 10⁸ ÷ 10³",
          "Écris en notation scientifique : 4500, 0,00032"
        ]
      }
    },
    {
      "id": "3",
      "title": "La proportionnalité et les pourcentages",
      "description": "Résoudre des problèmes de proportionnalité et de pourcentages",
      "duration": "40 min",
      "objectives": [
        "Reconnaître une situation de proportionnalité",
        "Appliquer un pourcentage",
        "Calculer un pourcentage d'évolution"
      ],
      "content": {
        "introduction": "Les pourcentages sont des cas particuliers de proportionnalité.",
        "sections": [
          {
            "title": "Pourcentage d'une quantité",
            "content": "x% d'une quantité = (x/100) × quantité. Exemple : 20% de 50€ = (20/100) × 50 = 10€."
          },
          {
            "title": "Augmentation et réduction",
            "content": "Augmenter de t% revient à multiplier par (1 + t/100). Réduire de t% revient à multiplier par (1 - t/100)."
          }
        ],
        "examples": [
          "Prix initial 80€, augmentation de 15% → 80 × 1,15 = 92€"
        ],
        "exercises": [
          "Calcule 30% de 120€",
          "Un article passe de 50€ à 65€. Quel est le pourcentage d'augmentation ?",
          "Après une réduction de 20%, un article coûte 64€. Quel était son prix initial ?"
        ]
      }
    },
    {
      "id": "4",
      "title": "Les équations du premier degré",
      "description": "Résoudre une équation du premier degré à une inconnue",
      "duration": "45 min",
      "objectives": [
        "Comprendre ce qu'est une équation",
        "Résoudre une équation simple",
        "Mettre un problème en équation"
      ],
      "content": {
        "introduction": "Une équation est une égalité qui contient une ou plusieurs inconnues.",
        "sections": [
          {
            "title": "Règles de résolution",
            "content": "On peut ajouter ou soustraire un même nombre aux deux membres. On peut multiplier ou diviser par un même nombre non nul les deux membres."
          },
          {
            "title": "Méthode",
            "content": "On isole l'inconnue en appliquant les règles. Exemple : 3x + 5 = 14 → 3x = 9 → x = 3."
          }
        ],
        "examples": [
          "2x - 3 = 7 → 2x = 10 → x = 5",
          "4x + 2 = 3x + 8 → 4x - 3x = 8 - 2 → x = 6"
        ],
        "exercises": [
          "Résous : 5x + 2 = 17, 3x - 4 = 2x + 6",
          "Mets en équation : 'Je pense à un nombre, je le multiplie par 3, j'ajoute 5, j'obtiens 20'"
        ]
      }
    }
  ],
  "francais": [
    {
      "id": "1",
      "title": "La phrase complexe",
      "description": "Distinguer coordination, juxtaposition et subordination",
      "duration": "40 min",
      "objectives": [
        "Reconnaître une phrase complexe",
        "Distinguer les différents types de relations entre propositions",
        "Utiliser correctement les connecteurs"
      ],
      "content": {
        "introduction": "Une phrase complexe contient plusieurs propositions reliées entre elles.",
        "sections": [
          {
            "title": "La juxtaposition",
            "content": "Les propositions sont séparées par une virgule, un point-virgule ou deux-points. Exemple : 'Il pleut, je reste chez moi.'"
          },
          {
            "title": "La coordination",
            "content": "Les propositions sont reliées par une conjonction de coordination (mais, ou, et, donc, or, ni, car). Exemple : 'Il pleut donc je reste chez moi.'"
          },
          {
            "title": "La subordination",
            "content": "Les propositions sont reliées par une conjonction de subordination (que, quand, parce que, si...). Exemple : 'Je reste chez moi parce qu'il pleut.'"
          }
        ],
        "examples": [
          "Il fait beau, je sors. (juxtaposition)",
          "Il fait beau donc je sors. (coordination)",
          "Je sors parce qu'il fait beau. (subordination)"
        ],
        "exercises": [
          "Identifie le type de relation : 'Je mange quand j'ai faim'",
          "Transforme par coordination : 'Il pleut, je prends mon parapluie'"
        ]
      }
    },
    {
      "id": "2",
      "title": "Le conditionnel présent",
      "description": "Conjuguer et utiliser le conditionnel présent",
      "duration": "35 min",
      "objectives": [
        "Former le conditionnel présent",
        "Utiliser le conditionnel pour exprimer un souhait, une hypothèse, un conseil",
        "Distinguer futur et conditionnel"
      ],
      "content": {
        "introduction": "Le conditionnel présent exprime un fait soumis à une condition, un souhait ou un conseil.",
        "sections": [
          {
            "title": "Formation",
            "content": "Radical du futur + terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient). Exemple : chanter → je chanterais, finir → je finirais, prendre → je prendrais."
          },
          {
            "title": "Emplois",
            "content": "Souhait : 'J'aimerais partir'. Hypothèse : 'Si j'avais le temps, je viendrais'. Conseil : 'Tu devrais te reposer'. Information incertaine : 'Le président serait malade'."
          }
        ],
        "examples": [
          "Je voudrais un café",
          "Si je pouvais, je t'aiderais",
          "Il faudrait partir tôt"
        ],
        "exercises": [
          "Conjugue au conditionnel : parler (je), finir (tu), prendre (nous)",
          "Exprime un souhait avec 'aimerais'",
          "Transforme : 'Si j'étais riche, je (acheter) une voiture'"
        ]
      }
    },
    {
      "id": "3",
      "title": "Le récit fantastique",
      "description": "Analyser un récit fantastique",
      "duration": "40 min",
      "objectives": [
        "Identifier les caractéristiques du fantastique",
        "Reconnaître l'hésitation entre réel et surnaturel",
        "Analyser l'atmosphère et le suspense"
      ],
      "content": {
        "introduction": "Le fantastique met en scène l'irruption du surnaturel dans le quotidien, créant le doute chez le lecteur.",
        "sections": [
          {
            "title": "Caractéristiques",
            "content": "Cadre réaliste, événement étrange, hésitation (est-ce réel ou imaginaire ?), peur, atmosphère angoissante."
          },
          {
            "title": "Explication finale",
            "content": "Soit une explication rationnelle est donnée (le personnage a rêvé), soit le surnaturel s'impose, soit le doute persiste."
          }
        ],
        "examples": [
          "Le Horla (Maupassant)",
          "La Vénus d'Ille (Mérimée)"
        ],
        "exercises": [
          "Lis un extrait et relève les éléments fantastiques",
          "Explique pourquoi le lecteur hésite entre réel et surnaturel"
        ]
      }
    },
    {
      "id": "4",
      "title": "L'argumentation",
      "description": "Construire une argumentation simple",
      "duration": "35 min",
      "objectives": [
        "Distinguer thèse, argument et exemple",
        "Organiser un paragraphe argumentatif",
        "Utiliser des connecteurs logiques"
      ],
      "content": {
        "introduction": "Argumenter, c'est défendre une opinion en apportant des preuves.",
        "sections": [
          {
            "title": "Structure",
            "content": "Thèse (idée défendue) → Arguments (raisons) → Exemples (illustrations). On utilise des connecteurs : d'abord, ensuite, enfin, mais, cependant, donc..."
          }
        ],
        "examples": [
          "Thèse : 'Les écrans sont dangereux pour les enfants'. Arguments : 'Ils nuisent au sommeil, réduisent l'activité physique, isolent socialement'."
        ],
        "exercises": [
          "Trouve trois arguments pour défendre : 'Il faut faire du sport'",
          "Rédige un paragraphe argumenté avec introduction, arguments et conclusion"
        ]
      }
    }
  ],
  "physique_chimie": [
    {
      "id": "1",
      "title": "Les atomes et molécules",
      "description": "Découvrir la structure de la matière",
      "duration": "45 min",
      "objectives": [
        "Connaître la structure de l'atome",
        "Distinguer atome et molécule",
        "Lire et écrire des formules chimiques"
      ],
      "content": {
        "introduction": "Toute matière est constituée d'atomes, assemblés en molécules.",
        "sections": [
          {
            "title": "L'atome",
            "content": "Noyau (protons + neutrons) + électrons qui tournent autour. Atomes les plus courants : H (hydrogène), C (carbone), O (oxygène), N (azote)."
          },
          {
            "title": "La molécule",
            "content": "Assemblage d'atomes liés entre eux. Formule chimique : H₂O (eau) = 2H + O, CO₂ (dioxyde de carbone) = C + 2O."
          }
        ],
        "examples": [
          "O₂ : dioxygène",
          "CH₄ : méthane",
          "C₆H₁₂O₆ : glucose"
        ],
        "exercises": [
          "Combien d'atomes dans H₂O ? CO₂ ? CH₄ ?",
          "Dessine une molécule d'eau",
          "Quels atomes composent le glucose (C₆H₁₂O₆) ?"
        ]
      }
    },
    {
      "id": "2",
      "title": "Les réactions chimiques",
      "description": "Écrire et équilibrer une équation de réaction",
      "duration": "50 min",
      "objectives": [
        "Identifier les réactifs et produits",
        "Écrire une équation de réaction",
        "Équilibrer une équation simple"
      ],
      "content": {
        "introduction": "Une réaction chimique transforme des réactifs en produits.",
        "sections": [
          {
            "title": "Écriture",
            "content": "Réactifs → Produits. Exemple : combustion du méthane : CH₄ + 2O₂ → CO₂ + 2H₂O."
          },
          {
            "title": "Équilibrage",
            "content": "Le nombre d'atomes de chaque élément doit être le même avant et après. On ajuste avec des coefficients."
          }
        ],
        "examples": [
          "H₂ + Cl₂ → 2HCl",
          "2H₂ + O₂ → 2H₂O"
        ],
        "exercises": [
          "Équilibre : H₂ + O₂ → H₂O",
          "Équilibre : CH₄ + O₂ → CO₂ + H₂O",
          "Quels sont les réactifs et produits dans la combustion du méthane ?"
        ]
      }
    }
  ],
  "svt": [
    {
      "id": "1",
      "title": "La reproduction humaine",
      "description": "Comprendre le fonctionnement de l'appareil reproducteur",
      "duration": "45 min",
      "objectives": [
        "Connaître les organes reproducteurs",
        "Comprendre le cycle menstruel",
        "Expliquer la fécondation"
      ],
      "content": {
        "introduction": "La reproduction permet à l'espèce humaine de se perpétuer.",
        "sections": [
          {
            "title": "Appareil reproducteur masculin",
            "content": "Testicules (production de spermatozoïdes), prostate, canal déférent, urètre, pénis."
          },
          {
            "title": "Appareil reproducteur féminin",
            "content": "Ovaire (production d'ovules), trompes, utérus, vagin."
          },
          {
            "title": "Cycle menstruel",
            "content": "Environ 28 jours : règles, phase folliculaire, ovulation, phase lutéale. Si pas de fécondation, nouveaux règles."
          },
          {
            "title": "Fécondation",
            "content": "Rencontre d'un spermatozoïde et d'un ovule dans la trompe. Formation d'une cellule-œuf qui s'implante dans l'utérus."
          }
        ],
        "examples": [
          "Ovulation vers le 14e jour"
        ],
        "exercises": [
          "Légende un schéma des appareils reproducteurs",
          "Décris le trajet des spermatozoïdes",
          "Quand a lieu l'ovulation dans un cycle de 28 jours ?"
        ]
      }
    },
    {
      "id": "2",
      "title": "La transmission de la vie",
      "description": "Comprendre les mécanismes de la reproduction",
      "duration": "40 min",
      "objectives": [
        "Expliquer le rôle des gamètes",
        "Comprendre la transmission des caractères héréditaires",
        "Distinguer gène et chromosome"
      ],
      "content": {
        "introduction": "Chaque individu hérite de caractères de ses parents.",
        "sections": [
          {
            "title": "Gamètes et chromosomes",
            "content": "Les gamètes (spermatozoïde, ovule) contiennent 23 chromosomes chacun. À la fécondation, la cellule-œuf a 46 chromosomes (23 paires)."
          },
          {
            "title": "Gènes",
            "content": "Portion de chromosome qui détermine un caractère. Chaque gène existe en deux versions (allèles), un venant du père, un de la mère."
          }
        ],
        "examples": [
          "Couleur des yeux, groupe sanguin"
        ],
        "exercises": [
          "Combien de chromosomes dans un gamète ? Dans une cellule normale ?",
          "Explique pourquoi les enfants ressemblent à leurs parents"
        ]
      }
    }
  ]
},
  "3eme": {
  "mathematiques": [
    {
      "id": "1",
      "title": "Les racines carrées",
      "description": "Découvrir et calculer des racines carrées",
      "duration": "40 min",
      "objectives": [
        "Comprendre la notion de racine carrée",
        "Calculer la racine carrée d'un nombre parfait",
        "Simplifier une racine carrée"
      ],
      "content": {
        "introduction": "La racine carrée d'un nombre positif a est le nombre positif dont le carré est égal à a.",
        "sections": [
          {
            "title": "Définition",
            "content": "√a = b signifie que b² = a. Exemple : √9 = 3 car 3² = 9."
          },
          {
            "title": "Propriétés",
            "content": "√(a×b) = √a × √b et √(a/b) = √a / √b (pour a,b ≥ 0 et b ≠ 0)."
          }
        ],
        "examples": [
          "√36 = 6",
          "√(4×9) = √4 × √9 = 2×3 = 6",
          "√(16/4) = √16 / √4 = 4/2 = 2"
        ],
        "exercises": [
          "Calcule : √49, √100, √(25×4), √(81/9)",
          "Simplifie : √50, √72, √48"
        ]
      }
    },
    {
      "id": "2",
      "title": "Le théorème de Thalès",
      "description": "Appliquer le théorème de Thalès",
      "duration": "50 min",
      "objectives": [
        "Reconnaître une configuration de Thalès",
        "Énoncer et appliquer le théorème",
        "Calculer des longueurs"
      ],
      "content": {
        "introduction": "Le théorème de Thalès permet de calculer des longueurs dans des triangles semblables.",
        "sections": [
          {
            "title": "Énoncé",
            "content": "Dans un triangle ABC, si M est sur [AB] et N sur [AC] avec (MN) parallèle à (BC), alors AM/AB = AN/AC = MN/BC."
          },
          {
            "title": "Applications",
            "content": "On utilise ce théorème pour calculer une longueur inconnue quand on connaît les autres."
          }
        ],
        "examples": [
          "Si AM=3, AB=9, AN=2, alors AC = (AB × AN)/AM = (9×2)/3 = 6"
        ],
        "exercises": [
          "Calcule AC si AM=4, AB=12, AN=3",
          "Calcule MN si AM=5, AB=15, BC=9",
          "Démontre que deux droites sont parallèles avec Thalès"
        ]
      }
    },
    {
      "id": "3",
      "title": "La trigonométrie",
      "description": "Utiliser sinus, cosinus et tangente dans le triangle rectangle",
      "duration": "50 min",
      "objectives": [
        "Définir cosinus, sinus et tangente",
        "Calculer une longueur ou un angle",
        "Utiliser la calculatrice"
      ],
      "content": {
        "introduction": "La trigonométrie établit des relations entre les côtés et les angles d'un triangle rectangle.",
        "sections": [
          {
            "title": "Définitions",
            "content": "Cosinus = adjacent/hypoténuse. Sinus = opposé/hypoténuse. Tangente = opposé/adjacent."
          },
          {
            "title": "Applications",
            "content": "Pour trouver un côté : côté = angle × hypoténuse. Pour trouver un angle : angle = arcsin(opposé/hypoténuse) (avec la calculatrice)."
          }
        ],
        "examples": [
          "cos(30°) = √3/2 ≈ 0,866",
          "sin(30°) = 1/2 = 0,5",
          "tan(45°) = 1"
        ],
        "exercises": [
          "Dans un triangle rectangle, hypoténuse=10, angle=30°, calcule le côté adjacent",
          "Calcule l'angle dont le sinus vaut 0,5",
          "Résous un problème de hauteur avec la tangente"
        ]
      }
    },
    {
      "id": "4",
      "title": "Les fonctions affines et linéaires",
      "description": "Étudier les fonctions affines et linéaires",
      "duration": "45 min",
      "objectives": [
        "Reconnaître une fonction linéaire (f(x)=ax)",
        "Reconnaître une fonction affine (f(x)=ax+b)",
        "Représenter graphiquement ces fonctions"
      ],
      "content": {
        "introduction": "Une fonction affine est une relation du type f(x) = ax + b, où a et b sont des nombres.",
        "sections": [
          {
            "title": "Fonction linéaire",
            "content": "f(x) = ax. C'est une fonction affine particulière avec b=0. Sa représentation est une droite passant par l'origine."
          },
          {
            "title": "Fonction affine",
            "content": "f(x) = ax + b. a est le coefficient directeur (pente), b est l'ordonnée à l'origine. La droite coupe l'axe des y en b."
          }
        ],
        "examples": [
          "f(x)=2x (linéaire)",
          "f(x)=3x+1 (affine)"
        ],
        "exercises": [
          "Trace f(x)=2x et g(x)=2x+3",
          "Détermine l'expression de f passant par (0,1) et (2,5)",
          "Quelle est la pente de la droite y=-3x+4 ?"
        ]
      }
    }
  ],
  "francais": [
    {
      "id": "1",
      "title": "Les propositions subordonnées",
      "description": "Identifier et analyser les subordonnées",
      "duration": "45 min",
      "objectives": [
        "Reconnaître une proposition subordonnée",
        "Distinguer relative, complétive et circonstancielle",
        "Analyser leur fonction"
      ],
      "content": {
        "introduction": "Une proposition subordonnée dépend d'une proposition principale et ne peut pas fonctionner seule.",
        "sections": [
          {
            "title": "La subordonnée relative",
            "content": "Introduite par un pronom relatif (qui, que, quoi, dont, où, lequel). Elle complète un nom (antécédent). Exemple : 'Le livre que j'ai lu est intéressant'."
          },
          {
            "title": "La subordonnée complétive",
            "content": "Introduite par 'que'. Elle complète un verbe. Exemple : 'Je pense que tu as raison'."
          },
          {
            "title": "La subordonnée circonstancielle",
            "content": "Introduite par une conjonction de subordination (quand, parce que, si...). Elle donne une circonstance. Exemple : 'Je pars quand tu arrives'."
          }
        ],
        "examples": [
          "La maison où j'habite (relative)",
          "Je crois qu'il viendra (complétive)",
          "Je sors parce qu'il fait beau (circonstancielle)"
        ],
        "exercises": [
          "Souligne la subordonnée et indique son type",
          "Remplace par une subordonnée : 'Je mange à midi' → 'Je mange quand...'"
        ]
      }
    },
    {
      "id": "2",
      "title": "Le subjonctif présent",
      "description": "Conjuguer et employer le subjonctif présent",
      "duration": "40 min",
      "objectives": [
        "Former le subjonctif présent",
        "Reconnaître les emplois du subjonctif",
        "Distinguer indicatif et subjonctif"
      ],
      "content": {
        "introduction": "Le subjonctif exprime le doute, la possibilité, le souhait, l'ordre ou la nécessité.",
        "sections": [
          {
            "title": "Formation",
            "content": "Radical de la 3e personne du pluriel au présent de l'indicatif + terminaisons : -e, -es, -e, -ions, -iez, -ent. Exemple : ils chantent → que je chante, que nous chantions."
          },
          {
            "title": "Verbes irréguliers",
            "content": "Être : que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient. Avoir : que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient. Aller : que j'aille, que nous allions."
          },
          {
            "title": "Emplois",
            "content": "Après 'il faut que', 'bien que', 'pour que', 'avant que', 'je souhaite que'."
          }
        ],
        "examples": [
          "Il faut que tu viennes",
          "Bien qu'il pleuve, je sors",
          "Pour que tu réussisses"
        ],
        "exercises": [
          "Conjugue au subjonctif : partir (que je), finir (que nous), faire (qu'ils)",
          "Complète : Il faut que tu (être) ___ sage",
          "Indicatif ou subjonctif ? 'Je pense qu'il ___' (venir)"
        ]
      }
    },
    {
      "id": "3",
      "title": "L'argumentation avancée",
      "description": "Analyser et construire un texte argumentatif",
      "duration": "40 min",
      "objectives": [
        "Distinguer thèse, arguments et exemples",
        "Reconnaître les connecteurs logiques",
        "Rédiger une argumentation structurée"
      ],
      "content": {
        "introduction": "Un texte argumentatif vise à convaincre le lecteur en défendant une thèse.",
        "sections": [
          {
            "title": "Structure",
            "content": "Introduction (thèse), développement (arguments et exemples), conclusion (rappel et ouverture)."
          },
          {
            "title": "Connecteurs logiques",
            "content": "Pour ajouter : de plus, en outre. Pour illustrer : par exemple, ainsi. Pour conclure : donc, par conséquent, en conclusion. Pour opposer : mais, cependant, toutefois."
          }
        ],
        "examples": [
          "'D'une part... d'autre part...'",
          "'Non seulement... mais encore...'"
        ],
        "exercises": [
          "Rédige une introduction pour défendre 'Les réseaux sociaux sont-ils bénéfiques ?'",
          "Trouve trois arguments pour et trois contre une idée"
        ]
      }
    },
    {
      "id": "4",
      "title": "La poésie engagée",
      "description": "Analyser un poème engagé",
      "duration": "35 min",
      "objectives": [
        "Comprendre la notion d'engagement",
        "Analyser les procédés poétiques au service de l'engagement",
        "Interpréter le message"
      ],
      "content": {
        "introduction": "La poésie engagée met l'art au service d'une cause politique, sociale ou humaine.",
        "sections": [
          {
            "title": "Caractéristiques",
            "content": "Dénonciation, appel à la révolte, espoir, utilisation de symboles, de métaphores, de répétitions pour frapper les esprits."
          }
        ],
        "examples": [
          "'Le Dormeur du val' (Rimbaud) contre la guerre",
          "'Liberté' (Éluard) pendant la Résistance"
        ],
        "exercises": [
          "Lis un poème engagé et relève les procédés",
          "Explique le message du poème et comment il est transmis"
        ]
      }
    }
  ],
  "physique_chimie": [
    {
      "id": "1",
      "title": "La masse volumique",
      "description": "Calculer et utiliser la masse volumique",
      "duration": "40 min",
      "objectives": [
        "Définir la masse volumique",
        "Calculer une masse volumique",
        "Utiliser la masse volumique pour identifier une substance"
      ],
      "content": {
        "introduction": "La masse volumique est une propriété caractéristique qui permet d'identifier une substance.",
        "sections": [
          {
            "title": "Définition",
            "content": "ρ = m/V, où m est la masse (en kg ou g) et V le volume (en m³ ou cm³). Unités : kg/m³ ou g/cm³."
          },
          {
            "title": "Applications",
            "content": "Si on connaît deux grandeurs, on peut calculer la troisième. La masse volumique permet de savoir si un objet flotte ou coule (plus dense que l'eau → coule)."
          }
        ],
        "examples": [
          "Eau : ρ = 1 g/cm³",
          "Fer : ρ ≈ 7,8 g/cm³",
          "Bois : ρ ≈ 0,7 g/cm³"
        ],
        "exercises": [
          "Calcule la masse volumique d'un objet de 200g et 50cm³",
          "Un objet de 500g a une masse volumique de 2,5 g/cm³. Quel est son volume ?",
          "Pourquoi le bois flotte-t-il ?"
        ]
      }
    },
    {
      "id": "2",
      "title": "Les lois de l'électricité",
      "description": "Appliquer la loi d'Ohm et les lois des circuits",
      "duration": "50 min",
      "objectives": [
        "Connaître la loi d'Ohm (U = R × I)",
        "Appliquer la loi des nœuds et la loi des mailles",
        "Calculer résistance, tension, intensité"
      ],
      "content": {
        "introduction": "L'électricité obéit à des lois physiques précises qui permettent de calculer les grandeurs électriques.",
        "sections": [
          {
            "title": "Loi d'Ohm",
            "content": "U = R × I, où U est la tension (en volts), R la résistance (en ohms Ω), I l'intensité (en ampères)."
          },
          {
            "title": "Circuit en série",
            "content": "L'intensité est la même partout. La tension totale est la somme des tensions."
          },
          {
            "title": "Circuit en dérivation",
            "content": "La tension est la même partout. L'intensité totale est la somme des intensités."
          }
        ],
        "examples": [
          "Si R=10Ω et I=2A, alors U=20V"
        ],
        "exercises": [
          "Calcule I si U=12V et R=6Ω",
          "Calcule R si U=5V et I=0,1A",
          "Dans un circuit série avec 3 résistances de 10Ω, 20Ω, 30Ω sous 12V, calcule l'intensité"
        ]
      }
    }
  ],
  "svt": [
    {
      "id": "1",
      "title": "L'évolution des espèces",
      "description": "Comprendre les mécanismes de l'évolution",
      "duration": "45 min",
      "objectives": [
        "Expliquer la théorie de l'évolution",
        "Comprendre le rôle de la sélection naturelle",
        "Identifier des preuves de l'évolution"
      ],
      "content": {
        "introduction": "Les espèces évoluent au cours du temps sous l'effet de la sélection naturelle.",
        "sections": [
          {
            "title": "Théorie de Darwin",
            "content": "Les individus d'une même espèce présentent des variations. Ceux qui ont les caractères les mieux adaptés à leur environnement survivent et se reproduisent davantage (sélection naturelle)."
          },
          {
            "title": "Preuves de l'évolution",
            "content": "Fossiles (montrent des formes de transition), anatomie comparée (membres de vertébrés construits sur le même plan), ADN (similarités génétiques)."
          }
        ],
        "examples": [
          "Girafe au cou long",
          "Résistance des bactéries aux antibiotiques"
        ],
        "exercises": [
          "Explique comment la sélection naturelle agit sur une population de girafes",
          "Cite trois preuves de l'évolution",
          "Qu'est-ce qu'un fossile de transition ?"
        ]
      }
    },
    {
      "id": "2",
      "title": "La génétique",
      "description": "Comprendre l'hérédité et les lois de Mendel",
      "duration": "50 min",
      "objectives": [
        "Distinguer gène, allèle, chromosome",
        "Comprendre la transmission des caractères",
        "Résoudre des exercices de génétique simple"
      ],
      "content": {
        "introduction": "La génétique étudie la transmission des caractères héréditaires des parents aux enfants.",
        "sections": [
          {
            "title": "Vocabulaire",
            "content": "Gène : portion d'ADN qui code pour un caractère. Allèle : version d'un gène (dominant ou récessif). Chromosome : support des gènes (23 paires chez l'humain)."
          },
          {
            "title": "Lois de Mendel",
            "content": "Chaque parent transmet un allèle à son enfant. Si les allèles sont différents, l'allèle dominant s'exprime. Exemple : groupe sanguin (A et B dominants sur O)."
          }
        ],
        "examples": [
          "Parents Aa × Aa → enfants AA, Aa, Aa, aa (probabilité 25% aa)"
        ],
        "exercises": [
          "Deux parents de groupe A (AO) peuvent-ils avoir un enfant O ?",
          "Construis un tableau de croisement pour des yeux bleus (récessif) et bruns (dominant)",
          "Quelle est la probabilité d'avoir un enfant de groupe AB si l'un est A et l'autre B ?"
        ]
      }
    }
  ]
},
  "seconde": {
    "mathematiques": [
      {
        "id": "1",
        "title": "Les généralités sur les fonctions",
        "description": "Découvrir la notion de fonction et ses représentations",
        "duration": "50 min",
        "objectives": [
          "Comprendre la notion de fonction",
          "Déterminer l'image et l'antécédent",
          "Représenter graphiquement une fonction"
        ],
        "content": {
          "introduction": "Une fonction est une relation qui associe à chaque nombre x au plus un nombre f(x).",
          "sections": [
            {
              "title": "Définitions",
              "content": "f(x) est l'image de x par f. x est un antécédent de f(x). L'ensemble des x pour lesquels f(x) existe est le domaine de définition."
            },
            {
              "title": "Représentation graphique",
              "content": "Dans un repère, la courbe représentative de f est l'ensemble des points (x ; f(x))."
            }
          ],
          "examples": [
            "f(x) = 2x+3 → f(2)=7",
            "Lecture graphique d'images et d'antécédents"
          ],
          "exercises": [
            "Soit f(x)=3x-5. Calcule f(2), f(0), f(-3)",
            "Trouve l'antécédent de 7 par f(x)=2x+1",
            "Par lecture graphique, détermine f(1) et les antécédents de 2"
          ]
        }
      },
      {
        "id": "2",
        "title": "Les équations et inéquations",
        "description": "Résoudre des équations et inéquations du second degré",
        "duration": "55 min",
        "objectives": [
          "Résoudre une équation du second degré",
          "Résoudre une inéquation du second degré",
          "Factoriser un trinôme"
        ],
        "content": {
          "introduction": "Les équations du second degré sont de la forme ax² + bx + c = 0.",
          "sections": [
            {
              "title": "Résolution",
              "content": "On calcule le discriminant Δ = b² - 4ac. Si Δ > 0, deux solutions : x = (-b ± √Δ)/(2a). Si Δ = 0, une solution double : x = -b/(2a). Si Δ < 0, pas de solution réelle."
            },
            {
              "title": "Factorisation",
              "content": "Si Δ > 0, ax² + bx + c = a(x - x₁)(x - x₂). Si Δ = 0, ax² + bx + c = a(x - x₀)²."
            }
          ],
          "examples": [
            "x² - 5x + 6 = 0 → Δ=1 → x=2 ou x=3",
            "x² + 2x + 1 = 0 → Δ=0 → x=-1"
          ],
          "exercises": [
            "Résous : x² - 7x + 12 = 0, 2x² + 3x - 2 = 0",
            "Factorise : x² - 9, x² - 4x + 4",
            "Résous l'inéquation x² - 5x + 6 > 0"
          ]
        }
      },
      {
        "id": "3",
        "title": "Les vecteurs",
        "description": "Manipuler les vecteurs dans le plan",
        "duration": "45 min",
        "objectives": [
          "Comprendre la notion de vecteur",
          "Additionner des vecteurs",
          "Multiplier un vecteur par un réel"
        ],
        "content": {
          "introduction": "Un vecteur est un objet mathématique caractérisé par une direction, un sens et une longueur.",
          "sections": [
            {
              "title": "Définitions",
              "content": "Le vecteur AB représente le déplacement de A vers B. Deux vecteurs sont égaux s'ils ont même direction, même sens et même longueur."
            },
            {
              "title": "Opérations",
              "content": "Addition : relation de Chasles (AC = AB + BC). Multiplication par un réel : 2×AB est un vecteur de même direction, même sens, longueur double."
            }
          ],
          "examples": [
            "AB + BC = AC",
            "3×AB = vecteur triple"
          ],
          "exercises": [
            "Simplifie : AB + BC + CD",
            "Construis la somme de deux vecteurs",
            "Exprime AE en fonction de AB et AC sur une figure"
          ]
        }
      },
      {
        "id": "4",
        "title": "Les probabilités",
        "description": "Calculer des probabilités simples",
        "duration": "40 min",
        "objectives": [
          "Comprendre le vocabulaire des probabilités",
          "Calculer une probabilité",
          "Utiliser l'équiprobabilité"
        ],
        "content": {
          "introduction": "Les probabilités mesurent les chances qu'un événement se produise.",
          "sections": [
            {
              "title": "Vocabulaire",
              "content": "Expérience aléatoire : on ne peut pas prévoir le résultat. Issue : résultat possible. Univers : ensemble des issues. Événement : ensemble d'issues."
            },
            {
              "title": "Calcul",
              "content": "En situation d'équiprobabilité, P(événement) = nombre d'issues favorables / nombre d'issues possibles."
            }
          ],
          "examples": [
            "Lancer de dé : P(obtenir 6) = 1/6",
            "Tirage dans un jeu de 32 cartes : P(as) = 4/32 = 1/8"
          ],
          "exercises": [
            "On lance deux dés. Quelle est la probabilité d'obtenir un total de 7 ?",
            "Dans une classe de 30 élèves dont 18 filles, on choisit un élève au hasard. Probabilité que ce soit un garçon ?",
            "On tire une carte. Probabilité d'obtenir un cœur ?"
          ]
        }
      }
    ],
    "francais": [
      {
        "id": "1",
        "title": "Le roman et la nouvelle au XIXe siècle",
        "description": "Étudier les caractéristiques du roman réaliste",
        "duration": "45 min",
        "objectives": [
          "Identifier les caractéristiques du réalisme",
          "Analyser un extrait de roman réaliste",
          "Comprendre le contexte historique"
        ],
        "content": {
          "introduction": "Le réalisme est un mouvement littéraire du XIXe siècle qui cherche à représenter la réalité sans idéalisation.",
          "sections": [
            {
              "title": "Caractéristiques",
              "content": "Personnages ordinaires, descriptions précises, étude des milieux sociaux, objectivité, refus de l'idéalisation. Principaux auteurs : Balzac, Flaubert, Maupassant, Zola."
            }
          ],
          "examples": [
            "'Madame Bovary' (Flaubert)",
            "'Le Père Goriot' (Balzac)",
            "'Bel-Ami' (Maupassant)"
          ],
          "exercises": [
            "Lis un extrait et relève les éléments réalistes",
            "Analyse la description d'un personnage",
            "Quelle est la différence entre romantisme et réalisme ?"
          ]
        }
      },
      {
        "id": "2",
        "title": "Le théâtre du XVIIe au XXIe siècle",
        "description": "Étudier le genre théâtral et ses évolutions",
        "duration": "45 min",
        "objectives": [
          "Connaître les spécificités du texte théâtral",
          "Distinguer comédie et tragédie",
          "Analyser une scène de théâtre"
        ],
        "content": {
          "introduction": "Le théâtre est un genre littéraire destiné à être représenté sur scène.",
          "sections": [
            {
              "title": "Spécificités",
              "content": "Dialogue, didascalies (indications scéniques), actes et scènes, double énonciation (personnages entre eux et avec le public)."
            },
            {
              "title": "Genres",
              "content": "Tragédie (personnages nobles, destin, mort) vs comédie (personnages ordinaires, quiproquos, fin heureuse). Auteurs : Molière, Racine, Corneille, Marivaux."
            }
          ],
          "examples": [
            "'Le Misanthrope' (Molière)",
            "'Phèdre' (Racine)",
            "'Le Jeu de l'amour et du hasard' (Marivaux)"
          ],
          "exercises": [
            "Lis une scène et analyse les didascalies",
            "Quelle est la fonction du quiproquo dans une comédie ?",
            "Compare un extrait de tragédie et de comédie"
          ]
        }
      },
      {
        "id": "3",
        "title": "La poésie du XIXe au XXIe siècle",
        "description": "Explorer la poésie moderne et contemporaine",
        "duration": "40 min",
        "objectives": [
          "Reconnaître les formes poétiques modernes",
          "Analyser le langage poétique",
          "Comprendre l'évolution de la poésie"
        ],
        "content": {
          "introduction": "La poésie moderne rompt avec les formes fixes traditionnelles pour explorer de nouvelles possibilités.",
          "sections": [
            {
              "title": "Évolution",
              "content": "Romantisme (expression des sentiments), Parnasse (art pour l'art), Symbolisme (suggestion), Surréalisme (inconscient, images), poésie contemporaine (forme libre)."
            },
            {
              "title": "Moyens d'expression",
              "content": "Images (métaphore, comparaison), sonorités (allitération, assonance), rythme, vers libre, prose poétique."
            }
          ],
          "examples": [
            "Baudelaire, 'Les Fleurs du mal'",
            "Rimbaud, 'Le Bateau ivre'",
            "Apollinaire, 'Calligrammes'"
          ],
          "exercises": [
            "Analyse les images dans un poème",
            "Compare un sonnet et un poème en vers libres",
            "Qu'est-ce qu'un calligramme ?"
          ]
        }
      },
      {
        "id": "4",
        "title": "La littérature d'idées",
        "description": "Étudier les textes argumentatifs",
        "duration": "40 min",
        "objectives": [
          "Reconnaître les genres de l'argumentation",
          "Analyser une thèse et ses arguments",
          "Comprendre les stratégies argumentatives"
        ],
        "content": {
          "introduction": "La littérature d'idées cherche à défendre une thèse et à convaincre le lecteur.",
          "sections": [
            {
              "title": "Genres",
              "content": "Essai, pamphlet, discours, lettre ouverte, fable, conte philosophique, utopie, contre-utopie."
            },
            {
              "title": "Stratégies",
              "content": "Appel à la raison (logos), aux émotions (pathos), à l'éthique (ethos). Utilisation de l'ironie, de la satire, de l'allégorie."
            }
          ],
          "examples": [
            "Voltaire, 'Candide'",
            "La Fontaine, 'Fables'",
            "Hugo, discours"
          ],
          "exercises": [
            "Analyse un extrait de 'Candide'",
            "Quelle est la thèse défendue dans cette fable ?",
            "Reconnais-tu des procédés ironiques ?"
          ]
        }
      }
    ],
    "physique": [
      {
        "id": "1",
        "title": "L'univers et le système solaire",
        "description": "Découvrir la structure de l'univers",
        "duration": "45 min",
        "objectives": [
          "Connaître les ordres de grandeur dans l'univers",
          "Décrire le système solaire",
          "Comprendre la place de la Terre"
        ],
        "content": {
          "introduction": "L'univers est immensément vaste, de l'infiniment petit à l'infiniment grand.",
          "sections": [
            {
              "title": "Ordres de grandeur",
              "content": "Distance Terre-Lune : 384 000 km. Distance Terre-Soleil : 150 millions de km (1 UA). Année-lumière : distance parcourue par la lumière en un an ≈ 9 460 milliards de km."
            },
            {
              "title": "Le système solaire",
              "content": "Le Soleil (étoile), 8 planètes (4 telluriques : Mercure, Vénus, Terre, Mars ; 4 gazeuses : Jupiter, Saturne, Uranus, Neptune), astéroïdes, comètes."
            }
          ],
          "examples": [
            "Proxima du Centaure : 4,2 al",
            "Voie lactée : 100 000 al de diamètre"
          ],
          "exercises": [
            "Convertir 1 al en km",
            "Combien de temps met la lumière du Soleil pour atteindre la Terre ?",
            "Quelle est la différence entre planète tellurique et gazeuse ?"
          ]
        }
      },
      {
        "id": "2",
        "title": "La structure de l'atome",
        "description": "Étudier la constitution de l'atome",
        "duration": "45 min",
        "objectives": [
          "Connaître la structure de l'atome",
          "Distinguer protons, neutrons, électrons",
          "Comprendre la notion d'ion"
        ],
        "content": {
          "introduction": "L'atome est la plus petite partie de la matière qui conserve les propriétés chimiques de l'élément.",
          "sections": [
            {
              "title": "Constitution",
              "content": "Noyau (protons + neutrons) chargé positivement, électrons chargés négativement en mouvement autour. Atome électriquement neutre (nombre protons = nombre électrons)."
            },
            {
              "title": "Éléments et ions",
              "content": "Numéro atomique Z = nombre de protons. Symbole chimique. Un ion se forme quand l'atome gagne ou perd des électrons. Cation (+), anion (-)."
            }
          ],
          "examples": [
            "Carbone : Z=6, 6 protons, 6 électrons",
            "Na⁺ : sodium ayant perdu 1 électron",
            "Cl⁻ : chlore ayant gagné 1 électron"
          ],
          "exercises": [
            "Combien de protons dans l'atome d'oxygène (Z=8) ?",
            "Quelle est la charge de l'ion calcium Ca²⁺ ?",
            "Dessine un atome simplifié"
          ]
        }
      }
    ],
    "svt": [
      {
        "id": "1",
        "title": "La cellule, unité du vivant",
        "description": "Étudier la structure et le fonctionnement cellulaire",
        "duration": "50 min",
        "objectives": [
          "Connaître l'organisation cellulaire",
          "Distinguer cellule animale et végétale",
          "Comprendre les échanges cellulaires"
        ],
        "content": {
          "introduction": "La cellule est l'unité structurale et fonctionnelle de tous les êtres vivants.",
          "sections": [
            {
              "title": "Structure commune",
              "content": "Membrane plasmique (échanges), cytoplasme (milieu), noyau (information génétique). Organites : mitochondries (énergie), réticulum, appareil de Golgi."
            },
            {
              "title": "Spécificités",
              "content": "Cellule végétale : paroi cellulosique (rigidité), chloroplastes (photosynthèse), vacuole. Cellule animale : centrioles, pas de paroi."
            }
          ],
          "examples": [
            "Globule rouge (sans noyau)",
            "Neurone (long prolongement)",
            "Cellule musculaire (forme allongée)"
          ],
          "exercises": [
            "Légende un schéma de cellule",
            "Cite trois différences entre cellule animale et végétale",
            "Quel est le rôle des mitochondries ?"
          ]
        }
      },
      {
        "id": "2",
        "title": "La photosynthèse",
        "description": "Comprendre le fonctionnement de la photosynthèse",
        "duration": "45 min",
        "objectives": [
          "Expliquer le mécanisme de la photosynthèse",
          "Connaître les besoins des plantes vertes",
          "Comprendre le rôle des chloroplastes"
        ],
        "content": {
          "introduction": "La photosynthèse est le processus par lequel les plantes vertes produisent leur matière organique.",
          "sections": [
            {
              "title": "Équation",
              "content": "6 CO₂ + 6 H₂O + lumière → C₆H₁₂O₆ (glucose) + 6 O₂. Cela se produit dans les chloroplastes grâce à la chlorophylle."
            },
            {
              "title": "Facteurs influençant",
              "content": "Lumière, température, concentration en CO₂, disponibilité en eau."
            }
          ],
          "examples": [
            "Expérience de mise en évidence de l'oxygène produit"
          ],
          "exercises": [
            "Écris l'équation de la photosynthèse",
            "Quels sont les produits et les réactifs ?",
            "Pourquoi les plantes sont-elles essentielles à la vie animale ?"
          ]
        }
      }
    ]
  },
  "premiere": {
    "mathematiques": [
      {
        "id": "1",
        "title": "Le second degré",
        "description": "Étudier en profondeur les fonctions polynômes du second degré",
        "duration": "55 min",
        "objectives": [
          "Déterminer la forme canonique",
          "Étudier le signe du trinôme",
          "Résoudre des problèmes d'optimisation"
        ],
        "content": {
          "introduction": "Les fonctions du second degré sont essentielles pour modéliser de nombreuses situations.",
          "sections": [
            {
              "title": "Forme canonique",
              "content": "f(x) = a(x - α)² + β, avec α = -b/(2a) et β = f(α). Le sommet de la parabole est S(α ; β)."
            },
            {
              "title": "Signe et variations",
              "content": "Si a > 0, parabole tournée vers le haut, décroissante puis croissante. Si a < 0, parabole tournée vers le bas, croissante puis décroissante. Le signe dépend du discriminant."
            }
          ],
          "examples": [
            "f(x)=2(x-3)²+1 : sommet (3,1), minimum 1"
          ],
          "exercises": [
            "Mets sous forme canonique : x² - 6x + 5",
            "Détermine le sommet et les variations de f(x) = -2x² + 8x - 3",
            "Problème : aire maximale d'un rectangle avec périmètre fixé"
          ]
        }
      },
      {
        "id": "2",
        "title": "La dérivation",
        "description": "Calculer et utiliser les dérivées",
        "duration": "60 min",
        "objectives": [
          "Calculer la dérivée d'une fonction",
          "Étudier les variations d'une fonction",
          "Déterminer les extremums"
        ],
        "content": {
          "introduction": "La dérivée permet d'étudier les variations d'une fonction et de résoudre des problèmes d'optimisation.",
          "sections": [
            {
              "title": "Définition",
              "content": "Le nombre dérivé f'(a) est le coefficient directeur de la tangente à la courbe au point d'abscisse a."
            },
            {
              "title": "Formules",
              "content": "f(x)=k → f'(x)=0 ; f(x)=x → f'(x)=1 ; f(x)=xⁿ → f'(x)=nxⁿ⁻¹ ; (u+v)' = u'+v' ; (ku)' = ku'"
            },
            {
              "title": "Application aux variations",
              "content": "f'(x) > 0 → f croissante ; f'(x) < 0 → f décroissante ; f'(x)=0 avec changement de signe → extremum."
            }
          ],
          "examples": [
            "f(x)=x² → f'(x)=2x",
            "f(x)=3x²+2x → f'(x)=6x+2"
          ],
          "exercises": [
            "Calcule la dérivée de f(x)=4x³ - 2x² + 5x - 3",
            "Étudie les variations de f(x)=x² - 4x + 3",
            "Trouve le minimum de f(x)=2x² - 8x + 5"
          ]
        }
      },
      {
        "id": "3",
        "title": "Le produit scalaire",
        "description": "Utiliser le produit scalaire dans le plan",
        "duration": "50 min",
        "objectives": [
          "Définir le produit scalaire",
          "Calculer un produit scalaire",
          "Utiliser le produit scalaire pour calculer des angles et des longueurs"
        ],
        "content": {
          "introduction": "Le produit scalaire est une opération qui associe un nombre à deux vecteurs.",
          "sections": [
            {
              "title": "Définition",
              "content": "u·v = ||u|| × ||v|| × cos(u,v). En coordonnées : u(x,y) et v(x',y') → u·v = xx' + yy'."
            },
            {
              "title": "Applications",
              "content": "Calculer un angle : cos(u,v) = (u·v)/(||u||×||v||). Démontrer une orthogonalité : u·v = 0. Calculer une longueur : ||u||² = u·u."
            }
          ],
          "examples": [
            "u(3,4) et v(5,0) → u·v = 15",
            "Démontrer qu'un triangle est rectangle"
          ],
          "exercises": [
            "Calcule u·v pour u(2,-3) et v(4,5)",
            "Détermine l'angle entre u(1,0) et v(1,1)",
            "Démontre que les vecteurs u(2,3) et v(-3,2) sont orthogonaux"
          ]
        }
      },
      {
        "id": "4",
        "title": "Les suites numériques",
        "description": "Étudier les suites arithmétiques et géométriques",
        "duration": "45 min",
        "objectives": [
          "Définir une suite",
          "Reconnaître une suite arithmétique",
          "Reconnaître une suite géométrique"
        ],
        "content": {
          "introduction": "Une suite est une liste ordonnée de nombres. On peut la définir par une formule explicite ou par récurrence.",
          "sections": [
            {
              "title": "Suites arithmétiques",
              "content": "On passe d'un terme au suivant en ajoutant toujours le même nombre r (raison). uₙ = u₀ + n×r. Somme des n premiers termes : n×(u₀+uₙ₋₁)/2."
            },
            {
              "title": "Suites géométriques",
              "content": "On passe d'un terme au suivant en multipliant toujours par le même nombre q (raison). uₙ = u₀ × qⁿ. Somme des n premiers termes : u₀ × (1-qⁿ)/(1-q)."
            }
          ],
          "examples": [
            "Arithmétique : 3,5,7,9 (r=2)",
            "Géométrique : 2,4,8,16 (q=2)"
          ],
          "exercises": [
            "Détermine la nature de la suite : 1,4,7,10",
            "Calcule u₁₀ pour une suite arithmétique de raison 3 et u₀=2",
            "Calcule la somme des 10 premiers termes d'une suite géométrique de raison 2 et u₀=1"
          ]
        }
      }
    ],
    "physique": [
      {
        "id": "1",
        "title": "La cinétique chimique",
        "description": "Étudier la vitesse des réactions chimiques",
        "duration": "45 min",
        "objectives": [
          "Définir la vitesse d'une réaction",
          "Identifier les facteurs cinétiques",
          "Suivre l'évolution d'une réaction"
        ],
        "content": {
          "introduction": "La cinétique chimique étudie la vitesse à laquelle se produisent les réactions.",
          "sections": [
            {
              "title": "Facteurs cinétiques",
              "content": "Température (augmente la vitesse), concentration (plus de réactifs → plus rapide), catalyseur (accélère sans être consommé), surface de contact (solide divisé réagit plus vite)."
            },
            {
              "title": "Suivi temporel",
              "content": "On peut suivre une réaction par mesure de pression, conductimétrie, pH-métrie, colorimétrie. On obtient des courbes d'évolution."
            }
          ],
          "examples": [
            "Cuisson des aliments (température)",
            "Fer qui rouille (lent)",
            "Combustion (rapide)"
          ],
          "exercises": [
            "Pourquoi met-on les aliments au réfrigérateur ?",
            "Quel est l'effet d'un catalyseur ?",
            "Explique l'influence de la concentration sur la vitesse"
          ]
        }
      },
      {
        "id": "2",
        "title": "Les forces et le mouvement",
        "description": "Étudier la relation entre forces et mouvement",
        "duration": "50 min",
        "objectives": [
          "Connaître les lois de Newton",
          "Appliquer le principe d'inertie",
          "Étudier des mouvements simples"
        ],
        "content": {
          "introduction": "Les lois de Newton décrivent la relation entre les forces appliquées à un corps et son mouvement.",
          "sections": [
            {
              "title": "Principe d'inertie (1ère loi)",
              "content": "Dans un référentiel galiléen, si les forces qui s'exercent sur un système se compensent, alors le système est immobile ou en mouvement rectiligne uniforme."
            },
            {
              "title": "2ème loi de Newton",
              "content": "La somme des forces extérieures est égale au produit de la masse par l'accélération : ΣF = m × a."
            },
            {
              "title": "3ème loi",
              "content": "Principe d'action-réaction : si un corps A exerce une force sur un corps B, alors B exerce une force égale et opposée sur A."
            }
          ],
          "examples": [
            "Chute libre (seulement le poids)",
            "Voiture qui freine (frottements)"
          ],
          "exercises": [
            "Énonce le principe d'inertie",
            "Quelle est la condition pour qu'un mouvement soit uniforme ?",
            "Dessine les forces s'exerçant sur un livre posé sur une table"
          ]
        }
      }
    ]
  },
  "terminale": {
    "mathematiques": [
      {
        "id": "1",
        "title": "Les fonctions exponentielles et logarithmes",
        "description": "Étudier les fonctions exponentielles et logarithmes",
        "duration": "60 min",
        "objectives": [
          "Définir la fonction exponentielle",
          "Définir la fonction logarithme népérien",
          "Utiliser leurs propriétés"
        ],
        "content": {
          "introduction": "Les fonctions exponentielles et logarithmes sont essentielles en mathématiques et en sciences.",
          "sections": [
            {
              "title": "Fonction exponentielle",
              "content": "exp(x) = eˣ. Propriétés : e⁰=1, eᵃ⁺ᵇ = eᵃ × eᵇ, (eᵃ)ᵇ = eᵃᵇ. Dérivée : (eˣ)' = eˣ."
            },
            {
              "title": "Fonction logarithme népérien",
              "content": "ln(x) définie pour x>0. C'est la fonction réciproque de l'exponentielle : ln(eˣ)=x et e^(ln x)=x. Propriétés : ln(ab)=ln a + ln b, ln(a/b)=ln a - ln b, ln(aⁿ)=n ln a. Dérivée : (ln x)' = 1/x."
            }
          ],
          "examples": [
            "e² × e³ = e⁵",
            "ln(2×3) = ln2 + ln3",
            "ln(8) = 3 ln2"
          ],
          "exercises": [
            "Simplifie : e³ × e⁴, ln(10) + ln(2), e^(ln 5)",
            "Résous : eˣ = 5, ln x = 2",
            "Dérive : f(x)=e^(2x), g(x)=ln(3x)"
          ]
        }
      },
      {
        "id": "2",
        "title": "Les intégrales",
        "description": "Calculer et utiliser les intégrales",
        "duration": "60 min",
        "objectives": [
          "Comprendre la notion d'intégrale",
          "Calculer une intégrale",
          "Utiliser l'intégrale pour calculer une aire"
        ],
        "content": {
          "introduction": "L'intégrale permet de calculer l'aire sous une courbe et de résoudre de nombreux problèmes.",
          "sections": [
            {
              "title": "Définition",
              "content": "∫ₐᵇ f(x) dx = F(b) - F(a), où F est une primitive de f (F' = f)."
            },
            {
              "title": "Propriétés",
              "content": "∫ₐᵇ (f+g) = ∫ₐᵇ f + ∫ₐᵇ g. ∫ₐᵇ kf = k∫ₐᵇ f. Relation de Chasles : ∫ₐᵇ f = ∫ₐᶜ f + ∫ᶜᵇ f."
            },
            {
              "title": "Primitives usuelles",
              "content": "∫ xⁿ dx = xⁿ⁺¹/(n+1) + C. ∫ 1/x dx = ln|x| + C. ∫ eˣ dx = eˣ + C."
            }
          ],
          "examples": [
            "∫₀¹ x² dx = [x³/3]₀¹ = 1/3",
            "∫₁² 1/x dx = [ln x]₁² = ln2"
          ],
          "exercises": [
            "Calcule ∫₀² (3x²) dx",
            "Calcule ∫₁³ (2x + 1) dx",
            "Détermine l'aire sous la courbe de f(x)=x² entre 0 et 2"
          ]
        }
      },
      {
        "id": "3",
        "title": "Les probabilités conditionnelles",
        "description": "Calculer des probabilités conditionnelles",
        "duration": "45 min",
        "objectives": [
          "Comprendre la notion de probabilité conditionnelle",
          "Appliquer la formule des probabilités totales",
          "Utiliser le théorème de Bayes"
        ],
        "content": {
          "introduction": "Une probabilité conditionnelle mesure la probabilité d'un événement sachant qu'un autre est réalisé.",
          "sections": [
            {
              "title": "Définition",
              "content": "P(A|B) = P(A∩B)/P(B), avec P(B) ≠ 0. Cela représente la probabilité de A sachant que B est réalisé."
            },
            {
              "title": "Formule des probabilités totales",
              "content": "Si B₁, B₂, ..., Bₙ forment une partition de l'univers, alors P(A) = Σ P(A|Bᵢ) × P(Bᵢ)."
            },
            {
              "title": "Indépendance",
              "content": "A et B sont indépendants si P(A∩B) = P(A) × P(B) ou P(A|B) = P(A)."
            }
          ],
          "examples": [],
          "exercises": []
        }
      }
    ]
  }
}





export default BURKINA_LESSONS;