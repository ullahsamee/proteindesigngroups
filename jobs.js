const jobsData = [
    {
        id: "job_baker_001",
        labInfo: {
            pi: "David Baker",
            institution: "University of Washington",
            country: "United States",
            website: "https://www.bakerlab.org/"
        },
        position: {
            title: "Postdoctoral Scholar - Protein Design",
            type: "postdoc",
            deadline: "2025-03-01"
        },
        description: {
            summary: "We are looking for a highly motivated postdoctoral scholar to join our team working on de novo protein design using deep learning methods like RFdiffusion and ProteinMPNN."
        },
        application: {
            url: "https://www.bakerlab.org/jobs/"
        },
        tags: ["protein-design", "deep-learning", "rosetta"]
    },
    {
        id: "job_woolfson_001",
        labInfo: {
            pi: "Dek Woolfson",
            institution: "University of Bristol",
            country: "United Kingdom",
            website: "https://woolfsonlab.wordpress.com/"
        },
        position: {
            title: "PhD Studentship in Synthetic Biology",
            type: "phd",
            deadline: "2025-01-15"
        },
        description: {
            summary: "A fully funded PhD position is available to work on the design of new protein assemblies and materials. The project involves both computational design and experimental characterization."
        },
        application: {
            url: "https://woolfsonlab.wordpress.com/vacancies/"
        },
        tags: ["synthetic-biology", "protein-assemblies", "phd"]
    },
    {
        id: "job_fleishman_001",
        labInfo: {
            pi: "Sarel Fleishman",
            institution: "Weizmann Institute of Science",
            country: "Israel",
            website: "https://www.weizmann.ac.il/Biomolecular_Sciences/Fleishman/"
        },
        position: {
            title: "Research Scientist - Antibody Engineering",
            type: "research-scientist",
            deadline: "Open until filled"
        },
        description: {
            summary: "Join our team to develop new methods for computational antibody design. We are seeking an experienced researcher with a background in structural biology and protein engineering."
        },
        application: {
            url: "https://www.weizmann.ac.il/Biomolecular_Sciences/Fleishman/join-us"
        },
        tags: ["antibody-design", "computational-biology"]
    }
];

export default jobsData;
