if(window.location.hash) {
    var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
    const experiences = [
        {
            "title": "disney",
            "img": "disney.jpg",
            "post": "Technicien support Hotline chez DISNEY",
            "date": "Novembre 2019 à Janvier 2020",
            "environment": "AD pour la gestion des comptes, Service Manager 7, Windows 7 et 10, BIG-IP et Mobile Passecomme VPN, BOMGAR pour la prise en main, MacOs et IPhone, Smartphone",
            "taf": [
                "Paramétrage et activation du compte MyID : c’est un système d’authentification utilisé pour accéder à la plupart des applications, sites Web et services de The Walt Disney Company.",
                "Demande des Credentials nécessaires à l’activation de MyID",
                "Communication Accès code",
                "Paramétrage BIG-IPou MOBILE PASSVPN pour la connexion à distance ou télétravail",
                "Gestion des comptes utilisateurs et des accès sur l’Active Directory : Déblocage de compte réinitialisations des mots de passes, vérification des affectations de groupe.",
                "EnrôlementMyID via Smartphone ou IPhone pour se connecter à distance et Outlook pour consultation des mails"
            ]
        },
        {
            "title": "ecolab",
            "img": "ecolab.jpg",
            "post": "Technicien Support Informatique niveau 2 chez ECOLAB",
            "date": "Juin / Octobre 2019",
            "environment": "Environnement technique :Outil ticketing ServiceNow, BOMGAR pour la prise en main à distance, Skype Entreprise, SCCM (Software Center) pour l’installation des applications et logiciels, Pulse comme VPN ",
            "taf": [
                "Réceptionner les sollicitations des utilisateurs via plateforme outil de ticketing, mail, téléphone, skype",
                "Assurer l’assistance sur les problèmes d’utilisation des logiciels,",
                "Assurer l’assistance sur le poste de travail (connexion wifi, connexion VPN, diagnostic poste de travail),",
                "Diagnostiquer et résoudre les problèmes rencontrés",
                "Gestion des comptes utilisateurs et des accès sur l’Active Directory : création, activation et désactivation, droits d’administrateur local, utilisation de l’Active Directory pour la gestion des groupes",
                "Gestion des boites de messagerie Outlook 2013 et2016 avec office 365",
                "Gestion OneDrive",
                "Préparation des postes des nouveaux utilisateurs",
                "Mastérisation des postes",
                "Installation et configuration des nouveaux postes avec les profils utilisateurs",
                "Sauvegarde et Restauration des données et installations des applications métiers",
                "Utilisation de SCCM (system center configuration manager) pour l’installation des applications",
                "Configuration et paramétrage des imprimantes",
                "Assistance et conseils aux utilisateurs",
                "Création ou mise à jour la documentation dans le cadre de l’amélioration continu de la satisfaction des utilisateurs"
            ]
        },
        {
            "title": "idex",
            "img": "idex.jpg",
            "post": "Technicien déploiement et migration vers Windows10 chez IDEX pour SCC",
            "date": "25 Mars / 14 Avril 2019",
            "environment": "Gestion parc et installation des packages surBMC, utilisation de l’AD pour la gestion des groupes et droits d’utilisateurs sur Windows server 2008R2",
            "taf": [
                "Migration de Windows 7 vers Windows 10",
                "Mastérisation des postes",
                "Préparation des postes utilisateurs",
                "Sauvegardes des données et applicationsmétiers",
                "Installation et configuration des nouveaux postes",
                "Restauration des données et installations des applications métiers",
                "Configuration et paramétrage des imprimantes",
                "Assistance et conseils aux utilisateurs"
            ]
        },
        {
            "title": "credit-agricole",
            "img": "credit-agricole-idf.jpg",
            "post": "Technicien déploiement chez Microstore pour le CREDIT AGRICOLE",
            "date": "18 Février / 20 Mars 2019",
            "environment": "Gestion parc et installation des packages surBMC, utilisation de l’AD pour la gestion des groupes et droits d’utilisateurs sur Windows server 2008R2",
            "taf": [
                "Migration de Windows 7 vers Windows 10",
                "Préparation des postes utilisateurs",
                "Sauvegardes des données et applications métiers",
                "Installation et configuration des nouveaux postes",
                "Restauration des données et installations des applications métiers",
                "Assistance et conseils aux utilisateurs"
            ]
        },
        {
            "title": "spie",
            "img": "spie.jpg",
            "post": "Support de proximité-Helpdesk chez Spie pour GUSTAVE ROUSSY",
            "date": "17 Décembre /18 Février 2019",
            "environment": "Outil de ticketing Ivanti avec landesk, Messagerie Outlook 2013, 2016 Windows 7et 10, Windows server 2012R2",
            "taf": [
                "Gestion des sollicitations par téléphone et mail",
                "Diagnostic et qualification des incidents, création des tickets",
                "D’assurerun premier niveau de diagnostic permettant de confirmer l*impact de l*incident, de déclencher les équipes support appropriées et les communications ou escalades nécessaires",
                "Assistance et dépannage utilisateurs",
                "Participation à l’installation/support matériels et logiciels (postes de travail, logiciels divers)",
                "Gestion des applications métiers sous Citrix XenApp",
                "Prendre en charge et traiter les demandes d'interventions techniques des utilisateurs, dans le respect des procédures. Escalade des incidents non résolus",
                "Gestion des comptes utilisateurs et des accès",
                "Gestion des boites de messagerie (support - quotas - configuration -listes de diffusion)",
                "Gestion des partages de fichiers (support - accessibilité - espace disque...)",
                "Gestion des imprimantes et copieurs (support matériel - gestion des consommables)"
            ]
        },
        {
            "title": "finances",
            "img": "finances.jpg",
            "post": "Technicien Helpdesk avec SCC Ministère de Finances (Paris 13)",
            "date": "Novembre/ 06 Décembre 2018",
            "environment": "Environnement technique : Windows7 etv10 Service Manager 9, MessagerieOutlook 2013",
            "taf": [
                "Gestion des sollicitations par téléphone et mail",
                "Diagnostic et qualification des incidents, création des tickets",
                "D’assurer un 1er niveau de diagnostic permettant de confirmer l*impact de l*incident, de déclencher les support appropriées et les communications ou escalades nécessaires",
                "Clôture des dossiers sans escalade en cas de résolution au niveau 1",
                "Suivi du blacklog"
            ]
        },
        {
            "title": "caisse",
            "img": "cncmm.jpg",
            "post": "CAISSE CENTRALE DU CREDIT MUTUEL (CNCM), 75017 Paris Technicien support de proximité et de déploiement",
            "date": "Septembre / Octobre 2018",
            "environment": "Stage dans le cabinet C2K Expert Conseil à Torcy et à Saint Quentin (02100)",
            "taf": [
                "Assistances aux utilisateurs sur problèmes matériels et logicie",
                "Sauvegarde et restauration des données utilisateurs après changement matériels",
                "Déploiement matériels et logiciels pour nouveaux arrivants et assistance",
                "Gestion du parc informatique",
                "Configuration téléphone fixe VOIP"
            ]
        }
    ];

    var count = 0;
    var position = 0;

    for(var i = 0; i<experiences.length; i++){
        if (experiences[i].title === hash){
            count++;
            position = i;
            break;
        }
    }
    
    if(count > 0){
        var experience = experiences[position];
        document.querySelector(".single-blog-image").innerHTML=`<img class="radius" src="img/experiences/${experience.img}" alt="">`;
        document.querySelector(".single-blog-title").innerHTML=`${experience.post}`;
        document.querySelector(".date").innerHTML = `${experience.date}`;
        document.querySelector(".environment").innerHTML=`<span>Environnement technique :</span> ${experience.environment}`;
        var taf = "";
        for (var j = 0; j < experience.taf.length; j++) {
            taf += `<li><a href="#">${experience.taf[j]}</a></li>`;
        }
        document.querySelector(".categories .top_30").innerHTML = taf;

        var other = "";
        for(var k = 0; k<experiences.length; k++){
            if (experiences[k].title !== hash){
               other += `
                        <li>
                            <a href="single-experiences.html#${experiences[k].title}">
                                <h4 class="title">${experiences[k].post}</h4>
                                <span>${experiences[k].date}</span>
                            </a>
                        </li>
               `;
            }
        }
        document.querySelector(".recent-post .top_15").innerHTML = other;
    } else {
      window.location.href="experiences.html"
    }

    
} else {
    // No hash found
    window.location.href="index.html"
}