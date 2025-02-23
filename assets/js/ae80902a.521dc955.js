"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1513],{3427:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"devoir/03","title":"Devoir 3 - Planificateur","description":"Le but de ce devoir est de cr\xe9er un planificateur de processus. Il doit utiliser trois algorithmes de planification:","source":"@site/versioned_docs/version-2024/devoir/03.md","sourceDirName":"devoir","slug":"/devoir/03","permalink":"/docs/2024/devoir/03","draft":false,"unlisted":false,"editUrl":"https://github.com/UPB-FILS-SdE2/upb-fils-sde2.github.io/edit/main/versioned_docs/version-2024/devoir/03.md","tags":[],"version":"2024","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Devoir 2 - Syst\xe8me de Fichiers","permalink":"/docs/2024/devoir/02"},"next":{"title":"Devoir 4 - Chargeur d\'ex\xe9cutable","permalink":"/docs/2024/devoir/04"}}');var r=n(4848),t=n(8453);const l={sidebar_position:3},o="Devoir 3 - Planificateur",a={},c=[{value:"Informations g\xe9n\xe9rales",id:"informations-g\xe9n\xe9rales",level:2},{value:"Connaissances \xe9valu\xe9es",id:"connaissances-\xe9valu\xe9es",level:2},{value:"R\xe8gles",id:"r\xe8gles",level:2},{value:"Copiage",id:"copiage",level:2},{value:"Questions",id:"questions",level:2},{value:"Planificateur",id:"planificateur",level:2},{value:"Temps d&#39;ex\xe9cution",id:"temps-dex\xe9cution",level:3},{value:"Crate scheduler",id:"crate-scheduler",level:3},{value:"enum ProcessState",id:"enum-processstate",level:4},{value:"enum SchedulingDecision",id:"enum-schedulingdecision",level:4},{value:"enum StopReason",id:"enum-stopreason",level:4},{value:"enum Syscall",id:"enum-syscall",level:4},{value:"enum SyscallResult",id:"enum-syscallresult",level:4},{value:"Processor library",id:"processor-library",level:3},{value:"ProcessInfo struct",id:"processinfo-struct",level:4},{value:"Simulateur de processeur",id:"simulateur-de-processeur",level:4},{value:"Algorithmes de planification",id:"algorithmes-de-planification",level:2},{value:"Round Robin",id:"round-robin",level:3},{value:"Round Robin avec des priorit\xe9s",id:"round-robin-avec-des-priorit\xe9s",level:4},{value:"Completely Fair Scheduler",id:"completely-fair-scheduler",level:4}];function u(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"devoir-3---planificateur",children:"Devoir 3 - Planificateur"})}),"\n",(0,r.jsx)(s.p,{children:"Le but de ce devoir est de cr\xe9er un planificateur de processus. Il doit utiliser trois algorithmes de planification:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Round Robin"}),"\n",(0,r.jsx)(s.li,{children:"Round Robin avec des priorit\xe9s"}),"\n",(0,r.jsx)(s.li,{children:"Complete Fair Scheduler (CFS)"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"informations-g\xe9n\xe9rales",children:"Informations g\xe9n\xe9rales"}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["Date limite: ",(0,r.jsx)(s.strong,{children:"14 mai, 23:59"}),(0,r.jsx)(s.br,{}),"\n","Points: ",(0,r.jsx)(s.strong,{children:"2 points"})," de la note finale",(0,r.jsx)(s.br,{}),"\n","Lien: ",(0,r.jsx)(s.a,{href:"https://classroom.github.com/a/vnaIgFAJ",children:"Devoir 3 - Planificateur"}),(0,r.jsx)(s.br,{}),"\n","T\xe9l\xe9charger en retard: ",(0,r.jsx)(s.strong,{children:"1 points / jour"})," (maximum 4 jours)"]})}),"\n",(0,r.jsx)(s.h2,{id:"connaissances-\xe9valu\xe9es",children:"Connaissances \xe9valu\xe9es"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Comprendre le fonctionnement du planificateur"}),"\n",(0,r.jsx)(s.li,{children:"Impl\xe9menter des algorithmes de planification"}),"\n",(0,r.jsx)(s.li,{children:"Comprendre le syst\xe8me de processus"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"r\xe8gles",children:"R\xe8gles"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsx)(s.li,{children:"Le devoir doit contenir un fichier nomm\xe9 Readme.md avec des explications concernant la mani\xe8re choisie pour r\xe9soudre le devoir (-0.1p)"}),"\n",(0,r.jsxs)(s.li,{children:["Le devoir doit \xeatre impl\xe9ment\xe9 en Rust et seulement en utilisant des fonctions de la biblioth\xe8que standard Rust. Toute autre impl\xe9mentation conduira \xe0 l'annulation du devoir.(",(0,r.jsx)(s.strong,{children:"0 points"}),")"]}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsxs)(s.p,{children:["Exception: Vous pouvez utiliser la bibliotheque ",(0,r.jsx)(s.a,{href:"https://docs.rs/chrono/latest/chrono/",children:"chrono"})," pour l'affichage de date et heure et la bibliotheque ",(0,r.jsx)(s.a,{href:"https://docs.rs/regex/latest/regex/",children:"regex"})," pour le bonus."]})}),"\n",(0,r.jsx)(s.h2,{id:"copiage",children:"Copiage"}),"\n",(0,r.jsxs)(s.p,{children:["Le devoir est individuel. Toute tentative de copier entra\xeenera ",(0,r.jsx)(s.strong,{children:"0p"})," pour les devoirs. On utilisera un syst\xe8me automatis\xe9 pour d\xe9tecter le copiage. Si on a des doutes, on va vous adresser des questions suppl\xe9mentaires concernant le devoir."]}),"\n",(0,r.jsx)(s.h2,{id:"questions",children:"Questions"}),"\n",(0,r.jsxs)(s.p,{children:["Si vous avez des questions concernant le devoir, posez-les en publiant un issue sur le github ",(0,r.jsx)(s.a,{href:"https://github.com/UPB-FILS-SdE2/questions",children:"https://github.com/UPB-FILS-SdE2/questions"}),' avec le format [scheduler] "le titre de votre question" . Vous aurez besoin d\'un compte github pour publier des questions.']}),"\n",(0,r.jsx)(s.admonition,{type:"danger",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"NE PUBLIEZ PAS DE CODE SOURCE"}),". Cela est consid\xe9r\xe9 comme copiage et vous aller recevoir ",(0,r.jsx)(s.strong,{children:"0p"})," pour le devoir."]})}),"\n",(0,r.jsxs)(s.p,{children:["Si vous voulez recevoir un e-mail lorsque des probl\xe8mes sont signal\xe9s ou lorsqu'il y a de nouveaux messages, acc\xe9dez au site ",(0,r.jsx)(s.a,{href:"https://github.com/UPB-FILS-SdE2/questions",children:"github repository"})," et cliquez sur Watch."]}),"\n",(0,r.jsx)(s.h2,{id:"planificateur",children:"Planificateur"}),"\n",(0,r.jsx)(s.p,{children:"Le planificateur fait partie du syst\xe8me d'exploitation. Parce que l'\xe9criture de code dans le syst\xe8me d'exploitation est difficile, un simulateur de processus a \xe9t\xe9 d\xe9ploy\xe9 dans l'espace utilisateur."}),"\n",(0,r.jsxs)(s.p,{children:["Impl\xe9mentez un ",(0,r.jsx)(s.strong,{children:"planificateur"})," de processus qui contr\xf4lera leur ex\xe9cution dans l'espace utilisateur. Il simulera un planificateur de processus pr\xe9emptif, dans un syst\xe8me monoprocesseur, qui utilise un algorithme de planification Round Robin, Round Robin avec des priorit\xe9s et CFS."]}),"\n",(0,r.jsxs)(s.p,{children:["Pour chaque planificateur, vous devez ",(0,r.jsx)(s.strong,{children:"impl\xe9menter"})," le trait ",(0,r.jsx)(s.code,{children:"Scheduler"}),". Cela signifie mettre en \u0153uvre les trois fonctions:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"next"})," - le prochain processus \xe0 ex\xe9cuter"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"stop"})," - recevoir des informations sur la raison pour laquelle le processus s'est arr\xeat\xe9"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"list"})," - retourner l'\xe9tat des processus"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Pour cela, vous pouvez cr\xe9er des fichiers s\xe9par\xe9s pour chaque planificateur et exportez-le dans ",(0,r.jsx)(s.code,{children:"scheduler/src/schedulers/mod.rs"}),"."]}),"\n",(0,r.jsx)(s.admonition,{type:"warning",children:(0,r.jsxs)(s.p,{children:["Vous devez impl\xe9menter le trait ",(0,r.jsx)(s.code,{children:"Scheduler"})," pour les 3 algorithmes de planification et ",(0,r.jsx)(s.strong,{children:"rien d'autre"}),". Les autres informations pr\xe9sent\xe9es ci-dessous sont des d\xe9tails de mise en \u0153uvre du mod\xe8le existant, afin que vous compreniez mieux le fonctionnement du planificateur"]})}),"\n",(0,r.jsx)(s.h3,{id:"temps-dex\xe9cution",children:"Temps d'ex\xe9cution"}),"\n",(0,r.jsx)(s.p,{children:"Dans un syst\xe8me r\xe9el, pour le contr\xf4le d'ex\xe9cution, le comptage du temps d'ex\xe9cution d'un processus est effectu\xe9 \xe0 chaque interruption d'horloge."}),"\n",(0,r.jsx)(s.p,{children:"Pour faciliter la mise en \u0153uvre, le mod\xe8le de th\xe8me simulera un syst\xe8me r\xe9el comme celui-ci :"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Le syst\xe8me simul\xe9 utilisera un temps virtuel (logique) ind\xe9pendant du temps r\xe9el pour compter le temps de fonctionnement sur le processeur."}),"\n",(0,r.jsx)(s.li,{children:"Vous consid\xe9rerez qu'une instruction dure une seule p\xe9riode d'horloge (unit\xe9 de temps logique)."}),"\n",(0,r.jsx)(s.li,{children:"Chacune des fonctions pr\xe9sent\xe9es ci-dessus repr\xe9sente une seule instruction ex\xe9cutable par un processus \xe0 un instant donn\xe9."}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"crate-scheduler",children:"Crate scheduler"}),"\n",(0,r.jsx)(s.p,{children:"Cette biblioth\xe8que fournit les traits et les structures n\xe9cessaires \xe0 la mise en \u0153uvre d'un planificateur de processus."}),"\n",(0,r.jsx)(s.h4,{id:"enum-processstate",children:"enum ProcessState"}),"\n",(0,r.jsx)(s.p,{children:"Cette \xe9num\xe9ration contient les \xe9tats possibles d'un processus pour notre simulation:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Ready"})," - Le processus attend d'\xeatre planifi\xe9"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Running"})," - Le processus est planifi\xe9"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Waiting"})," - Attend apr\xe8s un \xe9v\xe9nement ou une op\xe9ration d'E/S\n",(0,r.jsx)(s.img,{alt:"Process states",src:n(4837).A+"",width:"642",height:"348"})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"enum-schedulingdecision",children:"enum SchedulingDecision"}),"\n",(0,r.jsxs)(s.p,{children:["Cette \xe9num\xe9ration contient l'action que le planificateur demande au syst\xe8me d'exploitation de prendre. Il repr\xe9sente \xe9galement la valeur renvoy\xe9e par la fonction ",(0,r.jsx)(s.code,{children:"Scheduler::next"})," que vous devez implementer:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.strong,{children:["Run ",(0,r.jsx)(s.code,{children:"{pid, timeslice}"})]})," - Ex\xe9cutez le processus avec PID pid pour un maximum d'unit\xe9s de temps de tranche de temps"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Sleep(time_units)"})," - Dormez le nombre d'unit\xe9s de temps sp\xe9cifi\xe9es"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Deadlock"})," - Le syst\xe8me d'exploitation ne peut plus continuer, car tous les processus attendent des \xe9v\xe9nements. Dans ce cas, aucun autre processus ne peut envoyer d'\xe9v\xe9nements, ce qui signifie que tous les processus attendront ind\xe9finiment."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Panic"})," - Le processus avec le PID 1 s'est arr\xeat\xe9."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Done"})," - Il n'y a plus de processus \xe0 planifier."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"enum-stopreason",children:"enum StopReason"}),"\n",(0,r.jsx)(s.p,{children:"Cette \xe9num\xe9ration contient la raison pour laquelle un processus s'est arr\xeat\xe9 et le syst\xe8me d'exploitation a appel\xe9 le planificateur:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsxs)(s.strong,{children:["Syscall ",(0,r.jsx)(s.code,{children:"{syscall, remaining}"})]})," - Le processus a envoy\xe9 un appel syst\xe8me de type ",(0,r.jsx)(s.code,{children:"Syscall"}),"; ",(0,r.jsx)(s.code,{children:"remaining"})," represent le nombre d'unit\xe9s de temps que le processus n'a pas utilis\xe9 \xe0 partir de ses quanta"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Expired"})," - La tranche de temps allou\xe9e au processus a expir\xe9 et le processus a \xe9t\xe9 pr\xe9empt\xe9"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"enum-syscall",children:"enum Syscall"}),"\n",(0,r.jsx)(s.p,{children:"Cette \xe9num\xe9ration contient les appelles syst\xe8me que les processus effectuent vers le planificateur:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Fork(process_priority)"})," - Cr\xe9ez un nouveau processus et renvoyez son PID."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Sleep(amount_of_time)"})," - Demander au planificateur de suspendre le processus pendant un certain temps"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Wait(event_number)"})," - Le processus sera plac\xe9 dans ",(0,r.jsx)(s.code,{children:"ProcessState::Waiting"})," jusqu'\xe0 ce qu'un autre processus \xe9mette un appel syst\xe8me ",(0,r.jsx)(s.code,{children:"Syscall::Signal"})," avec ce num\xe9ro d'\xe9v\xe9nement."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Signal(event_number)"})," - Tous les processus qui attendent cet \xe9v\xe9nement seront r\xe9veill\xe9s et plac\xe9s dans l'\xe9tat ",(0,r.jsx)(s.code,{children:"ProcessState::Ready"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Exit"})," - Demandez au planificateur de terminer le processus. Le processus ne sera plus jamais planifi\xe9 et sera supprim\xe9 de la liste des processus dont le planificateur assure le suivi."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"enum-syscallresult",children:"enum SyscallResult"}),"\n",(0,r.jsx)(s.p,{children:"Cette \xe9num\xe9ration contient le r\xe9sultat renvoy\xe9 par un appel syst\xe8me:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Pid(pid)"})," - Le PID du nouveau processus. Renvoy\xe9 apr\xe8s un appel syst\xe8me ",(0,r.jsx)(s.code,{children:"Syscall::Fork"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Success"})," - L'appel syst\xe8me a r\xe9ussi."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"NoRunningProcess"})," - L'appel syst\xe8me a \xe9t\xe9 \xe9mis alors qu'aucun processus n'\xe9tait planifi\xe9."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"processor-library",children:"Processor library"}),"\n",(0,r.jsxs)(s.p,{children:["Cette biblioth\xe8que est utilis\xe9e pour simuler le planificateur \xe0 partir de la crate ",(0,r.jsx)(s.strong,{children:"scheduler"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"processinfo-struct",children:"ProcessInfo struct"}),"\n",(0,r.jsx)(s.p,{children:"Contient les informations suivantes sur un processus:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Pid"}),"\n",(0,r.jsx)(s.li,{children:"State"}),"\n",(0,r.jsx)(s.li,{children:"Timings - temps total, temps d'appel syst\xe8me, running time"}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"simulateur-de-processeur",children:"Simulateur de processeur"}),"\n",(0,r.jsx)(s.p,{children:"Le simulateur utilise les fonctions suivantes:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"fork"})," - Envoie un appel syst\xe8me ",(0,r.jsx)(s.code,{children:"Syscall::Fork"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"exec"})," - Ex\xe9cuter une unit\xe9 de temps."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"wait"})," - Envoie un appel syst\xe8me ",(0,r.jsx)(s.code,{children:"Syscall::Wait"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"signal"})," - Envoie un appel syst\xe8me ",(0,r.jsx)(s.code,{children:"Syscall::Signal"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"sleep"})," - Envoie un appel syst\xe8me ",(0,r.jsx)(s.code,{children:"Syscall::Sleep"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"exit"})," - Arr\xeate le processus; le processus informe le syst\xe8me d'exploitation qu'il a termin\xe9 son ex\xe9cution"]}),"\n"]}),"\n",(0,r.jsx)(s.admonition,{type:"warning",children:(0,r.jsxs)(s.p,{children:["Le premier appel de fonction dans le planificateur doit \xeatre un ",(0,r.jsx)(s.strong,{children:"fork"}),", afin de cr\xe9er le premier processus, sinon nous aurons une erreur."]})}),"\n",(0,r.jsx)(s.h2,{id:"algorithmes-de-planification",children:"Algorithmes de planification"}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Pour plus de d\xe9tails sur la mise en \u0153uvre, veuillez consulter les commentaires du fichier ",(0,r.jsx)(s.code,{children:"scheduler/src/lib.rs"})," pour chaque algorithme."]})}),"\n",(0,r.jsx)(s.h3,{id:"round-robin",children:"Round Robin"}),"\n",(0,r.jsx)(s.p,{children:"Pour cet algorithme, tous les processus ont la m\xeame priorit\xe9 et sont planifi\xe9s les uns apr\xe8s les autres. Apr\xe8s qu'un processus a \xe9t\xe9 planifi\xe9, il sera plac\xe9 au bout de la queue."}),"\n",(0,r.jsx)(s.p,{children:"L'algorithme round Robin consiste en 2 files d'attente, la file d'attente de planification et la file d'attente d'attente/veille."}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["La file d'attente de ",(0,r.jsx)(s.strong,{children:"planification"})," contient tous les processus pr\xeats \xe0 \xeatre planifi\xe9s, en conservant ceux qu'ils ont dans la file d'attente. Il n'y a pas de priorit\xe9s particuli\xe8res."]}),"\n",(0,r.jsxs)(s.li,{children:["La file ",(0,r.jsx)(s.strong,{children:"d'attente/veille"})," contient tous les processus qui ont effectu\xe9 un appel syst\xe8me et attendent un certain \xe9v\xe9nement ou la fin de leur temps de veille; les processus seront mis dans la file d'attente dans l'ordre o\xf9 ils ont dormi"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Les nouveaux processus seront plac\xe9s ",(0,r.jsx)(s.strong,{children:"\xe0 la fin"})," de la file d'attente."]}),"\n",(0,r.jsx)(s.p,{children:"Les processus sont r\xe9cup\xe9r\xe9s de la file d'attente/veille et pouss\xe9s \xe0 la fin de la file d'attente de planification dans les situations suivantes:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\xc0 chaque ",(0,r.jsx)(s.strong,{children:"it\xe9ration de planification"}),", une v\xe9rification est effectu\xe9e pour voir si le temps de sommeil de chaque processus dans la file d'attente est \xe9coul\xe9\xa0; si tel est le cas, les processus sont r\xe9cup\xe9r\xe9s de la file d'attente"]}),"\n",(0,r.jsxs)(s.li,{children:["Si un ",(0,r.jsx)(s.strong,{children:"signal"})," est re\xe7u, indiquant qu'un certain \xe9v\xe9nement a \xe9t\xe9 d\xe9clench\xe9, chaque processus de la file d'attente qui attendait ce signal sera r\xe9cup\xe9r\xe9, en respectant son ordre, et plac\xe9 \xe0 la fin de la file d'attente de planification"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"Round Robin",src:n(5395).A+"",width:"862",height:"301"})}),"\n",(0,r.jsx)(s.h4,{id:"round-robin-avec-des-priorit\xe9s",children:"Round Robin avec des priorit\xe9s"}),"\n",(0,r.jsxs)(s.p,{children:["Cet algorithme est identique au pr\xe9c\xe9dent, avec la modification suivante: la priorit\xe9 initiale du processus est celle qu'il re\xe7oit \xe0 la ",(0,r.jsx)(s.strong,{children:"fork"}),". Cette priorit\xe9 ",(0,r.jsx)(s.strong,{children:"ne peut jamais"})," \xeatre surmont\xe9e. Chaque fois qu'un processus d\xe9passe son temps, il est p\xe9nalis\xe9 de 1. \xc0 chaque fois le processus se termine avant de d\xe9passer son quantum, il est r\xe9compens\xe9 par 1."]}),"\n",(0,r.jsx)(s.p,{children:"La priorit\xe9 ne peut \xeatre inf\xe9rieure \xe0 0 ni sup\xe9rieure \xe0 5."}),"\n",(0,r.jsx)(s.p,{children:"Lors de la planification, seuls les processus ayant la priorit\xe9 la plus \xe9lev\xe9e sont pris en compte. Si aucun d'entre eux ne peut \xeatre planifi\xe9 (sont en veille), envisagez des processus moins prioritaires. S'il n'y a ni l'un ni l'autre ici \xeatre planifi\xe9, tenir compte des \xe9l\xe9ments suivants, etc."}),"\n",(0,r.jsx)(s.h4,{id:"completely-fair-scheduler",children:"Completely Fair Scheduler"}),"\n",(0,r.jsxs)(s.p,{children:["Cet algorithme est utilis\xe9 par Linux. Vous pouvez trouver plus de d\xe9tails sur ",(0,r.jsx)(s.a,{href:"https://opensource.com/article/19/2/fair-scheduling-linux",children:"CFS"}),": une planification de processus parfaitement juste sous Linux. La variante impl\xe9ment\xe9e ici prendra en compte:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"virtualtime"}),"\n",(0,r.jsx)(s.li,{children:"la quante de temps variable en fonction du nombre de processus, le temps r\xe9el est le temps initial divis\xe9 par le nombre de processus, le temps de r\xe9f\xe9rence ne peut \xeatre inf\xe9rieur \xe0 1."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Dans CFS, le processus qui a le plus petit ",(0,r.jsx)(s.code,{children:"vruntime"})," sera le prochain planifi\xe9. S'il y a 2 processus qui ont le m\xeame ",(0,r.jsx)(s.code,{children:"vruntime"}),", celui avec le ",(0,r.jsx)(s.strong,{children:"plus petit PID"})," sera planifi\xe9 ensuite."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Apres chaque ex\xe9cution d'un processus on va ajouter le num\xe9ro d'unit\xe9s de traitement ex\xe9cut\xe9es par le processus a ",(0,r.jsx)(s.code,{children:"virtualruntime"})," (la valeur est en fait quantum_temps - process.quantum)."]})})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4837:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/process_states-cefa7e73b2fed70d8eacfb65fe5a8d5f.jpg"},5395:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/round_robin-b872ab0c1c05b61030a00993808f4688.png"},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>o});var i=n(6540);const r={},t=i.createContext(r);function l(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);