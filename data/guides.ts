export interface AudioStep {
  id: string;
  title: string;
  duration: string;
  text: string;
  imageUrl: string;
}

export interface Guide {
  id: string;
  name: string;
  description: string;
  duration: string;
  steps: AudioStep[];
}

export const guides: Guide[] = [
  {
    id: "montmartre",
    name: "MONTMARTRE",
    description: "La Balade Bohème",
    duration: "1h",
    steps: [
      {
        id: "montmartre-1",
        title: "Le Funiculaire & la Vue",
        duration: "3 min",
        imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
        text: `Ne montez pas à pied, c'est une erreur que font tous les touristes pressés. Prenez le funiculaire avec un simple ticket t+, le même que le métro. En trente secondes, vous grimpez ce que d'autres peinent à monter en dix minutes.

En haut, résistez à l'appel du Sacré-Cœur. Tournez-lui le dos. Marchez vers la balustrade et regardez Paris.

Voilà pourquoi ils ont construit ici. Pas pour la hauteur, mais pour cette vue. Par temps clair, vous voyez jusqu'à trente kilomètres. La Tour Eiffel, bien sûr, mais aussi Notre-Dame qui renaît, le Panthéon au loin, et entre eux, cette mer de toits de zinc qui fait tout le charme de Paris.

Les artistes sont venus ici pour cette lumière. Montmartre n'était pas un quartier d'artistes par hasard. C'était un observatoire. Renoir, Van Gogh, Toulouse-Lautrec regardaient cette vue tous les jours, et elle nourrissait leur regard.

Maintenant, retournez-vous. Le Sacré-Cœur vous attend.`
      },
      {
        id: "montmartre-2",
        title: "Sacré-Cœur (L'Extérieur)",
        duration: "4 min",
        imageUrl: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=800&q=80",
        text: `Cette pierre blanche aveuglante n'est pas un choix esthétique innocent. C'est du travertin de Château-Landon, une pierre calcaire qui blanchit au contact de l'eau de pluie. Elle se nettoie toute seule. Plus il pleut, plus elle brille. Ingénieux pour Paris.

Regardez les deux statues équestres qui encadrent l'escalier : Jeanne d'Arc à gauche, Saint Louis à droite. Les deux saints militaires de la France. Car oui, le Sacré-Cœur est un monument politique. Il a été construit après la défaite de 1870 et la Commune de Paris. Une église pour racheter les péchés de la France, disaient-ils. Une provocation pour les républicains.

Regardez maintenant la façade. Quatre statues au sommet : les anges Gabriel et Michel, Saint Louis encore, et Jeanne d'Arc encore. L'obsession du salut national.

Les cloches, dans le campanile, sont monumentales. La Savoyarde, la plus grosse cloche de France, pèse dix-neuf tonnes. Quand elle sonne, tout Montmartre vibre.

Vous pouvez entrer si vous voulez, c'est gratuit, mais sachez que l'intérieur est froid et touristique. Le vrai Montmartre est ailleurs. Il est dans les rues. Continuons.`
      },
      {
        id: "montmartre-3",
        title: "Place du Tertre (La Survie)",
        duration: "2 min",
        imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80",
        text: `Vous y êtes. La Place du Tertre. Le piège à touristes le plus efficace de Paris. Traversez vite. Ne vous arrêtez pas. Surtout, ne vous asseyez pas pour vous faire tirer le portrait. Ces artistes ne sont pas les héritiers de Picasso. Ce sont des businessmen du fusain.

Mais regardez quand même l'enseigne de la Mère Catherine, juste sur votre droite. C'est le plus vieux bistrot de Montmartre, ouvert en 1793. On dit que ce sont les soldats russes de 1814 qui ont inventé le mot "bistrot" ici, en criant "Bystro! Bystro!" — vite, vite en russe — pour être servis rapidement.

La place était autrefois le cœur du village de Montmartre. Avant l'annexion à Paris en 1860, c'était ici que se réunissait le conseil municipal. Une vraie place de village, avec ses marronniers et ses artistes qui peignaient pour le plaisir, pas pour les Japonais.

Aujourd'hui, c'est devenu un décor de cinéma pour touristes nostalgiques. Mais ne soyez pas trop sévère : c'est aussi ce folklore qui sauve Montmartre de la gentrification totale.

Fuyons. Prenez la rue Norvins vers la gauche. On descend vers le calme.`
      },
      {
        id: "montmartre-4",
        title: "Rue des Saules & La Vigne",
        duration: "3 min",
        imageUrl: "https://images.unsplash.com/photo-1584274292066-255988840a91?w=800&q=80",
        text: `Vous descendez la rue des Saules. Sentez le changement ? Le silence revient. Les touristes ne descendent jamais jusqu'ici. Trop loin du Sacré-Cœur.

Sur votre gauche, derrière cette grille verte, vous voyez les Vignes du Clos Montmartre. Oui, des vignes. À Paris. Au XIXe siècle, Montmartre était couvert de vignobles. Le vin était exécrable, paraît-il, mais pas cher. Aujourd'hui, il ne reste que ce petit lopin de mille six cents pieds de vigne.

Chaque année en octobre, c'est la Fête des Vendanges de Montmartre. On récolte environ mille bouteilles. Un vin de collection, pas de dégustation. Le produit de la vente finance les œuvres sociales du quartier. Une vigne sociale.

En face, vous voyez le cabaret Au Lapin Agile, cette petite maison rose. On y vient dans une minute. Mais avant, regardez à droite, vers le bas de la rue. Vous voyez ce réverbère ancien, ce pavé qui brille après la pluie ? C'est ici qu'Amélie Poulain a été filmée. C'est ici que le Paris fantasmé du cinéma rejoint le Paris réel des Montmartrois.

Approchons-nous du Lapin Agile.`
      },
      {
        id: "montmartre-5",
        title: "Au Lapin Agile",
        duration: "4 min",
        imageUrl: "https://images.unsplash.com/photo-1605883705077-8d3d3c7f4f1c?w=800&q=80",
        text: `Voilà. Le cabaret Au Lapin Agile. Cette petite cabane rose au volet vert. Elle n'a l'air de rien, mais c'est ici que tout s'est joué.

À la Belle Époque, c'était le QG des peintres fauchés. Picasso venait ici tous les soirs. Il n'avait pas d'argent, alors il payait ses repas avec des toiles. Le patron, Frédé, les accrochait aux murs. Un Picasso contre une soupe à l'oignon. Imaginez.

En 1905, Picasso peint ici "Au Lapin Agile", un autoportrait où il se représente en arlequin. Le tableau sera vendu aux enchères en 1989 pour quarante millions de dollars. Le prix de mille soupes à l'oignon.

Le cabaret existe toujours. Il ouvre le soir, on y chante des vieilles chansons françaises, on y boit du vin rouge dans des verres dépareillés. C'est devenu un peu touristique, évidemment, mais l'esprit est intact. Si vous revenez un soir, allez-y.

Mais le vrai secret de Montmartre, ce n'est ni le Sacré-Cœur, ni la Place du Tertre, ni même le Lapin Agile. C'est ce qui vient maintenant. Remontez la rue des Saules, et prenez à gauche vers la Place Dalida.`
      },
      {
        id: "montmartre-6",
        title: "Place Dalida & L'Allée des Brouillards",
        duration: "5 min",
        imageUrl: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80",
        text: `Vous y êtes. La Place Dalida. Le buste de bronze de la chanteuse vous sourit. Les gens viennent toucher ses seins pour avoir de la chance. Une superstition absurde et tendre à la fois.

Dalida vivait juste en haut, rue d'Orchampt. Elle aimait Montmartre, ce village dans la ville. Elle disait : "Ici, je ne suis pas une star, je suis une voisine." Elle s'est suicidée en 1987. Trop de chagrins d'amour, disait-on. Trop de succès aussi, peut-être.

Mais oubliez la tristesse. Regardez autour de vous. Ces petites maisons basses, ces jardins secrets, cette lumière filtrée par les arbres. Vous êtes dans l'Allée des Brouillards, juste en contrebas.

Descendez-y. C'est une impasse pavée bordée de maisons du XVIIIe siècle. Gérard de Nerval y a vécu. Renoir aussi. L'allée porte bien son nom : les matins d'hiver, un brouillard épais stagne ici, comme si Montmartre refusait de rejoindre Paris.

C'est le spot le plus romantique et secret de tout Montmartre. Pas de touristes, pas de caricaturistes, pas de magasins de souvenirs. Juste le silence, les pavés, et l'impression d'être ailleurs.

Si vous avez quelqu'un à embrasser, c'est ici. Si vous êtes seul, c'est ici aussi. Montmartre se mérite, et vous l'avez mérité. Bravo.

Fin de la balade.`
      }
    ]
  },
  {
    id: "pantheon",
    name: "PANTHÉON",
    description: "La Grande Visite",
    duration: "1h30",
    steps: [
      {
        id: "pantheon-1",
        title: "La Façade & L'Ambition",
        duration: "6 min",
        imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
        text: `Levez les yeux. Lisez l'inscription au fronton : "Aux Grands Hommes la Patrie Reconnaissante."

Cette phrase résume tout. Le Panthéon n'est pas un monument. C'est une promesse. Une promesse de gloire éternelle pour ceux qui ont servi la France. Mais attention : la définition de "Grand Homme" change selon les régimes. C'est toute l'histoire de France qui est inscrite dans ce bâtiment.

Au départ, en 1764, Louis XV veut construire une église pour remercier Sainte-Geneviève de l'avoir guéri d'une maladie. Il confie le projet à Jacques-Germain Soufflot, un architecte visionnaire. Soufflot rêve de marier la légèreté des cathédrales gothiques à la rigueur des temples grecs. Un projet insensé.

La construction dure des décennies. Soufflot meurt avant la fin. En 1789, la Révolution éclate. En 1791, le bâtiment n'est pas encore achevé que l'Assemblée Nationale décide : ce ne sera pas une église, mais un temple laïc pour honorer les grands hommes. Mirabeau, le tribun révolutionnaire, vient de mourir. On l'enterre ici. Le Panthéon est né.

Regardez les colonnes. Vingt-deux colonnes corinthiennes qui soutiennent ce fronton triangulaire. Regardez la coupole qui domine tout Paris. Cent mètres de haut, une prouesse technique pour l'époque. Soufflot voulait défier la gravité. Il a réussi.

Entrez maintenant.`
      },
      {
        id: "pantheon-2",
        title: "La Nef & La Lumière",
        duration: "7 min",
        imageUrl: "https://images.unsplash.com/photo-1549918864-39730154332e?w=800&q=80",
        text: `Vous entrez. Premier choc : la lumière.

Soufflot voulait un édifice baigné de lumière naturelle, comme les cathédrales gothiques. Il avait percé quarante-deux fenêtres. Mais en 1791, quand le Panthéon devient un temple laïc, on mure les fenêtres. Un temple doit être sombre, solennel. La lumière, c'est pour les vivants. Ici, on honore les morts.

Résultat : cette pénombre spectaculaire. La lumière ne vient plus que d'en haut, de la coupole, comme une bénédiction céleste. C'est à la fois grandiose et écrasant. Vous êtes petit ici. C'est voulu.

Avancez dans la nef. Regardez les dimensions. Cent dix mètres de long, quatre-vingt-quatre mètres de large sous la coupole. C'est immense. Et pourtant, grâce aux proportions parfaites, vous ne vous sentez pas perdu. Vous vous sentez... accueilli par la grandeur.

Sur les murs, des peintures monumentales. Elles racontent l'histoire de Sainte-Geneviève, patronne de Paris, et l'épopée de la France chrétienne. Mais regardez bien : ces peintures datent du XIXe siècle, quand Napoléon rend le Panthéon au culte catholique. Entre 1791 et 1885, le bâtiment change six fois de statut : temple laïc, église, temple, église, temple, église. Un yo-yo idéologique.

C'est Victor Hugo qui fixe définitivement le destin du Panthéon. En 1885, il meurt. Deux millions de personnes suivent son cercueil. On décide : le Panthéon redevient un temple laïc, pour toujours. Hugo est le premier à y être enterré sous la République.

Approchons-nous maintenant du centre. Le Pendule de Foucault vous attend.`
      },
      {
        id: "pantheon-3",
        title: "Le Pendule de Foucault",
        duration: "8 min",
        imageUrl: "https://images.unsplash.com/photo-1580407196238-dac33f57c410?w=800&q=80",
        text: `Vous le voyez ? Ce fil de soixante-sept mètres qui descend de la coupole ? Au bout, une sphère de laiton de vingt-huit kilos. C'est le Pendule de Foucault.

En 1851, le physicien Léon Foucault cherche une preuve simple et spectaculaire que la Terre tourne. Il a une intuition : si je suspends un pendule très long dans un lieu très haut, et que je le fais osciller, le plan d'oscillation devrait rester fixe dans l'espace, tandis que la Terre tourne sous lui.

Il demande l'autorisation de faire l'expérience ici, sous la coupole du Panthéon. Louis-Napoléon Bonaparte accepte. Le 31 mars 1851, devant une foule de savants et de curieux, Foucault lance son pendule.

Et ça marche.

Au fil des heures, le pendule semble dévier lentement vers la droite. En réalité, c'est le sol qui tourne sous lui, entraîné par la rotation de la Terre. À Paris, à notre latitude, le pendule accomplit un tour complet en environ trente-deux heures.

Fixez la sphère. Imaginez les spectateurs de 1851, bouche bée, réalisant en direct que Galilée avait raison : "Eppur si muove" — et pourtant elle tourne.

Le pendule que vous voyez aujourd'hui est une réplique. L'original a été démonté plusieurs fois, notamment quand le Panthéon redevient église et que l'Église préfère éviter ce rappel gênant de l'héliocentrisme.

Mais le symbole reste. Ici, au cœur du temple républicain, la science prouve sa vérité contre tous les dogmes. C'est un manifeste silencieux.

Maintenant, regardez vers la droite. Les grandes peintures murales nous appellent.`
      },
      {
        id: "pantheon-4",
        title: "La Convention Nationale (Sculpture)",
        duration: "5 min",
        imageUrl: "https://images.unsplash.com/photo-1553342385-d4d8f1f93f3e?w=800&q=80",
        text: `À droite, au fond de la nef, vous voyez un groupe sculpté monumental. Approchez-vous.

C'est "La Convention Nationale" de François-Léon Sicard, inaugurée en 1924. Elle représente les soldats de l'An II, ces volontaires qui ont sauvé la République en 1792 quand toute l'Europe monarchique voulait écraser la Révolution française.

Regardez leurs visages. Ce ne sont pas des héros de marbre froid. Ce sont des hommes ordinaires, des paysans, des artisans, mobilisés en urgence. Certains n'ont même pas d'uniformes complets. Mais ils sont déterminés. Regardez leurs yeux.

Devant eux, une femme incarne la Patrie. Elle tend les bras, elle appelle. Et eux répondent. C'est le mythe fondateur de la République : le citoyen-soldat qui défend la Nation par devoir, pas par métier.

Cette sculpture a été commandée après la Première Guerre mondiale. Elle est censée relier le sacrifice des Poilus de 14-18 à celui des soldats de la Révolution. Un continuum de l'héroïsme républicain.

Mais en 1924, les survivants de la Grande Guerre commencent à douter. Douter du sens du sacrifice, douter des "Grands Hommes" qui les ont envoyés mourir. Cette sculpture est aussi un chant du cygne. Le dernier hommage à une époque où l'on croyait encore à la gloire.

Tournez-vous maintenant. Il est temps de descendre. La crypte vous attend.`
      },
      {
        id: "pantheon-5",
        title: "Descente vers la Crypte",
        duration: "4 min",
        imageUrl: "https://images.unsplash.com/photo-1489659831537-1f9eeea43725?w=800&q=80",
        text: `Vous cherchez l'escalier. Il est là, discret, presque caché. Descendez.

L'ambiance change immédiatement. Le bruit de vos pas résonne différemment. Il fait plus frais. Plus sombre. Vous entrez dans le monde des morts.

La crypte du Panthéon s'étend sous tout l'édifice. C'est un labyrinthe de galeries voûtées, de chapelles rayonnantes, de couloirs qui se croisent. Quatre-vingt-une personnalités y reposent. Pas toutes des "Grands Hommes" — depuis 1995, il y a aussi des Grandes Femmes.

Mais attention : entrer au Panthéon, c'est toujours un choix politique. Chaque inhumation fait débat. Faut-il honorer Napoléon ? Les révolutionnaires ? Les écrivains ? Les scientifiques ? Les résistants ? Et surtout, qui décide ?

C'est le Président de la République qui choisit. Seul. Aucune loi ne l'oblige. Aucune procédure ne l'encadre. C'est son privilège régalien : décider qui entre dans l'immortalité.

Joséphine Baker, panthéonisée en 2021, a été choisie par Emmanuel Macron. Simone Veil, en 2018, aussi. Mais leurs corps ne sont pas toujours là. Parfois, ce ne sont que des cénotaphes — des tombeaux symboliques. Les familles refusent parfois le transfert des corps.

Le Panthéon est une fiction nécessaire. Un théâtre de la mémoire nationale. Et vous êtes dans les coulisses.

Avancez. Les premiers tombeaux sont là.`
      },
      {
        id: "pantheon-6",
        title: "Voltaire vs Rousseau",
        duration: "9 min",
        imageUrl: "https://images.unsplash.com/photo-1568667256531-7d5ac3c41ba2?w=800&q=80",
        text: `Vous entrez dans la première galerie. Et vous les voyez : deux monuments face à face. Voltaire à gauche. Rousseau à droite.

Les deux frères ennemis. Les deux phares des Lumières. Les deux penseurs qui ont changé le monde. Et ils se font face pour l'éternité, dans une confrontation silencieuse.

Approchez-vous de Voltaire d'abord. Le monument a été sculpté par Jean-Antoine Houdon. Voltaire est allongé, enveloppé dans un drap, couronné de lauriers. Mais regardez son visage : il sourit. Un sourire narquois, ironique, voltairien. Même mort, il se moque.

Voltaire meurt en 1778. Mais il n'entre au Panthéon qu'en 1791, quand la Révolution triomphe. Son corps est transféré de nuit, en grande pompe, dans un cortège de torches. On veut honorer l'homme qui a combattu le fanatisme religieux et l'absolutisme.

Face à lui, Jean-Jacques Rousseau. Le monument est plus simple, plus austère. Rousseau est allongé aussi, mais sa main sort du drap et tient une torche. La torche de la vérité. Rousseau, c'est l'homme du Contrat Social, de la volonté générale, de la souveraineté populaire. Sans lui, pas de Révolution.

Il entre au Panthéon en 1794, trois ans après Voltaire. Mais ici commence le mythe : on dit qu'ils se détestaient. Vrai. Rousseau a rompu avec Voltaire en 1760, après des années de querelles philosophiques. Voltaire se moquait du rousseauisme, qu'il trouvait naïf et dangereux. Rousseau accusait Voltaire de cynisme et de superficialité.

Deux visions du monde. Voltaire, c'est la raison ironique, la tolérance, le progrès prudent. Rousseau, c'est l'émotion, la vertu, la rupture radicale. Voltaire rit des hommes. Rousseau croit en eux.

Et aujourd'hui, trois siècles plus tard, on ne sait toujours pas qui a raison.

Restez un moment entre eux deux. Vous êtes au cœur du débat. Le débat qui structure encore notre époque.

Puis passons. D'autres géants nous attendent.`
      },
      {
        id: "pantheon-7",
        title: "Le Caveau des Écrivains",
        duration: "10 min",
        imageUrl: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&q=80",
        text: `Vous êtes maintenant dans la partie la plus célèbre de la crypte. Le Caveau des Écrivains. Ici reposent trois titans : Victor Hugo, Émile Zola, Alexandre Dumas.

Commencez par Victor Hugo. Son cercueil est au centre, massif, sobre. Hugo entre au Panthéon en 1885, dans une apothéose nationale. Deux millions de personnes suivent son cortège dans Paris. Un deuil comme la France n'en avait jamais connu.

Pourquoi un tel amour ? Parce que Hugo incarne la République. Il a combattu Napoléon III, vécu dix-neuf ans en exil, écrit Les Misérables et plaidé pour les pauvres, les enfants, les prostituées, les condamnés. Il est le grand-père moral de la France.

Mais Hugo, c'est aussi un mythe fabriqué. On oublie ses contradictions, ses compromissions, sa vanité. On ne garde que l'icône. C'est le rôle du Panthéon : transformer les hommes en statues.

À sa droite, Émile Zola. Entré au Panthéon en 1908, six ans après sa mort mystérieuse. Zola, c'est l'affaire Dreyfus. Son article "J'accuse" a fait basculer l'opinion. Il a défendu un innocent contre l'armée, l'Église, les nationalistes. Il a risqué sa vie. Il a gagné.

Zola meurt en 1902, asphyxié par les fumées de sa cheminée. Accident ? Peut-être. Ou peut-être pas. On n'a jamais su. Mais son entrée au Panthéon est un triomphe posthume : la victoire de la vérité sur le mensonge.

Et enfin, Alexandre Dumas. Le dernier arrivé, en 2002. Pourquoi si tard ? Parce que Dumas était métis. Fils d'un général noir de la Révolution et petit-fils d'une esclave de Saint-Domingue. Dans la France du XIXe siècle, un Noir ne peut pas être un Grand Homme.

Il faut attendre Jacques Chirac pour que Dumas entre enfin ici. Chirac dit : "Il nous manquait un romancier. Il nous manquait surtout Dumas." Sous-entendu : il nous manquait de reconnaître que la France est diverse.

Le cercueil de Dumas est enveloppé dans un drap bleu, brodé de passages des Trois Mousquetaires. "Un pour tous, tous pour un." Une devise républicaine.

Trois écrivains. Trois combats. Trois manières de servir la France par les mots.

Continuons. Les savants nous attendent.`
      },
      {
        id: "pantheon-8",
        title: "Les Savants : Pierre & Marie Curie",
        duration: "12 min",
        imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
        text: `Vous arrivez maintenant dans une autre partie de la crypte. Ici, ce ne sont plus des écrivains ou des héros militaires. Ce sont des savants. Des scientifiques qui ont changé le monde par la connaissance.

Et au centre, le couple le plus célèbre de la science : Pierre et Marie Curie.

Marie Curie entre au Panthéon en 1995, soixante-et-un ans après sa mort. C'est la première femme honorée pour ses propres mérites — et non comme épouse d'un Grand Homme. François Mitterrand décide de la panthéoniser, avec Pierre, pour réparer une injustice historique.

Approchez-vous du caveau. Regardez. Un détail étrange : le cercueil de Marie est chemisé de plomb. Pourquoi ? Parce que son corps est toujours radioactif. Elle a manipulé le radium pendant des décennies, sans protection. Elle est morte en 1934 d'une leucémie provoquée par l'exposition aux radiations. Et son corps émet encore des radiations aujourd'hui.

C'est beau et terrible à la fois. Marie Curie a littéralement donné sa vie pour la science. Deux prix Nobel. La découverte du polonium et du radium. La radiologie de guerre pour soigner les soldats de 14-18. Une carrière fulgurante, malgré le sexisme de l'Académie des Sciences qui refuse de l'élire.

Pierre Curie, son mari, est mort tragiquement en 1906, écrasé par une voiture à cheval rue Dauphine. Il avait quarante-sept ans. Marie continue seule. Elle devient la première femme professeur à la Sorbonne. Elle refuse de se remarier. Elle dit : "Pierre est dans mon cœur, dans mon travail, partout."

Et maintenant, ils sont réunis ici, pour toujours. Une histoire d'amour et de science.

Autour d'eux, d'autres savants : Marcelin Berthelot, chimiste et homme politique. Paul Langevin, physicien et résistant. Jean Perrin, prix Nobel de physique. Tous ont fait entrer la science au Panthéon, ce temple autrefois réservé aux héros militaires et aux écrivains.

C'est une victoire discrète mais décisive. La République honore aussi l'intelligence. La recherche. La vérité scientifique contre l'obscurantisme.

Prenez le temps de lire les noms gravés sur les murs. Certains vous sont inconnus. Ce n'est pas grave. Ils ont fait leur part. Ils ont servi. Et la République les a reconnus.

Maintenant, remontez. Vous avez fait le tour. Vous avez vu Voltaire et Rousseau se défier. Hugo, Zola et Dumas témoigner. Marie Curie rayonner jusque dans la mort.

Vous avez vu la France racontée par ses morts. Une France idéale, bien sûr. Une fiction. Mais une belle fiction.

En haut, dans la nef, le Pendule de Foucault continue de se balancer. La Terre tourne. Le temps passe. Et nous, nous restons, un instant, à honorer ceux qui ont cru que l'humanité pouvait s'élever.

Fin de la visite. Sortez maintenant. Paris vous attend.`
      }
    ]
  }
];
