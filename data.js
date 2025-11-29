const labData = [
    {
        "region": "Global",
        "country": "\ud83c\uddf8\ud83c\uddee Slovenia",
        "institution": "National Institute of Chemistry (Slovenia)",
        "pi": "Ajasja Ljubetic",
        "website": "https://ljubetic-lab.si/",
        "papers": [],
        "keywords": "De novo protein design, dynamic protein assemblies, coiled coils, protein robotics, computational modeling, Rosetta software, protein engineering.",
        "about": "This research focuses on designing and studying dynamic protein assemblies, particularly coiled coil structures. The lab uses the Rosetta software to rigidly fuse coiled coils with de novo designed proteins, enabling controlled motion and developing protein-based robots. Current projects include engineering rigidified protein assemblies for active walking and exploring applications of these scaffolds in protein robotics."
    },
    {
        "region": "Global",
        "country": "\ud83c\udde9\ud83c\uddea Germany",
        "institution": "LMU Munich, Germany",
        "pi": "Alena Khmelinskaia",
        "website": "https://khmelinskaia.cup.uni-muenchen.de/",
        "papers": [],
        "keywords": "Protein self-assembly, de novo protein design, biophysical methods, structural flexibility, dynamic protein materials, cargo encapsulation.",
        "about": "This research focuses on understanding the physical principles of protein self-assembly. By integrating computational de novo protein design, protein production, and biophysical methods, the lab investigates the interactions governing assembly dynamics. The work explores structural flexibility to develop dynamic and responsive protein-based materials for applications such as support coating and cargo encapsulation."
    },
    {
        "region": "EMEA",
        "country": "\ud83c\udde6\ud83c\uddf9 Austria",
        "institution": "Aithyra",
        "pi": "Alexander Tong",
        "website": "https://www.alextong.net/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Butler College",
        "pi": "Alican Gulsevin",
        "website": "https://gulsevinlab.org/",
        "papers": [],
        "keywords": "Computational modeling, membrane proteins, protein interactions, structural biology, genomic data, human health.",
        "about": "This research focuses on computational modeling of proteins involved in human health by integrating experimental and genomic data. The lab studies membrane proteins and their interactions with peptides and small molecules using structural biology applications and in-house methods to analyze how structural changes influence protein interactions."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "MIT",
        "pi": "Amy E. Keating",
        "website": "https://biology.mit.edu/profile/amy-e-keating/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\udde7\ud83c\uddea Belgium",
        "institution": "Vrije Universiteit Brussel",
        "pi": "Anastassia A. Vorobieva",
        "website": "https://vorobievalab.sites.vib.be/en",
        "papers": [
            {
                "title": "Nanopore design",
                "url": "https://www.science.org/doi/10.1126/science.adn3796"
            }
        ],
        "keywords": "Membrane proteins, transmembrane beta-barrels, computational protein design, nanopore engineering, protein stability, single-molecule sensing, beta-barrel vaccines.",
        "about": "This lab focuses on de novo design of membrane proteins, specifically transmembrane beta-barrels. Research includes computational methods to create beta-barrels with novel properties and structures, as well as developing experimental validation approaches. Applications include engineered nanopores for single-molecule sensing and beta-barrel-based vaccines targeting Gram-negative bacteria."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Chicago",
        "pi": "Andrew Ferguson",
        "website": "https://pme.uchicago.edu/faculty/andrew-ferguson",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "New York University",
        "pi": "Andrew Gordon Wilson",
        "website": "https://cims.nyu.edu/~andrewgw/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UCSC",
        "pi": "Andy Hsien-Wei Yeh",
        "website": "https://neolux.sites.ucsc.edu/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\udde8\ud83c\udded Switzerland",
        "institution": "EPFL",
        "pi": "Anne-Florence Bitbol",
        "website": "https://www.epfl.ch/labs/bitbol-lab/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Wisconsin-Madison",
        "pi": "Anthony Gitter",
        "website": "https://www.biostat.wisc.edu/~gitter/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Columbia University",
        "pi": "Anum Glasgow",
        "website": "https://www.biochem.cuimc.columbia.edu/profile/anum-glasgow-phd",
        "papers": [],
        "keywords": "Computational protein design, biophysical techniques, conformational switching, signal-responsive proteins, protein engineering, ligand binding, therapeutic proteins.",
        "about": "This research integrates computational protein design with high-throughput biophysics to engineer proteins that change conformation in response to signals. By developing design principles for signal-responsive proteins, the lab aims to control cellular behavior and develop targeted therapeutics. Long-term goals include engineering multifunctional proteins for precise ligand binding and localization, advancing disease treatment strategies."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Vanderbilt University",
        "pi": "Ben Brown",
        "website": "https://www.bpbrownlab.org/",
        "papers": [],
        "keywords": "Protein dynamics, signal transduction, enzyme catalysis, molecular recognition, AI-driven drug design, induced-fit modeling, virtual screening, disease mutations.",
        "about": "This research explores how protein dynamics influence biological function, disease, and drug response. By integrating physics-based and AI-driven methods, the lab designs small molecules targeting flexible proteins. Key areas include modeling large-scale induced-fit changes for high-throughput virtual screening and analyzing disease mutations to guide therapeutic decision-making in collaboration with clinicians."
    },
    {
        "region": "EMEA",
        "country": "\ud83c\udde9\ud83c\uddea Germany",
        "institution": "University of Bayreuth",
        "pi": "Birte H\u00f6cker",
        "website": "https://www.proteindesign.uni-bayreuth.de/en/index.html",
        "papers": [],
        "keywords": "Protein evolution, protein design, small molecule receptors, enzymes, biosensors, molecular machines, artificial motor proteins, small molecule binding.",
        "about": "This lab designs small molecule receptors, enzymes, and artificial motor proteins. Research focuses on protein evolution, molecular machines, biosensors, and the principles underlying small molecule binding."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "MIT",
        "pi": "Bonnie Berger",
        "website": "https://people.csail.mit.edu/bab/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Stanford University",
        "pi": "Brian Hie",
        "website": "https://evodesign.org/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UNC Chapel Hill",
        "pi": "Brian Kuhlman",
        "website": "https://klab.web.unc.edu/research/",
        "papers": [],
        "keywords": "Protein design, protein-protein interactions, computational modeling, experimental validation, Rosetta, vaccine design, structural biology.",
        "about": "This research focuses on designing proteins and protein interactions using a combination of computational and experimental methods. Current work includes developing novel protein-protein interactions, protein structures, and light subunit vaccines. The Rosetta program is central to these efforts, with ongoing contributions to its development and application in new protein modeling challenges."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Stanford University",
        "pi": "Brian Trippe",
        "website": "https://briantrippe.com/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Duke University",
        "pi": "Bruce Donald",
        "website": "https://users.cs.duke.edu/~brd/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "EPFL Lausanne",
        "pi": "Bruno E. Correia",
        "website": "https://www.epfl.ch/labs/lpdi/",
        "papers": [],
        "keywords": "Protein design, functional proteins, therapeutics, vaccines, biosensors, synthetic biology.",
        "about": "The Correia Group designs novel functional proteins to expand nature's capabilities for practical applications, including therapeutics, vaccines, and biosensors. By engineering proteins with tailored properties, the lab advances synthetic biology to address biomedical and biotechnological challenges."
    },
    {
        "region": "Asia",
        "country": "\ud83c\uddf0\ud83c\uddf7 South Korea",
        "institution": "KAIST",
        "pi": "Byung-Ha Oh",
        "website": "https://sites.google.com/view/tpdsb/home?authuser=0",
        "papers": [],
        "keywords": "Computational protein design, antibody engineering, protein-protein interactions, protein binders, molecular modeling, therapeutic proteins.",
        "about": "This research focuses on computational design of therapeutic proteins and protein binders. Projects include designing antibodies, creating novel proteins that target specific interactions, and enhancing the binding properties of existing proteins. The lab uses computational modeling to precisely engineer protein interactions and improve therapeutic effectiveness"
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Rice University",
        "pi": "Cameron Glasscock",
        "website": "https://glasscocklab.blogs.rice.edu/",
        "papers": [],
        "keywords": "Protein design, protein-nucleic acid interactions, synthetic biology, artificial intelligence, machine learning, high-throughput biochemistry, functional assays.",
        "about": "This lab develops computational methods for predicting and designing protein-nucleic acid assemblies using physics-based modeling and AI/ML approaches. Research incorporates high-throughput biochemistry, molecular biology, and sequencing technologies, emphasizing advanced protein functional assays to support AI-driven protein design."
    },
    {
        "region": "Global",
        "country": "\ud83c\udde8\ud83c\uddf1 Chile",
        "institution": "Pontificia Universidad Catolica de Chile",
        "pi": "Cesar Ramirez-Sarmiento",
        "website": "NA",
        "papers": [],
        "keywords": "Protein engineering, computational modeling, metamorphic proteins, PET hydrolysis, enzyme evolution, synthetic biology, oxygen carriers, photosynthetic microorganisms.",
        "about": "This research employs experimental and computational strategies to study metamorphic proteins and bacterial enzymes capable of hydrolyzing PET plastics. The lab investigates protein evolution, stability, and design, and uses synthetic biology approaches to engineer photosynthetic microorganisms into oxygen carriers."
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "University of Oxford",
        "pi": "Charlotte Deane",
        "website": "https://opig.stats.ox.ac.uk/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "University of Edinburgh",
        "pi": "Chris Wells Wood",
        "website": "https://www.wellswoodresearchgroup.com/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Rensselaer Polytechnic Institute",
        "pi": "Christopher Bystroff",
        "website": "https://www.bioinfo.rpi.edu/bystrc/",
        "papers": [],
        "keywords": "Protein folding, protein design, green fluorescent protein (GFP), fluorescent biosensors, molecular dynamics, biophysical analysis, X-ray crystallography.",
        "about": "This research explores protein folding pathways to improve protein design algorithms. A major focus is on green fluorescent protein (GFP), studying its folding and dynamics to develop programmable fluorescent biosensors for detecting peptides and proteins. The lab develops high-performance computational software and validates designed molecules through biophysical analysis and X-ray crystallography."
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Peking University",
        "pi": "Chu Wang",
        "website": "https://www.chem.pku.edu.cn/wangchulab/",
        "papers": [],
        "keywords": "Protein docking, metal-binding proteins, chemoproteomics, bioinformatics, metabolic regulation, enzyme function, computational biology.",
        "about": "This lab combines chemoproteomics, bioinformatics, and computational structural biology to discover functional enzyme sites modified by metabolites or drugs. The group investigates molecular mechanisms regulating enzyme functions and develops computational methods to predict protein-small molecule interactions."
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Tsinghua University",
        "pi": "Chunfu Xu",
        "website": "https://www.timbr.tsinghua.edu.cn/info/1752/3158.htm",
        "papers": [],
        "keywords": "Protein design, protein-nucleic acid interactions, synthetic biology, artificial intelligence, machine learning, high-throughput biochemistry, functional assays.",
        "about": "This lab develops computational protein design methods to engineer novel proteins, including fluorescent proteins, transmembrane proteins, and enzymes. The designed proteins serve as tools and devices in fundamental research, biotechnology, and medical applications."
    },
    {
        "region": "Global",
        "country": "\ud83c\udde9\ud83c\uddea Germany",
        "institution": "Leipzig University",
        "pi": "Clara T. Schoeder",
        "website": "https://www.schoederlab.org/",
        "papers": [
            {
                "title": "Combine Rosetta and ESM",
                "url": "https://pubs.acs.org/doi/10.1021/acssynbio.3c00753"
            }
        ],
        "keywords": "Computational protein design, immunotherapeutics, Adeno-associated virus (AAV), chimeric antigen receptors (CARs), single-chain variable fragments (scFvs), vaccine design, epitope focusing, pharmacokinetics.",
        "about": "This research focuses on computational protein design methods for developing novel immunotherapeutic drugs. The lab studies Adeno-associated virus (AAV) interactions, designs cellular therapeutics such as chimeric antigen receptors (CARs), optimizes antibody fragments (scFvs), and develops vaccine candidates through stabilization and epitope focusing."
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Wesleyan University",
        "pi": "Colin Smith",
        "website": "https://smithlab.research.wesleyan.edu/",
        "papers": [],
        "keywords": "Protein structure, atomic-level mechanisms, second-shell interactions, structural propagation, protein conformational changes, therapeutic protein engineering, structural biology.",
        "about": "The Smith Lab investigates atomic-level mechanisms underlying structural rearrangements in proteins, specifically how changes propagate from one region to another. The lab addresses questions of structural communication and how subtle rearrangements influence protein behavior and functionality."
    },
    {
        "region": "Asia",
        "country": "\ud83c\udded\ud83c\uddf0 Hong Kong",
        "institution": "HKUST",
        "pi": "Danqing Zhu",
        "website": "https://www.danqing-zhu.com/",
        "papers": [
            {
                "title": "AAV library design",
                "url": "https://www.science.org/doi/full/10.1126/sciadv.adj3786"
            }
        ]
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "University of Leeds",
        "pi": "Darren Tomlinson",
        "website": "https://astbury.leeds.ac.uk/people/dr-darren-tomlinson/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Washington",
        "pi": "David Baker",
        "website": "https://www.bakerlab.org/",
        "papers": [],
        "keywords": "De novo protein design, hyperstable proteins, vaccine design, RFdiffusion, protein structure, enzyme catalysis, self-assembling nanomaterials, drug delivery, Top7, Nobel Prize.",
        "about": "This research pioneered de novo protein design with TOP7 and developed principles for designing hyper stable proteins with diverse folds. Stabilizing pathogen epitopes enables computational vaccine development. The lab's RFdiffusion model advances protein design, creating complex structures. Ongoing work includes designing novel enzymes and self-assembling nanomaterials for drug delivery and vaccines."
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "University of Leeds",
        "pi": "David Brockwell",
        "website": "https://astbury.leeds.ac.uk/people/dr-david-brockwell/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Duke University",
        "pi": "David C. Richardson & Jane Shelby Richardson",
        "website": "https://www.biochem.duke.edu/people/richardson-lab",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "UCL",
        "pi": "David T. Jones",
        "website": "http://www0.cs.ucl.ac.uk/staff/d.jones/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Yale University",
        "pi": "David van Dijk",
        "website": "https://davidvandijk.squarespace.com/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "University of Bristol",
        "pi": "Dek Woolfson",
        "website": "https://woolfsonlab.wordpress.com/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddf5\ud83c\uddf1 Poland",
        "institution": "University of Warsaw",
        "pi": "Dominik Gront",
        "website": "https://bioshell.pl/home",
        "papers": [],
        "keywords": "Structural bioinformatics, coarse-grained modeling, multiscale modeling, algorithm development, biomolecular dynamics, BioShell software.",
        "about": "This research develops computational methods for multiscale modeling of biomacromolecular structure and dynamics. The lab creates coarse-grained approaches to study proteins at different resolution levels and develops the BioShell software suite for structural bioinformatics, including alignments, modeling, analysis, and visualization of biomolecular structures."
    },
    {
        "region": "EMEA",
        "country": "\ud83c\udde8\ud83c\udded Switzerland",
        "institution": "ETH Zurich",
        "pi": "Donald Hilvert",
        "website": "https://protein.ethz.ch/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "CAS ICT",
        "pi": "Dongbo Bu",
        "website": "https://people.ucas.edu.cn/~dbu",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "St. Jude Children\u2019s Research Hospital",
        "pi": "Elizabeth H. Kellogg",
        "website": "kellogglab.org",
        "papers": [],
        "keywords": "Molecular organization, nucleic acid interactions, dynamic complexes, Rosetta, cryo-EM, structural biology.",
        "about": "This research focuses on understanding how cells organize molecular information by studying dynamic complexes that interact with nucleic acids. Using Rosetta and cryo-EM, the lab interprets atomic-level structures to gain insights into their biological functions."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Princeton University",
        "pi": "Ellen D. Zhong",
        "website": "https://www.cs.princeton.edu/~zhonge/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddea\ud83c\uddf8 Spain",
        "institution": "IBMB CSIC",
        "pi": "Enrique Marcos",
        "website": "https://ibmb.csic.es/en/department-of-structural-and-molecular-biology/protein-design-and-modeling/#lab-presentation",
        "papers": [
            {
                "title": "de novo immunoglobulin design",
                "url": "https://www.nature.com/articles/s41467-023-41717-5"
            }
        ]
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddf8\ud83c\udde6 Saudi Arabia",
        "institution": "Mohamed bin Zayed University of AI",
        "pi": "Eric Xing",
        "website": "https://mbzuai.ac.ae/study/faculty/professor-eric-xing/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Washington University of St. Louis",
        "pi": "Eva-Maria Strauch",
        "website": "http://www.strauchlab.com/",
        "papers": [],
        "keywords": "Protein engineering, viral proteins, structural design, oligo-synthesis, next-generation sequencing, immunogen design, protein chemistry.",
        "about": "This research group studies viral surface proteins using structural design and high-throughput techniques to develop therapeutic and immunological interventions. The lab aims to understand viral protein chemistry and design novel immunogens targeting viral infections."
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "Cardiff University",
        "pi": "Fabio Parmeggiani",
        "website": "https://profiles.cardiff.ac.uk/staff/parmeggianif",
        "papers": [
            {
                "title": "Repeat protein design",
                "url": "https://www.nature.com/articles/nature16162"
            }
        ],
        "keywords": "Hybrid computational-experimental methods, protein design, repeat proteins, modular systems, nanomaterials, spatial control, cellular behavior.",
        "about": "This research develops hybrid computational and experimental approaches to protein design, focusing on modular systems composed of designed repeat proteins. The lab explores spatial control of protein structures for applications ranging from nanomaterials to tools influencing and studying cellular behavior."
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Westlake University",
        "pi": "Fajie Yuan",
        "website": "https://fajieyuan.github.io/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "ShanghaiTech University",
        "pi": "Fang Bai",
        "website": "https://sist.shanghaitech.edu.cn/bf/list.htm",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Tsinghua SIGS",
        "pi": "Feiran Li",
        "website": "https://www.sigs.tsinghua.edu.cn/lfr/main.htm",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UMass Dartmouth",
        "pi": "Firas Khatib",
        "website": "https://www.cis.umassd.edu/~fkhatib/",
        "papers": [],
        "keywords": "Citizen science, crowdsourcing, computational biology, public engagement, scientific problem-solving.",
        "about": "This research focuses on engaging the public in solving complex scientific problems through citizen science and crowdsourcing. By leveraging collective human intelligence, the lab addresses critical challenges in computational biology."
    },
    {
        "region": "Global",
        "country": "\ud83c\udde6\ud83c\uddf9 Austria",
        "institution": "Institute of Science and Technology Austria",
        "pi": "Florian Praetorius",
        "website": "https://ista.ac.at/en/research/praetorius-group/",
        "papers": [],
        "keywords": "Protein design, DNA origami, nucleic acids, deep learning, ProteinMPNN, Rosetta, biomolecular assemblies.",
        "about": "The Praetorius lab develops computational design tools, including deep learning and physics-based methods, to engineer proteins and nucleic acids. They experimentally characterize de novo proteins and aim to create DNA-protein hybrid assemblies with novel functions for applications in biosensing, gene delivery, gene editing, and vaccine development."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Caltech",
        "pi": "Frances Arnold",
        "website": "http://fhalab.caltech.edu/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddf3\ud83c\uddf1 Netherlands",
        "institution": "Eindhoven University of Technology",
        "pi": "Francesca Grisoni",
        "website": "https://molecularmachinelearning.com/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Washington",
        "pi": "Frank Dimaio",
        "website": "https://dimaiolab.ipd.uw.edu/",
        "papers": [],
        "keywords": "Structure determination, crystal structure refinement, conformational sampling, protein force fields, computational modeling, experimental data analysis.",
        "about": "This research focuses on developing methods for determining protein structures from sparse and noisy experimental data. Key areas include crystal structure refinement, conformational sampling, and protein force field development. By integrating computational modeling with experimental analysis, the lab enhances accuracy in protein structure prediction and refinement."
    },
    {
        "region": "EMEA",
        "country": "\ud83c\udde9\ud83c\uddea Germany",
        "institution": "FU Berlin",
        "pi": "Frank No\u00e9",
        "website": "https://www.mi.fu-berlin.de/en/math/groups/ai4s/staff/noe/index.html",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Northwestern University",
        "pi": "Gabe Rocklin",
        "website": "http://www.rocklinlab.org/",
        "papers": [],
        "keywords": "High-throughput protein design, computational modeling, protein biophysics, protein therapeutics, display selections, mass spectrometry proteomics, next-generation sequencing, protein stability, conformational dynamics.",
        "about": "This research develops high-throughput methods for protein design and biophysics, focusing on protein therapeutics. The lab combines large-scale computational modeling with experimental approaches, including display selections, mass spectrometry proteomics, and next-generation sequencing, to study protein folding, stability, dynamics, and resistance to aggregation."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Northwestern University",
        "pi": "Gabriel J. Rocklin",
        "website": "http://www.rocklinlab.org/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Washington",
        "pi": "Gaurav Bhardwaj",
        "website": "https://peptidedesign.org/",
        "papers": [],
        "keywords": "Peptide drug design, computational modeling, antibiotics, antivirals, anti-cancer peptides, cellular permeability, oral bioavailability, machine learning.",
        "about": "This research develops computational and experimental methods to design therapeutic peptides with high specificity and stability. Focus areas include designing antibiotics, antivirals, and anti-cancer peptides, as well as enhancing cellular permeability and oral bioavailability. Machine learning-based approaches are also employed to generate peptides with diverse structures and functions."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UIUC",
        "pi": "Ge Liu",
        "website": "https://www.mit.edu/~geliu/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\udde9\ud83c\uddea Germany",
        "institution": "Leipzig University",
        "pi": "Georg Kuenze",
        "website": "https://kuenzelab.org/",
        "papers": [],
        "keywords": "Protein modeling, membrane proteins, signaling mechanisms, enzyme design, molecular dynamics, molecular signaling, biotechnology, biophysics, drug targeting.",
        "about": "This research combines computational modeling and biophysical experiments to study molecular signaling in membrane proteins, design enzymes for biotechnology, and understand protein-drug interactions. Using molecular dynamics simulations alongside experimental validation, the lab investigates signaling mechanisms, designs improved enzymes, and identifies small-molecule drugs targeting membrane proteins."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Harvard University",
        "pi": "George Church",
        "website": "https://wyss.harvard.edu/team/core-faculty/george-church/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Dartmouth College",
        "pi": "Gevorg Grigoryan (Left for Company)",
        "website": "https://faculty-directory.dartmouth.edu/gevorg-grigoryan",
        "papers": [],
        "keywords": "Protein function, structure-based design, protein-protein recognition, allostery, computational modeling, protein engineering.",
        "about": "This research investigates the structural principles governing natural protein function to gain biological insights and enable protein engineering. Key areas include protein-protein recognition and allosteric information transfer. By integrating computational and experimental approaches, the lab studies natural protein functions and designs novel proteins with practical applications."
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Zhejiang University of Technology",
        "pi": "Guijun Zhang",
        "website": "http://zhanglab-bioinf.com/people/guijunz/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\udde6\ud83c\uddf9 Austria",
        "institution": "TU Graz",
        "pi": "Gustav Oberdorfer",
        "website": "https://www.tugraz.at/institute/ibc/research/research-groups/protein-design",
        "papers": [
            {
                "title": "Helical Bundle design",
                "url": "https://www.science.org/doi/abs/10.1126/science.1257481"
            },
            {
                "title": "ESM-Scan",
                "url": "https://www.biorxiv.org/content/10.1101/2023.12.12.571273v2"
            }
        ],
        "keywords": "De novo protein design, enzyme design, biomedical applications, biotechnology, computational modeling, protein engineering, structural biology.",
        "about": "This research group focuses on de novo protein design, developing and broadening state-of-the-art methodologies for biomedical and biotechnological applications. Current projects include designing novel enzymes and proteins with specific geometries. The lab combines computational approaches with structural biology to expand the functional repertoire of engineered proteins."
    },
    {
        "region": "Global",
        "country": "\ud83c\uddf0\ud83c\uddf7 South Korea",
        "institution": "Korea Advanced Institute of Science and Technology",
        "pi": "Gyu Rie Lee",
        "website": "https://pure.kaist.ac.kr/en/persons/gyurie-lee/",
        "papers": [],
        "keywords": "Protein design, deep learning, small molecules, epigenetics, post-translational modifications.",
        "about": "This lab develops AI-based methods for protein design, specifically targeting epigenetic processes and chemical modifications of peptides and nucleic acids. Research aims to create custom-designed protein tools and explore therapeutic applications focused on epigenetic mechanisms and cellular metabolism."
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "CAS ICT",
        "pi": "Haicang Zhang",
        "website": "https://people.ucas.ac.cn/~0032113",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Shanghai Jiao Tong University",
        "pi": "Haifeng Cheng",
        "website": "https://cbb.sjtu.edu.cn/~hfchen/",
        "papers": [
            {
                "title": "Sequence design benchmark",
                "url": "https://doi.org/10.1093/bioinformatics/btae037"
            }
        ]
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Tsinghua University",
        "pi": "Haipeng Gong",
        "website": "https://structpred.life.tsinghua.edu.cn/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "USTC",
        "pi": "Haiyan Liu",
        "website": "https://biocomp.ustc.edu.cn/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Tsinghua University",
        "pi": "Hao Zhou",
        "website": "https://zhouh.github.io/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Vanderbilt University",
        "pi": "Hassane Mchaourab",
        "website": "https://lab.vanderbilt.edu/mchaourab-lab/person/hassane-s-mchaourab-ph-d/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\uddf0\ud83c\uddf7 South Korea",
        "institution": "IBS",
        "pi": "Ho Min Kim",
        "website": "https://protein.ibs.re.kr/people/chief-investigator",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Shanghai Jiao Tong University",
        "pi": "Hongbin Shen",
        "website": "http://www.csbio.sjtu.edu.cn/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UNC Chapel Hill",
        "pi": "Huaxiu Yao",
        "website": "https://www.huaxiuyao.io/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "CAS TIB",
        "pi": "Huifeng Jiang",
        "website": "http://www.tib.cas.cn/sourcedb_tib_cas/cn/expert/rckyjy/201212/t20121212_3704580.html",
        "papers": [
            {
                "title": "DeepEvo",
                "url": "https://spj.science.org/doi/full/10.34133/bdr.0031"
            },
            {
                "title": "Diffusion model for P450 generation",
                "url": "https://spj.science.org/doi/10.34133/research.0413"
            }
        ]
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UIUC",
        "pi": "Huimin Zhao",
        "website": "https://zhaogroup.chbe.illinois.edu/index.html",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UNC Chapel Hill",
        "pi": "Huong Kratochvil",
        "website": "https://www.kratochvillab.com/",
        "papers": [],
        "keywords": "Membrane protein design, functional protein design, molecular recognition, immune response.",
        "about": "This research focuses on de novo protein design to test fundamental principles of molecular recognition, particularly in membrane transport and immune response. The lab seeks to engineer functional proteins to investigate structure-function relationships."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Alabama at Birmingham",
        "pi": "Hy Truong Son",
        "website": "https://people.cs.uchicago.edu/~hytruongson/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddf8\ud83c\uddea Sweden",
        "institution": "Lund University",
        "pi": "Ingemar Andre",
        "website": "https://andrelab.lu.se/",
        "papers": [],
        "keywords": "Protein modeling, symmetric protein complexes, self-assembly, computational design, structural biology.",
        "about": "Large protein complexes self-assemble into functional structures. This research develops computational methods to predict and design novel protein assemblies, advancing structural biology and protein engineering. Experimental validation ensures accuracy, applying self-assembly principles to both natural and synthetic systems."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "MIT",
        "pi": "James J. Collins",
        "website": "https://www.collinslab.mit.edu/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Brigham Young University",
        "pi": "James Moody",
        "website": "https://labs.chem.byu.edu/moody-lab/about-us",
        "papers": [],
        "keywords": "Protein modeling, enzyme engineering, protein complexes, crystallization chaperones, protein polymers, structural enzymology, protein crystallization.",
        "about": "This research applies protein modeling and engineering to understand enzymes and protein complexes, and to engineer new enzymes, protein polymers, and crystallization chaperones. The lab also uses structural enzymology to study enzyme mechanisms and develop tools to facilitate protein crystallization."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Stanford University",
        "pi": "James Zou",
        "website": "https://www.james-zou.com/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Delaware",
        "pi": "Jason Gleghorn",
        "website": "https://www.gleghornlab.com/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Notre Dame of Maryland University",
        "pi": "Jason Labonte",
        "website": "https://www.ndm.edu/directory/jason-labonte",
        "papers": [],
        "keywords": "Computational modeling, carbohydrates, post-translational modifications (PTMs), protocol development, data mining, organic chemistry, biochemistry.",
        "about": "This research focuses on developing computational methods to decode cellular interactions at the chemical level, emphasizing carbohydrates and post-translational modifications (PTMs). The lab employs protocol development, data mining, and experimental validation. Students gain skills in organic chemistry, biochemistry, and computational modeling to advance understanding of biochemical processes."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "John Hopkins University",
        "pi": "Jeffrey J. Gray",
        "website": "https://graylab.jhu.edu/",
        "papers": [],
        "keywords": "Protein docking, antibody engineering, glycoproteins, membrane proteins, Rosetta, computational modeling, protein-surface interactions, disease research.",
        "about": "This research focuses on computational protein structure prediction and design, with expertise in protein docking, antibody engineering, and membrane protein modeling. The lab develops tools like RosettaDock, RosettaAntibody, and PyRosetta to tackle challenges such as conformational changes upon binding and energy calculations. Collaborations span diverse biomedical areas, including cancer, Alzheimer's disease, antibiotic resistance, and autoimmune disorders."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UC Berkeley",
        "pi": "Jennifer Doudna",
        "website": "https://doudnalab.org/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UC Berkeley",
        "pi": "Jennifer Listgarten",
        "website": "http://www.jennifer.listgarten.com/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Vanderbilt University",
        "pi": "Jens Meiler",
        "website": "https://meilerlab.org/",
        "papers": [],
        "keywords": "Protein-ligand interactions, computational modeling, drug design, membrane proteins, structure elucidation, experimental validation, protein structure.",
        "about": "This research combines computational and experimental approaches to study protein-ligand interactions. The lab develops computational methods for elucidating membrane protein structures, designing specific therapeutic molecules, and enhancing drug specificity. Predictions are experimentally validated within the lab or through collaborations, ensuring practical applications for structural biology and targeted drug development."
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Arizona State University",
        "pi": "Jeremy Mills",
        "website": "https://search.asu.edu/profile/2695303",
        "papers": [],
        "keywords": "Protein design, fluorescent proteins, non-canonical amino acids, fluorogenic probes, protein-protein interactions, metalloproteins, enzyme engineering.",
        "about": "This research focuses on designing proteins that incorporate fluorescent or fluorogenic non-canonical amino acids. The lab engineers proteins to serve as fluorescent reporters for protein-protein, protein-small molecule, and protein-metal interactions. Additional projects involve designing novel functional metalloproteins and enzymes."
    },
    {
        "region": "Asia",
        "country": "\ud83c\uddf0\ud83c\uddf7 South Korea",
        "institution": "KAIST",
        "pi": "Ji-Joon Song",
        "website": "https://www.song-kaist.org",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\udde8\ud83c\udde6 Canada",
        "institution": "Mila - Quebec AI Institute",
        "pi": "Jian Tang",
        "website": "https://jian-tang.com/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Fudan University",
        "pi": "Jianpeng Ma",
        "website": "https://mrics.fudan.edu.cn/info/1021/1110.htm",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Westlake University",
        "pi": "Jianyang Zeng",
        "website": "https://aicb.lab.westlake.edu.cn/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Shandong University",
        "pi": "Jianyi Yang",
        "website": "https://yanglab.qd.sdu.edu.cn/",
        "papers": [],
        "keywords": "Structure prediction, cryo-EM, artificial intelligence, trRosetta, trRosettaRNA, I-TASSER.",
        "about": "This lab develops computational methods for predicting protein and RNA structures, contributing significantly to methods such as trRosetta, trRosettaRNA, and I-TASSER. Research incorporates cryo-EM data and AI techniques."
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Tsinghua University",
        "pi": "Jianzhu Ma",
        "website": "https://majianzhu.com/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "ShanghaiTech University",
        "pi": "Jiayi Dou",
        "website": "https://slst.shanghaitech.edu.cn/djy/",
        "papers": [],
        "keywords": "De novo protein design, neuroscience, light-sensitive proteins, ion channels, membrane fusion, optogenetics.",
        "about": "This lab designs de novo proteins, including light-responsive proteins, ion channels, and membrane fusion systems, to develop tools for neuroscience research. Using computational design and deep learning, the lab creates novel protein-based approaches to study and modulate brain activity."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "New York University",
        "pi": "Jin Kim Montclare",
        "website": "http://montclare.poly.edu/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\udde8\ud83c\uddff Czech Republic",
        "institution": "Masaryk University",
        "pi": "Jiri Damborsky",
        "website": "https://loschmidt.chemi.muni.cz/peg/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Kansas",
        "pi": "Joanna Slusky",
        "website": "https://molecularbiosciences.ku.edu/people/joanna-slusky",
        "papers": [],
        "keywords": "Membrane proteins, computational protein design, protein characteristics, membrane protein design, protein-membrane interactions.",
        "about": "The Slusky lab studies outer membrane proteins, identifying their common structural features and designing new membrane proteins for practical applications such as diagnostics, therapeutics, and environmental remediation."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Stanford University",
        "pi": "Jure Leskovec",
        "website": "https://cs.stanford.edu/people/jure/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UC Davis",
        "pi": "Justin Siegel",
        "website": "https://siegel.ucdavis.edu/",
        "papers": [],
        "keywords": "Computational enzyme design, enzyme catalysis, genetic methods, chemical methods, novel catalysts.",
        "about": "This lab uses computational, genetic, and chemical methods to design novel enzyme catalysts. The research addresses modern challenges in food, energy, and health by developing tailored enzymes with new catalytic properties for practical applications."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Wake Forest University",
        "pi": "Katherine I. Albanese",
        "website": "https://www.albaneselab.com/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\uddf0\ud83c\uddf7 South Korea",
        "institution": "KIST",
        "pi": "Keunwan Park",
        "website": "https://sites.google.com/site/keunwan/home?authuser=0",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Illinois Chicago",
        "pi": "Kevin Drew",
        "website": "https://ksdrew.github.io/people/",
        "papers": [],
        "keywords": "Macromolecular assemblies, protein-nucleic acid interactions, biochemical approaches, computational modeling, proteomics, structural biology, human disease.",
        "about": "The Drew Lab studies macromolecular assemblies in cells, focusing on their mechanistic functions and relevance to human disease. Using biochemical, computational, and proteomic approaches, the lab identifies assembly components, determines their 3D structures, and explores ways to modulate their activity for therapeutic applications."
    },
    {
        "region": "Asia",
        "country": "\ud83c\uddef\ud83c\uddf5 Japan",
        "institution": "Tokyo University",
        "pi": "Kotaro Tsuboyama",
        "website": "https://sites.google.com/view/tsubo-lab/home",
        "papers": [
            {
                "title": "Mega-scale mutation scanning",
                "url": "https://www.nature.com/articles/s41586-023-06328-6"
            }
        ]
    },
    {
        "region": "EMEA",
        "country": "\ud83c\udde9\ud83c\uddf0 Denmark",
        "institution": "University of Copenhagen",
        "pi": "Kresten Lindorff-Larsen",
        "website": "https://www1.bio.ku.dk/english/research/bms/sbinlab/kll/",
        "papers": [
            {
                "title": "IDP design",
                "url": "https://www.science.org/doi/full/10.1126/sciadv.adm9926"
            }
        ]
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "New York University",
        "pi": "Kyunghyun Cho",
        "website": "https://kyunghyuncho.me/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Carnegie Mellon University",
        "pi": "Lei Li",
        "website": "https://lileicc.github.io/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Shanghai Jiao Tong University",
        "pi": "Liang Hong",
        "website": "https://ins.sjtu.edu.cn/people/lhong/index.html",
        "papers": [
            {
                "title": "CPDiffusion for Argonaute design",
                "url": "https://www.nature.com/articles/s41421-024-00728-2"
            }
        ]
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Rice University",
        "pi": "Linna An",
        "website": "https://lanalchemist.github.io/",
        "papers": [],
        "keywords": "Computational Protein design, Enzyme Engineering, Sensors, Machine Learning",
        "about": "Dr. An merges computational protein design with biochemistry to engineer enzymes and create molecular sensing systems. Her research centers on three aims: (1) crafting protein sensors that map health-critical ligand landscapes, (2) installing intracellular reporters to accelerate enzyme evolution, and (3) engineering biosynthetic enzymes to expand the synthetic-biology toolkit. She also pioneers new algorithms for functional protein design."
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Westlake University",
        "pi": "Longxin Cao",
        "website": "https://www.westlake.edu.cn/faculty/longxing-cao.html",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Westlake University",
        "pi": "Longxing Cao",
        "website": "https://en.westlake.edu.cn/faculty/longxing-cao.html",
        "papers": [],
        "keywords": "Protein design, protein interfaces, protein switches, deep learning, synthetic biology, immunotherapy.",
        "about": "This lab develops new methods for de novo protein design, focusing on therapeutics targeting tumor-specific markers and immune modulators. Research includes designing conformational switches responsive to environmental stimuli, and developing new scaffolds and sequences using deep learning techniques."
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Peking University",
        "pi": "Luhua Lai",
        "website": "http://mdl.ipc.pku.edu.cn/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "University of Edinburgh",
        "pi": "Lynne Regan",
        "website": "https://regan.bio.ed.ac.uk/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddea\ud83c\uddf8 Spain",
        "institution": "Spanish National Research Council",
        "pi": "Manuel Ferrer Mart\u00ednez",
        "website": "https://sysbio.csic.es/prof-manuel-ferrer/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Scripps Research Institute",
        "pi": "Marco Mravic",
        "website": "https://mmravic314.github.io/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Harvard University",
        "pi": "Marinka Zitnik",
        "website": "https://zitniklab.hms.harvard.edu/bio/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Yale University",
        "pi": "Mark Gerstein",
        "website": "https://www.gersteinlab.org/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\udde9\ud83c\uddf0 Denmark",
        "institution": "University of Copenhagen",
        "pi": "Martin Willemo\u00ebs",
        "website": "https://www1.bio.ku.dk/english/research/bms/pbg/mw/",
        "papers": [
            {
                "title": "Glycoside hydrolase carving-out",
                "url": "https://pubs.acs.org/doi/full/10.1021/acssynbio.3c00674"
            }
        ]
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Princeton University",
        "pi": "Mengdi Wang",
        "website": "https://ece.princeton.edu/people/mengdi-wang",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "University of Oxford",
        "pi": "Michael Bronstein",
        "website": "https://www.cs.ox.ac.uk/people/michael.bronstein/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Colorado Boulder",
        "pi": "Michael Shirts",
        "website": "https://www.colorado.edu/lab/shirtsgroup/",
        "papers": [],
        "keywords": "Nanoscale materials, biomimetic materials, foldamers, computational modeling, Rosetta, chemical design, molecular simulations.",
        "about": "This group uses theory and computation to design nanoscale materials, focusing on biomimetic foldamers and molecular simulations. The lab develops computational tools within Rosetta for heteropolymer design, aiming for efficient and predictive exploration of chemical and structural space."
    },
    {
        "region": "EMEA",
        "country": "\ud83c\udde9\ud83c\uddf0 Denmark",
        "institution": "Aarhus University",
        "pi": "Michael Westberg",
        "website": "https://westberglab.com/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Duke University",
        "pi": "Mihai Azoitei",
        "website": "https://medicine.duke.edu/profile/mihai-luchian-azoitei",
        "papers": [],
        "keywords": "Vaccines, protein engineering, biosensors, influenza, HIV, coronaviruses, B-cell signaling.",
        "about": "This research focuses on rational immunogen design using computational protein engineering (Rosetta) and high-throughput screening methods to develop vaccines against pathogens like HIV and influenza. The lab also studies how antigen biophysical properties affect B-cell activation and antibody production."
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "CAS SIMM",
        "pi": "Mingyue Zheng",
        "website": "https://people.ucas.ac.cn/~0010379",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\uddf0\ud83c\uddf7 South Korea",
        "institution": "Seoul National University",
        "pi": "Minkyung Baek",
        "website": "https://biosci.snu.ac.kr/en/people/faculty?mode=view&profidx=101",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Columbia University",
        "pi": "Mohammed AlQuraishi",
        "website": "https://www.aqlab.io/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Northwestern University",
        "pi": "Neha P. Kamat",
        "website": "https://www.nehakamat.com/",
        "papers": [
            {
                "title": "Protein-lipid interaction engineerning",
                "url": "https://www.nature.com/articles/s41467-024-49678-z"
            }
        ]
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Washington",
        "pi": "Neil King",
        "website": "https://kinglab.ipd.uw.edu/",
        "papers": [],
        "keywords": "Protein-based nanomaterials, molecular machines, computational protein design, molecular recognition, structural biology, disease treatment, biophysical characterization.",
        "about": "This research focuses on designing functional protein-based nanomaterials by incorporating the stability and dynamic properties of molecular machines. Using computational protein design alongside biochemical, biophysical, and structural techniques, the lab develops and characterizes novel materials with potential applications in disease treatment and prevention."
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "University of Leeds",
        "pi": "Neil Ranson",
        "website": "https://naranson.myportfolio.com/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Dana-Farber Cancer Institute",
        "pi": "Nicholas F. Polizzi",
        "website": "https://www.polizzilab.org/",
        "papers": [],
        "keywords": "Ligand binding, molecular recognition, de novo protein design.",
        "about": "This lab develops computational methods to design novel ligand-binding proteins. The research focuses specifically on designing proteins that recognize small molecules, aiming to understand fundamental principles of molecular recognition through de novo protein design."
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Childrens Hospital of Pennsylvania (CHOP)",
        "pi": "Nik Sgourakis",
        "website": "https://www.sgourakislab.org/",
        "papers": [],
        "keywords": "Structural biology, NMR spectroscopy, X-ray crystallography, biophysics, biochemical techniques, computational modeling, protein interactions.",
        "about": "The Sgourakis lab studies protein structures using NMR spectroscopy, X-ray crystallography, computational modeling, and biochemical techniques. The lab investigates molecular mechanisms underlying biological function, closely collaborating with researchers at CHOP and the University of Pennsylvania."
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddea\ud83c\uddf8 Spain",
        "institution": "Centre for Genomic Regulation",
        "pi": "Noelia Ferruz",
        "website": "https://www.aiproteindesign.com/",
        "papers": [
            {
                "title": "ZymCTRL",
                "url": "https://www.biorxiv.org/content/10.1101/2024.05.03.592223v2"
            }
        ]
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Harvard University",
        "pi": "Omar Abudayyeh & Jonathan Gootenberg",
        "website": "https://www.abugootlab.org/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Flatiron Institute / Simons Foundation",
        "pi": "P. Douglas Renfrew",
        "website": "https://www.simonsfoundation.org/people/douglas-renfrew/",
        "papers": [],
        "keywords": "Protein folding, heteropolymer design, exotic amino acids, peptide macrocycles, enzyme engineering, nanomaterials, computational modeling, quantum computing, deep learning.",
        "about": "This research applies protein folding theory to design heteropolymers composed of exotic chemical building blocks beyond the canonical amino acids, including D-amino acids, \u03b2- and \u03b3-amino acids, and peptoids. The lab develops computational software to rationally engineer peptide macrocycle drugs, industrial enzymes, and novel nanomaterials, leveraging advanced computational technologies such as quantum computing and deep neural networks."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Oregon",
        "pi": "Parisa Hosseinzadeh",
        "website": "https://www.parisahlab.org/",
        "papers": [],
        "keywords": "Computational tools, protein design, peptide design, molecular modeling, biomedical applications.",
        "about": "This research focuses on developing computational tools for protein and peptide design and modeling. The lab applies these tools to generate new proteins and peptides for biomedical applications."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "EPFL Lausanne",
        "pi": "Patrick Barth",
        "website": "https://www.epfl.ch/labs/barth-lab/",
        "papers": [],
        "keywords": "Transmembrane proteins, ligand-receptor interactions, signaling pathways, computational modeling, protein design, membrane biology.",
        "about": "This research focuses on modeling and designing transmembrane proteins to understand how ligand-receptor-effector systems transmit signals across membranes. By integrating computational and experimental approaches, it aims to reengineer signaling pathways and quantitatively define the principles governing these networks, advancing our understanding of membrane protein function and design."
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddf8\ud83c\uddea Sweden",
        "institution": "Stockholm University",
        "pi": "Patrick Bryant",
        "website": "https://patrickbryantlab.github.io/",
        "papers": [
            {
                "title": "EvoBind for binder design",
                "url": "https://www.biorxiv.org/content/10.1101/2022.07.23.501214v1"
            }
        ]
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Westlake University",
        "pi": "Peilong Lu",
        "website": "https://www.labxing.com/lab/693/home",
        "papers": [],
        "keywords": "Transmembrane proteins, computational design, nanopores, ion channels, ligand-binding proteins, oligomerization, high-throughput screening, protein engineering.",
        "about": "This research develops computational methods for designing novel transmembrane proteins, including selective ion channels and nanopores. The lab designs proteins capable of binding small molecules, oligomerizing upon ligand binding, and signaling. By combining computational predictions with experimental validation, the lab advances protein engineering strategies for targeting ligand-responsive transmembrane proteins involved in signaling and transport processes."
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Fred Hutchinson Cancer Center",
        "pi": "Phil Bradley",
        "website": "https://www.fredhutch.org/en/faculty-lab-directory/bradley-phil.html",
        "papers": [],
        "keywords": "Molecular recognition, structural modeling, protein-DNA interactions, protein-peptide interactions, Rosetta, molecular modeling algorithms.",
        "about": "This interdisciplinary research integrates computational modeling and experimental validation to design proteins and small molecules with therapeutic potential. Using methods like ROSETTA, molecular dynamics, and docking, interactions between designed molecules and drug targets are predicted. Experimental techniques, including protein expression, purification, and molecular interaction analysis, validate these designs to advance drug discovery."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Duke University",
        "pi": "Philip A. Romero",
        "website": "https://pratt.duke.edu/people/philip-romero/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\udde8\ud83c\udde6 Canada",
        "institution": "University of Toronto",
        "pi": "Philip M. Kim",
        "website": "https://www.kimlab.org/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UC Berkeley",
        "pi": "Pieter Abbeel",
        "website": "https://people.eecs.berkeley.edu/~pabbeel/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "University of Cambridge",
        "pi": "Pietro Li\u00f2",
        "website": "https://www.cl.cam.ac.uk/~pl219/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Stanford University",
        "pi": "Possu Huang",
        "website": "http://www.proteindesign.org/",
        "papers": [],
        "keywords": "De novo protein design, machine learning, molecular motors, protein origami, biosensors, protein engineering, computational modeling, experimental validation.",
        "about": "This research focuses on developing novel protein platforms to address biological challenges. The lab integrates de novo protein design, machine learning-based tool development, and experimental approaches to engineer molecular motors, protein origami structures, and biosensors. Computational and experimental methods are combined to advance protein engineering and structural modeling."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Duke University",
        "pi": "Pranam D. Chatterjee",
        "website": "https://www.chatterjeelab.com/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "USTC",
        "pi": "Qi Liu",
        "website": "http://staff.ustc.edu.cn/~qiliuql/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UT Southwestern",
        "pi": "Qian Cong",
        "website": "https://breakthroughs.utsouthwestern.edu/women/stories/cong-qian.html",
        "papers": [],
        "keywords": "Protein-protein interactions, evolution, genomics, artificial intelligence, bioinformatics, AlphaFold, RoseTTAFold.",
        "about": "This lab mines large-scale data to predict protein-protein interactions and model protein complexes at a proteome-wide scale using evolutionary signals and advanced AI methods, including AlphaFold and RoseTTAFold. Research addresses biological insights relevant to systems such as cancer and microbial virulence."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UCLA",
        "pi": "Quanquan Gu",
        "website": "https://web.cs.ucla.edu/~qgu/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Chicago",
        "pi": "Rama Ranganathan",
        "website": "http://ranganathanlab.org/",
        "papers": [
            {
                "title": "Evolution-based design",
                "url": "https://www.science.org/doi/10.1126/science.aba3304"
            }
        ]
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "MIT",
        "pi": "Regina Barzilay",
        "website": "https://www.regina.csail.mit.edu/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Yale University",
        "pi": "Rex Ying",
        "website": "https://www.cs.yale.edu/homes/ying-rex/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Stanford University",
        "pi": "Rhiju Das",
        "website": "https://profiles.stanford.edu/rhiju-das",
        "papers": [],
        "keywords": "RNA modeling, RNA design, nucleic acids, structure prediction, biophysics, RNA folding, computational tools.",
        "about": "This research focuses on modeling and designing RNA to understand how nucleic acids and proteins encode biological functions. By developing computational and chemical tools, the lab tackles RNA structure prediction, explores RNA biophysics, and designs novel RNA shapes and switches for functional applications."
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "University of Leeds",
        "pi": "Richard Bayliss",
        "website": "https://biologicalsciences.leeds.ac.uk/molecular-and-cellular-biology/staff/23/prof-richard-bayliss",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of South Florida",
        "pi": "Rituparna Samanta",
        "website": "https://sites.google.com/view/rituparnasamanta",
        "papers": [],
        "keywords": "Membrane proteins, protein-protein interface, molecular simulation, field-based simulation, protein self-assembly.",
        "about": "The Samanta lab develops computational models to study and engineer protein interactions with various environments, such as water, membranes, biopolymers, and synthetic materials. The lab applies molecular simulations and machine learning techniques to investigate biological and environmental challenges."
    },
    {
        "region": "Global",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "King's College London",
        "pi": "Robert Jefferson",
        "website": "https://www.kcl.ac.uk/people/robert-jefferson",
        "papers": [],
        "keywords": "Membrane protein complexes, quaternary stability, receptor engineering, synthetic biology.",
        "about": "This lab uses computational and experimental methods to study and design dynamic membrane receptor complexes. Research aims to understand membrane protein stability, function, and their transient interactions within cells."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Duke University",
        "pi": "Rohit Singh",
        "website": "https://singhlab.net/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Fox Chase Cancer Center",
        "pi": "Roland Dunbrack",
        "website": "https://dunbrack.fccc.edu/lab/",
        "papers": [],
        "keywords": "Structural bioinformatics, cryo-EM, X-ray crystallography, deep learning, GTPases, kinases, antibodies, cancer biology, precision medicine.",
        "about": "This research applies modern statistical analysis and deep-learning-based structure prediction to study key proteins in cancer biology, including GTPases, kinases, and antibodies. By integrating structural bioinformatics with cryo-EM and X-ray crystallography, the lab enhances the role of structural biology in precision medicine and therapeutic development for cancer research."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Stanford University",
        "pi": "Ron Dror",
        "website": "https://drorlab.stanford.edu/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "University of Bristol",
        "pi": "Ross Anderson",
        "website": "https://theandersonlab.com/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\udde9\ud83c\uddea Germany",
        "institution": "TUM",
        "pi": "Rost Burkhard",
        "website": "https://www.rostlab.org/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Shanghai Jiao Tong University",
        "pi": "Rui Qing",
        "website": "https://life.sjtu.edu.cn/teacher/ruiqing",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddee\ud83c\uddea Ireland",
        "institution": "University College Cork",
        "pi": "Sabin Tabirca",
        "website": "https://crr.ucc.ie/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Rutgers University",
        "pi": "Sagar Khare",
        "website": "https://sagardkharelab.org/",
        "papers": [],
        "keywords": "Computational biophysics, enzymology, molecular biology, protein design, machine learning, directed evolution, molecular recognition.",
        "about": "This research operates at the interface of computational and experimental biophysics, enzymology, and molecular biology. The lab employs computational protein design, machine learning, and directed evolution to study molecular recognition in protein function, including enzyme activity, specificity, and conformational changes."
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddea\ud83c\uddf8 Spain",
        "institution": "Universitat Aut\u00f2noma de Barcelona",
        "pi": "Salvador Ventura Zamora",
        "website": "https://ibb.uab.cat/wp-content/themes/viral/modules/ibb_membres/view_grup.php?CodiGrup=36",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\uddf0\ud83c\uddf7 South Korea",
        "institution": "POSTECH",
        "pi": "Sangmin Lee",
        "website": "https://sites.google.com/view/pdl-postech",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddea\ud83c\uddf8 Spain",
        "institution": "IMDEA Nanoscience research institute",
        "pi": "Sara H Mejias",
        "website": "https://sites.google.com/view/sarahmejias/team-members",
        "papers": []
    },
    {
        "region": "Global",
        "country": "🇮🇱 Israel",
        "institution": "Weizmann Institute of Science",
        "pi": "Sarel J Fleishman",
        "website": "https://www.fleishmanlab.org/",
        "papers": [
            {
                "title": "CADENZ",
                "url": "https://www.science.org/doi/10.1126/science.ade9434"
            },
            {
                "title": "Antibody humanness optimize",
                "url": "https://www.nature.com/articles/s41551-023-01079-1"
            },
            {
                "title": "Peroxidases Design",
                "url": "https://pubs.acs.org/doi/10.1021/jacs.1c12433"
            },
            {
                "title": "Enzyme Repertoires design",
                "url": "https://doi.org/10.1016/j.molcel.2018.08.033"
            }
        ],
        "keywords": "Computational protein design, molecular recognition, antibody engineering, enzyme design, membrane protein interactions, experimental characterization.",
        "about": "This research focuses on computational design and experimental characterization of novel protein functions. Key areas include understanding molecular recognition in antibodies and enzymes and designing interactions within biological membranes. By integrating computational modeling with experimental validation, the lab advances protein engineering for therapeutic and biotechnological applications."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Columbia University",
        "pi": "Scott Banta",
        "website": "https://bantalab.cheme.columbia.edu/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Denver",
        "pi": "Scott Horowitz",
        "website": "https://www.horowitzlab.com/",
        "papers": [],
        "keywords": "Citizen science, scientific gaming, Foldit, structural biology, experimental data integration, protein folding, nucleic acids, biophysics.",
        "about": "This research focuses on citizen science and scientific computer gaming through Foldit, integrating experimental data and developing educational tools to enhance structural biology investigations. Additionally, the lab studies how nucleic acids influence protein folding and aggregation using approaches ranging from genetics to biophysics."
    },
    {
        "region": "Global",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Hubei University of Technology",
        "pi": "Sen Liu",
        "website": "https://liugroup.site/",
        "papers": [],
        "keywords": "Protein structure, protein regulation, computational modeling, signaling networks, drug development, molecular tools, cellular engineering.",
        "about": "This research integrates computational and experimental approaches to study protein structure, function, and regulation. Key projects include designing and rewiring cellular signaling networks, systematically analyzing protein function, and developing molecular tools and drugs with practical biomedical applications."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "MIT",
        "pi": "Sergey Ovchinnikov",
        "website": "https://www.solab.org/",
        "papers": [],
        "keywords": "Protein evolution, statistical modeling, phylogenetics, genomics, protein structure prediction, metagenomics, conformational landscapes, protein-protein interactions, multicellularity.",
        "about": "This research develops statistical models of protein evolution by integrating phylogenetic, genomic, structural, and functional data. The lab explicitly models protein conformational landscapes for structure prediction and design. It also mines metagenomic sequences to identify novel protein families, functions, and interactions, and investigates multicellularity evolution through structural comparisons."
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "CAS CEMCS",
        "pi": "Shaoqing Zhang",
        "website": "http://zhanglab.sibcb.ac.cn/zhanglab/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "University of Leeds",
        "pi": "Sheena Radford",
        "website": "https://astbury.leeds.ac.uk/people/professor-sheena-radford/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Shanghai Jiao Tong University",
        "pi": "Shuangjia Zheng",
        "website": "https://prokia.github.io/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Texas A&M University",
        "pi": "Shuiwang Ji",
        "website": "https://people.tamu.edu/~sji/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddf8\ud83c\uddea Sweden",
        "institution": "Linnaeus University",
        "pi": "Sinisa Bjelic",
        "website": "http://protein.technology/",
        "papers": [],
        "keywords": "Molecular modeling, protein design, small-molecule therapeutics, ROSETTA, molecular dynamics, docking, biochemistry, drug discovery.",
        "about": "This interdisciplinary research integrates computational modeling and experimental validation to design proteins and small molecules with therapeutic potential. Using methods like ROSETTA, molecular dynamics, and docking, interactions between designed molecules and drug targets are predicted. Experimental techniques, including protein expression, purification, and molecular interaction analysis, validate these designs to advance drug discovery."
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Fudan University",
        "pi": "Siqi Sun",
        "website": "https://intersun.github.io/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Yale University",
        "pi": "Smita Krishnaswamy",
        "website": "https://krishnaswamylab.org/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Westlake University",
        "pi": "Stan Z. Li",
        "website": "https://www.westlake.edu.cn/faculty/stan-zq-li.html",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Vanderbilt University",
        "pi": "Stephanie Wankowicz",
        "website": "https://wankowiczlab.com/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Caltech",
        "pi": "Steve Mayo",
        "website": "https://www.mayo.caltech.edu/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "University of Leeds",
        "pi": "Takashi Ochi",
        "website": "https://tochi.myportfolio.com/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UCSF",
        "pi": "Tanja Kortemme",
        "website": "https://kortemmelab.ucsf.edu/",
        "papers": [],
        "keywords": "Engineered biological systems, molecular design, computational biology, cellular function, organismal fitness, predictive modeling, synthetic biology.",
        "about": "This research focuses on engineering biological systems, from molecules with new functions to entire organisms. By integrating computational design, predictive modeling, and interdisciplinary approaches from computer science, physics, chemistry, and biology, the lab investigates the relationship between molecular characteristics, cellular function, and organismal fitness."
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Michigan",
        "pi": "Terra Sztain",
        "website": "https://sites.google.com/umich.edu/sztainlab/research",
        "papers": [],
        "keywords": "Computer-aided molecular design, molecular dynamics, machine learning, drug design.",
        "about": "The Sztain lab combines dynamic experiments, molecular simulations, and machine learning for molecular design. Research involves designing proteins and small molecules for applications in human health and the environment."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "MIT",
        "pi": "Tess E. Smidt",
        "website": "https://blondegeek.github.io/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddeb\ud83c\uddf7 France",
        "institution": "INRAE MIAT",
        "pi": "Thomas Schiex",
        "website": "https://miat.inrae.fr/schiex/research.shtml",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddeb\ud83c\uddf7 France",
        "institution": "Ecole Polytechnique",
        "pi": "Thomas Simonson",
        "website": "https://bioc.polytechnique.fr/biocomputing/",
        "papers": [
            {
                "title": "Proteus",
                "url": "https://onlinelibrary.wiley.com/doi/abs/10.1002/jcc.23418"
            }
        ]
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UNC Chapel Hill",
        "pi": "Tianlong Chen",
        "website": "https://tianlong-chen.github.io/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Colorado Boulder",
        "pi": "Tim Whitehead",
        "website": "NA",
        "papers": [],
        "keywords": "Protein engineering, antibodies, molecular recognition, next-generation sequencing, enzyme specificity, plant synthetic biology, renewable biomass.",
        "about": "This lab uses data-driven methods and next-generation sequencing to engineer proteins with tailored affinity, specificity, and stability. The group studies protein evolution, antibody-based vaccines, and synthetic biology for developing plant-based systems and biomass conversion technologies."
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Zhejiang University",
        "pi": "Tingjun Hou",
        "website": "http://cadd.zju.edu.cn/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "MIT",
        "pi": "Tommi S. Jaakkola",
        "website": "https://people.csail.mit.edu/tommi/",
        "papers": []
    },
    {
        "region": "Global",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Scripps Research Institute",
        "pi": "Torben Schiffner",
        "website": "https://www.schiffner-lab.com/",
        "papers": [],
        "keywords": "Computational protein design, high-throughput screening, immunogens, epitope grafting, glycan masking, multimerization, vaccine development, pathogens.",
        "about": "This research combines computational protein design with high-throughput experimental screening to develop next-generation vaccine immunogens. Techniques include antibody-antigen optimization, epitope grafting, glycan masking, and protein stabilization, targeting pathogens like Coronaviruses, Hepatitis C, and HIV."
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddea\ud83c\uddf8 Spain",
        "institution": "Barcelona Supercomputing Center",
        "pi": "Victor Guallar Tasies",
        "website": "https://www.bsc.es/guallar-tasies-victor",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Renmin University of China",
        "pi": "Wenbing Huang",
        "website": "https://gsai.ruc.edu.cn/wenbing_huang",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Northeastern University",
        "pi": "Wengong Jin",
        "website": "https://people.csail.mit.edu/wengong/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "University of Florida",
        "pi": "Wenjun Xie",
        "website": "https://pharmacy.ufl.edu/profile/xie-wenjun/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Peking University",
        "pi": "Wentao Zhang",
        "website": "https://zwt233.github.io/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UCSF",
        "pi": "William DeGrado",
        "website": "https://pharm.ucsf.edu/degrado",
        "papers": [],
        "keywords": "Membrane protein structure, de novo protein design, metalloproteins, chemical biology, neurodegenerative diseases, bacterial sensing, machine learning, drug development.",
        "about": "This research focuses on membrane protein structure and de novo protein design to understand biological processes and develop therapeutics. The lab integrates structural biology, machine learning, and biochemistry to study protein folding, interactions, and drug targeting. Key applications include neurodegenerative diseases, bacterial sensing, and treatments for conditions like COVID-19 and organ fibrosis."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Scripps Research Institute",
        "pi": "William E. Balch",
        "website": "https://www.webalchlab.com/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "CAS IBP",
        "pi": "Xianen Zhang",
        "website": "https://ibp.cas.cn/kydw_157813/xrktzz/xsszmZ/201912/t20191202_5447225.html",
        "papers": [
            {
                "title": "ProT-Diff for AMP generation",
                "url": "https://onlinelibrary.wiley.com/doi/10.1002/advs.202406305"
            }
        ]
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Xiamen University",
        "pi": "Xiaoping Min",
        "website": "https://informatics.xmu.edu.cn/info/1425/25349.htm",
        "papers": [
            {
                "title": "PB-GPT",
                "url": "https://doi.org/10.1016/j.str.2024.07.016"
            }
        ]
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "CAS SIAT",
        "pi": "Xiaozhou Luo",
        "website": "https://people.ucas.ac.cn/~luoxiaozhou",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddf8\ud83c\udde6 Saudi Arabia",
        "institution": "KAUST",
        "pi": "Xin Gao",
        "website": "https://cemse.kaust.edu.sa/sfb",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Tsinghua University",
        "pi": "Yang Liu",
        "website": "https://nlp.csai.tsinghua.edu.cn/~ly/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Shanghai Jiao Tong University",
        "pi": "Yang Yang",
        "website": "https://yang.chem.ucsb.edu/yang",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\uddf8\ud83c\uddec Singapore",
        "institution": "National University of Singapore",
        "pi": "Yang Zhang",
        "website": "https://zhanggroup.org/",
        "papers": [
            {
                "title": "EvoDesign",
                "url": "https://doi.org/10.1016/j.jmb.2019.02.028"
            }
        ]
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Tsinghua University",
        "pi": "Yanyan Lan",
        "website": "https://zhouh.github.io/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "University of Oxford",
        "pi": "Yarin Gal",
        "website": "https://www.cs.ox.ac.uk/people/yarin.gal/website/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Peking University",
        "pi": "Yi Qin Gao",
        "website": "https://www.chem.pku.edu.cn/gaoyq/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Harvard University",
        "pi": "Yilun Du",
        "website": "https://yilundu.github.io/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Caltech",
        "pi": "Yisong Yue",
        "website": "http://www.yisongyue.com/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\udde8\ud83c\udde6 Canada",
        "institution": "Mila - Quebec AI Institute",
        "pi": "Yoshua Bengio",
        "website": "https://yoshuabengio.org/fr/profil/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udded\ud83c\uddf0 Hong Kong",
        "institution": "Chinese University of Hong Kong",
        "pi": "Yu Li",
        "website": "https://liyu95.com/",
        "papers": [
            {
                "title": "Dense Homolog Retriever",
                "url": "https://www.nature.com/articles/s41587-024-02353-6"
            }
        ]
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Sun Yat-sen University",
        "pi": "Yuedong Yang",
        "website": "https://cse.sysu.edu.cn/content/2951",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Shanghai Jiao Tong University",
        "pi": "Yuguang Wang",
        "website": "https://yuguangwang.github.io/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UC Berkeley",
        "pi": "Yun S. Song",
        "website": "https://people.eecs.berkeley.edu/~yss/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Georgia Institute of Technology",
        "pi": "Yunan Luo",
        "website": "https://faculty.cc.gatech.edu/~yunan/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "SUSTech",
        "pi": "Zhe Li",
        "website": "https://sustech.edu.cn/zh/faculties/lizhe.html",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Vanderbilt University",
        "pi": "Zhongyue Yang",
        "website": "https://lab.vanderbilt.edu/zyang-lab/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\udde8\ud83c\uddf3 China",
        "institution": "Westlake University",
        "pi": "Zibo Chen",
        "website": "https://chenlab.org/",
        "papers": [],
        "keywords": "De novo protein design, molecular computing, protein circuits, self-assembly, Rosetta, programmable biomolecules, supramolecular structures, cellular functions.",
        "about": "This research programs biological behaviors by designing de novo proteins for molecular computing and programmable self-assembly. Protein circuits are engineered to control cell functions, while self-assembling proteins form structures like cages and crystals for studying and modifying cellular processes. Using Rosetta, the lab customizes protein functionalities at the molecular level for both fundamental research and real-world applications."
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UCSD",
        "pi": "Neville Bethel",
        "website": "https://www.bethel-lab.org/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UCLA",
        "pi": "Jason Zhang",
        "website": "https://www.jasonzhanglab.com/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\udde9\ud83c\uddea Germany",
        "institution": "TU Munich",
        "pi": "Thomas Schlichthärle",
        "website": "https://www.bio.nat.tum.de/aipd/startseite/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Stowers Institute",
        "pi": "Arvind Pillai",
        "website": "https://www.stowers.org/people/arvind-pillai",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\udde9\ud83c\uddea Germany",
        "institution": "LMU Munich",
        "pi": "Lukas Milles",
        "website": "https://www.genzentrum.uni-muenchen.de/research-groups/milles/index.html",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\udde8\ud83c\udded Switzerland",
        "institution": "ETH Zurich",
        "pi": "Basile Wicky",
        "website": "https://bsse.ethz.ch/people/detail-person.basile-wicky.html",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "NYU",
        "pi": "Shunzhi Wang",
        "website": "https://med.nyu.edu/faculty/shunzhi-wang",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\udde8\ud83c\udde6 Canada",
        "institution": "U Ottawa",
        "pi": "Roberto Chica",
        "website": "https://mysite.science.uottawa.ca/rchica/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddee\ud83c\uddf1 Israel",
        "institution": "The Hebrew University of Jerusalem",
        "pi": "Ora Schueler-Furman",
        "website": "https://sites.google.com/mail.huji.ac.il/furman-lab/home",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\udde9\ud83c\uddea Germany",
        "institution": "TU Munich",
        "pi": "Cathleen Zeymer",
        "website": "https://www.bio.nat.tum.de/en/proteinchemie/about-us/cathleen-zeymer/",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\uddf0\ud83c\uddf7 South Korea",
        "institution": "KIST",
        "pi": "Hahnbeom Park",
        "website": "https://sites.google.com/view/hparklab/home",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "\ud83c\uddf0\ud83c\uddf7 South Korea",
        "institution": "SNU",
        "pi": "Woon Ju Song",
        "website": "https://woonju.wixsite.com/woonjusong",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "Manchester",
        "pi": "Anthony Green",
        "website": "https://www.greenresearchgroup.co.uk/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UCSB",
        "pi": "Yang Yang",
        "website": "https://yang.chem.ucsb.edu/yang",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Princeton",
        "pi": "Todd Hyster",
        "website": "https://hyster.princeton.edu/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "Indiana",
        "pi": "Jared Lewis",
        "website": "https://lewis.lab.indiana.edu/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UT Dallas",
        "pi": "Rudi Fasan",
        "website": "https://labs.utdallas.edu/fasan/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UT Austin",
        "pi": "Yi Lu",
        "website": "https://lulab.cm.utexas.edu/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\udde8\ud83c\udded Switzerland",
        "institution": "Basel",
        "pi": "Thomas Ward",
        "website": "https://ward.chemie.unibas.ch/en/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "\ud83c\uddec\ud83c\udde7 United Kingdom",
        "institution": "Edinburgh",
        "pi": "Amanda Jarvis",
        "website": "https://www.amandajarvis.co.uk/",
        "papers": []
    },
    {
        "region": "North America",
        "country": "\ud83c\uddfa\ud83c\uddf8 United States",
        "institution": "UCLA",
        "pi": "Mohamad Abedi",
        "website": "NA",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "🇨🇭 Switzerland",
        "institution": "University of Zurich",
        "pi": "Martin Pacesa",
        "website": "http://www.pacesalab.com/",
        "papers": []
    },
    {
        "region": "EMEA",
        "country": "🇨🇳 China",
        "institution": "Technical University of Denmark",
        "pi": "Timothy Patrick Jenkins",
        "website": "https://www.bioengineering.dtu.dk/research/research-sections/section-for-biologics-engineering/digital-biotechnology-lab",
        "papers": []
    },
    {
        "region": "Asia",
        "country": "🇰🇷 South Korea",
        "institution": "Seoul National University",
        "pi": "Martin Steinegger",
        "website": "https://steineggerlab.com/en/",
        "papers": []
    }
];

export default labData;