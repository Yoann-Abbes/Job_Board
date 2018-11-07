-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Dim 30 Septembre 2018 à 18:19
-- Version du serveur :  5.7.23-0ubuntu0.18.04.1
-- Version de PHP :  7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `Job_board`
--

-- --------------------------------------------------------

--
-- Structure de la table `ad`
--

CREATE TABLE `ad` (
  `ad_id` int(11) NOT NULL,
  `ad_title` text CHARACTER SET utf8 NOT NULL,
  `ad_comp_id` int(11) DEFAULT NULL,
  `ad_description` longtext CHARACTER SET utf8
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Contenu de la table `ad`
--

INSERT INTO `ad` (`ad_id`, `ad_title`, `ad_comp_id`, `ad_description`) VALUES
(7, 'Stagiaire assistant ingÃ©nieur Etudes techniques H/F', 1, 'Informations gÃ©nÃ©rales EntitÃ© de rattachement Acteur global de la construction et des services, Bouygues Construction conÃ§oit, rÃ©alise et exploite des ouvrages qui amÃ©liorent au quotidien le cadre de vie et de travail : bÃ¢timents publics et privÃ©s, infrastructures de transport, rÃ©seaux d\'Ã©nergie et de communication.  Leaders de la construction durable, le Groupe et ses 50 000 collaborateurs s\'engagent ainsi sur le long terme auprÃ¨s de leurs clients pour les aider Ã  bÃ¢tir une vie meilleure.   Bouygues Travaux Publics est spÃ©cialiste des travaux souterrains, des projets de gÃ©nie civil complexes, des ouvrages d\'art ainsi que des infrastructures routiÃ¨res, de transports en commun et portuaires. Notre expertise s\'exerce dans le montage d\'affaires, le management de grands projets et la maÃ®trise de techniques trÃ¨s pointues.  Fortement dÃ©ployÃ©s Ã  l\'international, nous nous appuyons sur des Ã©quipes multinationales pour proposer Ã  nos clients des solutions alliant innovation, respect des dÃ©lais et prise en compte des critÃ¨res du dÃ©veloppement durable.  Nous recrutons des hommes et des femmes qui constitueront notre richesse et nous accompagneront dans notre croissance.   Bouygues Travaux Publics s\'engage en faveur de la diversitÃ© et est ouvert Ã  tous les talents. Nous encourageons toute personne possÃ©dant les compÃ©tences mentionnÃ©es dans le descriptif de l\'annonce Ã  soumettre sa candidature. Si des amÃ©nagements de poste sont nÃ©cessaires, ils seront Ã©voquÃ©s lors de l\'entretien de recrutement.    Poste Ã  pourvoir le 01/10/2018  Description du poste MÃ©tier Etude et Conception - Etudes techniques  IntitulÃ© du poste STAGIAIRE Assistant IngÃ©nieur Etudes techniques H/F  Contrat Stage  Temps de travail Temps complet  DurÃ©e du contrat 4 Ã  6 mois  Description de la mission Vous intÃ©grez notre Ã©quipe de dÃ©veloppement spÃ©cialisÃ©e dans les systÃ¨mes embarquÃ©s sur les tunneliers.  Vous participerez aux tests et Ã  la mise au point de nos systÃ¨mes et plus particuliÃ¨rement sur l\'alimentation sans fil d\'un systÃ¨me de visÃ©e.     Profil ElÃ¨ve ingÃ©nieur gÃ©nÃ©raliste 3Ã¨me ou 4Ã¨me annÃ©e.  Connaissances Informatiques :    programmation C++,  VB (web et bases de donnÃ©es peuvent Ãªtre un +) Connaissance de SolidWorks  Niveau d\'expÃ©rience Etudiant  Localisation du poste Localisation du poste Europe, France, Ile-de-France, Yvelines (78)  Lieu 1 avenue EugÃ¨ne Freyssinet 78280 Guyancourt CritÃ¨res candidat Niveau d\'Ã©tudes min. requis BAC+4/5'),
(10, '(H/F) Stage automatisation de validation protocole cryptÃ© (6 mois)', 2, 'Company description Le Groupe Bosch est un important fournisseur mondial de technologies et de services. Avec un effectif dâ€™environ 402 000 collaborateurs dans le monde, le Groupe Bosch a rÃ©alisÃ© en 2017 un chiffre dâ€™affaires de 78,1 milliards dâ€™euros. Ses activitÃ©s sont rÃ©parties en quatre secteurs : Solutions pour la mobilitÃ©, Techniques industrielles, Biens de consommation et Techniques pour les Ã©nergies et les bÃ¢timents. En tant que sociÃ©tÃ© leader dans le domaine de lâ€™Internet des objets (IoT), Bosch propose des solutions innovantes pour les maisons intelligentes, les villes intelligentes, la mobilitÃ© connectÃ©e et lâ€™industrie connectÃ©e.  Avec 23 sites en France, dont 11 ont une activitÃ© Recherche & DÃ©veloppement, toutes les activitÃ©s du Groupe sont aujourdâ€™hui reprÃ©sentÃ©es dans lâ€™Hexagone. En 2017, avec un effectif dâ€™environ 7 500 personnes, Bosch France a rÃ©alisÃ© un volume dâ€™affaires de plus de 3,2 milliards dâ€™euros sur le territoire national.  Job description DÃ©finition, DÃ©veloppement et mise en place dâ€™un plan de test automatisÃ© pour valider lâ€™architecture CAN FD (flexible data rate) et la messagerie cryptÃ©e MAC/ARC (Message Authentification Code / Anti-Replay Counter) dâ€™un calculateur de chaine de traction.  Objectifs de lâ€™Ã©tude  - DÃ©veloppement dâ€™un test incluant la simulation de trame CAN avec sÃ©curisation / clÃ© de cryptage des trames.  - Mise en place du test temps rÃ©el sur banc HIL (Hardware In the Loop) en sâ€™appuyant sur les technologies dâ€™integration continue (server jenkinsâ€¦)  TÃ¢ches confiÃ©es  - DÃ©veloppement du test sur lâ€™outil de test automatique  - ParamÃ©trage automatique du test depuis les spÃ©cifications client  - DÃ©ploiement du test sur les projets en cours  Qualifications Niveau dâ€™Ã©tudes : Bac +5 (PFE)  SpÃ©cialitÃ© / Dominante : SystÃ¨mes embarquÃ©s  Langues : Anglais (Bon niveau)  QualitÃ©s recherchÃ©es  Curieux, autonome, rigoureux et avec des capacitÃ©s dâ€™adaptation et de communication, aime Ã  travailler dans un contexte international  Outils: Script (Python), Bus CAN FD, Banc HIL, AUTOSAR MAC/ARC, XML/ARXML, server Jenkins, groovy, artefactory'),
(11, 'Chef de projet - Coordination projets IT H/F', 3, 'Entreprise :  VINCI Energies, accÃ©lÃ©rateur de la transformation Ã©nergÃ©tique et digitale, rÃ©alise 10,8 Milliards d\'euros de CA, avec 69 400 collaborateurs prÃ©sents dans 53 pays.  VINCI Energies SystÃ¨mes d\'Information (VESI), est le chef d\'orchestre des outils informatiques, de communication et de gestion du Groupe VINCI Energies. Au service des mÃ©tiers, VESI est porteur dâ€™innovation dans la transformation de nos mÃ©tiers et de nos modes de travail.   Nous accompagnons le Groupe dans lâ€™adoption de nouvelles solutions crÃ©atives, innovantes et ambitieuses pour rÃ©pondre aux enjeux stratÃ©giques de demain : Applications (S/4HANA), Business Intelligence, Digitalisation, MobilitÃ©, Intelligence artificielle, Plateformes technologiques, Change managementâ€¦.  Mission :  Nous recherchons 13 Ã©tudiants en prÃ©-embauche pour la Direction de la Transformation afin d\'accompagner nos projets internationaux de dÃ©ploiement et de coordination des projets IT en France et Ã  lâ€™international, ainsi que la Conduite du Changement dans ces domaines :  Transformation digitale Change Management Croissance externe Coordination/Gestion de projets IT SÃ©curitÃ© des SI Animation du rÃ©seau IT Selon votre Ã©quipe, vous aurez lâ€™opportunitÃ© de :   Participer aux comitÃ©s de prises de dÃ©cision, Ã  la stratÃ©gie de dÃ©ploiement et Ã  la coordination des projets RÃ©aliser des audits IT Accompagner la transformation IT Mettre en place des solutions innovantes de communication Etudier / Tester des solutions digitales et des mÃ©thodologies de travail collaboratif sur des sujets diversifiÃ©s Accompagner la mise en place du Change Management Animer des ateliers de co-design et des sessions de sensibilisation aux bonnes pratiques IT auprÃ¨s des diffÃ©rentes Business Unit du Groupe VINCI Energies Mettre en place une dÃ©marche dâ€™amÃ©lioration continue (lean management) des services IT RÃ©aliser des livrables de communications impactants (vidÃ©os, posts sur les rÃ©seaux sociaux, â€¦) Des dÃ©placements nationaux et internationaux sont Ã  prÃ©voir.    Profil recherchÃ© :  Formation Bac + 5, Ecole de commerce, d\'ingÃ©nieur ou UniversitÃ© Forte appÃ©tence pour les sujets IT  Aisance relationnelle exigÃ©e  Anglais courant indispensable  MaÃ®trise de Microsoft Office  QualitÃ©s personnelles : rigueur, capacitÃ© de synthÃ¨se, fortes aptitudes Ã  la communication Ã©crite et orale, esprit d\'Ã©quipe, capacitÃ© Ã  convaincre, sens de lâ€™innovation Selon le poste, une expÃ©rience est demandÃ©e dans le domaine:   Gestion de projet IT et mÃ©thodologie PMO CybersÃ©curitÃ© Design / graphisme Informatique: compÃ©tences techniques gÃ©nÃ©rales (environnement bureautique Microsoft, rÃ©seau, poste de travail, antivirus, messagerie, Active Directory) Communication: capacitÃ© Ã  vulgariser des contenus techniques  Formation et communication Serait un atout: une expÃ©rience dans lâ€™animation de session de sensibilisation/formation, une expÃ©rience dans un contexte international, la connaissance des outils PowerQuery, PowerBI, et SAC'),
(12, 'Stage - Consultant Change Management (H/F)', 4, 'Descriptif de la societÃ© :   Avec plus de 190 000 collaborateurs, Capgemini est prÃ©sent dans plus de 40 pays et cÃ©lÃ¨bre son cinquantiÃ¨me anniversaire en 2017. Le Groupe est l\'un des leaders mondiaux du conseil, des services informatiques et de l\'infogÃ©rance et a rÃ©alisÃ© en 2016 un chiffre d\'affaires de 12,5 milliards d\'euros. Avec ses clients, Capgemini conÃ§oit et met en Å“uvre les solutions business, technologiques et digitales qui correspondent Ã  leurs besoins et leur apportent innovation et compÃ©titivitÃ©. ProfondÃ©ment multiculturel, Capgemini revendique un style de travail qui lui est propre, la Â« Collaborative Business ExperienceTM Â», et s\'appuie sur un mode de production mondialisÃ©, le Â« RightshoreÂ® Â». Plus d\'informations sur : www.capgemini.com    Description du poste :      Lâ€™Ã©quipe Business Technology & Transformation de Capgemini, spÃ©cialisÃ©e en Conseil OpÃ©rationnel, accompagne ses clients grands comptes dans les secteurs du service, de lâ€™aÃ©ronautique, de la dÃ©fense, de la banque / assurance, de lâ€™industrie.   Son offre de services se dÃ©cline sur quatre axes : Scoping & Business Transformation (schÃ©ma directeur, cadrage, business case), Business Process Improvement, Change Efficiency et Programme Acceleration.       Description de la mission       Tu intÃ¨greras la CommunautÃ© Change Management et tu interviendras sur les sujets suivants : - le renforcement des mÃ©thodes et outils mis en oeuvre - les Ã©volutions des savoir-faire avec lâ€™utilisation de nouvelles technologies digitales - la gestion de l\'entitÃ© (organisation, administration, animation des chantiers,...) - les actions de communication, de mobilisation et de formation auprÃ¨s du client - la dÃ©finition, lâ€™amÃ©lioration et le dÃ©ploiement des indicateurs de suivi dâ€™avancement            Profil recherchÃ© :  Profil       Issu dâ€™une Ã©cole de commerce ou dâ€™une universitÃ©, tu bÃ©nÃ©ficies de facilitÃ©s dans les relations humaines, dâ€™un sens de lâ€™initiative et tu apprecies le travail en Ã©quipe.   De bonnes capacitÃ©s de communication, dâ€™analyse et de rÃ©daction sont apprÃ©ciÃ©es. Ton anglais est courant.   GrÃ¢ce Ã  une politique dynamique de formation et un management de proximitÃ©, nous te donnons les moyens dâ€™Ã©voluer vers une carriÃ¨re Ã  la hauteur de tes ambitions.     Tu tâ€™interroges sur notre processus de recrutement, nos missions, nos projets, lâ€™ambiance ou encore notre parcours dâ€™intÃ©gration clique ICI https://www.capgemini.com/fr-fr/carrieres/etudiants-jeune-diplomes/   Tous nos stages sont proposÃ©s en prÃ©-embauche !  Ce sont nos stagiaires qui en parlent le mieux, dÃ©couvre leurs avis : https://choosemycompany.com/fr/recrutement/capgemini/avis-des-stagiaires   Enfin, en avance tu veux voir Ã  quoi ressemble un procesus de recrutement, regarde vite cette vidÃ©o  https://www.capgemini.com/fr-fr/carrieres/le-recrutement-et-l-integration-chez-capgemini/       Tu peux postuler directement en envoyant ta candidature Ã  l\'adresse suivante :  recrutement.ts.fr@capgemini.com    Niveau d\'Ã©tudes : Bac +5  ExpÃ©rience professionnelle : InfÃ©rieur Ã  6 mois  DÃ©but du contrat : 28-09-18  DurÃ©e du contrat : De 4 Ã  6 mois'),
(14, 'Stage - Developpeur Full Stack (H/F)', 4, 'Descriptif de la societÃ© :   Avec plus de 190 000 collaborateurs, Capgemini est prÃ©sent dans plus de 40 pays et cÃ©lÃ¨bre son cinquantiÃ¨me anniversaire en 2017. Le Groupe est l\'un des leaders mondiaux du conseil, des services informatiques et de l\'infogÃ©rance et a rÃ©alisÃ© en 2016 un chiffre d\'affaires de 12,5 milliards d\'euros. Avec ses clients, Capgemini conÃ§oit et met en Å“uvre les solutions business, technologiques et digitales qui correspondent Ã  leurs besoins et leur apportent innovation et compÃ©titivitÃ©. ProfondÃ©ment multiculturel, Capgemini revendique un style de travail qui lui est propre, la Â« Collaborative Business ExperienceTM Â», et s\'appuie sur un mode de production mondialisÃ©, le Â« RightshoreÂ® Â». Plus d\'informations sur : www.capgemini.com    Description du poste :      Pour rÃ©pondre aux attentes de ses clients mobiles et connectÃ©s, Capgemini accompagne les leaders du secteur de la Finance pour leur permettre de proposer de nouveaux usages et dâ€™inventer la banque de demain.        IntÃ©grÃ© Ã  une Ã©quipe agile qui intervient sur le dÃ©ploiement de nouvelles applications pour un grand compte de la banque, tu praticiperas Ã  :  - la conception technique : rÃ©daction des spÃ©cifications, analyse des solutions...  - le dÃ©veloppement de la solution dans les technologies objets Java JEE, spring, MVC...  - le dÃ©veloppement dâ€™API complexe Rest, Soap              Profil recherchÃ© :  De formation Bac+5 en informatique, tu : - es un vÃ©ritable touche-Ã -tout et avez dÃ©jÃ  fait vos armes autant sur le back que le front  - les dÃ©fis techniques te passionnent  - parles anglais.        Tu rejoindras notre communautÃ© de young professionals pour developper ton rÃ©seau  et participer Ã  diffÃ©rentes Ã©vÃ¨nements (afterworks, activitÃ©s sportivesâ€¦)        Tu tâ€™interroges sur notre processus de recrutement, nos missions, nos projets, lâ€™ambiance ou encore notre parcours dâ€™intÃ©gration clique ICI https://www.capgemini.com/fr-fr/carrieres/etudiants-jeune-diplomes/       Tous nos stages sont proposÃ©s en prÃ©-embauche !  Ce sont nos stagiaires qui en parlent le mieux, dÃ©couvre leurs avis : https://choosemycompany.com/fr/recrutement/capgemini/avis-des-stagiaires       Enfin, en avance tu veux voir Ã  quoi ressemble un procesus de recrutement, regarde vite cette vidÃ©o  https://www.capgemini.com/fr-fr/carrieres/le-recrutement-et-l-integration-chez-capgemini/           Tu peux postuler directement en envoyant ta candidature Ã  l\'adresse suivante : recrutement.ts.fr@capgemini.com        Niveau d\'Ã©tudes : Bac +5  ExpÃ©rience professionnelle : InfÃ©rieur Ã  6 mois  DÃ©but du contrat : 28-09-18  DurÃ©e du contrat : De 4 Ã  6 mois');

-- --------------------------------------------------------

--
-- Structure de la table `apply`
--

CREATE TABLE `apply` (
  `apply_id` int(11) NOT NULL,
  `apply_comp_id` int(11) DEFAULT NULL,
  `apply_people_id` int(11) NOT NULL,
  `apply_message` text COLLATE latin1_general_ci NOT NULL,
  `apply_ad_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Contenu de la table `apply`
--

INSERT INTO `apply` (`apply_id`, `apply_comp_id`, `apply_people_id`, `apply_message`, `apply_ad_id`) VALUES
(17, 4, 37, 'AprÃ¨s une expÃ©rience dans le domaine...prÃ©cisez ici le domaine de vos prÃ©cÃ©dentes expÃ©riences (job, stage ou emploi) en Ã©tant synthÃ©tique et bref (il s\'agit des premiÃ¨res lignes de texte de votre lettre : il faut accrocher le lecteur pour qu\'il soit tentÃ© de lire la suite) ... je recherche un poste en... mettre ici le nom du poste recherchÃ© / secteur activitÃ© visÃ© ainsi je me permets de vous adresser ma candidature au poste de ....   Ma formation et mes expÃ©riences professionnelles m\'ont permis... dÃ©taillez ici les expÃ©riences ou les compÃ©tences qui vous concernent, que vous avez dÃ©jÃ  prÃ©sentÃ©es rapidement dans votre CV... Mais ne dÃ©taillez ici que une ou deux expÃ©riences ou compÃ©tences en relation directe avec le poste qui intÃ©resseront le recruteur.   IntÃ©grer la sociÃ©tÃ© XYZ au poste de... m\'attire tout particuliÃ¨rement pour... reprendre les missions de l\'offre d\'emploi et argumenter pourquoi celles-ci vous attirent et quels points forts de votre candidature vous permettront de rÃ©ussir dans ces missions et donc dans ce poste.  Je me tiens Ã  votre entiÃ¨re disposition pour tous renseignements complÃ©mentaires. Je vous prie, Madame, Monsieur, d\'agrÃ©er l\'expression de mes respectueuses salutations.', 14),
(18, 2, 39, 'AprÃ¨s une expÃ©rience dans le domaine...prÃ©cisez ici le domaine de vos prÃ©cÃ©dentes expÃ©riences (job, stage ou emploi) en Ã©tant synthÃ©tique et bref (il s\'agit des premiÃ¨res lignes de texte de votre lettre : il faut accrocher le lecteur pour qu\'il soit tentÃ© de lire la suite) ... je recherche un poste en... mettre ici le nom du poste recherchÃ© / secteur activitÃ© visÃ© ainsi je me permets de vous adresser ma candidature au poste de ....   Ma formation et mes expÃ©riences professionnelles m\'ont permis... dÃ©taillez ici les expÃ©riences ou les compÃ©tences qui vous concernent, que vous avez dÃ©jÃ  prÃ©sentÃ©es rapidement dans votre CV... Mais ne dÃ©taillez ici que une ou deux expÃ©riences ou compÃ©tences en relation directe avec le poste qui intÃ©resseront le recruteur.   IntÃ©grer la sociÃ©tÃ© XYZ au poste de... m\'attire tout particuliÃ¨rement pour... reprendre les missions de l\'offre d\'emploi et argumenter pourquoi celles-ci vous attirent et quels points forts de votre candidature vous permettront de rÃ©ussir dans ces missions et donc dans ce poste.  Je me tiens Ã  votre entiÃ¨re disposition pour tous renseignements complÃ©mentaires. Je vous prie, Madame, Monsieur, d\'agrÃ©er l\'expression de mes respectueuses salutations.', 10),
(19, 1, 39, 'AprÃ¨s une expÃ©rience dans le domaine...prÃ©cisez ici le domaine de vos prÃ©cÃ©dentes expÃ©riences (job, stage ou emploi) en Ã©tant synthÃ©tique et bref (il s\'agit des premiÃ¨res lignes de texte de votre lettre : il faut accrocher le lecteur pour qu\'il soit tentÃ© de lire la suite) ... je recherche un poste en... mettre ici le nom du poste recherchÃ© / secteur activitÃ© visÃ© ainsi je me permets de vous adresser ma candidature au poste de ....   Ma formation et mes expÃ©riences professionnelles m\'ont permis... dÃ©taillez ici les expÃ©riences ou les compÃ©tences qui vous concernent, que vous avez dÃ©jÃ  prÃ©sentÃ©es rapidement dans votre CV... Mais ne dÃ©taillez ici que une ou deux expÃ©riences ou compÃ©tences en relation directe avec le poste qui intÃ©resseront le recruteur.   IntÃ©grer la sociÃ©tÃ© XYZ au poste de... m\'attire tout particuliÃ¨rement pour... reprendre les missions de l\'offre d\'emploi et argumenter pourquoi celles-ci vous attirent et quels points forts de votre candidature vous permettront de rÃ©ussir dans ces missions et donc dans ce poste.  Je me tiens Ã  votre entiÃ¨re disposition pour tous renseignements complÃ©mentaires. Je vous prie, Madame, Monsieur, d\'agrÃ©er l\'expression de mes respectueuses salutations.', 7),
(20, 1, 39, 'AprÃ¨s une expÃ©rience dans le domaine...prÃ©cisez ici le domaine de vos prÃ©cÃ©dentes expÃ©riences (job, stage ou emploi) en Ã©tant synthÃ©tique et bref (il s\'agit des premiÃ¨res lignes de texte de votre lettre : il faut accrocher le lecteur pour qu\'il soit tentÃ© de lire la suite) ... je recherche un poste en... mettre ici le nom du poste recherchÃ© / secteur activitÃ© visÃ© ainsi je me permets de vous adresser ma candidature au poste de ....   Ma formation et mes expÃ©riences professionnelles m\'ont permis... dÃ©taillez ici les expÃ©riences ou les compÃ©tences qui vous concernent, que vous avez dÃ©jÃ  prÃ©sentÃ©es rapidement dans votre CV... Mais ne dÃ©taillez ici que une ou deux expÃ©riences ou compÃ©tences en relation directe avec le poste qui intÃ©resseront le recruteur.   IntÃ©grer la sociÃ©tÃ© XYZ au poste de... m\'attire tout particuliÃ¨rement pour... reprendre les missions de l\'offre d\'emploi et argumenter pourquoi celles-ci vous attirent et quels points forts de votre candidature vous permettront de rÃ©ussir dans ces missions et donc dans ce poste.  Je me tiens Ã  votre entiÃ¨re disposition pour tous renseignements complÃ©mentaires. Je vous prie, Madame, Monsieur, d\'agrÃ©er l\'expression de mes respectueuses salutations.', 10),
(21, 41, 41, 'AprÃ¨s une expÃ©rience dans le domaine...prÃ©cisez ici le domaine de vos prÃ©cÃ©dentes expÃ©riences (job, stage ou emploi) en Ã©tant synthÃ©tique et bref (il s\'agit des premiÃ¨res lignes de texte de votre lettre : il faut accrocher le lecteur pour qu\'il soit tentÃ© de lire la suite) ... je recherche un poste en... mettre ici le nom du poste recherchÃ© / secteur activitÃ© visÃ© ainsi je me permets de vous adresser ma candidature au poste de ....   Ma formation et mes expÃ©riences professionnelles m\'ont permis... dÃ©taillez ici les expÃ©riences ou les compÃ©tences qui vous concernent, que vous avez dÃ©jÃ  prÃ©sentÃ©es rapidement dans votre CV... Mais ne dÃ©taillez ici que une ou deux expÃ©riences ou compÃ©tences en relation directe avec le poste qui intÃ©resseront le recruteur.   IntÃ©grer la sociÃ©tÃ© XYZ au poste de... m\'attire tout particuliÃ¨rement pour... reprendre les missions de l\'offre d\'emploi et argumenter pourquoi celles-ci vous attirent et quels points forts de votre candidature vous permettront de rÃ©ussir dans ces missions et donc dans ce poste.  Je me tiens Ã  votre entiÃ¨re disposition pour tous renseignements complÃ©mentaires. Je vous prie, Madame, Monsieur, d\'agrÃ©er l\'expression de mes respectueuses salutations.', 41),
(45, 1, 56, 'JE veux travailler', 7),
(46, 1, 60, 'je veux du travail ta race', 7),
(47, 1, 56, 'blablabla', 7),
(48, 1, 56, 'zegaergerga', 7),
(49, 1, 56, 'ezfefgeargaer', 7),
(50, 1, 56, 'zefzefzefzf', 7),
(51, 1, 56, 'zefzfazefaz', 7),
(52, 1, 56, 'bla', 7),
(53, 1, 56, 'ezfzefz', 7),
(54, 1, 56, 'ergerge', 7),
(55, 1, 56, 'ezfzefz', 7),
(56, 1, 56, 'zferfer', 7),
(57, 1, 56, 'zefezfer', 7),
(58, 1, 56, 'refer', 7),
(59, 1, 56, 'rferfear', 7),
(60, 1, 56, 'ergerger', 7),
(61, 1, 56, 'ergeargear', 7),
(62, 1, 56, 'ergergeg', 7),
(63, 1, 56, 'ergergerg', 7),
(64, 1, 56, 'gergergear', 7),
(65, 1, 56, 'ergergerg', 7),
(66, 1, 56, 'ergeargearg', 7),
(67, 1, 56, 'ergerger', 7),
(68, 1, 56, 'jgjjgkugjuugjgujgjy', 7);

-- --------------------------------------------------------

--
-- Structure de la table `comp`
--

CREATE TABLE `comp` (
  `comp_id` int(11) NOT NULL,
  `comp_name` text CHARACTER SET utf8 NOT NULL,
  `comp_address` text CHARACTER SET utf8 NOT NULL,
  `comp_email` text COLLATE latin1_general_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Contenu de la table `comp`
--

INSERT INTO `comp` (`comp_id`, `comp_name`, `comp_address`, `comp_email`) VALUES
(1, 'Bouygues Construction', 'Yvelines (France)', 'yoann.abbes@gmail.com'),
(2, 'Bosh', 'Saint-Ouen (France)', 'berthier.est@gmail.com'),
(3, 'VINCI Energies', 'Saint-Denis (France)', 'yoann.abbes@gmail.com'),
(4, 'Capgemini', 'Toulouse (France)', 'berthier.est@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `people`
--

CREATE TABLE `people` (
  `people_id` int(11) NOT NULL,
  `people_username` text,
  `people_password` text,
  `people_lastname` text NOT NULL,
  `people_firstname` text NOT NULL,
  `people_email` text CHARACTER SET utf32 NOT NULL,
  `people_number` int(11) NOT NULL,
  `people_admin` tinyint(1) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Contenu de la table `people`
--

INSERT INTO `people` (`people_id`, `people_username`, `people_password`, `people_lastname`, `people_firstname`, `people_email`, `people_number`, `people_admin`) VALUES
(57, 'Yoyo', '098f6bcd4621d373cade4e832627b4f6', 'Abbes', 'Yoann', 'yoann.abbes@gmail.com', 987967687, 0),
(58, 'este', '0c4e3042796e38b6baf971a13bea8f6c', 'este', 'este', 'este@ge.com', 5, 0),
(48, 'Yoann', '098f6bcd4621d373cade4e832627b4f6', 'Abbes', 'Yoann', 'yoann.abbes@gmail.com', 980707898, 0),
(49, 'lol', '9cdfb439c7876e703e307864c9167a15', 'ann', 'Yo', 'lol@lol.com', 8798, 0),
(50, 'lol', '9cdfb439c7876e703e307864c9167a15', 'Yo', 'Yo', 'lol@lol.com', 980708, 0),
(51, 'hello', '5d41402abc4b2a76b9719d911017c592', 'hello', 'hello', 'hello@hello.co', 7889, 0),
(60, 'test', '098f6bcd4621d373cade4e832627b4f6', 'test', 'test42', 'test@test.com', 436456546, 0),
(56, 'esteban', '098f6bcd4621d373cade4e832627b4f6', 'Berthier', 'Estebann', 'esteban.berthier@epitech.eu', 443068546, 1);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `ad`
--
ALTER TABLE `ad`
  ADD PRIMARY KEY (`ad_id`),
  ADD KEY `Index` (`ad_id`);

--
-- Index pour la table `apply`
--
ALTER TABLE `apply`
  ADD PRIMARY KEY (`apply_id`);

--
-- Index pour la table `comp`
--
ALTER TABLE `comp`
  ADD PRIMARY KEY (`comp_id`),
  ADD KEY `Index` (`comp_id`);

--
-- Index pour la table `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`people_id`),
  ADD KEY `I` (`people_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `ad`
--
ALTER TABLE `ad`
  MODIFY `ad_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT pour la table `apply`
--
ALTER TABLE `apply`
  MODIFY `apply_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
--
-- AUTO_INCREMENT pour la table `comp`
--
ALTER TABLE `comp`
  MODIFY `comp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT pour la table `people`
--
ALTER TABLE `people`
  MODIFY `people_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
